import { useStorage } from '@vueuse/core'
import { computed } from 'vue'
import { useService } from '@angelyeast/service'
import { useNotify } from '@angelyeast/repository'
import { useAppInstance } from '../app/instance'
import type { User } from '@angelyeast/model'

const userStorage = useStorage<User>('user', null)
export function useUser() {
  const { mainApp } = useAppInstance()

  /** 系统当前登录的用户 */
  const user = computed(() => mainApp.value?.$store?.getters?.user ?? userStorage.value)

  function setUser(obj: User) {
    userStorage.value = obj
  }

  /** 根据唯一键（id、code、phone、userid）查用户 */
  async function getUserInfo(unique: string) {
    const { object } = await useService('Auth').User.findByUnique(unique)
    try {
      object.avatar = JSON.parse(object.weChatJson).thumb_avatar.replace(/^http:/, 'https:')
      setUser(object)
      return object
    } catch (e: any) {
      useNotify('获取当前用户微信头像失败', 'error')
      throw new Error(e)
    }
  }

  return {
    /** 系统当前登录的用户 */
    user,
    setUser,
    /** 根据唯一键（id、code、phone、userid）查用户 */
    getUserInfo
  }
}
