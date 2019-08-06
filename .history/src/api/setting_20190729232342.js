import http from '../utils/http'
import { client_id,client_secret,sign,timestamp,v,sessionId } from './config'
const os = require('os')
let localhost = ''
try {
  const network = os.networkInterfaces()
  localhost = network[Object.keys(network)[0]][1].address
} catch (e) {
  localhost = '127.0.0.1';
}

/**
 *---------------------------------------------------------
 * @name: 添加角色
 * @description: 添加角色
 * 
 *---------------------------------------------------------
 */
export const roleAdd = ({roleName,description,permit}) => {
  let data = {
      client_id,client_secret,sign,timestamp,v,roleName,description,permit
  }
  return http.post('/role/add',data)
}

/**
 *---------------------------------------------------------
 * @name: 获取角色列表
 * @description: 获取角色列表
 * 
 *---------------------------------------------------------
 */
export const roleList = () => {
  let params = {
      client_id,client_secret,sign,timestamp,v,
  }
  return http.get('/role/list',{params})
}

/**
 *---------------------------------------------------------
 * @name: 删除角色
 * @description: 删除角色
 * 
 *---------------------------------------------------------
 */
export const roleRemoveit = ({roleId}) => {
  let data = {
      client_id,client_secret,sign,timestamp,v,roleId
  }
  return http.delete('/role/removeit',{data})
}

/**
 *---------------------------------------------------------
 * @name: 修改角色
 * @description: 修改角色
 * 
 *---------------------------------------------------------
 */
export const roleUpdate = ({roleName,description,permit,roleId}) => {
  let data = {
      client_id,client_secret,sign,timestamp,v,roleName,description,permit,roleId
  }
  return http.post('/role/update',data)
}

/**
 *---------------------------------------------------------
 * @name: 获取资源列表
 * @description: 添加角色的权限
 * 
 *---------------------------------------------------------
 */
export const resourceList = () => {
  let params = {
      client_id,client_secret,sign,timestamp,v,
  }
  return http.get('/resource/list',{params})
}

/**
 *---------------------------------------------------------
 * @name: 获取角色详情
 * @description: 获取角色详情
 * 
 *---------------------------------------------------------
 */
export const roleInfo = ({roleId}) => {
  let params = {
      client_id,client_secret,sign,timestamp,v,roleId
  }
  return http.get('/role/info',{params})
}

/**
 *---------------------------------------------------------
 * @name: 获取员工列表
 * @description: 获取员工列表
 * 
 *---------------------------------------------------------
 */
export const staffList = () => {
  let params = {
      client_id,client_secret,sign,timestamp,v
  }
  return http.get('/staff/list',{params})
}

/**
 *---------------------------------------------------------
 * @name: 添加员工
 * @description: 添加员工 userLoginId：1
 * 
 *---------------------------------------------------------
 */
export const staffAdd = ({mobile,name,userLoginId,roleId,staffCode,password}) => {
  let createIp = '127.0.0.1'
  let data = {
      client_id,createIp,client_secret,sign,timestamp,v,mobile,name,userLoginId,roleId,staffCode,password
  }
  return http.post('/staff/add',data)
}