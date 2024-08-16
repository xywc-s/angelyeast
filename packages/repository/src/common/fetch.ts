import { ElLoadingService, ElMessage } from 'element-plus'
import { isRef } from 'vue'
import { isFunction } from 'lodash-es'
import type { Ref } from 'vue'
import type { AngelResponse, Lazy, LazyReturnType } from '@angelyeast/types'
import 'element-plus/es/components/message/style/index.mjs'

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
  /** 成功响应时 */
  onSuccess: (response: T) => void
  /** 失败响应时 */
  onError: (error: any) => void
  /** 接口调用后 */
  onFinally: () => void
}

/**
 * 接口调用处理函数
 * @param fn 接口函数
 * @param options 选项参数
 */
export async function useFetch<F extends Lazy>(
  fn: F,
  options?: Partial<FetchOptions<Parameters<F>, LazyReturnType<F>>>
): Promise<LazyReturnType<F>> {
  options = Object.assign({ autoNotify: true }, options)
  options.loading && checkAndToggleLoading(options.loading, true)
  const f = () => (options?.params ? fn(...(options!.params as any[])) : fn())
  const onFinally = () => {
    options?.loading && checkAndToggleLoading(options.loading, false)
    options?.onFinally && options?.onFinally()
  }
  try {
    const res = await f()
    const { success, message } = res as AngelResponse
    success && options?.autoNotify && message && ElMessage.success(message)
    success && options?.onSuccess && options?.onSuccess(res)
    !success && message && ElMessage.error(message)
    !success && options?.onError && options?.onError(res)
    onFinally()
    if (!success) throw new Error(message)
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
