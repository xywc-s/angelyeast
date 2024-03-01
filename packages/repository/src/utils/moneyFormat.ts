/**
 * 格式化金额
 * @param number 金额数
 * @param decimals 小数点后的位数, 默认2
 * @param decPoint 小数点符号, 默认,(英文逗号)
 * @param thousandsSep 千分位符号, 默认.(英文句号)
 * @example
 * moneyFormat(10000000) // 10,000,000.00
 * moneyFormat(10000000, 3, '.', '-') // 10-000-000.000
 */
export const moneyFormat = (
  number: string | number,
  decimals: number = 2,
  decPoint?: string,
  thousandsSep?: string
) => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  const n = !isFinite(+number) ? 0 : +number
  const prec = !isFinite(+decimals) ? 2 : Math.abs(decimals)
  const sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep
  const dec = typeof decPoint === 'undefined' ? '.' : decPoint
  let s: string[] = []
  const toFixedFix = function (n: number, prec: number) {
    const k = Math.pow(10, prec)
    return '' + Math.ceil(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  const re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || ''
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}
