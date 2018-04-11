# npm scripts前端构建项目

## node-sass

node-sass 为了将 SCSS 编译成 CSS

```bash
npm install --save-dev node-sass
```

```json
"scripts": {
  "scss": "node-sass --output-style nested --indent-type tab --indent-width 4 -o dist/css src/scss"
}
```

## 使用 PostCSS 自动给 CSS 加前缀 postcss 与 autoprefixer

```bash
npm install --save-dev postcss-cli autoprefixer
```

```json
"scripts": {
  "autoprefixer": "postcss -u autoprefixer -r dist/css/*"
}
```

## 使用 babel ES6到ES5的转译器

```bash
npm install --save-dev babel-cli babel-preset-env
```

记得要创建一个.babelrc文件

## 混淆压缩 JavaScript 文件 uglify-js

```bash
npm i -D uglify-js
```

```json
"scripts": {
  "uglify": "mkdir -p dist/js && uglifyjs src/js/*.js -m -o dist/js/app.js"
}
```

## 压缩图片 imagemin-cli

```bash
npm i -D imagemin-cli
```

```json
"scripts": {
  "imagemin": "imagemin src/images dist/images -p",
}
```

## 通过 BrowserSync 提供服务、自动监测并注入变更

```bash
npm i -D browser-sync
```

```json
"scripts": {
  "serve": "browser-sync start --server --files 'dist/css/*.css, dist/js/*.js'"
}
```
