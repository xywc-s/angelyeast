import { assign } from 'lodash-es'
import { getRequestInstance } from './request'
import { generateBaseApi } from '../common/generateBaseApi'
import type { Trade, TradeListParams } from '@angelyeast/model'

export const {
  searchByCondition: search,
  findAll: getAll,
  findEntity,
  create,
  remove,
  update
} = generateBaseApi<Trade>(getRequestInstance, 'trade')

/**
 * 条件搜索
 * @default {page: 1, rows: 10}
 */
export const searchByCondition = (...args: Parameters<typeof search<TradeListParams>>) =>
  search(assign({ page: 1, rows: 10 }, args[0]), args[1])

/**
 * 分页查询所有
 * @default {page: 1, rows: 10}
 */
export const findAll = (...args: Parameters<typeof getAll<TradeListParams>>) =>
  getAll(assign({ page: 1, rows: 10 }, args[0]), args[1])
