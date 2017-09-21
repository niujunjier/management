export const checkPhone = (rule, value, callback) => {
    if (!(/^1[34578]\d{9}$/.test(value))) {
        callback(new Error('手机号格式错误'));
    }else{
        callback()
    }
};

export const checkEmail = (rule, value, callback) => {
    if (!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(value))) {
        callback(new Error('邮箱格式错误'));
    }else{
        callback()
    }
}