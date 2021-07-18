<!-- 详情界面 -->
<template>
  <div id="detail">
    <detailNavBar class="detailNav" ref="nav" @NavbarTo="toHere" :navBarindex="navBarindex"></detailNavBar>
    <detailScroll class="detailScroll" ref="scroll" :probeType="3" @backTop="getPosition">
      <detailSwiper class="detailSwiper" :banners="banners" />
      <detailItemInfo :goods="goods" />
      <detailShopInfo :shop="shop" />
      <detailGoodsInfo :detailInfo="detailInfo" @ImageLoaded="detailRefresh" />
      <detailGoodsParams ref="params" :paramInfo="paramInfo" />
      <detailCommentInfo ref="comment" :commentInfo="commentInfo" />
      <goodsList ref="recommend" :goods="recommendGoods" />
    </detailScroll>
    <detailBottomBar @addTocart="addTocart"/>
    <backTop @click="backtopclick" v-show="isShow"/>
    <Toast ref="toast"/>
  </div>
</template>
<script>
  import { getDetail, getRecommend, GoodsInfo, Shop, GoodsParams } from "network/detail.js"
  import detailSwiper from "./ChildComponents/detailSwiper.vue"
  import detailNavBar from './ChildComponents/detailNavBar.vue'
  import detailItemInfo from './ChildComponents/detailItemInfo.vue'
  import detailShopInfo from './ChildComponents/detailShopInfo.vue'
  import detailScroll from 'components/common/scroll/scroll.vue'
  import detailGoodsInfo from "./ChildComponents/detailGoodsInfo.vue"
  import detailGoodsParams from "./ChildComponents/detailGoodsParams.vue"
  import detailCommentInfo from "./ChildComponents/detailCommentInfo.vue"
  import goodsList from "components/content/goods/goodsList.vue"
  import detailBottomBar from "./ChildComponents/detailBottomBar.vue"
  import backTop from "components/common/BackTop/BackTop.vue"
  import {debounce} from 'common/utils.js'
  //导入混入
  import { mixin,backtopmixin} from 'common/mixin.js'
  export default {
    name: 'Detail',
    components: {
      detailNavBar,
      detailSwiper,
      detailItemInfo,
      detailShopInfo,
      detailScroll,
      detailGoodsInfo,
      detailGoodsParams,
      detailCommentInfo,
      goodsList,
      detailBottomBar,
      backTop
    },
    mixins: [mixin,backtopmixin],
    data() {
      return {
        iid: null,
        detail: null,
        banners: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: {},
        recommendGoods: {},
        themeTopYs: [],
        getThemeTopY:null,
        currentIndex:0
      };
    },
    created() {
      console.log("111")
      this.iid = this.$route.params.iid
      getDetail(this.iid).then(res => {
        let data = res.data.result
        this.banners = res.data.result.itemInfo.topImages
        this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
        this.commentInfo = data.rate.cRate !== 0 ? data.rate.list[0] : {}
        // //获取对应的offsetTop
        // this.$nextTick(()=>{
        //   //根据最新的数据对应的dom都是已经被渲染完，但图片没加载完
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        //   console.log(this.themeTopYs)
          
        // })
        this.getThemeTopY= debounce(()=>{
          this.themeTopYs=[]
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
          console.log(this.themeTopYs);
        },200)
      })
      getRecommend().then(res => {
        console.log(res);
        this.recommendGoods = res.data.data.list
      })
    },
    mounted() {
      //this.getPosition()
      // $el undefind
      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.commend.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    },
    // updated() {
    //   this.themeTopYs.push(0)
    //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    //   this.themeTopYs.push(this.$refs.commend.$el.offsetTop)
    //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    // },
    //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
    computed: {},
    //监控data中的数据变化,不依赖缓存,一对多,支持异步
    watch: {},
    //方法集合
    methods: {
      getPosition(position) {
        
        const currentPosition = -position.y
        //console.log(currentPosition);
        let length = this.themeTopYs.length
        //console.log(length);
        for(let i = 0;i<length;i++){
          if(this.currentIndex !== i &&((i<length - 1 && currentPosition>this.themeTopYs[i]
          && currentPosition<this.themeTopYs[i+1])||(i == length -1 &&
          currentPosition>this.themeTopYs[i]))){
            this.currentIndex = i
            console.log(i);
            this.$refs.nav.currentIndex = i
          }
        }
        this.backtop(position)
      },
      detailRefresh() {
        this.getThemeTopY()
      },
      toHere(toParams) {
        console.log(toParams);
        var offsetTopY=this.themeTopYs[toParams]
        this.$refs.scroll.scrollTo(0, -offsetTopY, 200)
      },
      addTocart(){
        //加入购物车
        //1.获取商品信息
        const product = {}
        product.iid = this.iid
        product.image = this.banners[0]
        product.title = this.goods.title
        product.desc = this.detailInfo.desc
        product.price = this.goods.realPrice
        product.services = this.goods.services

        //通过mapActions映射来引入addGoods,使得直接使用该方法而不是通过下面的方法
        //import  {mapAction} from 'vuex'
        //methods:{
        //  ...mapActions(["addGoods"])
        //}
        this.$store.dispatch("addGoods",product).then(res=>{
           console.log(this.$refs.toast);
           this.$refs.toast.show("hhhhh",2000)
        })

        console.log("addTocart",product);
      }
    }
  }
</script>
<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    height: 100vh;
    background-color: #fff;
  }

  .detailNav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .detailScroll {
    height: calc(100vh - 102px);
    overflow: hidden;
  }
</style>