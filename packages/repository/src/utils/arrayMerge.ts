/**
 * 根据对象唯一键合并数组对象
 * @param key 用于标识合并项的唯一键
 * @param arrays 需要合并的数组
 * @returns
 */
export function arrayMerge<T extends Record<keyof T, T[keyof T]>>(
  key: keyof T,
  ...arrays: Array<T[]>
): T[] {
  const array = []
  const groups = new Map() // key => [pos in array, [array, of, objects, with, the, same, key]]

  for (let i = 0; i < arrays.length; ++i) {
    for (let j = 0; j < arrays[i].length; ++j) {
      const element = arrays[i][j]
      if (Object.prototype.hasOwnProperty.call(element, key)) {
        const keyValue = element[key]
        if (groups.has(keyValue)) {
          groups.get(keyValue)[1].push(element)
        } else {
          array.push(element)
          groups.set(keyValue, [array.length - 1, []])
        }
      } else {
        array.push(element)
      }
    }
  }

  for (const group of groups) {
    if (group[1][1].length === 0) continue
    array[group[1][0]] = Object.assign.apply(
      Object,
      ([{}, array[group[1][0]]] as any).concat(group[1][1])
    )
  }
  return array
}
