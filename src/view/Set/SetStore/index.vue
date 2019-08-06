<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="店铺信息" name="1">
                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>设置</el-breadcrumb-item>
                            <el-breadcrumb-item>店铺信息</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">

                            <SetStoreInfo/>
                            
                        </el-col>
                    </el-col>
                </el-tab-pane>

                <el-tab-pane label="联系我们" name="2">
                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>设置</el-breadcrumb-item>
                            <el-breadcrumb-item>联系我们</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">

                            <SetStoreContact/>

                        </el-col>
                    </el-col>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script >
import SetStoreInfo from 'components/SetStoreInfo';
import SetStoreContact from 'components/SetStoreContact';

export default {
    data() {
        return {
            activeName: '1',
        }
    },
    mounted() {
    },

    methods: {
    },
    components: {
        SetStoreInfo,
        SetStoreContact,
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

</style>