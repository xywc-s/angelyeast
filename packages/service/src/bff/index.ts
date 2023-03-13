import request from './request'

/**
 * 获取所有应用配置
 */
export const getAppsRoutes = () => request.get('/nacos/findAll')
/**
 * 更新应用配置
 */
export const updateAppsRoutes = (data) => request.post('/nacos/update', data)
