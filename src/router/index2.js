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

const Test = () => import('view/test.vue')

export default new Router({
    routes: [
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/loginAdd',
            name: 'LoginAdd',
            component: LoginAdd
        },
        {
            path: '/createStore',
            name: 'CreateStore',
            component: CreateStore
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            redirect: '/admin/home',
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: Home,
                },
                {
                    path: '/admin/store',
                    name: 'store',
                    component: Store,
                },
                {
                    path: '/admin/myFile',
                    name: 'myFile',
                    component: MyFile,
                },
                {
                    path: '/admin/goods',
                    name: 'goods',
                    component: Goods,
                },
                {
                    path: '/admin/classify',
                    name: 'classify',
                    component: Classify,
                },
                {
                    path: '/admin/publishGoods',
                    name: 'publishGoods',
                    component: PublishGoods,
                },
                {
                    path: '/admin/goodsDetail',
                    name: 'goodsDetail',
                    component: GoodsDetail,
                },
                {
                    path: '/admin/order',
                    name: 'order',                
                    component: Order,
                },
                {
                    path: '/admin/orderDetails',
                    name: 'orderDetails',                
                    component: OrderDetails,
                },
                {
                    path: '/admin/afterSale',
                    name: 'afterSale',                
                    component: AfterSale,
                },
                {
                    path: '/admin/evaluation',
                    name: 'evaluation',                
                    component: Evaluation,
                },
                {
                    path: '/admin/evaluationDetail',
                    name: 'evaluationDetail',                
                    component: EvaluationDetail,
                },
                {
                    path: '/admin/logistics',
                    name: 'logistics',                
                    component: Logistics,
                },
                {
                    path: '/admin/newTemplate',
                    name: 'newTemplate',                
                    component: NewTemplate,
                },
                {
                    path: '/admin/member',
                    name: 'member',                
                    component: Member,
                },
                {
                    path: '/admin/property',
                    name: 'property',                
                    component: Property,
                },
                {
                    path: '/admin/tradeRecord',
                    name: 'tradeRecord',                
                    component: TradeRecord,
                },
                {
                    path: '/admin/bills',
                    name: 'bills',                
                    component: Bills,
                },
                {
                    path: '/admin/staff',
                    name: 'staff',                
                    component: Staff,
                },
                {
                    path: '/admin/staffAdd',
                    name: 'staffAdd',                
                    component: StaffAdd,
                },
                {
                    path: '/admin/setPay',
                    name: 'setPay',                
                    component: SetPay,
                },
                {
                    path: '/admin/setStore',
                    name: 'setStore',                
                    component: SetStore,
                },
                {
                    path: '/admin/roleAdmin',
                    name: 'roleAdmin',                
                    component: RoleAdmin,
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
                    path: '/admin/setAdress',
                    name: 'setAdress',                
                    component: SetAdress,
                },
                {
                    path: '/admin/addAdress',
                    name: 'addAdress',                
                    component: AddAdress,
                },
            ]
        },
    ]
})
