<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部订单" name="1">

                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>订单</el-breadcrumb-item>
                            <el-breadcrumb-item>所有订单</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">
                          
                            <!-- S 搜索条件 -->
                            <el-col class="search">
                                <el-col>
                                    <el-col :span="8" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            订单号：
                                        </el-col>
                                        <el-col :span="16">
                                            <el-input v-model="orderCode"></el-input>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="9" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            下单时间：
                                        </el-col>
                                        <el-col :span="14" class="search-label">
                                            <el-date-picker
                                                v-model="time"
                                                type="daterange"
                                                align="right"
                                                unlink-panels
                                                range-separator="至"
                                                start-placeholder="开始日期"
                                                end-placeholder="结束日期"
                                                :picker-options="pickerOptions">
                                            </el-date-picker>
                                        </el-col>
                                    </el-col>
                                </el-col>
                                <el-col>
                                    <el-col :span="8" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            收货人姓名：
                                        </el-col>
                                        <el-col :span="16">
                                            <el-input v-model="name"></el-input>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="9" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            订单状态：
                                        </el-col>
                                        <el-col :span="14">
                                            <el-select v-model="status" clearable placeholder="请选择">
                                                <el-option value="WAIT_PAY" label="待付款"></el-option>
                                                <el-option value="WAIT_SHIP" label="待发货"></el-option>
                                                <el-option value="WAIT_RECEIVING" label="已发货"></el-option>
                                                <el-option value="SUCCESS" label="已完成"></el-option>
                                                <el-option value="CLOSED" label="已关闭"></el-option>
                                                <el-option value="RETURN" label="退款中"></el-option>
                                            </el-select>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="6" class="search-item">
                                        <el-col :span="9" class="search-label">
                                            物流方式：
                                        </el-col>
                                        <el-col :span="14">
                                            <el-select v-model="types" clearable placeholder="请选择">
                                                <el-option value="EXPRESS" label="快速上门发货"></el-option>
                                                <el-option value="SELF_TAKING" label="上门自提"></el-option>
                                            </el-select>
                                        </el-col>
                                    </el-col>
                                </el-col>
                                <el-col>
                                    <el-col :span="8" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            收货人手机号：
                                        </el-col>
                                        <el-col :span="16">
                                            <el-input v-model="mobile"></el-input>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="9" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            付款方式：
                                        </el-col>
                                        <el-col :span="14">
                                            <el-select v-model="payType" clearable placeholder="请选择">
                                                <el-option value="WXPAY" label="微信支付"></el-option>
                                                <el-option value="ALIPAY" label="支付宝支付"></el-option>
                                                <!-- <el-option value="3" label="线下支付"></el-option>
                                                <el-option value="4" label="银行卡付款"></el-option> -->
                                            </el-select>
                                        </el-col>
                                    </el-col>
                                    <!-- 搜索按钮 -->
                                    <el-col :span="6" class="search-item">
                                        <el-col :span="9" class="search-label">
                                            
                                        </el-col>
                                        <el-col :span="14">
                                            <el-button type="primary" @click.native="orderSearch">搜索</el-button>
                                        </el-col>
                                    </el-col>
                                </el-col>
                            </el-col>
                            <!-- E 搜索条件 -->

                            <el-col class="table">
                                <el-col class="table-header">
                                    <el-col :span="12">
                                        <el-col :span="12">商品</el-col>
                                        <el-col :span="12" class="header-text">单价数量</el-col>
                                    </el-col>
                                    <el-col :span="3" class="header-center">买家</el-col>
                                    <el-col :span="3" class="header-center">实付金额</el-col>
                                    <el-col :span="3" class="header-center">订单状态</el-col>
                                    <el-col :span="3" class="header-center">售后</el-col>
                                </el-col>
                                <!-- 订单列表 -->
                                <el-col class="table-list" v-for="(order, index) in orderAllList" :key=index>
                                    <el-col class="list-item">
                                        <el-col class="table-header">
                                            <el-col :span="12">
                                                <el-col :span="12">订单号：<span @click="toOrderDetail(order)" class="order-code">{{order.orderCode}}</span></el-col>
                                                <el-col :span="12" class="header-text">下单时间：{{orderCreateTime(order.createTime)}}</el-col>
                                            </el-col>
                                            <el-col :span="3" class="header-center" style="opacity: 0;">1</el-col>
                                            <el-col :span="3" class="header-center" style="opacity: 0;">2</el-col>
                                            <el-col :span="3" class="header-center" style="opacity: 0;">3</el-col>
                                            <el-col :span="3" class="header-center">备注</el-col>
                                        </el-col>
                                        <el-col class="table-content">
                                            <el-col :span="12" class="right-border">
                                              <!-- 订单项 -->
                                                <el-col class="product" v-for="(item, itemkey) in order.items" :key="index+'-'+itemkey">
                                                    <el-col :span="6" class="product-img">
                                                        <img :src="item.imageUrl" alt="" @click="toOrderDetail(order)">
                                                    </el-col>
                                                    <el-col :span="12">
                                                        <el-col @click="toOrderDetail(order)">{{item.goodsName}}</el-col>
                                                        <el-col @click="toOrderDetail(order)">
                                                            <span>{{item.featureValue}}</span>
                                                            <!-- <span>颜色：白色</span>
                                                            <span>数量：6只装</span> -->
                                                        </el-col>
                                                    </el-col>
                                                    <el-col :span="4">
                                                        <el-col>￥{{item.goodsPrice}}</el-col>
                                                        <el-col>（{{item.quantity}}件）</el-col>
                                                    </el-col>
                                                </el-col>
                                                
                                            </el-col>
                                            <el-col :span="3" class="product-item">
                                                <el-col>{{order.buyer}}</el-col>
                                            </el-col>
                                            <div class="right-border"></div>
                                            <el-col :span="3" class="product-item">
                                                <el-col>￥{{orderSumPrice(order.items)}}</el-col>
                                                <el-col>（含运费：￥{{order.postage}}）</el-col>
                                            </el-col>
                                            <div class="right-border"></div>
                                            <el-col :span="3" class="product-item">
                                                <el-col v-if="order.orderStatus=='WAIT_PAY'">待付款</el-col>
                                                <el-col v-else-if="order.orderStatus=='WAIT_RECEIVING'">已发货</el-col>
                                                <el-col v-else-if="order.orderStatus=='WAIT_SHIP'" style="cursor: pointer;" @click.native="onShipping(order)">待发货</el-col>
                                                <el-col v-else-if="order.orderStatus=='SUCCESS'">已完成</el-col>
                                                <el-col v-else-if="order.orderStatus=='CLOSED'">已关闭</el-col>
                                                <el-col v-else-if="order.orderStatus=='RETURN'">退款中</el-col>
                                            </el-col>
                                            <div class="right-border"></div>
                                                <el-col :span="3" class="product-item">
                                                <div>测试，待调试</div>
                                            </el-col>
                                        </el-col>
                                    </el-col>
                                </el-col>
                            </el-col>

                            <el-dialog
                                title="发货"
                                :visible.sync="deliveryVisible"
                                width="46%"
                                >
                                <div class="delivery-dialog">
                                    <div class="delivery-dialog-item">
                                        <div class="delivery-dialog-left">发货地址：</div>
                                        <div>
                                            <div v-for="item in addressArray" :key="item.addressId">
                                                <el-radio v-model="deliveryRadio" :label=item.isShip  @change="_addressSetting(item.addressId,item.isShip)">{{item.province}} {{item.city}} {{item.district}}</el-radio>
                                            </div>                            
                                        </div>
                                    </div>
                                    <div class="delivery-dialog-item">
                                        <div class="delivery-dialog-left">快递公司：</div>
                                        <div class="delivery-dialog-input">
                                            <el-select v-model="deliverySelectVal" placeholder="请选择" style="width:100%" @change="changeLabel">
                                                <el-option
                                                v-for="item in deliveryOptions"
                                                :key="item.corpId"
                                                :label="item.corpName"
                                                :value="item.corpId">
                                                </el-option>
                                            </el-select>                                         
                                        </div>
                                    </div>
                                    <div class="delivery-dialog-item">
                                        <div class="delivery-dialog-left">快递单号：</div>
                                        <div class="delivery-dialog-input">
                                            <el-input v-model="deliveryInput" placeholder="请输入内容"></el-input>                                       
                                        </div>
                                    </div>
                                </div>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="deliveryVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="_orderShip()">确 定</el-button>
                                </span>
                            </el-dialog>
                            
                            <!-- <el-col class="pagination">
                                <el-pagination
                                    background
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    layout="prev, pager, next"
                                    :total="totalPage"
                                    :page-size="total">
                                </el-pagination>
                            </el-col> -->
                           
                        </el-col>
                    </el-col>
                </el-tab-pane>
                <!--<el-tab-pane label="待付款" name="2"></el-tab-pane>
                <el-tab-pane label="待发货" name="3"></el-tab-pane>
                <el-tab-pane label="已发货" name="4"></el-tab-pane>
                <el-tab-pane label="已完成" name="5"></el-tab-pane>
                <el-tab-pane label="已关闭" name="6"></el-tab-pane>
                <el-tab-pane label="退款中" name="7"></el-tab-pane>-->
            </el-tabs>
        </div>
    </div>
