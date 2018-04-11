# **第2章 this全面解析2**

# 2.3 优先级

我们已经了解了函数调用中的this绑定的四条规则，你需要做的就是找到函数的调用位置并判断应当应用那条规则。

但是某个**调用位置**可以应用多条规则该怎么办？答案是，给这些规则设定优先级。

默认绑定的优先级是四条规则中最低的。

### 隐式绑定 VS 显式绑定

隐式绑定和显式绑定哪个优先级更高？看栗子：

```js
function foo() {
    console.log(this.a);
}

var obj1 = {
    a: 2,
    foo: foo
};

var obj2 = {
    a: 3,
    foo: foo
};

obj1.foo();
obj2.foo();

obj1.foo.call(obj2);    //3
obj2.foo.call(obj1);    //2
```
显式绑定优先级比隐式绑定的高。winner：显式绑定。

### new绑定 vs 隐式绑定

new 绑定 和隐式绑定的优先级谁高谁低：看例子

```js
function foo(something) {
    this.a = something;
}

var obj1 = {
    foo: foo
};

var obj2 = {};

obj1.foo(2);
console.log(obj1.a);    //2

obj1.foo.call(obj2, 3);
console.log(obj2.a);    //3

var bar = new obj1.foo(4);
console.log(obj1.a);    //2
console.log(bar.a);     //4
```

结果：new绑定比隐式绑定优先级高。winner：new 绑定。


### new 绑定 vs 显式绑定

new 绑定和显式绑定哪个更优先？ 上例子：
```js
function foo(something) {
    this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1);///bar函数被硬绑定了
bar(2);
console.log(obj1.a);    //2

var baz = new bar(3); //通过 new 调用一个 硬绑定的函数

console.log(obj1.a);    //2
console.log(baz.a);     //3
```
bar被**硬绑定**到obj1上，但是new bar(3)并没有像我们预计的那样把obj1.a修改为3。相反，new修改了硬绑定(到obj1的)调用bar(..)中的this。因为使用了new绑定，我们得到了一个名字为baz的新对象，并且baz.a的值是3。

**为什么要使用 new 调用硬绑定函数呢？直接调用普通函数不是更简单吗？**

之所以要在new中使用硬绑定函数，主要目的是预先设置函数的一些参数，这样在使用new初始化时就可以只传入其余的参数。

bind()的功能之一就是可以把除了第一个参数（第一个参数是用于绑定this）之外的参数都传给下层函数。

举例：
```js
function foo(p1,p2) {
    this.val = p1 + p2;
}

var bar = foo.bind(null, "p1"); //先设置硬绑定函数的一些参数，并将第一个以外的参数，传给以后的下层函数。

var baz = new bar("p2");

baz.val;    //p1p2
```

## **判断this** （重点！！！）
4条规则的优先级，可以按照下面的顺序来进行判断：
1. 函数是否在new中调用（new绑定）？如果是的话 this 绑定的是新创建的对象。

    `var bar = new foo()`

2. 函数是否通过call、apply（显式绑定）或硬绑定调用？如果是的话，this 绑定的是指定的对象。

    `var bar = foo.call(obj2)`

3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话，this 绑定的是哪个上下文对象。

    `var bar = obj1.foo()`

4. 如果都不是的话，使用默认绑定。在严格模式下this绑定到undefined，否则绑定到全局对象。

    `var bar = foo()`

这样，对于正常的函数调用来说，理解了这些，你就明白了 this 的绑定原理。

但，凡事总有例外。


# 2.4 绑定例外

在某些场景下，this的绑定行为会出乎意料，你认为应当应用其他绑定规则是，**实际上应用的可能是默认绑定规则**。

## 2.4.1 被忽略的this
如果你把null 或者 undefined 作为 this 的绑定对象传入 call、apply或者bind，这些值（null或undefined）会被忽略，实际应用的是默认绑定规则：
```js
function foo() {
    console.log(this.a);
}

var a = 2;

foo.call(null); //2
```

### 什么情况下回传入null？

一种非常常见的做法是使用apply()来**展开**一个数组，当作参数传入一个函数。
类似地，bind()可以对参数进行柯里化（即预先设置一些参数），这种方法有时候非常有用：
```js
function foo(a, b) {
    console.log("a:" + a + ",b:" + b);
}

//把数组"展开"成参数
foo.apply(null, [2, 3]);    //a:2, b:3

//使用bind()进行柯里化
var bar = foo.bind(null, 2);
bar(3);     //a:2, b:3
```

然后使用null来忽略this 绑定可能会产生一些副作用。

