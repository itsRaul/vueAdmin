<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="店铺首页" name="1">

                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>店铺</el-breadcrumb-item>
                            <el-breadcrumb-item>我的文件</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>

                    <el-col class="main-conainer">
                        <el-col class="content">
                    <el-col class="main">
                        <el-col :span="19">
                            <el-col class="header">
                                    <div>未分组</div>
                                    <div class="file">
                                        <input type="file">上传图片
                                    </div>
                            </el-col>
                            <el-col>
                                <el-col class="select-item">
                                    <el-checkbox v-model="allCheck" style="margin:0"/><span class="all-text">全选</span>
                                    <span class="select-text">修改分组</span>
                                    <span class="select-text">删除</span>
                                </el-col>

                                <el-col class="table">
                                    <el-col :span="5" class="table-item">
                                        <img src="../../../assets/img/logo.png" alt="" class="table-img">
                                        <el-col class="check-item">
                                                <el-checkbox v-model="tableCheck" style="margin:0"/><span class="table-text">1.png</span>
                                        </el-col>
                                        <el-col class="table-btn">
                                            <span>改名</span>
                                            <span>链接</span>
                                            <span>分组</span>
                                            <span>删除</span>
                                        </el-col>
                                    </el-col>  
                                    <el-col :span="5" class="table-item">
                                        <img src="../../../assets/img/logo.png" alt="" class="table-img">
                                        <el-col class="check-item">
                                                <el-checkbox v-model="tableCheck" style="margin:0"/><span class="table-text">1.png</span>
                                        </el-col>
                                        <el-col class="table-btn">
                                            <span>改名</span>
                                            <span>链接</span>
                                            <span>分组</span>
                                            <span>删除</span>
                                        </el-col>
                                    </el-col>  
                                    <el-col :span="5" class="table-item">
                                        <img src="../../../assets/img/logo.png" alt="" class="table-img">
                                        <el-col class="check-item">
                                                <el-checkbox v-model="tableCheck" style="margin:0"/><span class="table-text">1.png</span>
                                        </el-col>
                                        <el-col class="table-btn">
                                            <span>改名</span>
                                            <span>链接</span>
                                            <span>分组</span>
                                            <span>删除</span>
                                        </el-col>
                                    </el-col>  
                                    <el-col :span="5" class="table-item">
                                        <img src="../../../assets/img/logo.png" alt="" class="table-img">
                                        <el-col class="check-item">
                                                <el-checkbox v-model="tableCheck" style="margin:0"/><span class="table-text">1.png</span>
                                        </el-col>
                                        <el-col class="table-btn">
                                            <span>改名</span>
                                            <span>链接</span>
                                            <span>分组</span>
                                            <span>删除</span>
                                        </el-col>
                                    </el-col>                                
                                </el-col>

                                <el-col class="select-item">
                                    <el-col :span="18">
                                        <el-checkbox v-model="allCheck" style="margin:0"/><span class="all-text">全选</span>
                                        <span class="select-text">修改分组</span>
                                        <span class="select-text">删除</span>
                                    </el-col>
                                    <el-col :span="6">
                                        共3条，每页16条
                                    </el-col>
                                </el-col>
                            </el-col>
                        </el-col>
                        <el-col :span="4" class="side"><el-button size="small" icon="el-icon-plus">添加分组</el-button></el-col>
                    </el-col>
                        </el-col>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="底部菜单" name="2">底部菜单</el-tab-pane>
                <el-tab-pane label="底部导航" name="3">底部导航</el-tab-pane>
                <el-tab-pane label="公共广告" name="4">公共广告</el-tab-pane>
                <el-tab-pane label="自定义模块" name="5">自定义模块</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script >
    export default {
        data() {
            return {
                activeName: '1',
                allCheck: '',
                tableCheck: '',
            }
        },
        mounted() {
        },
        methods: {
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

.main {
    display: flex;
    justify-content: space-between;
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .side {
        text-align: center;
        background-color: rgb(242, 240, 242);
    }
    .select-item {
        background-color: rgb(242, 240, 242);
        font-size: 14px;
        margin-top: 15px;
        padding: 10px 0 10px 10px;
        .all-text {
            padding-left: 6px;
        }
        .select-text {
            color: #999;
            padding: 0 10px;
            cursor: pointer;
        }
    }
    .table {          
        .table-item {
            margin-right: 15px;
            padding-top: 15px;
            .table-img {
                width: 100%;
            }
            .check-item {
                padding-top: 6px;
                .table-text {
                        font-size: 12px;
                        margin-left: 6px;              
                    }
            }
            .table-btn {
                font-size: 14px;
                padding-top: 6px;
                span {
                    color: rgb(52, 136, 255);
                    cursor: pointer;
                    margin: 0 2px;
                }
            }
        }          
    }
}

.file {
    position: relative;
    display: inline-block;
    background: #67C23A;
    border: 1px solid #67C23A;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    font-size: 14px;
    cursor: pointer;
}
.file input {
    position: absolute;
    font-size: 12px;
    right: 0;
    top: 0;
    opacity: 0;
}
.file:hover {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
    text-decoration: none;
}
</style>