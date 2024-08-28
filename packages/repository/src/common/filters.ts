import { cloneDeep } from 'lodash-es'
import { ref, unref } from 'vue'

/**
 * 查询条件及重置查询
 * @param data 查询条件对象
 */
export function useFilters<T extends object>(data: T) {
  /** 响应式查询条件对象 */
  const filters = ref<T>()
  const _clone = cloneDeep(unref(data))

  /** 重置查询条件 */
  const reset = () => {
    filters.value = cloneDeep(_clone)
  }
  reset()
  return [filters, reset] as [typeof filters, typeof reset]
}
