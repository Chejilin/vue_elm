/**
 * Created by Administrator on 2017/7/20.
 */

import Vue from 'vue'
//引入路由
import VRouter from 'vue-router'
//使用路由
Vue.use(VRouter);

//配置路由
export default new VRouter({
  //重要的属性
  routes:[
    //重定向(默认)
    {path:'/',redirect:'/index'},
    {path:'/index',component:resolve=>{require(['@/page/index'],resolve)}},
    {path:'/discover',component:resolve=>{require(['@/page/discover'],resolve)}},
    {path:'/indent',component:resolve=>{require(['@/page/indent'],resolve)}},
    {path:'/mine',component:resolve=>{require(['@/page/mine'],resolve)}},
    /* 路由传id    path:'/shop/:id'*/
    {path:'/shop/:id',component:resolve=>{require(['@/page/shop'],resolve)}}
  ]
})
