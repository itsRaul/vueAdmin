<template>
    <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
        <!--导航菜单-->
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
</template>

<script>
export default {
    data() {
        return {
            collapsed:false,
        }
    },
}
</script>


<style lang="scss" scoped>
.menu-collapsed {
    flex:0 0 60px;
	width: 60px;
}
.menu-expanded{
    flex:0 0 230px;
    width: 230px;
}
.iconfont {
    font-size: 20px;
    margin-right: 20px;
}
</style>
