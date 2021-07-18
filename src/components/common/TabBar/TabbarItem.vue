<!--  -->
<template>
  <div class="TabbarItem" @click="itemclick()" >
    <div v-if="!isActive"><slot name="img"><img src="@/icons/svg/home.svg" alt=""></slot></div>
    <div v-else><slot name="imgactive"><img src="@/icons/svg/homeactive.svg" alt=""></slot></div>
    <div :style="itemActiveColor"><slot name="name"><div>首页</div></slot> </div>
  </div>
</template>
<script>
export default {
components: {},
data() {
return {

};
},
props:{
  path:{
    type:String,
    default:"/home"
  },
  activeColor:{
    type:String,
    default:"white"
  }
},
//计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
computed: {
  isActive() {
    return this.$route.path.indexOf(this.path) !== -1
  },
  itemActiveColor(){
    return this.isActive?{color:this.activeColor}:{}
  }
},
//监控data中的数据变化,不依赖缓存,一对多,支持异步
watch: {},
//方法集合
methods: {
  itemclick(){
    this.$router.push(this.path)
  }
}

}
</script>
<style scoped>
  .TabbarItem{
    flex: 1;
    height: 49px;
    text-align: center;
  }
  .TabbarItem img{
    height: 24px;
    width: 24px;
  }
</style>