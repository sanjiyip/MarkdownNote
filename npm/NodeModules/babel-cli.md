# Babel 转码器

是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。

# 配置文件.babelrc

Babel 的配置文件是`.babelrc`，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。

该文件用来设置转码规则和插件，基本格式如下。

```json
{
  "presets": ["env"],
  "plugins": []
}
```

**注意，以下所有 Babel 工具和模块的使用，都必须先写好.babelrc**。

# 命令行转码babel-cli

Babel 提供`babel-cli`工具，用于**命令行转码**。

它的安装命令如下。

```bash
# 将babel-cli安装在项目之中
$ npm i -D babel-cli
```

### 基本用法如下:(这写都可以写在"script"内，作为脚本)
```bash
# 转码结果输出到标准输出
$ babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
$ babel example.js --out-file compiled.js
# 或者
$ babel example.js -o compiled.js

# 整个目录转码 (很重要！)
# --out-dir 或 -d 参数指定输出目录
$ babel src --out-dir lib
# 或者
$ babel src -d lib

# -s 参数生成source map文件
$ babel src -d lib -s
```

上面代码是在全局环境下，进行 Babel 转码。这意味着，如果项目要运行，全局环境必须有 Babel，也就是说项目产生了对环境的依赖。

另一方面，这样做也无法支持不同项目使用不同版本的 Babel。

### 解决办法：将`babel-cli`安装在项目之中。

1. 安装在项目中
```bash
# 安装在项目中
$ npm install --save-dev babel-cli
```

2. 然后，改写项目中的`package.json`文件。

```json
{
  // ...
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel src -d lib"
  }
}
```

3. 转码的时候，就执行下面的命令。

```bash
$ npm run build
```

# babel-node


babel-cli工具自带一个`babel-node`命令，提供一个支持 ES6 的 REPL 环境。它支持 Node 的 REPL 环境的所有功能，而且**可以直接运行 ES6 代码**。

它不用单独安装，而是随babel-cli一起安装。然后，执行babel-node就进入 REPL 环境。

babel-node命令可以直接运行 ES6 脚本。将上面的代码放入脚本文件es6.js，然后直接运行。

```bash
$ $(npm bin)/babel-node
> (x => x * 2)(1)
2
```

# babel-register (可以在终端运行 js 代码)

下一个常用的运行 Babel 的方法是通过 babel-register。这种方法只需要引入文件就可以运行 Babel，或许能更好地融入你的项目设置。

但请注意**这种方法并不适合正式产品环境使用**。 直接部署用此方式编译的代码不是好的做法。 在部署之前预先编译会更好。 

不过用在构建脚本或是其他本地运行的脚本中是非常合适的。

让我们先在项目中创建 index.js 文件。文件中输入代码：

```js
console.log("Hello world!");
```

如果我们用 `node index.js` 来运行它是不会使用 `Babel` 来编译的。所以我们需要设置 `babel-register`。.

首先安装 babel-register。

接着，**在项目中创建** `register.js` 文件（和 index.js 在同一个目录下）并添加如下代码：
```js
require("babel-register");
require("./index.js");
```

这样做可以把 `Babel` **注册**到 Node 的模块系统中并开始编译其中 require 的所有文件。

现在我们可以使用 `register.js` 来代替 `node index.js` 来运行了。

```bash
$ node register.js
```

**注意：** 你不能在你要编译的文件内同时注册 Babel，因为 node 会在 Babel 编译它之前就将它执行了。




