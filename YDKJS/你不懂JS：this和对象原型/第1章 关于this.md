# 关于this

## 1.1 为什么要用`this`

```js
function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: "Kyle"
}

var you = {
    name: "Reader"
}

identify.call(me);  //KYLE
identify.call(you); //Reader

speak.call(me); //Hello, I'm KYLE
speak.call(you); //Hello, I'm Reader
```

## 1.2 误解

首先先消除一些关于this的错误认识。常见的两种有关this的错误认识，请见下文。

### 1.2.1 指向自身

人们很容易把this理解成指向函数自身。让大家看到`this`并不像我们所想象的那样指向函数本身。

我们想要记录一下函数foo被调用的次数，思考下面代码：
```js
function foo(num) {
    console.log("foo: " + num );
    //记录foo被调用的次数
    this.count++;
}

foo.count = 0;

var i;

for(i=0; i<10; i++) {
    if(i>5) {
        foo(i);
    }
}
// foo: 6 // foo: 7 // foo: 8 // foo: 9

//foo被调用了多少次？
console.log(foo.count); // 0 what the hell?
```

console.log语句产生了4条输出，证明foo()确实被调用了4次，但是foo.count仍然是0.显然从字面意思理解this是错误的。

执行foo.count=0 时，的确像函数对象foo添加了一个属性count。但是函数内部代码this.count中的this并不是指向函数对象，虽然属性名相同，根对象并不相同。

有的开发者因为没弄清楚this，所以就避开使用它，找其他办法来达成目的，比如创建另一个带有count属性的对象。
```js
function foo(num) {
    console.log("foo:" + num);
    //记录foo被调用的次数
    data.count++;
}

var data = {
    count: 0
};

for(var i=0; i<10; i++) {
    if(i>5) {
        foo(i);
    }
}

console.log(data.count);
```
但实际上，还是没能理解this。

如果要从函数对象内部引用它自身，那只用this是不够的。一般来说你需要通过一个指向函数对象的词法标识符(变量)来引用它。

思考下面两个函数：
```js
function foo() {
    foo.count = 4;  //foo 指向它自身
}
setTimeout(function(){
    //匿名函数无法指向自身
},10);
```
第一个函数被称为具名函数，在它内部可以使用foo来引用自身。

但是在第二个例子中，传入setTimeout()的回调函数没有名称标识符（即匿名函数），因此无法从函数内部引用自身。

所以，对于我们例子来说，另一种解决办法是使用foo标识符替代this来引用函数对象：
```js
function foo(num) {
    console.log("foo:" + num);
    //记录foo被调用的次数
    foo.count++;
}
foo.count = 0;

for(var i=0; i<10; i++) {
    if(i>5) {
        foo(i);
    }
}
console.log(foo.count);     //4
```
然而，这个办法同样回避了this的问题，并且完全依赖变量foo的词法作用域。

**另一种方法是强制this指向foo函数对象**：
```js
function foo(num) {
    console.log("foo:" + num);
    this.count++;
}

foo.count = 0;

for(var i=0; i<10; i++) {
    if(i>5) {
        //使用call(..)可以确保this指向函数对象foo本身，就是绑定了foo作用域
        foo.call(foo, i);
    }
}
// foo: 6 // foo: 7 // foo: 8 // foo: 9

//foo被调用了多少次？
console.log(foo.count);
```
这次我们使用了this，没有回避它！

### 1.2.2 它的作用域
第二种常见误解就是，this指向函数的作用域。

需要明确的是，**this在任何情况下都不指向函数的词法作用域**。在JS内部，作用域确实和对象类似，可见的标识符都是它的属性。但是作用域”对象“无法通过JS代码访问，它存在于JS引擎内部。

思考下面代码，this试图(但没成功)跨越边界，使用`this`来隐式引用函数的词法作用域：
```js
//错误示范
function foo() {
    var a =2;
    this.bar();
}

function bar(){
    console.log(this.a);
}

foo();   //ReferenceError: a is not defined
```
这段代码试图通过this.bar()来引用bar()函数。这是**绝对不能成功的**，之后会解释原因。调用bar()的最自然方法是省略前面的this，直接使用词法引用标识符。

此外，编写这段代码的开发者还试图使用this联通foo()和bar()的词法作用域，从而让bar()可以访问foo()作用域的变量a。这也是不可能实现的，你不能使用this来引用一个词法作用域内部的东西。

## 1.3 this到底是什么

this是在运行时进行绑定的，并非在编写(代码)时绑定的，它的上下文(环境)取决于函数调用时的各种条件。this的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式。

当一个函数被调用时，会创建一个活动记录（也叫执行环境或执行上下文）。这个记录会包含函数在哪里被调用(调用栈)、函数的调用方法、传入的参数信息。this就是记录（执行环境/执行上下文）的其中一个属性，会在函数执行过程中用到。

**this既不指向函数自身，也不指向函数的词法作用域**

**this实际上是在函数被调用时发生的绑定，this指向什么完全取决于函数在哪里被调用**。

----