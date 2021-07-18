<!--  -->
<template>
<div>
<div>
  消息
</div>
<div class="wrapper" ref="wrapper">
  <ul class="content">
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
    <li>列表4</li>
    <li>列表5</li>
    <li>列表6</li>
    <li>列表7</li>
    <li>列表8</li>
    <li>列表9</li>
    <li>列表10</li>
    <li>列表11</li>
    <li>列表12</li>
    <li>列表13</li>
    <li>列表14</li>
    <li>列表15</li>
    <li>列表16</li>
    <li>列表17</li>
    <li>列表18</li>
    <li>列表19</li>
    <li>列表20</li>
    <li>列表21</li>
    <li>列表22</li>
    <li>列表23</li>
    <li>列表24</li>
    <li>列表25</li>
    <li>列表26</li>
    <li>列表27</li>
    <li>列表28</li>
    <li>列表29</li>
    <li>列表30</li>
    <li>列表31</li>
    <li>列表32</li>
    <li>列表33</li>
    <li>列表34</li>
    <li>列表35</li>
    <li>列表36</li>
    <li>列表37</li>
    <li>列表38</li>
    <li>列表39</li>
    <li>列表40</li>
    <li>列表41</li>
    <li>列表42</li>
    <li>列表43</li>
    <li>列表44</li>
    <li>列表45</li>
    <li>列表46</li>
    <li>列表47</li>
    <li>列表48</li>
    <li>列表49</li>
    <li>列表50</li>
    <li>列表51</li>
    <li>列表52</li>
    <li>列表53</li>
    <li>列表54</li>
    <li>列表55</li>
    <li>列表56</li>
    <li>列表57</li>
    <li>列表58</li>
    <li>列表59</li>
    <li>列表60</li>
    <li>列表61</li>
    <li>列表62</li>
    <li>列表63</li>
    <li>列表64</li>
    <li>列表65</li>
    <li>列表66</li>
  </ul>
</div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
components: {},
data() {
return {
  scroll:null
};
},
mounted(){
  //console.log(document.querySelector(".wrapper"))
  // this.$nextTick(() => {
	// 			this.scroll = new BScroll(this.$refs.wrapper, {})
	// 		})
  this.scroll = new BScroll(this.$refs.wrapper, {
    probeType:2,//侦测0,1都是不侦测 2 手指在滚动屏幕的过程中侦测3 滚动就侦测
    //click:true,
    //pullUpLoad:true//上拉
  })
  this.scroll.on('scroll',(position)=>{
    console.log(position)
  })
  // BScroll.on('pullingUp',()=>{
  //   console.log('上拉加载');
    
  // })
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
  .wrapper{
    overflow: hidden;
    height: 100px;
    background-color: burlywood;
  }
</style>