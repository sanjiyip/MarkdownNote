# ESLint 基础

ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。

## 安装和使用

有两种方式安装 ESLint： 全局安装和本地安装。

### 本地安装和使用

如果你想让 ESLint 成为你项目构建系统的一部分，我们建议在本地安装。你可以使用 npm:

```bash
npm install eslint --save-dev
```

紧接着你应该设置一个配置文件，终端输入：

```bash
./node_modules/.bin/eslint --init
```

之后，你可以在你项目根目录运行 ESLint：

```bash
./node_modules/.bin/eslint yourFile.js
```

### 全局使用和安装

如果你想使 ESLint 适用于你所有的项目，我们建议你全局安装 ESLint。你可以使用 npm：

```bash
npm install -g eslint
```

设置一个配置文件：

```bash
eslint --init
```

之后，你可以在任何文件或目录运行 ESLint：

```bash
eslint yourFile.js
```

**使用全局安装的 ESLint 时，你使用的任何插件或可分享的配置也都必须在全局安装**。

注意：eslint --init 适用于对某个项目进行设置和配置 ESLint，并在其运行的的目录执行本地安装的 ESLint 及 插件。

## ESLint 配置

运行 `eslint --init` 之后，`.eslintrc` 文件会在你的文件夹中自动创建。

你可以在 `.eslintrc` 文件中看到许多像这样的规则：

```json
{
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  }
}
```

"semi" 和 "quotes" 是 ESLint 中 规则的名称。

数组中的第一个值是错误级别，可以使下面的值之一：

* "off" or 0 - 关闭规则
* "warn" or 1 - 将规则视为一个警告（不会影响退出码）
* "error" or 2 - 将规则视为一个错误 (退出码为 1)

你的 `.eslintrc` 配置文件可以包含下面的一行：

```json
"extends": "eslint:recommended"
```

这是 ESLint 官方推荐的规则。
