import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tqi-evolution-2022.herokuapp.com'
})

api.interceptors.request.use(config => {
  const token = localStorage.getItem('@TQI:Token') || '';
  config.headers = {
    'Authorization': `Bearer ${token}`,
  }

  return config;
})

export default api;