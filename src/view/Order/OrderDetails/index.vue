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
                <div class="order_status" v-if="oderData.orderStatus == 'WAIT_PAY'">
                     <div class="s-step">
                        <div class="s-step-text" :class="orderClass">买家下单</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                     <div class="s-step">
                        <div class="s-step-text">等待付款</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <p class="line"></p>
                        <p class="line"></p>
                        <div class="step-time"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text">等待发货</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <p class="line"></p>
                        <p class="line"></p>
                        <div class="step-time"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text">待收货</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <div class="step-time"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text">完成</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <div class="step-time"></div>                        
                    </div>
                </div>
                <div class="order_status" v-else-if="oderData.orderStatus == 'CLOSED'">
                    <div class="s-step">
                        <div class="s-step-text" :class="orderClass">买家下单</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text">订单关闭</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <div class="step-time"></div>                        
                    </div>
                </div>
                <div class="order_status" v-else-if="oderData.orderStatus == 'WAIT_SHIP'">
                     <div class="s-step">
                        <div class="s-step-text" :class="orderClass">买家下单</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text" :class="orderClass">已付款</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text">待发货</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <p class="line"></p>
                        <p class="line"></p>
                        <div class="step-time"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text">完成</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <div class="step-time"></div>                        
                    </div>
                </div>
                <div class="order_status" v-else-if="oderData.orderStatus == 'WAIT_RECEIVING'">
                     <div class="s-step">
                        <div class="s-step-text" :class="orderClass">买家下单</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text" :class="orderClass">已付款</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                     <div class="s-step">
                        <div class="s-step-text" :class="orderClass">已发货</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text">完成</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <div class="step-time"></div>                        
                    </div>
                </div>
                <div class="order_status" v-else-if="oderData.orderStatus == 'SUCCESS'">
                     <div class="s-step">
                        <div class="s-step-text" :class="orderClass">买家下单</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text" :class="orderClass">已付款</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                     <div class="s-step">
                        <div class="s-step-text" :class="orderClass">已发货</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text" :class="orderClass">完成</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                </div>
                <div class="order_status" v-else-if="oderData.orderStatus == 'RETURN'">
                     <div class="s-step">
                        <div class="s-step-text" :class="orderClass">买家下单</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text" :class="orderClass">已付款</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                     <div class="s-step">
                        <div class="s-step-text" :class="orderClass">已退货</div>
                        <i class="iconfont icon-gouxuan icon" :class="orderClass"></i>
                        <p class="line" :class="orderLine"></p>
                        <p class="line" :class="orderLine"></p>
                        <div class="step-time" :class="orderClass"></div>                        
                    </div>
                    <div class="s-step">
                        <div class="s-step-text">交易关闭</div>
                        <i class="iconfont icon-gouxuan icon"></i>
                        <div class="step-time"></div>                        
                    </div>
                </div>

                <el-col class="order-info-content">
                    <el-col :span="12" class="order-info">
                        <div class="title">
                            <div>订单信息</div>
                            <div @click="openEdit()" v-if="oderData.orderStatus =='WAIT_SHIP'">修改</div>
                        </div>
                        <div class="info-list">
                            <div class="info-item">
                                <div class="info-label">订单编号：</div>
                                <div class="info-text">{{oderData.orderCode}}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">付款方式：</div>
                                <div class="info-text">
                                    <span v-if="oderData.paymentType === 'WXPAY'">微信支付</span>
                                    <span v-else-if="oderData.paymentType === 'ALIPAY'">支付宝支付</span>
                                    <span v-else></span>
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">买家：</div>
                                <div class="info-text">{{oderData.buyer}}</div>
                            </div>
                            <div class="info-item">
                                <div class="info-label">收货地址：</div>
                                <div class="info-text">{{addressData.consignee}} {{addressData.mobile}} {{addressData.provinceName}} {{addressData.cityName}} {{addressData.districtName}} {{addressData.address}} {{addressData.zipcode}}</div>
                            </div>                            
                        </div>
                        <div class="info-item">
                            <div class="info-label">买家留言：</div>
                            <div class="info-text">{{oderData.buyerRemark}}</div>
                        </div>
                    </el-col>

                    <el-col :span="12" class="order-status">
                        <div class="header">
                            <div class="header-status">
                                <i class="iconfont icon-zhuangtai-jinggao status-icon"></i>
                                <div class="header-tips">
                                    <div>
                                        订单状态：
                                        <span v-if="oderData.orderStatus === 'WAIT_PAY'">待付款</span>
                                        <span v-else-if="oderData.orderStatus === 'WAIT_SHIP'">待发货</span>
                                        <span v-else-if="oderData.orderStatus === 'WAIT_RECEIVING'">已发货</span>
                                        <span v-else-if="oderData.orderStatus === 'SUCCESS'">已完成</span>
                                        <span v-else-if="oderData.orderStatus === 'CLOSED'">已关闭</span>
                                        <span v-else-if="oderData.orderStatus === 'RETURN'">退款中</span>
                                    </div>
                                    <div>{{close!==true?'买家已付款至有客待结算账户，请尽快发货，否则买家有权申请退款':'买家已关闭订单'}}</div>
                                    <div class="refund">
                                        <el-button size="small" v-if="oderData.orderStatus === 'WAIT_PAY'" @click="openCancenOrder()">关闭交易</el-button>
                                        <el-button size="small" v-else-if="oderData.orderStatus === 'WAIT_SHIP'" @click="openDelivery()">订单发货</el-button>
                                        <div class="refund-btn">
                                            <span @click="openRemarks()">备注</span>
                                            <!-- <i class="iconfont icon-xingxing-copy"></i>
                                            <i class="iconfont icon-xingxing-copy"></i>
                                            <i class="iconfont icon-xingxing-copy"></i>
                                            <i class="iconfont icon-xingxing-copy"></i>
                                            <i class="iconfont icon-xingxing-copy"></i> -->
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
                                label="商品名称"
                            >
                                <template slot-scope="scope">
                                    <div class="product">
                                        <img :src="scope.row.imageUrl" alt="">
                                        <div class="product-text">
                                            <div class="fz-color">{{scope.row.goodsName}}</div>
                                            <div class="product-type">
                                                {{scope.row.featureValue}}
                                            </div>
                                        </div>
                                    </div>
                                </template>  
                            </el-table-column>
                            <el-table-column
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
                                    <div class="fz-color">0</div>
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
                        <div class="order-price-info clearfix">
                            <div class="order-price-info-item"><label>商品总价：</label>{{oderData.totalAmount}}</div>
                            <div class="order-price-info-item"><label>店铺优惠：</label>{{oderData.discountAmount}}</div>
                            <div class="order-price-info-item"><label>运费(快递)：</label>{{oderData.postage}}</div>
                            <div class="order-price-info-item"><label>订单总价：</label>¥{{oderData.payableAmount}}</div>
                            <div class="order-price-info-item"><label>实付金额：</label>¥ {{oderData.paymentAmount}}</div>
                        </div>
                    </div>
                </div>
            </el-col>
        </div>

        <!-- S备注弹框 -->
        <el-dialog
            title="编辑备注"
            :visible.sync="remarksVisible"
            width="36%"
        >
            <div class="remarks-content">
                <div class="remarks-item">
                    <label>标记名称：</label>
                    <el-select v-model="remarksVal" clearable placeholder="请选择" @change="changeMarkName">
                        <el-option
                        v-for="item in remarksOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="remarks-item">
                    <label>备注说明：</label>
                    <div class="textarea">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="memo">
                        </el-input>
                    </div>

                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="remarksVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="_orderMemo()" size="small">确 定</el-button>
            </span>
        </el-dialog>
        <!-- E备注弹框 -->

        <!-- S 修改地址 -->
        <el-dialog
            title="修改地址"
            :visible.sync="addressVisible"
            width="36%"
        >
            <div class="modify-content">
                <div class="modify-item">
                    <label>收货人姓名：</label>
                    <div class="modify-right">
                        <el-input v-model="consignee" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="modify-item">
                    <label>手机：</label>
                    <div class="modify-right">
                        <el-input v-model="mobile" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="modify-item">
                    <label>电话：</label>
                    <div class="modify-right">
                        <el-input v-model="telphone" placeholder="请输入内容"></el-input>
                    </div>
                </div>
                <div class="modify-item">
                    <label>所在地区：</label>
                    <div class="modify-right">
                        <el-cascader
                            v-model="areaInfo"
                            :options="areaList"
                            :props="{ expandTrigger: 'hover' }"
                        ></el-cascader>
                    </div>
                </div>
                <div class="modify-item">
                    <label>详细地址：</label>
                    <div class="modify-right modify-textarea">
                        <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="addressInfo">
                        </el-input>
                    </div>
                </div>
                <div class="modify-item">
                    <label>邮编：</label>
                    <div class="modify-right">
                        <el-input v-model="zipCode" placeholder="请输入内容"></el-input>
                    </div>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="addressVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="_orderChangeAddress()" size="small">确 定</el-button>
            </span>
        </el-dialog>
        <!-- E 修改地址 -->

        <!-- S 取消订单 -->
         <el-dialog
            title="关闭订单"
            :visible.sync="cancelVisible"
            width="30%"
        >
            <div class="cancel-order">
                <div>请选择关闭订单的原因</div>
                <el-select v-model="cancelVal" clearable placeholder="请选择">
                    <el-option
                    v-for="item in cancelOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancelVisible = false" size="small">取 消</el-button>
                <el-button type="primary" @click="_orderCancel()" size="small">确 定</el-button>
            </span>
        </el-dialog>
        <!-- E 取消订单 -->
        
        <!-- S 发货弹框 -->
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
        <!-- E 发货弹框 -->
    </div>
