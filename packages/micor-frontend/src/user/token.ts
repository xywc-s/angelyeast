import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import { useStorage } from '@vueuse/core'
import { useService } from '@angelyeast/service'
import { useNotify } from '@angelyeast/repository'
import { decode } from 'js-base64'
import { useAppInstance } from '../app/instance'
import { useDate } from '../app/date'
import { useUser } from './user'
import { usePermission } from './permission'
import type { JWT } from '@angelyeast/model'

const tokenStorage = useStorage('Middle-Api-Token', '')
export function useToken() {
  const { mainApp } = useAppInstance()
  const { getUserInfo } = useUser()
  const { setPermissionList } = usePermission()

  const jwt = ref<JWT>()
  const accessToken = computed(() => mainApp.value?.$store?.getters?.token ?? tokenStorage.value)

  /** 检查accessToken是否有效 */
  function checkTokenValid() {
    if (!accessToken.value) return false
    const exp = JSON.parse(decode(accessToken.value.split('.')[1])).exp
    return exp ? dayjs.unix(exp).isAfter(useDate().serverTime.value) : false
  }

  /** 是否配置了开发token */
  function hasDevToken() {
    return Boolean(import.meta.env.VITE_USER_TOKEN && import.meta.env.VITE_USER_CODE)
  }

  /** 使用开发token登录 */
  async function devLogin() {
    const { object, message } = await useService('Auth').loginForDev({
      code: import.meta.env.VITE_USER_CODE,
      token: import.meta.env.VITE_USER_TOKEN
    })
    if (!object) useNotify(message, 'error')
    else setJWT(JSON.parse(object))
  }

  function setJWT(_jwt: JWT) {
    jwt.value = _jwt
    localStorage.setItem('Middle-Api-Token', _jwt.access_token)
    localStorage.setItem('Middle-Api-Refresh-Token', _jwt.refresh_token)
    setPermissionList(_jwt.permissionList)
    getUserInfo(_jwt.id)
  }

  return {
    jwt,
    accessToken,
    /** 检查accessToken是否有效 */
    checkTokenValid,
    /** 是否配置了开发token */
    hasDevToken,
    /** 使用开发token登录 */
    devLogin,
    setJWT
  }
}
