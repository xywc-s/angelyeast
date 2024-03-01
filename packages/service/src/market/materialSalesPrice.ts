import { assign } from 'lodash-es'
import { getRequestInstance } from './request'
import { generateBaseApi } from '../common/generateBaseApi'
import type { MaterialSalesPrice, MaterialSalesPriceListParams } from '@angelyeast/model'

const {
  searchByCondition: search,
  findAll: getAll,
  findEntity,
  create,
  remove,
  update
} = generateBaseApi<MaterialSalesPrice>(getRequestInstance, 'materialSalesPrice')

/**
 * 条件搜索
 * @default { page: 1, rows: 10, sort: 'msp.beginDate', order: 'asc'}
 */
export const searchByCondition = (
  ...args: Parameters<typeof search<MaterialSalesPriceListParams>>
) =>
  search(
    assign(
      {
        page: 1,
        rows: 10,
        sort: 'msp.beginDate',
        order: 'asc'
      },
      args[0]
    ),
    args[1]
  )

/**
 * 分页查询所有
 * @default {page: 1, rows: 10}
 */
export const findAll = (...args: Parameters<typeof getAll<MaterialSalesPriceListParams>>) =>
  getAll(assign({ page: 1, rows: 10 }, args[0]), args[1])

export { findEntity, create, remove, update }
