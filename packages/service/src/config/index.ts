// import qs from 'qs'
import type { AxiosRequestConfig } from 'axios'
import type { ServiceName } from '../index'
export const BaseConfig = new Map<ServiceName | 'default', AxiosRequestConfig>()

export const ContentTypes = {
  FORM: 'application/x-www-form-urlencoded',
  JSON: 'application/json',
  UPLOAD: 'multipart/form-data',
  DOWNLOAD: 'application/octet-stream'
}

export const common: AxiosRequestConfig = {
  timeout: 20000,
  withCredentials: false
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
