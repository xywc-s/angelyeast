import { assign } from 'lodash-es'
import { json } from '../config'
import request from './request'
import type { SalesOrganization } from '@angelyeast/models/es/mdm/salesOrganization'
import type { AngelResponse } from '@angelyeast/types/request'

/**
 * 条件搜索
 * @param {*} data
 */
export const searchByCondition = (data = {}) =>
  request.post<any, AngelResponse<SalesOrganization>>(
    '/salesOrganization/searchByCondition',
    data,
    json
  )

/**
 * 分页查询所有
 */
export const findAll = (data = {}) =>
  request.post<any, AngelResponse<SalesOrganization>>(
    '/salesOrganization/findAll',
    assign({ page: 1, rows: 10 }, data)
  )

/**
 * 查询单个
 */
export const findEntity = (data = {}) =>
  request.post<any, AngelResponse<any, SalesOrganization>>('/salesOrganization/findEntity', data)

/**
 * 创建
 */
export const create = (data = {}) =>
  request.post<any, AngelResponse<any, string>>('/salesOrganization/save', data)

/**
 * 更新
 */
export const update = (data = {}) =>
  request.post<any, AngelResponse>('/salesOrganization/update', data)

/**
 * 删除
 */
export const remove = (data = {}) =>
  request.post<any, AngelResponse>('/salesOrganization/delete', data)
