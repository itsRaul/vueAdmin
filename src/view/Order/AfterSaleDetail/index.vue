<template>
    <div class="layout-wrapper">
        <div class="nav-bar">
            <div class="nav-bar-left">售后订单详情</div>
        </div>

        <div class="tabs-container">
            <div class="breadcrumb">
                <el-breadcrumb  separator="/">
                    <el-breadcrumb-item>订单</el-breadcrumb-item>
                    <el-breadcrumb-item>售后订单</el-breadcrumb-item>
                    <el-breadcrumb-item>售后订单详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            
            <div class="main-conainer">
                <div class="content">
                    <!-- S 售后详情订单状态栏 -->
                    <AtterSaleStatusBar 
                        :requestType='detailData.requestType'
                        :returnsStatus='detailData.returnsStatus'
                    />                   
                    <!-- E 售后详情订单状态栏 -->                 

                    <div class="service-container">
                        <el-col>
                            <el-col :span="16" class="service-container-left">

                                <!-- S 仅退款申请 -->
                                <div class="buyer-container" >
                                    <div class="buyer-title">
                                        <strong>请处理退款申请</strong>
                                        <span class="buyer-time"><i class="iconfont icon-shijian"></i>还剩{{day}}天{{hr}}时{{min}}分{{sec}}秒</span>
                                    </div>
                                    <div class="buyer-tips">
                                        <div>如果未发货，请点击同意退款买家</div>                                                                                  
                                        <div>如果实际已发货，请主动与买家联系</div>
                                        <div>如果逾期未响应申请，视作同意买家申请，系统会自动退款给买家</div>
                                    </div>
                                     <!-- v-if="detailData.requestType=='REFUND'" -->
                                    <div class="buyer-btn" v-if="detailData.requestType=='REFUND'">
                                        <el-button type="primary" size="small" @click="openRefund()">同意退款</el-button>
                                        <el-button size="small" @click="toOrder()">发 货</el-button>
                                    </div>
                                    <!-- v-else-if="detailData.requestType=='RETURNS'" -->
                                    <div class="buyer-btn" v-else-if="detailData.requestType=='RETURNS'">
                                        <el-button type="primary" size="small" @click="openReturns()">同意退货</el-button>
                                        <el-button size="small" @click="openRefuse()">拒绝退货申请</el-button>
                                    </div>
                                </div>
                                <!-- E 仅退款申请 -->

                                <!-- S 协商历史 -->
                                <AtterSaleNegotiates 
                                    :negotiates='detailData.negotiates'
                                    @refresh='refreshDetail'    
                                />
                                <!-- E 协商历史 -->
                            </el-col>

                            <el-col :span="8" class="service-container-right">
                                <!-- S 商品详情 -->
                                <AfterSaleGoodsDetail :detailData='detailData'/>
                                <!-- E 商品详情 -->
                            </el-col>
                        </el-col>
                    </div>                  
                </div>
            </div>
        </div>

        <!-- S 仅退款申请 -->
        <el-dialog
            title="退款"
            :visible.sync="refundVisible"
            width="36%">
            <div class="dialog">
                <div class="dialog-item">
                    <label>退款金额：</label>
                    <span>{{detailData.refundAmount}}</span>
                </div>
                <div class="dialog-item">
                    <label>支付密码：</label>
                    <el-input type="password" v-model="password"></el-input>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="refundVisible = false">取 消</el-button>
                <el-button type="primary" @click="onReturnsRefund()">确 定</el-button>
            </span>
        </el-dialog>
        <!-- E 仅退款申请 -->

        <!-- S 退货退款处理 -->
        <el-dialog
            title="退款"
            :visible.sync="returnsVisible"
            width="40%">
            <div class="dialog">
                <div class="dialog-item">
                    <label></label>
                    <span class="dialog-text">收货地址错误导致买家我要发退货或退回商品将由你承担产生的后果</span>
                </div>
                <div class="dialog-item">
                    <label>退货地址：</label> 
                    <el-select v-model="addressId" clearable placeholder="请选择">
                        <el-option
                        v-for="item in addressArray"
                        :key="item.addressId"
                        :label="item.address"
                        :value="item.addressId">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialog-item">
                    <label>退货说明：</label>
                    <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="description">
                    </el-input>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="returnsVisible = false">取 消</el-button>
                <el-button type="primary" @click="onReturnsAgree()">同意退货</el-button>
            </span>
        </el-dialog>
        <!-- E 退货退款处理 -->

        <!-- S 拒绝申请 -->
        <el-dialog
            title="拒绝申请"
            :visible.sync="refuseVisible"
            width="40%">
            <div class="dialog">

                <div class="dialog-item">
                    <span class="dialog-text">你拒绝后，买家可以要求客服介入处理，如果核实是您的责任，将影响您店铺纠纷退款率</span>
                </div>
                <div class="dialog-item">
                    <label>拒绝原因：</label>
                     <el-select v-model="reasonVal" clearable placeholder="请选择">
                        <el-option
                            v-for="item in reasonList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="dialog-item">
                    <label>拒绝说明：</label>
                    <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="refuseDescription">
                    </el-input>
                </div>
                <div class="dialog-item">
                    <label>上传凭证：</label>
                    <el-upload
                        class="avatar-uploader"
                        :action="fileupload"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="refuseVisible = false">取 消</el-button>
                <el-button type="primary" @click="onReturnsRefuse()">拒绝申请</el-button>
            </span>
        </el-dialog>
        <!-- E 拒绝申请 -->
    </div>
