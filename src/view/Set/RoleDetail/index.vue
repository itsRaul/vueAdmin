<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">员工信息</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>设置</el-breadcrumb-item>
                <el-breadcrumb-item>员工信息</el-breadcrumb-item>
                <el-breadcrumb-item>角色详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <div class="staff">
                    <div class="staff-item">
                        <label class="label">角色名称：</label>
                        <div class="staff-input">
                            {{detail.roleName}}
                        </div>
                    </div>
                    <div class="staff-item">
                        <label class="label">角色描述：</label>
                        <div class="staff-input">
                            {{detail.description}}
                        </div>
                    </div>
                    <div class="staff-item">
                        <label class="label">权限：</label>
                        <div class="staff-input">
                            <el-tree :data="treeList"></el-tree>
                        </div>
                    </div>
                </div>

                <div class="confirm">
                    <el-button type="primary" size="mini">保存</el-button>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script >
import {roleInfo} from 'api/setting'

export default {
    data() {
        return {
            detail: {},
            treeList: [],
        }
    },
    mounted() {
        this.getRoleInfo()
    },
    methods: {
        getRoleInfo() {
            let roleId = this.$route.query.roleId
            roleInfo({roleId}).then(res => {
                if (res.data.code === '0') {
                    this.detail = res.data.data
                    let list = JSON.stringify(res.data.data.permits)
                    let labelStr=new RegExp('resourceName','ig');
                    list=list.replace(labelStr,"label");
                    let idStr=new RegExp('resourceId','ig');
                    list=list.replace(idStr,"id");
                    this.treeList = JSON.parse(list)
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