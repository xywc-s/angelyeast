import type { InternalAxiosRequestConfig } from 'axios'
import type { AngelMicroServeRequestConfig } from '../../config'

export default {
  success: (config: InternalAxiosRequestConfig & AngelMicroServeRequestConfig) => {
    if (!config.serveAuth) return config
    const token = localStorage.getItem('Middle-Api-Token')
    if (token) config.headers.Authorization = token
    return config
  },
  error: (error: any) => {
    return error
  }
}
