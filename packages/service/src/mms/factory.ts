import { usePost } from './request'

export const findAll = (data) => usePost('/factory/findAll', data)

export const findEntity = (data = {}) => usePost('/factory/findEntity', data)

export const saveEntity = (data = {}) => usePost('/factory/save', data)

export const updateEntity = (data = {}) => usePost('/factory/update', data)

export const deleteEntity = (data = {}) => usePost('/factory/delete', data)
