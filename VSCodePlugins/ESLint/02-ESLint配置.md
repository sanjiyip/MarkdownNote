# ESLint 配置

有两种主要的方式来配置 ESLint：JS 文件引入和使用配置文件，这里主要讲的是配置文件。

* 使用配置文件

  * 使用 JavaScript、JSON 或者 YAML 文件为整个目录和它的子目录指定配置信息。
  * 可以用 .eslintrc.\* 文件或者在 package.json 文件里的 eslintConfig 字段这两种方式进行配置，ESLint 会查找和自动读取它们或者，你可以在命令行指定一个配置文件。

有很多信息可以配置：

* Environments - 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。
* Globals - 脚本在执行期间访问的额外的全局变量
* Rules - 启用的规则及各自的错误级别

## 定义解析器选项

ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置启用对 ECMAScript 其它版本和 JSX 的支持。

请注意，对 JSX 语法的支持不用于对 React 的支持。

React 适用于特定 ESLint 无法识别的 JSX 语法。如果你正在使用 React 和 想要 React 语义，我们推荐你使用 eslint-plugin-react。

### parserOptions 属性

配置文件`.eslintrc`中使用`parserOptions`属性来设置解析器选项。选项包括：

* `ecmaVersion`：设置为 3， 5 (默认)， 6、7 或 8 指定你想要使用的 ECMAScript 版本。

* `sourceType`：设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块）。

* `ecmaFeatures`：这是个对象，表示你想使用的额外的语言特性:

  * `globalReturn`：允许在全局作用域下使用 return 语句
  * `impliedStrict`：启用全局 strict mode
  * `jsx`：启用 JSX

.eslintrc.json 文件示例：

```js
{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "semi": 2
  }
}
```

## 定义解析器

ESLint 默认使用`Espree`作为其解析器。

### parser 属性

为了表明使用该 npm 模块作为你的解析器，你需要在你的 .eslintrc 文件里指定 `parser` 选项。

例如，下面的配置指定了 Esprima 作为解析器：

```js
{
  "parser": "esprima",
  "rules": {
    "semi": "error"
  }
}
```

以下解析器与 ESLint 兼容：

`Babel-ESLint` - 对 Babel 解析器的包装使其与 ESLint 兼容。

注意，当使用自定义解析器时，为了使 ESLint 在非 ECMAScript 5 特性下正常工作，**配置属性 parserOptions 仍然是必须的**。

解析器被传入 parserOptions，可能会也可能不会使用它们来决定开启哪个特征。

## 定义全局环境

环境定义了预定义的全局变量。可用的环境有：

* `browser` - 浏览器 全局变量。
* `node` - Node.js 全局变量和 Node.js 作用域。
* `es6` - 支持除模块外所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
* `commonjs` - CommonJS 全局变量和 CommonJS 作用域 (仅为使用 Browserify/WebPack 写的只支持浏览器的代码)。

这些环境并不是相互排斥的，所以你可以一次定义多个。

### env 属性

在配置文件里指定环境，使用 `env`，指定你想启用的环境，设置它们为 true。

例如，以下示例启用了 browser 和 Node.js 的环境：

```js
{
    "env": {
        "browser": true,
        "node": true
    }
}
```

## 定义全局变量

当访问未定义的变量时，no-undef 规则将发出警告。如果你想在一个文件里使用全局变量，推荐你定义这些全局变量，这样 ESLint 就不会发出警告了。

你可以使用注释或在配置文件中定义全局变量。

### globals 属性

在配置文件里配置全局变量时，使用 globals 指出你要使用的全局变量。

设置每个变量等于 true 允许变量被重写，或 false 不允许被重写。比如：

```js
{
    "globals": {
        "var1": true,
        "var2": false
    }
}
```

## 配置插件

**ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它**。

### plugins 属性

在配置文件里配置插件，要使用 plugins ，其中包含插件名字的列表。插件名称可以省略 `eslint-plugin-` 前缀。

```js
{
    "plugins": [
        "plugin1",
        "eslint-plugin-plugin2"
    ]
}
```

## 配置规则

ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用哪些规则。改变一个规则设置，你必须设置规则 ID 等于这些值之一：

### rules 属性

使用 rules 连同错误级别和任何你想使用的选项在配置文件中进行规则配置。例如：

```js
{
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"]
    }
}
```

### 定义插件的 rules 属性

配置定义在插件中的一个规则的时候，你必须使用 `插件名/规则ID` 的形式。

```js
{
    "plugins": [
        "plugin1"
    ],
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"],
        "plugin1/rule1": "error"
    }
}
```

在这些配置文件中，规则 `plugin1/rule1` 表示来自插件 plugin1 的 rule1 规则。

注意：当指定从插件来的规则时，确保删除 eslint-plugin- 前缀。ESLint 在内部只使用没有前缀的名称去定位规则。

## 使用配置文件

通过 .eslintrc.\* 和 package.json 来使用。

ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录。当你想对一个项目的不同部分的使用不同配置，或当你希望别人能够直接使用 ESLint，而无需记住要在配置文件中传递什么，这种方式就很有用。

每种情况，配置文件都会覆盖默认设置。

## 配置文件格式（5 种）

我选了其中 2 个 ESLint 支持的配置文件格式：

* `JavaScript` - 使用 `.eslintrc.js` 然后输出一个配置对象。
* `package.json` - 在`package.json` 里创建一个 `eslintConfig` 属性，在那里定义你的配置。

默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。

如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。

### root 属性

为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.\* 文件里的 eslintConfig 字段下设置 `"root": true`。

ESLint 一旦发现配置文件中有 `"root": true`，它就会停止在父级目录中寻找。

```js
{
    "root": true
}
```

## Extending Configuration Files

一个配置文件可以被基础配置中的已启用的规则继承。

### extend 属性

`extends` 属性启用一系列核心规则，就是比如别人写好的规则，你直接引用。

## 使用 "eslint:recommended"

值为 "eslint:recommended" 的 `extends` 属性启用一系列核心规则

JavaScript 格式的一个配置文件的例子：

```js
module.exports = {
  extends: "eslint:recommended",
  rules: {
    // enable additional rules
    indent: ["error", 4],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],

    // override default options for rules from base configurations
    "comma-dangle": ["error", "always"],
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off"
  }
};
```
