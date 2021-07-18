<!--  -->
<template>
  <div>
    <TabBar> 
      <template v-slot:tabbar>
      <TabbarItem  path="/home" itemActiveColor="yellow"> 
        <template v-slot:imgactive><img src="@/icons/svg/homeactive.svg" alt=""></template>
        <template v-slot:img><img src="@/icons/svg/home.svg" alt=""></template>
        <template v-slot:name><div >首页</div></template>
      </TabbarItem>
      <TabbarItem path="/news">
        <template v-slot:imgactive><img src="@/icons/svg/newsactive.svg" alt=""></template>
        <template v-slot:img><img src="@/icons/svg/news.svg" alt=""></template>
        <template v-slot:name><div >消息</div></template>
      </TabbarItem>
      <TabbarItem path="/sort">
        <template v-slot:imgactive><img src="@/icons/svg/sortactivesvg.svg" alt=""></template>
        <template v-slot:img><img src="@/icons/svg/sort.svg" alt=""></template>
        <template v-slot:name><div >分类</div></template>
      </TabbarItem>
      <TabbarItem  path="/profile">
        <template v-slot:imgactive><img src="@/icons/svg/profileactive.svg" alt=""></template>
        <template v-slot:img><img src="@/icons/svg/profile.svg" alt=""></template>
        <template v-slot:name><div >我的</div></template>
      </TabbarItem>
      </template>
    </TabBar>
  </div>

</template>
<script>
import TabBar from './TabBar.vue'
import TabbarItem from './TabbarItem.vue'
export default {
components: {
  TabBar,
  TabbarItem,
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
  img{
    
    height: 24px;
    width: 24px;
  
  }
</style>