import Mock from 'mockjs'

export default Mock.mock('/info', function (options) {
    let param = JSON.parse(options.body)
    return Mock.mock({
        'responseText': '请求成功',
        'responseCode': 200,
        'results|10': {
            param1: Mock.Random.name(),
            'param2|0-1': 1,
            param3: Mock.Random.name(),
            param4: Mock.Random.name(),
            param5: Mock.Random.name(),
        }
    })
})
