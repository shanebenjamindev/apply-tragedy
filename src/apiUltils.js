import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_LOCAL_API,
})

// import.meta.env.VITE_API_URL
export default api;