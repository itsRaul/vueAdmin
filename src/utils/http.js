import _axios from 'axios'
import qs from  'qs';
import { getStore } from './utils'

//创建axios的基本配置
const axios = _axios.create({
    baseURL: 'http://api.mikoo.net', //测试
    // baseURL: process.env.NODE_ENV=='development'?null:'http://api.mikoo.net',
    transformRequest:[function(data){       
        data = qs.stringify(data);
        return data
    }],
    headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        let _data = JSON.parse(data);
        return _data;
    }],
    withCredentials:true
})
axios.defaults.withCredentials = true

//添加拦截器
axios.interceptors.request.use(function (config) {
    config.headers['Authorization'] = 'Bearer'+getStore('token')
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axios