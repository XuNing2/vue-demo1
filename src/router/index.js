import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";
import BookUpdate from "@/views/BookUpdate";


Vue.use(VueRouter)

const routes = [
  {
    show:true,
    path: '/',
    name: '图书管理',
    component: Home,
    redirect:"/manageBook",
    children:[
      {
        show:true,
        path:'/manageBook',
        name: '查询图书',
        component: PageOne
      },
      {
        show:true,
        path:'/addBook',
        name: '添加图书',
        component: PageTwo
      },
      {
        show:false,
        path:'/bookUpdate',
        name:'修改图书',
        component: BookUpdate

      }
    ]


  },
  {
    show:false,
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  // {
  //   path:'/book',
  //   component: Book
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
