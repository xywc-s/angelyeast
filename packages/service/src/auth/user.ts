import { merge } from 'lodash-es'
import { ref, Ref } from 'vue'
import { useFetch } from '@angelyeast/repository'
import { json, Options } from '../config'
import { usePost } from './request'
import type { AngelResponse, LazyReturnType } from '@angelyeast/types'
import type { User, UserListParams, UserInfo } from '@angelyeast/model'

/**
 * @desc: 根据唯一键（id、code、phone、userid）查用户
 */
export const findByUnique = (unique: string) =>
  usePost<AngelResponse<unknown, User>>('/user/findByUnique', { unique })

/**
 * 通过codes批量查询用户
 * @param codes 要查询的用户编号集合
 */
export const findUserByCodes = (codes: string[]) =>
  usePost<AngelResponse<User>>('/user/findByCodes', { codes }, json)

/**
 * 查询用户
 * @default {page: 1, rows: 10}
 */
export const findUserList = (data: UserListParams = {}) =>
  usePost<AngelResponse<UserInfo>>('/user/findUserList', merge({ page: 1, rows: 10 }, data))

/** 用户列表 */
export function useUserList(
  options: Partial<Options<UserListParams, LazyReturnType<typeof findUserList>>> = {
    params: {
      page: 1,
      rows: 999999
    },
    immediately: true
  }
): [Ref<UserInfo[]>, () => void] {
  /** 用户数据集 */
  const users = ref<UserInfo[]>([])
  /** 获取数据 */
  const _fetch = (params: UserListParams = options.params!) => {
    useFetch(findUserList, {
      // 默认处理前置
      onSuccess: ({ rows }) => {
        users.value = rows
      },
      ...options,
      // 覆写参数后置
      params
    })
  }

  if (options?.immediately) _fetch()
  return [users, _fetch]
}
