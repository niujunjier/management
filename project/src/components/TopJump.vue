<template>
  <div class="top-bar">
    <router-link to="/"><span class="el-icon-d-arrow-right"></span><span>&#x3000;TO欢迎页&#x3000;</span><span class="el-icon-d-arrow-left"></span></router-link>
    <span class="top-greet">欢迎来到v联网后台管理系统</span>
  </div>
</template>

<script>
export default {
  name: 'TopJump',
  data() {
    return {

    }
  },
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .top-bar{
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    background-color: #ecf0f3;
  }
  .top-greet{
    font-size: 13px;
    font-family: "华文仿宋";
    margin-left:20px;
    color: #3182bd;
  }
</style>
