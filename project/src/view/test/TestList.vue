<template>
    <div class="">
        <myTable :confData="confData" @del="del"></myTable>
    </div>
</template>

<script>
import ConfData from './list.js'
import MyTable from '../../components/MyTable.vue'

export default {
    name: 'testList',
    data() {
        return {
            confData: ConfData
        }
    },
    mounted() {

    },
    components: {
        myTable: MyTable
    },
    methods: {
        del(data, op, callBack) {
            this.$http.post(op.url, data)
                .then(function(response) {
                    if (response.data.responseCode == 200) {
                        this.tableData = response.data;
                        this.$message({
                            type:'success',
                            message:'删除成功'
                        })
                        callBack();
                    }else{
                        this.$message({
                            type:'warning',
                            message:response.data.responseText
                        })
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
