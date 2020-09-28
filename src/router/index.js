import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
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
            import( /* webpackChunkName: "about" */ './route/router1.vue'),
    },
    children: [{
        path: '/sf',
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
    component: () =>
        import( /* webpackChunkName: "about" */ './route/params.vue'),
}
]

const router = new VueRouter({
    routes
})

export default router