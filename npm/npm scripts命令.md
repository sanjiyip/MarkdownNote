# npm scripts 执行脚本任务

由于 npm 脚本就是 Shell 脚本，因为可以使用 Shell 通配符。

`start`和`test`这样的特殊脚本任务都可以直接执行。

```bash
# 执行"start"指定的脚本
$ npm start
$ npm run start

# 执行"test"指定的脚本
$ npm test
$ npm run test
```

所有其它的脚本任务都必须用`npm run`来执行。`npm run`是`npm run-script`的缩略。

## 管道式命令

- 如果希望同时执行多个任务，可以借用 `Linux` 系统的 管道命令，将两个操作连在一起。

- 在 package.json 文件的 scripts 字段内的一个任务可以由多个子任务组成。

### 管道（|）

`|`：连接两个任务(CLI指令)

```json
"build-js": "browserify browser/main.js | uglifyjs -mc > static/bundle.js"
```

### 串行（&&）

`&&`：任务内部引用其他任务，子任务`先后`执行

```json
"build": "npm run build-js && npm run build-css"
```

### 并行（&）

`&`：任务内部引用其他任务，子任务`平行`执行

```json
"commit": "npm run test & npm run commit"
```

## 复杂脚本

如果是更复杂的脚本任务，我通常会写成`bash`文件，而在`package.json`中指定为脚本任务。

- 下面是一个脚本实例，这个脚本做的事情是把编译好的资源加到一个发布分支，并且把这个分之推送到Heroku上。

```bash
#!/bin/bash

set -o errexit # Exit on error

git stash save -u 'Before deploy' # Stash all changes, including untracked files, before deploy
git checkout deploy
git merge master --no-edit # Merge in the master branch without prompting
npm run build # Generate the bundled Javascript and CSS
if $(git commit -am Deploy); then # Commit the changes, if any
  echo 'Changes Committed'
fi
git push heroku deploy:master # Deploy to Heroku
git checkout master # Checkout master again
git stash pop # And restore the changes
```

- 加上`package.json`的配置后，就可以通过`npm run deploy`命令执行这个脚本了。

```json
"scripts": {
  "deploy": "./bin/deploy.sh"
},
```

