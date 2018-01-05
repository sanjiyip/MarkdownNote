# npm scripts

npm 允许在`package.json`文件里面，使用`scripts`字段定义脚本命令。

```json
{
  "name": "psd01",
  "version": "1.0.0",
  "description": "test",
  "main": "index.js",
  "scripts": {
    "build:scss": "node-sass -o dist/css src/scss",
    "autoprefixer": "postcss -u autoprefixer -r dist/css/*",
    "build:css": "npm run build:scss && npm run autoprefixer",
    "watch:css": "onchange 'src/scss/*.scss' -- npm run build:css",
    "watch:js": "onchange 'src/js/*.js' -- npm run build:js",
    "watch": "npm-run-all --parallel watch:*"
  },
  "author": "yip",
  "license": "ISC",
  "devDependencies": {
    "autoprefixer": "^7.1.6",
    "node-sass": "^4.6.1",
    "npm-run-all": "^4.1.2",
    "onchange": "^3.2.1",
    "postcss-cli": "^4.1.1",
    "webpack": "^3.8.1",
    "webpack-dev-server": "^2.9.4"
  }
}
```

## npm scripts 就是 package.json 文件的一部分

上面代码是package.json文件的一个片段，里面的scripts字段是一个对象。它的每一个属性（脚本名字可以自定义），对应一段脚本。

比如，`build:scss` 命令对应的脚本是 `node-sass -o dist/css src/scss` 。 这就话就是使用依赖包 node-sass 来将 src/scss下的编译文件输出到 dist/css 文件

### 1. 命令行下使用npm run命令，就可以执行这段脚本

```bash
npm run build:scss
# 等同于执行
node-sass -o dist/css src/scss
```

这些定义在package.json里面的脚本，就称为 npm 脚本。它的优点很多。

- 项目的相关脚本，可以集中在一个地方。
- 不同项目的脚本命令，只要功能相同，就可以有同样的对外接口。用户不需要知道怎么测试你的项目，只要运行 `npm run test`（脚本名）即可。
- 可以利用 npm 提供的很多辅助功能。

### 2. 查看当前项目的所有 npm 脚本命令

查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的 `npm run` 命令

[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

### 具体实例：

- 第一步，创建文件夹啦（比如 src、dist 等）
- 第二步，通过 `npm init` 来创建 package.json 文件(用来存储 npm 依赖包的信息)
- 第三步，安装你需要的依赖包

    比如：我要使用  node-sass 就是将 scss 转为 css 的插件

    指令：npm install --save-dev node-sass

- 第四步，在 package.json 文件里面的"scripts"添加你需要的脚本名和脚本，比如：

```json
  "scripts": {
    "test": "mocha test",
    "build:scss": "node-sass -o dist/css src/scss",
  }
```

- 第五步，通过终端，在 package.json 所在的路径执行 npm run

```bash
npm run build:scss
```

### 3. npm 脚本的原理非常简单

每当执行`npm run`，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。

因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。

比较特别的是，npm run新建的这个 Shell，会将当前目录的`node_modules/.bin`子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。

这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径。比如，当前项目的依赖里面有 Mocha，只要直接写mocha test就可以了。

```json
{
  "script": {
    "test": "mocha test"
  }
}
```

而不用写成：

```json
{
  "script": {
    "test": "test": "./node_modules/.bin/mocha test"
  }
}
```

最后，在控制台输入：`npm run test`，脚本就可以执行了。

由于 npm 脚本的唯一要求就是可以在 Shell 执行，因此它不一定是 Node 脚本，任何可执行文件都可以写在里面。

### 4. 使用模块`npm bin`的指令方法

CLI（command-line interface，命令行界面）是指可在用户提示符下键入可执行指令的界面，它通常不支持鼠标，用户通过键盘输入指令，计算机接收到指令后，予以执行。

`babel-cli`工具自带一个babel-node命令

Use the `npm bin` command to get the node modules /bin directory of your project

```bash
$(npm bin)/<binary-name> [args]
```

例如：

```bash
$(npm bin)/eslint --init
```

以后记住了：args 是参数

不过前提是要安装了 eslint 这个模块，才能调用这个模块的bin（二进制）指令。
