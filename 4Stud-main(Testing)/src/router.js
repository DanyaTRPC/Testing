import GoodsList from '@/pages/GoodsList'
import AboutGoods from '@/pages/AboutGoods'
import AddGoods from '@/pages/AddGoods'
import MyAccount from '@/pages/MyAccount'
import Registration from '@/pages/Registration'
import Enter from '@/pages/Enter'
import VueRouter from "vue-router"

const routes = [
    { path: '/', component: GoodsList },
    { path: '/aboutGoods', component: AboutGoods },
    { path: '/addGoods', component: AddGoods },
    { path: '/myAccount', component: MyAccount },
    { path: '/registration', component: Registration },
    { path: '/enter', component: Enter },
]

const router = new VueRouter({routes})

export default router