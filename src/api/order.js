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
export const getOrderIfo = ({orderId}) => {
  let params = {
      client_id,client_secret,sign,timestamp,v,orderId
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


/**
*---------------------------------------------------------
* @name: 取消订单
* @description: 取消订单
* 
*---------------------------------------------------------
*/
export const orderCancel = ({orderId,reason}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,orderId,reason
    }
    return http.post('/order/cancel',data)
}

/**
*---------------------------------------------------------
* @name: 订单修改地址
* @description: 订单修改地址
* 
*---------------------------------------------------------
*/
export const orderChangeAddress = ({orderId,consignee,mobile,telphone,provinceId,cityId,districtId,address,zipcode}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,orderId,consignee,mobile,telphone,provinceId,cityId,districtId,address,zipcode
    }
    return http.post('/order/changeAddress',data)
}

/**
*---------------------------------------------------------
* @name: 订单备注
* @description: 订单备注
* 
*---------------------------------------------------------
*/
export const orderMemo = ({orderId,markColor,markName,markType='COLOR',memo}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,orderId,markColor,markName,markType,memo
    }
    return http.post('/order/memo',data)
}

/**
*---------------------------------------------------------
* @name: 售后管理-退款列表
* @description: 退款列表
* 
*---------------------------------------------------------
*/
export const returnsList = ({orderCode,applyStartTime,applyEndTime,returnsCode,returnsType,requestType}) => {
    let params = {
        client_id,client_secret,sign,timestamp,v,orderCode,applyStartTime,applyEndTime,returnsCode,returnsType,requestType
    }
    return http.get('/returns/list',{params})
}

/**
*---------------------------------------------------------
* @name: 售后管理-退款详情
* @description: 退款详情
* 
*---------------------------------------------------------
*/
export const returnsDetail = ({returnsId}) => {
    let params = {
        client_id,client_secret,sign,timestamp,v,returnsId
    }
    return http.get('/returns/detail',{params})
}

/**
*---------------------------------------------------------
* @name: 售后管理-留言
* @description: 留言
* 
*---------------------------------------------------------
*/
export const returnsComments = ({description,images,returnsId}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,description,images,returnsId
    }
    return http.post('/returns/comments',data)
}

/**
*---------------------------------------------------------
* @name: 售后管理-拒绝退款
* @description: 拒绝退款
* @param{String}: reasonType  GOODS_DAMAGE 商品损坏
* 
*---------------------------------------------------------
*/
export const returnsRefuse = ({description,returnsId,images,reasonType}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,description,returnsId,images,reasonType
    }
    return http.post('/returns/refuse',data)
}

/**
*---------------------------------------------------------
* @name: 售后管理-同意退款
* @description: 仅退款申请
* 
*---------------------------------------------------------
*/
export const returnsRefund = ({password,returnsId}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,password,returnsId
    }
    return http.post('/returns/refund',data)
}

/**
*---------------------------------------------------------
* @name: 售后管理-同意退款
* @description: 退货退款处理
* 
*---------------------------------------------------------
*/
export const returnsAgree = ({addressId,description,returnsId}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,addressId,description,returnsId
    }
    return http.post('/returns/agree',data)
}

/**
*---------------------------------------------------------
* @name: 评价管理-评论列表
* @description: 评论列表
* 
*---------------------------------------------------------
*/
export const commentList = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v
    }
    return http.get('/comment/list',{params})
}

/**
*---------------------------------------------------------
* @name: 评价管理-评论详情
* @description: 评论详情
* 
*---------------------------------------------------------
*/
export const commentInfo = ({commentId}) => {
    let params = {
        client_id,client_secret,sign,timestamp,v,commentId
    }
    return http.get('/comment/info',{params})
}

/**
*---------------------------------------------------------
* @name: 评价管理-回复评价
* @description: 回复评价
* 
*---------------------------------------------------------
*/
export const commentReply = ({commentId,content,score}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,commentId,content,score
    }
    return http.post('/comment/reply',data)
}

