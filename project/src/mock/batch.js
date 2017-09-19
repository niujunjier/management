import Mock from 'mockjs'

export default Mock.mock('/batch', function (options) {
    let param = JSON.parse(options.body)
    return Mock.mock({
        'responseText': '错误信息responseText',
        'responseCode': 200
    })
})