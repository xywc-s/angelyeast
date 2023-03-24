import request from './request'

export const findAll = (data) => request.post('/mms/tag/findAll', data)

export const findEntity = (data = {}) => request.post('/mms/tag/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/tag/save', data)

export const updateEntity = (data = {}) => request.post('/mms/tag/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/tag/delete', data)
