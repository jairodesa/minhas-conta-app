import axios from 'axios'
import store from '../store/store'


const http = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
        'Accept': 'application/json',
    }

})

http.interceptors.request.use(function (config) {
    const token = store.state.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function (erro) {
    return Promise.reject(erro)
})

export default http