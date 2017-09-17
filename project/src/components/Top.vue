<template>
  <div class="nav">
    <h1>V联网</h1>
    <el-menu theme="dark" class="el-menu-demo top-right" mode="horizontal" @select="handleSelect">
      <el-submenu index="1">
        <template slot="title">admin</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="2"><router-link to="/">欢迎页</router-link></el-menu-item>
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
    width: 25%;
    float: right;
  }
}
</style>
