# ESLint 在项目中使用

## 在 React 项目中使用步骤

### 1.本地安装 ESLint、React 插件、Babel 解析器

```bash
npm i -D eslint eslint-plugin-react babel-eslint
```

### 2.创建 ESLint 配置文件（`.eslintrc.js`）

```js
module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended"],
  env: {
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    codeFrame: false
  },
  rules: {
    strict: 0,
    quotes: ["error", "single", { allowTemplateLiterals: true }]
  }
};
```

## 参考资料

* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

* [Configuring ESLint](http://eslint.cn/docs/user-guide/configuring)

* [利用 ESLint 检查代码质量](http://morning.work/page/maintainable-nodejs/getting-started-with-eslint.html)
