<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">发布商品</div>
            <div class="user">
                <img src="../../../assets/img/avatar.png" alt="" class="user-avatar">
                <div>username</div>
            </div>
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>产品</el-breadcrumb-item>
                <el-breadcrumb-item>商品管理</el-breadcrumb-item>
                <el-breadcrumb-item>发布商品</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="table-content">
                <!-- S 基本信息 -->
                <el-col>
                    <el-col>基本信息</el-col>
                    <el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">商品分类：</el-col>
                                <el-col :span="10">
                                <el-select v-model="classify" placeholder="请选择商品分类" clearable style="width:100%">
                                    <el-option
                                    v-for="item in goodsTypes"
                                    :key="item.categoryId"
                                    :label="item.categoryName"
                                    :value="item.categoryId">                                       
                                    </el-option>
                                </el-select>
                                </el-col>
                        </el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">商品名称：</el-col>
                                <el-col :span="10">
                                <el-input v-model="goodsName" placeholder="最多允许30个汉子和字符" maxlength="30"></el-input>
                                </el-col>
                        </el-col>
                        <el-col class="property">
                            <el-col :span="4" class="property-name">类目属性：</el-col>
                            <el-col :span="20">
                                <el-col>
                                    <el-col :span="24" class="property-add">
                                        <el-col v-for="(item,index) in customerProps" :key="index" style="padding:10px 0;">
                                            <el-col :span="10" class="append-input">
                                                <el-input v-model="item.name" placeholder="属性名称"></el-input>
                                            </el-col>
                                            <el-col :span="10">
                                                <el-input v-model="item.value" placeholder="属性值"></el-input>
                                            </el-col>
                                            <el-col :span="2" class="property-remove" @click.native="removeProperty(index)">移除</el-col>
                                        </el-col>   
                                        <el-col class="add-btn">
                                            <el-button type="primary" size="small" @click="addProperty()">添加属性</el-button>
                                            <span class="add-text">您最多可添加5组自定义属性</span>
                                        </el-col>                                        
                                    </el-col>
                                </el-col>
                            </el-col>
                        </el-col>
                    </el-col>
                </el-col>
                <!-- E 基本信息 -->

                <!-- S 销售信息 -->
                <el-col>
                    <el-col>销售信息</el-col>
                    <el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">报价方式：</el-col>
                                <el-col :span="10">
                                <el-radio-group v-model="bid" @change="changeBid()"> 
                                    <el-radio label="QUANTITY">按产品数量报价</el-radio>
                                    <el-radio label="FEATURE">按产品规格报价</el-radio>
                                    </el-radio-group>
                                </el-col>
                        </el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">计量单位：</el-col>
                                <el-col :span="10">
                                <el-select v-model="unitId" placeholder="请选择计量单位" clearable style="width:100%">
                                    <el-option
                                        v-for="item in uomList"
                                        :key="item.uomId"
                                        :label="item.description"
                                        :value="item.uomId">                                       
                                        </el-option>
                                </el-select>
                                </el-col>
                        </el-col>
                        <el-col class="property" v-show="isPrice">
                            <el-col :span="4" class="property-name">价格区间：</el-col>
                            <el-col :span="20" class="price">
                                <el-col>
                                    <el-col :span="12" class="price-title">购买数量</el-col>
                                    <el-col :span="12" class="price-title">产品单价</el-col>
                                </el-col>
                                <el-col class="price-item" v-for="(item,index) in rangeList" :key="index">
                                    <el-col :span="11" class="price-title">
                                        起订量 <el-input v-model="item.quantity" style="width:180px" placeholder="单行输入"/> 件以上
                                    </el-col>
                                    <el-col :span="11" class="price-title">
                                        <el-input v-model="item.price" style="width:180px" placeholder="单行输入"/> 元/件
                                    </el-col>
                                    <el-col :span="2" class="remove-price" @click.native="removepriceBetween(index)">
                                        删除
                                    </el-col>
                                </el-col>
                                <el-col class="price-btn">
                                        <el-button type="primary" size="small"  icon="el-icon-plus" @click="addpriceBetween()">增加区间价格</el-button>
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col class="property">                              
                            <el-col :span="4" class="property-name">商品规格：</el-col>
                            <el-col :span="20" class="goods-format">
                                <el-col class="goods-tips">
                                    第一个商品规格可添加规格图片
                                </el-col>
                                <el-col class="format-border">
                                    <el-col class="format-list" v-for="(item,index) in standardList" :key="index">
                                        <el-col class="format">
                                            <el-col :span="20" class="color-item">
                                                <el-col :span="10">
                                                    <el-select v-model="item.featureVal"     v-on:change="handleChange($event,index)"   value-key="featureTypeId" placeholder="请选择颜色" clearable style="width:100%">
                                                        <el-option
                                                            v-for="ele in featureList"
                                                            :key="ele.featureTypeId"
                                                            :label="ele.featureTypeName"
                                                            :value="ele">                                       
                                                            </el-option>
                                                    </el-select>
                                                </el-col>
                                                <el-col :span="2" :offset="1">
                                                    <el-checkbox v-model="item.checked">添加图片</el-checkbox>
                                                </el-col>
                                            </el-col>
                                            <el-col :span="2" class="format-remove" @click.native="removeStandard(index)">
                                                删除
                                            </el-col>
                                        </el-col>
                                        <el-col class="format-item">
                                            <el-col :span="6" class="format-upload" v-for="(sub,i) in item.props" :key="i">
                                                <el-col class="color-btn">
                                                        <el-button  size="small">{{sub.value}}</el-button>
                                                        <i class="iconfont icon-shanchu icon-remove" @click="removeGoodsUpload(index,i)"></i>
                                                </el-col>
                                                <el-col>
                                                    <el-upload
                                                            class="avatar-uploader"
                                                            :action=fileupload  
                                                            name="file" 
                                                            :show-file-list="false"
                                                            :on-success="(res,file)=>handleAvatarSuccess(res,file,index,i)"
                                                            :before-upload="beforeAvatarUpload">
                                                            <img v-if="sub.preview" :src="sub.preview" class="avatar">
                                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                                    </el-upload>                                                
                                                </el-col>
                                            </el-col>                                             
                                        </el-col>
                                        <el-col class="add-goods">
                                            <el-col :span="10">
                                                <el-input v-model="item.standardVal" style="width:100%" placeholder="请输入规格值"></el-input>
                                            </el-col>
                                            <el-col :span="2" class="add-btn" @click.native="addGoodsUpload(item.featureVal,item.standardVal,index)">添加</el-col>
                                        </el-col>
                                    </el-col>
                                    <el-col class="format-add-btn">
                                        <el-button size="small" icon="el-icon-plus" @click="addStandard()">添加规格</el-button>
                                    </el-col>
                                </el-col>
                            </el-col>                                
                        </el-col>
                        <el-col class="property">
                            <el-col :span="4" class="property-name">价格库存：</el-col>
                            <el-col class="pdl">

                            <lb-table
                            :column="tableColumn"
                            :data="tableData"
                            :merge="['id_1','id_2','id_3','id_4','id_5']"
                            border
                            style="width: 85%">
                            </lb-table>
                            </el-col>
                            <el-col :span="20" >
                            </el-col>
                        </el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">价格：</el-col>
                                <el-col :span="10">
                                <el-input v-model="salePrice" style="width:100%" placeholder="请输入价格"></el-input>
                                </el-col>
                        </el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">数量：</el-col>
                                <el-col :span="10">
                                <el-input v-model="quantity" style="width:100%" placeholder="请输入数量"></el-input>
                                </el-col>
                        </el-col>
                            <el-col class="item">
                            <el-col :span="4" class="left-name">商家编号：</el-col>
                                <el-col :span="10">
                                <el-input v-model="goodsCode" style="width:100%" placeholder="请输入商家编号，最长输入20个字符" maxlength="20"></el-input>
                                </el-col>
                        </el-col>
                    </el-col>
                </el-col>
                <!-- E 销售信息 -->

                 <el-col>
                    <el-col>产品介绍</el-col>
                    <el-col>
                        <el-col class="property">  
                            <el-col :span="4" class="property-name">产品图片：</el-col>
                            <el-col :span="20" class="goods-format">
                                <el-col>
                                    宝贝图片不能超过3M,700*700 以图片
                                </el-col>
                                <el-col class="upload-list">
                                    <el-upload   
                                        :action=fileupload                                           
                                        list-type="picture-card"      
                                        name="file"                                                    
                                        :on-success="handleProduct"
                                        :on-remove="handleRemoveProduct"
                                        :before-upload="beforeProduct">                           
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col class="property" style="height:500px">  
                            <el-col :span="4" class="property-name">产品描述：</el-col>
                            <el-col :span="20" class="goods-format" >
                                <quill-editor 
                                    v-model="textarea" 
                                    ref="myQuillEditor" 
                                    style="height:360px"
                                    :options="editorOption"
                                    @change="onEditorChange($event)">
                                </quill-editor>
                            </el-col>
                        </el-col>
                        <el-col class="property">  
                            <el-col :span="4" class="property-name">物流/其他</el-col>
                            <el-col :span="20" class="freight">
                                <el-col class="freight-item">
                                    <el-col :span="3">运费模板：</el-col>
                                    <el-col :span="10">
                                        <el-select v-model="templateVal" disabled placeholder="请选择商品分类" clearable style="width:100%">
                                        <el-option
                                        v-for="item in goods"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">                                       
                                        </el-option>
                                    </el-select>
                                    </el-col>
                                    <el-col :span="3" class="template-text">新建模版</el-col>
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col class="property">  
                            <el-col :span="4" class="property-name">上架时间</el-col>
                            <el-col :span="20" class="freight">
                                <el-col class="freight-item">
                                    <el-radio-group v-model="goodsStatus" @change="handleGoodsStatus()"> 
                                        <el-radio label="UP_SALE">立即上架</el-radio>
                                        <el-radio label="TIMING">定时上架</el-radio>
                                        <el-radio label="OFF_SALE">放入仓库</el-radio>
                                    </el-radio-group>
                                </el-col>
                                <el-col class="freight-item" v-show="goodsStatus=='TIMING'">
                                    <el-col :span="3">设置日期：</el-col>
                                    <el-col :span="10">
                                        <el-date-picker
                                            v-model="publishTime"
                                            type="date"
                                            placeholder="选择日期">
                                        </el-date-picker>
                                    </el-col>
                                </el-col>
                            </el-col>
                        </el-col>
                    </el-col>
                </el-col>
                <!-- E 产品介绍 -->

                <el-col class="publish-btn">
                    <el-button size="small">保存草稿</el-button>
                    <el-button type="primary" size="small" @click="onPublish()">提交商品信息</el-button>
                </el-col>
            </el-col>
           
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { getFeatureType,publishGoods,getUom } from 'api/goods.js'
    import { getPrimary } from 'api/login.js'
    import { uploadUrl } from 'api/config.js'
    import LbTable from 'components/LbTable'
    import { createTree,createList,getTitle,resList,getPostData } from './table.js'
    import { quillEditor } from 'vue-quill-editor'

    export default {
        data() {
            return {
                goodsTypes: [], //商品分类
                goods: [{value: '选项1',label: '黄金糕'}],
                classify: '',
                goodsName: '',   
                brand: '',
                places: '',
                material: '',
                customerProps: [], //类目属性               
                bid: 'QUANTITY',
                unitId: '' ,//计量单位
                uomList: [], //计量单位列表
                rangeList: [], //价格区间列表              
                goodsNum: '',
                goodsPrice: '',
                imageUrl: '',
                tableData: [],
                
                fileList: [],
                surplus: '',
                goodsID: '',
                barcode: '',
                textarea: '',
                freight: '',
                templateVal: '',
                goodsStatus: 'UP_SALE', //上架时间状态
                publishTime: '', //发布时间
                salePrice: '', //价格
                quantity: '', //数量
                goodsCode: '', //商家编号
                isPrice: true, //是否显示价格区间
                standardList: [],              
                featureVal: '',
                featureList: [], //商品规格请选择颜色  
                fileupload:  uploadUrl,  //上传url
                images:[], //产品图片 
                colorList: [],
                sizeList: [],
                specs: [
                  {
                    pid: 1,
                    name:'xxl',
                    value:'蓝色'
                  },
                  {
                    pid: 1,
                    name:'xl',
                    value:'蓝色'
                  },
                  {
                    pid: 1,
                    name:'xls',
                    value:'蓝色'
                  },
                  {
                    pid: 2,
                    name:'xxl',
                    value:'红色'
                  },
                  {
                    pid: 2,
                    name:'xl',
                    value:'红色'
                  }
                ]  ,
                inData:{},//数据输入
                tableColumn:[
                    {
                        prop: 'quantity',
                        label: '可售数量',
                        fixed:'right',
                        render: (h, scope) => {
                        return (
                            <input type="text" class={`inp in_${scope.$index}_1`}/>
                        )
                        }
                    },
                    {
                        prop: 'outerId',
                        label: '产品编号',
                        fixed:'right',
                        render: (h, scope) => {
                        return (
                            <input type="text" class={`inp in_${scope.$index}_2`}/>
                        )
                        }
                    },
                    {
                        props:"barcodes",
                        label: '条形码',
                        fixed:'right',
                        render: (h, scope) => {
                        return (
                            <input type="text"  class={`inp in_${scope.$index}_3`} /> 
                        )
                        }
                    }
                ],
                editorOption: {
                    placeholder: '请输入内容',
                },//富文本
          
            }
        },
        computed: {
            
        },
        mounted() {
            getPrimary().then( res => {
                if (res.data.code === '0') {
                    this.goodsTypes = res.data.data;
                }
            })

            getFeatureType().then( res => {
                if (res.data.code === '0') {
                    this.featureList = res.data.data;
                }
            })  
            
            getUom().then( res => {
                if (res.data.code === '0') {
                    this.uomList = res.data.data;
                }
            })
        },
        methods: {
            //富文本的内容
            onEditorChange({quill,html,text}) {
                this.textarea = html;

            },
            //处理标题
           handleChange(e,index){
                this.tableColumn[index+3].prop='id_'+e.featureTypeId;
                this.tableColumn[index+3].label=e.featureTypeName;
           },
            //添加类目属性
            addProperty() {
                if (this.customerProps.length == '5') {
                    this.$message({
                        message: '您最多可添加5组自定义属性',
                        type: 'warning'
                    });
                    return
                }

                this.customerProps.push(
                    {   
                        name: '',
                        value: ''
                    }
                )
            },
            //删除类目属性
            removeProperty(index) {
                this.customerProps.splice(index,1)
            },
            
            //是否显示价格区间
            changeBid() {
                if (this.bid === 'QUANTITY') {
                    this.isPrice = true
                }else if (this.bid === 'FEATURE') {
                    this.isPrice = false
                }
            },

             //添加价格区间
            addpriceBetween() {
                this.rangeList.push({
                    quantity: '',
                    price: '',
                })
            },
            //删除价格区间
            removepriceBetween(index) {
                this.rangeList.splice(index,1)
            },

            //添加商品规格
            addStandard() {
                let item={
                    checked: true,
                    standardVal: '',
                    featureVal: '',
                    props: [],
                };
                this.standardList.push(item)
                //后三位
                this.tableColumn.push({
                    prop:'',
                    label:''
                })
                
            },
             //删除商品规格
            removeStandard(index) {
                this.standardList.splice(index,1)
                 this.tableColumn.splice(index+3,1)
                this.updateTableData()
            },

            //添加商品规格
            addGoodsUpload(obj,standardVal,index) {
                //添加商品规格的数据
                this.standardList[index].props.push({
                    name:obj.featureTypeName,
                    pid: obj.featureTypeId,
                    value: standardVal,
                    preview: '',
                })
                this.updateTableData()
            },
            //删除商品规格
            removeGoodsUpload(index,i) {
                this.standardList[index].props.splice(i,1);
                this.updateTableData()
            },
            //更新表格数据
            updateTableData(){
                this.tableData=resList(createList(this.standardList,0,[]));
            },
            //上传文件之前的钩子,限制上传图片的格式和大小
            beforeProduct(file) {
                const isJPG = file.type === 'image/jpeg' ||  file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 3;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 3MB!');
                }
                return isJPG && isLt2M;
            },
            //产品图片上传成功
            handleProduct(res) {
                if (res.code === '0') {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.images.push({
                        mediaId: res.data.upfileId || 1,
                        mediaName:res.data.filename,
                        image: res.data.fileurl
                    })
                }else {
                    this.$message.error(res.msg);
                }
            },
            //删除产品图片,过滤删除的产品图片
            handleRemoveProduct(file, fileList) {
                let res = file.response
                if (res.code === '0') {
                    this.$message({
                        message: res.msg,
                        type: 'success'
                    });
                    this.images = this.images.filter(item => {
                        return item.image == res.data.fileurl                        
                    })
                }else {
                    this.$message.error(res.msg);
                }
                console.log(res);
            },

            //切换上架时间状态,清空时间
            handleGoodsStatus() {
                this.setDate = ''
            },

            //发布商品
            onPublish() {
                let publish = new Date(this.publishTime)
                let categoryId = this.classify
                let goodsName = this.goodsName
                let customerProps = JSON.stringify(this.customerProps)
                let quoteType = this.bid
                let uomId = this.unitId
                let range = JSON.stringify(this.rangeList)
                let salePrice = this.salePrice
                let quantity = this.quantity
                let goodsCode = this.goodsCode
                let images = JSON.stringify(this.images)
                let details = this.textarea
                let goodsStatus = this.goodsStatus
                let publishTime = publish.getFullYear() + '-' + (publish.getMonth() + 1) + '-' + publish.getDate()
                let logisticsId = '1'

                let goodsSkus=JSON.stringify(getPostData(this.tableData));
                //组合数据
                
                publishGoods({ categoryId,goodsName,customerProps,quoteType,uomId,range,salePrice,quantity,goodsCode,images,details,goodsStatus,logisticsId,goodsSkus }).then( res => {
                    if (res.data.code === '0') {
                        this.$message({
                            message: res.data.msg,
                            type: 'success'
                        });
                        this.$router.push({path:'/admin/goods',query:{id:'2'}})
                    }else {
                        this.$message.error(res.data.msg);
                    }
                    console.log(res)
                })
                
            },

            //产品规格上传图片
            handleAvatarSuccess(res,file,index,i) {     
                this.standardList[index].props[i].preview = res.data.fileurl
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg' ||  file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 1;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 1MB!');
                }
                return isJPG && isLt2M;
            }
        },
        components: {
            LbTable,
            quillEditor
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
    overflow: hidden;
    background: #fff;
    .table-content {
        padding: 15px;
        background: #fff;
        border-radius: 4px;
    }
}

