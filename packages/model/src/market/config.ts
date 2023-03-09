import type { Pager, Sort } from '@angelyeast/types/request'
import type { ExtractPropTypes } from 'vue'

export const config = {
  code: 'code',
  openId: 'openId',
  tenantId: 'tenantId',
  ticket: 'ticket',
  appId: 'appId',
  appKey: 'appKey',
  appSecret: 'appSecret',
  accessToken: 'accessToken',
  json: 'json',
  status: '状态'
}

export type Config = Required<ExtractPropTypes<typeof config>>
type ConfigFuzzySearchParams = {
  /**
   * 模糊匹配关键字
   */
  data: string
}
export type ConfigListParams = Partial<Pager & Sort & ConfigFuzzySearchParams>
