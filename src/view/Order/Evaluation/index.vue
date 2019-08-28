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
                                        label="订单编号/商品">
                                        <template slot-scope="scope">
                                            <div>
                                                <div>{{scope.row.goods.featureCode}}</div>
                                                <div class="product">
                                                    <div>
                                                        <img :src="scope.row.goods.imageUrl" alt="" class="product-img">
                                                    </div>
                                                    <div class="product-right">
                                                        <div class="detail-text">{{scope.row.goods.goodsName}}</div>
                                                        <div class="text">
                                                            {{scope.row.goods.featureValue}}
                                                        </div>
                                                        <!-- <div class="detail-text more-text">更多评价（300）</div> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        label="评价">
                                        <template slot-scope="scope">
                                            <div class="evaluation">
                                                <div class="evaluation-top">
                                                    <div v-if="scope.row.score > 3">【好评】</div>
                                                     <div v-else-if="scope.row.score == 3">【中评】</div>
                                                     <div v-else-if="scope.row.score < 3">【差评】</div>
                                                    <div>{{scope.row.content}}</div>
                                                </div>
                                                <div class="evaluation-img">
                                                    <span v-for="(item,index) in scope.row.imageUrls.split(',')" :key="index"> 
                                                        <img :src="item" alt="">
                                                    </span>
                                                </div>
                                                <div class="time">{{scope.row.createTime}}</div>
                                            </div>
                                        </template>
                                    </el-table-column>
                                    <el-table-column
                                        label="回复"
                                        width="200"
                                        align="center">
                                        <template slot-scope="scope">
                                            <div class="reply-text" @click="toDetail(scope.row)" v-if="scope.row.commentStatus === 'COMPLETE'">已回复</div>
                                            <div class="reply-text" @click="toDetail(scope.row)" v-else>待回复</div>                                          
                                            <div>{{scope.row.reply.content}}</div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </el-col>
                        </el-col>
                    </el-col>
                </el-tab-pane>
                <!-- <el-tab-pane label="好评" name="2"></el-tab-pane>
                <el-tab-pane label="中评" name="3"></el-tab-pane>
                <el-tab-pane label="差评" name="4"></el-tab-pane> -->
            </el-tabs>
        </div>
    </div>
</template>

<script >
import {commentList} from 'api/order'

export default {
    data() {
        return {
            activeName: '1',
            tableData: []
        }
    },
    mounted() {
        this.getCommentList()
    },
    methods: {
        //跳转详情页面
        toDetail(row) {
            let commentId = row.commentId
            this.$router.push({path:'/admin/evaluationDetail',query:{commentId}})
        },
        //获取评价管理列表
        async getCommentList() {
            try {
                let res = await commentList()
                if (res.data.code === '0') {
                    this.tableData = res.data.data.datas
                }             
            } catch (error) {
                console.log(error)
            }
        },        
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
    .reply-text {
        cursor: pointer;
    }     
}
.pagination {
    text-align: right;
    padding: 15px 0;
}

</style>