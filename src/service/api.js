import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3003/api';

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Token ${token}` : '';
    
    return config;
})

export default axios;