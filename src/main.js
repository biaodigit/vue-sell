import Vue from 'vue';
import VueRouter from 'vue-router';   //引入Vue-Router
import VueResource from 'vue-resource'; //引入Vue-Resource
import App from './App';
import goods from 'components/goods/goods.vue';   //引入商品组件文件
import ratings from 'components/ratings/ratings.vue';  //引入评论组件文件
import seller from 'components/seller/seller.vue';  //引入商家组件文件


Vue.use(VueRouter); //全局VueRouter
Vue.use(VueResource);//全局注册VueRoesource

let app = Vue.extend(App); //扩展App实例

let router = new VueRouter({         //创建实例
  linkActiveClass:'active'
});

router.map({             //给每一个页面注册一个组件，嵌套进App.vue
  '/goods':{
    component:goods
  },
  '/ratings':{
    component:ratings
  },
  '/seller':{
    component:seller
  }
})

router.start(app,'#app'); //把app实例挂载到选择符#app元素上

router.go('/goods');    //页面启动默认路由组件
