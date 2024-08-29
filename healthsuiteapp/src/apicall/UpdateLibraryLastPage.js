import React, { useEffect, useState } from 'react';
import axiosInstance from './AxiosInstance';
import { useLocation } from 'react-router-dom';
import LocalStorageService from '../utils/LocalStorageService';

const UpdateLibraryLastPage = ({ setLoading, handleLibraryClick }) => {
    //const [loading, setLoading] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [payload, setPayload] = useState({});

    const location = useLocation();

    useEffect(() => {
        setPayload(payload);
        
    }, [location]);

    const savePageUrl = async () => {
        setLoading(true);

        // Get the pathname, which is the URL excluding the base URL
        const currentPath = location.pathname;
        const payload = {content: currentPath};

          const savedPath = LocalStorageService.getItem('libraryLastPage');

          if(savedPath === currentPath ){
            return;
          }

        axiosInstance.post('/caregiver/v1/update-library-page', payload)
            .then(response => {
                setSuccessful(response.data);
                LocalStorageService.setItem('libraryLastPage', currentPath);
            })
            .catch(error => {
                console.error('Error', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { successful, savePageUrl };
};

export default UpdateLibraryLastPage;
