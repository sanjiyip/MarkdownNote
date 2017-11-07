function foo() {
    console.log(this.a);
}
a = 4;
var obj = {
    a: 2,
    foo: foo
};
obj.foo();


-----

function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
};


var a = "oops,global";

obj.foo();

console.log(bar);

bar();
------

"use strict"
function foo() {
    console.log(this.a);
}

function doFoo(fn) {
    fn();
}

var obj = {
    a: 2,
    foo: foo
}

var a = "oops,global";
doFoo(obj.foo);

function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hi,I'm "+identify.call(this);
    console.log(greeting);
}

var me = {
    name: "keyle"
};

var you = {
    name: "Reader"
};

identify.call(me);
identify.call(you);
speak.call(me);
speak.call(you);

function foo(num) {
    console.log("foo:" + num);
    this.count++;
}

foo.count = 0;

for(var i=0; i<10; i++) {
    if(i>5) {
        foo.call(foo, i);
    }
}

console.log(foo.count);


---


function foo() {
    console.log(this.a);
}

var obj = {
    a: 2
};



var a = {x:1, y:2};
function Foo(o) {
    o.x = "changed";
    o = [1, 2, 3];
    o.y = "can I change?";
}

Foo(a);             // 将对象的引用地址的复本传递到函数的形参中

console.log(a.x);   // "changed" 被改变了
console.log(a.y);   // 2 对函数里面的形参重新赋值后,原对象(实参)不再受形参的影响

var a = [1,2,3];
var b = a;
b.push(4);  //[1,2,3,4]
a;
b = ["a", "b", "c"];
b.slice(1);
a;