$space10:10px;
.clearFloat {content:".";display:block;clear:both;}
.inventory {
    width: 749px;
    border:1px solid #999;
}
.inventory .thead {
    border-bottom:1px solid #999;
    height:40px;
    line-height:40px;
    font-size:0;
}
.inventory .thead span {
    display:inline-block;
    width:20%;
    text-align:center;
    font-size:14px;
}
.wrapBox {
    position:relative;
    overflow: hidden;
}
.inventory .box1 {
    width:19%;
    text-align:center;
    margin-top:10px;
}
.inventory .box1:after {
    content:'';
    width:1px;
    height:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:19%;
    background:#999;
}

.box2 {
    width:81%;
}
.box2 .dl {
    font-size:0;
    height:40px;
    line-height:40px;
    border-bottom:1px solid #999;
}
.box2 .dl:last-child{
    border-bottom:none;
}
.sBox {
    min-width:25%;
    border-right:1px solid #999;
    display:inline-block;
    font-size:14px;
    text-align:center;
}
.b_no {
    border-right:none;
}
.inventory .inp {
    width: 80px;
    height: 24px;
    line-height: 24px;
}
.inventory thead {
    border: 1px solid #999;
    border-bottom:none;
    height: 50px;
    line-height: 50px;
}
.inventory td{
    border: 1px solid #999;
    text-align: center;
    height: 60px;
    width: 145px;
    line-height: 60px;
}
.item {
    display: flex;
    align-items: center;
    padding: $space10 0;
    .left-name {
        text-align: right;
    }
}

