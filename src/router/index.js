import VueRouter from 'vue-router'
import  Vue from 'vue'
/* import MyHome from '../components/MyHome'
import MyShop from '../components/MyShop' */
Vue.use(VueRouter)

/* const routes=[
    {
        path: "/",
        redirect: "/MyShop",
    },      
    {
        path:"/MyHome",
        component:MyHome
    },
    {
        path:"/MyShop",
        component:MyShop
    }
]
const router =new VueRouter({
    routes,
})
export default router */
export default new VueRouter({
    mode:"history",
    routes: [
        {
            path: "/",
            redirect: "/MyShop",
        },  
        {
            path:"/MyHome",
            component:()=>import('@/components/MyHome.vue'),
            children:[
                {
                    name:'ChildNews',
                    path:'ChildNews',
                    component:()=>import('@/components/ChildNews')
                },
                {
                    name:'ChildMessage',
                    path:'ChildMessage',
                    component:()=>import('@/components/ChildMessage')
                },
            ]
        },
        {
            path:"/MyShop",
            component:()=>import('@/components/MyShop.vue')
        }
    ]
})