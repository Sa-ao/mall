<!-- 首页推荐界面 -->
<template>
<div class="recommend">
<div name="item" v-for="(item,index) in recommends" :key="index">
  <a :href="item.link">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
  </a>
</div>
</div>
</template>

<script>
export default {
name:"RecommendView",
components: {},
data() {
return {
};
},
//属性
props:{
  recommends:{
    Type:Array,
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
  .recommend img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  .recommend div{
    margin:10px auto 0;
  }
  .recommend{
    display:flex;
    width:100%;
    font-size: 12px;
    text-align:center;
    padding-bottom: 10px;
    border-bottom:5px solid #eeeeee
  }
  .recommend a{
    /* text-decoration: none; */
  }
</style>