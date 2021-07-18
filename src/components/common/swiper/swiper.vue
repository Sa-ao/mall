<!--  -->
<template>
  <div id="sa-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot name="swiperItem"></slot>
    </div>
      <slot name = "indicator"></slot>
      <div class="indicator">
        <slot name = "indicator">
              <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index === currentindex-1}" :key = "index"></div>
        </slot>
      </div>
  </div>
</template>

<script>
export default {
  
  props:{
    interval:{
      type:Number,
      default:3000
    },
    animDuration:{
      type:Number,
      default:300
    },
    moveRatio:{
      type:Number,
      default:0.5
    },
    showIndicaton:{
      type:Boolean,
      default:true
    }
  },
components: {
  //swiperItem
},
data() {
return {
  slideCount:0,//元素个数
  totalWidth:0,//swiper宽度
  swiperStyle:{},//swiper样式
  currentindex:1,//当前的index
  scrolling:false//是否正在滚动
};
},
mounted(){
  
  setTimeout(()=>{
    this.handleDom();
    this.startTimer();
  },300)
},
//计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
computed: {},
//监控data中的数据变化,不依赖缓存,一对多,支持异步
watch: {},
//方法集合
methods: {
  startTimer(){
    this.playTimer =window.setInterval(()=>{
      this.currentindex++;
      this.scrollContent(-this.currentindex *this.totalWidth);
    },this.interval)
  },
  stopTimer(){
    window.clearInterval(this.playTimer)
  },
  scrollContent(currentPosition){
    this.scrolling = true;
    this.swiperStyle.transition ='transform' + this.animDuration + 'ms';
    this.setTransform(currentPosition);
    this.checkPosition();
    this.scrolling = false;
  },
  //校验正确的位置
  checkPosition(){
    window.setTimeout(()=>{
      //校验正确的位置
      this.swiperStyle.transition = "0ms";
      if(this.currentindex >=this.slideCount+1){
        this.currentindex =1;
        this.setTransform(-this.currentindex*this.totalWidth);
      }else if(this.currentindex<=0){
        this.currentindex = this.slideCount;
        this.setTransform(-this.currentindex *this.totalWidth);
      }
      //结束移动后的回调
      this.$emit('transitionEnd',this.currentindex-1);
    },this.animDuration)
  },
  //设置滚动位置
  setTransform(position){
    //console.log("111")
    this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
    this.swiperStyle['-webkit-transform'] = `translate3d(${position}px),0,0`;
    this.swiperStyle['-ms-transform'] = `translate3d(${position}px),0,0`;
  },
  //操作dom在前后加slide
  handleDom(){
    let swiperEl = document.querySelector('.swiper');
    let slidesEls = swiperEl.getElementsByClassName('slide');
    this.slideCount = slidesEls.length;
    if(this.slideCount>1){
      let cloneFirst = slidesEls[0].cloneNode(true);
      let cloneLast = slidesEls[this.slideCount-1].cloneNode(true);
      swiperEl.insertBefore(cloneLast,slidesEls[0]);
      swiperEl.appendChild(cloneFirst);
      this.totalWidth = swiperEl.offsetWidth;
      this.swiperStyle = swiperEl.style;
    }
    this.setTransform(-this.totalWidth);
  },
  //拖动事件的处理
  touchStart(e){
    //如果正在滚动，不可以拖东
    if(this.scrolling) return;
    this.stopTimer();
    //保存开始的滚动位置
    this.startX = e.touches[0].pageX;
  },
  //拖动事件的处理
  touchMove(e){
    //计算拖东距离
    this.currentX = e.touches[0].pageX;
    this.distance = this.currentX-this.startX;
    let currentPosition = -this.currentindex *this.totalWidth;
    let moveDistance = this.distance + currentPosition;
    //设置当前位置
    this.setTransform(moveDistance);
  },
  touchEnd(e){
    let currentMove =Math.abs(this.distance);
    if(this.distance===0){
      return
    }else if(this.distance>0&&currentMove>this.totalWidth*this.moveRatio){
      this.currentindex--
    }else if(this.distance<0&&currentMove>this.totalWidth*this.moveRatio){
      this.currentindex++
    }
    this.scrollContent(-this.currentindex*this.totalWidth);
    this.startTimer();
  },
  previous(){
    this.changeItem(-1);
  },
  next(){
    this.changeItem(1)
  },
  changeItem(num){
    //移除定时器
    this.stopTimer();
    //修改index和位置
    this.currentindex+=num;
    this.scrollContent(-this.currentindex*this.totalWidth);
  
    //添加定时器
    this.startTimer();
  }

}
}
</script>
<style scoped>
  #sa-swiper{
    overflow: hidden;
    position: relative;
  }
  .swiper{
    display: flex;
  }
  .indicator{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }
  .indi-item{
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin:0 5px;
  }
  .indi-item.active{
    background-color: rgba(212,62,46,1.0);
  }
  .slide img{
    width: 100%;
  }
  .slide{
    width:100%;
    flex-shrink: 0;
  }
  
</style>