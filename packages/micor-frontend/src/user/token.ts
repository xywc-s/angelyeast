import { computed } from 'vue'
import dayjs from 'dayjs'
import { useStorage } from '@vueuse/core'
import { decode } from 'js-base64'
import { useAppInstance } from '../app/instance'
import { useDate } from '../app/date'
import { useUser } from './user'
import { usePermission } from './permission'
import type { JWT, Token } from '@angelyeast/model'

const tokenStorage = useStorage('Middle-Api-Token', '')
export function useToken() {
  const { mainApp, isChildApp } = useAppInstance()

  const accessToken = computed(() => mainApp.value?.$store?.getters?.token ?? tokenStorage.value)
  const accessTokenInfo = computed<Token>(() =>
    accessToken.value ? JSON.parse(decode(accessToken.value.split('.')[1])) : null
  )

  async function initState() {
    if (accessTokenInfo.value) {
      const { permissionList, code } = accessTokenInfo.value
      const { setPermissionList } = usePermission()
      setPermissionList(permissionList)
      const { getUserInfo } = useUser()
      await getUserInfo(code)
    }
  }

  /** 检查accessToken是否有效 */
  function checkTokenValid() {
    if (!accessToken.value) return false
    const exp = accessTokenInfo.value.exp
    return exp ? dayjs.unix(exp).isAfter(useDate().serverTime.value) : false
  }

  function setJWT(jwt: JWT) {
    localStorage.setItem('Middle-Api-Token', jwt.access_token)
    localStorage.setItem('Middle-Api-Refresh-Token', jwt.refresh_token)
    initState()
  }

  async function checkLoginState() {
    // 子应用默认已登录, 登录由主应用控制
    if (isChildApp.value) return true
    // accessToken不存在 或者 存在但已过期
    if (!accessToken.value || !checkTokenValid()) return false
    //accessToken存在并且未过期
    await initState()
    return true
  }

  return {
    accessToken,
    /** 初始化token相关的状态数据 */
    initState,
    /** 检查accessToken是否有效 */
    checkTokenValid,
    /** 检查当前是否登录 */
    checkLoginState,
    setJWT
  }
}
