import { getRequestInstance } from './request'
import { generateBaseApi } from '../common/generateBaseApi'
import type { SalesOrganization } from '@angelyeast/model'

export const { searchByCondition, findAll, findEntity, create, remove, update } =
  generateBaseApi<SalesOrganization>(getRequestInstance, 'salesOrganization')
