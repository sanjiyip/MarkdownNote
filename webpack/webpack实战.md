```js
module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'  //这个出口编译以后会等等两个文件bundle1和bundle2
  }
};
```