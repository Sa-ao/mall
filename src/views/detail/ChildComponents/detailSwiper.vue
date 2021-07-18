<!-- detail轮播图 -->
<template>
    <swiper class="detailSwiper">
      <template v-slot:swiperItem>
        <swiperItem v-for="(item,index) in banners" :key="index">
             <img :src="item" alt="">
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
data() {
return {

};
},
props:{
  banners:{
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
  .detailSwiper{
    height: 300px;
    overflow: hidden;
  }
  .slide img{
    width: 100%;
  }
  .slide{
    width:100%;
    flex-shrink: 0;
  }
</style>