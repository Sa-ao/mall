<!-- 回到顶部组件 -->
<template>
<div id="back-top">
  <img class="backtopimg" src="../../../assets/img/common/back_top.svg" alt="">
</div>
</template>

<script>
export default {
  emits:[
    "backtopclick"
  ],
components: {},
data() {
return {

};
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
  #back-top{
    position: fixed;
    bottom: 55px;
    right: 20px;
    z-index: 2;
  }
  .backtopimg{
    width: 30px;
    height: 30px;
  }
</style>