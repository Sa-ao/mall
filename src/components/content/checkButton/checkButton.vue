<!-- 多选按钮 -->
<template>
<div id='check-button'
      class="check-button"
      :class={check:ischecked}>
  <img src="~assets/img/home/collect.svg" alt="">
</div>
</template>

<script>
export default {
name:'',
components: {},
props:{
  ischecked:{
    type:Boolean,
    default(){
      return false
    }
  }
},
methods:{
  
}
}
</script>
<style scoped>
  .check-button{
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check{
    border-color: red;
  }
  
  .check-button img{
    width: 16px;
    height: 16px;
  }
</style>