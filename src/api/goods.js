import http from '../utils/http'
import { client_id,client_secret,sign,timestamp,v,sessionId } from './config'

/**
 *---------------------------------------------------------
 * @name: 获取商品销售属性类型
 * @description: 获取商品销售属性类型
 * 
 *---------------------------------------------------------
 */
export const getFeatureType = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v
    }
    return http.get('/goods/featureType',{params})
}

/**
 *---------------------------------------------------------
 * @name: 查询商品页表
 * @description: 查询商品页表
 * 
 *---------------------------------------------------------
 */
export const getGoodslist = ({ goodsCode="",goodsName="",goodsStatus="",page }) => {
    let params = {
        client_id,client_secret,sign,timestamp,v,goodsCode,goodsName,goodsStatus,page
    }
    return http.get('/goods/list',{params})
}

/**
 *---------------------------------------------------------
 * @name: 商品-商品创建
 * @description: 发布商品
 * 
 *---------------------------------------------------------
 */
export const publishGoods = ({ categoryId,goodsName,customerProps,quoteType,uomId,range,salePrice,quantity,goodsCode,images,details,goodsStatus,logisticsId,goodsSkus }) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,categoryId,goodsName,customerProps,quoteType,uomId,range,salePrice,quantity,goodsCode,images,details,goodsStatus,logisticsId,goodsSkus
    }
    console.log(JSON.stringify(data))
    return http.post('/goods/publish',data)
}

/**
 *---------------------------------------------------------
 * @name: 获取商品单位
 * @description: 计量单位
 * 
 *---------------------------------------------------------
 */
export const getUom = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v,
    }
    return http.get('/goods/uom',{params})
}

/**
 *---------------------------------------------------------
 * @name: 获取商品分类列表
 * @description: 商品分类列表
 * 
 *---------------------------------------------------------
 */
export const getSortList = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v,
    }
    return http.get('/sort/list',{params})
}

/**
 *---------------------------------------------------------
 * @name: 商品分类添加
 * @description: 商品分类添加
 * 
 *---------------------------------------------------------
 */
export const goodsClassifySortAdd = ({sortName,description,sequence,sortStatus}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,sortName,description,sequence,sortStatus
    }
    return http.post('/sort/add',data)
}

/**
 *---------------------------------------------------------
 * @name: 商品分类删除
 * @description: 商品分类删除
 * 
 *---------------------------------------------------------
 */
export const goodsClassifySortDelete = ({sortId}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,sortId
    }
    return http.delete('/sort/delete',{data})
}

/**
 *---------------------------------------------------------
 * @name: 商品分类修改
 * @description: 商品分类修改
 * 
 *---------------------------------------------------------
 */
export const goodsClassifySortModify = ({sortName,description,sequence,sortStatus,sortId}) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,sortName,description,sequence,sortStatus,sortId
    }
    return http.post('/sort/modify',data)
}

/**
 *---------------------------------------------------------
 * @name: 查询商品详情
 * @description: 查询商品详情
 * 
 *---------------------------------------------------------
 */
export const getGoodsInfo = ({goodsId}) => {
    let params = {
        client_id,client_secret,sign,timestamp,v,goodsId
    }
    return http.get('/goods/info',{params})
}