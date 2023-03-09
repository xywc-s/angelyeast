import type { ExtractPropTypes } from 'vue'

export const salesOrganization = {
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
  status: {
    type: String,
    name: '状态',
    default: '正常'
  }
}

export type SalesOrganization = ExtractPropTypes<typeof salesOrganization>
