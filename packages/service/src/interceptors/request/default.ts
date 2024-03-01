import type { InternalAxiosRequestConfig } from 'axios'

export default {
  success: (config: InternalAxiosRequestConfig) => {
    return config
  },
  error: (error) => {
    return error
  }
}
