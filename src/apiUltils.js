import axios from "axios";

const api = axios.create({
    baseURL: "https://apply-tragedy-backend.onrender.com/api",
})

export default api;