<!--  -->
<template>
<div class="nav-bar">
<div class="left">
  <slot name="left"></slot>
</div>
<div class="center">
  <slot name="center"></slot>
</div>
<div class="right">
  <slot name="right"></slot>
</div>

</div>
</template>

<script>
export default {
components: {
},
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
  .nav-bar{
    width: 100%;
    display: flex;
    text-align: center;
    line-height: 44px;
    background-color:#e4dede ;
  }
  
  .center{
    flex:1
  }
</style>