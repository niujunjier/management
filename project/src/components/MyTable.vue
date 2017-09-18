<template>
    <div class="list-box">
        <el-table :data="tableData.results" border style="width: 100%" fit @selection-change="handleSelectionChange">
            <el-table-column fixed type="selection" width="55"></el-table-column>
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column v-for="column in confData.row" :label="column.name">
                <template scope="scope">
                    <div v-if="column.type == 'tag'" slot="reference" class="name-wrapper">
                        <el-tag v-for="aTag in facData(scope.row[column.value],column.fitter,column.type)" :type="scope.row.tag === '家' ? 'primary' : 'success'">{{aTag}}</el-tag>
                    </div>
                    <p v-else>{{facData(scope.row[column.value],column.fitter,column.type)}}</p>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @current-change="handleCurrentChange" :current-page.sync="tableData.pageNo" :page-size="tableData.pageSize" layout="total, prev, pager, next, jumper" :total="tableData.count">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import ConfData from '../static/config/test.json'
import {mapActions} from 'vuex'

export default {
    name: 'Top',
    data() {
        return {
            multipleSelection: [],
            tableData: []
        }
    },
    props: ['confData'],
    components: {

    },
    mounted() {
        this.setTitle(this.confData.title)
        this.$http.post('/',{pageNo:1})
            .then(function(response) {
                console.log(response);
                if (response.data.responseCode == 200) {
                    this.tableData = response.data;
                }
            }.bind(this))
            .catch(function(error) {
                console.log(error);
            })
    },
    methods: {
        ...mapActions(['setTitle']),
        handleClick() {

        },
        facData(data, fitter, type) {
            if (type == 'str') {
                return data;
            } else if (type == 'status') {
                return fitter[data];
            } else if (type == 'tag') {
                return data.split(',');
            }

        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.$http.post('/',{pageNo:val})
                .then(function(response) {
                    console.log(response);
                    if (response.data.responseCode == 200) {
                        this.tableData = response.data;
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
.list-box {
    width: 100%;
    height: 100%;
    padding: 20px 20px 0 20px;
    .block {
        margin-top: 20px;
    }
}

.name-wrapper {
    span {
        margin: 0 5px 0 5px;
    }
}
</style>
