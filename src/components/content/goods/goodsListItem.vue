<!-- 商品项 -->
<template>
  <div class="goodsItem">
    <img :src="showImg" @click="itemClick" @load="imgload" alt="">
    
    <!-- <img v-lazy="showImg" @click="itemClick" @load="imgload" alt=""> -->
    <div class="goodsInfo">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="cfav">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
      };
    },
    props: {
      goodsitem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    //计算属性 依赖缓存,多对一(即多个影响一个),不支持异步
    computed: {
      showImg() {
        return  this.goodsitem.image||  this.goodsitem.show.img
      }
    },
    //监控data中的数据变化,不依赖缓存,一对多,支持异步
    watch: {},
    //方法集合
    methods: {
      itemClick() {
        let iid = this.goodsitem.iid
        this.$router.push('/detail/' + iid)
      },
      imgload() {
        this.$store.commit("changestate")
        //console.log("imgload")
      }
    }
  }
</script>
<style scoped>
  .goodsItem {
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }

  .goodsItem img {
    width: 100%;
    border-radius: 5px;
  }

  .goodsInfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsInfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goodsInfo .price {
    color: var(--color-red);
    margin-right: 20px;
  }

  .goodsInfo .cfav {
    position: relative;
  }

  .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~../../../assets/img/home/collect.svg") 0 0/14px 14px;
  }
</style>