<template>
    <div class="file-wrapper">
        <div class="tabs-container">
            <el-tabs v-model="activeName">
                <el-tab-pane label="账单汇总" name="1">
                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>资产</el-breadcrumb-item>
                            <el-breadcrumb-item>对账单</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    
                    <el-col class="main-conainer">
                        <el-col class="content">

                            <BillsTotal/>

                        </el-col>
                    </el-col>
                </el-tab-pane>

                <el-tab-pane label="账单明细" name="2">
                    <div class="breadcrumb">
                        <el-breadcrumb  separator="/">
                            <el-breadcrumb-item>资产</el-breadcrumb-item>
                            <el-breadcrumb-item>对账单</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>

                    <el-col class="main-conainer">
                        <el-col class="content">
                          
                            <BillsDetail/>
                            
                        </el-col>
                    </el-col>                   
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script >
import BillsTotal from '../../../components/BillsTotal';
import BillsDetail from 'components/BillsDetail';

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
        BillsTotal,
        BillsDetail,
    }
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