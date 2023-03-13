import type { AxiosResponse } from 'axios'
import { get } from 'lodash-es'

export default {
  success: (response: AxiosResponse) => {
    /**
     * fullReturn 是否全量返回结果; 如果为false, 则只返回response.data
     * autoNotify 是否由拦截器代理消息提示
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
