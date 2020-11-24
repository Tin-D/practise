import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HOME/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        component: () =>
            import( /* webpackChunkName: "about" */ '../components/404.vue')
    },
    {
        path: '/',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/Main.vue'),
        children: [{
            path: '/',
            name: 'home',
            component: Home
        },],
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/goVex',
        name: 'goVex',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/Vex.vue')
    },
    {
        path: '/sideBar',
        name: 'sideBar',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/SideBar.vue')
    },
    {
        path: '/childRouter',
        alias: '/other',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/ChildRouter.vue'),
        children: [{
            path: '/AAA',
            name: 'AAA',
            component: () =>
                import( /* webpackChunkName: "about" */ '../components/childRouter/AAA.vue')
        },
        {
            path: '/BBB',
            name: 'BBB',
            component: () =>
                import( /* webpackChunkName: "about" */ '../components/childRouter/BBB.vue')
        }
        ]
    },
    {
        path: '/vueDirctives',
        name: 'vueDirctives',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/vueDirctive.vue')
    },
    {
        path: '/css',
        name: 'css',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/Css.vue')
    },
    {
        path: '/store',
        name: 'store',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/store.vue'),
    },
    {
        path: '/state',
        name: 'state',
        component: () =>
            import( /* webpackChunkName: "about" */ '../store/storeVue/state.vue'),
    },
    {
        path: '/getters',
        name: 'getters',
        component: () =>
            import( /* webpackChunkName: "about" */ '../store/storeVue/getters.vue'),
    },
    {
        path: '/mutations',
        name: 'mutations',
        component: () =>
            import( /* webpackChunkName: "about" */ '../store/storeVue/mutations.vue'),
    },
    {
        path: '/actions',
        name: 'actions',
        component: () =>
            import( /* webpackChunkName: "about" */ '../store/storeVue/actions.vue'),
    },
    {
        path: '/modules',
        name: 'modules',
        component: () =>
            import( /* webpackChunkName: "about" */ '../store/storeVue/modules.vue'),
    },
    {
        path: '/router',
        name: 'router',
        components: {
            default: () =>
                import( /* webpackChunkName: "about" */ './route/router.vue'),
        },
        children: [{
            path: '/routerView',
            components: {
                default: () =>
                    import( /* webpackChunkName: "about" */ './route/query.vue'),
                routerView: () =>
                    import( /* webpackChunkName: "about" */ './route/routerView.vue'),
            },
        }]
    },
    {
        path: '/query',
        name: 'query',
        component: () =>
            import( /* webpackChunkName: "about" */ './route/query.vue'),
    },
    {
        path: '/params/:id/:site',
        name: 'params',
        props: true,
        component: () =>
            import( /* webpackChunkName: "about" */ './route/params.vue'),
    },
    {
        path: '/beforeEnter',
        name: 'beforeEnter',
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            next(true)
        },
        component: () =>
            import( /* webpackChunkName: "about" */ './protect/beforeEnter.vue'),
    },
    {
        path: '/beforeEach',
        name: 'beforeEach',
        component: () =>
            import( /* webpackChunkName: "about" */ './protect/beforeEach.vue'),
    },
    {
        path: '/beforeRouteEnter',
        name: 'beforeRouteEnter',
        component: () =>
            import( /* webpackChunkName: "about" */ './protect/beforeRouteEnter.vue'),
    },
    {
        path: '/beforeRouteLeave',
        name: 'beforeRouteLeave',
        component: () =>
            import( /* webpackChunkName: "about" */ './protect/beforeRouteLeave.vue'),
    },
    {
        path: '/echarts',
        name: 'echarts',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/echarts.vue'),
    },
    {
        path: '/canvas',
        name: 'canvas',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/canvas.vue'),
    },
    {
        path: '/Vueuse',
        name: 'Vueuse',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/Vueuse.vue'),
    },
    {
        path: '/elementUI',
        name: 'elementUI',
        component: () =>
            import( /* webpackChunkName: "about" */ '../views/elementUI.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
    if (to.fullPath === '/beforeEach') {
        next(fasle);
    } else {
        next()
    }
});
export default router