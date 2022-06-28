import React from 'react';
import UploadService from '../services/upload.service';

export const serviceMapper = {
    uploadService: new UploadService()
};

export const ServicesContext = React.createContext(serviceMapper);
