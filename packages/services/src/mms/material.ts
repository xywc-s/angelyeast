import { json } from '../config'
import request from './request'

export const findAll = (data) => request.post('/mms/material/findAll', data)

export const findEntity = (data = {}) => request.post('/mms/material/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/material/save', data)

export const updateEntity = (data = {}) => request.post('/mms/material/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/material/delete', data)

export const searchByCondition = (data = {}) =>
  request.post('/mms/material/searchByCondition', data, json)

export const storeNewRawMaterial = (data = {}) =>
  request.post('/mms/material/storeNewRawMaterial', data, json)

//PS50
export const extendMaterialSupplier = (data = {}) =>
  request.post('/mms/material/extendMaterialSupplier', data, json)

export const findMaterialAttribute = (data) =>
  request.post('/mms/materialAttributeRelation/findAll', data)

export const findMaterialStandard = (data) =>
  request.post('/mms/materialStandardRelation/findAll', data)

export const findMaterialAttachmentList = (data) =>
  request.post('/mms/materialAttachmentRelation/findAll', data)

export const findMaterialSupplierAttachmentList = (data) =>
  request.post('/mms/materialSupplierAttachmentRelation/findAll', data)

export const syncMaterialFromSAP = (data) =>
  request.post('/mms/material/syncMaterialFromSAP', data, json)

export const findAllMaterialPicture = (data) =>
  request.post('/mms/materialPictureConfig/findAll', data)

export const addMaterialPicture = (data) => request.post('/mms/materialPictureConfig/save', data)

export const updateMaterialPicture = (data) =>
  request.post('/mms/materialPictureConfig/update', data)

export const deleteMaterialPicture = (data) =>
  request.post('/mms/materialPictureConfig/delete', data)
