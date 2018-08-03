import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import shopCart from "@/components/shopCart/shopCart";
import goodsList from "@/components/goodsList/goodsList";
import goodsDetail from "@/components/goodsDetail";
import Login from "@/components/Login/Login";
import Person from "@/components/Person/Person";
import Aboutus from "@/components/Aboutus/Aboutus";
import SettledIn from "@/components/SettledIn/SettledIn";
import store from "../vuex";
import { Message } from "element-ui";

Vue.use(Router);

const AppRouter = new Router({
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/shopCart",
      name: "shopCart",
      component: shopCart
    },
    {
      path: "/goodsList",
      name: "goodsList",
      component: goodsList
    },
    {
      path: "/goodsDetail/:id",
      name: "goodsDetail",
      component: goodsDetail
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        hideTop: true,
        hideSearch: true,
        hideslide: true,
        hideFooter: true,
        hideMenu: true
      }
    },
    {
      path: "/Person",
      name: "Person",
      component: Person,
      meta: { requireAuth: true }
    },
    {
      path: "/aboutus",
      name: "Aboutus",
      component: Aboutus
    },
    {
      path: "/settledIn",
      name: "SettledIn",
      component: SettledIn
    },
    {
      path: "*",
      redirect: 'home'
    }
  ]
});

AppRouter.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  const isNeedAuth =
    from.fullPath !== "/" &&
    to.fullPath !== from.fullPath &&
    to.meta.requireAuth;
  if (isNeedAuth) {
    // 需要权限,进一步进行判断
    if (store.state.user.userInfo.tel) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      //如果没有权限,重定向到登录页,进行登录
      Message.warning("您还未登录，请先登录");
      next({
        path: "/login",
        query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
      next();
    }
  } else {
    //不需要权限 直接跳转
    next();
  }
});

export default AppRouter;
