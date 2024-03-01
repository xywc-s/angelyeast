import { usePost } from './request'

export const findAll = (data) => usePost('/tag/findAll', data)

export const findEntity = (data = {}) => usePost('/tag/findEntity', data)

export const saveEntity = (data = {}) => usePost('/tag/save', data)

export const updateEntity = (data = {}) => usePost('/tag/update', data)

export const deleteEntity = (data = {}) => usePost('/tag/delete', data)
