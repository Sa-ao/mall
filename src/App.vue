<template>
  <div id="App">
    <!-- <keep-alive>
      <router-view></router-view> 
    </keep-alive> -->
    
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Detail">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <TabBarCom/>
  </div>
</template>
<script>
import TabBarCom from 'components/common/TabBar/TabBarCon'
export default {
  name: 'App',
  components: {
    TabBarCom
  }
}
</script>

<style scoped>
#app {
  width: 375px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
:root{
  --color-red:rgba(212,62,46,1.0);
  --color-tint:#2c3e50;
}

@import "assets/css/normalize.css";
</style>
