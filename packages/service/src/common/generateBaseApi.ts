// 生成服务端默认api
import { Errors, json, type AngelMicroServeRequestConfig } from '../config'
import { AngelResponse, Sort, Pager } from '@angelyeast/types'
import { isFunction } from 'lodash-es'
import { instanceMap, type RequestInstance } from './instance'

/**  生成服务端默认API */
export function generateBaseApi<Entity>(
  /** 服务端控制器名 */
  controller: string,
  /** 选项 */
  options?: {
    /** 指定axios请求实例, 否则使用默认微服务实例 */
    instance?: RequestInstance | (() => RequestInstance)
  }
) {
  if (/^\//.test(controller)) controller = controller.slice(1)
  if (/\/$/.test(controller)) controller = controller.slice(0, -1)
  const getInstance = () => {
    const _defaultInstance = instanceMap.get('default')
    if (!options?.instance && !_defaultInstance) throw new Error(Errors.NoDefaultConfigOrInstance)
    return options?.instance
      ? isFunction(options.instance)
        ? options.instance()
        : options.instance
      : _defaultInstance!
  }
  return {
    /** 条件查询 */
    searchByCondition: <D extends object, R = AngelResponse<Entity>>(
      data: D,
      config?: AngelMicroServeRequestConfig<D>
    ) =>
      getInstance().post<any, R>(`/${controller}/searchByCondition`, data, {
        ...json,
        ...(config ?? {})
      }),

    /** 单个实例查询 */
    findEntity: <D extends object, R = AngelResponse<any, Entity>>(
      data: D,
      config?: AngelMicroServeRequestConfig<D>
    ) => getInstance().post<any, R>(`/${controller}/findEntity`, data, config),

    /** 分页查询 */
    findAll: <D extends Partial<Pager & Sort>, R = AngelResponse<Entity>>(
      data: D,
      config?: AngelMicroServeRequestConfig<D>
    ) => getInstance().post<any, R>(`/${controller}/findAll`, data, config),

    /** 创建 */
    create: <D extends Partial<Entity>, R = AngelResponse<any, string>>(
      data: D,
      config?: AngelMicroServeRequestConfig<D>
    ) => getInstance().post<any, R>(`/${controller}/save`, data, config),

    /** 更新 */
    update: <D extends Partial<Entity>, R = AngelResponse<any, string>>(
      data: D,
      config?: AngelMicroServeRequestConfig<D>
    ) => getInstance().post<any, R>(`/${controller}/update`, data, config),

    /** 删除 */
    remove: <D extends Partial<Entity>, R = AngelResponse>(
      data: D,
      config?: AngelMicroServeRequestConfig<D>
    ) => getInstance().post<any, R>(`/${controller}/delete`, data, config)
  }
}
