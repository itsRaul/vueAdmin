<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">员工信息</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>设置</el-breadcrumb-item>
                <el-breadcrumb-item>员工信息</el-breadcrumb-item>
                <el-breadcrumb-item>角色添加</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <div class="staff">
                    <div class="staff-item">
                        <label class="label">角色名称：</label>
                        <div class="staff-input">
                            <el-input v-model="name" placeholder="请输入角色名称"></el-input>
                        </div>
                    </div>
                    <div class="staff-item">
                        <label class="label">角色描述：</label>
                        <div class="staff-input">
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="请输入角色描述"
                                v-model="describe">
                            </el-input>
                        </div>
                    </div>
                    <div class="staff-item">
                        <label class="label">权限：</label>
                        <div class="staff-input">
                            <el-tree
                                :data="treeList"
                                show-checkbox
                                node-key="id"
                                @check-change="handleCheckChange"
                            >
                            </el-tree>
                        </div>
                    </div>
                </div>

                <div class="confirm">
                    <el-button type="primary" size="mini" @click="onRoleAdd()">保存</el-button>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script >
import {resourceList,roleAdd} from 'api/setting'

export default {
    data() {
        return {
            name: '',
            describe: '',
            treeList: [],
            permit: [],
        }
    },
    mounted() {
        this.getResourceList()
    },
    methods: {
        getResourceList() {
            resourceList().then(res => {
                if (res.data.code === '0') {
                    let list = JSON.stringify(res.data.data)
                    let labelStr=new RegExp('resourceName','ig');
                    list=list.replace(labelStr,"label");
                    let idStr=new RegExp('resourceId','ig');
                    list=list.replace(idStr,"id");
                    this.treeList = JSON.parse(list)
                }
            })
        },
        handleCheckChange(data) {
            this.permit.push(data.id)
        },
        onRoleAdd() {
            let roleName = this.name
            let description = this.describe
            let permit = JSON.stringify(this.permit)         
            roleAdd({roleName,description,permit}).then(res => {
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