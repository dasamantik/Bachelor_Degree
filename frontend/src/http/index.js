import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3002/api',
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  config.headers['Content-Type'] = 'application/json';
  return config;
});

export default $api;
