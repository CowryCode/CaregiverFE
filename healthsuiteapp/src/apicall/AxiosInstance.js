// src/api/axios.js
import axios from 'axios';
import LocalStorageService from '../utils/LocalStorageService';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081', // Replace with your API base URL
});

axiosInstance.interceptors.request.use(config => {
    // const token = '/yq8cWEkErZlmsgY1ndXDTPTCj1P1xZN4smCLOzQ7F1n+xng/JSw7+mCJbDQpMypFJNaMbV6Lks='; // Replace with your actual token logic
    const token = LocalStorageService.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;
