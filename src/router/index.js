import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import shopCart from '@/components/shopCart/shopCart'
import goodsList from '@/components/goodsList/goodsList'
import goodsDetail from '@/components/goodsDetail'
import Login from '@/components/Login/Login'
import Person from '@/components/Person/Person'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shopCart',
        name: 'shopCart',
        component: shopCart
    },
    {
        path: '/goodsList',
        name: 'goodsList',
        component: goodsList
    },
    {
        path: '/goodsDetail/:id',
        name: 'goodsDetail',
        component: goodsDetail
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        meta:{
            hideTop:true,
            hideSearch:true,
            hideslide:true,
            hideFooter:true,
            hideMenu:true,
        }
    },
    {
        path: '/Person',
        name: 'Person',
        component: Person
    },
   ]
})
