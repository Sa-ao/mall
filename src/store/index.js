// 这里跟vue2有点区别，vue2中是直接导入vue，然后通过vue.use(xxx)
import {createStore} from 'vuex'
import getters from "./getter.js"
// 调用createStore
const store = createStore({
  state () {
    return{
      refresh:false,
      cart:[]
    }
  },
  mutations:{
    changestate(state){
      state.refresh=!state.refresh
    },
    addcounter(state,payload){
      payload.count++
    },
    addTocart(state,payload){
      payload.ischecked = true
      state.cart.push(payload)
    }
    // addGoods(state,payload){
    //   let oldproduct = null
    //   for(let item of state.cart){
    //     if(item.iid === payload.iid){
    //       oldproduct = item
    //     }
    //   }
    //   if(oldproduct){
    //     oldproduct.count +=1
    //   }else{
    //     payload.count=1
    //     state.cart.push(payload)
    //   }
    // }

  },
  actions:{
    // addGoods(context,payload){
    //   let oldproduct = context.state.cart.find(item =>item.iid === payload.iid)
    //   if(oldproduct){
    //     context.commit("addcounter",oldproduct)
    //   }else{
    //     payload.count = 1
    //     context.commit("addTocart")
    //   }
    // }
    addGoods(context, payload) {
      return new Promise((resolve,reject)=>{
        let oldproduct = null
      for (let item of context.state.cart) {
        if (item.iid === payload.iid) {
          oldproduct = item
        }
      }
      if (oldproduct) {
        context.commit("addcounter",oldproduct)
        resolve("数量加1")
      } else {
        payload.count = 1
        context.commit("addTocart",payload)
        resolve("添加到购物")
      }
      })
      
    }


  },
  getters
})
export default store