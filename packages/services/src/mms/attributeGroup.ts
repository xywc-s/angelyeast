import { json } from '../config'
import request from './request'

export const findAll = (data) => request.post('/mms/attributeGroup/findAll', data)

export const searchByCondition = (data) =>
  request.post('/mms/attributeGroup/searchByCondition', data, json)

export const findEntity = (data = {}) => request.post('/mms/attributeGroup/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/attributeGroup/save', data)

export const updateEntity = (data = {}) => request.post('/mms/attributeGroup/update', data)

export const deleteEntities = (data = {}) =>
  request.post('/mms/attributeGroup/deleteGroups', data, json)

export const getStatusList = (data = {}) => request.post('/mms/attributeGroup/getStatus', data)

export const relateAttrs = (data = {}) =>
  request.post('/mms/attributeGroupAttributeRelation/batchUpdateRelations', data, json)

export const findRelations = (data = {}) =>
  request.post('/mms/attributeGroupAttributeRelation/findAll', data)
