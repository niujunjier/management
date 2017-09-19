import Mock from 'mockjs'

// export default Mock.mock('/', {
//     'pageNo|1-50': 1,    //随机产生1-50的数字，1没有实际意义，只是表示数据类型
//     'pageSize': 50,      //总页码数
//     'list|1-10': [{    //随机产生1-10组数据
//         'ID|+1': 1,   //初始值为1，之后每次+1
//         'age|20-80': 1,
//         boolean: Mock.Random.boolean(),  //随机生成一个布尔值 
//         date: Mock.Random.date('yyyy-MM-dd'), //随机生成一个日期  
//         time: Mock.Random.time('HH:mm:ss'),//随机生成时间  
//         datetime: Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),  //随机生成日期时间
//         currentTime: Mock.Random.now(),  //返回当前时间
//         englishText: Mock.Random.paragraph(),  //随机生成一段英文文本
//         chineseText: Mock.Random.cparagraph(),  //随机生成一段中文文文本
//         sentence: Mock.Random.csentence(3, 10),   //随机生成一句话，字数为3-10
//         word: Mock.Random.word(3, 10),           //随机生成一个单词，字符为3-10
//         efirstName: Mock.Random.first(),         //随机生成一个常见的英文名
//         elastName: Mock.Random.last(),         //随机生成一个常见的英文姓
//         ename: Mock.Random.name(),         //随机生成一个常见的英文姓名
//         cfirstName: Mock.Random.cfirst(),         //随机生成一个常见的中文名
//         clastName: Mock.Random.clast(),         //随机生成一个常见的中文姓
//         cname: Mock.Random.cname(),         //随机生成一个常见的中文姓名
//         color: Mock.Random.color(),   //随机生成一个格式为#RRGGBB的颜色
//         rgb: Mock.Random.rgb(),     //随机生成一个格式为rgb(r, g, b)的颜色
//         image: Mock.Random.image('200x100', '#ffcc33', '#FFF', 'png', '!'),  //随机生成200x100，图片的背景色为#ffcc33，文字为！，文字颜色为#fff，格式为png的图片
//         oUrl: Mock.Random.url('http', '8080'),   //随机生成一个http协议，端口号为8080的url
//         email: Mock.Random.email(),      //随机生成一个邮件地址
//         oIp: Mock.Random.ip(),           //随机生成一个ip地址
//         province: Mock.Random.province(),  //随机生成一个（中国）省（或直辖市、自治区、特别行政区）
//         city: Mock.Random.city(),  //随机生成一个（中国）市
//         city2: Mock.Random.city(true),  //随机生成一个（中国）省和市
//         county: Mock.Random.county(),  //随机生成一个（中国）县
//         address: Mock.Random.county(true),  //随机生成一个（中国）省市县
//         zipCode: Mock.Random.zip(),          //随机生成一个邮政编码（六位数字）
//         idCard: Mock.Random.id(),            //随机生成一个 18 位身份证
//         goodName: Mock.Random.pick(['衣服', '鞋子', '帽子', '裤子', '裙子']),  //从数组中随机选取一个元素，并返回
//     }]
// })
export default Mock.mock('/', function (options) {
    let param = JSON.parse(options.body)
    return Mock.mock({
        'responseText': '请求成功',
        'responseCode': 200,
        'pageNo': param.pageNo,
        'pageSize': 50,
        'count': 500,
        'results|10': [
            {
                str: Mock.Random.cname(),
                tag: '1,2,3,4',
                'status|0-1': 1
            }
        ]
    })
})
