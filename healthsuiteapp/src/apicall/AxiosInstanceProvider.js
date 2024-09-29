// src/api/axios.js
import axios from 'axios';
import LocalStorageService from '../utils/LocalStorageService';
import {getProviderToken} from '../utils/localStorageHelpers'

const AxiosInstanceProvider = axios.create({
    baseURL: 'http://localhost:8081', // Replace with your API base URL
});

AxiosInstanceProvider.interceptors.request.use(config => {
    // const token = LocalStorageService.getItem('token');
    const token = getProviderToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default AxiosInstanceProvider;
