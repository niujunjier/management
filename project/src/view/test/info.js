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
        }
    ]
}

export default data