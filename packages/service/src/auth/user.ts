import { merge } from 'lodash-es'
import { json } from '../config'
import { usePost } from './request'
import type { AngelResponse } from '@angelyeast/types'
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
