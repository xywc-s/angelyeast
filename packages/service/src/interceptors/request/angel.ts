import type { InternalAxiosRequestConfig } from 'axios'
import type { AngelMicroServeRequestConfig } from '../../config'

export default {
  success: (config: InternalAxiosRequestConfig & AngelMicroServeRequestConfig) => {
    if (!config.serveAuth) return config
    const userStr = localStorage.getItem('user')
    if (userStr) {
      try {
        const user = JSON.parse(userStr)
        config.headers.Authorization = user.access_token
      } catch (error) {
        console.error(error)
      }
    }
    return config
  },
  error: (error: any) => {
    return error
  }
}
