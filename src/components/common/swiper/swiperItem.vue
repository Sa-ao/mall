<!--  -->
<template>
<div class="slide">
    <slot></slot>
</div>
</template>

<script>
export default {
  name:"Slide",
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
  .slide img{
    width: 100%;
  }
  .slide{
    width:100%;
    flex-shrink: 0;
  }
</style>