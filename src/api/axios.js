import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

instance.interceptors.request.use(
    request => {
        console.log(request);
        return request;
    },
    error => {
        console.log(error.response.data);
        return Promise.reject(error)
    }
);

instance.interceptors.response.use(
    response => {
        console.log(response.data);
        return response
    },
    error => {
        console.log(error.response.data);
        return Promise.reject(error)
    }
)

export default instance;