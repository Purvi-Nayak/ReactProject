import client from '.';
import { METHODS } from '../constant';

export const api = {
    AUTH: {
        login: ({ username, password, ...config }) =>
          client({
            method: METHODS.POST,
            url: '/auth/login',
            data: { username, password },
            baseURL: 'https://fakestoreapi.com', 
            ...config
          }),
      },
  PRODUCTS: {
    getById: ({ id, ...config }) =>
      client({
        url: `/products/${id}`,
        ...config
      }),
    getAll: ({ data, ...config }) => 
      client({ url: '/products', data, ...config }),
    
    get: ({ id, data, ...config }) =>
      client({ url: `/products/${id}`, data, ...config }),
    
    getLimited: ({ limit = 2, data, ...config }) =>
      client({ url: `/products?limit=${limit}`, data, ...config }),
    
    getByPage: ({ page = 1, data, ...config }) =>
      client({ url: `/products?page=${page}`, data, ...config }),
    
    getCategories: ({ data, ...config }) =>
      client({ url: '/products/category', data, ...config }),
    
    getByCategory: ({ type, data, ...config }) =>
      client({ url: `/products/category?type=${type}`, data, ...config }),

    create: ({ data, ...config }) =>
      client({ 
        method: METHODS.POST, 
        url: '/products', 
        data, 
        ...config 
      }),

    update: ({ id, data, ...config }) =>
      client({ 
        method: METHODS.PUT, 
        url: `/products/${id}`, 
        data, 
        ...config 
      }),

    delete: ({ id, ...config }) =>
      client({ 
        method: METHODS.DELETE, 
        url: `/products/${id}`, 
        ...config 
      }),
  },

};