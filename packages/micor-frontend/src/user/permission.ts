import { computed } from 'vue'
import { isArray, isString } from 'lodash-es'
import { useStorage } from '@vueuse/core'
import { useAppInstance } from '../app/instance'
import type { PermissionCode, PermissionCodes } from '@angelyeast/model'

const permissionStorage = useStorage<PermissionCodes>('permissionList', [])
export function usePermission() {
  const { mainApp } = useAppInstance()

  const permissionList = computed<PermissionCodes>(
    () => mainApp.value?.$store?.getters?.permissionList ?? permissionStorage.value
  )

  /** 当前用户是否有指定权限 */
  function hasPermission(permission?: PermissionCode | PermissionCodes) {
    if (!permission) return true
    if (isString(permission)) return permissionList.value.findIndex((v) => permission === v) > -1
    if (isArray(permission)) return permissionList.value.some((v) => permission.includes(v))
    return true
  }

  function setPermissionList(permissionList: PermissionCodes) {
    permissionStorage.value = permissionList
  }

  return {
    permissionList,
    setPermissionList,
    /** 当前用户是否有指定权限 */
    hasPermission
  }
}
