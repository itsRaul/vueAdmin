<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">会员管理</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>客户</el-breadcrumb-item>
                <el-breadcrumb-item>会员管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <div class="search">
                   <div class="search-item">
                       <div class="search-info">
                           <label>手机号码：</label>
                           <div class="search-input">
                               <el-input v-model="moblie" placeholder="请输入手机号码"></el-input>
                           </div>
                       </div>
                       <div class="search-info">
                           <label>客户来源：</label>
                           <div class="search-input">
                               <el-select v-model="memberVal" clearable placeholder="请选择">
                                    <el-option
                                    v-for="item in memberData"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                           </div>
                       </div>
                       <div class="search-info">
                            <el-button type="primary">筛选</el-button>
                       </div>
                   </div>
                </div>

                <div class="tables">
                    <div class="tables-content">
                        <el-table
                            :header-cell-style="{background:'#f0f4f7'}"
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="手机号"
                                align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="姓名"
                                align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="number"
                                label="昵称（微信）"
                                align="center"
                            >
                             </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="注册时间"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <div class="fz-color">2017-10-20 12:15</div>
                                </template>  
                            </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="来源"
                                align="center"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="操作"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <div class="search-text">查看</div>
                                </template>  
                            </el-table-column>
                        </el-table>
                    </div>

                    <div class="block">
                        <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[100, 200, 300, 400]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                        </el-pagination>
                    </div>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                tableData: [{number: 1,subTotal:500}],//表格数据
                moblie: '',
                memberData: [{value: '选项1',label: '黄金糕'}],       
                memberVal: '',
                currentPage: 1,
            }
        },
        mounted() {
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
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
    margin: 0 15px;
    .content {
        background-color: #ffffff;
        border-radius: 4px;
        padding: 15px;
    }
}
.search {
    .search-item {
        .search-info {
            display: inline-block;
            margin-right: 30px;
            label {
                vertical-align: middle;
            }
            .search-input {
                width: 300px;
                display: inline-block;
                vertical-align: middle;
            }
        }
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
}
</style>