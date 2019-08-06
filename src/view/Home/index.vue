<template>
    <div class="container">
        <div class="nav-bar">
            <div class="nav-bar-left">概况</div>
            <div class="user">
                <img src="../../assets/img/avatar.png" alt="" class="user-avatar">
                <div>username</div>
            </div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>概况</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <div class="col-main">
                <div class="col-main-left">
                    <div class="tips">
                        <div>实时概况</div>
                        <div>更新时间：2019-01-01 10:10:10</div>
                    </div>
                    <div class="data-detail">
                        <div class="data-item">
                            <div class="data-item-left">
                                <div><i class="iconfont icon-icon--copy"></i>付款订单数</div>
                                <div>12879</div>
                                <div>昨日：987</div>
                            </div>
                            <div class="data-item-left ">
                                <div><i class="iconfont icon-jine"></i>付款金额</div>
                                <div>12879.1212</div>
                                <div>昨日：10989.7</div>
                            </div>
                        </div>   
                            <div class="data-item pt">
                            <div class="data-item-left">
                                <div><i class="iconfont icon-liulanliang"></i>浏览量</div>
                                <div>12879212</div>
                                <div>昨日：228743</div>
                            </div>
                            <div class="data-item-left ">
                                <div><i class="iconfont icon-kehu"></i>累计客户数</div>
                                <div>1287921</div>
                                <div>昨日：98721</div>
                            </div>
                        </div>                          
                    </div>
                </div>
                <div class="col-main-right">
                    <div class="data-detail">
                        <div class="data-item">
                            <div class="data-item-left">
                                <div><i class="iconfont icon-mubiao"></i>本月目标</div>
                                <div>12879</div>
                                <div>昨日：987</div>
                            </div>
                            <div class="data-item-left ">
                                <div><i class="iconfont icon-jindu"></i>完成进度</div>
                                <div>50%</div>
                                <div><el-progress :show-text="false" :percentage="50"></el-progress></div>
                            </div>
                        </div>   
                            <div class="data-item pt">
                            <div class="data-item-left">
                                <div><i class="iconfont icon-jiesuan"></i>待结算（元）</div>
                                <div>12879212</div>
                                <div>昨日：228743</div>
                            </div>
                            <div class="data-item-left ">
                                <div><i class="iconfont icon-yue"></i>可用店铺余额</div>
                                <div>¥125</div>
                                <div><el-progress :show-text="false" :percentage="50"></el-progress></div>
                            </div>
                        </div>                          
                    </div>
                </div>
            </div>
            <div class="order">
                <div class="title">
                    <div class="title-left">近期订单</div>
                    <div class="title-right">查看订单<i class="iconfont icon-arrow-right"></i></div>
                </div>

                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :show-header=false>
                    <el-table-column>                            
                        <template slot-scope="scope">
                            <img src="../../assets/img/logo.png" alt="" class="order-img">
                            <img src="../../assets/img/logo.png" alt="" class="order-img">
                            <img src="../../assets/img/logo.png" alt="" class="order-img">
                        </template>
                    </el-table-column>
                    <el-table-column width="100" align="center">                            
                        <template slot-scope="scope">
                            <div>¥158.8</div>
                            <div>在线支付</div>
                        </template>
                    </el-table-column>
                    <el-table-column width="100" align="center">                            
                        <template slot-scope="scope">
                            <div>2017-08-08</div>
                            <div>10:08:08</div>
                        </template>
                    </el-table-column>
                    <el-table-column width="100" align="center">
                        <template slot-scope="scope">
                            <div>待付款</div>
                        </template>
                    </el-table-column>
                    <el-table-column width="100" align="center">                           
                            <template slot-scope="scope">
                                <div>查看</div>
                            </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script >
export default {
    data() {
        return {
            tableData: [{},{},{},{},{}],//表格测试数据
        }
    },
}
</script>


<style scoped lang="scss">
// .container {
//     background-color: #fefefe;
// }
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
    .col-main {
        overflow: hidden;
        .col-main-left {
            background-color: #ffffff;
            float: left;
            width: 49%;
            padding: 0 15px 15px 15px;
            border-radius: 4px;
            .tips {
                height: 50px;
                line-height: 50px;
                div {
                    display: inline-block;
                }
                div:first-child{
                    font-weight: 700;
                }
                div:nth-of-type(2) {
                    color: #999;
                    font-size: 14px;
                }
            }
        }
        .col-main-right {
            background-color: #ffffff;
            float: right;         
            width: 49%;
            padding: 50px 15px 15px 15px;
            border-radius: 4px;
        }
        .data-detail {
            .data-item {
                overflow: hidden;
                .data-item-left {
                    width: 50%;
                    float: left;
                    text-align: center;
                    div:nth-of-type(1) {
                        color: #bbbbbb;
                        font-size: 14px;
                    }
                    div:nth-of-type(2) {
                        font-weight: 700;
                        font-size: 20px;
                        padding-top: 10px;
                    }
                    div:nth-of-type(3) {
                        color: #bbbbbb;
                        font-size: 14px;
                    }
                }
            }
            .pt {
                padding-top: 40px;
            }
        }
    }
    .order {
        padding: 0 15px;
        background-color: #ffffff;
        margin-top: 15px;
        border-radius: 4px;
        .title {
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #e8ebf2;
            .title-left {
                float: left;
                color: #333333;
                font-weight: 700;
            }
            .title-right {
                float: right;
                color: #999;
                i {
                    color: #999;
                }
            }
        }
        .order-img {
            width:70px;
            height: 70px;
        }
    }
}
</style>