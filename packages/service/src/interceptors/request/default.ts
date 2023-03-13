import type { InternalAxiosRequestConfig } from 'axios'

export default {
  success: (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = localStorage.getItem('token') ?? ''
    return config
  },
  error: (error) => {
    return error
  }
}
