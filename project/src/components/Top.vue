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
  height: 10vh;
  background-color: #324157;
  h1 {
    font-family: "中软雅黑";
    font-size: 1.7rem;
    color: #bfcbd9;
    float: left;
    margin: 10px 0 0 50px;
  }
  .top-right{
    width: 10%;
    float: right;
    margin-right: 1vw;
  }
}
</style>
