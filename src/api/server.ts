import axios from "axios";
export const SERVER_URL = "https://jsonplaceholder.typicode.com";

const server = axios.create({
    baseURL: SERVER_URL,
    params: {
        Size: 100,
        Page: 1,
        Sort: "Default",
    },
});
server.interceptors.request.use(
    (config) => {
        if (!config.headers["Content-Type"]) {
            config.headers["Content-Type"] = "application/json";
        }
        return config;
    },
    (error) => {
        return error;
    }
);
export default server