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
    getFormData(data) {
      console.log(data)
      let facData = this.dataFactory(data);
      this.$http.post('/add', facData)
        .then(function(response) {
          if (response.data.responseCode == 200) {
            this.$message({
              message: '创建成功',
              type: 'success'
            });
            setTimeout(function(){
              window.history.go(-1) 
            },1500)
          } else {
            this.$message({
              message: response.data.responseText,
              type: 'warning'
            });
          }
        }.bind(this))
        .catch(function(error) {
          console.log(error);
        })
    },
    dataFactory(data) {
      return data;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
