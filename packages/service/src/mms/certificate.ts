import { json } from '../config'
import request from './request'

export const findEntity = (data) => request.post('/mms/certificate/findEntity', data)
export const searchByCondition = (data) =>
  request.post('/mms/certificate/searchByCondition', data, json)
