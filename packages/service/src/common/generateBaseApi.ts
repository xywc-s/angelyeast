// 生成服务端默认api
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { json } from '../config'
import { AngelResponse, Sort, Pager } from '@angelyeast/types'
import { isFunction } from 'lodash-es'

/**
 * 生成服务端默认API
 * @param instance 当前服务的axios请求实例或实例方法, 实例方法必须是post
 * @param controller 服务端控制器名
 */
export function generateBaseApi<Entity>(
  instance: AxiosInstance | (() => AxiosInstance),
  controller: string
) {
  return {
    /** 条件查询 */
    searchByCondition: <D extends object>(data: D, config: AxiosRequestConfig = {}) =>
      (isFunction(instance) ? (instance({}) as AxiosInstance) : instance).post<
        any,
        AngelResponse<Entity>
      >(`/${controller}/searchByCondition`, data, {
        ...json,
        ...config
      }),

    /** 单个实例查询 */
    findEntity: <D extends object>(data: D, config?: AxiosRequestConfig) =>
      (isFunction(instance) ? (instance({}) as AxiosInstance) : instance).post<
        any,
        AngelResponse<any, Entity>
      >(`/${controller}/findEntity`, data, config),

    /** 分页查询 */
    findAll: <D extends Partial<Sort & Pager>>(data: D, config?: AxiosRequestConfig) =>
      (isFunction(instance) ? (instance({}) as AxiosInstance) : instance).post<
        any,
        AngelResponse<Entity>
      >(`/${controller}/findAll`, data, config),

    /** 创建 */
    create: <D extends Partial<Entity>>(data: D, config?: AxiosRequestConfig) =>
      (isFunction(instance) ? (instance({}) as AxiosInstance) : instance).post<
        any,
        AngelResponse<any, string>
      >(`/${controller}/save`, data, config),

    /** 更新 */
    update: <D extends Partial<Entity>>(data: D, config?: AxiosRequestConfig) =>
      (isFunction(instance) ? (instance({}) as AxiosInstance) : instance).post<any, AngelResponse>(
        `/${controller}/update`,
        data,
        config
      ),

    /** 删除 */
    remove: <D extends Partial<Entity>>(data: D, config?: AxiosRequestConfig) =>
      (isFunction(instance) ? (instance({}) as AxiosInstance) : instance).post<any, AngelResponse>(
        `/${controller}/delete`,
        data,
        config
      )
  }
}

// /**
//  * 生成服务端默认API
//  * @param instancePost 实例方法
//  * @param controller 服务端控制器名
//  */
// export function generateBaseApiByInstancePost<Entity>(instancePost: Post, controller: string) {
//   return {
//     /** 条件查询 */
//     searchByCondition: <D extends object>(data: D, config: AxiosRequestConfig = {}) =>
//       instancePost<AngelResponse<Entity>>(`/${controller}/searchByCondition`, data, {
//         ...json,
//         ...config
//       }),

//     /** 单个实例查询 */
//     findEntity: <D extends object>(data: D, config?: AxiosRequestConfig) =>
//       instancePost<AngelResponse<any, Entity>>(`/${controller}/findEntity`, data, config),

//     /** 分页查询 */
//     findAll: <D extends Partial<Sort & Pager>>(data: D, config?: AxiosRequestConfig) =>
//       instancePost<AngelResponse<Entity>>(`/${controller}/findAll`, data, config),

//     /** 创建 */
//     create: <D extends Partial<Entity>>(data: D, config?: AxiosRequestConfig) =>
//       instancePost<AngelResponse<any, string>>(`/${controller}/save`, data, config),

//     /** 更新 */
//     update: <D extends Partial<Entity>>(data: D, config?: AxiosRequestConfig) =>
//       instancePost<AngelResponse>(`/${controller}/update`, data, config),

//     /** 删除 */
//     remove: <D extends Partial<Entity>>(data: D, config?: AxiosRequestConfig) =>
//       instancePost<AngelResponse>(`/${controller}/delete`, data, config)
//   }
// }
