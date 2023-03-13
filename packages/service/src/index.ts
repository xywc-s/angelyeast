import { BaseConfig, ServiceName } from './config'
import { get } from 'lodash-es'
import type { AxiosRequestConfig } from 'axios'
import * as Auth from './auth'
import * as BFF from './bff'
import * as MDM from './mdm'
import * as Market from './market'
import * as MMS from './mms'

const Services = {
  /**
   * 鉴权中心
   */
  Auth,
  BFF,
  /**
   * 主数据库
   */
  MDM,
  /**
   * 营销数字化
   */
  Market,
  /**
   * 物料管理系统
   */
  MMS
}

/**
 * 设置所有服务的默认配置, 若指定服务名称, 则仅设置指定的服务配置
 */
export function setServiceConfig(config: AxiosRequestConfig): void
export function setServiceConfig(name: ServiceName, config: AxiosRequestConfig): void
export function setServiceConfig(
  /**
   * 服务名或默认配置
   */
  nameOrConfig: AxiosRequestConfig | ServiceName,
  /**
   * 指定服务的配置
   */
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
 * @returns 服务
 */
export function useService(name?: ServiceName) {
  if (name) {
    return get(Services, name)
  } else {
    return Services
  }
}
