import { json } from '../config'
import request from './request'
export const findAll = (data) => request.post('/mms/standard/findAll', data)

export const findEntity = (data = {}) => request.post('/mms/standard/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/standard/save', data)

export const updateEntity = (data = {}) => request.post('/mms/standard/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/standard/delete', data)

export const getEnum = (data = {}) => request.post('/mms/standard/getEnum', data)

export const searchStandard = (data = {}) =>
  request.post('/mms/standard/searchStandard', data, json)

export const searchByCondition = (data = {}) =>
  request.post('/mms/standard/searchByCondition', data, json)

export const findStandardAttachment = (data = {}) =>
  request.post('/mms/standardAttachmentRelation/findAll', data)

export const findStandardMaterial = (data = {}) =>
  request.post('/mms/materialStandardRelation/findAll', data)

export const saveNewStandard = (data = {}) =>
  request.post('/mms/standard/saveNewStandard', data, json)

export const deleteStandards = (data = {}) =>
  request.post('/mms/standard/deleteStandards', data, json)

export const exportStandardDataByCondition = (params = {}) =>
  request.get('/mms/standard/exportStandardDataByCondition', { params, responseType: 'blob' })

export const sendNotify = (data = {}) => request.post('/mms/standard/sendNotify', data, json)

export const batchAddAscription = (data = {}) =>
  request.post('/mms/standard/batchAddAscription', data, json)

export const batchRemoveAscription = (data = {}) =>
  request.post('/mms/standard/batchRemoveAscription', data, json)
