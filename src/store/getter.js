export default{
  cartNum(state){
    return  state.cart.length
  },
  cart(state){
    return state.cart
  },
  isAllchecked(state){
     for(let i=0;i<state.cart.length;i++){
        if(!state.cart[i].ischecked){
          return false;
        }
    }
    return true;
  }

}