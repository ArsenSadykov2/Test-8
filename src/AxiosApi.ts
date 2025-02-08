import axios from 'axios';

const axiosApi = axios.create({

    baseURL: 'https://console.firebase.google.com/project/test-8-8461c/database/test-8-8461c-default-rtdb/data/~2F'

});

export default axiosApi;