import { uuid } from '../utils/uuid'
import type {
  VxeGridProps,
  VxeGridPropTypes,
  VxeGridEventProps,
  VxeFormProps,
  VxeFormEventProps,
  VxeModalEventProps,
  VxeModalProps
} from 'vxe-table'

/** 表格API接口配置参数 */
export interface ApiOptions<Context, ResponseData, Params extends unknown[]> {
  /**
   * 调用前钩子
   * @return 重构后将传递的接口参数或void
   */
  onBefore?: (...params: Params) => unknown
  /**
   * 接口调用成功后的钩子
   * @param result 接口调用成功后返回的值
   * @param ctx 上下文
   */
  onSuccess?: (result: ResponseData, ctx: Context) => void
  /**
   * 接口调用失败后的钩子
   * @param result 接口调用失败后的响应结果
   * @param ctx 上下文
   */
  onError?: (result: any, ctx: Context) => void
  /**
   * finally钩子
   * @param result 接口调用失败后的响应结果
   * @param ctx 上下文
   */
  onFinally?: (ctx: Context) => void
}

/** 表格分页器配置参数 */
export interface PagerProps extends VxeGridPropTypes.PagerConfig {
  /** 页码键名 */
  pageKey?: string
  /** 每页数据量别名 */
  pageSizeKey?: string
}

/** 表格基础选项 */
export interface BaseOptions<D = any> extends VxeGridProps<D>, VxeGridEventProps<D> {
  pagerConfig?: PagerProps
}

export interface ModalOptions extends VxeModalProps, VxeModalEventProps {}
export interface FormOptions<D> extends VxeFormProps<D>, VxeFormEventProps {}

/** CRUD表格选项 */
export interface CrudOptions<D> {
  table: BaseOptions<D>
  modal: ModalOptions
  form: FormOptions<D>
}

/** 表格默认选项配置 */
export const defaultOptions: BaseOptions = {
  id: uuid(),
  data: [],
  maxHeight: 650,
  size: 'small',
  showHeader: true,
  showOverflow: true,
  autoResize: true,
  syncResize: true,
  stripe: true,
  round: true,
  columnConfig: {
    minWidth: '120px',
    resizable: true
  },
  rowConfig: {
    isCurrent: true,
    isHover: true,
    keyField: 'id'
  },
  pagerConfig: {
    enabled: true,
    layouts: [
      'Sizes',
      'PrevJump',
      'PrevPage',
      'Number',
      'NextPage',
      'NextJump',
      'FullJump',
      'PageCount',
      'Total'
    ],
    currentPage: 1,
    pageSize: 10,
    total: 0,
    pageKey: 'page',
    pageSizeKey: 'pageSize'
  }
}