</template>

<script >
import {getAllOderList,logisticsCorps,orderShip,test2} from "../../api/order"
import {addressList,addressSetting} from 'api/setting'

export default {
    data() {
        return {
            orderCode:'',
            activeName: '1',
            number: '',
            time: '',
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                    }
                }]
            },
            name: '',
            status: '',
            types: '',
            tel: '',
            payType: '',
            totalPage: 100,
            total: 10,
            orderAllList: null,
            mobile:'',
            deliveryVisible:false,
            deliveryRadio: 'Y',
            deliverySelectVal: '',
            deliveryOptions: [],
            deliveryInput: '', //快递单号
            addressArray: [],//发货地址
            deliveryCorpName: '', //快递公司名称
            orderId: '',//订单ID
        }
    },
    mounted() {
        this._getAllOderList();
        this._logisticsCorps();
        this.getAddressList();
    },
    methods: {
        //获取列表数据
        _getAllOderList() {
            getAllOderList({}).then(res => {
                if(res.data.code === "0") {
                    this.orderAllList = res.data.data.orders
                }
            })
        },
        //详情页面
        toOrderDetail(row) {
            let orderId = row.orderId;
            this.$router.push({path:'/admin/orderDetails',query:{orderId}})
        },
        onShipping(row) {
            this.deliveryVisible = true
            this.orderId = row.orderId
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);               
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        // 格式化下时间
        orderCreateTime(date){
            let orderTime = new Date(date)
            return orderTime.getFullYear()+"年"+(orderTime.getMonth()+1)+"月"+orderTime.getDate()+"日"
        },
        // 计算总价
        orderSumPrice(items) {
            let sumPrice = 0
            items.map(item => {
            sumPrice+=item.goodsPrice*item.quantity
            })
            return sumPrice
        },
        fromDate(date) {
            let current = new Date(date)
            return current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate()
        },
        //搜索查询
        orderSearch() {
            // function fromDate(date) {
            //     let current = new Date(date)
            //     return current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate()
            // }

            let obj = {
                consignee: this.name,
                deliveryType: this.deliveryType,
                endTime: this.time[1]===undefined?'':this.fromDate(this.time[1]),
                mobile: this.mobile,
                orderCode: this.orderCode,
                orderStatus: this.status,
                deliveryTypeType: this.types,
                startTime: this.time[0]===undefined?'':this.fromDate(this.time[0]),

            }
            let orderCode = this.orderCode;
            let startTime = this.time[0]===undefined?'':this.fromDate(this.time[0]);
            let endTime = this.time[1]===undefined?'':this.fromDate(this.time[1]);
            let consignee = this.name;           
            let orderStatus = this.status;          
            let deliveryType = this.types;
            let mobile = this.mobile; 
            let payType = this.payType
            getAllOderList({orderCode,startTime,endTime,consignee,orderStatus,deliveryType,mobile,payType}).then(res => {
                if (res.data.code === '0') {
                    this.orderAllList = res.data.data.orders
                }
            })
        },
        //获取物流公司
        _logisticsCorps() {
            logisticsCorps().then(res => {
                if (res.data.code === '0') {
                    this.deliveryOptions = res.data.data
                }
            })
        },
        //获取表格数据
        getAddressList() {
            addressList().then(res => {
                if (res.data.code === '0') {
                    this.addressArray = res.data.data
                }
            })
        },
        //设置默认发货地址
        _addressSetting(addressId,Ship) {
            this.deliveryRadio = 'Y'
            if (Ship == 'N') {
                let isShip = 'Y'
                addressSetting({addressId,isShip}).then(res => {
                    if (res.data.code === '0') {
                        this.getAddressList()
                    }else {
                        this.$message.error(res.data.msg);
                    } 
                }) 
            }                  
        },
        //获取快递公司名称
        changeLabel(value) {
            let obj = {};
            obj = this.deliveryOptions.find((item)=>{
                return item.corpId === value;
            });
            this.deliveryCorpName = obj.corpName
        },
        //发货
        _orderShip() {
            let deliveryCode = this.deliveryInput;
            let deliveryCorpId = this.deliverySelectVal;
            let deliveryCorpName = this.deliveryCorpName
            let orderId = this.orderId
            orderShip({deliveryCode,deliveryCorpId,deliveryCorpName,orderId}).then( res => {              
                if (res.data.code === '0') {                    
                    this._getAllOderList();              
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                     this.deliveryVisible = false; 
                }else {
                    this.$message.error(res.data.msg);
                }
            })
        },
    }
}
</script>


