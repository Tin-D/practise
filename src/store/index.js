import Vue from 'vue'
import Vuex from 'vuex'
import ModuleA from './moduleA'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                a: 10,
                b: 20
            })
        }, 3000)
    })
}

function getOtherData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({
                a: 11,
                b: 22
            })
        }, 3000)
    })
}
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        count1: 10,
        count2: 30,
        actionA: 100,
        actionB: 200,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
        ],
        dormitory: [
            {
              id:1,
              people: '雷森',
              relationship: '大学室友',
              meet: '2010-09-02',
              place: '图书馆',
              execg: '胖子',
              year: '8年',
              works: '海阔天空',
              checked:false
            }, 
            {
              id:2,
              people: '刘利伟',
              relationship: '大学室友',
              meet: '2010-09-02',
              place: '5#633',
              execg: '老大',
              year: '8年',
              works: '勇气',
              checked:false
            },
            {
              id:3,
              people: '李金龙',
              relationship: '大学室友',
              meet: '2010-09-02',
              place: '5#633',
              execg: '二哥',
              year: '8年',
              works: '遇见',
              checked:false
            }, 
            {
              id:4,
              people: '马康',
              relationship: '大学室友',
              meet: '2010-09-02',
              place: '餐饮大厦',
              execg: '康哥',
              year: '8年',
              works: '不再联系',
              checked:false
            }, 
            {
              id:5,
              people: '小甜',
              relationship: '亲密的人',
              meet: '2016-10-05',
              place: '小寨',
              execg: '甜甜圈',
              year: '2年',
              works: 'Forever Love',
              checked:false
            }
          ],
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        countAdd: state => {
            return state.count1 + state.count2;
        }
    },
    mutations: {
        increments(state, payload) {
            const res = [...state.todos]
            state.count1 = state.count1 + payload.a;
        },
        incrementBy(state) {
            state.count2 = state.count2 + 10;
        },
        actionA(state, params) {
            state.actionA = state.actionA + params.a;
        },
        actionB(state, params) {
            state.actionB = state.actionB + params.a;
        },
        someMutation(state, payload, rootGetters) { },
        updateMessage(state, payload) {
            state.actionB = payload;
        },
    },
    actions: {
        async getDataA(context, params) {
            context.commit('actionA', await getData()) // 使用Promise
            // context.commit('actionA', params);
        },
        async getDataB({ dispatch, commit }, params) {
            await dispatch('getDataA');
            commit('actionB', await getOtherData())
        },
        async someAction({ commit, dispatch }, payload) {
            // console.log(await dispatch('ac'));
            commit('someMutation', payload.a, { root: true }) // -> 'someMutation'
        }
    },
    modules: {
        moduleA: ModuleA
    },
    plugins: [createPersistedState({
        storage: window.localStorage,
    })]
})