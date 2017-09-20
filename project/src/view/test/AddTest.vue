<template>
  <div>
    <addPageForm v-for="(item,i) in confData" :option="item"></addPageForm>
  </div>
</template>

<script>
import AddPageForm from '../../components/AddPageform.vue'
import ConfData from './add.json'

export default {
  name: 'addTest',
  data() {
    return {
      confData: ConfData.options
    }
  },
  components: {
    addPageForm: AddPageForm
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
