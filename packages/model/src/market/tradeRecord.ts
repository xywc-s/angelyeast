import type { ExtractPropTypes } from 'vue'
import type { Pager, Sort } from '@angelyeast/types/request'
import type { Trade } from './trade'

//FIXME
export const tradeRecord = {
  salesOrganizationCode: '销售组织编号',
  orderNo: '订单号',
  distributorCode: '客户编号',
  shipAddressCode: '送达方编号',
  date: '消息接收时间',
  orderDate: '下单时间',
  auditDate: '审核时间',
  orderStatus: '订单状态',
  orderAmount: '订单金额',
  versionId: '版本号',
  sapOrderNo: '推SAP单号',
  orderJson: '原始数据json'
}

export type TradeRecord = Required<ExtractPropTypes<typeof tradeRecord>> & {
  trade: Trade
}
export type TradeRecordFuzzySearchParams = {
  /**
   * 模糊匹配关键字
   */
  data: string
}
export type TradeRecordListParams = Partial<Pager & Sort & TradeRecordFuzzySearchParams>
