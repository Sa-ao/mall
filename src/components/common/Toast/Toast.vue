<!-- 
  toast组件封装 这种方式使用时步骤较多，
  使用不方便，但是这个组件使用频率很高不推荐使用这种方式
-->
<template>
<div id='Toast'>
  <div>{{message}}</div>
</div>
</template>

<script>
export default {
name:'Toast',
components: {},
data(){
  return {
    message:'',
    isshow:false
  }
},
// props:{
//   message:{
//     type:String,
//     default:''
//   },
//   isshow:{
//     type:Boolean,
//     default:false
//   }
// },
methods:{
  show(message,duration){
    this.isshow = true
    this.message = message
    console.log("zhixingle");
    setTimeout(()=>{
      console.log("zhixingle");
      this.isshow = false
      this.message = ''
    },duration)
  }
}
}
</script>
<style scoped>
  #Toast{
    position: fixed;
    z-index: 999;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;

    color: #fff;
    background-color: rgba(0,0,0,.65);

  }
</style>