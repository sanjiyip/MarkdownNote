# Promise

Promise 的执行器会立即执行，早于源代码中在它之后的任何代码。

```js
let promise = Promise.reject(42);
promise.catch(function(val) {
  console.log(val);
});
```

当一个对象拥有一个能够接受 resolve 与 reject 参数的 then() 方法时，这个参数就是 thenable 对象。

```js
let p1 = new Promise((resolve, reject)=>{resolve(42)})
p1.then((value)=>throw new Error("Boom!")).catch((error)=>console.log(error.message))
```

传递给执行器中的 resolve 处理函数的参数，会被传递给相应的 Promise 的完成处理函数

```js
let p1 = new Promise(function(resolve, reject) {
  resolve(42);
});
```
