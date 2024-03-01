import { json } from '../config'
import { usePost } from './request'

export const findAll = (data) => usePost('/attachment/findAll', data)
export const findEntity = (data = {}) => usePost('/attachment/findEntity', data)
export const saveEntity = (data = {}) => usePost('/attachment/save', data)
export const saveAttachment = (data = {}) => usePost('/attachment/saveAttachment', data)
export const updateAttachment = (data = {}) => usePost('/attachment/updateAttachment', data)

export const updateEntity = (data = {}) => usePost('/attachment/update', data)

export const deleteEntity = (data = {}) => usePost('/attachment/delete', data)

export const findByIds = (data = {}) => usePost('/attachment/findByIds', data, json)
