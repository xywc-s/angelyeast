import { json } from '../config'
import request from './request'

export const findAll = (data) => request.post('/mms/attachment/findAll', data)
export const findEntity = (data = {}) => request.post('/mms/attachment/findEntity', data)
export const saveEntity = (data = {}) => request.post('/mms/attachment/save', data)
export const saveAttachment = (data = {}) => request.post('/mms/attachment/saveAttachment', data)
export const updateAttachment = (data = {}) =>
  request.post('/mms/attachment/updateAttachment', data)

export const updateEntity = (data = {}) => request.post('/mms/attachment/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/attachment/delete', data)

export const findByIds = (data = {}) => request.post('/mms/attachment/findByIds', data, json)
