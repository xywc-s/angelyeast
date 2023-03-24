import request from './request'

export function findAll(data) {
  return request({
    url: '/mms/businessUnit/findAll',
    data
  })
}

export function findEntity(data = {}) {
  return request({
    url: '/mms/businessUnit/findEntity',
    data
  })
}

export function update(data) {
  return request({
    url: '/mms/businessUnit/update',
    data
  })
}
