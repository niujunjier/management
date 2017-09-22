const data = {
    listUrl: "/",
    title: "测试列表",
    search: [
        {
            type: "input",
            label: "输入框",
            holder: "请输入",
            name: "search1"
        },
        {
            type: "statical",
            label: "固定下拉列表",
            holder: "请选择",
            name: "search2",
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
            ]
        },
        {
            type: "dynamic",
            label: "动态下拉列表",
            holder: "请选择",
            name: "search3",
            url: "/select"
        },
        {
            type: "time",
            label: "时间选择",
            holder: "请选择",
            name: "time"
        }
    ],
    addConfig: {
        text: "测试添加",
        path: "/addTest",
        url: "/addTest"
    },
    row: [
        {
            name: "字符串",
            value: "str",
            type: "str"
        },
        {
            name: "状态",
            value: "status",
            fitter: {
                1: "是",
                0: "否"
            },
            type: "status"
        },
        {
            name: "标签",
            value: "tag",
            type: "tag"
        }
    ],
    lineOption: [
        {
            type: "delete",
            url:"/delete"
        },
        {
            type: "information",
            path:"infoTest"
        },
        {
            type: "edit",
            info: "/information",
            url:"/edit",
            path:"testEdit"
        }
    ],
    options: [
        {
            text: "导出",
            type: "downLoad",
            url: "/test"
        },
        {
            text: "批量操作",
            type: "batch",
            url: "/batch"
        },
        {
            text: "导入",
            type: "upLoad",
            url: "/upload"
        }
    ]
}

export default data