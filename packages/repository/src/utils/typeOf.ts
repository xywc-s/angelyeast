export type TypeValue =
  | 'symbol'
  | 'string'
  | 'number'
  | 'object'
  | 'array'
  | 'boolean'
  | 'function'
  | 'null'
  | 'undefined'

/**
 * 判断对象类型
 */
export function typeOf(obj: unknown) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() as TypeValue
}
