import Mock from 'mockjs'

export default Mock.mock('/select', function (options) {
    let param = JSON.parse(options.body)
    return Mock.mock({
        'responseText': '请求成功',
        'responseCode': 200,
        'results|10': [
            {
                value: Mock.Random.last(),
                label: Mock.Random.cname()
            }
        ]
    })
})