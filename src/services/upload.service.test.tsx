import {Observable} from 'rxjs';
import UploadService from './upload.service';

describe('Event buffers service', () => {
    const response: any = [];
    const uService = new UploadService();

    it('should be able to create a service instance', () => {
        expect(uService).toBeDefined();
    });

    it('should have a response', () => {
        expect(response.length).toBe(0);
    });

    it('should return images as observable', () => {
        expect(uService.images$).toBeInstanceOf(Observable);
    });

    it('should return sheets as observable', () => {
        expect(uService.sheets$).toBeInstanceOf(Observable);
    });

    it('should set images', () => {
        let images: any = [];
        const subscription = uService.images$.subscribe((_images: any) => {
            images = _images;
        });

        uService.images = 'asd';
        subscription.unsubscribe();

        expect(images).not.toBe([]);
        expect(images).toEqual([{original: 'asd', thumbnail: 'asd'}]);
    });
});