<!--  -->
<template>
<div id="TabBar">
  <slot name="tabbar"></slot>
</div>
</template>

<script>
export default {
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
<style>
  #TabBar{
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex: 1;
  justify-content: space-around;
  background-color: #e4dede;
  box-shadow: 0px -2px 1px rgba(112, 112, 114, 0.1)
}
</style>