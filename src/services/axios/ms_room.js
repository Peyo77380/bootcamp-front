import axios from "axios";

const api_ms_room = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    timeout: 10000,
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});


export default api_ms_room;