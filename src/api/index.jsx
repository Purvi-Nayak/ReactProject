import axios from 'axios';
import {METHODS} from '../constant';
const api = axios.create({
    baseURL: 'https://fakestoreapi.in/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
api.interceptors.request.use(
    (config) => {
        // You can modify the request config here if needed
        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);
api.interceptors.response.use(
    (response) => {
    
        return response.data;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);
export const setHeaders = (key = '', value) => {
    api.defaults.headers[key] = value;
}


const client = ({ method = METHODS.GET, url = '', withCredentials = false, auth, data, ...otherParams }) => {
    return api({
        method,
        url,
        withCredentials,
        auth,
        data,
        ...otherParams
    });
}
export default client;