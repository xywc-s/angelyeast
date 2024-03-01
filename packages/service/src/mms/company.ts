import { usePost } from './request'

export const findEntity = (data) => usePost('/company/findEntity', data)

export const findAll = (data) => usePost('/company/findAll', data)
