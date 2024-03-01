import { ref } from 'vue'
import { isFunction, isString } from 'lodash-es'

interface RemoteSearchOptions<T = any> {
  /** 查询的键名或者自定义过滤函数(数组filter方法的参数), 默认值:value */
  key: string | Function
  /** 默认数据集 */
  collect: T[]
}

/**
 * 远程搜索方法构造
 * @returns 返回el-autocomplete远程搜索方法
 */
export function useRemoteSearch(
  /** 远程获取数据的接口函数 */
  fetchDataMethod: Function,
  options: RemoteSearchOptions = {
    key: 'value',
    collect: []
  }
) {
  const collect = ref(options.collect)
  const key = options.key
  const querySearchAsync = async (queryString: string, cb: Function) => {
    let filterMethod = (item: any) => item
    if (isString(key)) {
      filterMethod = (item) => item[key].toLowerCase().indexOf(queryString.toLowerCase()) === 0
    }
    if (isFunction(key)) filterMethod = key

    const { success, rows } = await fetchDataMethod()
    if (!success) return cb(collect.value)
    collect.value = rows
    cb(queryString ? collect.value.filter(filterMethod) : collect.value)
  }
  return { querySearchAsync }
}
