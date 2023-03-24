import request from './request'

export const findAll = (data) => request.post('/mms/factory/findAll', data)

export const findEntity = (data = {}) => request.post('/mms/factory/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/factory/save', data)

export const updateEntity = (data = {}) => request.post('/mms/factory/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/factory/delete', data)
