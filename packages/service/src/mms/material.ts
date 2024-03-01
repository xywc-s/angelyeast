import { json } from '../config'
import { usePost } from './request'

export const findAll = (data) => usePost('/material/findAll', data)

export const findEntity = (data = {}) => usePost('/material/findEntity', data)

export const saveEntity = (data = {}) => usePost('/material/save', data)

export const updateEntity = (data = {}) => usePost('/material/update', data)

export const deleteEntity = (data = {}) => usePost('/material/delete', data)

export const searchByCondition = (data = {}) => usePost('/material/searchByCondition', data, json)

export const storeNewRawMaterial = (data = {}) =>
  usePost('/material/storeNewRawMaterial', data, json)

//PS50
export const extendMaterialSupplier = (data = {}) =>
  usePost('/material/extendMaterialSupplier', data, json)

export const findMaterialAttribute = (data) => usePost('/materialAttributeRelation/findAll', data)

export const findMaterialStandard = (data) => usePost('/materialStandardRelation/findAll', data)

export const findMaterialAttachmentList = (data) =>
  usePost('/materialAttachmentRelation/findAll', data)

export const findMaterialSupplierAttachmentList = (data) =>
  usePost('/materialSupplierAttachmentRelation/findAll', data)

export const syncMaterialFromSAP = (data) => usePost('/material/syncMaterialFromSAP', data, json)

export const findAllMaterialPicture = (data) => usePost('/materialPictureConfig/findAll', data)

export const addMaterialPicture = (data) => usePost('/materialPictureConfig/save', data)

export const updateMaterialPicture = (data) => usePost('/materialPictureConfig/update', data)

export const deleteMaterialPicture = (data) => usePost('/materialPictureConfig/delete', data)
