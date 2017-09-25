<template>
  <div>
    <myInfo :confData="confData" :param="param"></myInfo>
  </div>
</template>

<script>
import ConfData from './info.js'
import MyInfo from '../../components/MyInfo.vue'

export default {
  name: 'infoTest',
  data() {
    return {
      confData: ConfData,
      param: ''
    }
  },
  components: {
      myInfo: MyInfo
  },
  beforeMount(){
      this.param = this.$route.query
  },
  mounted(){
      console.log(this.$route.query)
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
