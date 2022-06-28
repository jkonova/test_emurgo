import React, {useContext} from 'react';
import './App.scss';
import {Link} from 'react-router-dom';
import {IconButton} from '@mui/material';
import {PhotoCamera, UploadFile} from '@mui/icons-material';
import {ServicesContext} from './contexts/services.context';

function App() {
    const {uploadService} = useContext(ServicesContext);

    function handleChangePng(e: any) {
        uploadService.images = URL.createObjectURL(e.target.files[0]);
    }

    function handleChangeCsv(e: any) {
        uploadService.sheets = e.target.files[0];
    }

    return (
        <div>
            home
            <nav
                style={{
                    borderBottom: 'solid 1px',
                    paddingBottom: '1rem',
                }}
            >
                <Link to="/images">Images</Link>
                <Link to="/sheets">Sheets</Link>
            </nav>

            <div style={{
                display: 'flex',
                margin: 'auto',
                width: 400,
                flexWrap: 'wrap',
            }}>
                <input accept="image/png" id="icon-button-image" placeholder={'input-image'}
                       type="file" style={{display: 'none'}} onChange={handleChangePng}/>
                <label htmlFor="icon-button-image">
                    <IconButton color="primary" aria-label="upload picture"
                                component="span">
                        <PhotoCamera/>
                    </IconButton>
                </label>
                <input accept="text/csv" id="icon-button-file" onChange={handleChangeCsv}
                       type="file" style={{display: 'none'}}  placeholder={'input-file'}/>
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" aria-label="upload file"
                                component="span">
                        <UploadFile/>
                    </IconButton>
                </label>
            </div>
        </div>
    );
}

export default App;
