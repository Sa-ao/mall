//在Vue 3中，import Vue from 'vue'并不能导出”vue“这个包
// import Vue from 'vue'
// import Vuerouter from 'vue-router'
//需要vue-router在4版本之上
import {createRouter,createWebHistory} from 'vue-router'
//懒加载
const Home = ()=>import('views/home/home')
const News = ()=>import('views/news/news')
const Profile = ()=>import('views/profile/profile')
const Sort = ()=>import('views/sort/sort')
const Detail =()=>import('views/detail/detail')
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/news',
    component:News
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/detail/:iid',
    component:Detail
  }
  
]
// const router = new Vuerouter({
//   route,
//   mode:"history"
// })
const routerHistory = createWebHistory()
const router = new createRouter({
  routes,
  history:routerHistory
})
export default router