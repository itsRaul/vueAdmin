<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="员工信息" name="1">
                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>设置</el-breadcrumb-item>
                            <el-breadcrumb-item>员工信息</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">
                            <div class="search">
                                <div class="search-btn">
                                    <el-button type="primary" size="small" @click="toStaffAdd()">添加员工</el-button>
                                </div>
                                <div class="seach-input">
                                    <el-select v-model="adminVal" clearable placeholder="请选择" size="small">
                                        <el-option
                                        v-for="item in adminData"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                        </el-option>
                                    </el-select>
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
                                            prop="userLoginId"
                                            label="登录账户"
                                            align="center"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="Name"
                                            label="员工姓名"
                                            align="center"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="concat"
                                            label="联系方式"
                                            align="center"
                                        >
                                        </el-table-column>
                                        <!-- <el-table-column
                                            prop="userLoginId"
                                            label="创建人"
                                            align="center"
                                        > 
                                        </el-table-column> -->
                                        <!-- <el-table-column
                                            prop="subTotal"
                                            label="赋予权限"
                                            align="center"
                                        > 
                                            <template slot-scope="scope">
                                                <div class="admin-tag">超级管理员</div>
                                            </template>
                                        </el-table-column> -->
                                        <el-table-column
                                            prop="subTotal"
                                            label="添加时间"
                                            align="center"
                                            width="200"
                                        > 
                                            <template slot-scope="scope">
                                                <div>{{scope.row.createTime | filtersTime}}</div>
                                            </template>
                                        </el-table-column>
                                        <!-- <el-table-column
                                            prop="subTotal"
                                            label="操作"
                                            align="center"
                                        >
                                            <template slot-scope="scope">
                                                <div class="search-text">查看</div>
                                            </template>  
                                        </el-table-column> -->
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
import {staffList} from 'api/setting'

export default {
    data() {
        return {
            activeName: '1',
            adminData: [{
                value: '1',
                label: '超级管理员'
                }, {
                value: '2',
                label: '高级管理员'
                }, {
                value: '3',
                label: '普通管理员'
                }, {
                value: '4',
                label: '客服'
                }, {
                value: '5',
                label: '核销员'
            }],
            adminVal: '',
            tableData: [],//表格数据
        }
    },
    filters: {
        //时间格式化
        filtersTime(date) {
            var dateee = new Date(date).toJSON();
            return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
        }
    },
    mounted() {
        this.getStaffList()
    },
    methods: {
        toStaffAdd() {
            this.$router.push('/admin/staffAdd')
        },
        getStaffList() {
            staffList().then(res => {
                console.log(res)
                if (res.data.code === '0') {
                    this.tableData = res.data.data.staffs
                }
            })
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
    .seach-input {
        float: right;
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