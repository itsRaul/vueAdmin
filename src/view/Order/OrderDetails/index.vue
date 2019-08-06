<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">订单详情</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>订单</el-breadcrumb-item>
                <el-breadcrumb-item>所有订单</el-breadcrumb-item>
                <el-breadcrumb-item>订单详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <div class="order_status">
                    
                    <div class="s-step" v-if="!close">
                        <div class="s-step-text" :class="active[0]===true?'active-text':''">买家下单</div>
                        <i class="iconfont icon-gouxuan icon" :class="active[0]===true?'active-text':''"></i>
                        <p class="line" :class="active[1]===true?'active-line':''"></p>
                        <p class="line" :class="active[1]===true?'active-line':''"></p>
                        <div class="step-time" :class="active[0]===true?'active-text':''">{{active[0]===true?oderData.createTime:''}}</div>                        
                    </div>
                    <div class="s-step" v-else>
                        <div class="s-step-text" :class="active[0]===true?'active-text':''">订单关闭</div>
                        <i class="iconfont icon-gouxuan icon" :class="active[0]===true?'active-text':''"></i>
                        <p class="line" :class="active[1]===true?'active-line':''"></p>
                        <p class="line" :class="active[1]===true?'active-line':''"></p>
                        <div class="step-time" :class="active[0]===true?'active-text':''">{{active[0]===true?oderData.createTime:''}}</div>                        
                    </div>
                    <div class="s-step">                      
                        <div class="s-step-text " :class="active[1]===true?'active-text':''">已付款</div>
                        <i class="iconfont icon-gouxuan icon " :class="active[1]===true?'active-text':''"></i>
                        <p class="line" :class="active[2]===true?'active-line':''"></p>
                        <p class="line" :class="active[2]===true?'active-line':''"></p>
                        <div class="step-time" :class="active[1]===true?'active-text':''">{{active[1]===true?oderData.createTime:''}}</div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text" :class="active[2]===true?'active-text':''">待发货</div>
                        <i class="iconfont icon-gouxuan icon" :class="active[2]===true?'active-text':''"></i>
                        <p class="line" :class="active[3]===true?'active-line':''"></p>
                        <p class="line" :class="active[3]===true?'active-line':''"></p>
                        <div class="step-time" :class="active[2]===true?'active-text':''">{{active[2]===true?oderData.createTime:''}}</div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text" :class="active[3]===true?'active-text':''">待结算</div>
                        <i class="iconfont icon-gouxuan icon" :class="active[3]===true?'active-text':''"></i>
                        <div class="step-time" :class="active[3]===true?'active-text':''">{{active[3]===true?oderData.createTime:''}}</div>                        
                    </div>
                </div>

                <el-col class="order-info-content">
                    <el-col :span="12" class="order-info">
                        <div class="title">订单信息</div>
                        <div class="info-list">
                            <div class="info-item">
                                <div class="info-label">订单编号：</div>
                                <div class="info-text">{{oderData!==null?oderData.orderCode:''}}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">付款方式：</div>
                                <div class="info-text">微信支付</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">买家：</div>
                                <div class="info-text">{{oderData!==null?oderData.buyer:''}}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">收货地址：</div>
                                <div class="info-text">{{oderData!==null?oderData.address.consignee+','+oderData.address.mobile+','+oderData.address.address+','+oderData.address.zipcode:''}}</div>
                            </div>                            
                        </div>
                        <div class="info-item">
                            <div class="info-label">买家留言：</div>
                            <div class="info-text">-</div>
                        </div>
                    </el-col>

                    <el-col :span="12" class="order-status">
                        <div class="header">
                            <div class="header-status">
                                <i class="iconfont icon-zhuangtai-jinggao status-icon"></i>
                                <div class="header-tips">
                                    <div>订单状态：{{close!==true?'买家已经付款，等待商家发货':'订单已关闭'}}</div>
                                    <div>{{close!==true?'买家已付款至有客待结算账户，请尽快发货，否则买家有权申请退款':'买家已关闭订单'}}</div>
                                    <div class="refund">
                                        <el-button size="small" v-if="!close">在线退款</el-button>
                                        <el-button size="small" v-else>交易关闭</el-button>
                                        <div class="refund-btn">
                                            <span>备注</span>
                                            <i class="iconfont icon-xingxing-copy"></i>
                                            <i class="iconfont icon-xingxing-copy"></i>
                                            <i class="iconfont icon-xingxing-copy"></i>
                                            <i class="iconfont icon-xingxing-copy"></i>
                                            <i class="iconfont icon-xingxing-copy"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="remind">
                            <div class="remind-title">
                                温馨提醒：
                            </div>
                            <div class="remind-text">
                                <p>如果无法发货，请及时与买家联系并说明情况后进行退款；</p>
                                <p>买家申请退款后需买家同意后再发货，否则买家有权拒收货物；</p>
                                <p>买家付款后超过7天仍未发货，将有权申请有客客服介入发起退款维权</p>
                            </div>
                        </div>
                    </el-col>
                </el-col>

                <div class="tables">
                    <div class="tables-content">
                        <el-table
                            :header-cell-style="{background:'rgb(237, 237, 237)'}"
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="商品名称"
                            >
                                <template slot-scope="scope">
                                    <div class="product">
                                        <img src="../../../assets/img/logo.png" alt="">
                                        <div class="product-text">
                                            <div class="fz-color">{{scope.row.goodsName}}</div>
                                            <div class="product-type">
                                                <span>颜色：白色</span>
                                                <span>数量：6只装</span>
                                            </div>
                                        </div>
                                    </div>
                                </template>  
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="单价"
                                width="120">
                                <template slot-scope="scope">
                                    <div class="fz-color">¥{{scope.row.goodsPrice}}</div>
                                </template> 
                            </el-table-column>
                            <el-table-column
                                prop="quantity"
                                label="数量"
                                width="120">
                             </el-table-column>
                            <el-table-column
                                prop="address"
                                label="优惠"
                                width="120">
                                <template slot-scope="scope">
                                    <div class="fz-color">-</div>
                                </template>  
                             </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="小计"
                                width="120">
                                <template slot-scope="scope">
                                    <div class="fz-color">¥{{scope.row.goodsPrice*scope.row.quantity}}</div>
                                </template>  
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script >
    import {getOrderIfo} from "../../../api/order"
    export default {
        data() {
            return {
                close: false,
                active: [],
                oderData: null,
                tableData: [],//表格数据
            }
        },
        mounted() {
          // 从路由获取订单ID
        //   let orderId = this.$route.params.orderId 
         let orderId = this.$route.query.orderId 
          let obj = {
            orderId: orderId,
            reason: ""
          }
          let orderInfo = getOrderIfo(obj).then(res => {
            if(res.data.code == 0) {
                this.oderData = res.data.data
                
                
                if(this.oderData.orderStatus === 'CLOSED') {
                    this.close = true
                }else {
                    let status = {
                        WAIT_PAY: 3
                    }
                    let statu = this.oderData.orderStatus
                    for(let i=0; i<status[statu]; i++) {
                        console.log('稍等 ')
                        this.active.push(true)
                    }
                    
                }
                this.tableData = this.oderData.items
                console.log(this.oderData)
            }
          })
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
    margin: 0 15px;
    .content {
        background-color: #ffffff;
        border-radius: 4px;
        padding: 15px;
    }
}
.order_status {
    overflow: hidden;
    padding: 15px;
    .s-step {
        float: left;
        .s-step-text {
            padding-bottom: 10px;
        }
        .icon {
            font-size: 30px;
            vertical-align: middle;
        }
        .line {
            width:100px;
            height: 4px;
            background-color: #999;
            display:inline-block;
            vertical-align: middle;
            margin-left: -5px;
        }
        .step-time {
            color: #999;
            font-size: 14px;
        }
         .active-text {
            color: rgb(255, 152, 0);
        }
        .active-line {
            background-color: rgb(255, 152, 0);
        }
    }
   
}
.order-info-content {
    border: 1px solid #f2f2f2;
    margin-top: 20px;
}
.order-info {
    border-right: 1px solid #f2f2f2;
    padding: 15px 15px 30px 15px;
    .title {
        font-weight: 700;
        padding-left: 18px;
    }
    .info-list {
        border-bottom: 1px dashed #f2f2f2;
        padding-bottom: 15px;
    }
    .info-item {
        overflow: hidden;
        font-size: 14px;
        padding: 10px 0;
        .info-label {
            width: 80px;
            color: #bababa;
            text-align: right;
            margin-right: 6px;
            float: left;
        }
        .info-text {
            vertical-align: middle;
            margin-left: 80px;
        }
    }
}
.order-status {
    padding: 15px;
    .header {
        border-bottom: 1px dashed #f2f2f2;
        padding-bottom: 30px;
        .header-status {
            display: flex;         
            justify-content: center;
            .status-icon {
                color: rgb(255, 152, 0);
                font-size: 30px;
                margin-right: 10px;
            }
            .header-tips {
                div:nth-of-type(1) {
                    font-weight: 700;
                }
                div:nth-of-type(2) {
                    font-size: 14px;
                    color: #bababa;
                }
                .refund {
                    padding-top: 30px;
                    .refund-btn {
                        display: inline-block;
                        vertical-align: middle;
                        padding-left: 15px;
                        span {
                            font-size: 14px;
                            color: rgb(63, 68, 181);
                            font-weight: normal;
                        }
                        i {
                            color: #ccc;
                        }
                    }
                }
            }
        }
    }
    .remind {
        padding-top: 15px;
        .remind-title {
            color: rgb(229, 28, 35);
        }
        .remind-text {
            p {
                font-size: 14px;
                color: rgb(186, 186, 186);
                line-height: 24px;
            }
        }
    }
}
.tables {
    .tables-content {
        border: 1px solid #EBEEF5;;
        .product {
            font-size: 12px;
            img {
                width: 50px;
                height: 50px;
                vertical-align: middle;
            }
            .product-text {
                display: inline-block;
                vertical-align: middle;
                margin-left: 10px;
                .product-type {
                    span {
                        color: rgb(115, 112, 115);
                    }
                }
            }
        }
        .fz-color {
            color: #202020;
        }
    }
}
</style>