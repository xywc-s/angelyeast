import { json } from '../config'
import { usePost } from './request'

export const findAll = (data) => usePost('/attributeGroup/findAll', data)

export const searchByCondition = (data) => usePost('/attributeGroup/searchByCondition', data, json)

export const findEntity = (data = {}) => usePost('/attributeGroup/findEntity', data)

export const saveEntity = (data = {}) => usePost('/attributeGroup/save', data)

export const updateEntity = (data = {}) => usePost('/attributeGroup/update', data)

export const deleteEntities = (data = {}) => usePost('/attributeGroup/deleteGroups', data, json)

export const getStatusList = (data = {}) => usePost('/attributeGroup/getStatus', data)

export const relateAttrs = (data = {}) =>
  usePost('/attributeGroupAttributeRelation/batchUpdateRelations', data, json)

export const findRelations = (data = {}) =>
  usePost('/attributeGroupAttributeRelation/findAll', data)
