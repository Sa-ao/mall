<!--  -->
<template>
<swiper>
  <template v-slot:swiperItem>
    <swiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
         <img @load="imgload" :src="item.image" alt="">
      </a>
</swiperItem>
  </template> 
</swiper>
</template>

<script>
import {swiper,swiperItem} from 'components/common/swiper/index'
export default {
components: {
  swiper,
  swiperItem
},
props:{
  banners:{
    Type:Array,
    default(){
      return []
    }
  }
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
  imgload(){
    //this.$store.commit("changestate")
    this.$emit("tabControl")
    console.log("imgload")
  }
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