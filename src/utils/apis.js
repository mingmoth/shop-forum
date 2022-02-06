import axios from 'axios'

const baseURL = 'https://mysterious-wave-91363.herokuapp.com/api/'
// const baseURL = 'http://localhost:3000/api'


export const apiHelper = axios.create({ baseURL })

apiHelper.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if(token) {
      config.header['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)