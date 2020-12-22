import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://stripe-node-react.herokuapp.com/'
})

export default axiosInstance