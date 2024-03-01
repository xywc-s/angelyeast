import { assign } from 'lodash-es'
import { getRequestInstance } from './request'
import { generateBaseApi } from '../common/generateBaseApi'
import type { TradeRecord, TradeRecordListParams } from '@angelyeast/model'

export const {
  searchByCondition,
  findAll: getAll,
  findEntity,
  create,
  remove,
  update
} = generateBaseApi<TradeRecord>(getRequestInstance, 'tradeRecord')

/**
 * 分页查询所有
 * @default {page: 1, rows: 10}
 */
export const findAll = (...args: Parameters<typeof getAll<TradeRecordListParams>>) =>
  getAll(assign({ page: 1, rows: 10 }, args[0]), args[1])
