import request from './request'

const headers = {
  'Content-Type': 'application/json'
}
export function findAll(data) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/findAll',
    data
  })
}

export function findEntity(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/findEntity',
    data
  })
}

export function saveEntity(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/save',
    data
  })
}

export function updateEntity(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/update',
    data
  })
}

export function deleteEntity(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/delete',
    data
  })
}
export function searchByCondition(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/searchByCondition',
    data,
    headers
  })
}

export function getGroupTypes(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/getType',
    data,
    headers
  })
}

export function batchUpdate(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/batchUpdateConfig',
    data,
    headers
  })
}

export function getAllAttributes(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/getAllAttributes',
    data,
    headers
  })
}

export function getGroupAttributes(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/getAttributes',
    data,
    headers
  })
}

export function getTreeData(data = {}) {
  return request({
    url: '/mms/materialGroupingAttributeConfig/getGroupingData',
    data,
    headers
  })
}
