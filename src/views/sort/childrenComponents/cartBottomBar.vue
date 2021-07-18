<!-- 购物车底部汇总 -->
<template>
  <div id='cartBottomBar'>
    <div class="check-content">
      <check-button @click="selectAll" :ischecked="isAllchecked" class="check-button" />
      <span>全选</span>
    </div>
    <div class="price">
      总价：{{totalPrice}}
    </div>
    <div class="purchase">
      <span>结算({{checknum}})</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import checkButton from 'components/content/checkButton/checkButton.vue'
  export default {
    name: '',
    components: {
      checkButton
    },
    data() {
      return {
        ischecked: true
      };
    },
    computed: {
      ...mapGetters(["cartNum", "cart", "isAllchecked"]),
      totalPrice() {
        return '￥' + this.cart.filter(item => {
          return item.ischecked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count
        }, 0)
      },
      checknum() {
        return this.cart.filter(item => {
          return item.ischecked
        }).length
      }
    },
    methods: {
      selectAll() {
        console.log("selectall");
        var that = this
        if(that.isAllchecked){
        that.cart.forEach(item => {
          item.ischecked = false
        })
      }else{
        that.cart.forEach(item => {
          item.ischecked = true
        })
      }
        
      }

    }
  }
</script>
<style scoped>
  #cartBottomBar {
    height: 40px;
    display: flex;

    align-items: center;
    position: relative;
    bottom: 0;
  }

  .check-content {
    width: 40px;
    display: flex;
    line-height: 24px;
    flex: 1
  }

  .check-button {
    width: 20px;
    height: 20px;
  }

  .price {
    flex: 1;
  }

  .purchase {
    align-self: stretch;
    flex: 1;
    background-color: red;
    text-align: center;
  }

  .purchase>span {
    line-height: 40px;
  }
</style>