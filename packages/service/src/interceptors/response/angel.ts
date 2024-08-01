import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import type { AngelMicroServeRequestConfig } from '../../config'

export default {
  success: (response: AxiosResponse) => {
    const config: InternalAxiosRequestConfig & AngelMicroServeRequestConfig = response.config
    console.log('🚀 ~ config:', config)
    console.log('🚀 ~ response:', typeof response.data)
    const data = config.fullReturn ? response : response.data
    console.log('🚀 ~ data:', response)
    return data
  },
  error: (error: any) => {
    const { message } = error
    return {
      success: false,
      message
    }
  }
}
