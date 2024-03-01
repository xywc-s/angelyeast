import { usePost } from './request'

export const findAll = (data) => usePost('/warehouse/findAll', data)

export const findEntity = (data = {}) => usePost('/warehouse/findEntity', data)

export const saveEntity = (data = {}) => usePost('/warehouse/save', data)

export const updateEntity = (data = {}) => usePost('/warehouse/update', data)

export const deleteEntity = (data = {}) => usePost('/warehouse/delete', data)
