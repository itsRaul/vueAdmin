<template>
    <div class="detail">
        <div class="detail-title">退款详情</div>
        <div class="detail-content-top">
            <div class="goods-item">
                <label>退款要求：</label>
                <span>{{detailData.requestTypeName}}</span>
            </div>
            <div class="goods-item number-item">
                <label>退款单号：</label>
                <span>{{detailData.returnsCode}}</span>
            </div>
            <div class="goods-item">
                <label>退款金额：</label>
                <span>¥{{detailData.refundAmount}}</span>
            </div>
            <div class="goods-item">
                <label>退货数量：</label>
                <span>{{detailData.returnsQuantity}}</span>
            </div>
            <div class="goods-item">
                <label>货物：</label>
                <span>{{detailData.returnsStatusName}}</span>
            </div>
            <div class="goods-item">
                <label>申请原因：</label>
                <span>{{detailData.reasonDetail}}</span>
            </div>
            <div class="goods-item">
                <label>问题描述：</label>
                <span>{{detailData.description}}</span>
            </div>
        </div>
        <div class="detail-goods">
            <img :src="detailData.imageUrl" alt="">
            <div class="goods-info">
                <div>
                    {{detailData.goodsName}}
                </div>
                <div>{{detailData.featureValue}}</div>
            </div>
        </div>
        <div class="detail-content-top">
            <div class="goods-item">
                <label>订单编号：</label>
                <span class="order-number">{{detailData.orderCode}}</span>
            </div>
            <div class="goods-item">
                <label>成交时间：</label>
                <span>{{detailData.applyTime}}</span>
            </div>
            <div class="goods-item">
                <label>商品单价：</label>
                <span>{{detailData.goodsPrice}}</span>
            </div>
            <div class="goods-item">
                <label>商品总价：</label>
                <span v-if="detailData.totalPrice">¥{{detailData.totalPrice}}</span>
            </div>                                                                             
        </div>
    </div>
</template>

<script>
export default {
    props: {
        detailData: {
            type: Object
        }
    }
}
</script>

<style lang="scss" scoped>
.detail {
    font-size: 14px;
    .detail-title {
        padding-bottom: 15px;
        border-bottom: 1px solid #e8e8e8;
        font-size: 16px;
        font-weight: 500;
    }
    .detail-goods {
        border-bottom: 1px solid #e8e8e8;
        padding-top: 10px;
        padding-bottom: 15px;              
        img {
            width: 60px;
            vertical-align: middle;
        }
        .goods-info {
            display: inline-block;
            vertical-align: middle;
            padding-left: 4px;
            div:nth-of-type(2) {
                color: #666;
            }
        }
    }
    .detail-content-top {
        padding-top: 15px;
        .goods-item {
            padding-bottom: 10px;
            label {
                color:#666;
                display: inline-block;
                width: 80px;
                text-align: right;
            }
            .order-number {
                color: #2086c8;
            }
        }
        .number-item {
            padding-top: 8px;
        }
    }
}
</style>