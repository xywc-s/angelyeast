// 微服务
import * as Auth from '../auth'
import * as BFF from '../bff'
import * as MDM from '../mdm'
import * as MMS from '../mms'
import * as Market from '../market'
import * as OPEN from '../open'

export const ServiceMap = {
  BFF,
  /** 鉴权中心 */
  Auth,
  /** 主数据库 */
  MDM,
  /** 物料管理系统 */
  MMS,
  /** 营销 */
  Market,
  /** 开放服务 */
  OPEN
}

export type Services = Readonly<typeof ServiceMap>
export type ServiceName = keyof Services | 'default'
