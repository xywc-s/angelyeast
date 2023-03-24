import { json } from '../config'
import request from './request'

export const findAll = (data) => request.post('/mms/attribute/findAll', data)
export const searchByCondition = (data) =>
  request.post('/mms/attribute/searchByCondition', data, json)

export const findEntity = (data = {}) => request.post('/mms/attribute/findEntity', data)

export const saveEntity = (data = {}) => request.post('/mms/attribute/save', data)

export const updateEntity = (data = {}) => request.post('/mms/attribute/update', data)

export const deleteEntity = (data = {}) => request.post('/mms/attribute/delete', data)

export const getStatusList = (data = {}) => request.post('/mms/attribute/getStatusList', data)

/**
 * 检查sql脚本
 * @param {string} script sql脚本
 */
export const checkScript = (script) =>
  request.post(
    '/mms/attribute/checkScript',
    {
      script
    },
    json
  )
