<template>
<el-container class="login">
    <div class="login-header">LOGO</div>
    <div class="login-main" style="padding:0">
        <img src="../../../assets/img/login.png" alt="" class="login-img">
        <div class="login-panel">
            <div class="login-title">
                加入易企订
            </div>
            <div class="login-input">
                <div class="login-input-item">
                    <i class="iconfont icon-yidongduanicon-1"></i>
                    <input type="text" v-model="tel" placeholder="请输入账户名/手机号">
                </div>
                <div class="login-code">
                    <div class="login-input-item code-input">
                        <i class="iconfont icon-securityCode-b"></i>
                        <input type="text" v-model="codeImg" placeholder="请输入右侧验证码">
                    </div>
                    <div class="code-img">
                        <img :src="imgUrl" class="code-img" @click="resetImg()" alt="验证码" title="点击换一张">
                    </div>
                </div>
                <div class="login-code">
                    <div class="login-input-item code-input">
                        <i class="iconfont icon-securityCode-b"></i>
                        <input type="text" v-model="code" placeholder="请输入短信验证码">
                    </div>
                    <div class="code-identifying">
                        <el-button type="danger" size="small" style="width: 100%" @click="_getSms()" v-show="!computedTime">获取验证码</el-button>
                        <el-button type="info" size="small" style="width: 100%" v-show="computedTime">已发送({{computedTime}}s)</el-button>
                    </div>
                </div>
                <div>
                    <el-button type="danger" size="small" style="width:100%" @click="onAdd()">立即加入</el-button>
                </div>
                <div class="login-forget" @click="toLogin()">已有账号，立即登陆</div>
            </div>
        </div>
    </div>
    <div class="login-footer">
        <div>Copyright 2018-2019  eqiding.com 沪ICP备11057864-1号</div>
    </div>
</el-container>
</template>

<script>
import { baseUrl } from 'api/config.js'
import { getSms,verifyMobile } from 'api/login.js'

export default {
    data() {
        return {
            computedTime: 0, //倒计时
            tel: '',
            codeImg: '',
            code: '',
            imgUrl: baseUrl+'/kaptcha?client_id=dev&client_secret=dev&sign=apisign&timestamp=1558019916057&v=v1&sessionId=sessionId'
        }
    },
    mounted() {
    },
    methods: {
        toLogin() {
            this.$router.push('/')
        },
        /** 重置图形验证码 */
        resetImg() {
            let date = new Date().getTime()
            this.imgUrl = baseUrl+'/kaptcha?client_id=dev&client_secret=dev&sign=apisign&timestamp=1558019916057&v=v1&sessionId=sessionId&v='+ date;
        },

        /** 获取短信验证码 */
        _getSms() {
            let mobile = this.tel
            let authCode = this.codeImg

            if (!mobile) {
                this.$message({
                    message: '请输入手机号',
                    type: 'warning'
                });
                return 
            }else if (!authCode) {
                this.$message({
                    message: '请输入图形验证码',
                    type: 'warning'
                });
                return 
            }
         
            getSms({ mobile,authCode}).then( res => {
                if (res.data.code === '0') {
                    //倒计时
                    this.computedTime = 60;
                    this.timer = setInterval(() => {
                        this.computedTime--;
                        if (this.computedTime == 0) {
                            clearInterval(this.timer)
                        }
                    },1000)
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                }else {
                    this.$message.error(res.data.msg);
                }
            })
        },

        onAdd() {
            let mobile = this.tel
            let smsCode = this.code

            if (!mobile) {
                this.$message({
                    message: '请输入账户名/手机号',
                    type: 'warning'
                });
                return 
            }else if (!this.codeImg) {
                this.$message({
                    message: '请输入图形验证码',
                    type: 'warning'
                });
                return 
            }else if (!smsCode) {
                this.$message({
                    message: '请输入短信验证码',
                    type: 'warning'
                });
                return 
            }

            verifyMobile({ mobile,smsCode }).then( res => {
                if (res.data.code === '0') {
                    this.$message({
                        message: '加入成功',
                        type: 'success'
                    });
                    this.$router.push({path:'/',query:{
                        mobile,
                        smsCode,
                        authCode:this.codeImg,
                    }})
                    /*
                    this.$router.push({path:'/createStore',query:{
                        mobile,
                        smsCode,
                        authCode:this.codeImg,
                    }})
                    */
                }else {
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
        min-width: 1280px;
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
                color: #f63b46;
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
                    .code-identifying {
                        margin-left: 10px;
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
