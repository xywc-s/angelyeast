import { generateBaseApi, RequestInstance } from '../common'
import type { SalesOrganization } from '@angelyeast/model'

export const { searchByCondition, findAll, findEntity, create, remove, update } =
  generateBaseApi<SalesOrganization>('salesOrganization', {
    instance: () => RequestInstance.getInstance('MDM')
  })
