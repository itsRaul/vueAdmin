<template>
    <div>
        <ul class="menu">
            <li v-for="(item,index) in menu" :key="item.id" :class="menuIndex == index ? 'active-menu' : ''" @click="changeMenuIndex(index)">{{item.name}}</li>
        </ul>

        <div class="picker">
            <el-date-picker
                v-model="pickerVal"
                prefix-icon="el-icon-date"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
        </div>

        <div class="tables">
            <div class="tables-content">
                <el-table
                    :header-cell-style="{background:'#f0f4f7'}"
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="结算日期"
                        align="center"
                    >
                        <template slot-scope="scope">
                            <div>2017-10-20 12:15</div>
                        </template> 
                    </el-table-column>
                    <el-table-column
                        prop="name"
                        label="收入（元）"
                        align="center"
                    >
                        <template slot-scope="scope">
                            <div>+100.00</div>
                        </template> 
                    </el-table-column>
                    <el-table-column
                        prop="number"
                        label="支出（元）"
                        align="center"
                    >
                        <template slot-scope="scope">
                            <div>0.00</div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="subTotal"
                        label="余额（元）"
                        align="center"
                    >
                        <template slot-scope="scope">
                            <div>100.00</div>
                        </template>  
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu:[
                {id:1,name:'日汇总'},
                {id:2,name:'月汇总'},
            ],
            menuIndex: 0,
            pickerVal: '',
            tableData: [{number: 1,subTotal:500},{number: 1,subTotal:500},{number: 1,subTotal:500}],//表格数据
            currentPage: 1,
        }
    },
    methods: {
        changeMenuIndex(index) {
            this.menuIndex = index
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    },
}
</script>

<style lang="scss" scoped>
.menu {
    height: 38px;
    line-height: 36px;
    border-bottom: 1px solid #f2f2f2;
    li {
        float: left;
        padding: 0 30px;
        border: 1px solid #f2f2f2;
        background-color: rgb(247, 247, 247);
        cursor: pointer;
    }
    .active-menu {
        background: #ffffff;
    }
}
.picker {
    padding-top: 10px;
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


