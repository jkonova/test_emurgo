import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('landing on a home page', () => {
  const history = createMemoryHistory()
  history.push('/home')
  render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
  )

  expect(screen.getByText(/home/i)).toBeInTheDocument()
})

test('landing on a images page', () => {
  const history = createMemoryHistory()
  history.push('/images')
  render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
  )

  expect(screen.getByText(/images/i)).toBeInTheDocument()
})

test('landing on a sheets page', () => {
  const history = createMemoryHistory()
  history.push('/sheets')
  render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
  )

  expect(screen.getByText(/sheets/i)).toBeInTheDocument()
})

it('Upload Files', async () => {
    global.URL.createObjectURL = jest.fn();
    const file = new File(['hello'], 'hello.png', {type: 'image/png'})
    const history = createMemoryHistory()
    history.push('/home')
    render(<Router location={history.location} navigator={history}>
        <App />
    </Router>)
    const input = screen.getByPlaceholderText(/input-image/i)
    userEvent.upload(input, file);

    expect(input.files[0]).toStrictEqual(file)
    expect(input.files.item(0)).toStrictEqual(file)
    expect(input.files).toHaveLength(1)
});