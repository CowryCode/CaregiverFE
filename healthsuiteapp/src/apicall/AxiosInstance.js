// src/api/axios.js
import axios from 'axios';
import LocalStorageService from '../utils/LocalStorageService';
import {getToken} from '../utils/localStorageHelpers'

const axiosInstance = axios.create({
    //baseURL: 'http://localhost:8081', // Replace with your API base URL
    //baseURL: 'http://caregiver4-env.eba-c36jiwcw.ca-central-1.elasticbeanstalk.com',
    baseURL: 'https://caregiverapi.healthensuite.com',
});

axiosInstance.interceptors.request.use(config => {
    // const token = LocalStorageService.getItem('token');
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
