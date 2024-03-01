/**
 * 当前是否处于IE内核环境
 */
export function isIE() {
  return navigator.userAgent.indexOf('Trident') > -1
}
