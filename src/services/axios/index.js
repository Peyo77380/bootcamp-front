import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/api/",
    timeout: 3000,
    withCreditentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

export default api;

