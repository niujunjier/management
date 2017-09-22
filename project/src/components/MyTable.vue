<template>
    <div class="list-box">
        <div class="search-box">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item v-for="(aSearch,sIdx) in confData.search" :label="aSearch.label">
                    <el-input v-if="aSearch.type == 'input'" v-model="formInline[aSearch.name]" :placeholder="aSearch.holder"></el-input>
                    <el-select v-else-if="aSearch.type == 'statical'" clearable v-model="formInline[aSearch.name]" filterable :placeholder="aSearch.holder">
                        <el-option v-for="item in aSearch.data" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-else-if="aSearch.type == 'dynamic'" clearable v-model="formInline.search3" filterable :placeholder="aSearch.holder">
                        <el-option v-for="item in dynamicData[aSearch.name]" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-date-picker v-else-if="aSearch.type == 'time'" v-model="formInline[aSearch.name]" type="daterange" align="right" :placeholder="aSearch.holder" :picker-options="pickerOptions">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="option-box">
            <router-link :to="confData.addConfig.path">
                <el-button size="large" :plain="true" type="info" :url="confData.addConfig.url">{{confData.addConfig.text}}</el-button>
            </router-link>
        </div>
        <el-table ref="multipleTable" :data="tableData.results" border style="width: 100%" fit @selection-change="handleSelectionChange">
            <el-table-column fixed type="selection" width="55"></el-table-column>
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column v-for="column in confData.row" :label="column.name">
                <template scope="scope">
                    <div v-if="column.type == 'tag'" slot="reference" class="name-wrapper">
                        <el-tag v-for="aTag in facData(scope.row[column.value],column.fitter,column.type)" type="primary">{{aTag}}</el-tag>
                    </div>
                    <p v-else>{{facData(scope.row[column.value],column.fitter,column.type)}}</p>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template scope="scope">
                    <span v-for="(aOp,p) in confData.lineOption" class="line-icon">
                        <el-button v-if="aOp.type == 'delete'" type="info" icon="delete" size="mini" @click="del(scope.row,aOp)"></el-button>
                        <el-button v-else-if="aOp.type == 'information'" type="info" icon="information" size="mini" @click="info(scope.row,aOp)"></el-button>
                        <el-button v-else-if="aOp.type == 'edit'" type="info" icon="edit" size="mini"></el-button>
                    </span>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @current-change="handleCurrentChange" :current-page.sync="tableData.pageNo" :page-size="tableData.pageSize" layout="total, prev, pager, next, jumper" :total="tableData.count">
            </el-pagination>
        </div>
        <div class="button-box">
            <span v-for="(aBtn,key) in confData.options" class="btn-clothes">
                <el-upload class="upload-demo" :show-file-list="false" v-if="aBtn.type == 'upLoad'" :action="aBtn.url" :on-success="uploadSuccess">
                    <el-button type="info">
                        {{aBtn.text}}
                        <i class="el-icon-upload el-icon--right"></i>
                    </el-button>
                </el-upload>
                <el-button v-else-if="aBtn.type == 'downLoad'" type="info">
                    {{aBtn.text}}
                    <i class="el-icon-document el-icon--right"></i>
                </el-button>
                <el-button v-else-if="aBtn.type == 'batch'" type="info" @click="batchOption(aBtn.url)">
                    {{aBtn.text}}
                    <i class="el-icon-setting el-icon--right"></i>
                </el-button>
            </span>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Top',
    data() {
        return {
            a: '',
            tableData: [],
            dynamicData: {},
            formInline: {},
            pickerOptions: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            }
        }
    },
    props: ['confData'],
    components: {

    },
    computed: {
        ...mapGetters([
            'batchData'
        ])
    },
    beforeMount() {
        console.log(this.confData.search)
        let moData = {};
        this.confData.search.forEach(function(item, i) {
            this.$set(this.formInline, item.name, '')
            if (item.type == 'dynamic') {
                this.$http.post(item.url)
                    .then(function(response) {
                        console.log(response);
                        if (response.data.responseCode == 200) {
                            this.$set(this.dynamicData, item.name, response.data.results)
                        }
                    }.bind(this))
                    .catch(function(error) {
                        console.log(error);
                    })
            }
        }.bind(this));
    },
    mounted() {
        this.formInline.pageNo = 1;
        this.setTitle(this.confData.title)
        this.getlist();
    },
    methods: {
        ...mapActions(['setTitle', 'setBatch']),
        getlist() {
            this.$http.post(this.confData.listUrl, this.formInline)
                .then(function(response) {
                    if (response.data.responseCode == 200) {
                        this.tableData = response.data;
                    }
                }.bind(this))
                .catch(function(error) {
                    console.log(error);
                })
        },
        remoteMethod(url) {
            console.log(url)
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
            this.setBatch(val)
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.formInline.pageNo = val;
            this.getlist();
        },
        uploadSuccess(response) {
            if (response.responseCode == 200) {
                this.$message({
                    message: '导入成功',
                    type: 'success'
                });
                this.getlist();
            } else {
                this.$message({
                    message: response.responseText,
                    type: 'warning'
                });
            }
        },
        batchOption(url) {
            console.log(this.batchData)
            if (this.batchData.length == 0) {
                this.$message({
                    message: '请至少选择一个',
                    type: 'warning'
                });
            } else {
                this.$confirm('确定继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post(url, this.batchData)
                        .then(function(response) {
                            if (response.data.responseCode == 200) {
                                this.$message({
                                    message: '操作成功',
                                    type: 'success'
                                });
                                this.$refs.multipleTable.clearSelection();
                            } else {
                                this.$message({
                                    message: response.responseText,
                                    type: 'warning'
                                });
                            }
                        }.bind(this))
                        .catch(function(error) {
                            console.log(error);
                        })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            }
        },
        onSubmit() {
            console.log(this.formInline);
            this.$http.post(this.confData.listUrl, this.formInline)
                .then(function(response) {
                    if (response.data.responseCode == 200) {
                        this.tableData = response.data;
                    }
                }.bind(this))
                .catch(function(error) {
                    console.log(error);
                })
        },
        del(data, op) {
            this.$confirm('确定删除?, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$emit('del', data, op, function() {
                this.getlist();
                }.bind(this))
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        info(data, op) {
            console.log(data, op)
            this.$router.push({ name: op.path, params: { Id: data.ID }})
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
    .button-box {
        width: 100%;
        text-align: right;
        .btn-clothes {
            display: inline-block;
            margin-left: 15px;
        }
    }
    .line-icon {
        margin-left: 2px;
    }
    .search-box {
        background-color: #ecf0f3;
        padding: 20px 10px 10px 10px;
    }
    .option-box {
        padding: 10px 10px 10px 10px;
        background-color: #ecf0f3;
        border-left: 4px solid #73ccff;
        margin: 10px 0 10px 0;
        padding-left: 50px;
    }
}

.name-wrapper {
    span {
        margin: 0 2px 0 2px;
    }
}
</style>
