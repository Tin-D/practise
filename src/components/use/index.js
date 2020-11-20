// 引入组件
import Hello from './hello.vue'
import World from './world.vue'
import Swiper from '../home/swiper'
import Icons from '../home/icons'
// import Card from '@/components/card.vue';
// import ListCard from '@/components/ListCard.vue';

// 定义 Loading 对象
const installObj = {
    // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
    install: function (Vue) {
        Vue.component('sayHello', Hello),
        Vue.component('sayWorld', World),
        Vue.component('S-wiper', Swiper),
        Vue.component('Icons', Icons)

        // Vue.component('m-list-card', ListCard),
        // Vue.component('m-card', Card)
    }
}

// 导出
export default installObj