<template>
    <div class="">
        <myTable :confData="confData"></myTable>
    </div>
</template>

<script>
import ConfData from '../static/config/test.json'
import MyTable from '../components/MyTable.vue'

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

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
