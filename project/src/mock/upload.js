import Mock from 'mockjs'

export default Mock.mock('/upload', {
    'responseText': '错误信息responseText',
    'responseCode|199-200': 200
})