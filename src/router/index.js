import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/** 登录页面 */
const Login = () => import('view/Login')
const LoginAdd = () => import('view/Login/LoginAdd')
const CreateStore = () => import('view/Login/CreateStore')

/** 主页 */
const Admin = () => import('view/Admin')

/** 基础 */
const Home = () => import('view/Home')
const Store = () => import('view/Store')
const MyFile = () => import('view/Store/MyFile')

/** 商品 */
const Goods = () => import('view/Goods')
const Classify = () => import('view/Goods/Classify')
const PublishGoods = () => import('view/Goods/PublishGoods')
const GoodsDetail = () => import('view/Goods/GoodsDetail')

/** 订单 */
const Order = () => import('view/Order')
const OrderDetails = () => import('view/Order/OrderDetails')
const AfterSale = () => import('view/Order/AfterSale')
const AfterSaleDetail = () => import('view/Order/AfterSaleDetail')
const Evaluation = () => import('view/Order/Evaluation')
const EvaluationDetail = () => import('view/Order/EvaluationDetail')
const Logistics = () => import('view/Order/Logistics')
const NewTemplate = () => import('view/Order/NewTemplate')

/** 客户 */
const Member = () => import('view/Client/Member')

/** 资产 */
const Property = () => import('view/Property')
const TradeRecord = () => import('view/Property/TradeRecord')
const Bills = () => import('view/Property/Bills')

/** 设置 */
const SetStore = () => import('view/Set/SetStore')
const Staff = () => import('view/Set/Staff')
const StaffAdd = () => import('view/Set/StaffAdd')
const SetPay = () => import('view/Set/SetPay')
const RoleAdmin = () => import('view/Set/RoleAdmin')
const RoleDetail = () => import('view/Set/RoleDetail')
const RoleAdd = () => import('view/Set/RoleAdd')
const SetAdress = () => import('view/Set/SetAdress')
const AddAdress = () => import('view/Set/AddAdress')

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login,
            hidden: true,
        },
        {
            path: '/loginAdd',
            name: 'LoginAdd',
            component: LoginAdd,
            hidden: true,
        },
        {
            path: '/createStore',
            name: 'CreateStore',
            component: CreateStore,
            hidden: true,
        },
        {
            path: '/admin',
            name: '',
            component: Admin,
            redirect: '/admin/home',
            leaf: true,//只有一个节点
            iconCls: 'iconfont icon-gaikuang',
            children: [
                {
                    path: '/admin/home',
                    name: '概况',
                    component: Home,
                },
              
            ]
        },
        {
            path: '/admin',
            name: '店铺',
            component: Admin,
            redirect: '/admin/home',         
            iconCls: 'iconfont icon-dianpu',
            children: [
                {
                    path: '/admin/store',
                    name: '店铺概况',
                    component: Store,
                },
                {
                    path: '/admin/myFile',
                    name: '我的文件',
                    component: MyFile,
                },
              
            ]
        },
        {
            path: '/admin',
            name: '产品',
            component: Admin,
            redirect: '/admin/home',
            iconCls: 'iconfont icon-chanpin',
            children: [
                {
                    path: '/admin/goods',
                    name: '商品管理',
                    component: Goods,
                },
                {
                    path: '/admin/classify',
                    name: '商品分类',
                    component: Classify,
                },              
            ]
        },
        {
            path: '/admin',
            name: '订单',
            component: Admin,
            redirect: '/admin/home',
            iconCls: 'iconfont icon-dingdan',
            children: [
                {
                    path: '/admin/order',
                    name: '所有订单',                
                    component: Order,
                },
                {
                    path: '/admin/afterSale',
                    name: '售后管理',                
                    component: AfterSale,
                },  
                {
                    path: '/admin/evaluation',
                    name: '评价管理',                
                    component: Evaluation,
                }, 
                {
                    path: '/admin/logistics',
                    name: '物流管理',                
                    component: Logistics,
                },             
            ]
        },
        {
            path: '/admin',
            name: '客户',
            component: Admin,
            redirect: '/admin/home',
            iconCls: 'iconfont icon-kehu1',
            children: [
                {
                    path: '/admin/member',
                    name: '会员管理',
                    component: Member,
                },             
            ]
        },
        {
            path: '/admin',
            name: '资产',
            component: Admin,
            redirect: '/admin/home',
            iconCls: 'iconfont icon-zichan',
            children: [
                {
                    path: '/admin/property',
                    name: '我的资产',
                    component: Property,
                },
                {
                    path: '/admin/tradeRecord',
                    name: '交易记录',
                    component: TradeRecord,
                },  
                {
                    path: '/admin/bills',
                    name: '对账单',
                    component: Bills,
                },             
            ]
        },
        {
            path: '/admin',
            name: '设置',
            component: Admin,
            redirect: '/admin/home',
            iconCls: 'iconfont icon-icon-test',
            children: [
                {
                    path: '/admin/setStore',
                    name: '店铺信息',
                    component: SetStore,
                },
                {
                    path: '/admin/staff',
                    name: '员工信息',
                    component: Staff,
                },  
                {
                    path: '/admin/setPay',
                    name: '支付交易',
                    component: SetPay,
                },
                {
                    path: '/admin/roleAdmin',
                    name: '角色管理',
                    component: RoleAdmin,
                },  
                {
                    path: '/admin/setAdress',
                    name: '商家地址',
                    component: SetAdress,
                },              
            ]
        },
        {
            path: '/admin',
            name: '',
            component: Admin,
            redirect: '/admin/home',
            hidden: true,
            children: [
                {
                    path: '/admin/publishGoods',
                    name: 'publishGoods',
                    component: PublishGoods,
                },
                {
                    path: '/admin/staffAdd',
                    name: 'staffAdd',                
                    component: StaffAdd,
                },
                {
                    path: '/admin/goodsDetail',
                    name: 'goodsDetail',
                    component: GoodsDetail,
                },
                {
                    path: '/admin/orderDetails',
                    name: 'orderDetails',                
                    component: OrderDetails,
                },
                {
                    path: '/admin/afterSaleDetail',
                    name: 'afterSaleDetail',                
                    component: AfterSaleDetail,
                },
                {
                    path: '/admin/evaluationDetail',
                    name: 'evaluationDetail',                
                    component: EvaluationDetail,
                },
                {
                    path: '/admin/newTemplate',
                    name: 'newTemplate',                
                    component: NewTemplate,
                },
                {
                    path: '/admin/roleDetail',
                    name: 'roleDetail',                
                    component: RoleDetail,
                },
                {
                    path: '/admin/roleAdd',
                    name: 'roleAdd',                
                    component: RoleAdd,
                },
                {
                    path: '/admin/addAdress',
                    name: 'addAdress',                
                    component: AddAdress,
                },
            ]
        }
    ]
})
