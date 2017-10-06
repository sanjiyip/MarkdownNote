function createFunctions() {
    var result = new Array();

    for(var i=0; i < 10; i++) {
        //使用的是函数表达式
        result[i] = function(num) {  //闭包~
            return function() {     //重点处——创建另一个匿名函数
                return num;
            };
        }(i);   //这行的 `i` 表示参数，表示函数result[i](i);
    }
    return result;  //这里result是一个具有很多函数的数组
} 

//测试
var test = createFunctions();   //返回的是一个数组，数组里面都是匿名函数
test[0]();  //返回0
test[1]();  //返回1
test[2]();  //返回2

function createFunctions() {
    var result = new Array();

    for(var i=0; i < 10; i++) {
        //使用的是函数表达式
        result[i] = function(num) {  //闭包~
            return function() {     //重点处——创建另一个匿名函数
                return num;
            };
        }(i);   //这行的 `i` 表示参数，表示函数result[i](i);
    }
    return result;  //这里result是一个具有很多函数的数组
} 

function createFunctions() {
    var result = new Array();
    for(var i=0; i < 10; i++){
        (function(num) {
            return function() {
                return num;
            }
        })(i);
    }
    return result;  //这里result是一个具有很多函数的数组
} 
