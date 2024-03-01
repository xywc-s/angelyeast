/** 进度条配色 */
export function useProgressColors(config: ProgressColor[]) {
  const defaultColors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 50 },
    { color: '#1989fa', percentage: 99.99 },
    { color: '#5cb87a', percentage: 100 }
  ]
  if (config?.length) {
    return [...defaultColors, ...config]
  } else {
    return [...defaultColors]
  }
}

export interface ProgressColor {
  /** 颜色值 */
  color: string
  /** 进度值,0-100之间的整数或浮点数 */
  percentage: number
}
