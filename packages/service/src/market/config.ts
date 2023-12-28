import { assign } from 'lodash-es'
import { json } from '../config'
import request from './request'
import type { Config, ConfigListParams } from '@angelyeast/model'
import type { AngelResponse } from '@angelyeast/types'

/**
 * 条件搜索
 * @param {*} data
 */
export const searchByCondition = (data = {}) =>
  request.post<any, AngelResponse<Config>>('/config/searchByCondition', data, json)

/**
 * 分页查询所有
 */
export const findAll = (data: ConfigListParams = {}) =>
  request.post<any, AngelResponse<Config>, ConfigListParams>(
    '/config/findAll',
    assign({ page: 1, rows: 10 }, data)
  )

/**
 * 查询单个
 */
export const findEntity = (data = {}) =>
  request.post<any, AngelResponse<Config>>('/config/findEntity', data)

/**
 * 创建
 */
export const create = (data = {}) => request.post<any, AngelResponse<Config>>('/config/save', data)

/**
 * 更新
 */
export const update = (data = {}) =>
  request.post<any, AngelResponse<Config>>('/config/update', data)

/**
 * 删除
 */
export const remove = (data = {}) =>
  request.post<any, AngelResponse<Config>>('/config/delete', data)
