export declare interface AngelResponse<D = any, O = any> {
  success: boolean
  message: string | null
  rows: D[]
  object: O
  total: number
  code: number
  footer: any[]
}

export declare type Pager = {
  /**
   * 页码
   */
  page: number
  /**
   * 每页数据量
   */
  rows: number
}

export declare type Sort = {
  /**
   * 排序字段名
   */
  sort: string
  /**
   * 排序方法
   */
  order: 'asc' | 'desc'
}