### **更安全的this**

一种“更安全”的做法是传入一个特殊的对象，把this绑定到这个对象不会对你的程序产生任何副作用。我们可以创建一个“DMZ”对象——一个空的非委托对象。

如果我们在忽略this绑定时总是传入一个DMZ对象（即将this绑定到DMZ对象上），那就不用担心任何事情，因为任何对this的使用都会被现在再这个空对象中，并不会对全局对象产生任何影响。

由于这个对象完全是一个空对象，所以我们用变量名ø表示。

JS中创建一个空对象最简单方法是Object.create(null)。

```js
function foo(a, b){
    console.log("a:" + a + ", b:" + b);
}
//我们的DMZ空对象
var ø = Object.create(null);

//把数组展开参数
foo.apply(ø, [2,3]);    //a:2, b:3

//使用bind()进行柯里化
var bar = foo.bind(ø, 2);
bar(3);     //a:2, b:3
```

使用变量名ø不仅可以让函数变得更俺去，还可以提高代码的可读性，因为ø表示我希望“this是空”，比null的含义更清楚。

## 2.4.2 间接引用

你可能(有意或无意地)创建一个函数的”间接引用“，在这种情况下，调用这个函数会应用默认绑定规则。

间接引用最容易在赋值时发生：
```js
function foo() {
    console.log(this.a);
}

var a = 2;

var o = {
    a: 3,
    foo: foo
};

var p = {
    a: 4
}

o.foo();

(p.foo = o.foo)();  //2
```
赋值表达式p.foo = o.foo 的返回值是目标函数的引用，因此调用位置是foo()而不是p.foo() 或者 o.foo()。


## 2.4.3 软绑定

之前我们已经看过，硬绑定这种方式可以把this 强制绑定到指定的对象（除了使用new时），防止函数调用应用默认绑定规则。问题在于，硬绑定会大大降低函数的灵活性，使用硬绑定之后就无法使用隐式绑定或显式绑定来修改this。

如果可以给默认绑定指定一个全局对象和undefined以外的值，那就可以实现和硬绑定相同的效果，同时保留隐式绑定后者显示绑定修改this的能力。

可以通过一种被称为软绑定的方法来实现我们想要的效果：
```js
//软绑定
if (!Function.prototype.softBind) {
	Function.prototype.softBind = function(obj) {
		var fn = this;
		var	curried = [].slice.call( arguments, 1 );
		var	bound = function bound() {
				return fn.apply(
					(!this ||
						(typeof window !== "undefined" &&
							this === window) ||
						(typeof global !== "undefined" &&
							this === global)
					) ? obj : this,
					curried.concat.apply( curried, arguments )
				);
			};
		bound.prototype = Object.create( fn.prototype );
		return bound;
	};
}
```

除了软绑定之外，softBind()的其他原来和ES5内置的bind()类似。


# 2.5 this词法

我们之前介绍的四条规则已经可以包含所有正常的函数。但是ES6中介绍了一种无法使用这些规则的特殊函数类型：箭头函数。

箭头函数并不是使用function关键字定义的，而是**使用“胖箭头”的操作符 => 定义函数**的。箭头函数不使用this的四种标准规则，而是根据外层（函数或全局）作用域来决定this。

来看看箭头函数的词法作用域：
```js
function foo() {
    //返回一个箭头函数
    return (a) => {
        //this 继承自 foo()
        console.log(this.a);
    };
}

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};

var bar = foo.call(obj1);
bar.call(obj2); //是2，不是3！
```
foo()内部创建的箭头函数会捕获调用时foo()的this。由于foo()的this绑定到obj1，bar(引用箭头函数)的this也会绑定到obj1，箭头函数的绑定无法被修改。（new 也不行！）

箭头函数最常用于回调函数中，例如事件处理器或者定时器：
```js
function foo() {
    setTimeout(()=>{
        //这里的this在此法上继承自foo()
        console.log(this.a);
    }, 100);
}
var obj = {
    a: 2
};
foo.call(obj);  //2
```

箭头函数可以像bind()一样却帮函数的this被绑定到指定对象，此外，其重要性还体现在它用更常见的词法作用域取代传统的this机制。实际上，在ES6之前我们就已经在使用一种几乎和箭头函数完全一样的模式。
```js
function foo() {
    var self = this;//lexcial capture of this
    setTimeout(function(){
        console.log(self.a);
    }, 100);
}

var obj = {
    a: 2
};

foo.call(obj);  //2
```

虽然self = this 和箭头函数看起来可以取代bind()，但本质上说没他们想替代的是this机制、
