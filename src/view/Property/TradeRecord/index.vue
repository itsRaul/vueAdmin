<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">交易记录</div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>资产</el-breadcrumb-item>
                <el-breadcrumb-item>交易记录</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <div class="search">
                    <div class="search-item">
                        <div class="search-info">
                            <label>创建时间：</label>
                            <el-date-picker
                                v-model="pickerVal"
                                type="daterange"
                                align="center"
                                unlink-panels
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="search-item">
                       <div class="search-info">
                           <label>单号：</label>
                           <div class="search-input">
                               <el-input v-model="number" placeholder="订单号/退款单号/支付流水号"></el-input>
                           </div>
                       </div>
                       <div class="search-info">
                           <label>交易状态：</label>
                           <div class="search-input">
                               <el-select v-model="tradeVal" clearable placeholder="请选择">
                                    <el-option
                                    v-for="item in tradeSelectData"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                           </div>
                       </div>
                   </div>
                   <div class="search-item search-btn">
                        <el-button type="primary" size="mini">筛选</el-button>
                        <el-button size="mini">导出</el-button>                    
                    </div>
                </div>

                <el-col class="table">
                    <ul class="menu">
                        <li v-for="(item,index) in menu" :key="item.id" :class="menuIndex == index ? 'active-menu' : ''" @click="changeMenuIndex(index)">{{item.name}}</li>
                    </ul>

                    <el-col class="table-content">
                        <el-table
                            :header-cell-style="{background:'#f0f4f7'}"
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="date"
                                label="交易时间"
                                align="center"
                                width="180"
                            >
                                <template slot-scope="scope">
                                    <div>2017-10-20 12:15</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="类型"
                                align="center"
                                width="240"
                            >
                            </el-table-column>
                            <el-table-column
                                prop="number"
                                label="订单号/支付单号"
                                align="center"
                                width="240"
                            >
                                <template slot-scope="scope">
                                    <div>订单号:23424243243243244</div>
                                    <div>交易号23424234234324234</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="number"
                                label="对方"
                                align="center"
                            > 
                            </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="金额|明细"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <div>¥55</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="状态"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <div>进行中</div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                prop="subTotal"
                                label="操作"
                                align="center"
                            >
                                <template slot-scope="scope">
                                    <div>查看</div>
                                </template>  
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-col>
            </el-col>
        </div>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                pickerVal: '',
                number: '',
                tradeSelectData: [{value: '1',label: '进行中'},{value: '2',label: '退款'},{value: '3',label: '成功'},{value: '4',label: '失败'}],  
                tradeVal: '',
                menu:[
                    {id:1,name:'全部'},
                    {id:2,name:'进行中'},
                    {id:3,name:'退款'},
                    {id:4,name:'成功'},
                    {id:5,name:'失败'},
                ],
                menuIndex: 0,
                tableData: [{name:'欧式进口水晶玻璃杯水杯家用牛奶杯果汁杯6只装套装家庭客厅喝水',number: '姜小盼零食铺',subTotal:500}],//表格数据
            }
        },
        mounted() {
        },
        methods: {
            changeMenuIndex(index) {
                this.menuIndex = index
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
.search {
    .search-item {
        margin: 10px 0;
        .search-info {
            display: inline-block;
            margin-right: 30px;
            label {
                display: inline-block;
                vertical-align: middle;
                width: 100px;
                text-align: right;
            }
            .search-input {
                width: 350px;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
    .search-btn {
        margin-left: 110px;
    }
}
.table {
    padding-top: 15px;
    .menu {
        height: 38px;
        line-height: 36px;
        border: 1px solid #f2f2f2;
        li {
            float: left;
            padding: 0 30px;
            border-right: 1px solid #f2f2f2;
            background-color: rgb(247, 247, 247);
            cursor: pointer;
            font-weight: 700;
        }
        .active-menu {
            background: #ffffff;
        }
    }
    .table-content {
        margin-top: 15px;
    }
}
</style>