import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080', // your backend URL
  timeout: 120000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default apiClient;
