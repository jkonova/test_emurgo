import ImageGallery from 'react-image-gallery';
import React, {useContext, useEffect, useState} from 'react';
import {ServicesContext} from '../contexts/services.context';
import {Link} from 'react-router-dom';
import {Image} from '../interfaces/image.interfaces';

function Images() {
    const {uploadService} = useContext(ServicesContext);
    const [images, setImages] = useState([] as Image[]);

    useEffect(() => {
        const subscription = uploadService.images$.subscribe((_images: Image[]) => {
            setImages(_images);
        });

        return (): void => {
            subscription.unsubscribe();
        };
    }, [uploadService.images$]);

    return (
        <div>
            Images
            <ImageGallery items={images}/>
            <Link to="/home">Home</Link>
        </div>
    );
}

export default Images;