<template>
    <div class="info-box">
        <el-form :model="infoData" label-width="80px">
            <el-row>
                <el-col v-for="(item,i) in confData.content" :xs="24" :sm="24" :md="item.type=='line'?24:12" :lg="item.type=='line'?24:8">
                    <h2 v-if="item.type == 'line'">{{item.text}}</h2>
                    <el-form-item v-else-if="item.type == 'view'" :label="item.label">
                        <el-input v-model="infoData[item.name]" :readonly="true"></el-input>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'status'" :label="item.label">
                        <el-input v-model="item.filter[infoData[item.name]]" :readonly="true"></el-input>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'viewArea'" :label="item.label">
                        <el-input type="textarea" resize="none" :rows="3" v-model="infoData[item.name]" :readonly="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col>
                    <el-form-item>
                        <el-button @click="goBack" type="primary" icon="arrow-left">返回</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>

export default {
    name: 'Top',
    data() {
        return {
            infoData: {}
        }
    },
    props: ['confData', 'param'],
    beforeMount() {
        this.$http.post(this.confData.url, this.param)
            .then(function(response) {
                if (response.data.responseCode == 200) {
                    this.infoData = response.data.results
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
    components: {

    },
    methods: {
        goBack() {
            window.history.go(-1)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.info-box {
    padding: 20px 20px 20px 20px;
}

h2 {
    width: calc(~"100% - 20px");
    font-family: "微软雅黑";
    margin-left: 20px;
    height: 50px;
    color: #58B7FF;
    line-height: 50px;
    border-bottom: 2px solid #58B7FF;
    margin-bottom: 20px;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>
