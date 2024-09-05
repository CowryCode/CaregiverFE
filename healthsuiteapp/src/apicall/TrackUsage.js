import React, { useEffect, useState } from 'react';
import axiosInstance from './AxiosInstance';
import { useLocation , useNavigate} from 'react-router-dom';
import LocalStorageService from '../utils/LocalStorageService';

const TrackUsage = () => {
    //const [loading, setLoading] = useState({});
    // const [successful, setSuccessful] = useState(false);
    const [payload, setPayload] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setPayload(payload);
        
    }, [location]);

    const trackLastDateUser = async () => {
          const profile = LocalStorageService.getItem('profile');
          const date = JSON.stringify(profile.lastUsedDate) ;
          const today = new Date();
          const savedDate = new Date(date);

          console.log(`Today Date : ${today}`);
          console.log(`Saved Date : ${savedDate}`);

        if(today > savedDate || today < savedDate){
            axiosInstance.get('/caregiver/v1/save-presence')
            .then(response => {
                console.info('Successful', response);
            })
            .catch(error => {
                console.error('Error', error);
            });
        }

        axiosInstance.get('/caregiver/v1/test-token')
            .then(response => {
                console.log(`Token is Valid`);
            })
            .catch(error => {
                console.error('Error', error);
                LocalStorageService.clear();
                navigate(`/login`);
            });
    };

    return { trackLastDateUser };
};

export default TrackUsage;
