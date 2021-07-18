<!-- 购物车列表 -->
<template>
  <div id='cartList'>
    <scroll class="cartScroll" ref="scroll"> 
      <div class="cartItem" v-for="(item,index) in cart"
                          :key="index">
        <cartItem :product="{item:item,index:index}" @changeIsChecked="changeIsChecked"/> 
      </div>
  </scroll>
  </div>
</template>

<script>
  import scroll from "components/common/scroll/scroll.vue"
  import cartItem from "./cartItem.vue"
  import {mapGetters} from 'vuex'
  export default {
    name: '',
    components: {
      scroll,
      cartItem
    },
    data() {
      return {

      };
    },
    activated(){
      this.$refs.scroll.refresh()
    },
    props:{
     },
     computed: {
        
        ...mapGetters(["cart"]),
        
      },
    methods:{
      changeIsChecked(index){
        console.log("执行了");
        this.cart[index].ischecked = !this.cart[index].ischecked
      }
    }
  }
</script>
<style scoped>
  .cartScroll{
    height: calc(100vh - 44px - 89px);
    overflow: hidden;
  }
</style>