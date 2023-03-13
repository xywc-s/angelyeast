import { Ref, ref } from 'vue'
import { assign } from 'lodash-es'
import { useService } from '@angelyeast/services'
import { FetchOptions, useFetch } from './common/fetch'
import type { User, UserListParams } from '@angelyeast/models/es/auth'
import type { LazyReturnType } from '@angelyeast/types'

const Auth = useService('Auth')
/**
 * 获取用户数据
 */
export function useUserList(
  data?: UserListParams,
  options: Options<UserListParams, LazyReturnType<typeof Auth.User.findUserList>> = {
    hooks: {},
    immediately: true
  }
): [Ref<User[]>, () => void] {
  /**
   * 用户数据集
   */
  const users = ref<User[]>([])
  /**
   * 获取数据
   */
  const _fetch = () =>
    useFetch({
      fn: Auth.User.findUserList,
      params: data ? assign({ rows: 999999 }, data) : { rows: 999999 },
      loading: options?.loading,
      hooks: {
        success: ({ rows }) => {
          users.value = rows
        },
        ...options?.hooks
      }
    })
  if (options?.immediately) _fetch()
  return [users, _fetch]
}

interface Options<P, T> extends Pick<FetchOptions<T, P>, 'hooks' | 'loading'> {
  /**
   * 是否立即获取数据
   */
  immediately?: boolean
}
