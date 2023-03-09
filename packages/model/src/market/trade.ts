import { ExtractPropTypes } from 'vue'
import type { Pager, Sort } from '@angelyeast/types/request'

//FIXME
export const trade = {
  salesOrganizationCode: '销售组织编号',
  orderNo: '订单号',
  distributorCode: '客户编号',
  shipAddressCode: '送达方编号',
  orderDate: '下单时间',
  auditDate: '审核时间',
  orderStatus: '订单状态',
  newestOrderStatus: '最新状态',
  orderAmount: '订单金额',
  versionId: '版本号',
  sapOrderNo: '推SAP单号',
  sapReturnOrderNo: 'sapReturnOrderNo',
  handleDate: '处理时间',
  handleStatus: '处理状态',
  sapResponse: 'sapResponse',
  orderJson: '原始数据json',
  sapOrderJson: 'sapOrderJson'
}

export type Trade = Required<ExtractPropTypes<typeof trade>>
export type TradeFuzzySearchParams = {
  salesOrganizationCode: string
  distributorCode: string
  orderNo: string
  orderStatus: string
  sapReturnOrderNo: string
  handleStatus: string
}
export type TradeListParams = Partial<Pager & Sort & TradeFuzzySearchParams>
