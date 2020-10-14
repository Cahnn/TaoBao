import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import HelloWorld from "./components/HelloWorld";
import shopCart from "./components/shopCart";
import orderList from "./components/orderList";
import mine from "./components/mine";
import more from "./components/more"

Vue.config.productionTip = false

Vue.use(VueRouter);

let routes=[
  {
    path:'/',
    redirect:'/HelloWorld',
  },
  {
    path:'/HelloWorld',
    component:HelloWorld,
  },
  {
    path: '/shopCart',
    component: shopCart
  },
  {
    path: '/orderList',
    component: orderList
  },
  {
    path: '/mine',
    component: mine
  },
  {
    path: '/more',
    component: more
  }
];


// 创建router实例
let router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el:'#app',
  router,
  render: h => h(App)
}).$mount('#app');
