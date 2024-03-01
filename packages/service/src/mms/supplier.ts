import { json } from '../config'
import { usePost } from './request'

export const findAll = (data) => usePost('/supplier/findAll', data)

export const findEntity = (data = {}) => usePost('/supplier/findEntity', data)

export const saveEntity = (data = {}) => usePost('/supplier/save', data)

export const updateEntity = (data = {}) => usePost('/supplier/update', data)

export const deleteEntity = (data = {}) => usePost('/supplier/delete', data)

export const searchCompany = (data = {}) => usePost('/supplier/searchCompany', data, json)

export const searchSupplier = (data = {}) => usePost('/supplier/searchSupplier', data, json)

export const findMembersBySupplierId = (supplierId) =>
  usePost('/supplier/findMembersBySupplierId', { supplierId }, json)

export const searchByCondition = (data) => usePost('/supplier/searchByCondition', data, json)

export const findSupplierAttachment = (data) => usePost('/supplierAttachmentRelation/findAll', data)

export const syncSupplierFromSAP = (data) => usePost('/supplier/syncSupplierFromSAP', data, json)
