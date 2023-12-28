import { assign } from 'lodash-es'
import { json } from '../config'
import request from './request'
import type { Trade, TradeListParams } from '@angelyeast/models/es/market/trade'
import type { AngelResponse } from '@angelyeast/types/request'

/**
 * 条件搜索
 */
export const searchByCondition = (data: TradeListParams = {}) =>
  request.post<any, AngelResponse<Trade>>(
    '/trade/searchByCondition',
    assign({ page: 1, rows: 10 }, data),
    json
  )

/**
 * 分页查询所有
 */
export const findAll = (data: TradeListParams = {}) =>
  request.post<any, AngelResponse<Trade>, TradeListParams>(
    '/trade/findAll',
    assign({ page: 1, rows: 10 }, data)
  )

/**
 * 查询单个
 */
export const findEntity = (data = {}) =>
  request.post<any, AngelResponse<any, Trade>>('/trade/findEntity', data)

/**
 * 创建
 */
export const create = (data = {}) => request.post<any, AngelResponse<Trade>>('/trade/save', data)

/**
 * 更新
 */
export const update = (data = {}) => request.post<any, AngelResponse<Trade>>('/trade/update', data)

/**
 * 删除
 */
export const remove = (data = {}) => request.post<any, AngelResponse<Trade>>('/trade/delete', data)
