import axios from 'axios';

const api =  axios.create({
    baseURL: 'https://example-ecommerce.herokuapp.com',
    headers: {'Content-Type': 'application/json'}
});

export default api;