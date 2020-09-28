import Vuex from 'vuex'

const store = new Vuex.Store({
    modules: {
        account: {
            namespaced: true,

            // 模块内容（module assets）
            state: () => ({
                account: 'account'
            }), // 模块内的状态已经是嵌套的了，使用 `namespaced` 属性不会对其产生影响
            getters: {
                isAdmin() {
                    return modules.account;
                } // -> getters['account/isAdmin']
            },
            actions: {
                login() {
                    console.log('account/login');
                } // -> dispatch('account/login')
            },
            mutations: {
                login() {
                    console.log('account/login');
                } // -> commit('account/login')
            },

            // 嵌套模块
            modules: {
                // 继承父模块的命名空间
                myPage: {
                    state: () => ({
                        myPage: myPage,
                    }),
                    getters: {
                        profile() {
                            return 'account/profile';
                        } // -> getters['account/profile']
                    }
                },

                // 进一步嵌套命名空间
                posts: {
                    namespaced: true,

                    state: () => ({
                        posts: 'posts'
                    }),
                    getters: {
                        popular() {
                            return 'account/posts/popular';
                        } // -> getters['account/posts/popular']
                    }
                }
            }
        }
    }
});
export default {
    store
}