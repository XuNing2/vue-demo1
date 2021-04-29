import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放全局的变量
    num:0
  },
  //相当于组件中的computed
  getters:{
    getNum(state){

      return state.num
    }
  },
  // 更改 vuex 中的状态的唯一方法是提交 mutation
  // 相当于组件中的 methods, 但是它不能使用异步方法（定时器、axios）
  mutations: {
    // payload是一个形参，如果组件在commit 时，有传过来，就存在
    increase(state,payload){
      state.num+=payload?payload:1;
    },
    decrease(state,payload){
      state.num-=payload?payload:1;
    },
  },
  //actions 专门用来处理异步，实际修改状态值的是 mutations
  actions: {
    // 延时减法，需要定时器
    decreaseAsyn(context){
      setTimeout(()=>context.commit('decrease'),1000)

    }
  },
  modules: {
  }
})
