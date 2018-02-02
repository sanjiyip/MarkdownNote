# React

React 元素事实上都是 JS 当中的对象，我们可以把 React 元素当作参数或定义到变量中使用。

## 定义组件的两种方式

### 使用 JS class 来定义组件

在使用 JavaScript classes 时，你必须调用 super();组件中的方法才能在继承父类（React.Component）的子类（Square）中正确获取到类型的 this 。

```js
class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Yip"
    };
  }
  render() {
    return (
      <div>
        <p onClick={() => this.props.onClick()}>我的名字：{this.state.name}</p>
      </div>
    );
  }
}
```

### 使用函数定义组件

如果组件不需要定义 this.state 属性（也就是说不用 constructor 构造函数的话）

可以使用函数定义组件这种方式：

```jsx
let component = () => <div onClick={props.onClick}>123</div>;
```

记得把所有的 this.props 替换成参数 props.

我们应用中的大部分简单组件都可以通过函数定义的方式来编写，并且 React 在将来还会对函数定义组件做出更多优化。

另外一部分简化的内容则是事件处理函数的写法，这里我们把 onClick={() => props.onClick()} 直接修改为 onClick={props.onClick} ,

注意不能写成 onClick={props.onClick()} 否则 props.onClick 方法会在 Square 组件渲染时被直接触发而不是等到 Board 组件渲染完成时通过点击触发，又因为此时 Board 组件正在渲染中（即 Board 组件的 render() 方法正在调用），又触发 handleClick(i) 方法调用 setState() 会再次调用 render() 方法导致死循环。
