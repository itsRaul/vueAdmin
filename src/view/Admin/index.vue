<template>
    <div class="container">
        <!-- S 侧边导航 -->
        <div class="side">
            <div class="side-view">
                <h1 class="title">
                    <img src="@/assets/img/head.png" @click="goHome" class="headPic">
                </h1>
                <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo"  
                            unique-opened router v-show="!collapsed">
                        <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                            <el-submenu :index="index+''" v-if="!item.leaf">
                                <template slot="title"><i :class="item.iconCls"></i><span>{{item.name}}</span></template>
                                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i><span>{{item.children[0].name}}</span></el-menu-item>
                        </template>
                    </el-menu>
                </aside>
                <!-- <ul class="nav-ul">
                    <li @mouseenter="enter(overviewData)" @mouseleave="leave()"><i class="el-icon-printer"></i>概况</li>
                    <li @mouseenter="enter(shopData)" @mouseleave="leave()"><i class="el-icon-printer"></i>店铺</li>
                    <li @mouseenter="enter(productData)" @mouseleave="leave()"><i class="el-icon-printer"></i>产品</li>
                    <li @mouseenter="enter(orderData)" @mouseleave="leave()"><i class="el-icon-printer"></i>订单</li>
                    <li @mouseenter="enter(clientData)" @mouseleave="leave()"><i class="el-icon-printer"></i>客户</li>
                    <li @mouseenter="enter(propertyData)" @mouseleave="leave()"><i class="el-icon-printer"></i>资产</li>
                    <li @mouseenter="enter(setData)" @mouseleave="leave()"><i class="el-icon-printer"></i>设置</li>
                </ul> -->
            </div>
        </div>
        <!-- E 侧边导航 -->

        <div class="move-nav" @mouseenter="navEnter()" @mouseleave="leave()" v-show="isNavVisible" >
            <div v-for="item in navData" :key="item.title">
                <div class="move-nav-title">{{item.title}}</div>
                <div class="move-nav-item" v-for="chilrdEle in item.list" :key="chilrdEle.name">
                    <router-link tag="div" class="t-container-list" :to="chilrdEle.path">{{chilrdEle.name}}</router-link>
                </div>
            </div>
        </div>

        <div class="main">
            <transition name="router-fade" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script >
   import {mapState,mapMutations} from 'vuex';

    export default {
        data() {
            return {
                collapsed:false,
                overviewData: [{title: '概况',list: [{path:'/admin/home',name:'概况'}]}],
                shopData: [{title:'店铺管理',list:[{path:'/admin/store',name:'店铺概况'},{path:'/admin/myFile',name:'我的文件'}]}],
                productData: [{title:'产品管理',list:[{path:'/admin/goods',name:'商品管理'},{path:'/admin/classify',name:'商品分类'}]}],
                orderData: [
                    {
                        title:'订单管理',
                        list:[
                            {path:'/admin/order',name:'所有订单'},
                            {path:'/admin/afterSale',name:'售后管理'},
                            {path:'/admin/evaluation',name:'评价管理'},
                            {path:'/admin/logistics',name:'物流管理'},
                        ]
                    }
                ],
                clientData: [{title:'客户管理',list:[{path:'/admin/member',name:'会员管理'}]}],
                propertyData: [
                    {
                        title:'资产中心',
                        list:[
                            {path:'/admin/property',name:'我的资产'},
                            {path:'/admin/tradeRecord',name:'交易记录'},
                            {path:'/admin/bills',name:'对账单'},
                        ]
                    }
                ],
                setData: [
                    {
                        title:'员工信息',
                        list:[
                            {path:'/admin/setStore',name:'店铺信息'},
                            {path:'/admin/staff',name:'员工信息'},
                            {path:'/admin/setPay',name:'支付交易'},
                            {path:'/admin/roleAdmin',name:'角色管理'},
                            {path:'/admin/setAdress',name:'商家地址'},
                        ]
                    }
                ]
            }
        },
        computed: {
            ...mapState(['isNavVisible','navData'])
        },
        mounted() {
            
        },
        methods: {
            goHome(){
                this.$router.push({path: '/admin'})
            },
            enter(data) {
                this.setNav(true)
                this.setNavData(data)
            },
            leave() {
                this.setNav(false)
            },
            navEnter() {
                this.setNav(true)
            },
            ...mapMutations({
                setNav:'SET_NAV',
                setNavData:'SET_NAV_DATA'
            })
        },
    }
</script>


<style scoped lang="scss">
.menu-collapsed {
    flex:0 0 60px;
	width: 60px;
}
.menu-expanded{
    flex:0 0 200px;
    width: 200px;
}
.iconfont {
    margin-right: 8px;
}

.container {
    position: relative;
    width: 100%;
    background-color: #f6f6f6; 
    min-height: 100%;
}
.side::-webkit-scrollbar { width: 0 !important }
.side::-webkit-scrollbar { width: 0 !important }
.side { overflow: -moz-scrollbars-none; }
.side {
    width: 200px;
    background-color: #ffffff;
    position: fixed;
    top:0;
    left: 0;
    height: 100%;
    z-index: 1001;
    overflow: auto;
    transition: width .28s;
    border-right: 1px solid #f2f2f2;
    .side-view {
       .title {
            width:60px;
            height: 60px;
            line-height: 60px;
            font-size: 20px;
            font-weight: 700;
            border-radius:50%;
            margin:20px auto;
            .headPic {
                width:60px;
                height: 60px;
                border-radius:50%;
                margin:10px;
            }
        }
        .nav-ul {
            padding-top: 10px;
            li {
                padding: 15px 0;
                cursor: default;
                color: #959595;
                font-weight: 500;
                i {
                    margin-right: 15px;
                }
            }
            li:hover{
                background: #eeeeee;        
                color: #5c5c5c;
            }
        }
    }
}
.move-nav {
    position: fixed;
    top:0;
    left: 200px;
    height: 100%;
    text-align: center;
    width: 100px;
    z-index: 1001;
    background-color: #ffffff;
   
    border-right: 1px solid #f2f2f2;
    
    .move-nav-title {
        padding: 15px 0;
        border-bottom: 1px solid #f2f2f2;
    }
    .move-nav-item {
        padding: 15px 0;
        cursor: pointer;
        color: #959595;
    }
}
.main {  
    margin-left: 200px;
    // height: 100%;  
    transition: margin-left .28s;
    // overflow: scroll;
    overflow: hidden;
}
</style>