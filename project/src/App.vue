<template>
  <div id="app">
    <top></top>
    <div class="home-left">
      <myMenu></myMenu>
    </div>
    <div class="home-right">
      <curLocation></curLocation>
      <div class="home-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './view/Menu.vue'
import Top from './components/Top.vue'
import CurLocation from './components/CurLocation.vue'
import './mock/mock.js'
import './mock/upload.js'
import './mock/batch.js'
import './mock/select.js'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  computed:{
    
  },
  components: {
    myMenu: Menu,
    top: Top,
    curLocation: CurLocation
  }
}
</script>

<style scoped lang="less">
#app{
  width: 100%;
  height: 100vh;
  position: relative;
}
.home-left {
  width: 200px;
  height: calc(~"100% - 60px");
  position: absolute;
  #menu {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #324157;
  }
}
#menu::-webkit-scrollbar {
  width: 0;
  height: 0;
  background-color: #F5F5F5;
}
.home-right{
  border-top: 1px solid #5FB878;
  width: 100%;
  padding-left: 200px;
  height: 90vh;
  .home-content{
    width: 98%;
    background-color: #F9FAFC;
    height: 94%;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
