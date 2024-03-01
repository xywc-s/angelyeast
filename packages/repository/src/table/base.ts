import { reactive, ref, Ref } from 'vue'
import { get } from '@vueuse/core'
import { assign, cloneDeep, isFunction, merge } from 'lodash-es'
import { defaultOptions } from './config'
import type { PagerProps, ListDataApiType, ApiOptions, BaseOptions } from './config'
import type { VxeGridPropTypes } from 'vxe-table'
import type { AngelResponse } from '@angelyeast/types'

type QueryHandler<T> = { fn: ListDataApiType<T> } & ApiOptions<
  BaseOptions<T>,
  AngelResponse<T>,
  Parameters<ListDataApiType<T>>
>

/** 基础查询表格 */
export class BaseTable<D> {
  _options: BaseOptions<D>
  _filters: Ref
  _onQuery: Partial<QueryHandler<D>>

  /**
   * 基础表格构造器
   * @param {object} options 表格默认配置项
   */
  constructor(options?: BaseOptions<D>) {
    // 生成表格选项
    this._options = reactive(cloneDeep(merge({}, defaultOptions, options)))
    this._filters = ref({})
    this._onQuery = {}
    // 没有自定义分页器事件, 初始化默认事件
    if (!this._options?.onPageChange) this._initPagerEvents()
  }

  /**
   * 设置表格数据
   */
  setData<T extends D>(data: T[]) {
    this._options.data = data
    return this
  }

  /**
   * 获取表格数据
   */
  getData() {
    return this._options.data
  }

  /**
   * 设置表格列配置
   */
  setColumns(columns: VxeGridPropTypes.Columns<D>) {
    this._options.columns = columns
    return this
  }

  /**
   * 初始化分页器事件
   */
  _initPagerEvents() {
    this._options.onPageChange = ({ type, currentPage, pageSize }) => {
      switch (type) {
        case 'current':
          this._options.pagerConfig!.currentPage = currentPage
          this.fetchData({
            [this._options.pagerConfig!.pageKey as string]: currentPage,
            [this._options.pagerConfig!.pageSizeKey as string]: pageSize
          })
          break
        case 'size':
          this._options.pagerConfig!.pageSize = pageSize
          this.fetchData({
            [this._options.pagerConfig!.pageKey as string]: 1,
            [this._options.pagerConfig!.pageSizeKey as string]: pageSize
          })
          break
      }
    }
  }

  /**
   * 设置分页器
   * 此处配置的别名优先级更高
   */
  setPager(pager: PagerProps) {
    this._options.pagerConfig = pager
    return this
  }

  /**
   * 获取分页器状态
   */
  getPager() {
    return this._options.pagerConfig
  }

  /**
   * 设置表格查询参数
   */
  setFilters<F>(filters: Ref<F>) {
    this._filters = ref(filters)
    return this
  }

  setQuery(fn: ListDataApiType<D>, options: Omit<QueryHandler<D>, 'fn'> = {}) {
    this._onQuery = {
      fn,
      ...options
    }
    return this
  }

  getQuery() {
    return this._onQuery
  }

  /**
   * 表格数据加载方法
   * @param data 接口额外传递的参数(最高优先级, 将覆盖filters和pager中的同名参数)
   */
  fetchData<P>(data?: P) {
    if (!this._onQuery)
      throw new Error('表格未初始化数据查询接口, 请先调用 setQuery 方法完成接口初始化!')
    if (!isFunction(this._onQuery.fn)) throw new Error('查询接口函数必须是一个Promise函数')

    this._options.loading = true
    let params = {}
    // 如果配置了分页器, 将分页参数设置为接口参数
    if (this._options.pagerConfig?.enabled) {
      params = {
        [this._options.pagerConfig.pageKey as string]: this._options.pagerConfig.currentPage,
        [this._options.pagerConfig.pageSizeKey as string]: this._options.pagerConfig.pageSize
      }
    }
    // 将过滤器和附件参数设置为接口参数
    assign(params, get(this._filters), data ?? {})
    if (this._onQuery?.onBefore) {
      const refactoryParams = this._onQuery.onBefore(params)
      if (refactoryParams) params = refactoryParams
    }

    this._onQuery
      .fn(params)
      .then((result) => {
        if (this._onQuery?.onSuccess) {
          this._onQuery.onSuccess(result, this._options)
        } else {
          const { rows, total } = result
          this._options.data = rows
          this._options.pagerConfig!.total = total
        }
      })
      .catch((reason) => {
        if (this._onQuery?.onError) this._onQuery.onError(reason, this._options)
      })
      .finally(() => {
        this._options.loading = false
        if (this._onQuery?.onFinally) this._onQuery.onFinally(this._options)
      })
  }
}
