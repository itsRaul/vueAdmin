<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">员工信息</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>设置</el-breadcrumb-item>
                <el-breadcrumb-item>员工信息</el-breadcrumb-item>
                <el-breadcrumb-item>添加员工</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <div class="staff">
                    <div class="staff-item">
                        <label class="label">登录账户：</label>
                        <div class="staff-input">
                            <el-input v-model="account" placeholder="单行输入"></el-input>
                        </div>
                    </div>
                    <div class="staff-item">
                        <label class="label">登录密码：</label>
                        <div class="staff-input">
                            <el-input v-model="password" placeholder="单行输入"></el-input>
                        </div>
                    </div>
                    <div class="staff-item">
                        <label class="label">员工姓名：</label>
                        <div class="staff-input">
                            <el-input v-model="username" placeholder="单行输入"></el-input>
                        </div>
                    </div>
                    <div class="staff-item">
                        <label class="label">联系方式：</label>
                        <div class="staff-input">
                            <el-input v-model="mobile" placeholder="单行输入"></el-input>
                        </div>
                    </div>
                    <div class="staff-item">
                        <label class="label">员工编号：</label>
                        <div class="staff-input">
                            <el-input v-model="staffCode" placeholder="单行输入"></el-input>
                        </div>
                    </div>
                    
                    <div class="staff-item">
                        <label class="label">店铺角色：</label>
                        <div class="radio">
                            <el-select class="w300" v-model="roleIdValue" @change="changeData()" placeholder="请选择">
                                <el-option
                                v-for="item in tableData"
                                :key="item.roleId"
                                :label="item.description"
                                :value="item.roleId">
                                </el-option>
                            </el-select>
                        </div>
                    </div>
                </div>

                <div class="confirm">
                    <el-button type="primary" size="mini" @click="getStaffAdd()">保存</el-button>
                    <el-button size="mini">取消</el-button>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script >
import {staffAdd,roleList} from 'api/setting'

export default {
    data() {
        return {
            account: '',
            username: '',
            mobile: '',
            power: 1,
            staffCode: '',
            password:'',
            tableData: [],
            roleIdValue: ''

        }
    },
    mounted() {
        this.getRoleList()
    },
    methods: {
        changeData(){
            console.log(this.roleIdValue )   
        },
        getRoleList() {
            roleList().then(res => {
                if (res.data.code === '0') {
                    this.tableData = res.data.data
                }
            })
        },
        getStaffAdd() {
            let name = this.username
            let userLoginId = this.account
            let roleId = this.roleIdValue
            let staffCode = this.staffCode
            let mobile = this.mobile //联系方式
            let password = this.password
            staffAdd({mobile,name,userLoginId,roleId,staffCode,password}).then(res => {
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
    },
}
</script>


<style scoped lang="scss">
.w300 {
    width:300px;
}
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
.confirm {
    margin-left: 150px;
    padding-top: 20px;
}
</style>