.property {
    padding: $space10 0;
    .property-name {
        text-align: right;
    }
    .property-item {
        display: flex;
        align-items: center;
        text-align: right;
        padding: $space10 0;
        
    }
    .property-add {
        padding: $space10 0;
        .append-input {
            padding: 0 $space10;
        }
        .property-remove {
            cursor: pointer;
            margin-left: 10px;
        }
        .add-btn {
            padding: 10px;
        }
        .add-text {
            font-size: 12px;
            color: #999;
        }
    } 
    .goods-tips {
        font-size: 14px;
        color: #999;
        padding-bottom: 15px;
    }  
}

.price {
    border: 1px solid #999;
    padding: 15px;
    .price-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        .remove-price {
            cursor: pointer;
        }
    }
    .price-title{
        text-align: center;
    }
    .price-btn {
        margin-left: 30px;
    }
}

.goods-format {         
    .format-list {
        border: 1px solid #999;
        margin-bottom: 15px;
    }  
    .format-border {
        border: 1px solid #999;
        padding: 15px;   
    }
    .format {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #999;
        padding: 10px;
        background-color: rgba(217, 217, 217, 0.33);
        .color-item {
            display: flex;
            align-items: center;
        }      
        .format-remove {
            cursor: pointer;
        }
    }
    .format-item {
        padding: 15px;
        .icon-remove {
            position: relative;
            left: -10px;
            top: -8px;
        }
        .format-upload {
            text-align: center;
            .color-btn {
                margin-bottom: 10px;
            }
            
        }
        
    }
    .format-add-btn {
        padding-top: 15px;
    }
    .upload-list {
        padding-top: 15px;
    }
    .add-goods {
        display: flex;
        align-items: center;
        padding: 10px;
        .add-btn {
            cursor: pointer;
            margin-left: 10px;
        }
    }
}

.freight {
    padding-top: 15px;
    .freight-item {
        display: flex;
        align-items: center;
        margin-top: 15px;
        .template-text {
            cursor: pointer;
            margin-left: 10px;
        }
    }
}
.publish-btn {
    text-align: center;
    padding: 30px 0;
}

.pdl {
    padding-left: 168px;
}
</style>