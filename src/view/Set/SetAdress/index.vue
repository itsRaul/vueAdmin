<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="员工信息" name="1">
                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>设置</el-breadcrumb-item>
                            <el-breadcrumb-item>商品地址</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">
                            <div class="search">
                                <div class="search-btn">
                                    <el-button @click="toAddAdress()" type="primary" size="small">添加地址</el-button>
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
                                            label="发货地址"
                                            align="center"
                                            width="80"
                                        >
                                            <template slot-scope="scope">
                                                <!-- <el-checkbox v-model="isShip"  @change="_addressSetting(scope.row.addressId,scope.row.isShip)">{{scope.row.isShip}}</el-checkbox>                            -->
                                                <el-radio v-model="isShip" :label=scope.row.isShip  @change="_addressSetting(scope.row.addressId,scope.row.isShip)">默认</el-radio>
                                            </template> 
                                        </el-table-column>
                                             
                                        <el-table-column
                                            label="退货地址"
                                            align="center"
                                            width="80"
                                        >
                                            <template slot-scope="scope">
                                                <el-radio v-model="isReturn" :label=scope.row.isReturn @change="returnAddressSetting(scope.row.addressId,scope.row.isReturn)">默认</el-radio>
                                                <!-- <el-checkbox v-model="isReturn">{{scope.row.isReturn}}</el-checkbox> -->
                                                <!-- <el-radio v-model="adressRadio"></el-radio> -->
                                            </template>  
                                        </el-table-column>
                                        <el-table-column
                                            prop="contact"
                                            label="联系人"
                                            align="center"
                                           
                                        >
                                        </el-table-column>
                                        <el-table-column                                       
                                            label="所在地区"
                                            align="center"
                                        >
                                            <template slot-scope="scope">
                                                <div>{{scope.row.province}} {{scope.row.city}} {{scope.row.district}}</div>
                                            </template>  
                                        </el-table-column>
                                        <el-table-column
                                            prop="address"
                                            label="街道地址"
                                            align="center"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="zipcode"
                                            label="邮政编码"
                                            align="center"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="telphone"
                                            label="电话号码"
                                            align="center"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                            prop="mobile"
                                            label="手机号码"
                                            align="center"
                                        >
                                        </el-table-column>
                                        <!-- <el-table-column
                                            prop="description"
                                            label="公司名称"
                                            align="center"
                                        >
                                        </el-table-column> -->
                                        <el-table-column                                       
                                            label="操作"
                                            align="center"
                                            width="100"
                                        >
                                            <template slot-scope="scope">
                                                <span class="search-text" @click="handleEdit(scope.row.addressId)">编辑</span>
                                                <span class="search-text" @click="_addressDelete(scope.row.addressId)">删除</span>
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
import {addressList,addressDelete,addressSetting} from 'api/setting'

export default {
    data() {
        return {
            activeName: '1',
            tableData: [],
            isShip: 'Y', //发货
            isReturn: 'Y', //退货
            adressRadio: '',
        }
    },
    mounted() {
        this.getAddressList()
    },
    computed: {
        ship() {
            return
        }
    },
    methods: {
        toAddAdress() {
            this.$router.push('/admin/addAdress')
        },
        //获取表格数据
        getAddressList() {
            addressList().then(res => {
                if (res.data.code === '0') {
                    this.tableData = res.data.data
                }
            })
        },
        //删除
        _addressDelete(id) {
            let addressId = id;
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                addressDelete({addressId}).then(res => {
                    if (res.data.code === '0') {
                        this.getAddressList()
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });                       
                    }else {
                        this.$message.error(res.data.msg);
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });            
        },
        //编辑
        handleEdit(addressId) {
           this.$router.push({path:'/admin/addAdress',query:{addressId}})         
        },
        _addressSetting(addressId,Ship) {
            this.isShip = 'Y'
            if (Ship == 'N') {
                let isShip = 'Y'
                addressSetting({addressId,isShip}).then(res => {
                    if (res.data.code === '0') {
                        this.getAddressList()
                    }else {
                        this.$message.error(res.data.msg);
                    } 
                }) 
            }                  
        },
        returnAddressSetting(addressId,isreturn) {
            this.isReturn = 'Y'
            if (isreturn == 'N') {
                let isReturn = 'Y'
                addressSetting({addressId,isReturn}).then(res => {
                    if (res.data.code === '0') {
                        this.getAddressList()
                    }else {
                        this.$message.error(res.data.msg);
                    }                                 
                }) 
            }   
        },
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