</template>

<script >
import {getOrderIfo,orderCancel,getGeoDatas,orderChangeAddress,orderShip,orderMemo} from "api/order"
import {addressList,addressSetting} from 'api/setting'

export default {
    data() {
        return {
            close: false,
            active: [],
            oderData: {}, //订单详情
            tableData: [],//表格数据
            addressData: {}, 
            remarksVisible: false,//备注
            remarksOptions: [
                {
                    value: 'RED',
                    label: '红色'
                }, 
                {
                    value: 'BLUE',
                    label: '蓝色'
                }, 
                {
                    value: 'YELLOW',
                    label: '黄色'
                }, 
                {
                    value: 'GREEN',
                    label: '绿色'
                }, 
                {
                    value: 'ORANGE',
                    label: '橘色' 
                },
                {
                    value: 'PURPLE',
                    label: '紫色' 
                },
                {
                    value: 'BLACK',
                    label: '黑色' 
                },              
            ],
            remarksVal: '',
            memo: '',
            addressVisible: false, //修改地址
            consignee: '',//收货人姓名
            mobile: '', //手机
            telphone: '', //电话
            areaInfo: [],        //所在地区
            areaList: [],    //所在地区
            addressInfo: '', //地址
            zipCode: '',//邮编
            cancelVisible: false, //关闭订单
            cancelOptions: [{
                value: '修改订单',
                label: '修改订单'
                }, {
                value: '不想买了',
                label: '不想买了'
                }],
            cancelVal: '',
            deliveryVisible:false,//发货
            addressArray: [],//发货地址
            deliverySelectVal: '',
            deliveryOptions: [],
            deliveryInput: '',
            deliveryRadio: 'Y',
            deliveryCorpName: '', //快递公司名称
            markName: '',//备注标记颜色名称
        }
    },
    mounted() {
        this.getOrderDetail();
        this._getGeoDatas();
        this.getAddressList();
        this.getLogisticsCorps();
    },
    computed: {
        orderClass() {
            return 'active-text'
        },
        orderLine() {
            return 'active-line'
        },
    },
    methods: {
        //获取商品表格数据
        getAddressList() {
            addressList().then(res => {
                if (res.data.code === '0') {
                    this.addressArray = res.data.data
                }
            })
        },
        //获取本地存储的物流公司
        getLogisticsCorps() {
            let logisticsCorpsStorage = sessionStorage.getItem('logisticsCorps');
            if (logisticsCorpsStorage) {
                this.deliveryOptions = JSON.parse(logisticsCorpsStorage)
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
        //获取备注标记颜色名称
        changeMarkName(value) {
            let obj = {};
            obj = this.remarksOptions.find((item)=>{
                return item.value === value;
            });
            this.markName = obj.label
           
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
        //获取所有地区的信息
        _getGeoDatas() {
            getGeoDatas().then(res => {
                if (res.data.code === '0') {
                    let resultStr;
                    let result = JSON.stringify(res.data.data[0].childs)
                    var subStr=new RegExp('geoId','ig');
                    result=result.replace(subStr,"value");
                    var subStr2=new RegExp('geoName','ig');
                    result=result.replace(subStr2,"label");
                    var subSt3=new RegExp('childs','ig');
                    result=result.replace(subSt3,"children");                   
                    var subSt4=new RegExp('children:','ig');
                    result=result.replace(/\[]/g,"null");
                    this.areaList = JSON.parse(result);               
                }  
            })
        },
        //订单详情
        getOrderDetail() {
            let orderId = this.$route.query.orderId;
            getOrderIfo({orderId}).then(res => {
                if (res.data.code === '0') {
                    this.oderData = res.data.data;
                    this.tableData = res.data.data.items;
                    this.addressData = res.data.data.address
                }
            }) 
        },
        //展开备注
        openRemarks() {
            this.remarksVisible = true;
        },
        //修改地址
        openEdit() {
            this.addressVisible = true;
        },
        //关闭订单
        openCancenOrder() {
            this.cancelVisible = true;
        },
        //打开订单发货
        openDelivery() {
            this.deliveryVisible = true;
        },
        //关闭订单
        _orderCancel() {
            let orderId = this.$route.query.orderId;
            let reason = this.cancelVal;
            orderCancel({orderId,reason}).then(res => {
                if (res.data.code === '0') {                   
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    this.cancelVisible = false;
                    this.$router.go(-1)
                }else {
                    this.$message.error(res.data.msg);
                    this.cancelVisible = false;
                }
            })
        },
        //修改地址
        _orderChangeAddress() {
            let orderId = this.$route.query.orderId;
            let consignee = this.consignee;
            let mobile = this.mobile;
            let telphone = this.telphone;
            let provinceId = this.areaInfo[0];
            let cityId = this.areaInfo[1];
            let districtId = this.areaInfo[2];
            let address = this.addressInfo;
            let zipcode = this.zipcode;
            orderChangeAddress({orderId,consignee,mobile,telphone,provinceId,cityId,districtId,address,zipcode}).then(res => {
                if (res.data.code === '0') {
                    this.getOrderDetail();
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    this.addressVisible = false;
                }else {
                    this.$message.error(res.data.msg);
                    this.addressVisible = false;
                }
            })
        },
        //商品发货
        _orderShip() {
            let deliveryCode = this.deliveryInput;
            let deliveryCorpId = this.deliverySelectVal;
            let deliveryCorpName = this.deliveryCorpName;
            let orderId = this.$route.query.orderId;
            orderShip({deliveryCode,deliveryCorpId,deliveryCorpName,orderId}).then( res => {              
                if (res.data.code === '0') {                    
                    this.getOrderDetail();              
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    this.deliveryVisible = false; 
                }else {
                    this.$message.error(res.data.msg);
                    this.deliveryVisible = false; 
                }
            })
        },
        _orderMemo() {
            let orderId = this.$route.query.orderId;
            let markColor = this.remarksVal;
            let markName = this.markName;
            let memo = this.memo;
            orderMemo({orderId,markColor,markName,memo}).then(res => {
                if (res.data.code === '0') {                                 
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    });
                    this.remarksVisible = false; 
                    this.$router.go(-1)
                }else {
                    this.$message.error(res.data.msg);
                    this.remarksVisible = false; 
                }
            })
        },
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
            width:80px;
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
        overflow: hidden;
        div:nth-of-type(1) {
            float: left;
        }
        div:nth-of-type(2) {
            float: right;
            cursor: pointer;
        }
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
                            cursor: pointer;
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
.order-price-info {
    padding:15px 60px 15px 0;
    float: right;
    .order-price-info-item {
        padding-bottom: 10px;
        label {
            display: inline-block;
            width: 150px;
            text-align: right;
        }
    }
}
.remarks-content {
    .remarks-item {
        padding-bottom: 15px;
        label {
            display: inline-block;
            width: 100px;
            text-align: right;
        }
        .el-radio {
            text-align: left;
            margin-right: 0;
        }
        .textarea {
            display: inline-block;
            width: 250px;
            vertical-align: middle;
        }
    }
    
}
.modify-content {
    .modify-item {
        padding-bottom: 15px;
        label {
            display: inline-block;
            width: 100px;
            text-align: right;
        }
        .modify-right {
            display: inline-block;
            width: 250px;
        }
        .el-cascader {
            width: 100%;
        }
        .modify-textarea {
            vertical-align: middle;
        }
    }
}

.cancel-order {
    div:nth-of-type(1) {
        padding-bottom: 15px;
    }
    .el-select {
        width: 100%;
    }
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