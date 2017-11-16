/*
 *
 * 模块依赖/管理器
 * 
 */ 

var MyModules = (function Manager(){    //这也是模块
    var modules = {};

    function define(name, deps, impl) { //这也是闭包
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);     //因为调用了modules
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

//定义模块，即使通过调用MyModules()来创建模块

//定义bar模块
MyModules.define("bar", [], function(){ //记住，这个函数在这做参数
    function hello(who) {
        return "Let me introduce:" + who;
    }
    return {    //模块必须有的
        hello: hello
    };
});

//定义foo模块，且foo模块依赖bar模块
MyModules.define("foo", ["bar"], function(bar) {
    var hungry = "hippo";
    function awesome() {    //闭包
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {    //模块必须有
        awesome: awesome
    };
});

//调用模块
var bar = MyModules.get("bar");
var foo = MyModules.get("foo");

console.log(bar.hello("hippo"));
foo.awesome();

/******************************************/

function foo(num) {
    console.log("foo: " + num);
    this.count++;
}
var i = 5;
var data = {
    count: 0
};
foo(i).call(data);
for(var i=0; i<10; i++) {
    if(i>5) {
        foo(i).call(data);
    }
}

console.log(foo.count);

/******************************************/

//显式绑定的一个变种——硬绑定
function foo(){
    console.log(this.a);
}
var obj = {
    a: 2
};

var bar = function() {
    foo.call(obj);      //硬绑定
};

bar();
setTimeout(bar, 100);

/******************************************/

//硬绑定的应用场景1——创建一个包裹函数，传入所有的参数并返回接收到的所有值：
function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

var obj = {
    a: 2
};

var bar = function() {
    return foo.apply(obj, arguments);
};

var b = bar(3); 
console.log(b);

/******************************************/

//硬绑定的应用场景2——创建一个可以重复使用的辅助函数：
function foo(something) {
    consol.log(this.a, something);
    return this.a + something;
}

//简单的辅助绑定函数
function bind(fn, obj) {
    return function() {
        return fn.apply(obj, arguments);
    };
}

var obj = {
    a: 2
};

var bar = bind(foo, obj);

var b = bar(3);
console.log(b);



/**
 * 
 * 数组去从
 * 
 */

var removeDuplicates = function (nums) {
    return Array.from(new Set(nums));
};

