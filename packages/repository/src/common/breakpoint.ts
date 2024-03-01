import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

/** 是否移动端设备(设备像素宽度小于768px) */
const isMobile = () => {
  /** Tailwind断点对象 */
  const breakpoints = useBreakpoints(breakpointsTailwind)
  return breakpoints.isSmaller('md')
}
/**
 * 是否桌面端设备(设备像素宽度大于等于768px)
 */
const isDesktop = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind)
  return breakpoints.isGreaterOrEqual('md')
}

export { isMobile, isDesktop }
