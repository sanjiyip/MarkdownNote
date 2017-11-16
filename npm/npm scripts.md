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

而 npm scripts 就是 package.json 文件的一部分。

上面代码是package.json文件的一个片段，里面的scripts字段是一个对象。它的每一个属性（脚本名字可以自定义），对应一段脚本。

比如，`build:scss` 命令对应的脚本是 `node-sass -o dist/css src/scss` 。 这就话就是使用依赖包 node-sass 来将 src/scss下的编译文件输出到 dist/css 文件

### 1. 命令行下使用npm run命令，就可以执行这段脚本。
```bash
$ npm run build:scss
# 等同于执行
$ node-sass -o dist/css src/scss
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
    "build:scss": "node-sass -o dist/css src/scss",
  }
```
- 第五步，通过终端，在 package.json 所在的路径执行 npm run
```
$ npm run build:scss
```
