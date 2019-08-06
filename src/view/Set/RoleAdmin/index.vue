<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="员工信息" name="1">
                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>设置</el-breadcrumb-item>
                            <el-breadcrumb-item>角色管理</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">
                            <div class="search">
                                <div class="search-btn">
                                    <el-button @click="toRoleAdd()" type="primary" size="small">添加角色</el-button>
                                </div>
                            </div>

                            <div class="tables">
                                <div class="tables-content">
                                    <el-table
                                        :header-cell-style="{background:'#f0f4f7'}"
                                        :data="tableData"
                                        stripe
                                        style="width: 100%">
                                        <el-table-column
                                            prop="roleName"
                                            label="员工角色"
                                            align="center"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="description"
                                            label="描述"
                                            align="center"
                                        >
                                       </el-table-column>
                                        <el-table-column
                                            prop="subTotal"
                                            label="操作"
                                            align="center"
                                        >
                                            <template slot-scope="scope">
                                                <div class="search-text" @click="toRoleDetail(scope.row.roleId)">查看</div>
                                            </template>  
                                        </el-table-column>
                                    </el-table>
                                </div>
                            </div>

                        </el-col>
                    </el-col>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script >
import {roleList} from 'api/setting'

export default {
    data() {
        return {
            activeName: '1',
            tableData: [],
        }
    },
    mounted() {
        this.getRoleList()
    },
    methods: {
        getRoleList() {
            roleList().then(res => {
                if (res.data.code === '0') {
                    this.tableData = res.data.data
                }
            })
        },
        toRoleAdd() {
            this.$router.push('/admin/roleAdd')
        },
        toRoleDetail(roleId) {
            this.$router.push({path:'/admin/roleDetail',query:{roleId}})
        }
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
.search {
    overflow: hidden;
    .search-btn {
        float: left;
    }
}
.tables {
    padding-top: 30px;
    .tables-content {
        border: 1px solid #EBEEF5;   
        .search-text {
            cursor: pointer;
        }   
    }
    .block {
        text-align: right;
        padding: 15px;
    }
    .admin-tag {
        color: rgb(255, 255, 255);
        background-color: rgb(139, 195, 74);
        display: inline;
        padding: 4px 10px;
    }
    .search-text {
        cursor: pointer;
    }
}
</style>