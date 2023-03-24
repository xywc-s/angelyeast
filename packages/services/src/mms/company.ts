import request from './request'

export const findEntity = (data) => request.post('/mms/company/findEntity', data)

export const findAll = (data) => request.post('/mms/company/findAll', data)
