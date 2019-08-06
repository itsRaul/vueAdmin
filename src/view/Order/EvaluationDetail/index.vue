<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="全部订单" name="1">

                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>订单</el-breadcrumb-item>
                            <el-breadcrumb-item>评价管理</el-breadcrumb-item>
                            <el-breadcrumb-item>评价详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">
                          
                            <el-col class="main">
                                <el-col :span="12" class="main-left">
                                    <div class="product">
                                        <div class="product-img">
                                            <img src="../../../assets/img/logo.png" alt="">
                                        </div>
                                        <div class="detail-text">
                                            <div>欧式进口水晶玻璃杯水杯家用牛奶杯果汁杯6只装...</div>
                                            <div>
                                                <span>颜色：白色</span>
                                                <span>数量：6只装</span>
                                            </div>
                                            <div>¥43.50</div>
                                            <div class="more-text">更多评价（300）</div>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="main-right">
                                    <div class="evaluation">
                                        <div>2017-10-01 22:12:23</div>
                                        <div>该商品不错，卖家人很好，发货速度很快，我喜欢 下次还会来来买</div>
                                        <div class="evaluation-img">
                                            <img src="../../../assets/img/logo.png" alt="">
                                            <img src="../../../assets/img/logo.png" alt="">
                                            <img src="../../../assets/img/logo.png" alt="">
                                            <img src="../../../assets/img/logo.png" alt="">
                                            <img src="../../../assets/img/logo.png" alt="">
                                        </div>
                                    </div>
                                    <div class="textarea">
                                        <el-input
                                            type="textarea"
                                            :rows="6"
                                            placeholder="请输入内容"
                                            v-model="textarea">
                                        </el-input>
                                        <div class="btn">
                                            <el-button size="small">回复</el-button>
                                        </div>
                                    </div>
                                </el-col>
                            </el-col>
                        </el-col>
                    </el-col>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script >

    export default {
        data() {
            return {
                activeName: '1',
                textarea: '',
            }
        },
        mounted() {
        },

        methods: {
            
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

.main {
    font-size: 14px;
    .main-left {
        .product {
            display: flex;
            .product-img {
                img {
                    width: 180px;
                }
            }
            .detail-text {
                margin: 0 10px;
                div:first-child {
                    color: rgb(63, 81, 181);
                }
                div:nth-of-type(2) {
                    padding: 10px 0;
                    span {
                        color: rgb(186, 186, 186);
                    }
                }
                .more-text {
                    color: rgb(63, 81, 181);
                    padding-top: 10px;
                }
            }
        }
    }
    .main-right {
        border-left: 1px solid #bbb;
        padding: 0 15px;
        .evaluation {
            div:first-child {
                color: rgb(186, 186, 186);                   
            }
            div:nth-of-type(2) {
                padding: 15px 0; 
            }
            .evaluation-img {
                img {
                    width: 36px;
                    height: 36px;
                }
            }
        }
        .textarea {
            margin-top: 15px;
            .btn {
                text-align: right;
                padding: 10px 0;
            }
        }
    }
}
</style>