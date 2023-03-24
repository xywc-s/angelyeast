import { json } from '../config'
import request from './request'

export const findAll = (data) => request.post('/mms/dictionary/findAll', data)

export const findEntity = (data = {}) => request.post('/mms/dictionary/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/dictionary/save', data)

export const updateEntity = (data = {}) => request.post('/mms/dictionary/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/dictionary/delete', data)

export const findChildrenByCode = (data = {}) =>
  request.post('/mms/dictionary/findChildrenByCode', data, json)
