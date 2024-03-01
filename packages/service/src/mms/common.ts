import { json } from '../config'
import { usePost } from './request'

export const searchMaterialInventoryFromSAP = (data = {}) =>
  usePost('/searchMaterialInventoryFromSAP', data, json)

export const searchOrderFromSAP = (data = {}) => usePost('/searchOrderFromSAP', data, json)
