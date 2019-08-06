<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部评价" name="1">

                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>订单</el-breadcrumb-item>
                            <el-breadcrumb-item>评价管理</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">
                          
                            <el-col class="table">
                                <el-table
                                    :data="tableData"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="money"
                                        label="订单编号/商品">
                                        <template :slot-scope="scope">
                                            <div>
                                                <div>201710081641151235</div>
                                                <div class="product">
                                                    <div>
                                                        <img src="../../../assets/img/logo.png" alt="" class="product-img">
                                                    </div>
                                                    <div class="product-right">
                                                        <div class="detail-text">欧式进口水晶玻璃杯水杯家用牛奶杯果汁杯6只装...</div>
                                                        <div class="text">
                                                            颜色：白色  数量：6只装
                                                        </div>
                                                        <div class="detail-text more-text" @click="toDetail()">更多评价（300）</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        prop="money"
                                        label="评价">
                                        <template :slot-scope="scope">
                                            <div class="evaluation">
                                                <div class="evaluation-top">
                                                    <div>【好评】</div>
                                                    <div>该商品不错，卖家人很好，发货速度很快，我喜欢 下次还会来来买</div>
                                                </div>
                                                <div class="evaluation-img">
                                                    <img src="../../../assets/img/logo.png" alt="">
                                                    <img src="../../../assets/img/logo.png" alt="">
                                                    <img src="../../../assets/img/logo.png" alt="">
                                                    <img src="../../../assets/img/logo.png" alt="">
                                                    <img src="../../../assets/img/logo.png" alt="">
                                                </div>
                                                <div class="time">2017-10-01 22:12:23</div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        prop="money"
                                        label="回复"
                                        width="200"
                                        align="center">
                                        <template :slot-scope="scope">
                                            <div>回复</div>
                                            <div>感谢对本小店的认可，欢迎再次glin</div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-col>
                            <el-col class="pagination">
                                <el-pagination
                                    background
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    layout="prev, pager, next"
                                    :total="totalPage"
                                    :page-size="total">
                                </el-pagination>
                            </el-col>
                        </el-col>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="好评" name="2"></el-tab-pane>
                <el-tab-pane label="中评" name="3"></el-tab-pane>
                <el-tab-pane label="差评" name="4"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script >

    export default {
        data() {
            return {
                activeName: '1',
                totalPage: 100,
                total: 10,
                tableData: [{
                    id:'336857312',
                    money: '1000.00',
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]//测试数据
            }
        },
        mounted() {
        },

        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);               
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            toDetail() {
                this.$router.push({path:'/admin/evaluationDetail',query:{id:'3'}})
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

.table {
    border: 1px solid #EBEEF5;
    .product {
        font-size: 12px;
        overflow: hidden;
        .product-img {
            width: 50px;
            height: 50px;
        }
        div:first-child {
            float: left;
        }
        .detail-text {
            color: rgb(63, 81, 181);
        }
        .text {
            color: rgb(186, 186, 186);
        }
        .product-right {
            margin-left: 10px;
            float: left;
        }
        .more-text {
            cursor: pointer;
        }
    } 
    .evaluation {
        .evaluation-top {
            display: flex;
            div:nth-of-type(2) {
                flex: 1;
                margin-left: 10px;
            }
        }
        .evaluation-img {
            img {
                width: 36px;
                height: 36px;
            }
        }
        .time {
            color: rgb(186, 186, 186); 
        }
    }      
}
.pagination {
    text-align: right;
    padding: 15px 0;
}
</style>