</template>

<script>
import {returnsDetail,returnsRefund,getGeoDatas,returnsAgree,returnsRefuse} from 'api/order'
import {addressList} from 'api/setting'
import AtterSaleStatusBar from 'components/AtterSaleStatusBar'
import AtterSaleNegotiates from 'components/AtterSaleNegotiates'
import AfterSaleGoodsDetail from 'components/AfterSaleGoodsDetail'
import { uploadUrl } from 'api/config.js'

export default {
    data() {
        return {
            addressList: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            adressVal: '',
            explain: '',    //退货说明
            test: false,
            alipay: '',
            detailData: {},
            refundVisible:false, //仅退款申请
            password:'',
            returnsVisible: false, //退货退款处理
            description: '',
            refuseDescription: '',//拒绝说明
            refuseVisible: false,
            reasonList: [
                {
                    value: 'GOODS_DAMAGE',
                    label: '商品损坏'
                }
            ],
            reasonVal: '',
            fileupload:  uploadUrl,  //上传url
            imageUrl: '',
            addressId: '',
            addressArray:[],
            day: 0, 
            hr: 0, 
            min: 0, 
            sec: 0
        }
    },
    mounted() {
        this.getReturnsDetail();
        this.getAddressList();
        this.countdown()
    },
    methods: {
        //获取表格数据
        getAddressList() {
            addressList().then(res => {
                if (res.data.code === '0') {
                    this.addressArray = res.data.data
                }
            })
        },
        //获取详情
        getReturnsDetail() {
            let returnsId = this.$route.query.returnsId;
            returnsDetail({returnsId}).then(res => {
                if (res.data.code === '0') {
                    this.detailData = res.data.data
                }
            })
        },
        //我要留言，更新数据
        refreshDetail() {
            this.getReturnsDetail();
        },
        toOrder() {
            this.$router.push('/admin/order')
        },
        openRefund() {
            this.refundVisible = true
        },
        //仅退款申请
        onReturnsRefund() {
            let returnsId = this.$route.query.returnsId; 
            let password = this.password;

            returnsRefund({password,returnsId}).then(res => {
                if (res.data.code === '0') {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    this.refundVisible = false
                    this.$router.go(-1)
                }else {
                    this.$message.error(res.data.msg)
                }
            })
        },
        //打开退货退款处理
        openReturns() {
            this.returnsVisible = true
        },
        //退货退款处理
        onReturnsAgree() {
            let returnsId = this.$route.query.returnsId; 
            let addressId = this.addressId;
            let description = this.description;         
            returnsAgree({addressId,description,returnsId}).then(res => {
                if (res.data.code === '0') {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    this.returnsVisible = false
                    this.$router.go(-1)
                }else {
                    this.$message.error(res.data.msg)
                }
            })
        },
        openRefuse() {
            this.refuseVisible = true;
        },
        //上传图片
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 1;

            if (!isJPG) {
                this.$message.error('上传头像图片是 JPG或PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 1MB!');
            }
            return isJPG && isLt2M;
        },
        handleAvatarSuccess(res, file) {
            if (res.code === '0') {
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
                this.imageUrl = res.data.fileurl
            }else {
                this.$message.error('上传失败')
            }
        },
        //拒绝退款
        onReturnsRefuse() {
            let returnsId = this.$route.query.returnsId;
            let description = this.refuseDescription;
            let images = this.imageUrl;
            let reasonType = this.reasonVal;

            returnsRefuse({description,returnsId,images,reasonType}).then(res => {
                if (res.data.code === '0') {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    this.refuseVisible = false
                    this.$router.go(-1)
                }else {
                    this.$message.error(res.data.msg)
                }
            })
        },
        countdown() {
            const end = Date.parse(new Date('2019-8-26'))
            const now = Date.parse(new Date())
            const msec = end - now
            let day = parseInt(msec / 1000 / 60 / 60 / 24)
            let hr = parseInt(msec / 1000 / 60 / 60 % 24)
            let min = parseInt(msec / 1000 / 60 % 60)
            let sec = parseInt(msec / 1000 % 60)
            this.day = day
            this.hr = hr > 9 ? hr : '0' + hr
            this.min = min > 9 ? min : '0' + min
            this.sec = sec > 9 ? sec : '0' + sec
            const that = this
            setTimeout(function () {
                that.countdown()
            }, 1000)
        }
    },
    components: {
        AtterSaleStatusBar,
        AtterSaleNegotiates,
        AfterSaleGoodsDetail,
    }
}
</script>

