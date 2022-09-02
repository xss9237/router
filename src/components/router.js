import { createRouter, createWebHashHistory } from 'vue-router'

import MyHome from './MyHome.vue'
import MyMovie from './MyMovie.vue'
import MyAbout from './MyAbout.vue'
import Tab1 from './Tabs/Tab1.vue'
import Tab2 from './Tabs/Tab2.vue'

const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: 'router-active',
    routes: [
        { paty: '/', redirect: '/home' },
        { path: '/home', component: MyHome },
        {
            path: '/movie',
            component: MyMovie,
            redirect: '/movie/tab1',
            children: [
                { path: '/movie/tab1', component: Tab1 },
                { path: '/movie/tab2', component: Tab2 }
            ]
        },
        { path: '/about/:id', name: 'mov', component: MyAbout, props: true }
    ]
})

// router.beforeEach((to,from,next)=>{})
router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')
    if (to.path === '/main' && !token) {
        // 1.不许跳转
        // next(false)
        // 2.强制跳转到某个页面
        next('/about')
    } else {
        next()
    }
})

export default router