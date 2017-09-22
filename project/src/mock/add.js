import Mock from 'mockjs'

export default Mock.mock('/add', {
    'responseText': '错误信息responseText',
    'responseCode|199-200': 200
})