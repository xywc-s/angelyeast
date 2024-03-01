import { json } from '../config'
import { usePost } from './request'
import type { Pager, Sort } from '@angelyeast/types/request'
import type { ProductListParams } from '@angelyeast/model'

/**
 * 查询接口
 */
export const findAll = (data: Partial<ProductListParams & Pager & Sort>) =>
  usePost(
    '/product/findAllByCondition',
    Object.assign({}, { page: 1, rows: 10, sort: 'updateDate', order: 'desc' }, data),
    json
  )

export const findProduct = (data: {
  /** 物料号 */
  code: string
}) => usePost('/product/findDetail', data, json)

/** 更新产品信息 */
export const update = (data: {
  /** 物料code */
  code: string
  /** 产品类型id */
  productType?: string
  /** OA流程接入字段 */
  dataJson?: Record<string, any>
  /** 中台自定义字段 */
  middleDataJson?: Record<string, any>
}) => usePost('/product/modify', data, json)

/**
 * 所有产品类型
 */
export const findAllTypes = () =>
  usePost('/productType/findAll', {
    page: 1,
    rows: 99999,
    sort: 'parentCode',
    order: 'asc'
  })

/** 创建产品类型 */
export const createProductType = (data = {}) => usePost('/productType/save', data)

/** 更新产品类型 */
export const updateProductType = (data = {}) => usePost('/productType/update', data)

/** 批量添加产品生产商信息 */
export const addProducerBatch = (data: {
  /** 物料codes */
  codes: string[]
  /** 证书id */
  certificateId: string
}) => usePost('/product/addProducerBatch', data, json)

/** 导出产品信息 */
export const exportProducts = (data: Partial<ProductListParams>) =>
  usePost('/product/export', data, json)
