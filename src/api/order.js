import http from '../utils/http'
import { client_id,client_secret,sign,timestamp,v,sessionId } from './config'

/**
 *---------------------------------------------------------
 * @name: 获取省市区
 * @description: 获取省市区
 * 
 *---------------------------------------------------------
 */
export const getGeoDatas = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v
    }
    return http.get('/geo/datas',{params})
}

/**
 *---------------------------------------------------------
 * @name: 物流模板列表
 * @description: 物流模板列表
 * 
 *---------------------------------------------------------
 */
export const getTemplateList = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v
    }
    return http.get('/logistics/template/list',{params})
}

/**
 *---------------------------------------------------------
 * @name: 物流模板添加
 * @description: 物流模板添加
 * 
 *---------------------------------------------------------
 */
export const createTemplate = ({name,provinceId,cityId,districtId,bearFreight,uomType,rule}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,name,provinceId,cityId,districtId,bearFreight,uomType,rule
    }
    return http.post('/logistics/template/create',data)
}

/**
 *---------------------------------------------------------
 * @name: 物流模板修改
 * @description: 物流模板修改
 * 
 *---------------------------------------------------------
 */
// export const modifyTemplate = () => {
//     let data = {
//         client_id,client_secret,sign,timestamp,v,name,province_id,city_id,district_id,bearFreight,uomType
//     }
//     return http.post('/logistics/template/modify',data)
// }

/**
*---------------------------------------------------------
* @name: 物流模板修改
* @description: 物流模板修改
* 
*---------------------------------------------------------
*/
export const modifyTemplate = ({name,provinceId,cityId,districtId,bearFreight,uomType,rule,logisticsId}) => {
    let data = {
    client_id,client_secret,sign,timestamp,v,name,provinceId,cityId,districtId,bearFreight,uomType,rule,logisticsId
    }
    return http.post('/logistics/template/modify',data)
}


export const deleteTemplate = (logisticsId) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,logisticsId
    }
    return http.delete('/logistics/template/delete',{data})
}

/**
 * 获取订单列表
 * @param {*} consignee  收货人姓名
 * @param {*} deliveryType 配送类型
 * @param {*} endTime 下单结束时间
 * @param {*} startTime 下单开始时间
 * @param {*} mobile 收货人手机号
 * @param {*} orderCode 订单号
 * @param {*} orderStatus 订单状态
 * @param {*} payType 支付类型
 */

export const getAllOderList = ({consignee,deliveryType,endTime,mobile,orderCode,orderStatus,payType,startTime,currentPage,total,totalPage}) => {
    let params = {
        client_id,client_secret,sign,timestamp,v,consignee,deliveryType,endTime,mobile,orderCode,orderStatus,payType,startTime,currentPage,total,totalPage
    }
    return http.get('/order/list',{params})
}

/**
 * 
 * @param {*} orderId 订单id 
 */
export const getOrderIfo = ({orderId,reason}) => {
  let params = {
      client_id,client_secret,sign,timestamp,v,orderId,reason
  }
  return http.get('/order/info',{params})
}

/**
*---------------------------------------------------------
* @name: 获取物流模板列表
* @description: 获取物流模板列表
* 
*---------------------------------------------------------
*/
export const logisticsCorps = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v,
    }
    return http.get('/logistics/corps',{params})
}

/**
*---------------------------------------------------------
* @name: 订单发货
* @description: 订单发货
* 
*---------------------------------------------------------
*/
export const orderShip = ({deliveryCode,deliveryCorpId,deliveryCorpName,orderId}) => {
    let data = {
    client_id,client_secret,sign,timestamp,v,deliveryCode,deliveryCorpId,deliveryCorpName,orderId
    }
    return http.post('/order/ship',data)
}