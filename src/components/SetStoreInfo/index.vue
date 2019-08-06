<template>
    <div>
        <div class="store">
            <div class="store-item">
                <label class="label">店铺名称：</label>
                <div class="store-text">
                    <div class="input">
                        <el-input v-model="name" placeholder="请输入店铺名称"></el-input>
                    </div>
                    <!-- <span class="modify">修改</span> -->
                </div>
            </div>
            <div class="store-item">
                <label class="label">主营类目：</label>
                <div class="store-text">
                    <span>休闲零食</span>
                </div>
            </div>
            <div class="store-item">
                <label class="label">主营类目：</label>
                <div class="store-text">
                    <span>休闲零食</span>
                </div>
            </div>
            <div class="store-item">
                <label class="label">创建日期：</label>
                <div class="store-text">
                    <span>2017-09-07 14:26:12</span>
                </div>
            </div>
            <div class="store-item">
                <label class="label profile-label">店铺LOGO：</label>
                <div class="store-text">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="logoUrl" :src="logoUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>

                </div>
            </div>
            <div class="store-item">
                <label class="label profile-label">店铺简介：</label>
                <div class="store-text profile-store-text">
                    <el-input
                        type="textarea"
                        :rows="4"
                        placeholder="请输入内容"
                        v-model="textarea">
                    </el-input>
                </div>
            </div>
            <div class="store-item">
                <label class="label">联系人手机号：</label>
                <div class="store-text">
                    <div class="input">
                        <el-input v-model="mobile" placeholder="请输入手机号"></el-input>
                    </div>
                    <!-- <span class="modify">修改</span> -->
                </div>
            </div>
        </div>
        <div class="confirm">
            <el-button type="primary" size="mini">确定</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            logoUrl: '',
            textarea: '',
            mobile: '',
        }
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
}
</script>

<style lang="scss" scoped>
.store {
    .store-item {
        padding: 10px 0;
        .label {
            display: inline-block;
            width: 150px;
            text-align: right;
            vertical-align: middle;
            color: rgb(115, 112, 115);
        }
        .store-text {
            display: inline-block;
            vertical-align: middle;
            .input {
                display: inline-block;
                width: 250px;
            }
            .modify {
                color: rgb(52, 136, 255);
                margin-left: 15px;
                cursor: pointer;
            }
        }
        .profile-label {
            vertical-align: top;
        }
        .profile-store-text {
            vertical-align: top;
            width: 360px;
        }
    }   
}
.confirm {
    margin-left: 160px;
    padding-top: 10px;
    padding-bottom: 30px;
}
</style>


