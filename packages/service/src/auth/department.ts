import request from './request'
import type { Department } from '@angelyeast/models/es/auth'
import type { AngelResponse } from '@angelyeast/types/request'

/**
 * 查询部门及其上级部门
 * @param code 部门编号
 */
export const findDepartmentAndAllParent = (code: string) =>
  request.post<unknown, AngelResponse<Department>>('/department/findDepartmentAndAllParent', {
    code
  })
