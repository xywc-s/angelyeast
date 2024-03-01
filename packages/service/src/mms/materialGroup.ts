import { usePost } from './request'
import { json } from '../config'

export const findAll = (data) => usePost('/materialGroupingAttributeConfig/findAll', data)

export const findEntity = (data = {}) =>
  usePost('/materialGroupingAttributeConfig/findEntity', data)

export const saveEntity = (data = {}) => usePost('/materialGroupingAttributeConfig/save', data)

export const updateEntity = (data = {}) => usePost('/materialGroupingAttributeConfig/update', data)

export const deleteEntity = (data = {}) => usePost('/materialGroupingAttributeConfig/delete', data)
export const searchByCondition = (data = {}) =>
  usePost('/materialGroupingAttributeConfig/searchByCondition', data, json)

export const getGroupTypes = (data = {}) =>
  usePost('/materialGroupingAttributeConfig/getType', data, json)

export const batchUpdate = (data = {}) =>
  usePost('/materialGroupingAttributeConfig/batchUpdateConfig', data, json)

export const getAllAttributes = (data = {}) =>
  usePost('/materialGroupingAttributeConfig/getAllAttributes', data, json)

export const getGroupAttributes = (data = {}) =>
  usePost('/materialGroupingAttributeConfig/getAttributes', data, json)

export const getTreeData = (data = {}) =>
  usePost('/materialGroupingAttributeConfig/getGroupingData', data, json)
