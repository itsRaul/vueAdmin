<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="出售中" name="1">

                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>产品</el-breadcrumb-item>
                            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">
                            <el-col class="goods">
                                <el-col :span="4">
                                    <el-col><el-button type="success" size="small" @click="toPublish()">发布商品</el-button></el-col>
                                </el-col>
                                <el-col :span="20" class="goods-input">
                                    <el-col :span="6" class="select">
                                            <el-select v-model="goodsValue" placeholder="请选择" size="small" clearable>
                                            <el-option
                                            v-for="item in allGoods"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-col>
                                        <el-col :span="6" class="select">
                                            <el-input v-model="input" placeholder="请输入商品编号" size="small"></el-input>
                                    </el-col>
                                    <el-col :span="6">
                                            <el-button size="small">搜索</el-button>
                                    </el-col>
                                </el-col>
                            </el-col>
                    
                            <el-table :data="tableData" class="table">
                                <el-table-column type="selection" width="55" align="center"></el-table-column>                      
                                <el-table-column label="商品 价格">
                                    <template slot-scope="scope">
                                        <div class="goods-price">
                                            <img :src="scope.row.imageUrl" alt="" class="goods-img">
                                            <div class="goods-depict">
                                                <div class="goods-name" @click="toGoodsDetail(scope.row.goodsId)">{{scope.row.goodsName}}</div>
                                                <div class="price-text">¥{{scope.row.salePrice}}</div>
                                            </div>
                                        </div>
                                    </template>                                
                                </el-table-column>
                                <el-table-column prop="name" label="访问量" width="120" align="center">
                                    <template slot-scope="scope">
                                        <div>访客数：0</div>
                                        <div>浏览量：0</div>
                                    </template>
                                </el-table-column>
                                <el-table-column  label="库存" width="80" align="center">
                                    <template slot-scope="scope">
                                        <div>10</div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="name" label="总销量" width="80" align="center">
                                    <template slot-scope="scope">
                                        <div>-</div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="name" label="创建时间" width="160" align="center">
                                    <template slot-scope="scope">
                                        <div>{{scope.row.createTime | formatTime}}</div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="name" label="序号" width="80" align="center">
                                    <template slot-scope="scope">
                                        <div>000</div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" width="180" align="center">
                                    <template slot-scope="scope">
                                        <el-button type="text">编辑</el-button>
                                        <el-button type="text">推广产品</el-button>
                                        <el-button type="text">复制</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="已售罄" name="menu">已售罄</el-tab-pane>
                <el-tab-pane label="仓库中" name="footer">仓库中</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script >
    import { getGoodslist } from 'api/goods.js'

    export default {
        data() {
            return {
                activeName: '1',
                allGoods: [
                    {
                        value: '选项1',
                        label: '全部商品'
                    },
                ],
                goodsValue: '',
                allGroup: [
                    {
                        value: '选项1',
                        label: '所有分组'
                    },
                ],
                groupValue: '',
                input: '',
                tableData: [],
                totalPage: null,
                total: null,
                currentPage:1,
            }
        },
         mounted() {
            this._getGoodslist()
        },
        filters: {
            //格式化时间
            formatTime(value) {
                let d = new Date(value);
                let times=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes()
                return times
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            _getGoodslist() {
                let goodsCode = ''
                let goodsName = ''
                let goodsStatus = ''
                let page = this.currentPage
                getGoodslist({ goodsCode,goodsName,goodsStatus,page }).then( res => {
                    if (res.data.code === '0') {
                        this.tableData = res.data.data.goods
                        this.totalPage = res.data.data.totalPage
                        this.total = res.data.data.total
                    }
                   
                })
            },
            toPublish() {
                this.$router.push({path:'/admin/publishGoods'})
            },
            handleSizeChange(val) {
                this.currentPage = val;
                this._getGoodslist()
                console.log(`每页 ${val} 条`);               
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this._getGoodslist()
                console.log(`当前页: ${val}`);
            },
            toGoodsDetail(goodsId) {
                this.$router.push({path:'/admin/goodsDetail',query:{goodsId}})
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

.goods {
    display: flex;
    align-items: center;
    .goods-input {
        display: flex;
        justify-content: flex-end;
        .select {
            margin-right: 15px;
        }
    }
}
.table{
    width: 100%;
    font-size: 14px;
    .goods-price {
        display: flex;
        .goods-img {
            width: 80px;
            height: 80px;
            cursor: pointer;
        }
        .goods-depict {
            padding-left: 10px;
            .goods-name {
                color: #3238c4;
                 cursor: pointer;
            }
            .price-text {
                color: #dd7142;
            }
        }
        
    }       
}
.table-btn {
    margin-top: 15px;
}
</style>