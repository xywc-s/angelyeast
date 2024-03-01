import { usePost } from './request'

export const findAll = (data) => usePost('/businessUnit/findAll', data)

export const findEntity = (data = {}) => usePost('/businessUnit/findEntity', data)

export const update = (data) => usePost('/businessUnit/update', data)
