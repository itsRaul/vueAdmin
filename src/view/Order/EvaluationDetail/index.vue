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
                                            <img :src="goods.imageUrl" alt="">
                                        </div>
                                        <div class="detail-text">
                                            <div>{{goods.goodsName}}</div>
                                            <div>
                                                {{goods.featureValue}}
                                            </div>
                                            <div>¥{{goods.goodsPrice}}</div>
                                            <!-- <div class="more-text">更多评价（300）</div> -->
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="main-right" v-if="commentStatus != 'COMPLETE'">
                                    <div class="evaluation">
                                        <div>{{reply.createTime}}</div>
                                        <div>{{reply.content}}</div>
                                        <div class="evaluation-img">
                                            <img :src="item" alt="" v-for="(item,index) in imgs" :key="index">
                                        </div>
                                    </div>
                                    <div class="textarea">
                                        <div class="score">
                                            <el-rate v-model="score"></el-rate>
                                        </div>
                                        <el-input
                                            type="textarea"
                                            :rows="6"
                                            placeholder="请输入内容"
                                            v-model="content">
                                        </el-input>                                       
                                       <div class="btn">
                                            <el-button size="small" @click="onReply()">回复</el-button>
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

<script>
import {commentInfo,commentReply} from 'api/order'

export default {
    data() {
        return {
            activeName: '1',
            content: '',
            score: null,
            goods: {},
            reply: {},
            imgs:null,
            commentStatus:'',
            
        }
    },
    mounted() {
        this.getCommentInfo()
    },
    methods: {
        //获取评价管理详情
        async getCommentInfo() {
            let commentId = this.$route.query.commentId
            try {
                let res = await commentInfo({commentId})
                if (res.data.code === '0') {
                    this.goods = res.data.data.goods
                    this.reply = res.data.data.reply
                    this.imgs = res.data.data.imageUrls.split(',')
                    this.commentStatus = res.data.data.commentStatus
                }
            } catch (error) {
                console.log(error)
            }
        },
        //回复
        async onReply() {
            let commentId = this.$route.query.commentId
            let content = this.content
            let score = this.score
            try {
                let res = await commentReply({commentId,content,score})
                if (res.data.code === '0') {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    this.$router.go(-1)
                } else {
                    this.$message.error(res.data.msg)
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
            .score {
                padding:10px 0;
            }
            .btn {
                text-align: right;
                padding: 10px 0;
            }
        }
    }
}
</style>