import Mock from 'mockjs'

export default Mock.mock('/select', function (options) {
    let param = JSON.parse(options.body)
    return Mock.mock({
        'responseText': '请求成功',
        'responseCode': 200,
        'results': [
            {
                value: '1',
                label: Mock.Random.cname()
            },
            {
                value: '2',
                label: Mock.Random.cname()
            },
            {
                value: '3',
                label: Mock.Random.cname()
            },
            {
                value: '4',
                label: Mock.Random.cname()
            },
            {
                value:'5',
                label: Mock.Random.cname()
            },
            {
                value: '6',
                label: Mock.Random.cname()
            },
            {
                value: '7',
                label: Mock.Random.cname()
            }
        ]
    })
})