import { get, merge, set } from 'lodash-es'
import * as Config from './config'
import * as Base from './base'
// import * as Crud from './crud'

/**
 * 基础查询表格
 * @param options 表格选项参数
 */
export function useTable<D>(options: Config.BaseOptions<D>) {
  const Table = new Base.BaseTable<D>(options)
  return {
    Table,
    /** 表格配置选项 */
    tableOptions: Table._options
  }
}

// /**
//  * crud表格
//  * @param options 表格选项参数
//  */
// export function useTableWithCrud<D>(options: Config.CrudOptions<D>) {
//   const CrudTable = new Crud.CrudTable<D>(options)
//   return {
//     CrudTable,
//     ...CrudTable.use()
//   }
// }

export const BaseTable = Base.BaseTable
// export const CrudTable = Crud.CrudTable

/**
 * 设置表格全局默认值
 * @param options 配置
 */
export const setTable = <D>(options: Config.BaseOptions<D>) => {
  const mergeOptions = merge(Config.defaultOptions, options)
  Object.keys(options).forEach((key) => {
    set(Config.defaultOptions, key, get(mergeOptions, key))
  })
}
