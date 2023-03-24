import { assign } from 'lodash-es'
import { json } from '../config'
import request from './request'
import type {
  MaterialSalesPrice,
  MaterialSalesPriceListParams
} from '@angelyeast/models/es/market/materialSalesPrice'
import type { AngelResponse } from '@angelyeast/types/request'

/**
 * 条件搜索
 */
export const searchByCondition = (data: MaterialSalesPriceListParams = {}) =>
  request.post<any, AngelResponse<MaterialSalesPrice>>(
    '/materialSalesPrice/searchByCondition',
    assign(
      {
        page: 1,
        rows: 10,
        sort: 'msp.beginDate',
        order: 'asc'
      },
      data
    ),
    json
  )

/**
 * 分页查询所有
 */
export const findAll = (data: MaterialSalesPriceListParams = {}) =>
  request.post<any, AngelResponse<MaterialSalesPrice>, MaterialSalesPriceListParams>(
    '/materialSalesPrice/findAll',
    assign({ page: 1, rows: 10 }, data)
  )

/**
 * 查询单个
 */
export const findEntity = (data = {}) =>
  request.post<any, AngelResponse<MaterialSalesPrice>>('/materialSalesPrice/findEntity', data)

/**
 * 创建
 */
export const create = (data = {}) =>
  request.post<any, AngelResponse<MaterialSalesPrice>>('/materialSalesPrice/save', data)

/**
 * 更新
 */
export const update = (data = {}) =>
  request.post<any, AngelResponse<MaterialSalesPrice>>('/materialSalesPrice/update', data)

/**
 * 删除
 */
export const remove = (data = {}) =>
  request.post<any, AngelResponse<MaterialSalesPrice>>('/materialSalesPrice/delete', data)
