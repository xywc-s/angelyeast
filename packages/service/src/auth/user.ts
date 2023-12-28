import { merge, assign } from 'lodash-es'
import { ref, Ref } from 'vue'
import { useFetch } from '@angelyeast/repository'
import { json, Options } from '../config'
import request from './request'
import type { AngelResponse, LazyReturnType } from '@angelyeast/types'
import type { User, UserListParams } from '@angelyeast/model'

/**
 * @desc: 根据唯一键（id、code、phone、userid）查用户
 */
export const findByUnique = (unique: string) =>
  request.post<unknown, AngelResponse<unknown, User>>('/user/findByUnique', { unique })

/**
 * 通过codes批量查询用户
 * @param codes 要查询的用户编号集合
 */
export const findUserByCodes = (codes: string[]) =>
  request.post<unknown, AngelResponse<User>>('/user/findByCodes', { codes }, json)

/**
 * 查询用户
 * @default {page: 1, rows: 10}
 */
export const findUserList = (data: UserListParams = {}) =>
  request.post<unknown, AngelResponse<User>>(
    '/user/findUserList',
    merge({ page: 1, rows: 10 }, data)
  )

/** 用户列表 */
export function useUserList(
  data: UserListParams,
  options: Partial<Options<UserListParams, LazyReturnType<typeof findUserList>>> = {
    immediately: true
  }
): [Ref<User[]>, () => void] {
  /** 用户数据集 */
  const users = ref<User[]>([])
  /** 获取数据 */
  const _fetch = () => {
    const defaultParams = {
      page: 1,
      rows: 999999
    }
    useFetch(findUserList, {
      params: data ? assign(defaultParams, data) : defaultParams,
      loading: options?.loading,
      hooks: {
        success: ({ rows }) => {
          users.value = rows
        },
        ...options?.hooks
      }
    })
  }

  if (options?.immediately) _fetch()
  return [users, _fetch]
}
