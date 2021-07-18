<!--  -->
<template>
<div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="@/assets/img/home/feature.jpg" alt="">
    </a>
</div> 
</template>

<script>
export default {
name:"FeatureView",
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
  img{
    width: 100%;
  }
</style>