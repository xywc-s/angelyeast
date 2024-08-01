import type { Config } from '@angelyeast/model'
import { generateBaseApi, RequestInstance } from '../common'

export const { searchByCondition, findAll, findEntity, create, remove, update } =
  generateBaseApi<Config>('config', {
    instance: () => RequestInstance.getInstance('Market')
  })
