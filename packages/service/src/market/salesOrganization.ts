import { assign } from 'lodash-es'
import { generateBaseApi, RequestInstance } from '../common'
import type { SalesOrganization } from '@angelyeast/model'

export const {
  searchByCondition,
  findAll: getAll,
  findEntity,
  create,
  remove,
  update
} = generateBaseApi<SalesOrganization>('salesOrganization', {
  instance: () => RequestInstance.getInstance('Market')
})

/**
 * 分页查询所有
 * @default {page: 1, rows: 10}
 */
export const findAll = (...args: Parameters<typeof getAll>) =>
  getAll(assign({ page: 1, rows: 10 }, args[0]), args[1])
