import { Axios } from 'axios'
import { common, AngelMicroServeRequestConfig, BaseConfig, Errors } from '../config'
import Interceptor from '../interceptors'
import type { ServiceName } from '../config'
import type { AngelResponse } from '@angelyeast/types'

export interface RequestInstanceConfig extends AngelMicroServeRequestConfig {
  /** 服务名称, 不传则使用微服务默认配置 */
  name?: ServiceName
}
export const instanceMap: Map<ServiceName | 'default', RequestInstance> = new Map()
export class RequestInstance extends Axios {
  #serverName: ServiceName | 'default' = 'default'
  constructor(config?: RequestInstanceConfig) {
    super({ ...common, ...(config ?? {}) })
    this.#init(config ?? {})
  }

  #init(config: RequestInstanceConfig) {
    if (config?.name) this.#serverName = config.name
    const _instance = instanceMap.get(this.#serverName)
    if (_instance) return _instance
    const { success: reqS, error: reqE } = Interceptor.request.angel
    const { success: resS, error: resE } = Interceptor.response.angel
    this.interceptors.request.use(reqS, reqE, { synchronous: true })
    this.interceptors.response.use(resS, resE, { synchronous: true })
    instanceMap.set(this.#serverName, this)
    return this
  }
}

const servicePath: Record<ServiceName, string> = {
  BFF: '/bff',
  Auth: '/security-server',
  MDM: '/mdm',
  MMS: '/mms',
  Market: '/market',
  OPEN: ''
}

/** 获取指定微服务的实例 */
export function getRequestInstance(name: ServiceName) {
  const _instance = instanceMap.get(name)
  if (_instance) return _instance
  const _defaultConfig = BaseConfig.get('default')
  const serviceConfig = BaseConfig.get(name)
  if (!serviceConfig && !_defaultConfig?.baseURL) throw new Error(Errors.NoDefaultConfig)

  const config = serviceConfig ?? {
    ..._defaultConfig,
    baseURL: pathResolve(_defaultConfig?.baseURL!, servicePath[name])
  }
  return new RequestInstance({ name, ...config })
}

export function useRequest<R = AngelResponse, D = any>(config: AngelMicroServeRequestConfig<D>) {
  const _config = BaseConfig.get('default')
  if (!_config) throw new Error(Errors.NoDefaultConfig)
  const instance = new RequestInstance(_config)
  return instance.request<any, R, D>(config)
}

export function usePost<R = AngelResponse, D = any>(
  url: string,
  data: D,
  config?: AngelMicroServeRequestConfig<D>
) {
  const _config = BaseConfig.get('default')
  if (!_config) throw new Error(Errors.NoDefaultConfig)
  const instance = new RequestInstance(_config)
  return instance.post<any, R, D>(url, data, config)
}

export function useGet<R = AngelResponse, D = any>(
  url: string,
  config?: AngelMicroServeRequestConfig<D>
) {
  const _config = BaseConfig.get('default')
  if (!_config) throw new Error(Errors.NoDefaultConfig)
  const instance = new RequestInstance(_config)
  return instance.get<any, R, D>(url, config)
}

function pathResolve(base: string, path: string) {
  if (/\/$/.test(base)) base = base.slice(0, -1)
  return base + path
}
