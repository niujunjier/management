<template>
  <div class="">
    <el-menu theme="dark" class="el-menu-demo nav" mode="horizontal" @select="handleSelect">
      <h1>V联网</h1>
      <el-submenu index="1" class="top-right">
        <template slot="title">admin</template>
        <el-menu-item index="2-1" class="el-icon-d-arrow-right"> 退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'Top',
  data() {
    return {
      
    }
  },
  components: {

  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav {
  width: 100%;
  background-color: #324157;
  h1 {
    font-family: "中软雅黑";
    font-size: 25px;
    color: #bfcbd9;
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 50px;
  }
  .top-right{
    width: 100px;
    float: right;
    margin-right: 7vw;
  }
}
</style>
