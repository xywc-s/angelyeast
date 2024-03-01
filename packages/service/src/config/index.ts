// import qs from 'qs'
import type { AxiosRequestConfig } from 'axios'
import type { ServiceName } from '../index'
import type { FetchOptions } from '@angelyeast/repository'
export interface AngelMicroServeRequestConfig {
  /**
   * 是否启用微服务鉴权
   * @default true
   */
  serveAuth?: boolean
  /**
   * 是否全量返回axios的响应
   * @description 由于微服务响应码全部是200, 状态和消息全部自定义, 所以默认只返回response.data
   * @default false
   */
  fullReturn?: boolean
}

export interface Options<P, T> extends FetchOptions<P, T> {
  /** 是否立即获取数据 */
  immediately: boolean
}
export const BaseConfig = new Map<ServiceName | 'default', AxiosRequestConfig>()
export const getDefaultConfig = (config: AxiosRequestConfig = {}) => {
  const def = BaseConfig.get('default')
  const defBaseUrl = def?.baseURL ?? ''
  return def ? { ...config, ...def, baseURL: defBaseUrl + config?.baseURL } : config
}

export const ContentTypes = {
  FORM: 'application/x-www-form-urlencoded',
  JSON: 'application/json',
  UPLOAD: 'multipart/form-data',
  DOWNLOAD: 'application/octet-stream'
}

export const form: AxiosRequestConfig = {
  headers: {
    'Content-Type': ContentTypes.FORM
  }
  // FIXME 新版axios将会根据Content-Type自动处理参数为urlencoded格式
  // paramsSerializer: {
  //   serialize: (params, options) => {
  //     console.log({ params, options })
  //     return qs.stringify(params)
  //   }
  // }
}

export const json: AxiosRequestConfig = {
  headers: {
    'Content-Type': ContentTypes.JSON
  }
}
export const common: AxiosRequestConfig & AngelMicroServeRequestConfig = {
  ...form,
  serveAuth: true,
  timeout: 20000,
  withCredentials: false
}
