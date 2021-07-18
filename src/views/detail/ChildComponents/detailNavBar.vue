<!-- 详情页中间标题组件 -->
<template>
<div id="detailNavBar">
  <NavBar class="NavBar">
    <template v-slot:left>
      <div class="left">
        <img src="../../../assets/img/detail/back.svg" class="back" @click="back" alt="">
      </div>
    </template>
    <template v-slot:center>
      <div class="detaliNavbar">
      <div class="detailNavBarItem" 
          @click="detailNavBarItem(index)"
          v-for="(item,index) in titles" :key="index" 
          :class="{active:index ===currentIndex}">
        <span>{{item}}</span>
      </div>
    </div>
    </template>
    <template v-slot:right>
      <div class="right">
        <img src="../../../assets/img/detail/back.svg" class=""  alt="">
      </div>
    </template>
  </NavBar>
</div>
</template>

<script>
  import NavBar from 'components/common/NavBar/NavBar.vue'
export default {
components: {
  NavBar
},
data() {
return {
  titles:["商品","参数","评论","推荐"],
  currentIndex:0,
};
},
props:{
},
//计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
computed: {},
//监控data中的数据变化,不依赖缓存,一对多,支持异步
watch: {},
//方法集合
methods: {
  detailNavBarItem(index){
    this.currentIndex=index
    this.$emit("NavbarTo",index)
  },
  back(){
    this.$router.go(-1)
  }
}
}
</script>
<style scoped>
  .NavBar{
    height: 44px;
  }
  .left img{
   margin:8px;
    width: 28px;
    height: 28px;
  }
  .right img{
    width: 28px;
    height:28px;
  }
  .detaliNavbar{
    display: flex;
    text-align: center;
    line-height: 44px;
    font-size: 15px;
  }
  .detailNavBarItem{
    flex:1;
  }
  .active{
    color: red
  }
  .active span{
    border-bottom: 3px solid red;
  }
</style>