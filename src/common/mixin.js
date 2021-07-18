import {debounce} from 'common/utils.js'
export const mixin = {
  methods:{
    //监听图片加载
  refreshScroller(){
  this.$store.watch((state)=>{
    return state.refresh
  },debounce(()=>{
    console.log('防抖函数执行');
    this.$refs.scroll.refresh()
  }),300)
},
  },
  mounted(){
    this.refreshScroller()
  },
}
export const backtopmixin={
  data(){
    return {
      isShow:false,
    }
  },
  methods:{
    //判端当前滚动位置来显示回到顶部
  backtop(position){
  //console.log(position)
  this.isShow = (-position.y) > 1000
  this.isflexd = (-position.y)&&(-position.y) >= this.tabControlOffsetTop
 },
  backtopclick(){
      this.$refs.scroll.scrollTo(0,0,500)
    }
  }
}