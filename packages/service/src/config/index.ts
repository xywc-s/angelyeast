// import qs from 'qs'
import type { ServiceName } from './service'
import type { AngelMicroServeRequestConfig } from './request'
export * from './service'
export * from './request'

export const BaseConfig = new Map<ServiceName, AngelMicroServeRequestConfig>()

export const Errors = {
  NoDefaultConfig: 'Angel Micro Service: 微服务默认配置未设置!',
  NoDefaultConfigOrInstance: 'Generate Base Api: default配置缺失, 或者没有指定请求实例!',
  NoServiceInstance: 'GetRequestInstance: 找不到当前服务的请求, 请先实例化!'
}
