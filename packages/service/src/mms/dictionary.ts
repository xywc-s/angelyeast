import { json } from '../config'
import { usePost } from './request'

export const findAll = (data) => usePost('/dictionary/findAll', data)

export const findEntity = (data = {}) => usePost('/dictionary/findEntity', data)

export const saveEntity = (data = {}) => usePost('/dictionary/save', data)

export const updateEntity = (data = {}) => usePost('/dictionary/update', data)

export const deleteEntity = (data = {}) => usePost('/dictionary/delete', data)

export const findChildrenByCode = (data = {}) =>
  usePost('/dictionary/findChildrenByCode', data, json)
