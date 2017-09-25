import Mock from 'mockjs'

export default Mock.mock('/info', function (options) {
    let param = JSON.parse(options.body)
    return Mock.mock({
        'responseText': '请求成功',
        'responseCode': 200,
        'results': {
            param1: '15156158076',
            'param2': 1,
            param3: '选项2',
            param4: '2',
            param5: '2016-01-03',
            param6: '选项二',
            param7: true,
            param8: '选项一,选项二',
            param9: '默认值'
        }
    })
})
