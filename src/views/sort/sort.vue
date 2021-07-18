<!-- 购物车 -->
<template>
<div id="cart">
  <cartNavBar>
    <template v-slot:center>
      <div>购物车({{cartNum}})</div>
    </template>
  </cartNavBar>
  <cartList/>
  <cartBottomBar/>
</div>
</template>

<script>
  import cartNavBar from 'components/common/NavBar/NavBar.vue'
  import cartList from "./childrenComponents/cartList.vue"
  import cartBottomBar from './childrenComponents/cartBottomBar.vue'
  import {mapGetters} from 'vuex'
    export default {
      components: {
        cartNavBar,
        cartList,
        cartBottomBar
      },
      data() {
        return {
        };
      },
      //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
      computed: {
        //getter转成计算属行两种写法
        ...mapGetters(["cartNum","cart"]),
        // ...mapGetters({
        //   cartNum:"cartNum",
        //   cart:"cart"
        // })
      },
      //监控data中的数据变化,不依赖缓存,一对多,支持异步
      watch: {},
      
      
    }
  </script>
<style scoped>
</style>