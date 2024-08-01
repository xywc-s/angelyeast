import { assign } from 'lodash-es'
import { json } from '../config'
import { usePost } from './request'
import { generateBaseApi, RequestInstance } from '../common'
import type { AngelResponse } from '@angelyeast/types'

const {
  findAll: getAll,
  findEntity,
  create,
  remove,
  update
} = generateBaseApi('salesOrder', {
  instance: () => RequestInstance.getInstance('Market')
})

export { findEntity, create, remove, update }

/**
 * 分页查询所有
 * @default {page: 1, rows: 10}
 */
export const findAll = (...args: Parameters<typeof getAll>) =>
  getAll(assign({ page: 1, rows: 10 }, args[0]), args[1])

/**
 * 从SAP查询销售订单和发货单
 */
export const querySalesOrderAndDeliveryOrderFromSap = (data: { salesOrderCode: string }) =>
  usePost<AngelResponse>('/salesOrder/querySalesOrderAndDeliveryOrderFromSap', data, json)
