import request from './request'

export const findAll = (data) => request.post('/mms/warehouse/findAll', data)

export const findEntity = (data = {}) => request.post('/mms/warehouse/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/warehouse/save', data)

export const updateEntity = (data = {}) => request.post('/mms/warehouse/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/warehouse/delete', data)
