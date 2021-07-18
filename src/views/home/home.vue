<template>
<div id="home">
  <navbar class="navbar">
    <template v-slot:center>
      <div>首页</div>
    </template>
  </navbar>
  <tabControl class="tabControl1" ref="tabControl1" @tabClick="tabClick" :titles='["流行","新款","精选"]' v-show="isflexd"/>
  <scroll class="scroll" ref="scroll" 
                          :probeType="3" 
                          :pullUpLoad="true"
                          @pullingUp="LoadMore"
                          @backTop="getPosition">
    <homeswiper class="homeswiper" 
                :banners="banners" 
                 @tabControl="tabControl"/>                     
    <recommend :recommends="recommends"/>
    <FeatureView @tabControl="tabControl" />
    <tabControl class="tabControl2" ref="tabControl2" @tabClick="tabClick" :titles='["流行","新款","精选"]'/>
    <goodsList :goods="showGoods"/>
  </scroll>
  <backTop @click="backtopclick" v-show="isShow"/>
</div>
</template>
<script>
//导入home网络请求的数据
import {getHomeMultidata,getHomeGoods} from 'network/home'

import navbar from 'components/common/NavBar/NavBar.vue'
import scroll from "components/common/scroll/scroll.vue"
import backTop from 'components/common/BackTop/BackTop.vue'
//导入swiper
//import {swiper,swiperItem} from 'components/common/swiper/index'
import homeswiper from './childComponents/homeswiper.vue'
import tabControl from 'components/content/tabControl/tabControl.vue'
import goodsList from 'components/content/goods/goodsList.vue'

import recommend from './childComponents/ReommendView.vue'
import FeatureView from './childComponents/FeatureView.vue'
//导入better-scroll
import BScroll from 'better-scroll'

//导入混入
import {mixin,backtopmixin} from 'common/mixin.js'
export default {
name:"home",
components: {
  navbar,
  scroll,
  backTop,
  homeswiper,
  tabControl,
  goodsList,
  recommend,
  FeatureView
},
data() {
  return {
      banners:[],
      recommends:[],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]}
      },
      currentType:"pop",
      tabControlOffsetTop:null,
      isflexd:false,
      saveY:null,
      sa:0
  };
},
mixins:[mixin,backtopmixin],
created(){

  this.getHomeMultidata()

  this.getHomeGoods("pop")
  this.getHomeGoods("new")
  this.getHomeGoods("sell")
},
unmounted(){
  console.log("3333")
},
activated(){
  this.$refs.scroll.refresh()
  this.$refs.scroll.scrollTo(0,this.saveY,0)
  console.log("进入主页",this.saveY);
},
deactivated(){
  this.saveY=this.$refs.scroll.getScrollY()
  console.log("离开主页",this.saveY)
},
//计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
computed: {
  showGoods(){
    return this.goods[this.currentType].list
  }
},
//监控data中的数据变化,不依赖缓存,一对多,支持异步
watch: {
},
//方法集合
methods: {
  /**
   * 网络请求相关方法
   **/
  getHomeMultidata(){
  //获取getHomeMultidata请求到的数据
    getHomeMultidata().then(res=>{
    console.log(res)
    //获取到轮播图的相关数据
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
    })
  },
  //获取getHomeGoods请求到达数据
  getHomeGoods(type){
    const page = this.goods[type].page + 1
    getHomeGoods(type,page).then(res=>{
      //console.log(res)
      //这里利用数组的解构赋值将获取到的list数据push到该类型的list中
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page += 1
      //完成上拉，可以使得其回调函数再次使用
      this.$refs.scroll.finishPullUp()
    })
  },
  /**
   * 
  **/
 tabClick(index){
   switch(index){
     case 0:
       this.currentType="pop"
       break;
      case 1:
       this.currentType = "new"
       break;
      case 2:
       this.currentType = "sell"
       break;
   }
   this.$refs.tabControl1.currentIndex = index
   this.$refs.tabControl2.currentIndex = index
 },
 //上拉加载
 LoadMore(){
  this.getHomeGoods(this.currentType)
  this.$refs.scroll.refresh()
 },
 //判端当前滚动位置来显示回到顶部
 getPosition(position){
  //console.log(position)
  this.backtop(position)
 },
 tabControl(){
   //获取轮播图加载完后tabcontrol的offsettop
  this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop
  //console.log("1111",this.$refs.tabControl.$el.offsetTop)
 },
 
}
}
</script>
<style scoped>
  .scroll{
    position:absolute;
    top:44px;
    left: 0;
    right: 0;
    bottom: 49px;
    z-index:1;
    height: calc(100vh - 93px);
    overflow: hidden;
  }
  .tabControl1{
    position: relative;
    z-index: 2;
  }

</style>
