import { ElLoadingService, ElMessage } from 'element-plus'
import { isRef } from 'vue'
import { isFunction } from 'lodash-es'
import type { Ref } from 'vue'
import type { AngelResponse, Lazy, LazyReturnType } from '@angelyeast/types'

export type LoadingInstance = ReturnType<typeof ElLoadingService>
export type FetchLoading = Ref<boolean> | ((b: boolean) => void) | LoadingInstance
export interface FetchOptions<P, T> {
  /** 接口参数 */
  params: P
  /** loading状态 */
  loading: FetchLoading
  /**
   * 接口返回成功时, 是否自动弹出通知消息, 内容为接口返回的message
   * @description  默认返回成功提示, 设置为false可取消提示, 实际场景中绝大部分查询成功并不需要提示
   * @default true
   */
  autoNotify: boolean
  /**
   * 是否立即执行函数
   * @description 立即执行, 返回响应结果, 否则返回响应式数据和执行函数
   * @default true
   */
  immediate: boolean
  /** 返回指定key的响应式数据, 默认返回完整结果 */
  // returnKey: 'rows' | 'object' | 'data'
  /** 成功响应时 */
  onSuccess: (response: T) => void
  /** 失败响应时 */
  onError: (error: any) => void
  /** 接口调用后 */
  onFinally: () => void
}

type Options<F extends Lazy> = Partial<FetchOptions<Parameters<F>, LazyReturnType<F>>>

/**
 * 接口调用处理函数
 * @param fn 接口函数
 * @param options 选项参数
 */
export async function useFetch<F extends Lazy>(fn: F, options?: Options<F>) {
  options = Object.assign({ autoNotify: true, immediate: true }, options)
  options.loading && checkAndToggleLoading(options.loading, true)

  const onFinally = () => {
    options?.loading && checkAndToggleLoading(options.loading, false)
    options?.onFinally && options?.onFinally()
  }
  try {
    const res: LazyReturnType<F> = await (options?.params ? fn(...(options.params as any[])) : fn())
    // 如果是单个请求, 默认为微服务接口请求
    const { success, message } = res as AngelResponse
    success && options?.autoNotify && message && ElMessage.success(message)
    success && options?.onSuccess && options?.onSuccess(res)
    !success && message && ElMessage.error(message)
    !success && options?.onError && options?.onError(res)
    onFinally()
    return res
  } catch (error: any) {
    options?.onError && options?.onError(error)
    onFinally()
    throw new Error(error)
  }
}

function checkAndToggleLoading(loading: FetchLoading, value: boolean) {
  if (isRef<boolean>(loading)) loading.value = value
  else if (isFunction(loading)) loading(value)
  else loading.close()
}
