import { assign } from 'lodash-es'
import { json } from '../config'
import request from './request'
import type {
  SalesOrganizationConfig,
  SalesOrganizationConfigListParams
} from '@angelyeast/models/es/market/salesOrganizationConfig'
import type { AngelResponse } from '@angelyeast/types/request'

/**
 * 条件搜索
 */
export const searchByCondition = (data = {}) =>
  request.post<any, AngelResponse<SalesOrganizationConfig>>(
    '/salesOrganizationConfig/searchByCondition',
    data,
    json
  )

/**
 * 分页查询所有
 */
export const findAll = (data: SalesOrganizationConfigListParams = {}) =>
  request.post<any, AngelResponse<SalesOrganizationConfig>, SalesOrganizationConfigListParams>(
    '/salesOrganizationConfig/findAll',
    assign({ page: 1, rows: 10 }, data)
  )

/**
 * 查询单个
 */
export const findEntity = (data = {}) =>
  request.post<any, AngelResponse<SalesOrganizationConfig>>(
    '/salesOrganizationConfig/findEntity',
    data
  )

/**
 * 创建
 */
export const create = (data = {}) =>
  request.post<any, AngelResponse<SalesOrganizationConfig>>('/salesOrganizationConfig/save', data)

/**
 * 更新
 */
export const update = (data = {}) =>
  request.post<any, AngelResponse<SalesOrganizationConfig>>('/salesOrganizationConfig/update', data)

/**
 * 删除
 */
export const remove = (data = {}) =>
  request.post<any, AngelResponse<SalesOrganizationConfig>>('/salesOrganizationConfig/delete', data)
