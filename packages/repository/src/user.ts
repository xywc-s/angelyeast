import { ref } from 'vue'
import { assign } from 'lodash-es'
import { Auth } from '@angelyeast/services'
import type { User, UserListParams } from '@angelyeast/models/es/auth'
import { FetchOptionHooks, useFetch } from './common/fetch'

type LazyReturnType<T extends (...args: any) => Promise<any>> = T extends (
  ...args: any
) => Promise<infer R>
  ? R
  : Promise<any>
/**
 * 获取用户数据
 */
export function useUserList(
  data?: UserListParams,
  options: Options<UserListParams, LazyReturnType<typeof Auth.User.findUserList>> = {
    immediately: true
  }
) {
  const users = ref<User[]>([])
  const _fetch = () =>
    useFetch({
      fn: Auth.User.findUserList,
      params: data ? assign({ rows: 999999 }, data) : { rows: 999999 },
      hooks: {
        success: ({ rows }) => {
          users.value = rows
        }
      }
    })
  if (options?.immediately) _fetch()
  return users
}

interface Options<P, T> {
  hooks?: FetchOptionHooks<P, T>
  /**
   * 是否立即获取数据
   */
  immediately?: boolean
}
