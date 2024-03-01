import { BaseConfig } from './config'
// 通用函数
export * from './common'
// 微服务
import * as Auth from './auth'
import * as BFF from './bff'
import * as MDM from './mdm'
import * as MMS from './mms'
import * as Market from './market'
import * as OPEN from './open'

import type { AxiosRequestConfig } from 'axios'

const ServiceMap = {
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
export type ServiceName = keyof Services

/**
 * 设置所有服务的默认配置, 若指定服务名称, 则仅设置指定的服务配置
 */
export function setServiceConfig(config: AxiosRequestConfig): void
export function setServiceConfig(name: ServiceName, config: AxiosRequestConfig): void
export function setServiceConfig(
  /** 服务名或默认配置 */
  nameOrConfig: AxiosRequestConfig | ServiceName,
  /** 指定服务的配置 */
  config?: AxiosRequestConfig
) {
  if (typeof nameOrConfig === 'string') {
    BaseConfig.set(nameOrConfig, config as AxiosRequestConfig)
  } else {
    if (typeof nameOrConfig === 'object') {
      BaseConfig.set('default', nameOrConfig)
    } else {
      throw new Error('[Angelyeast Service] 配置参数有误')
    }
  }
}

/**
 * 使用服务API, 指定名称则返回指定服务, 否则返回所有服务
 * @param name 服务名
 */
export function useService<K extends ServiceName>(name: K): Services[K]
export function useService(): Services
export function useService(name?: ServiceName) {
  if (name) {
    return ServiceMap[name]
  } else {
    return ServiceMap
  }
}
