import type { AxiosResponse } from 'axios'
import { get } from 'lodash-es'

export default {
  success: (response: AxiosResponse) => {
    /**
     * fullReturn 是否全量返回结果; 如果为false, 则只返回response.data
     */
    const fullReturn = get(response.config, 'fullReturn', false)
    return fullReturn ? response : response.data
  },
  error: (error) => {
    const { message } = error
    return {
      success: false,
      message
    }
  }
}
