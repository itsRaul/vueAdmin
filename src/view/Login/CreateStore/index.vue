<template>
    <el-row class="wrapper">
        <!-- S 头部 -->
        <el-row class="header">
            <el-col :span="4" class="logo">
                <img src="../../../assets/img/logo.png" alt="" class="logo-img">
            </el-col>
            
            <el-col :span="6" class="logo-text">
                <span>{{tel}}</span> |
                <span>退出</span>
            </el-col>
        </el-row>

        <el-row class="content">
            <el-col class="item">
                <el-col class="title"><span>1</span>.账户信息</el-col>
                <el-col class="item-content">
                    <el-col>
                        <el-col :span="4" class="item-left">手机号码：</el-col>
                        <el-col :span="14">{{tel}}</el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">设置密码：</el-col>
                        <el-col :span="8">
                            <el-input v-model="password" type="password" placeholder="请输入密码"/>
                        </el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">确认密码：</el-col>
                        <el-col :span="8">
                            <el-input v-model="confirmPsd" type="password" placeholder="请输入确认密码" @change="psd()"/>
                        </el-col>
                    </el-col>
                </el-col>
            </el-col>

            <el-col class="item">
                <el-col class="title"><span>2</span>.企业信息</el-col>
                <el-col class="item-content">
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">公司名称：</el-col>
                        <el-col :span="8">
                            <el-input v-model="company" placeholder="请输入公司名称"/>
                        </el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">主营类目：</el-col>
                        <el-col :span="8">
                            <el-select v-model="categoryValue" placeholder="请选择类目">
                                <el-option
                                v-for="item in category"
                                :key="item.categoryId"
                                :label="item.categoryName"
                                :value="item.categoryId">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">统一社会信用代码：</el-col>
                        <el-col :span="8">
                            <el-input v-model="socialCode" placeholder="请输入统一社会信用代码"/>
                        </el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">营业期限：</el-col>
                        <el-col :span="8">
                            <el-date-picker
                                v-model="pickerValue"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">营业执照：</el-col>
                        <el-col :span="8">
                            <el-upload
                                class="avatar-uploader"
                                :action="fileupload"
                                name="file"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                <div slot="tip" class="el-upload__tip">最大支持1M，只支持jpg、png格式</div>
                            </el-upload>
                        </el-col>
                    </el-col>
                </el-col>
            </el-col>

            <el-col class="item">
                <el-col class="title"><span>3</span>.店铺管理员信息</el-col>
                
                <el-col class="item-content">
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">姓名：</el-col>
                        <el-col :span="8">
                            <el-input v-model="idcardName" placeholder="请输入管理员姓名"/>
                        </el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">身份证号：</el-col>
                        <el-col :span="8">
                            <el-input v-model="idcardNumber" placeholder="请输入管理员身份证号"/>
                        </el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">身份证失效日期：</el-col>
                        <el-col :span="8">
                            <el-date-picker
                                v-model="idcardExpireDate"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-col>
                    <el-col class="item-input">
                        <el-col :span="4" class="item-left">身份证件像：</el-col>
                        <el-col :span="5">
                            <img :src="idcardFrontUrl" alt="" class="positive-img">
                            <el-upload
                                class="upload-positive"
                                :action="fileupload"
                                name="file"
                                :show-file-list="false"
                                :on-success="handleIdcardFront" 
                                :before-upload="beforeIdcardFront">                                 
                                <el-button size="small" plain>上传正面照</el-button>
                            </el-upload>
                        </el-col>
                        <el-col :span="5">
                            <img :src="IdcardBackUrl" alt="" class="positive-img">
                            <el-upload
                                class="upload-positive"
                                :action="fileupload"
                                name="file"
                                :show-file-list="false"
                                :on-success="handleIdcardBack" 
                                :before-upload="beforeIdcardBack">                                 
                                <el-button size="small" plain>上传反面照</el-button>
                            </el-upload>
                        </el-col>
                    </el-col>
                </el-col>
            </el-col>

            <el-col :offset="4" class="footer">
                <el-col> 
                    <el-checkbox style="margin-right:10px" v-model="agreement"/>我已经阅读并同意<span class="footer-text">《平台合作协议》</span>
                </el-col>                   
                <el-button type="primary" size="small" class="create-btn" @click="onCreate()">创建店铺</el-button>                  
            </el-col>
        </el-row>
    </el-row> 
</template>

