<template>
    <div class="add-box">
        <div class="add-block">
            <h2>{{option.title}}</h2>
            <el-form :model="ruleForm" label-position="left" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                <div v-for="(item,i) in option.content" :class="{'input-clothes':(item.type != 'checkBox'),'input-clothes1':(item.type == 'checkBox')}">
                    <el-form-item v-if="item.type == 'input'" :label="item.label" :prop="item.name" required>
                        <el-input v-model="ruleForm[item.name]" :placeholder="item.holder"></el-input>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'statical'" :label="item.label" :prop="item.name" required>
                        <el-select v-model="ruleForm[item.name]" :placeholder="item.holder">
                            <el-option v-for="(aSel,i) in item.data" :label="aSel.label" :value="aSel.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'dynamic'" :label="item.label" :prop="item.name" required>
                        <el-select v-model="ruleForm[item.name]" :placeholder="item.holder">
                            <el-option v-for="(aSel,i) in dynamicData[item.name]" :label="aSel.label" :value="aSel.value"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'radio'" :label="item.label" :prop="item.name" required>
                        <el-radio-group v-model="ruleForm[item.name]">
                            <el-radio v-for="(aRa,k) in item.data" :label="aRa"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'time'" :label="item.label" :prop="item.name" required>
                        <el-date-picker v-model="ruleForm[item.name]" align="right" type="date" :placeholder="item.holder" :picker-options="pickerOptions">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'switch'" :label="item.label" :prop="item.name" required>
                        <el-switch :on-text="item.on" :off-text="item.off" v-model="ruleForm[item.name]"></el-switch>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'checkBox'" :label="item.label" :prop="item.name" required>
                        <el-checkbox-group v-model="ruleForm.param7">
                            <el-checkbox v-for="(aCh,k) in item.data" :label="aCh" :name="item.name"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    </el-form-item>
                    <el-form-item v-else-if="item.type == 'textarea'" :label="item.label" :prop="item.name" required>
                        <el-input type="textarea" resize="none" :rows="3" v-model="ruleForm[item.name]"></el-input>
                    </el-form-item>
                </div>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
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
                // type:''
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
            rules: {
                name: [
                    { required: true, message: '请输入活动名称', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                region: [
                    { required: true, message: '请选择活动区域', trigger: 'change' }
                ],
                date1: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                date2: [
                    { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                ],
                type: [
                    { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
                resource: [
                    { required: true, message: '请选择活动资源', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                ]
            }
        }
    },
    props: {
        option: {}
    },
    beforeMount() {
        let moObj = {};
        this.option.content.forEach(function(item, i) {
            if (item.default) {
                moObj[item.name] = item.default;
                if (item.type == 'time') {
                    this.$set(this.ruleForm, item.name, item.default)
                    console.log(this.ruleForm[item.name])
                } else {
                    this.$set(this.ruleForm, item.name, item.default)
                }
            } else {
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
                    console.log(this.ruleForm)
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.add-box {
    padding: 0 30px 10px 0;
    h2 {
        padding-left: 2%;
        width: calc(~"100% - 20px");
        font-family: "微软雅黑";
        margin-left: 20px;
        height: 50px;
        color: #58B7FF;
        line-height: 50px;
        border-bottom: 2px solid #58B7FF;
        margin-bottom: 10px;
    }
    .input-clothes{
        width: 40%;
        margin-left: 3%;
        display: inline-block;
    }
    .input-clothes1{
        width: 80%;
        margin-left: 3%;
    }
    .el-input{
        max-width: 220px;
    }
}
</style>
