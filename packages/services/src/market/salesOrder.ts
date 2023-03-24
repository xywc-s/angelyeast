import { assign } from 'lodash-es'
import { json } from '../config'
import request from './request'
import type { AngelResponse } from '@angelyeast/types/request'

/**
 * 分页查询所有
 */
export const findAll = (data = {}) =>
  request.post('/salesOrder/findAll', assign({ page: 1, rows: 10 }, data))

/**
 * 查询单个
 */
export const findEntity = (data = {}) => request.post('/salesOrder/findEntity', data)

/**
 * 创建
 */
export const create = (data = {}) => request.post('/salesOrder/save', data)

/**
 * 更新
 */
export const update = (data = {}) => request.post('/salesOrder/update', data)

/**
 * 删除
 */
export const remove = (data = {}) => request.post('/salesOrder/delete', data)

/**
 * 从SAP查询销售订单和发货单
 */
type SalesOrderAndDeliveryOrderQueryData = {
  salesOrderCode: string
}
export const querySalesOrderAndDeliveryOrderFromSap = (data: SalesOrderAndDeliveryOrderQueryData) =>
  request.post<any, AngelResponse>('/salesOrder/querySalesOrderAndDeliveryOrderFromSap', data, json)
