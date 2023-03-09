import type { ExtractPropTypes } from 'vue'
import type { Pager, Sort } from '@angelyeast/types/request'

export const company = {
  id: {
    type: String,
    name: 'ID',
    default: ''
  },
  code: {
    type: String,
    name: '编号',
    default: ''
  },
  name: {
    type: String,
    name: '名称',
    default: ''
  },
  registerAddress: {
    name: '注册地址',
    default: ''
  },
  englishName: {
    name: '英文名称',
    default: ''
  },
  englishRegisterAddress: {
    name: '英文注册地址',
    default: ''
  },
  namePhoneticFull: {
    name: '全拼',
    default: ''
  },
  namePhoneticShort: {
    name: '简拼',
    default: ''
  },
  status: {
    name: '状态',
    default: '正常'
  },
  insertDate: {
    name: '创建时间',
    default: ''
  },
  updateDate: {
    name: '更新时间',
    default: ''
  }
}

export type Company = ExtractPropTypes<typeof company>
export type CompanyFuzzySearchParams = {
  keyword: string
}
export type CompanyListParams = Partial<Pager & Sort & CompanyFuzzySearchParams>
