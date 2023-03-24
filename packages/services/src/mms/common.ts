import { json } from '../config'
import request from './request'

export const searchMaterialInventoryFromSAP = (data = {}) =>
  request.post('/mms/searchMaterialInventoryFromSAP', data, json)

export const searchOrderFromSAP = (data = {}) => request.post('/mms/searchOrderFromSAP', data, json)
