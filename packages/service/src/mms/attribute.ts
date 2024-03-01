import { json } from '../config'
import { usePost } from './request'

export const findAll = (data) => usePost('/attribute/findAll', data)
export const searchByCondition = (data) => usePost('/attribute/searchByCondition', data, json)

export const findEntity = (data = {}) => usePost('/attribute/findEntity', data)

export const saveEntity = (data = {}) => usePost('/attribute/save', data)

export const updateEntity = (data = {}) => usePost('/attribute/update', data)

export const deleteEntity = (data = {}) => usePost('/attribute/delete', data)

export const getStatusList = (data = {}) => usePost('/attribute/getStatusList', data)

/**
 * 检查sql脚本
 * @param {string} script sql脚本
 */
export const checkScript = (script) =>
  usePost(
    '/attribute/checkScript',
    {
      script
    },
    json
  )
