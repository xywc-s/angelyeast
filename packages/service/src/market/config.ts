import type { Config } from '@angelyeast/model'
import { generateBaseApi, getRequestInstance } from '../common'

export const { searchByCondition, findAll, findEntity, create, remove, update } =
  generateBaseApi<Config>('config', {
    instance: () => getRequestInstance('Market')
  })
