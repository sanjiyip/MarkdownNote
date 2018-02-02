# npm 入门

## 1. 什么是 npm

### **1.1 node.js**

要了解 npm 是什么，首先要知道 node.js，且安装它。

> node.js 是另一个可以运行 Javascript 的运行环境（还有一个当然是我们的浏览器环境啦）。它使用 C++编写的。然后，可以通过编写 node.js 模块分享到 npm 上面。

在**命令行界面**可以通过输入 node 来**进入 node.js 环境**，然后执行 js 的代码

```js
node; //在命令行内输入 node 就可以进入nodejs运行环境，执行js代码
console.log("hi node.js");
```

### **1.2 npm**

npm 又是什么呢？npm 全称叫**Node package manager**，是 Node.js 的模块依赖管理工具。

> npm makes it easy for JavaScript developers to share the code that they've created to solve particular problems, and for other developers to reuse that code in their own applications.

These bits of **reusable code** are called **packages** or **modules**.

* A package is just a directory with one or more files in it, along with a file called "package.json" that contains metadata about the package.

换言之，npm 就是让 JS 程序员分享和复用**模块**代码的一个**平台**。（里面有好多好多模块可以让我们使用。在这里我理解，比喻成是将每个模块想象成一块积木，而程序员就是玩积木的小孩，npm 就是积木桶，我们从积木桶里面挑选自己喜欢的积木，通过组合，搭建属于我们自己的积木城堡（app））。

### **1.3 npm 的 3 大组成部分**

npm is made up of three distinct pieces: (npm 由三部分组成)

* **找模块包**

- **the website**: the website serves as the primary tool for users to **discover packages**.

**查看模块包信息**

* **the registry**: the registry is a large database of **information about packages**.

**使用 CLI（命令行界面）下载模块包**

* **the CLI** : the CLI is how developers **publish their packages** on the registry or **download packages** they wish to install.

---

## 2. **npm 操作指令**

### 2.1 查找 node 和 npm 的安装位置

* `which npm` —— 查找 npm 安装的位置

* `which node` —— 查找 node.js 安装的位置

### 2.2 npm 命令详情查询

* `npm help <command>` —— 可查看某条命令的详细帮助，例如 `npm help install`

* `npm -v` —— 查看 npm 的版本信息

### 2.3 **使用 npm 命令安装模块**

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有`-g`而已。

* **本地安装**

  * `npm install <module name>`

  * `npm install <module name> --save-dev` (前提必须有 package.json 文件)

  1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 **node_modules** 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。

  2. 可以通过 **require()** 来引入本地安装的包。

* **全局安装**

  * `npm install <module name> -g`

  1. 将安装包放在 /usr/local 目录下或者你 node 的安装目录。

  2. 可以直接在**命令行**（也就是终端）里使用。

* 举例：

  * `npm install underscore` —— 本地安装

  * `npm install underscore -g` —— 全局安装

### 2.4 通过 **require()** 来引入本地安装的包(**重要**)

* `require('<Module Name>')` —— 导入安装好的包

安装好之后，underscore 包就放在了工程目录下的 **node_modules 目录**中，在需要导入 underscore 模块的 JS 文件（JS 文件必须在工程目录内）中添加下面第一行代码，就可以实现模块的导入，无需指定第三方包路径。

```js
var underscore = require("underscore");

//就可以调用underscore模块内部的API，比如underscore库里面的map方法
underscore.map();
```

这样就可以**调用导入的模块里面函数**（方法）。

### 2.5 **创建模块**

**创建模块，package.json 文件是必不可少的**。我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。

* `npm init` —— 生成并初始化**package.json**文件

* **package.json**（非常重要）
  * npm 命令运行时会读取当前目录的 package.json 文件和解释这个文件。
    > 在这个文件里你可以定义你创建的模块的**应用名称( name )**、**应用描述( description )**、**关键字( keywords )**、**版本号( version )**、**应用的配置项( config )**、**主页( homepage )**、**作者( author )**、**资源仓库地址( repository )**、**bug 的提交地址( bugs )**、**授权方式( licenses )**、**目录( directories )**、**应用入口文件( main )**、**命令行文件( bin )**、**应用依赖模块( dependencies )**、**开发环境依赖模块( devDependencies )**、**运行引擎( engines )** 和 **脚本( scripts )** 等。

详情请查阅：[The Basics of Package.json in Node.js and npm](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm?utm_source=nodeweekly&utm_medium=email)

### 2.6 npm 常用命令

* `npm list -g` —— 查看所有全局安装的模块的版本号

* `npm list <Module Name>` —— 查看某个路径下的某个模块的版本号（要先到  那个路径才使用指令）

* `npm uninstall <Module Name>` —— 卸载 Node.js 模块，例如 `npm uninstall underscore`

* `npm update <Module Name>` —— 更新模块

* `npm search <Module Name>` —— 搜索模块

### 2.7 使用淘宝 NPM 镜像来安装包

大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。淘宝 NPM 镜像是一个完整 `npmjs.org` 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10 分钟 一次以保证尽量与官方服务同步。你可以使用淘宝定制的 **cnpm** (gzip 压缩支持) 命令行工具代替默认的 npm:

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

> npm config set registry https://registry.npm.taobao.org

可以加快 npm install 速度

---

## 3. **package.json**

3.1 dependencies、devDependencies 和 peerDependencies 区别

> "dependencies": These packages are required by your application in production.
> "devDependencies": These packages are only needed for development and testing.

* 区别就是 dependencies 是对产品而言，而 devDependencies 对开发而言

* `--save-dev` 的含义是代表把你的模块包信息写入 package.json 文件的 devDependencies 字段中。(这是开发阶段的依赖包)

* `--save` 的含义是代表把你的模块包信息写入 package.json 文件的 dependencies 字段中。

参考资料：

* [npm 官方文档](https://docs.npmjs.com/getting-started/what-is-npm)
* [An Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm)

* [The Basics of Package.json in Node.js and npm](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm?utm_source=nodeweekly&utm_medium=email)

---

## --save-dev 与 --sav

--save-dev 的包开发时的辅助工具（测试、打包工具都应该放在--save-dev）

--save 则是上线要用到的包
