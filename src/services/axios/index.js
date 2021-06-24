import axios from 'axios';
import { timeout } from 'q';

const api = axios.create({
    baseURL: "hottp://localhost:3000/api/",
    timeout: 3000,
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

export default api;

