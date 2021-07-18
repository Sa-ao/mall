<!-- 商品列表 -->
<template>
<div class="goodsList">
  <goodsListItem v-for="(item,index) in goods" :key="index"
  :goodsitem="item"/>
</div>
</template>

<script>
  import goodsListItem from './goodsListItem.vue'
export default {
components: {
  goodsListItem
},
data() {
  return {

  };
},
props:{
 goods:{
   type:Array,
   default(){
     return []
   }
 }
},
//计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
computed: {},
//监控data中的数据变化,不依赖缓存,一对多,支持异步
watch: {},
//方法集合
methods: {
}
}
</script>
<style scoped>
  .goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
  }
</style>