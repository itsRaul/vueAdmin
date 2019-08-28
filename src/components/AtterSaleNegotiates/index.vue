<template>
    <div>
        <div class="history-container">
            <div class="history-title">
                <div>协商历史</div>
                <div @click="openMsg()">我要留言</div>
            </div>
            <div class="message-list">
                <div class="message-item" v-for="(item,index) in negotiates" :key="index">
                    <img :src="item.images" alt="" >
                    <div class="message-content">
                        <div class="message-info">
                            <div>{{item.portrait}}</div>
                            <div>{{item.createTime}}</div>
                        </div>
                        <div class="message-label">
                            <div>{{item.description}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <el-dialog
            title="留言"
            :visible.sync="msgVisible"
            width="36%">
        <div class="dialog">
            <div class="dialog-item">
                <label>退款凭证：</label>
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
            <div class="dialog-item">
                <label>退款说明：</label>
                <el-input
                    type="textarea"
                    :rows="3"
                    placeholder="请输入内容"
                    v-model="description">
                </el-input>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="msgVisible = false">取 消</el-button>
            <el-button type="primary" @click="setReturnsComments()">确 定</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
import {returnsComments} from 'api/order'
import { uploadUrl } from 'api/config.js'

export default {
    props: {
        negotiates: {
            type: Array
        }        
    },
    data() {
        return {
            msgVisible:false,
            description: '',
            fileupload:  uploadUrl,  //上传url
            imageUrl: '',
        }
    },
    methods: {
        openMsg() {
            this.msgVisible = true;
        },
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
        //留言
        setReturnsComments() {
            let returnsId = this.$route.query.returnsId;
            let description = this.description;
            let images = this.imageUrl;

            returnsComments({description,images,returnsId}).then(res => {
                if (res.data.code === '0') {
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    this.msgVisible = false
                    this.$emit('refresh')
                }else {
                    this.$message.error(res.data.msg)
                }
            }) 
        },
    },
}
</script>

<style lang="scss" scoped>
.history-container {
    .history-title {
        font-weight: 600;
        overflow: hidden;
        padding-top: 15px;
        div:nth-of-type(1) {
            float: left;
        }
        div:nth-of-type(2) {
            float: right;
            color: #2086c8;
            cursor: pointer;
        }
    }
    .message-list {
        padding-top: 20px;
        .message-item {
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid #e8e8e8;
            img {
                width: 60px;
            }
            .message-content {
                flex: 1;
                padding-left: 8px;
                font-size: 14px;
                .message-info {
                    overflow: hidden;                           
                    div:nth-of-type(1) {
                        float: left;
                    }
                    div:nth-of-type(2) {
                        float: right;
                        color: #9c9c9c;
                    }
                }
                .message-label {
                    div:nth-of-type(1) {
                        display: inline-block;
                    }
                }
            }
        }
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
       .el-textarea {
           width: 300px;
           vertical-align: middle;
       }
   } 
}
.avatar-uploader {
    display: inline-block;
    vertical-align: middle;
}
</style>