import { AxiosRequestConfig } from 'axios'
import type { FetchOptions } from '@angelyeast/repository'

export interface Options<P, T> extends FetchOptions<P, T> {
  /** 是否立即获取数据 */
  immediately: boolean
}

export interface AngelMicroServeRequestConfig<D = any> extends AxiosRequestConfig<D> {
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
}

export const json: AxiosRequestConfig = {
  headers: {
    'Content-Type': ContentTypes.JSON
  }
}
export const common: AngelMicroServeRequestConfig = {
  ...form,
  serveAuth: true,
  timeout: 20 * 1000
}
