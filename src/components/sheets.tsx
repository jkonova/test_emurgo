import React, {useContext, useEffect, useState} from 'react';
import {ServicesContext} from '../contexts/services.context';
import {Sheet} from '../interfaces/sheet.interfaces';
import {Link} from 'react-router-dom';

function Sheets() {
    const {uploadService} = useContext(ServicesContext);
    const [sheets, setSheets] = useState([] as Sheet[]);

    useEffect(() => {
        const subscription = uploadService.sheets$.subscribe((_sheets: Sheet[]) => {
            setSheets(_sheets);
        });

        return (): void => {
            subscription.unsubscribe();
        };
    }, [uploadService.sheets$]);

    return (
        <div>
            Sheets
            <ul>
                {sheets.map((obj, index) => {
                    return <li key={ index }>{obj.filename} - {obj.total}</li>;
                })}
            </ul>
            <Link to="/home">Home</Link>
        </div>
    );
}

export default Sheets;