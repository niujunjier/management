import { checkPhone, checkEmail } from '../../static/utils/check.js'

const data = {
    info: "/information",
    url: "/edit",
    infoFactory(data) {
        let facData = JSON.parse(JSON.stringify(data))
        //your code here 
        for (let key in facData) {
            console.log(key)
            if (key == 'param8')
                facData[key] = facData[key].split(',');
            else if (key == 'param5')
                facData[key] = new Date(facData[key]);
        }
        //以上区域是自定义代码 
        return facData
    },
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
            label: "手机号",
            rule: [
                { required: true, message: '请输入', trigger: 'blur' },
                { validator: checkPhone, trigger: 'blur' }
            ]
        },
        {
            type: "statical",
            holder: "请选择",
            name: "param3",
            label: "固定下拉列表",
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
            name: "param4",
            label: "动态下拉列表",
            url: "/select",
            rule: [
                { required: true, message: '请选择', trigger: 'change' }
            ]
        },
        {
            type: "time",
            name: "param5",
            label: "日期选择",
            holder: "请选择",
            rule: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ]
        },
        {
            type: "radio",
            name: "param6",
            label: "单选按钮",
            data: ["选项一", "选项二"]
        },
        {
            type: "switch",
            name: "param7",
            label: "开关按钮",
            on: "on",
            off: "off"
        },
        {
            type: "checkBox",
            name: "param8",
            label: "多选按钮",
            data: ["选项一", "选项二", "选项三", "选项四", "选项五"]
        },
        {
            type: "textarea",
            name: "param9",
            label: "文本域"
        }
    ]
}

export default data