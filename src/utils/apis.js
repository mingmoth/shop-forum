import axios from 'axios'

const baseURL = 'https://mysterious-wave-91363.herokuapp.com'
// const baseURL = 'http://localhost:3000'

export const apiHelper = axios.create({
  baseURL, 
  // withCredentials: true, 
  // crossDomain: true
 })

apiHelper.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if(token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  err => Promise.reject(err)
)