<template>
    <div>
        <myEdit :option="confData" :infoData="infoData" @submitData="getFormData"></myEdit>
    </div>
</template>

<script>
import MyEdit from '../../components/MyEdit.vue'
import ConfData from './edit.js'

export default {
    name: 'addTest',
    data() {
        return {
            confData: ConfData.option,
            param: {},
            infoData:{}
        }
    },
    components: {
        myEdit: MyEdit
    },
    beforeMount() {
        this.param = this.$route.query
        this.$http.post('/info', this.param)
            .then(function(response) {
                if (response.data.responseCode == 200) {
                    this.infoData = ConfData.infoFactory(response.data.results)
                    console.log(this.infoData)
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
    methods: {
        getFormData(data) {
            console.log(data)
            let facData = ConfData.dataFactory(data);
            this.$http.post('/add', facData)
                .then(function(response) {
                    if (response.data.responseCode == 200) {
                        this.$message({
                            message: '创建成功',
                            type: 'success'
                        });
                        setTimeout(function() {
                            window.history.go(-1)
                        }, 1500)
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
