<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">支付交易</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>设置</el-breadcrumb-item>
                <el-breadcrumb-item>支付交易</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <div class="pay">
                    <div class="header">
                        <div>微信安全支付</div>
                        <div>
                            <el-switch
                                style="display: block"
                                v-model="isWeChat"
                                active-color="#13ce66"                               
                            />
                        </div>
                    </div>
                    <div class="pay-content">
                        <p>启用微信支付，买家可使用支付宝进行付款。</p>
                        <p>交易手续费：</p>
                        <p>有赞不收取任何提现手续费；</p>
                        <p>支付机构收取0.6%交易手续费，通过完成代缴。</p>
                    </div>
                </div>

                <div class="pay ali-pay">
                    <div class="header">
                        <div>支付宝支付</div>
                        <div>
                            <el-switch
                                style="display: block"
                                v-model="isAli"
                                active-color="#13ce66"                               
                            />
                        </div>
                    </div>
                    <div class="pay-content">
                        <p>启用支付宝后，买家可使用支付宝进行付款。货款将先进入你的有客店铺账户余额，你可以随时申请提现。</p>
                        <p>交易手续费：</p>
                        <p>不收取任何提现手续费；</p>
                        <p>支付机构收取0.6%交易手续费，通过完成代缴。</p>
                    </div>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                isWeChat: true,
                isAli:true
            }
        },
        mounted() {
        },
        methods: {

        },
    }
</script>


<style scoped lang="scss">
.nav-bar {
    height: 60px;
    line-height: 60px;
    background-color: #fefefe;
    padding: 0 30px;
    .nav-bar-left {
        float: left;
    }
    .user {
        float: right;
        .user-avatar {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            vertical-align: middle;
        }
        div {
            display: inline-block;
        }
    }
} 
.main-content {
    padding: 0 15px;
    .content {
        background-color: #ffffff;
        border-radius: 4px;
        padding: 15px;
    }
}
.pay {
    border: 1px solid #ccc;
    .header {
        height: 42px;        
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        background-color: rgb(242, 240, 242);
    }
    .pay-content {
        padding: 20px;
        p {
            line-height: 28px;
            font-size: 14px;
        }
        p:nth-of-type(2) {
            font-weight: 700;
        }
    }
}
.ali-pay {
    margin-top: 15px;
}
</style>