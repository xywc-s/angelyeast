import {
  isArray,
  isEmpty,
  isNaN,
  isNil,
  isObject,
  isPlainObject,
  isString,
  omitBy
} from 'lodash-es'

/**
 * 重构出有效的查询参数,
 * 排除参数对象上值为null,NaN,{},[],""的属性
 * @param params 需要处理的对象
 * @param fn 接收重构后的值作为参数, 进行自定义函数二次处理
 */
export function validParams<T extends object>(params: T): Partial<T>
// eslint-disable-next-line no-redeclare
export function validParams<R, T extends object>(params: T, fn: (params: Partial<T>) => R): R
// eslint-disable-next-line no-redeclare
export function validParams<R, T extends object>(
  params: T,
  fn?: (params: Partial<T>) => R
): Partial<T> | R {
  if (!isPlainObject(params)) return params
  const result = omitBy<T>(params, (value: T[keyof T]) => {
    if (isNil(value)) return true
    if (isNaN(value)) return true
    if (isObject(value) && isEmpty(value)) return true
    if (isArray(value) && !value.length) return true
    if (isString(value) && !value) return true
    return false
  })
  return fn ? fn(result) : result
}
