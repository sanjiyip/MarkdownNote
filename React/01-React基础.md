# React 基础

## HTML 模板

这是因为 React 独有的 JSX 语法，跟 JavaScript 不兼容。

凡是使用 JSX 的地方，都要加上 `type="text/babel"` 。

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      // ** Our code goes here! **
    </script>
  </body>
</html>
```

其次，上面代码一共用了三个库： react.js 、react-dom.js 和 Browser.js ，它们必须首先加载。

- 其中，react.js 是 React 的核心库
- react-dom.js 是提供与 DOM 相关的功能
- Browser.js 的作用是将 JSX 语法转为 JavaScript 语法，这一步很消耗时间，实际上线的时候，应该将它放到服务器完成。

## ReactDOM.render()

ReactDOM.render 是 React 的最基本方法，用于将模板转为 HTML 语言，并插入指定的 DOM 节点。

```jsx
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);
```

## JSX 语法

**HTML 语言直接写在 JavaScript 语言之中，不加任何引号**，这就是 JSX 的语法。

```jsx
var names = ['Alice', 'Emily', 'Kate'];
ReactDOM.render(
  <div>
  {
    names.map(function(name){
      return <div>hello, {name}!</div>
    })
  }
  </div>,
  document.getElementById('example')
)
```

上面代码体现了 JSX 的基本语法规则：

- 遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
- 遇到代码块（以 { 开头），就用 JavaScript 规则解析。
- 在 ReactDOM.render 内，有点像对象写法，不能带分号，只能用逗号隔开

JSX 允许直接在模板插入 JavaScript 变量。如果这个变量是一个数组，则会**展开这个数组的所有成员**。

```jsx
let arr = [
  <h1>Hello world!</h1>,
  <h2>Hello React</h2>
];
ReactDOM.render(<div>{arr}</div>, document.getElementById('example'));
```

## 组件

React 允许将代码封装成组件（component），然后像插入普通 HTML 标签一样，在网页中插入这个组件。

React.createClass 方法就用于生成一个组件类.

```jsx
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```

上面代码中，变量 HelloMessage 就是一个组件类。

- 模板插入 `<HelloMessage/>` 时，会自动生成 HelloMessage 的一个实例（下文的"组件"都指组件类的实例）。

- 所有组件类都必须有自己的 render 方法，用于输出组件。

注意，组件类的第一个字母必须大写，否则会报错，比如HelloMessage不能写成helloMessage。

另外，组件类只能包含一个顶层标签，否则也会报错。(就是最顶层标签不能超过1个)

```jsx
var HelloMessage = React.createClass({
  render: function() {
    return <h1>
      Hello {this.props.name}
    </h1><p>
      some text
    </p>;
  }
});   //报错
```

上面代码会报错，因为HelloMessage组件包含了两个顶层标签：h1和p。

组件的属性可以在组件类的 `this.props` 对象上获取，比如这里的 name 属性就可以通过 this.props.name 读取。

添加组件属性，有一个地方需要注意，就是 class 属性需要写成 className ，for 属性需要写成 htmlFor ，这是因为 class 和 for 是 JavaScript 的保留字。