<style scoped lang="scss">
.file-wrapper {
    height: 100%;
    .tabs-container {
        height: 100%;
        overflow: scroll;
        .main-conainer {           
            padding: 0 15px;
            .content {
                background: #ffffff;
                padding: 15px;
                border-radius: 4px;
            }
        }
    }
}
.order-code {
  cursor: pointer;
}
.order-code:hover {
  color: rgb(105, 102, 105);
}
.order-code:active {
  color: white;
}
.search {
    font-size: 14px;
    // background: #e8e8e8;
    margin-bottom: 15px;
    .search-item {
        display: flex;
        align-items: center;
        margin: 10px 0;
        .search-label {
            text-align: right;
            padding-right: 4px;
        }
    }
}
.table {
    font-size: 14px;
    .table-header {
        height: 46px;
        line-height: 46px;
        background: #e8e8e8;
        border: 1px solid #d5d5d5;
        padding: 0 10px;           
    }
    .header-text {
        text-align: right;
    }
    .header-center {
        text-align: center;
    }
    .table-list {
        .list-item {
            margin-top: 15px;
            .table-content {
                display: flex;
                align-items: stretch;
                border-left: 1px solid #d5d5d5;
                border-bottom: 1px solid #d5d5d5;
                border-right: 1px solid #d5d5d5;
                .product {
                    display: flex;
                    align-items: center;
                    border-bottom: 1px solid #d5d5d5;
                    padding: 10px;
                    .product-img {
                        img {
                            width: 100px;
                        }
                    }                       
                }
                .right-border {
                    border-right: 1px solid #d5d5d5;
                }
                .product-item {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }
        }
    }
}
.pagination {
    text-align: right;
    padding: 15px 0;
}

.delivery-dialog {
    .delivery-dialog-item {
        display: flex;
        margin-bottom: 15px;
        align-items: center;
        .delivery-dialog-left {
            margin-right: 15px;
        }
        .delivery-dialog-input {
            width: 300px;
        }
    }
}
</style>