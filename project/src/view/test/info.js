const data = {
    url: "/info",
    content: [
        {
            type: "line",
            text: "分割线"
        },
        {
            type:"view",
            name: "param1",
            label: "测试一"
        },
        {
            type:"status",
            name: "param2",
            label: "测试二",
            filter:{
                1:"是",
                0:"否"
            }
        },
        {
            type:"viewArea",
            name: "param3",
            label: "测试三"
        }
    ]
}

export default data