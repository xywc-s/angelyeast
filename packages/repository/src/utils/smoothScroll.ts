/**
 * 平滑滚动到元素位置
 * @param element 查询字符串或者DOM
 */
export const smoothScroll = (element: string | HTMLElement) => {
  const target = typeof element === 'string' ? document.querySelector(element) : element
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth'
    })
  }
}
