import { usePost } from './request'

export const findAll = (data) => usePost('/config/findAll', data)

export const findEntity = (data = {}) => usePost('/config/findEntity', data)

export const saveEntity = (data = {}) => usePost('/config/save', data)

export const updateEntity = (data = {}) => usePost('/config/update', data)

export const deleteEntity = (data = {}) => usePost('/config/delete', data)

export const getCategory = (data = {}) => usePost('/config/getCategory', data)
