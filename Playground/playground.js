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
// 
function MyObject() {
    
    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }

    //特权方法
    this.publicMethod = function() {
        privateVariable++;
        return privateFunction();
    };
}

var test = new MyObject();

console.log(test.publicMethod());


// 

var value = 1;

function bar() {
    var value = 2;
    (function(){
        console.log(value);
    })();
}

bar();


var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();  //这个还是要依据function声明的作用域来
}

bar();
