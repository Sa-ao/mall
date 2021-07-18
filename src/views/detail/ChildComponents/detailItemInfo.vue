<!-- detailiteminfo -->
<template>
  <div v-if="Object.keys(goods).length !==0" class="baseInfo">
    <div class="infoTitle">{{goods.title}}</div>
    <div class="infoPrice">
      <span class="nPrice">{{goods.newPrice}}</span>
      <span class="oPrice">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="infoOther">
      <div>{{goods.columns[0]}}</div>
      <div>{{goods.columns[1]}}</div>
      <div>{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="infoService">
      <span class="infoServiceItem" 
            v-for="index in goods.services.length-1"
            :key="index">
         <img :src="goods.services[index-1].icon" alt=""> 
         <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name:"detailItemInfo",
components: {},
data() {
return {
  
};
},
props:{
  goods:{
    type:Object,
    default(){
      return {}
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
  .baseInfo{
    margin-top: 15px;
    padding: 0 8px;
    color:#999;
    border-bottom: 5px solid #f2f5f8;
  }
  .infoTitle{
    color:#222;
  }
  .infoPrice{
    margin-top: 10px;
  }
  .infoPrice .nPrice{
    font-size: 24px;
    color:red;
  }
  .infoPrice .oPrice{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount{
    vertical-align: middle;
    line-height:12px;
    background-color: red;
    border-radius: 10px;
    font-size: 12px;
    color:#f2f5f8;
  }
  .infoOther{
    margin: 10px 3px 0px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f2f5f8;
  }
  .infoService{
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
  }
  .infoService img{
    vertical-align: middle;
    width: 10px;

  }
</style>