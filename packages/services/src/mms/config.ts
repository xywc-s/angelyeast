import request from './request'

export const findAll = (data) => request.post('/mms/config/findAll', data)

export const findEntity = (data = {}) => request.post('/mms/config/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/config/save', data)

export const updateEntity = (data = {}) => request.post('/mms/config/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/config/delete', data)

export const getCategory = (data = {}) => request.post('/mms/config/getCategory', data)
