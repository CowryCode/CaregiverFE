import React, { useEffect, useState } from 'react';
import axiosInstance from './AxiosInstance';
import { useLocation } from 'react-router-dom';
import LocalStorageService from '../utils/LocalStorageService';
import { Typography } from '@mui/material';

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

    const getFirstTypographyText = (children) => {
        const typographyChildren = React.Children.toArray(children).find(child => {
            return child.type === Typography;
        });
    
        return typographyChildren ? typographyChildren.props.children : null;
    };

    const bookmarkPageUrl = async (pagetitle) => {
        const currentPath = location.pathname;
        const payload = {content: currentPath};
       // const header = getFirstTypographyText(currentPage.props.children);

        console.log(`Page Title: ${pagetitle} The URL ${currentPath}`)

        //   const savedPath = LocalStorageService.getItem('libraryLastPage');

        // axiosInstance.post('/caregiver/v1/update-library-page', payload)
        //     .then(response => {
        //         setSuccessful(response.data);
        //         LocalStorageService.setItem('libraryLastPage', currentPath);
        //     })
        //     .catch(error => {
        //         console.error('Error', error);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });
    };

    return { successful, savePageUrl, bookmarkPageUrl };
};

export default UpdateLibraryLastPage;
