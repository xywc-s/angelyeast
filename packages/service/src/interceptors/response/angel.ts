import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { AngelMicroServeRequestConfig } from '../../config'

export default {
  success: (response: AxiosResponse) => {
    const config: InternalAxiosRequestConfig & AngelMicroServeRequestConfig = response.config
    return config.fullReturn ? response : response.data
  },
  error: (error: any) => {
    const { message } = error
    return {
      success: false,
      message
    }
  }
}
