import axios from "axios"
import { message } from "antd"
import { getToken } from "./auth"

const service = axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        config.headers['X-Token'] = getToken()
        return config
    },
    error => {
        message.error(error)
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 20000) {
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        message.error(error)
        return Promise.reject(error)
    }
)
export default service