export declare interface AngelResponse<D = any, O = any> {
  success: boolean
  message: string
  rows: D[]
  object: O
  total: number
  code: number
  footer: any[]
}

export declare interface AngelResponse2<D = any> {
  success: boolean
  message: string
  data: D | D[] | null
  total: number
  code: number
  footer: any[]
}

export declare type Pager = {
  /** 页码 */
  page: number
  /** 每页数据量 */
  rows: number
}

export declare type Sort = {
  /** 排序字段名 */
  sort: string
  /** 排序方法  */
  order: 'asc' | 'desc'
}

export declare interface SearchParams extends Pager, Sort {
  /** 返回数据结果集的字段名, 默认rows, 新接口可选 data */
  dataKey: 'rows' | 'data'
}
