import { ElMessageBox } from 'element-plus'
import type { ElMessageBoxOptions, MessageBoxData } from 'element-plus'

/**
 * 确认对话框
 * @param handle 确认后的处理函数
 * @param options 选项
 */
export function useConfirm(handle: (data: MessageBoxData) => any, options?: ElMessageBoxOptions) {
  ElMessageBox.confirm('确定删除吗? 一旦删除, 数据将无法恢复.', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
    ...(options ?? {})
  })
    .then(handle)
    .catch(() => options?.callback)
}
