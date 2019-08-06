import http from '../utils/http'
import { client_id,client_secret,sign,timestamp,v,sessionId } from './config'

/**
 *---------------------------------------------------------
 * @name: 获取主营类目
 * @description: 获取主营类目
 * 
 *---------------------------------------------------------
 */
export const getPrimary = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v,sessionId
    }
    return http.get('/category/primary',{params})
}

/**
 *---------------------------------------------------------
 * @name: 获取图片验证码
 * @description: 获取图片验证码
 * 
 *---------------------------------------------------------
 */
export const getKaptcha = () => {
    let params = {
        client_id,client_secret,sign,timestamp,v,sessionId
    }
    return http.get('/kaptcha',{params})
}

/**
 *---------------------------------------------------------
 * @name: 登陆
 * @description: 登陆接口
 * 
 *---------------------------------------------------------
 */
export const getToken = ({ grant_type,username,password,authCode }) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,grant_type,username,password,authCode
    }
    return http.post('/oauth/token',data)
}

/**
 *---------------------------------------------------------
 * @name: 获取短信验证码
 * @description: 获取短信验证码
 * @param: REGISTER：短信类型固定值
 * 
 *---------------------------------------------------------
 */
export const getSms = ({ authCode,mobile,smsType='REGISTER' }) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,sessionId,authCode,mobile,smsType
    }
    return http.post('/send/sms',data)
}

/**
 *---------------------------------------------------------
 * @name: 验证手机号
 * @description: 注册立即加入
 * 
 *---------------------------------------------------------
 */
export const verifyMobile = ({ mobile,smsCode }) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,mobile,smsCode
    }
    return http.post('/verify/mobile',data)
}

/**
 *---------------------------------------------------------
 * @name: 注册开户
 * @description: 创建店铺
 * idcardExpireDate="",idcardName="",idcardNumber="",smsCode="",authCode="" idcardExpireDate,idcardName,idcardNumber,smsCode,authCode
 *---------------------------------------------------------
 */
export const register = ({ categoryId,companyName,idcardBack,idcardFront,licenseCode,licenseExpireDate,licenseUrl,mobile,password,idcardExpireDate,idcardName,idcardNumber,smsCode,authCode,registerIp="192.168.1.104" }) => {
    let data = {
        client_id,client_secret,sign,timestamp,v,sessionId,categoryId,companyName,idcardBack,idcardFront,licenseCode,licenseExpireDate,licenseUrl,mobile,password,idcardExpireDate,idcardName,idcardNumber,smsCode,authCode,registerIp
    }
    return http.post('/register',data)
}
