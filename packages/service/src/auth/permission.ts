import { json } from '../config'
import { usePost } from './request'
import type { Permission, RolePermission, UserPermissionCheckResult } from '@angelyeast/model'
import type { AngelResponse } from '@angelyeast/types'

/**
 * 获取角色权限
 * @param {string} roleId 角色id
 */
export const findRolePermissions = (roleId: string) =>
  usePost<AngelResponse<RolePermission>>('/role/findRolePermission', { roleId })

/**
 * 查询用户权限
 * @param userId 用户id
 */
export const findUserPermissions = (userId: string) =>
  usePost<AngelResponse<Permission>>('/permission/getPermissionList', { userId })

/** 更新用户权限 */
export const updateUserPermissions = (data: {
  /** 用户id */
  userId: string
  /** 逗号分隔的权限id */
  permissionIds: string
}) => usePost<AngelResponse>('/userPermission/addUserPermissions', data)

/**
 * 查询当前用户是否具备指定权限
 */
export const checkPermissions = (data: {
  /** 用户编号集合 */
  userCodes: string[]
  /** 权限编号集合 */
  permissionCodes: string[]
}) =>
  usePost<AngelResponse<UserPermissionCheckResult>>(
    '/userPermission/checkUserPermissions',
    data,
    json
  )
