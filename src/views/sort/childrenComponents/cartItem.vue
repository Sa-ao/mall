<!-- 购物车庆典项目 -->
<template>
  <div id='cartItem'>
   <div class="item-selector">
     <checkButton @click="checkclick"
                  :ischecked="product.item.ischecked"></checkButton>
   </div>
   <div class="item-img">
     <img :src="product.item.image" alt="商品图片">
   </div>
   <div class="item-info">
     <div class="item-title">{{product.item.title}}</div>
     <div class="item-desc">{{product.item.desc}}</div>
     <div class="item-bottom">
       <div class="item-price left">{{product.item.price}}</div>
       <div class="item-count right">x{{product.item.count}}</div>
     </div>
   </div>
  </div>
</template>

<script>
  import checkButton from 'components/content/checkButton/checkButton.vue'
  export default {
    name: '',
    components:{
      checkButton
    },
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
      }
    },
    
    methods:{
      checkclick(){
        this.$emit("changeIsChecked",this.product.index)
      }
    }
  }
</script>
<style scoped>
  #cartItem{
    width: 100%;
    display: flex;
    font-size:0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .item-title, .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
 
  .item-img{
    padding: 5px;
  }

  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .item-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .item-bottom .item-price{
    color:orangered;
  }
</style>