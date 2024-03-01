import { json } from '../config'
import { usePost, useGet } from './request'
export const findAll = (data) => usePost('/standard/findAll', data)

export const findEntity = (data = {}) => usePost('/standard/findEntity', data)

export const saveEntity = (data = {}) => usePost('/standard/save', data)

export const updateEntity = (data = {}) => usePost('/standard/update', data)

export const deleteEntity = (data = {}) => usePost('/standard/delete', data)

export const getEnum = (data = {}) => usePost('/standard/getEnum', data)

export const searchStandard = (data = {}) => usePost('/standard/searchStandard', data, json)

export const searchByCondition = (data = {}) => usePost('/standard/searchByCondition', data, json)

export const findStandardAttachment = (data = {}) =>
  usePost('/standardAttachmentRelation/findAll', data)

export const findStandardMaterial = (data = {}) =>
  usePost('/materialStandardRelation/findAll', data)

export const saveNewStandard = (data = {}) => usePost('/standard/saveNewStandard', data, json)

export const deleteStandards = (data = {}) => usePost('/standard/deleteStandards', data, json)

export const exportStandardDataByCondition = (params = {}) =>
  useGet('/standard/exportStandardDataByCondition', { params, responseType: 'blob' })

export const sendNotify = (data = {}) => usePost('/standard/sendNotify', data, json)

export const batchAddAscription = (data = {}) => usePost('/standard/batchAddAscription', data, json)

export const batchRemoveAscription = (data = {}) =>
  usePost('/standard/batchRemoveAscription', data, json)
