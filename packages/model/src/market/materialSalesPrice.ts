import type { Pager, Sort } from '@angelyeast/types/request'
import type { ExtractPropTypes } from 'vue'

export const materialSalesPrice = {
  salesOrganization: '销售组织',
  distributor: '经销商',
  material: '物料',
  salesPrice: '单价',
  unit: '计量单位',
  currency: '币种',
  shipAddress: '送达方',
  distributionChannel: '分销渠道',
  beginDate: '价格起始日',
  endDate: '价格到期日',
  conditionNumber: '价格条件编号',
  deleteMark: '删除标识',
  status: '状态'
}

export type MaterialSalesPrice = Required<ExtractPropTypes<typeof materialSalesPrice>>
export type MaterialSalesPriceFuzzySearchParams = {
  salesOrganizationCode: string
  distributorCode: string
  materialCode: string
  distributionChannel: string
  status: '正常' | '已停用'
}
export type MaterialSalesPriceListParams = Partial<
  Pager & Sort & MaterialSalesPriceFuzzySearchParams
>