<style lang="scss" scoped>
.service-status {
    margin-bottom: 10px;
    overflow: hidden;
    height: 46px;
    background-color: #cccccc;
    .status-item {
        text-align: center;
        background-color: #cccccc;
        height: 46px;
        position: relative;
        .status-text {
            display: inline-block;
            height: 100%;
            line-height: 46px;
        }
        .number {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            background: #fff;
            color: #999;
            font-weight: bold;
            margin-right: 4px;
        }
        .active-number {
            color: #91cffe
        }
        .active-text {
            color: #fff;
        }
        
    }
    .youjiantou {
        height: 46px;
        position: relative;
        left: -10px;
    }
    .status-item1 {
        background: #91cffe;
    }
    .status-item2 {
        background: #2485d6;
    }
}
.service-container {   
    border: 1px solid rgb(204, 204, 204);
    overflow: hidden;
    .service-container-left {
        border-right: 1px solid rgb(204, 204, 204);
        padding: 15px;        
        .sercice-tips {
            background-color: #fcf5e5;
            border: 1px solid #edceb1;
            font-size: 12px;
            padding: 5px 10px;
            .gantanhao {
                color: #ef9b15;
                vertical-align: middle;
            }
            span {
                vertical-align: middle;
                font-weight: 700;
                color: #6e6a67;
            }
        }
        .sales-input {
            padding-top: 15px;
            .sales-item {
                margin-bottom: 15px;
                label {
                    display: inline-block;
                    width: 120px;
                    text-align: right;
                    position: relative;
                    margin-right: 15px;
                    span {
                        color: red;
                        position: absolute;
                        top: 4px;
                    }
                }
                .el-select {
                    width: 360px;
                }
                .el-textarea {
                    width: 360px;
                    vertical-align: top;
                }                
            }
            .adress-text {
                font-size: 14px;
                color: #1482c1;
                padding-left: 140px;
                padding-top: 10px;
            }
        }
        .sales-btn {
            margin-left: 140px;
        }
        .buyer-container {
            .buyer-title {
                font-weight: 700;
                strong {
                    font-weight: 600;
                }
                .buyer-time {
                    color: #2086c8;
                    padding-left: 15px;
                    i {
                        color: #2086c8;
                        margin-right: 4px;
                    }
                }
            }
            .buyer-tips {
                border-bottom: 1px solid #e8e8e8;
                font-size: 14px;
                padding: 10px 0;
                color: #828282;
            }
            .buyer-btn {
                padding: 15px 0;
                border-bottom: 1px solid #e8e8e8;
            }          
        }
    }
    .service-container-right {
        padding: 15px;
        // border-left: 1px solid rgb(204, 204, 204);       
    }
}
.dialog {
   .dialog-item {
       padding-bottom: 15px;
       label {
           display: inline-block;
           width: 90px;
           text-align: right;
       }
       .el-input {
           width: 300px;
       }
       .el-textarea {
           width: 300px;
           vertical-align: middle;
       }
       .dialog-text {
           font-size: 12px;
           color: #999;
       }
   } 
}
.avatar-uploader {
    display: inline-block;
    vertical-align: middle;
}
</style>