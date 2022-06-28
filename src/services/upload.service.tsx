import {BehaviorSubject, Observable} from 'rxjs';
import {Image} from '../interfaces/image.interfaces';
import Papa from 'papaparse';
import {Sheet} from '../interfaces/sheet.interfaces';

export default class UploadService {
    private _images: BehaviorSubject<Image[] | any> = new BehaviorSubject([]);
    private _sheets: BehaviorSubject<Sheet[] | any> = new BehaviorSubject([]);

    public set images(value: string) {
        this._images.next([...this._images.getValue(), {original: value, thumbnail: value}]);
    }

    public get images$(): Observable<Image[]> {
        return this._images.asObservable();
    }

    public set sheets(file: any) {
        if (file) {
            Papa.parse(file, {
                    complete: (results: any) => {
                        const total = results.data.reduce((prevValue: any, curValue: any) => {
                            return (Number(curValue)) ? prevValue + Number(curValue) : prevValue;
                        }, 0);
                        this._sheets.next([...this._sheets.getValue(), {filename: file.name, total}]);
                    }
                }
            )
        }
    }

    public get sheets$(): Observable<Sheet[]> {
        return this._sheets.asObservable();
    }
}