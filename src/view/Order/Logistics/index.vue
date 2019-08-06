<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="运费配置" name="1">

                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>订单</el-breadcrumb-item>
                            <el-breadcrumb-item>所有订单</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">                         
                            <el-col>
                                <el-button type="primary" size="small" @click="toNewtem()">新建运费模版</el-button>
                            </el-col> 

                            <el-col class="list" v-for="(data, index) in listItem " :key="index">
                                <el-col class="header">
                                    <el-col :span="4">{{data.name}}</el-col>
                                    <el-col :span="20" class="header-right">
                                        <span class="header-right-timer">最后编辑时间{{data.createTime}}</span>
                                        <span class="header-right-btn">复制</span>
                                        <span class="header-right-btn" @click="modifyTemp(index)">修改</span>
                                        <span class="header-right-btn" @click="delTemp(data.logisticsId, index)">删除</span>
                                    </el-col>
                                </el-col>

                                <el-table
                                    :data="data.tableData"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="city"
                                        label="可配送区域">
                                        
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        prop="number"
                                        label="首件（个）"
                                        width="100">
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        prop="money"
                                        label="运费（元）"
                                        width="100">
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        prop="continue"
                                        label="续件（个）"
                                        width="100">
                                    </el-table-column>
                                    <el-table-column
                                        align="center"
                                        prop="continueMoney"
                                        label="续费（元）"
                                        width="100">
                                    </el-table-column>
                                </el-table>
                            </el-col>  
                            <el-col class="page">共 {{listItem.length}} 条</el-col>
                        </el-col>
                    </el-col>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script >
    import { getTemplateList, deleteTemplate } from 'api/order'
    
    export default {
        data() {
            return {
                activeName: '1',
                tableData: [
                {   
                    city: '辽宁省、吉林省、黑龙江省',
                    number: '1',
                    money: '8',
                    continue: '1',
                    continueMoney: '5'
                },{
                    city: '江苏省、福建省、江西省、山东省',
                    number: '1',
                    money: '8',
                    continue: '1',
                    continueMoney: '8'
                }],
                listItem: []
            }
        },
        created() {
            getTemplateList().then( res => {
                this.listData = res.data.data
                console.log(res)
                res.data.data.map((res) => {
                    
                    let item = {
                        name: res.name,
                        createTime: res.createTime,
                        bearFreight: res.bearFreight,
                        storeId: res.storeId,
                        cityId: res.cityId,
                        uomType: res.uomType,
                        updateTime: res.updateTime,
                        comments: res.comments,
                        districtId: res.districtId,
                        provinceId: res.provinceId,
                        logisticsId: res.logisticsId,
                        uomType: res.uomType,
                        def: {
                            startFee: 0,
                            start: 0,
                            plusFee:0,
                            plus:0
                        },
                        tableData: []
                    }
                    // console.log(res)
                    for(let i=0; i<res.rules.length; i++){

                        if(i === 0) {
                            item.def.startFee = res.rules[i].startFee
                            item.def.start = res.rules[i].start
                            item.def.plusFee = res.rules[i].plusFee
                            item.def.plus = res.rules[i].plus
                        }
                        else{
                            let list = {
                                city: [],
                                number: res.rules[i].start,
                                money: res.rules[i].startFee,
                                continue: res.rules[i].plus,
                                continueMoney: res.rules[i].plusFee
                            }
                            console.log()
                            JSON.parse(res.rules[i].geos).map((ress)=>{
                                list.city = ress.citys
                            })
                            // console.log(item)
                            item.tableData.push(list)
                        }
                    }
                    this.listItem.push(item)
                    // console.log(res)

                })
                
            })
            
        },
        mounted(){
            
        },
        methods: {
            toNewtem() {

                this.$router.push({name:'newTemplate'})
            },
            modifyTemp(index) {
                this.$router.push({name:'newTemplate', params: {data: this.listItem[index]}})
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            delTemp(logisticsId, index) {
                this.listItem.splice(index, 1)
                // console.log('删除'+logisticsId)
                deleteTemplate(logisticsId).then(res => {
                    if(res.data.code == 0){
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        }); 
                    }else {
                        this.$message.error('删除失败');
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

.list {
    border: 1px solid #ccc;
    margin-top: 15px;
    .header {
        background-color: rgb(229, 229, 229);
        padding: 15px;
        border-bottom: 1px solid #ccc;
        .header-right {
            text-align: right;
            span {
                margin: 0 10px;
            }
            .header-right-timer {
                color: rgb(186, 186, 186);
            }
            .header-right-btn {
                color: rgb(52, 136, 255);
                cursor: pointer;
            }        
        }
    }
}   
.page {
    text-align: right;
    padding: 15px 0;
}
</style>