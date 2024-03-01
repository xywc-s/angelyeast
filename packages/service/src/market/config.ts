import { getRequestInstance } from './request'
import type { Config } from '@angelyeast/model'
import { generateBaseApi } from '../common/generateBaseApi'

export const { searchByCondition, findAll, findEntity, create, remove, update } =
  generateBaseApi<Config>(getRequestInstance, 'config')
