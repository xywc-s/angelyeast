import { assign } from 'lodash-es'
import { generateBaseApi, getRequestInstance } from '../common'
import type { SalesOrganizationConfig, SalesOrganizationConfigListParams } from '@angelyeast/model'

export const {
  searchByCondition,
  findAll: getAll,
  findEntity,
  create,
  remove,
  update
} = generateBaseApi<SalesOrganizationConfig>('salesOrganizationConfig', {
  instance: () => getRequestInstance('Market')
})

/**
 * 分页查询所有
 * @default {page: 1, rows: 10}
 */
export const findAll = (...args: Parameters<typeof getAll<SalesOrganizationConfigListParams>>) =>
  getAll(assign({ page: 1, rows: 10 }, args[0]), args[1])
