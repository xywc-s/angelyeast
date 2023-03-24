import type { AxiosResponse } from 'axios'

export default {
  success: (response: AxiosResponse) => {
    return response.data
  },
  error: (error) => {
    return {
      success: false,
      message: error?.message ?? error
    }
  }
}
