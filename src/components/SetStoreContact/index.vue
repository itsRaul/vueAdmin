<template>
    <div>
        <div class="store">
            <div class="store-item">
                <label class="label"><span>*</span>客服电话：</label>
                <div class="store-text">
                    <div class="label-input">
                        <el-input v-model="areaCode" placeholder="区号"></el-input>
                    </div>
                    <span>-</span>
                    <div class="input">
                        <el-input v-model="tel" placeholder="请输入电话号码（区号可为空）"></el-input>
                    </div>
                </div>
            </div>
             <div class="store-item">
                <label class="label"><span>*</span>联系地址：</label>
                <div class="store-text">
                    <div class="select-option">
                        <el-select v-model="province" placeholder="请选择省">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="select-option">
                        <el-select v-model="city" placeholder="请选择市">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div class="select-option">
                        <el-select v-model="area" placeholder="请选择区">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
            </div>
            <div class="store-item">
                <div class="store-text">
                    <div class="map-input">
                        <el-input v-model="mapVal" placeholder="请选择详细地址方便买家联系（请勿重复填写省市区）"></el-input>
                    </div>
                    <el-button>搜索地图</el-button>
                </div>
            </div>
            <div class="store-item">
                <label class="label"><span>*</span>地图定位：</label>
                <div class="store-text">
                    <div id="map">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="confirm">
            <el-button type="primary" size="mini">保存</el-button>
        </div>
    </div>
</template>

<script>
import placesMap from '../../utils/city'
import {place} from '../../utils/city/place'

export default {
    data() {
        return {
            areaCode: '',
            tel: '',
            province: '',
            city: '',
            area: '',
            options: [{
            value: '选项1',
            label: '黄金糕'
            }, {
            value: '选项2',
            label: '双皮奶'
            }, {
            value: '选项3',
            label: '蚵仔煎'
            }, {
            value: '选项4',
            label: '龙须面'
            }, {
            value: '选项5',
            label: '北京烤鸭'
            }],
            mapVal: '',
            provincesData: [],
            citiesData: [],
            districtsData: [],
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            var map = new BMap.Map("map", {
                enableMapClick: false
            });
            map.centerAndZoom("广东省深圳市南山区", 11);
            map.enableScrollWheelZoom(true);
            map.addOverlay(new BMap.Marker("广东省深圳市南山区"));
            map.addEventListener("click", function(e) {       
                map.clearOverlays();
                var pt = e.point;
                map.addOverlay(new BMap.Marker(pt));
            });
            var myGeo = new BMap.Geocoder();
            
        },
    }
}
</script>

<style lang="scss" scoped>
.store {
    .store-item {
        padding: 10px 0;
        .label {
            display: inline-block;
            width: 150px;
            text-align: right;
            vertical-align: middle;
            color: rgb(115, 112, 115);
            span {
                color: red;
                vertical-align: middle;
            }
        }
        .store-text {
            display: inline-block;
            vertical-align: middle;
            .input {
                display: inline-block;
                width: 250px;
            }
            .modify {
                color: rgb(52, 136, 255);
                margin-left: 15px;
                cursor: pointer;
            }
            .label-input {
                display: inline-block;
                width: 100px;
            }
            .select-option {
                display: inline-block;
            }
            .map-input {
                display: inline-block;
                width: 450px;
                margin-left: 155px;
            }
            #map {
                width: 640px;
                height: 360px;
                border-radius: 3px;
                border: 1px solid #e3e3e3;
            }
        }
        
    }   
}
.confirm {
    margin-left: 160px;
    padding-top: 10px;
    padding-bottom: 30px;
}
</style>


