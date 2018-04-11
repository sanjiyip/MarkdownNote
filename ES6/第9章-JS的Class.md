# JS 的 Class

## ES5 中模拟类的写法

```js
function PersonType(name) {
  this.name = name;
}

PersonType.prototype.sayName = function() {
  console.log(this.name);
};

let person = new PersonType("Nicholas");

person.sayName(); //"Nicholas"
```

## 类的声明

### 基本的类声明

类声明以 class 关键字开始，其后是类的名称；剩余部分的语法看起来就像对象字面量中的 方法简写，并且在方法之间不需要使用逗号。

class 声明就是语法糖。

class 的声明

```js
class PersonClass {
  // 等价于构造器 PersonType 函数
  constructor(name) {
    this.name = name;
  }
  // 等价于 PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
}
```

因此，在 PersonClass 中的 sayName() 方法最终成为 PersonType.prototype 的一个属性。

### 为什么要使用类

* 类声明不会被提升，这与函数定义不同。类声明的行为与 let 相似，因此在程序的执行到达声明处之前，类会存在于暂时性死区内。

* 类声明中的所有代码会自动运行在严格模式下。

* 类的所有方法都是不可枚举的。

* 类的所有方法内部都没有 [[Construct]]，因此使 new 调用类的方法会抛出错。

* 调用类 constructor 时不使用 new ，会抛出错误。

* 调用类构造器时不使用 new ，会抛出错误。???

* 试图在类的方法内部重写类名，会抛出错误。

```js
// 等价于上面的 PersonClass 类
let PersonType2 = (function() {
  "use strict";
  // 等价于类中的 constructor(){}
  const PersonType2 = function(name) {
    // 确认函数被调用时使用了 new，因为 new 才能进行 this 绑定
    if (typeof new.target === "undefined") {
      throw new Error("Constructor must be called with new.");
    }
    this.name = name;
  };
  // 等价于类的方法 sayName()
  Object.defineProperty(PersonType2.prototype, "sayName", {
    value: function() {
      // 确认函数被调用时没有使用 new
      if (typeof new.target !== "undefined") {
        throw new Error("Method cannot be called with new.");
      }
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
  return PersonType2;
})();
```

## 类表达式

类表达式被设计用于变量声明，或可作为参数传递给函数。

```js
let PersonClass = class {
  // 等价于 PersonType 构造器
  constructor(name) {
    this.name = name;
  }
  // 等价于 PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
};

let person = new PersonClass("Nicholas");
person.sayName(); // "Nicholas"

console.log(typeof PersonClass); //function
console.log(typeof PersonClass.sayName); //function
```

## 具名类表达式

为此需要在 class 关键字后添加标识符。

```js
let PersonClass = class PersonClass2 {
  constructor(name) {
    this.name = name;
  }

  // 等价于 PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
};

console.log(typeof PersonClass); // "function"
console.log(typeof PersonClass2); // "undefined" 注意
```

此例中的类表达式被命名为 PersonClass2 。 PersonClass2 标识符只在类定义内部存在，因此只能用在类方法内部（例如本例的 sayName() 内）。

在类的外部， typeof PersonClass2 的结果为 "undefined"，这是因为外部不存在 PersonClass2 绑定。

```js
// 等价于上面的 PersonClass 类
let PersonClass = (function() {
  "use strict";
  // 等价于类中的 constructor(){}
  const PersonClass2 = function(name) {
    // 确认函数被调用时使用了 new，因为 new 才能进行 this 绑定
    if (typeof new.target === "undefined") {
      throw new Error("Constructor must be called with new.");
    }
    this.name = name;
  };
  // 等价于类的方法 sayName()
  Object.defineProperty(PersonType2.prototype, "sayName", {
    value: function() {
      // 确认函数被调用时没有使用 new
      if (typeof new.target !== "undefined") {
        throw new Error("Method cannot be called with new.");
      }
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true
  });
  return PersonClass2;
})();
```

## 作为一级公民的类

在编程中，能被当作值来使用的就称为一级公民。意味着它能作为参数传给函数、能作为函数返回值、能用来给变量赋值。

JS 的函数就是一级公民。而且 类也是一级公民。

### 类作为参数传入函数

```js
function createObject(classDef) {
  return new classDef();
}

let obj = createObject(
  class {
    sayHi() {
      console.log("Hi!");
    }
  }
);

obj.sayHi(); // "Hi!"
```

匿名类表达式作为参数，使用了该类的一个实例，并将其返回出来.

### 立即调用类构造器

类表达式的另一个有趣用途是立即调用类构造器，以创建单例（ Singleton ）。

为此，你必须使用 new 来配合类表达式，并在表达式后面添加括号。

```js
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}("Nicholas");

person.sayName(); // "Nicholas"
```

## 访问器属性

ES5 中访问器属性不能直接定义，必须使用 Object.defineProperty()来定义。

ES6 类 class 允许你在原型上定义访问器属性。

为了创建一个 getter ，要使用 get 关键字，并要与后方标识符之间留出空格。如果是 setter，就换成 set 关键字

```js
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }
  get html() {
    return this.element.innerHTML;
  }
  set html() {
    this.element.innerHTML = value;
  }
}

let descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");

console.log("get" in descriptor);
console.log("set" in descriptor);
console.log(descriptor.enumerable);
```

