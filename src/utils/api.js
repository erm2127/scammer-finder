import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Base URL for your API
});

export default api;