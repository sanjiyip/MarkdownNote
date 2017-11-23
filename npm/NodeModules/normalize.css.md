# normalize.css模块的使用（通过 npm 下载的）

## 1. 直接使用

先安装
```bash
npm i -D normalize.css
```

然后直接在 HTML 文档引用normalize.css所在的文件路径
```html
 <!DOCTYPE html>
 <html>
 <head>
 	...
 	<link rel="stylesheet" href="node_modules/normalize.css/normalize.css">
 </head>
 <body>
 	...
 </body>
 </html>
 ```

 ## 2. 在 scss 文档中通过 @import 引入
 
 通过在 scss 文件中引入 normalize.css 模块的地址。
 ```scss
 @import './node_modules/normalize.css/normalize.css';
 ```

 有个疑惑就是，如果上传的 git 的时候，要不要上传 node_modules 这个文件呢，因为我的 scss 引入了模块里面的东西，但是如果都上传，那文件大小岂不是很大吗?