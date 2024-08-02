import axios, { type AxiosInstance } from 'axios'
import { common, AngelMicroServeRequestConfig, BaseConfig, Errors } from '../config'
import Interceptor from '../interceptors'
import type { ServiceName } from '../config'
import type { AngelResponse } from '@angelyeast/types'

export interface RequestInstanceConfig extends AngelMicroServeRequestConfig {
  /** 服务名称, 不传则使用微服务默认配置 */
  name?: ServiceName
}
export class RequestInstance {
  #serverName: ServiceName = 'default'
  constructor(config?: RequestInstanceConfig) {
    const _config = { ...common, ...(config ?? {}) }
    if (config?.name) this.#serverName = config.name
    if (!RequestInstance.instanceMap.get(this.#serverName)) this.#init(_config)
  }
  static instanceMap: Map<ServiceName, AxiosInstance> = new Map()

  #init(config: RequestInstanceConfig) {
    const instance = axios.create(config)
    const { success: reqS, error: reqE } = Interceptor.request.angel
    const { success: resS, error: resE } = Interceptor.response.angel
    instance.interceptors.request.use(reqS, reqE, { synchronous: true })
    instance.interceptors.response.use(resS, resE, { synchronous: true })
    RequestInstance.instanceMap.set(this.#serverName, instance)
  }

  /** 获取指定微服务的实例 */
  static getInstance(name: ServiceName) {
    if (!RequestInstance.instanceMap.get(name)) {
      const _defaultConfig = BaseConfig.get('default')
      const serviceConfig = BaseConfig.get(name)
      if (!serviceConfig && !_defaultConfig?.baseURL) throw new Error(Errors.NoDefaultConfig)
      const config = serviceConfig ?? {
        ..._defaultConfig,
        baseURL: pathResolve(_defaultConfig?.baseURL!, servicePath[name])
      }
      new RequestInstance({ name, ...config })
    }
    return RequestInstance.instanceMap.get(name)!
  }
}

const servicePath: Record<Exclude<ServiceName, 'default' | 'OPEN'>, string> = {
  BFF: '/bff',
  Auth: '/security-server',
  MDM: '/mdm',
  MMS: '/mms',
  Market: '/market'
}

export function useRequest<R = AngelResponse, D = any>(config: AngelMicroServeRequestConfig<D>) {
  return RequestInstance.getInstance('default').request<any, R, D>(config)
}

export function usePost<D = any, R = AngelResponse>(
  url: string,
  data: D,
  config?: AngelMicroServeRequestConfig<D>
) {
  return RequestInstance.getInstance('default').post<any, R, D>(url, data, config)
}

export function useGet<D = any, R = AngelResponse>(
  url: string,
  config?: AngelMicroServeRequestConfig<D>
) {
  return RequestInstance.getInstance('default').get<any, R, D>(url, config)
}

function pathResolve(base: string, path: string) {
  if (!path) return base
  if (/\/$/.test(base)) base = base.slice(0, -1)
  return base + path
}
