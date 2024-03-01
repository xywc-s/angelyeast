import { useGet, usePost } from './request'

interface BFFResponse<D = any> {
  data: D
  success: boolean
  message: string
}

/** 获取所有应用配置 */
export const getAppsRoutes = <D, R = Record<string, D>>() =>
  useGet<Pick<BFFResponse<R>, 'data'>>('/nacos/findAll')

/** 更新应用配置 */
export const updateAppsRoutes = <D>(data: Record<string, D>) =>
  usePost<Pick<BFFResponse, 'success' | 'message'>>('/nacos/update', data)