等价于

```js
let CustomHTMLElement = (function(){
  "use strict";
  const CustomHTMLElement = function() {
      const PersonClass2 = function(name) {
    // 确认函数被调用时使用了 new，因为 new 才能进行 this 绑定
    if (typeof new.target === "undefined") {
      throw new Error("Constructor must be called with new.");
    }
    this.element = element;
  };

  Object.defineProperty(CustomHTMLElement.prototype, "html", {
    enumerable: false,
    configurable: true,
    get: function() {
      return this.element.innerHTML;
    },
    set: function(value) {
      this.element.innerHTML = value'
    }
  })
  return CustomHTMLElement;
  }
})();
```

## 可计算的属性名

类方法与类访问器属性也都能使用需计算的名称。

用法，就是用[]来包裹一个表达式。

```js
let methodName = "sayName";

class PersonClass {
  constructor(name) {
    this.name = name;
  }
  [methodName]() {
    console.log(this.name);
  }
}

let me = new PersonClass("Nicholas");

me.sayName();
```

访问器属性能以相同方式使用需计算的名称

```js
let propertyName = "html";
class CustomHTMLElement {
  constructor(element) {
    this.element = element;
  }
  get [propertyName]() {
    return this.element.innerHTML;
  }
  set [propertyName](value) {
    this.element.innerHTML = value;
  }
}
```

## 生成器方法

## 静态方法

静态方法调用直接在类上进行，不能在类的实例上调用。

ES6 的类简化了静态方法的创建，只要在方法与访问器属性的名称前添加正式的 static 标注。

你能在类中的任何方法与访问器属性上使用 static 关键字，但在 constructor 构造器不能用。

```js
class Tripple {
  static tripple(n) {
    n = n || 1;
    return n * 3;
  }
}

class BiggerTripple extends Tripple {
  static tripple(n) {
    return super.tripple(n) * super.tripple(n);
  }
}

console.log(Tripple.tripple()); // 3
console.log(Tripple.tripple(6)); // 18

let tp = new Tripple();

console.log(BiggerTripple.tripple(3)); // 81（不会受父类实例化的影响）

console.log(tp.tripple()); // 'tp.tripple 不是一个函数'.
```

## 使用派生类进行继承

ES6 之前，实现自定义类型的继承是个繁琐的过程。

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

function Square(length) {
  // 此时 Rectangle 不单止是函数，也是对象
  Rectangle.call(this, length, length);
}

Square.prototype = Object.create(Rectangle.prototype, {
  constructor: {
    value: Square,
    enumerable: true,
    writable: true,
    configurable: true
  }
});

let square = new Square(3);

console.log(square.getArea()); //9
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
```

使用熟悉的 extends 关键字来指定当前类所需要继承的函数，即 可。生成的类的原型会被自动调整，而你还能调用 super() 方法来访问基类的构造器。

等价的 ES6

```js
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(length) {
    // 与 Rectangle.call(this, length, length) 相同
    super(length, length);
  }
}

let square = new Square(3);

console.log(square.getArea()); //9
console.log(square instanceof Square);
console.log(square instanceof Rectangle);
```

## 屏蔽类方法

屏蔽父类方法，就是在子类中重写父类的方法

```js
// 它的基类是Rectangle
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
  //重写并屏蔽 Rectangle.prototype.getArea()
  getArea() {
    return this.length * this.length;
  }
}
```

## 继承静态成员

如果基类包含静态成员，那么这些静态成员在派生类中也是可用的。

```js
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  static create(length, width) {
    return new Rectangle(length, width);
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

let rect = Square.create(3, 4);

console.log(rect instanceof Rectangle); //true
console.log(rect instanceof Square); //true
```

基类的静态方法可以被它的派生类使用，不过它并不是派生类的方法，只属于基类的方法

## 从表达式中派生类

extends 后面能接受任意类型的表达式，动态地决定所要继承的类：

```js
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

function getBase() {
  return Rectangle;
}

class Square extends getBase() {
  constructor(length) {
    super(length, length);
  }
}

let x = new Square(3);
console.log(x.getArea());
console.log(x instanceof Rectangle);
```

## 继承内置对象

在 ES6 中的类，其设计目的之一就是允许从内置对象上进行继承。

在 ES6 基于类的继承中， this 的值会先被基类（ Array ）创建，随后才被派生类的构造 器（ MyArray ）所修改。

```JS
class MyArray extends Array {
  // 空代码块
}

let colors = new MyArray();
colors[0] = "red";
console.log(colors.length); // 1
```

## 在类构造器中使用 new.target

在简单情况下，new.target 就等于本类的构造器函数

```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

let obj = new Rectangle(3, 4);
```

类构造器被调用时不能缺少 new ，因此 new.target 属性就始终会在类构造器内被定义。

不过这个值并不总是相同的.

```js
class Rectangle {
  constructor(length, width) {
    console.log(new.target === Rectangle);
    this.length = length;
    this.width = width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length)
  }
}

let obj = new Square(3);  // 输出 false
```

Square 调用了 Rectangle 构造器，因此当 Rectangle 构造器被调用时， new.target 等于 Square。