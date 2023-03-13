import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
/**
 * Tailwind断点对象
 */
const breakpoints = useBreakpoints(breakpointsTailwind)
/**
 * 是否移动端设备(设备像素宽度小于768px)
 */
const isMobile = () => breakpoints.isSmaller('md')
/**
 * 是否桌面端设备(设备像素宽度大于等于768px)
 */
const isDesktop = () => breakpoints.isGreaterOrEqual('md')

export { breakpoints, isMobile, isDesktop }
