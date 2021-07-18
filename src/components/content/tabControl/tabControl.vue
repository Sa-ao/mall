<!--  -->
<template>
<div class="tabControl">
  <div v-for="(item,index) in titles" :key="index" @click="itemClick(index)"
    class="tabControlItem" :class="{active:index==currentIndex}">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
components: {},
data() {
return {
  currentIndex:0
};
},
props:{
  titles:{
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
  itemClick(index){
    this.currentIndex=index
    this.$emit("tabClick",index)
    console.log('test1');
    
  }
}
}
</script>
<style scoped>
  .tabControl{
    background-color: white;
    width:100%;
    display: flex;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
  }
  .tabControlItem{
    flex:1;
  }
  .active{
    color: red
  }
  .active span{
    border-bottom: 3px solid red;
  }
</style>