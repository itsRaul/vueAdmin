<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">商品分组</div>
            <!-- <div class="user">
                <img src="../../../assets/img/avatar.png" alt="" class="user-avatar">
                <div>username</div>
            </div> -->
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>产品</el-breadcrumb-item>
                <el-breadcrumb-item>商品分类</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="table-content">
                <div class="t-mini-buttom">
                    <el-button size="mini" type="primary" @click="openGoods()">新建商品分组</el-button>
                </div>

                <el-table
                    :data="tableData"
                    style="width: 100%; margin-top: 20px">
                    <el-table-column
                        prop="sortName"
                        align="center"
                        label="分组名称">                   
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="商品数量">
                        <template slot-scope="scope">
                            {{scope.row.quantity}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="创建时间">
                        <template slot-scope="scope">
                            {{scope.row.createTime | filtersTime}}
                        </template>
                    </el-table-column>
                    <el-table-column
                            align="center"
                            label="操作"
                    >
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="handleDelete(scope.row.sortId)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-col class="pagination">共 {{tableData.length}} 条</el-col>
            </el-col>
           
            <el-dialog
                title="新建商品分类"
                :visible.sync="addGoodsVisible"
                width="30%"
                center>
                <el-form ref="form" :model="addGoods" label-width="60px" size="mini">
                    <el-form-item label="分类名称">
                        <el-input v-model="addGoods.name" placeholder="分类名称"></el-input>
                    </el-form-item>
                    <el-form-item label="分类描述">
                        <el-input  
                            type="textarea"
                            :rows="4" v-model="addGoods.description" placeholder="描述不得超100个字符" maxlength="100"></el-input>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input v-model="addGoods.sequence" placeholder="排序"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="_goodsClassifySortAdd()">确定</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>

            <el-dialog
                title="编辑商品分类"
                :visible.sync="modifyGoodsVisible"
                width="30%"
                center>
                <el-form ref="form"  :model="modifyGoods" label-width="60px" size="mini">
                    <el-form-item label="分类名称">
                        <el-input v-model="modifyGoods.sortName" placeholder="分类名称"></el-input>
                    </el-form-item>
                    <el-form-item label="分类描述">
                        <el-input  
                            type="textarea"
                            :rows="4" v-model="modifyGoods.description" placeholder="描述不得超100个字符" maxlength="100"></el-input>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input v-model="modifyGoods.sequence" placeholder="排序"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="_goodsClassifySortModify()">确定</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
    </div>
</template>

<script >
import { 
    goodsClassifySortAdd,
    getSortList,
    goodsClassifySortDelete,
    goodsClassifySortModify, 
} from 'api/goods.js'

export default {
    data() {
        return {
            tableData: [],
            addGoodsVisible: false,
            addGoods: {}, //新增商品
            modifyGoodsVisible:false,
            modifyGoods: {},
            loading: false,           
        }
    },
    mounted() {
        this._getSortList();
    },
    filters: {
        //时间格式化
        filtersTime(date) {
            var dateee = new Date(date).toJSON();
            return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') 
        }
    },
    methods: {
        //显示新增商品
        openGoods() {
            this.addGoodsVisible = true
        },
        //获取商品分类列表
        _getSortList() {
            getSortList().then(res => {
                if (res.data.code === '0') {
                    this.tableData = res.data.data
                }
            })
        },
        //新增商品分类
        _goodsClassifySortAdd() {
            let sortName = this.addGoods.name
            let description = this.addGoods.description
            let sequence = this.addGoods.sequence
            let sortStatus = 'ENABLE' //是否启用 ENABLE是 DISABLE否
            goodsClassifySortAdd({sortName,description,sequence,sortStatus}).then(res => {
                if (res.data.code === '0') {
                    this.addGoodsVisible = false
                    this._getSortList()
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
                    this.addGoods = {}
                }else {
                    this.$message.error(res.data.msg);
                }
            })
        },
        //删除商品
        handleDelete(sortId) {
            this.$confirm('确认删除该商品吗?', '提示', {
                type: 'warning'
            }).then(() => {
                goodsClassifySortDelete({sortId}).then(res => {
                    if (res.data.code === '0') {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        })
                        this._getSortList()
                    }else {
                         this.$message.error(res.data.msg);
                    }
                })
            }).catch(() => {
            });
        },
        handleClick(row) {
            console.log(row)
            this.modifyGoods = row
            this.modifyGoodsVisible = true            
        },
        _goodsClassifySortModify() {
            console.log(this.modifyGoodsVisible)
            let sortName = this.modifyGoods.sortName
            let description = this.modifyGoods.description
            let sequence = this.modifyGoods.sequence
            let sortStatus = this.modifyGoods.sortStatus //是否启用 ENABLE是 DISABLE否
            let sortId = this.modifyGoods.sortId
            goodsClassifySortModify({sortName,description,sequence,sortStatus,sortId}).then(res => {
                if (res.data.code === '0') {
                    this.modifyGoodsVisible = false
                    this._getSortList()
                    this.$message({
                        message: res.data.msg,
                        type: 'success'
                    })
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
    margin: 0 15px;
    .pagination {
        text-align: right;
        margin-top: 10px;
    }
    .table-content {
        padding: 15px;
        background: #fff;
        border-radius: 4px;
    }
}
</style>