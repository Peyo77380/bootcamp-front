import axios from "axios";

    // For common config
    axios.defaults.headers.post["Content-Type"] = "application/json";

    const api = axios.create({
        baseURL: 'http://localhost/api/'
    });

    const api_ms_room = axios.create({
        baseURL: 'http://localhost:8000/api/v1/'
    });


    export {
      api,
      api_ms_room
    };