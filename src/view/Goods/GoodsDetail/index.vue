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
                        <!-- <el-col class="item">
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
                        </el-col> -->
                        <el-col class="item">
                            <el-col :span="4" class="left-name">商品名称：</el-col>
                                <el-col :span="10">
                                    {{goodsDetail.goodsName}}
                                </el-col>
                        </el-col>
                        <!-- <el-col class="property">
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
                        </el-col> -->
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
                                {{goodsDetail.quoteType=='quoteType'?'按产品数量报价':'按产品规格报价'}}
                                </el-col>
                        </el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">计量单位：</el-col>
                                <el-col :span="10">
                                {{goodsDetail.uomId}}
                                </el-col>
                        </el-col>
                        <el-col class="property" v-show="isPrice">
                            <el-col :span="4" class="property-name">价格区间：</el-col>
                            <el-col :span="20" class="price">
                                <el-col>
                                    <el-col :span="12" class="price-title">购买数量</el-col>
                                    <el-col :span="12" class="price-title">产品单价</el-col>
                                </el-col>
                                <el-col class="price-item" v-for="(item,index) in goodsDetail.range" :key="index">
                                    <el-col :span="12" class="price-title">
                                        起订量 {{item.quantity}} 件以上
                                    </el-col>
                                    <el-col :span="12" class="price-title">
                                       {{item.price}} 元/件
                                    </el-col>
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col class="property">                              
                            <el-col :span="4" class="property-name">商品规格：</el-col>
                            <!-- <el-col :span="20" class="goods-format">
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
                                </el-col> -->
                            </el-col>                                
                        </el-col>
                        <el-col class="property">
                            <el-col :span="4" class="property-name">价格库存：</el-col>
                            <el-col class="pdl">

                           
                            </el-col>
                            <el-col :span="20" >
                            </el-col>
                        </el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">价格：</el-col>
                                <el-col :span="10">
                                    {{goodsDetail.salePrice}}
                                </el-col>
                        </el-col>
                        <el-col class="item">
                            <el-col :span="4" class="left-name">数量：</el-col>
                                <el-col :span="10">
                                    {{goodsDetail.quantity}}
                                </el-col>
                        </el-col>
                            <el-col class="item">
                            <el-col :span="4" class="left-name">商家编号：</el-col>
                                <el-col :span="10">
                                    {{goodsDetail.goodsCode}}
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
                                <!-- <el-col class="upload-list">
                                    <el-upload   
                                        :action=fileupload                                           
                                        list-type="picture-card"      
                                        name="file"                                                    
                                        :on-success="handleProduct"
                                        :on-remove="handleRemoveProduct"
                                        :before-upload="beforeProduct">                           
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                </el-col> -->
                            </el-col>
                        </el-col>
                        <!-- <el-col class="property" style="height:500px">  
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
                        </el-col> -->
                        <!-- <el-col class="property">  
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
                        </el-col> -->
                        <!-- <el-col class="property">  
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
                        </el-col> -->
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
import {getGoodsInfo} from 'api/goods'
import { getPrimary } from 'api/login.js'
import { uploadUrl } from 'api/config.js'


export default {
    data() {
        return {
            goodsDetail:{},
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
    mounted() {
        this._getGoodsInfo()
    },
    methods:{
        _getGoodsInfo() {
            let goodsId = this.$route.query.goodsId
            getGoodsInfo({goodsId}).then(res => {
                if (res.data.code === '0') {
                    this.goodsDetail = res.data.data
                }
                console.log('13',res.data.data)
            })
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