<script>
    import { getPrimary,register } from 'api/login.js'
    const defaultImg = require('../../../assets/img/logo.png')
    import { uploadUrl } from 'api/config.js'

    export default {
        data() {
            return {
                password: '',
                confirmPsd: '',
                company: '',
                categoryValue: '',
                category: [],               
                socialCode: '',
                pickerValue: '',
                imageUrl: '',
                IdcardBackUrl: defaultImg,
                idcardFrontUrl: defaultImg,
                agreement: true,
                idcardName: '',
                idcardNumber: '',
                idcardExpireDate: '',
                tel: '',
                fileupload:  uploadUrl,  //上传url
            }
        },
        mounted() {
            this.tel = this.$route.query.mobile
            getPrimary().then( res => {
                if (res.data.code === '0') {
                    this.category = res.data.data
                }
            })
        },
        methods: {            
            /** 营业执照 */
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg' ||  file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },

            /**  营业执照上传成功的照片 */
            handleAvatarSuccess(res, file) {
                if (res.code === '0') {
                     this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.imageUrl = res.data.fileurl
                }
            },

            /** 身份证反面照片 */
            beforeIdcardBack(file) {
                const isJPG = file.type === 'image/jpeg' ||  file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleIdcardBack(res, file) {
                if (res.code === '0') {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.IdcardBackUrl = res.data.fileurl
                }
            },

             /** 身份证正面照片 */
            beforeIdcardFront(file) {
                const isJPG = file.type === 'image/jpeg' ||  file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            handleIdcardFront(res, file) {
                if (res.code === '0') {
                     this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.idcardFrontUrl = res.data.fileurl
                }
            },

            psd() {
                if (this.password!==this.confirmPsd) {
                    this.$message({
                        message: '请再次确认密码',
                        type: 'warning'
                    });
                }
            },

            onCreate() {
                let date = new Date(this.pickerValue)
                let cardDate = new Date(this.idcardExpireDate)
                let categoryId = this.categoryValue
                let companyName = this.company
                let idcardBack = this.IdcardBackUrl
                let idcardFront = this.idcardFrontUrl
                let licenseCode = this.socialCode
                let licenseExpireDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
                let licenseUrl = this.imageUrl
                let mobile = this.$route.query.mobile
                let smsCode = this.$route.query.smsCode
                let authCode = this.$route.query.authCode
                let password = this.confirmPsd
                let idcardName = this.idcardName
                let idcardNumber = this.idcardNumber
                let idcardExpireDate = cardDate.getFullYear() + '-' + (cardDate.getMonth() + 1) + '-' + cardDate.getDate()

                if (this.password!==this.confirmPsd) {
                    this.$message({
                        message: '请再次确认密码',
                        type: 'warning'
                    });
                    return
                }else if (!companyName) {
                    this.$message({
                        message: '请输入公司名称',
                        type: 'warning'
                    });
                    return
                }else if (!categoryId) {
                    this.$message({
                        message: '请选择主营类目',
                        type: 'warning'
                    });
                    return
                }else if (!licenseCode) {
                    this.$message({
                        message: '请输入统一社会信用代码',
                        type: 'warning'
                    });
                    return
                }else if (!licenseCode) {
                    this.$message({
                        message: '请输入统一社会信用代码',
                        type: 'warning'
                    });
                    return
                }else if (!licenseExpireDate) {
                    this.$message({
                        message: '请选择营业期限',
                        type: 'warning'
                    });
                    return
                }else if (!licenseUrl) {
                    this.$message({
                        message: '请上传营业执照',
                        type: 'warning'
                    });
                    return
                }else if (!idcardName) {
                    this.$message({
                        message: '请输入管理员姓名',
                        type: 'warning'
                    });
                    return
                }else if (!idcardNumber) {
                    this.$message({
                        message: '请输入管理员身份证号',
                        type: 'warning'
                    });
                    return
                }else if (!idcardExpireDate) {
                    this.$message({
                        message: '请选择管理员身份证失效日期',
                        type: 'warning'
                    });
                    return
                }else if (!idcardFront) {
                    this.$message({
                        message: '请上传身份证件像正面照',
                        type: 'warning'
                    });
                    return
                }else if (!idcardBack) {
                    this.$message({
                        message: '请上传身份证件像反面照',
                        type: 'warning'
                    });
                    return
                }

                register({ categoryId,companyName,idcardBack,idcardFront,licenseCode,licenseExpireDate,licenseUrl,mobile,password,idcardExpireDate,idcardName,idcardNumber,smsCode,authCode }).then( res => {
                    if (res.data.code === '0') {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$router.push('/')
                    }else {
                        this.$message.error(res.data.msg);
                    }
                })
            },
        },
    }
</script>

<style lang='scss' scoped>
    .header {
        border-bottom: 1px solid #bbbbbb;
        padding-top: 30px;
        padding-bottom: 30px;
        display: flex;
        align-items: flex-end;
        .logo {
            .logo-img {
                width: 180px;          
            }
        }
        .logo-text {
            font-size: 18px;
            padding-left: 30px;
            flex: 1;
            text-align: right;
        }
    } 

    .content {
        padding-left: 30px;
        .title {
            font-size: 28px;
            font-family: SourceHanSansSC;
            font-weight: 700;
            padding-top: 30px;
            span {
                color: rgba(229, 28, 35, 1);
            }
        }
        .item {
            .item-content {
                padding-top: 15px;
                font-size: 18px;
                .item-left {
                    text-align: right;
                }
                .item-input {
                    display: flex;
                    align-items: center;
                    margin-top: 15px;
                }
                .item-select {
                    margin-right: 15px;
                }
                .positive-img {
                    width: 200px;
                    height: 100px;
                }
                .upload-positive {
                    margin-left: 50px;
                    margin-top: 15px;
                }
            }
        }
        .footer {
            padding: 30px 0;
            .footer-text {
                color: rgba(52, 136, 255, 1);
            }
            .create-btn {
                margin-top: 15px;
                padding: 10px 60px;
            }
        }
    }

    
</style>
