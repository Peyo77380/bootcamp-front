import axios from "axios"

const apiCustomFields = axios.create({
    baseURL: "http://127.0.0.1/api/",
    timeout: 10000,
    withCreditentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

const apiRoomServices = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    timeout: 3000,
    withCreditentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

const apiCRM = axios.create({
    baseURL: "http://0.0.0.0:8086/api/v1/",
    timeout: 10000,
    withCreditentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
});

export { apiCustomFields, apiRoomServices, apiCRM };
