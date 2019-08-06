<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">我的资产</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>资产</el-breadcrumb-item>
                <el-breadcrumb-item>我的资产</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <el-col  class="main-content">
            <el-col class="content">
                <el-col  class="header"> 
                    <div class="header-top">
                        <img src="../../assets/img/logo.png" alt="" class="goods-img">
                        <div class="store">
                            <div class="store-item">
                                <span>店铺名称：</span>
                                <span>新小店123170927</span>
                            </div>
                            <div class="store-item">
                                <span>认证类型：</span>
                                <span>未认证</span>
                            </div>
                            <div class="store-item">
                                <span>认证信息：</span>
                                <span>立即认证</span>
                            </div>
                        </div>
                    </div>

                    <el-col class="header-item">
                        <el-col class="header-cell cell-border" :span="8">
                            <div>
                                <span>七天收入</span>
                                <span class="cell-tips">（截至今日0点）</span>
                            </div>
                            <div class="cell-price">
                                <span class="cell-price-text">￥0.00</span>
                                <span class="cell-price-tips">收支明细</span>
                            </div>
                        </el-col>
                        <el-col class="header-cell cell-border" :span="8">
                            <div>
                                <span>待结算</span>
                                <span class="cell-tips">（担保交易）</span>
                            </div>
                            <div class="cell-price">
                                <span class="cell-price-text">￥0.00</span>
                                <span class="cell-price-tips">待结算记录</span>
                            </div>
                        </el-col>
                        <el-col class="header-cell" :span="8">
                            <div>
                                <span>可用余额</span>
                            </div>
                            <div class="cell-price">
                                <span class="cell-price-text">￥0.00</span>
                                <span>
                                    <el-button type="primary" size="mini">提现</el-button>
                                    <el-button type="primary" size="mini">充值</el-button>
                                </span>
                            </div>
                        </el-col>
                    </el-col>
                </el-col>

                <el-col class="table">
                    <el-col class="title">近期交易记录</el-col>
                    <el-col class="tables-content">
                        <el-table
                            :header-cell-style="{background:'#f0f4f7'}"
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="交易时间"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <div class="fz-color">2017-10-20 12:15</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="名称"
                                align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="number"
                                label="对方"
                                align="center"
                            >
                             </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="金额 | 明细"
                                align="center"
                            > 
                             <template slot-scope="scope">
                                <div class="sum">+￥100.00</div>
                            </template>
                            </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="状态"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <div class="search-text">待支付</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="操作"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <div class="search-text">查看</div>
                                </template>  
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-col>
            </el-col>
        </el-col>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                tableData: [{name:'欧式进口水晶玻璃杯水杯家用牛奶杯果汁杯6只装套装家庭客厅喝水',number: '姜小盼零食铺',subTotal:500}],//表格数据
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
.header {
    border: 1px solid #f2f2f2;
    .header-top {
        border-bottom: 1px solid #f2f2f2;
        padding: 15px 30px;
        .goods-img {
            width: 100px;     
            vertical-align: middle;    
        }
        .store {
            display: inline-block;
            vertical-align: middle;
            margin-left: 10px;
            .store-item {
                line-height: 26px;
                font-size: 14px;
                span:nth-of-type(1) {
                    color: #bababa;
                }
            }
        }
    }
    .header-item {
        padding: 15px 0;
        .header-cell {
            text-align: center;
            .cell-tips {
                color: #bababa;
            }
            .cell-price {
                padding-top: 15px;
                .cell-price-text {
                    font-weight: 600;
                    font-size: 20px;
                    margin-right: 30px;
                }
                .cell-price-tips {
                    color: rgb(52, 136, 255);
                }
            }
        }
        .cell-border {
            border-right: 1px solid #f2f2f2;
        }
    }
}
.table {
    padding-top: 10px;
    .title {
        height: 36px;
        line-height: 36px;
        background-color: rgb(247, 247, 247);
        padding: 0 15px;
        font-weight: 700;
    }
}
.tables-content {
    padding-top: 10px;
    .sum {
        color: rgb(139, 195, 74);
    }
}

</style>