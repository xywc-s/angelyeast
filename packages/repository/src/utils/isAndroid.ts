/**
 * 当前是否处于Android系统环境
 */
export function isAndroid() {
  return (
    navigator.userAgent.indexOf('Android') > -1 ||
    navigator.userAgent.indexOf('Adr') > -1 ||
    navigator.userAgent.indexOf('Linux') > -1
  )
}
