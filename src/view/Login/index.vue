<template>
<el-container class="login">
    <div class="login-header">LOGO</div>
    <div class="login-main" style="padding:0">
        <img src="../../assets/img/login.png" alt="" class="login-img">
        <div class="login-panel">
            <div class="login-title">
                <div class="login-title-left">
                    <div class="active-title ">账户登录</div>
                </div>
            </div>
            <div class="login-input">
                <div class="login-input-item">
                    <i class="iconfont icon-yidongduanicon-1"></i>
                    <input type="text" v-model="tel" placeholder="请输入账户名/手机号">
                </div>
                <div class="login-input-item">
                    <i class="iconfont icon-yidongduanicon-"></i>
                    <input type="password" v-model="password" placeholder="请输入密码">
                </div>
                <div class="login-code">
                    <div class="login-input-item code-input">
                        <i class="iconfont icon-securityCode-b"></i>
                        <input type="text" v-model="imgCode" placeholder="请输入右侧验证码"  @keydown="keyDownEnter($event)"/>
                    </div>
                    <div class="code-img">
                        <img :src="imgUrl" class="code-img" @click="resetImg()" alt="验证码" title="点击换一张">
                    </div>
                </div>
                <div class="login-tips">
                    <div>
                        <el-checkbox v-model="checked"/>
                        一周免登陆
                    </div>
                    <div>忘记密码</div>
                </div>
                <div>
                    <el-button type="danger" size="small" style="width:100%" @click="onLogin()">进入有客</el-button>
                </div>
                <div class="login-forget" @click="toRegister()" >立即注册，免费开店</div>
            </div>
        </div>
    </div>
    <div class="login-footer">
        <div>Copyright 2018-2019  eqiding.com 沪ICP备11057864-1号</div>
    </div>
</el-container>
</template>

<script>
import { getToken } from 'api/login.js'
import { baseUrl } from 'api/config.js'
import { setStore } from 'utils/utils.js'

export default {
    data() {
        return {
            tel: '',
            password: '',
            imgCode: '',
            checked: false,
            imgUrl: baseUrl+'/kaptcha?client_id=dev&client_secret=dev&sign=apisign&timestamp=1558019916057&v=v1&sessionId=sessionId'
        }
    },
    mounted() {
    },
    methods: {
        toRegister() {
            this.$router.push('/loginAdd')
        },
        
        /** 重置图形验证码 */
        resetImg() {
            let date = new Date().getTime()
            this.imgUrl = baseUrl+'/kaptcha?client_id=dev&client_secret=dev&sign=apisign&timestamp=1558019916057&v=v1&sessionId=sessionId&v='+ date;
        },

        keyDownEnter(e){
            // key.Code === 13表示回车键 
            if(e.keyCode === 13){
                //逻辑处理
                this.onLogin()
            }
        },

        /** 
         * 登录 
         * 账号：admin
         * 密码：123456
         * */
        onLogin() {
            let grant_type = 'password'
            let username = this.tel
            let password = this.password
            let authCode = this.imgCode

            if (!username) {
                this.$message({
                    message: '请输入账户名/手机号',
                    type: 'warning'
                });
                return 
            }else if (!password) {
                this.$message({
                    message: '请输入密码',
                    type: 'warning'
                });
                return 
            }else if (!authCode) {
                this.$message({
                    message: '请输入右侧验证码',
                    type: 'warning'
                });
                return 
            }

            getToken({ grant_type,username,password,authCode }).then(res => {
                let assessToken = res.data.access_token
                if (assessToken) {
                    this.$message({
                        message: '登录成功',
                        type: 'success'
                    });
                    setStore('token',assessToken)
                    this.$router.replace({path:'/admin/home',query:{id:'0'}})
                } else {
                    this.$message.error(res.data.msg);
                }
                
            })            
        },
    },
}
</script>

<style lang='scss' scoped>   
.login {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    &-header {
        width: 100%;
        height: 82px;
        font-size: 48px;
        line-height: 82;
        margin-left: 30px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    &-main {
        position: relative;
        height: 536px;
        width: 100%;
        // min-width: 1280px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        .login-img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
        }
        .login-panel{
            background: #fff;
            border-radius: 4px;   
            position: absolute;
            width: 420px;
            top: 42px;
            right: 100px;
            display: inline-flex;
            flex-direction: column; 
            padding-bottom: 30px;     
            .login-title {
                padding: 30px 30px 0 30px;
                text-align: center;
                .active-title {
                    color: #f63b46;
                }
            }
            .login-input {
                padding: 30px 30px 0 30px;
                .login-input-item {
                    border: 1px solid #eeeeee;
                    height: 36px;
                    line-height: 36px;
                    padding: 0 15px;
                    border-radius: 4px;
                    margin-bottom: 15px;
                    display: flex;
                    input {
                        border:none;
                        outline: none;
                        height: 100%;
                        flex: 1;
                        padding-left: 10px;
                        font-size: 14px;
                    }
                }
                .login-tips {
                    font-size: 12px;
                    color: #4e7bb4;
                    overflow: hidden;
                    padding-bottom: 10px;
                    div:nth-of-type(1) {
                        float: left;
                    }
                    div:nth-of-type(2) {
                        float: right;
                    }
                }
                .login-forget {
                    padding-top: 10px;
                    text-align: right;
                    font-size: 12px;
                    color: #4e7bb4;
                    cursor: pointer;
                }
                .login-code {
                    display: flex;
                    .code-img {
                        margin-left: 6px;
                        img {
                            width: 100%;
                            height: 36px;
                        }
                    }
                }
            }
        }
    }
    &-footer {
        text-align: center;
        margin-top: 30px;
    }
}
</style>
