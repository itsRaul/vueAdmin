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
export const staffAdd = ({contact,name,userLoginId,roleId,staffCode,password}) => {
  let data = {
      client_id,client_secret,sign,timestamp,v,contact,name,userLoginId,roleId,staffCode,password
  }
  return http.post('/staff/add',data)
}

/**
 *---------------------------------------------------------
 * @name: 商品地址
 * @description: 创建店铺地址
 *---------------------------------------------------------
 */
export const addressAdd = ({contact,provinceId,cityId,districtId,zipcode,telphone,mobile,remark,address}) => {
  let data = {
      client_id,client_secret,sign,timestamp,v,contact,provinceId,cityId,districtId,zipcode,telphone,mobile,remark,address
  }
  return http.post('/address/add',data)
}

/**
 *---------------------------------------------------------
 * @name: 商品地址
 * @description: 删除店铺地址
 * 
 *---------------------------------------------------------
 */
export const addressDelete = ({addressId}) => {
  let data = {
      client_id,client_secret,sign,timestamp,v,addressId
  }
  return http.delete('/address/delete',{data})
}

/**
 *---------------------------------------------------------
 * @name: 商品地址
 * @description: 店铺地址列表
 * 
 *---------------------------------------------------------
 */
export const addressList = () => {
  let params = {
      client_id,client_secret,sign,timestamp,v
  }
  return http.get('/address/list',{params})
}

/**
 *---------------------------------------------------------
 * @name: 商品地址
 * @description: 修改店铺地址
 *---------------------------------------------------------
 */
export const addressModify = ({contact,provinceId,cityId,districtId,zipcode,telphone,mobile,remark,address,addressId}) => {
  let data = {
      client_id,client_secret,sign,timestamp,v,contact,provinceId,cityId,districtId,zipcode,telphone,mobile,remark,address,addressId
  }
  return http.post('/address/modify',data)
}

/**
 *---------------------------------------------------------
 * @name: 商品地址
 * @description: 店铺地址默认发货，退货地址设置
 * @param : isShip 是否是默认发货地址 设置为Y 不设置不需要传
 * @param : isReturn 是否是默认退货地址 设置为Y 不设置不需要传
 * @param : addressId 地址id
 *---------------------------------------------------------
 */
export const addressSetting = ({isShip='',isReturn='',addressId}) => {
  let data = {
      client_id,client_secret,sign,timestamp,v,isShip,isReturn,addressId
  }
  return http.post('/address/setting',data)
}

/**
 *---------------------------------------------------------
 * @name: 商品地址
 * @description: 店铺地址详情
 * 
 *---------------------------------------------------------
 */
export const addressInfo = ({addressId}) => {
  let params = {
      client_id,client_secret,sign,timestamp,v,addressId
  }
  return http.get('/address/info',{params})
}