import axios from 'axios'

const http = axios.create({
    baseURL: '/api',
    timeout: 10000,
})

http.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['token'] = `${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

http.interceptors.response.use(
    response => {
        if (response.data.code != 200) {
            if (response.data.code == 500) {
                console.log("服务器内部错误:" + response.data.message)
            } else if (response.data.code == 401) {
                console.log("杈限不足!")
            } else {
                console.log("未知错误!")
            }
        }
        return response.data
    },
    error => {
        return Promise.reject(error);
    }
)


export default http