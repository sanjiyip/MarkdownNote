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



