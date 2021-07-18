<!-- 底部工具栏 -->
<template>
<div id='detailBottomBar'>
  <div class="barItem barLeft">
    <div>
      <i class="icon service"></i>
      <span class="text">客服</span>
    </div>
    <div>
      <i class="icon shop"></i>
      <span class="text">店铺</span>
    </div>
    <div>
      <i class="icon select"></i>
      <span class="text">收藏</span>
    </div>
  </div>
  <div class="barItem barRight">
    <div class="cart" @click="addTocart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
  <sport-ball ref="ball" class="sport-ball"></sport-ball>
</div>
</template>

<script>
  export default {
    name: '',
    components: {},
    data() {
      return {

      };
    },
    methods:{
      addTocart(){
        this.$emit("addTocart")
      }
    }
  }
</script>
<style scoped>
  #detailBottomBar{
    height: 58px;
    background-color: #fff;
    position: fixed;
    text-align: center;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .barItem{
    flex: 1;
    display: flex;
  }
  .barItem>div{
    flex: 1;
  }
  .barLeft .text{
    font-size: 13px;
  }
  .barLeft .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin:10px auto 3px;
    background: url("") 0 0/100%;
  }
  .barLeft .service{
    background-position: 0 -54px;
  }
  .barLeft .shop {
    background-position: 0 -98px;
  }

  .barRight {
    font-size: 15px;
    color: #fff;
    line-height: 50px;
  }
  .barRight .cart{
    background-color: #ffe817;
    color: #333;
  }
  .barRight .buy{
    background-color: #f69;
  }
</style>