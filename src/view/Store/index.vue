<template>
    <div>
        <div class="nav-bar">
            <div class="nav-bar-left">店铺</div>
            <!-- <div class="user">
                <img src="../../assets/img/avatar.png" alt="" class="user-avatar">
                <div>username</div>
            </div> -->
        </div>

        <div class="breadcrumb">
            <el-breadcrumb  separator="/">
                <el-breadcrumb-item>店铺</el-breadcrumb-item>
                <el-breadcrumb-item>店铺概况</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="main-content">
            <el-col class="content">
                <el-col class="main">
                    <el-col class="header">
                        <el-col :span="18">
                            <el-col :span="5">
                                <img src="../../assets/img/logo.png" alt="" class="logo-img">
                            </el-col>
                            <el-col :span="18" class="header-company">
                                <el-col class="header-title">上海雨令电商科技有限公司</el-col>
                                <el-col class="header-tips">
                                    <el-col :span="6"><i class="iconfont icon-renzheng"></i>个人认证</el-col>
                                    <el-col :span="6"><i class="iconfont icon-renzheng"></i>担保交易</el-col>
                                    <el-col :span="6"><i class="iconfont icon-renzheng"></i>线下店铺</el-col>
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col :span="6" class="header-btn">
                            <el-col :span="11"><el-button type="success">发布商品</el-button></el-col>
                            <el-col :span="11"><el-button>访问店铺</el-button></el-col>
                        </el-col>
                    </el-col>

                    <el-col class="header-data">
                        <el-col :span="5" class="header-item header-border">
                            <el-col>0</el-col>
                            <el-col>昨日浏览量</el-col>
                        </el-col>
                        <el-col :span="5" class="header-item header-border">
                            <el-col>0</el-col>
                            <el-col>昨日访客数</el-col>
                        </el-col>
                        <el-col :span="5" class="header-item header-border">
                            <el-col>0</el-col>
                            <el-col>昨日商品浏览量</el-col>
                        </el-col>
                        <el-col :span="5" class="header-item header-border">
                            <el-col>0</el-col>
                            <el-col>昨日商品访客数</el-col>
                        </el-col>
                            <el-col :span="4" class="header-item">
                            <el-col>0</el-col>
                            <el-col>商品</el-col>
                        </el-col>
                    </el-col>

                    <el-col class="e-charts">
                        <el-col class="e-charts-top">
                            <el-col class="e-charts-title">
                                <span class="line"></span>订单交易
                            </el-col>
                        </el-col>
                        
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
                tableData: [{},{},{},{},{}],//表格测试数据
            }
        },
    }
</script>


<style scoped lang="scss">
.move-nav {
    position: fixed;
    top:0;
    left: 200px;
    height: 100%;
    text-align: center;
    width: 100px;
    z-index: 1001;
    background-color: #ffffff;
    border-left: 1px solid #f2f2f2;
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
.breadcrumb {
    padding: 15px;
}
.main-content {
    margin: 0 15px;
}
.main {
    .header {
        .logo-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
        .header-company {
            padding-top: 20px;
        }
        .header-title {
            font-size: 20px;
            font-weight: 500;
        }
        .header-tips {
            padding-top: 20px;
            
        }
        .header-btn {
            display: flex;
            justify-content: space-between;

        }
    }
    .header-data {
        background-color: rgb(250, 250, 250);
        padding: 30px 0 10px 0;
        margin-top: 15px;
        .header-item {
            text-align: center;
            font-weight: 700;
            padding-top: 10px;
        }
        .header-border {
            border-right: 1px dashed #ccc;
        }
    }
    .e-charts {
        .e-charts-top {
            padding: 6px 0 6px 10px;
            background-color: rgb(247, 247, 247); 
            margin-top: 10px;   
            .e-charts-title {                       
                border-left: 3px solid rgb(255, 122, 0);
                padding-left: 10px;
            }
        }           
    }
}

.content {
    background: #fff;
    padding: 15px;
    border-radius: 4px;
}
</style>