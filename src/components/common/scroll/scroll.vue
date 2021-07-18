<!-- 封装better-scroll -->
<template>
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
  import BScroll from "better-scroll";
export default {
components: {},
data() {
return {
  scroll:null
};
},
mounted(){
  // let sainterval = setInterval(()=>{
  //   this.scroll = new BScroll(document.querySelector('.wrapper'),{
  // })
  // console.log('11111');
  
  // },3000)
  // clearInterval(sainterval)
  // this.$nextTick(()=>{
  //   this.scroll = new BScroll(this.$refs.wrapper,{
  //     probeType:2,
  // })
  // })
  //console.log(this.$refs.wrapper)
  this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
  })
  //console.log(this.scroll);
  //监听定位
  if(this.probeType == 2||this.probeType ==3){
    this.scroll.on('scroll',(position)=>{
    this.$emit("backTop",position)
  })
  }
  
  //监听下拉加载
  if(this.pullUpLoad==true){
    this.scroll.on('pullingUp',()=>{
    this.$emit('pullingUp')
  })
  }
  
},
props:{
  probeType:{
    type:Number,
    default:0
  },
  pullUpLoad:{
    type:Boolean,
    default:false
  }
},
//计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
computed: {},
//监控data中的数据变化,不依赖缓存,一对多,支持异步
watch: {},
//方法集合
methods: {
  scrollTo(a,b,c){
    this.scroll && this.scroll.scrollTo(a,b,c)
  },
  refresh(){
    this.scroll && this.scroll.refresh()
  },
  finishPullUp(){
    this.scroll && this.scroll.finishPullUp()
  },
  getScrollY(){
    return this.scroll ? this.scroll.y : 0
  }
}
}
</script>
<style scoped>
</style>