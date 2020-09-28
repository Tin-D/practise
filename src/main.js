import Vue from 'vue'
import '@/axiosConfig'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/style.scss'
import './assets/iconfont/iconfont.css'
Vue.config.silent = true

//自定义组件
import Card from './components/card.vue';
Vue.component('m-card', Card);
import ListCard from './components/ListCard.vue';
Vue.component('m-list-card', ListCard);
// wow.js 动画
// import 'animate.css'
// aos.js
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// swiper
import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
Vue.config.productionTip = false

// 引入自定义组件，index.js是组件的默认入口
import Loading from './components/Loading'
Vue.use(Loading);

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// vxe
import 'xe-utils';
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
Vue.use(VXETable)

// vue指令
import Vueblur from 'v-blur'
Vue.use(Vueblur)
import Vuemoney from 'v-money'
Vue.use(Vuemoney)
import VueHotkey from 'v-hotkey'
Vue.use(VueHotkey)
import dummyjs from 'dummyjs'
Vue.use(dummyjs)
import Vuedummy from 'vue-dummy'
Vue.use(Vuedummy)
import Vuetooltip from 'v-tooltip'
Vue.use(Vuetooltip)
import Vueclipboard from 'v-clipboard'
Vue.use(Vueclipboard)
import Vuescrollto from 'vue-scrollto'
Vue.use(Vuescrollto)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
    loading: require('./assets/logo.png'),//加载中图片，一定要有，不然会一直重复加载占位图
    error: require('./assets/logo.png')  //加载失败图片
})
import Vueinputmask from 'vue-inputmask'
Vue.use(Vueinputmask)
import VueClickOutside from 'v-click-outside'
Vue.use(VueClickOutside)
import Vueclampy from '@clampy-js/vue-clampy'
Vue.use(Vueclampy)
import Ripple from 'vue-ripple-directive'
Ripple.color = 'rgba(255, 255, 255, 0.35)';
Ripple.zIndex = 555555;
Vue.directive('ripple', Ripple);
import Directives from './directives/directives'
Vue.use(Directives)
import focus from './directives/focus'
Vue.use(focus)

// ...
import VXETablePluginExcel from 'vxe-table-plugin-excel'
import 'vxe-table-plugin-excel/dist/style.css'
// ...
VXETable.use(VXETablePluginExcel)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')