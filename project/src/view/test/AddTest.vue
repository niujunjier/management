<template>
  <div>
    <addPageForm :option="confData" @submitData="getFormData"></addPageForm>
  </div>
</template>

<script>
import AddPageForm from '../../components/AddPageform.vue'
import ConfData from './add.js'

export default {
  name: 'addTest',
  data() {
    return {
      confData: ConfData
    }
  },
  components: {
    addPageForm: AddPageForm
  },
  methods: {
    getFormData(data){
      console.log(data)
    },
    dataFactory(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
