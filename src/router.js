import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


//组件
import Home from  './component/Home.vue'
import Article from './component/article/bundle'
import Exhibition from './component/exhibition/bundle'
import Industry from './component/industry/bundle'
import Training from './component/training/bundle'


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/article', name: 'article', component: Article },
        {path:'/exhibition',name:'exhibition',component:Exhibition},
        {path:'/industry',name:'industry',component:Industry},
        {path:'/training',name:'training',component:Training},
    ]
})

export default router