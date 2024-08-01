import { assign } from 'lodash-es'
import { generateBaseApi, RequestInstance } from '../common'
import type { TradeRecord, TradeRecordListParams } from '@angelyeast/model'

export const {
  searchByCondition,
  findAll: getAll,
  findEntity,
  create,
  remove,
  update
} = generateBaseApi<TradeRecord>('tradeRecord', {
  instance: () => RequestInstance.getInstance('Market')
})

/**
 * 分页查询所有
 * @default {page: 1, rows: 10}
 */
export const findAll = (...args: Parameters<typeof getAll<TradeRecordListParams>>) =>
  getAll(assign({ page: 1, rows: 10 }, args[0]), args[1])
