import { assign } from 'lodash-es'
import { json } from '../config'
import request from './request'
import type { TradeRecord, TradeRecordListParams } from '@angelyeast/models/es/market/tradeRecord'
import type { AngelResponse } from '@angelyeast/types/request'

/**
 * 条件搜索
 * @param {*} data
 */
export const searchByCondition = (data = {}) =>
  request.post<any, AngelResponse<TradeRecord>>('/tradeRecord/searchByCondition', data, json)

/**
 * 分页查询所有
 */
export const findAll = (data: TradeRecordListParams = {}) =>
  request.post<any, AngelResponse<TradeRecord>, TradeRecordListParams>(
    '/tradeRecord/findAll',
    assign({ page: 1, rows: 1000 }, data)
  )

/**
 * 查询单个
 */
export const findEntity = (data = {}) =>
  request.post<any, AngelResponse<TradeRecord>>('/tradeRecord/findEntity', data)

/**
 * 创建
 */
export const create = (data = {}) =>
  request.post<any, AngelResponse<TradeRecord>>('/tradeRecord/save', data)

/**
 * 更新
 */
export const update = (data = {}) =>
  request.post<any, AngelResponse<TradeRecord>>('/tradeRecord/update', data)

/**
 * 删除
 */
export const remove = (data = {}) =>
  request.post<any, AngelResponse<TradeRecord>>('/tradeRecord/delete', data)
