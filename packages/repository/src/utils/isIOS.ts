/**
 * 当前是否处于IOS系统环境
 */
export function isIOS() {
  return navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}
