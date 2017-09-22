<template>
    <div class="add-box">
        <div class="add-block">
            <el-form :model="ruleForm" label-position="right" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                <el-row>
                    <el-col v-for="(item,i) in option" :xs="24" :sm="24" :md="(item.type=='line'||item.type=='checkBox')?24:12" :lg="(item.type=='line'||item.type=='checkBox')?24:8">
                        <el-form-item v-if="item.type == 'input'" :label="item.label" :prop="item.name">
                            <el-input :maxlength="100" v-model="ruleForm[item.name]" :placeholder="item.holder"></el-input>
                        </el-form-item>
                        <h2 v-else-if="item.type == 'line'">{{item.text}}</h2>
                        <el-form-item v-else-if="item.type == 'statical'" :label="item.label" :prop="item.name">
                            <el-select v-model="ruleForm[item.name]" :placeholder="item.holder">
                                <el-option v-for="(aSel,i) in item.data" :label="aSel.label" :value="aSel.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-else-if="item.type == 'dynamic'" :label="item.label" :prop="item.name">
                            <el-select v-model="ruleForm[item.name]" :placeholder="item.holder">
                                <el-option v-for="(aSel,i) in dynamicData[item.name]" :label="aSel.label" :value="aSel.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-else-if="item.type == 'radio'" :label="item.label" :prop="item.name">
                            <el-radio-group v-model="ruleForm[item.name]">
                                <el-radio v-for="(aRa,k) in item.data" :label="aRa"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item v-else-if="item.type == 'time'" :label="item.label" :prop="item.name">
                            <el-date-picker v-model="ruleForm[item.name]" align="right" type="date" :placeholder="item.holder" :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item v-else-if="item.type == 'switch'" :label="item.label" :prop="item.name">
                            <el-switch :on-text="item.on" :off-text="item.off" v-model="ruleForm[item.name]"></el-switch>
                        </el-form-item>
                        <el-form-item v-else-if="item.type == 'checkBox'" :label="item.label" :prop="item.name">
                            <el-checkbox-group v-model="ruleForm.param7">
                                <el-checkbox v-for="(aCh,k) in item.data" :label="aCh" :name="item.name"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        </el-form-item>
                        <el-form-item v-else-if="item.type == 'textarea'" :label="item.label" :prop="item.name">
                            <el-input type="textarea" resize="none" :rows="3" v-model="ruleForm[item.name]"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-form-item>
                            <el-button @click="goBack" type="primary" icon="arrow-left">返回</el-button>
                            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                            <el-button type="warning" @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'addPageForm',
    data() {
        return {
            dynamicData: {},
            ruleForm: {

            },
            pickerOptions: {
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            rules: {}
        }
    },
    props: {
        option: {}
    },
    beforeMount() {
        let moObj = {};
        this.option.forEach(function(item, i) {
            if (item.default) {
                moObj[item.name] = item.default;
                if (item.type == 'time') {
                    this.$set(this.ruleForm, item.name, item.default)
                    console.log(this.ruleForm[item.name])
                } else {
                    this.$set(this.ruleForm, item.name, item.default)
                }
            } else if (item.name) {
                moObj[item.name] = '';
                if (item.type == 'checkBox') {
                    this.$set(this.ruleForm, item.name, [])
                } else {
                    this.$set(this.ruleForm, item.name, '')
                }
            }
            if (item.type == 'dynamic') {
                this.$http.post(item.url)
                    .then(function(response) {
                        if (response.data.responseCode == 200) {
                            this.$set(this.dynamicData, item.name, response.data.results)
                        }
                    }.bind(this))
                    .catch(function(error) {
                        console.log(error);
                    })
            }
            if (item.rule) {
                this.$set(this.rules, item.name, item.rule)
            }
        }.bind(this));
    },
    mounted() {

    },
    components: {

    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // console.log(this.ruleForm)
                    this.$emit('submitData', this.ruleForm)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        goBack() {
            window.history.go(-1)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.add-box {
    padding: 0 30px 10px 20px;
    h2 {
        width: calc(~"100% - 20px");
        font-family: "微软雅黑";
        padding-left: 20px;
        height: 50px;
        color: #58B7FF;
        line-height: 50px;
        border-bottom: 2px solid #58B7FF;
        margin-bottom: 20px;
    }
    .el-input {
        max-width: 220px;
    }
    .el-textarea{
        max-width: 300px;
    }
}
</style>
