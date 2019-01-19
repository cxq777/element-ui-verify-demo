import elementUIVerify from 'element-ui-verify-modify'

let errMsgTpl = {

}

let rules = [
    {
        name: "wx",
        getter: () => ({
            pattern: /^[-_a-zA-Z0-9]{5,29}$/,
            message: '微信格式不正确，正确格式长度为6到30位'
        })
    }
]

let config = {
    errorMessageTemplate: errMsgTpl,
    rules: rules
}

export default { elementUIVerify, config }