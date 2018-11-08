import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/main/home'
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('./layout/index.vue'),
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: 'about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
                }
            ]
        },
        {
            path: '/component',
            name: 'component',
            component: () => import('./views/component.vue')
        }
    ]
})
