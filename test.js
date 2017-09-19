// 判断是否为邮箱地址
function isEmail(emailStr) {
    var reg = /[a-zA-Z]/;
}
//判断是否为QQ号
function isQQ(num) {
    var reg = /^\d{5,12}$/;
    if (reg.test(num)) {
        alert("这是QQ号码");
    }else {
        alert("这不是QQ号码");
    }
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement
}

//编写程序，统计出字符串“want you to know one thing”中字母n和字母o的出现次数。



//查找“asdfjvjadsffvaadfkfasaffdsasdffadsafafsafdadsfaafd,该字符串中有多少个af”

//第二题：输入任意一个字符串，如：“abDEe23dJfd343dPOddfe4CdD5ccv!23rr”。取出该字符串中所有的字母。顺序不能改变！并把大写字母变成小写，小写字母变成大写！