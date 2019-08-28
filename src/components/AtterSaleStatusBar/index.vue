<template>
    <div>
        <div v-if="requestType == 'REFUND'">
            <div class="service-status" v-if="returnsStatus=='PENDING'">
                <el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">1</em><span class="status-text active-text">买家申请退款</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item2">
                        <em class="number active-number">2</em><span class="status-text active-text">卖家处理退货申请</span>
                    </el-col>
                    <el-col :span="6" class="status-item">
                        <em class="number">3</em><span class="status-text">退款完毕</span>
                    </el-col>
                </el-col>
            </div>
            <div class="service-status" v-else-if="returnsStatus=='SUCCESS' ||returnsStatus=='REFUSED'">
                <el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">1</em><span class="status-text active-text">买家申请退款</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">2</em><span class="status-text active-text">卖家处理退货申请</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item2">
                        <em class="number active-number">3</em><span class="status-text active-text">退款完毕</span>
                    </el-col>
                </el-col>
            </div>
        </div>

        <div v-else-if="requestType == 'RETURNS'">
            <div class="service-status" v-if="returnsStatus=='PENDING'">
                <el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">1</em><span class="status-text active-text">买家申请退货退款</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item2">
                        <em class="number active-number">2</em><span class="status-text active-text">卖家处理退货退款申请</span>
                    </el-col>
                    <el-col :span="6" class="status-item">
                        <em class="number">3</em><span class="status-text">买家退货</span>
                    </el-col>
                    <el-col :span="6" class="status-item">
                        <em class="number">4</em><span class="status-text">退款完毕</span>
                    </el-col>
                </el-col>
            </div>
            <div class="service-status" v-else-if="returnsStatus=='PENDING_RETURN'">
                <el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">1</em><span class="status-text active-text">买家申请退货退款</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">2</em><span class="status-text active-text">卖家处理退货退款申请</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item2">
                        <em class="number active-number">3</em><span class="status-text active-text">买家退货</span>
                    </el-col>
                    <el-col :span="6" class="status-item">
                        <em class="number">4</em><span class="status-text">退款完毕</span>
                    </el-col>
                </el-col>
            </div>
            <div class="service-status" v-else-if="returnsStatus=='SUCCESS' ||returnsStatus=='REFUSED'">
                <el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">1</em><span class="status-text active-text">买家申请退货退款</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">2</em><span class="status-text active-text">卖家处理退货退款申请</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item1 ">
                        <em class="number active-number">3</em><span class="status-text active-text">买家退货</span>                              
                    </el-col>
                    <el-col :span="6" class="status-item status-item2">
                        <em class="number active-number">3</em><span class="status-text active-text">退款完毕</span>
                    </el-col>
                </el-col>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        requestType: {
            type: String,
            default: ''
        },
        returnsStatus: {
            type: String,
            default: ''
        }
    }
    
}
</script>

<style lang="scss" scoped>
.service-status {
    margin-bottom: 10px;
    overflow: hidden;
    height: 46px;
    background-color: #cccccc;
    .status-item {
        text-align: center;
        background-color: #cccccc;
        height: 46px;
        position: relative;
        .status-text {
            display: inline-block;
            height: 100%;
            line-height: 46px;
        }
        .number {
            display: inline-block;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            background: #fff;
            color: #999;
            font-weight: bold;
            margin-right: 4px;
        }
        .active-number {
            color: #91cffe
        }
        .active-text {
            color: #fff;
        }
        
    }
    .youjiantou {
        height: 46px;
        position: relative;
        left: -10px;
    }
    .status-item1 {
        background: #91cffe;
    }
    .status-item2 {
        background: #2485d6;
    }
}
</style>