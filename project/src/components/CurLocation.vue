<template>
  <div class="loc-bar">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>您的位置:</el-breadcrumb-item>
      <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'CurLocation',
  data() {
    return {

    }
  },
  computed:{
    ...mapGetters(['title'])
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .loc-bar{
    height: 30px;
    .el-breadcrumb{
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      span{
        float: left;
      }
    }
  }
</style>
