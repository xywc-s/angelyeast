import { json } from '../config'
import { usePost } from './request'

export const findEntity = (data) => usePost('/certificate/findEntity', data)
export const searchByCondition = (data) => usePost('/certificate/searchByCondition', data, json)
