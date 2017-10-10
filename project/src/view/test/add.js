import { checkPhone, checkEmail } from '../../static/utils/check.js'

const data = {
    url: "/add",
    dataFactory(data) {
        let facData = JSON.parse(JSON.stringify(data))
        //your code here 
        
        //以上区域是自定义代码 
        return facData
    },
    option: [
        {
            type: "line",
            text: "分割线"
        },
        {
            type: "input",
            holder: "请输入",
            name: "param1",
            label: "长度限制",
            default: '123',
            rule: [
                { required: true, message: '请输入', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
        },
        {
            type: "input",
            holder: "请输入",
            name: "phone",
            label: "手机号",
            default: "15156158076",
            rule: [
                { required: true, message: '请输入', trigger: 'blur' },
                { validator: checkPhone, trigger: 'blur' }
            ]
        },
        {
            type: "input",
            holder: "请输入",
            name: "email",
            label: "邮箱",
            default: "1697910751@qq.com",
            rule: [
                { required: true, message: '请输入', trigger: 'blur' },
                { validator: checkEmail, trigger: 'blur' }
            ]
        },
        {
            type: "statical",
            holder: "请选择",
            name: "param2",
            label: "固定下拉列表",
            default: "选项1",
            data: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ],
            rule: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
            ]
        },
        {
            type: "dynamic",
            holder: "请选择",
            name: "param3",
            label: "动态下拉列表",
            url: "/select",
            rule: [
                { required: true, message: '请选择', trigger: 'change' }
            ]
        },
        {
            type: "radio",
            name: "param4",
            label: "单选按钮",
            data: ["选项一", "选项二"],
            default: "选项一"
        },
        {
            type: "time",
            name: "param5",
            label: "日期选择",
            holder: "请选择",
            default: new Date("2016-02-10"),
            rule: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ]
        },
        {
            type: "switch",
            name: "param6",
            label: "开关按钮",
            on: "on",
            off: "off",
            default: true
        },
        {
            type: "checkBox",
            name: "param7",
            label: "多选按钮",
            data: ["选项一", "选项二", "选项三", "选项四", "选项五"],
            default: ["选项一", "选项二"],
            rule: [
                { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
            ]
        },
        {
            type: "textarea",
            name: "param8",
            label: "文本域",
            default: "默认值",
            rule: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
        }
    ]
}

export default data