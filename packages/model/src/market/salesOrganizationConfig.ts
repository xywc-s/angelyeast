import type { Config } from './config'
import type { SalesOrganization } from '../mdm/salesOrganization'
import type { Pager, Sort } from '@angelyeast/types/request'

export const salesOrganizationConfig = {
  salesOrganization: '销售组织',
  config: '配置'
}

export type SalesOrganizationConfig = {
  salesOrganization: SalesOrganization
  config: Config
}
export type SalesOrganizationConfigFuzzySearchParams = {
  /**
   * 模糊匹配关键字
   */
  data: string
}
export type SalesOrganizationConfigListParams = Partial<
  Pager & Sort & SalesOrganizationConfigFuzzySearchParams
>
