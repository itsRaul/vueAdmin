<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">员工信息</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>设置</el-breadcrumb-item>
                <el-breadcrumb-item>商品地址</el-breadcrumb-item>
                <el-breadcrumb-item>角色地址</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <div class="staff">
                    <div class="staff-item">
                        <label class="label">联系人：<span class="star">*</span></label>
                        <div class="staff-input">
                            <el-input v-model="contact" placeholder="请输入联系人"></el-input>
                        </div>
                    </div>
                    <div class="staff-item">
                       <label class="label">所在地区：<span class="star">*</span></label>
                        <div class="staff-input">
                            <el-cascader
                                v-model="address"
                                :options="addressList"
                                :props="{ expandTrigger: 'hover' }"
                                ></el-cascader>
                        </div>
                    </div>  
                    <div class="staff-item">
                        <label class="label">街道地址：</label>
                        <div class="staff-input">
                            <el-input type="textarea" :rows="3" v-model="addressName" placeholder="请输入备注信息"></el-input>
                        </div>
                    </div>              
                    <div class="staff-item">
                        <label class="label">邮政编码：<span class="star">*</span></label>
                        <div class="staff-input">
                            <el-input v-model="zipcode" placeholder="请输入邮政编码"></el-input>
                        </div>
                    </div>  
                    <div class="staff-item">
                        <label class="label">电话号码：</label>
                        <div class="staff-input">
                            <el-input v-model="telephone" placeholder="请输入电话号码"></el-input>
                        </div>
                    </div> 
                    <div class="staff-item">
                        <label class="label">手机号码：</label>
                        <div class="staff-input">
                            <el-input v-model="mobilePhone" placeholder="请输入手机号码"></el-input>
                        </div>
                    </div>   
                    <div class="staff-item">
                        <label class="label">备注：</label>
                        <div class="staff-input">
                            <el-input type="textarea" :rows="3" v-model="remark" placeholder="请输入备注信息"></el-input>
                        </div>
                    </div>              
                </div>

                <div class="confirm">
                    <el-button type="primary" size="mini" @click="onSave()">保存</el-button>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script>
import { getGeoDatas} from 'api/order';
import {addressAdd,addressModify,addressInfo} from 'api/setting';

export default {
    data() {
        return {
            contact: '',        //联系人
            zipcode: '',        //邮政编码
            telephone: '',      //电话号码
            mobilePhone: '',    //手机号码
            remark: '',         //备注
            address: [],        //所有地区
            addressList: [],    //所有地区
            addressName: '',        //街道地址
        }
    },
    mounted() {
        this._getGeoDatas();
        this._addressInfo();
    },
    methods: {
        //所在地区
        _getGeoDatas() {
            getGeoDatas().then(res => {
                if (res.data.code === '0') {
                    let resultStr;
                    let result = JSON.stringify(res.data.data[0].childs)
                    var subStr=new RegExp('geoId','ig');
                    result=result.replace(subStr,"value");
                    var subStr2=new RegExp('geoName','ig');
                    result=result.replace(subStr2,"label");
                    var subSt3=new RegExp('childs','ig');
                    result=result.replace(subSt3,"children");                   
                    var subSt4=new RegExp('children:','ig');
                    result=result.replace(/\[]/g,"null");
                    this.addressList = JSON.parse(result);               
                }  
            })
        },
        _addressInfo() {
            if (!this.$route.query.addressId) return
            let addressId = this.$route.query.addressId
            addressInfo({addressId}).then((res) => {
                if (res.data.code === '0') {
                    let result = res.data.data
                    this.contact = result.contact
                    this.zipcode = result.zipcode
                    this.telephone = result.telphone
                    this.mobilePhone = result.mobile
                    this.remark = result.remark
                    this.addressName = result.address
                    this.address.push(result.provinceId,result.cityId,result.districtId)
                }
            })
        },
        onSave() {
            let contact = this.contact;
            let provinceId = this.address[0];
            let cityId = this.address[1];
            let districtId = this.address[2];
            let zipcode = this.zipcode;
            let telphone = this.telephone;
            let mobile = this.mobilePhone;
            let remark = this.remark;
            let address = this.addressName
            if (!contact) {
                this.$message({
                    message: '请输入联系人',
                    type: 'warning'
                });
                return
            }else if (this.address.length == 0) {
                this.$message({
                    message: '请选择所在地区',
                    type: 'warning'
                });
                return
            }else if (!address) {
                this.$message({
                    message: '请输入街道地址',
                    type: 'warning'
                });
                return
            }else if (!this.zipcode) {
                this.$message({
                    message: '请输入邮政编码',
                    type: 'warning'
                });
                return
            }
            
            //判断是编辑还是添加商品地址
            if (this.$route.query.addressId) {            
                let addressId = this.$route.query.addressId
                console.log(typeof addressId )
                addressModify({contact,provinceId,cityId,districtId,zipcode,telphone,mobile,remark,address,addressId}).then(res => {
                    if (res.data.code === '0') {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$router.go(-1)
                    }else {
                        this.$message.error(res.data.msg);
                    }               
                })
            } else {
                addressAdd({contact,provinceId,cityId,districtId,zipcode,telphone,mobile,remark,address}).then(res => {
                    if (res.data.code === '0') {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$router.go(-1)
                    }else {
                        this.$message.error(res.data.msg);
                    }               
                })
            }
            
        }
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
.staff {
    .staff-item {
        padding: 10px 0;
        .label {
            display: inline-block;
            width: 150px;
            text-align: right;
            position: relative;
        }
        .staff-input {
            display: inline-block;
            width: 300px;
            vertical-align: middle;
        }
        .radio {
            display: inline-block;
        }
    }
}
.star {
    color: red;
    position: absolute;
    right: 0;
    top: 2px;
}
.confirm {
    margin-left: 150px;
    padding-top: 20px;
}
</style>


