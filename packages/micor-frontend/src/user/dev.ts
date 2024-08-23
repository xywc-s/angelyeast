import { useService } from '@angelyeast/service'
import { useNotify } from '@angelyeast/repository'
import { useToken } from './token'
type DevLoginData = {
  code: string
  token: string
}
export function useDev(data?: DevLoginData) {
  const { setJWT } = useToken()

  function hasDevToken() {
    return Boolean(data?.code && data.token)
  }

  async function devLogin() {
    if (!data) throw new Error('请设置开发配置!')
    const { object, message } = await useService('Auth').loginForDev(data)
    if (!object) useNotify(message, 'error')
    else setJWT(JSON.parse(object))
  }

  return {
    /** 是否配置了开发token */
    hasDevToken,
    /** 使用开发token登录 */
    devLogin
  }
}
