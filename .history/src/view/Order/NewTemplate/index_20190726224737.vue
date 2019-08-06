<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">新建运费模版</div>
            <!-- <div class="user">
                <img src="../../../assets/img/avatar.png" alt="" class="user-avatar">
                <div>username</div>
            </div> -->
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>订单</el-breadcrumb-item>
                <el-breadcrumb-item>物流管理</el-breadcrumb-item>
                <el-breadcrumb-item>新建运费模版</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <el-col>添加运费模板</el-col>
                <el-col class="item">
                    <el-col :span="4" class="item-name">模板名称：</el-col>
                    <el-col :span="10">
                        <el-input v-model="temName" placeholder="单行输入"></el-input>
                    </el-col>
                </el-col>
                <el-col class="item">
                    <el-col :span="4" class="item-name">发货地址：</el-col>
                    <el-col :span="20">
                        <el-cascader
                            v-model="address"
                            :options="addressList"
                            :props="{ expandTrigger: 'hover' }"
                            ></el-cascader>
                    </el-col>
                </el-col>
                <el-col class="item">
                    <el-col :span="4" class="item-name">是否包邮：</el-col>
                    <el-col :span="10">
                        <el-radio-group v-model="isShip" @change="changeShip()">
                            <el-radio label="PURCHASER">自定义运费</el-radio>
                            <el-radio label="SUPPLIER">卖家承担运费</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-col>
                <el-col class="item" v-if="seller">
                    <el-col :span="4" class="item-name">计价方式：</el-col>
                    <el-col :span="10">
                        <el-radio-group v-model="isPrice">
                            <el-radio label="QUANTITY">按件数</el-radio>
                            <el-radio label="WEIGHT">按重量</el-radio>
                            <el-radio label="VOLUME">按体积</el-radio>
                        </el-radio-group>
                    </el-col>
                </el-col>
                <el-col class="delivery" v-if="seller">
                    <el-col :span="4" class="item-name">配送区域：</el-col>
                    <el-col :span="20" class="table">
                        <el-col class="tabel-header">
                            <span>默认运费</span>
                            <el-input v-model="itemsVal_1" style="width: 100px"></el-input>
                            <span>件内</span>
                            <el-input v-model="itemsVal_2" style="width: 100px"></el-input>
                            <span>元，</span>
                            <span>每增加</span>
                            <el-input v-model="itemsVal_3" style="width: 100px"></el-input>
                            <span>件，运费增加</span>
                            <el-input v-model="itemsVal_4" style="width: 100px"></el-input>
                            <span>元</span>
                        </el-col>
                        <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                                prop="area"
                                label="地区">
                                <template slot-scope="scope">
                                    <div class="area">
                                        <div class="area-city">{{scope.row.region.join('、')}}</div>
                                        <div class="area-edit" @click="edit(scope)">编辑</div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column
                                
                                :label="volume"
                                width="120">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.one" placeholder="单行输入"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column
                                
                                label="首费(元)"
                                width="120">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.two" placeholder="单行输入"></el-input>
                                    {{scope.index}}
                                </template>
                            </el-table-column>
                            <el-table-column
                                
                                :label="weight"
                                width="120">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.three" placeholder="单行输入"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column
                                
                                label="续费(元)"
                                width="120">
                                <template slot-scope="scope">
                                    <el-input v-model="scope.row.four" placeholder="单行输入"></el-input>
                                </template>
                            </el-table-column>
                            <el-table-column
                                
                                label="续费(元)"
                                width="80">
                                <template slot-scope="scope">
                                    <el-button type="text" size="small" @click="delRes(scope)">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-col class="table-footer">
                            <span @click="addRes">指定配送区域和运费</span>
                        </el-col>
                    </el-col>
                </el-col>
                <el-col :offset="4" class="btn">
                    <el-button type="primary" size="small" @click="onSave">保 存</el-button>
                    <el-button size="small">返 回</el-button>
                </el-col>

                <el-dialog
                    title="选择可配送区域"
                    :visible.sync="tableData[itemDex].dialogVisible"
                    width="50%">                     
                    <div class="tree">
                        <div class="tree-item" v-for="item in tableData[itemDex].checkboxData" :key="item.index">
                            <el-checkbox :disabled="item.dis" :indeterminate="item.isIndeterminate" :true-label="item.label" v-model="item.checkAll" @change="handleCheckAllChange(item.checkAll, item.index)">{{item.label}}</el-checkbox>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="item.checkedCities" @change="handleCheckedCitiesChange(item.checkedCities, item.index)">
                                <el-checkbox v-for="(city, index) in item.cities" :disabled="item.citieState[index]" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="tableData[itemDex].dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="getList(itemDex)">确 定</el-button>
                    </span>
                </el-dialog>
            </el-col>
        </div>
    </div>
