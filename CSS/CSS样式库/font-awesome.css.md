# font-awesome.css

## 什么是 font-awesome

Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.

换句话说：就是可以自定义的 icons 库（矢量图标）

---

## 如何使用

- 引入 font-awesome.css 文件

```html
<link rel="stylesheet" href="path/font-awesome/css/font-awesome.min.css">
```

- 添加 `<i>` 元素，实现 icon 的插入

```html
<i class="fa fa-camera-retro"></i> fa-camera-retro
```

> class 的值必须有 fa 才能使其生效

- [icon 的 class 值](http://fontawesome.io/icons/)

- [font-awesome 例子](http://fontawesome.io/examples/)：教你如何快速上手 font-awesome

---

## 修改 icon 的样式

- 建议使用 scss 新建一个 `_custom-icon.scss`，然后引入到 `main.scss` 文件中，只要修改你要改的 icons 样式即可。

> 此方法的好处是不用更改库的东西，到时候更新库的时候，能够直接替换。（样式覆盖的原理）
>
> 所以 bootstrap 也能使用这种方法


---

## 使用 Sass 自定义 Font Awesome

- 复制 `font-awesome/` 目录到项目中

- 打开你项目中的 `font-awesome/scss/_variables.scss` 文件，编辑 `$fa-font-path` 变量来指向你的 font 目录。

```scss
$fa-font-path:        "../fonts"
```

> The fonts path is relative from your compiled CSS directory.
>
> 注意：font-awesome/fonts 文件夹路径是相对于你编译后的 font-awesome/css文件夹 而言

- 重新编译 font-awesome 的 scss 文件即可

---

