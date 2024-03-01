import { usePost } from './request'
import type { Department } from '@angelyeast/model'
import type { AngelResponse } from '@angelyeast/types'

/**
 * 查询部门及其上级部门
 * @param code 部门编号
 */
export const findDepartmentAndAllParent = (code: string | number) =>
  usePost<AngelResponse<Department>>('/department/findDepartmentAndAllParent', {
    code
  })