</template>

<script >
    import { getGeoDatas,createTemplate,modifyTemplate } from 'api/order'
    const cityOptions = [];

    export default {
        data() {
            return {
                temName: '',
                isShip: 'PURCHASER', //是否包邮
                isPrice: 'QUANTITY',
                seller:true,
                address: [],
                addressList: [],
                tableData: [
                    {   
                        checkboxData: [],
                        checkboxAll: {},
                        dialogVisible: false,
                        region: [],
                        one: null,
                        two: null,
                        three: null,
                        four: null
                    }
                ],//测试数据
                isItems: true,
                itemsVal_1: '',
                itemsVal_2: '',
                itemsVal_3: '',
                itemsVal_4: '',
                priceVal: '',
                renewalVal: '',
                dialogVisible: false,
                checkAll: false,
                checkedCities: [],
                cities: cityOptions,
                isIndeterminate: true,
                checkboxData: [],
                // 选中的地区
                checkboxAll: {},

                test: false,
                itemDex: 0
            }
        },
        computed: {
            volume() {
                let itemsName = '首件数(件)'
                let weightName = '首重量(kg)'
                let volumeName = '首体积(m³)'
                if (this.isPrice == 'QUANTITY') {
                    return itemsName
                }else if (this.isPrice == 'WEIGHT') {
                    return weightName
                }else if (this.isPrice == 'VOLUME'){
                    return volumeName
                }
            },
            weight() {
                let itemsName = '续件数(件)'
                let weightName = '续重量(kg)'
                let volumeName = '续体积(m³)'
                // console.log(this.isPrice)
                if (this.isPrice == 'QUANTITY') {
                    return itemsName
                }else if (this.isPrice == 'WEIGHT') {
                    return weightName
                }else if (this.isPrice == 'VOLUME'){
                    return volumeName
                }
            }
        },
        created() {
            getGeoDatas().then(res => {
                if (res.data.code === '0') {
                    let resultStr;
                    let result = JSON.stringify(res.data.data[0].childs)
                    var subStr=new RegExp('geoId','ig');
                    result=result.replace(subStr,"value");
                    var subStr2=new RegExp('geoName','ig');
                    result=result.replace(subStr2,"label");
                    var subSt3=new RegExp('childs','ig');
                    result=result.replace(subSt3,"children");                   
                    var subSt4=new RegExp('children:','ig');
                    result=result.replace(/\[]/g,"null")
                    this.addressList = JSON.parse(result)
                    this.addressList.forEach(item => {
                        item.checkAll = false
                        item.checkedCities = []
                    })
                    this.tableData[this.itemDex].checkboxData = this.formatData(this.addressList)
                    // console.log(this.formatData(this.addressList))
                    // 获取需要修改的数据
                    if(this.$route.params.data){
                        // this.isShip = bearFreight
                        let datas = this.$route.params.data

                        this.temName = datas.name
                        this.address = [datas.provinceId, datas.cityId, datas.districtId]
                        this.isShip = datas.bearFreight
                        this.isPrice = datas.uomType
                        // start:this.itemsVal_1,startFee:this.itemsVal_2,plus:this.itemsVal_3,plusFee:this.itemsVal_4
                        this.itemsVal_1 = datas.def.start
                        this.itemsVal_2 = datas.def.startFee
                        this.itemsVal_3 = datas.def.plus
                        this.itemsVal_4 = datas.def.plusFee

                        let tempArr = []
                        this.$route.params.data.tableData.map(res => {
                            
                            let item = {   
                                checkboxData: this.formatData(this.addressList),
                                checkboxAll: {},
                                dialogVisible: false,
                                region: res.city,
                                one: res.number,
                                two: res.money,
                                three: res.continueMoney,
                                four: res.continue
                            }

                            tempArr.push(item)
                            
                        })
                        this.tableData = tempArr
                    }
                }  
            })
        },
        mounted() {

        },
        methods: {

            // 全选
            handleCheckAllChange(val, index) {
                
                let that = this.tableData[this.itemDex]
                that.checkboxData[index].checkedCities = val? that.checkboxData[index].cities: []
                that.checkboxData[index].isIndeterminate = false
                
                // 根据value查找key
                let cityObj = that.checkboxData[index].cityObj
                function findKey (value, compare = (a, b) => a === b) {
                    return Object.keys(cityObj).find(k => compare(cityObj[k], value))
                }
                let select = {}
                select[that.checkboxData[index].value] = that.checkboxData[index].label
                that.checkboxData[index].cities.map((res) => {
                    select[findKey(res)] = res
                    // console.log(findKey(res))
                })
                // console.log(select)
                if(val === undefined) {
                    delete that.checkboxAll[index]
                }
                else {
                    that.checkboxAll[index] = select
                    
                }
            },
            getList(index) {
                
                // 清除缓存
                this.tableData[this.itemDex].region = []
                let that = this.tableData[this.itemDex]
                let region = this.tableData[index].region
                Object.values(that.checkboxAll).map((res) => {
                    Object.values(res).map((value) => {
                        region.push(value)
                    })
                })
                // console.log(that)
                that.dialogVisible = false
            },
            // 单点
            handleCheckedCitiesChange(val, index) {

                let that = this.tableData[this.itemDex]
                let checkedCount = val.length
                that.checkboxData[index].checkAll = checkedCount ===  that.checkboxData[index].cities.length
                that.checkboxData[index].isIndeterminate = checkedCount > 0 && checkedCount < that.checkboxData[index].cities.length
                
                // 根据value查找key
                let cityObj = that.checkboxData[index].cityObj
                function findKey (value, compare = (a, b) => a === b) {
                    return Object.keys(cityObj).find(k => compare(cityObj[k], value))
                }
                let select = {}
                select[that.checkboxData[index].value] = that.checkboxData[index].label
                val.map((res) => {
                    select[findKey(res)] = res
                    // console.log(findKey(res))
                })
                that.checkboxAll[index] = select
                // console.log(Object.keys(this.checkboxData[index].cityObj).find())
                // console.log(select)
                
                // 删除对象属性
                if(val.length === 0) {delete this.checkboxAll[index]}
            },
            changeShip() {
                if (this.isShip == "PURCHASER") {
                    this.seller = true
                    return
                }
                this.seller = false
            },
            onSave() {
                
                let resArr = [
                    {start:this.itemsVal_1,startFee:this.itemsVal_2,plus:this.itemsVal_3,plusFee:this.itemsVal_4,isDefault:'Y'}
                ] // 省份及市ID
                this.tableData.map((res) => {
                    let i = 0
                    let item = {
                        
                        start:res.one,startFee:res.two,plus:res.three,plusFee:res.four,isDefault:'N',geos:[]
                    }
                    
                    Object.values(res.checkboxAll).map((all) => {
                        let geosItem = {
                            provinceId: 0,
                            cityIds: []
                        }
                        let i = 0
                        // console.log(all)
                        Object.keys(all).map((key) => {
                            if(i===0){
                                console.log(key)
                                geosItem.provinceId = key
                            }
                            else
                                geosItem.cityIds.push(key)

                            i++
                        })
                        item.geos.push(geosItem)
                    })
                    
                    resArr.push(item)
                })

                let name = this.temName
                let provinceId =this.address[0]
                let cityId = this.address[1]
                let districtId = this.address[2]
                let bearFreight = this.isShip
                let uomType = this.isPrice             
                let rule = JSON.stringify(resArr)
                
                if(this.$route.params.data) {
                    let logisticsId = this.$route.params.data.logisticsId
                    modifyTemplate({name,provinceId,cityId,districtId,bearFreight,uomType,rule,logisticsId}).then(res => {
                        if(res.data.code == 0){
                            this.$message({
                                message: '修改成功',
                                type: 'success'
                            });
                            this.$router.go(-1)
                        }
                    })
                    console.log('修改')
                }else {
                    if(bearFreight === 'PURCHASER') {
                        createTemplate({name,provinceId,cityId,districtId,bearFreight,uomType,rule}).then( res => {
                            console.log(res+'11111')
                        })
                    }else if(bearFreight === 'SUPPLIER') {
                        createTemplate({name,provinceId,cityId,districtId,bearFreight,uomType}).then( res => {
                            console.log(res+'2222')
                        })
                    }
                }
                
                
            },
            // 编辑
            edit(scope) {
                this.itemDex = scope.$index
                this.tableData[scope.$index].dialogVisible = true
            },
            // 指定地区和运费
            addRes(index) {
                let that = this.formatData(this.addressList)
                
                let tableData = this.tableData

                let item = {
                    checkboxData: that,
                    checkboxAll: {},
                    dialogVisible: true,
                    region: [],
                    one: null,
                    tow: null,
                    three: null,
                    four: null
                }
                // console.log(this.formatData(this.addressList))
                this.tableData.push(item)
            },
            // 删除地区模板
            delRes(scope) {
                this.tableData.splice(scope.$index, 1)
                // this.tableData.push(0)
                // console.log(this.tableData[0])
            },
            // 格式化数据
            formatData(data) {
                let checkDatas = []
                let i = 0
                Object.values(data).map((res) => {

                    let blok = {

                        index: i++,
                        dis: false,
                        label: res.label,
                        value: res.value,
                        checkAll: false,
                        checkedCities: [],
                        cities: [],
                        citieState: [],
                        cityObj: {},
                        isIndeterminate: true
                    }
                    
                    res.children.map((child) => {
                        blok.cities.push(child.label)
                        blok.citieState.push(false)
                        blok.cityObj[child.value] = child.label
                    })
                    checkDatas.push(blok)
                    
                })
                return checkDatas
            }
        }
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
}
.item {
    margin-top: 15px;
    display: flex;
    align-items: center;       
}
.delivery {
    margin-top: 15px;
}
.item-name {
    text-align: right;
}
.btn {
    margin-top: 15px;
}
.area {
    display: flex;
    .area-city {
        margin-right: 20px;
    }
    .area-edit {
        width: 250px;
        text-align: center;
        color: #409EFF;
        cursor: pointer;
    }
}
.table {
    border: 1px solid #EBEEF5;
    .tabel-header {
        border-bottom: 1px solid #EBEEF5;
        padding: 10px,
    }
    .table-footer {
        color: #409EFF;
        padding: 6px;
        cursor: pointer;
    }
}
.tree {
    overflow: hidden;
    height: 300px;
    overflow-y: scroll;
    .tree-item {
        width: 30%;
        float: left;
        margin-top: 30px;
    }
}

.content {
    background: #fff;
    padding: 15px;
    border-radius: 4px;
}
</style>