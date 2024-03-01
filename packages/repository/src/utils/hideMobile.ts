/**
 * 将手机号码转为星号
 * @example
 * 转换前: 18932348234
 * 转换后: 189****8234
 */
export function hideMobile(mobile: string) {
  return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
}
