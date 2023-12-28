import request from './request'
import { FetchOptionHooks, useFetch } from '@angelyeast/repository'
import type { Department } from '@angelyeast/model'
import type { AngelResponse, LazyReturnType } from '@angelyeast/types'
import { ref } from 'vue'

/**
 * 查询部门及其上级部门
 * @param code 部门编号
 */
export const findDepartmentAndAllParent = (code: string) =>
  request.post<unknown, AngelResponse<Department>>('/department/findDepartmentAndAllParent', {
    code
  })

function useDepartment(code?: string) {
  const department = ref<Department>()
  const departmentCode = code

  return {
    department,
    findDepartmentAndAllParent: (
      code?: string,
      hooks?: FetchOptionHooks<
        Parameters<typeof findDepartmentAndAllParent>[0],
        LazyReturnType<typeof findDepartmentAndAllParent>
      >
    ) =>
      useFetch(findDepartmentAndAllParent, {
        params: code ?? departmentCode,
        hooks
      })
  }
}
export default useDepartment
