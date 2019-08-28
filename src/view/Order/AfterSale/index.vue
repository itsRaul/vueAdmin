<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部订单" name="1">

                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>订单</el-breadcrumb-item>
                            <el-breadcrumb-item>售后订单</el-breadcrumb-item>
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
                                </el-col>
                                <el-col>
                                    <el-col :span="8" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            申请时间：
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
                                            退款编号：
                                        </el-col>
                                        <el-col :span="16">
                                            <el-input v-model="returnsCode"></el-input>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="9" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            退款类型：
                                        </el-col>
                                        <el-col :span="14">
                                            <el-select v-model="returnsType" clearable placeholder="请选择">
                                                <el-option value="PRE_SALE" label="售中退款"></el-option>
                                                <el-option value="AFTER_SAL" label="售后退款"></el-option>
                                            </el-select>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="6" class="search-item">
                                        <el-col :span="9" class="search-label">
                                            客服介入：
                                        </el-col>
                                        <el-col :span="14">
                                            <el-select v-model="intervention" clearable placeholder="请选择">
                                                <el-option value="1" label="介入"></el-option>
                                                <el-option value="2" label="未介入"></el-option>
                                            </el-select>
                                        </el-col>
                                    </el-col>
                                </el-col>
                                <el-col>
                                    <el-col :span="8" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            退款方式：
                                        </el-col>
                                        <el-col :span="16">
                                            <el-select v-model="requestType" clearable placeholder="请选择">
                                                <el-option value="REFUND" label="仅退款"></el-option>
                                                <el-option value="RETURNS" label="退货退款"></el-option>
                                            </el-select>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="9" class="search-item">
                                        <el-col :span="8" class="search-label">
                                            退款状态：
                                        </el-col>
                                        <el-col :span="14">
                                            <el-select v-model="types" clearable placeholder="请选择">
                                                <el-option value="1" label="退款处理中"></el-option>
                                                <el-option value="2" label="待卖家确认"></el-option>
                                                <el-option value="1" label="卖家不同意退款"></el-option>
                                                <el-option value="2" label="买家已退货待确认"></el-option>
                                                <el-option value="1" label="卖家未收到货"></el-option>
                                                <el-option value="2" label="客服介入"></el-option>
                                            </el-select>
                                        </el-col>
                                    </el-col>
                                    <el-col :span="6" class="search-item">
                                        <el-col :span="9" class="search-label">
                                            
                                        </el-col>
                                        <el-col :span="14">
                                            <el-button type="primary" @click="serachReturnsList()">搜索</el-button>
                                        </el-col>
                                    </el-col>
                                </el-col>
                            </el-col>
                            <!-- E 搜索条件 -->

                            <el-col class="table">
                                <el-table
                                    :data="ordersList"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="returnsCode"
                                        label="退款编号"                                      
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="requestTypeName"
                                        label="退款方式"
                                        width="100"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        label="订单编号/商品"
                                        align="center">
                                        <template slot-scope="scope">
                                            <div>
                                                <div>{{scope.row.orderCode}}</div>
                                                <div class="product">
                                                    <div>
                                                        <img :src="scope.row.imageUrl" alt="" class="product-img">
                                                    </div>
                                                    <div>
                                                        <div>{{scope.row.goodsName}}</div>
                                                        <div class="text">
                                                            {{scope.row.featureValue}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>                                  
                                    <el-table-column
                                        prop="paymentAmount"
                                        label="订单金额"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="refundAmount"
                                        label="退款金额"
                                        align="center">
                                        <template :slot-scope="scope">
                                            <div>¥500.00</div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        prop="applyTime"
                                        label="申请时间"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="returnsStatusName"
                                        label="退款状态"
                                        align="center">
                                    </el-table-column>
                                    <el-table-column
                                        prop="money"
                                        label="操作"
                                        width="100"
                                        align="center">
                                        <template slot-scope="scope">
                                            <el-button type="text" size="small" @click="handleDetail(scope.row)">处理</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-col>
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
                <!-- <el-tab-pane label="待付款" name="2"></el-tab-pane>
                <el-tab-pane label="待发货" name="3"></el-tab-pane>
                <el-tab-pane label="已发货" name="4"></el-tab-pane>
                <el-tab-pane label="已完成" name="5"></el-tab-pane>
                <el-tab-pane label="已关闭" name="6"></el-tab-pane>
                <el-tab-pane label="退款中" name="7"></el-tab-pane> -->
            </el-tabs>
        </div>
    </div>
</template>

<script >
import {returnsList} from 'api/order'
import {fromDate} from 'utils/utils'

export default {
    data() {
        return {
            activeName: '1',
            orderCode: '',//订单号
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
            returnsCode: '', //退款编号
            returnsType: '', //退款类型
            intervention: '',
            types: '',
            totalPage: 100,
            total: 10,
            ordersList: [], //退款列表
            requestType: '',
        }
    },
    mounted() {
        this.getReturnsList();
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);               
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        //获取退款列表
        getReturnsList() {
            returnsList({}).then(res => {
                if (res.data.code === '0') {
                    this.ordersList = res.data.data.orders
                }
            })
        },
        //搜索
        serachReturnsList() {
            let orderCode = this.orderCode;
            let applyStartTime = this.time[0]===undefined?'':fromDate(this.time[0]);
            let applyEndTime = this.time[1]===undefined?'':fromDate(this.time[1]);
            let returnsCode = this.returnsCode;
            let returnsType = this.returnsType;
            let requestType = this.requestType;

            returnsList({orderCode,applyStartTime,applyEndTime,returnsCode,returnsType,requestType}).then(res => {
                if (res.data.code === '0') {
                    this.ordersList = res.data.data.orders
                }
            })
        },
        //详情
        handleDetail(row) {
            let returnsId = row.returnsId;
            this.$router.push({path:'/admin/afterSaleDetail',query:{returnsId}})
        }
    },
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

 .search {
    font-size: 14px;
    margin-bottom: 15px;
    .search-item {
        display: flex;
        align-items: center;
        margin: 6px 0;
        .search-label {
            text-align: right;
            padding-right: 4px;
        }
    }
}
.table {
    border: 1px solid #EBEEF5;
    .product {
        display: flex;
        align-items: center;
        font-size: 12px;
        .product-img {
            width: 50px;
            height: 50px;
        }
        .text {
            color: rgb(186, 186, 186);
        }
    }       
}
.pagination {
    text-align: right;
    padding: 15px 0;
}
</style>