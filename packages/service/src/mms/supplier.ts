import { json } from '../config'
import request from './request'

export const findAll = (data) => request.post('/mms/supplier/findAll', data)

export const findEntity = (data = {}) => request.post('/mms/supplier/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/supplier/save', data)

export const updateEntity = (data = {}) => request.post('/mms/supplier/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/supplier/delete', data)

export const searchCompany = (data = {}) => request.post('/mms/supplier/searchCompany', data, json)

export const searchSupplier = (data = {}) =>
  request.post('/mms/supplier/searchSupplier', data, json)

export const findMembersBySupplierId = (supplierId) =>
  request.post(
    '/mms/supplier/findMembersBySupplierId',
    {
      supplierId
    },
    json
  )

export const searchByCondition = (data) =>
  request.post('/mms/supplier/searchByCondition', data, json)

export const findSupplierAttachment = (data) =>
  request.post('/mms/supplierAttachmentRelation/findAll', data)

export const syncSupplierFromSAP = (data) =>
  request.post('/mms/supplier/syncSupplierFromSAP', data, json)
