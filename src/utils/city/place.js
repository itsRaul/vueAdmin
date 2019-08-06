export const place = (AreaCode, Name) => {
    this.AreaCode = AreaCode; //地区编码  
    this.Name = Name; //地名  
    /*地区类的PlaceType方法，返回值：String类型，表示地区类别，"p"代表省/直辖市、特别行政区，"c"代表市，"d"代表区/县。*/
    place.prototype.PlaceType = function() {
        var ac = parseInt(this.AreaCode);
        if (ac % 100 != 0) {
            return "d";
        } else if (ac % 10000 != 0) {
            return "c";
        } else {
            return "p";
        }
    }
        /*返回地点所属省编码*/
    place.prototype.ProvinceCode = function() {
        //整除10000得到省级编码（前2位数字）  
        var ac = parseInt(this.AreaCode);
        return Math.floor(ac / 10000);
    }
        /*返回地点所属市编码*/
    place.prototype.CityCode = function() {
        //整除100得到市级编码（前4位数字）  
        var ac = parseInt(this.AreaCode);
        return Math.floor(ac / 100);
    }
}