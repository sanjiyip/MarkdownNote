# BEM (Block, Element, Modifier) 

## **1. Block的规则**

Block命名应该清晰表达它是什么东西。

 >The block name describes its purpose ("What is it?" — menu or button), not its state ("What does it look like?" — red or big).

**1.1 block组件的Class命名要语义化**
```html
<!-- Correct. The `error` block is semantically meaningful -->
<div class="error"></div>

<!-- Incorrect. It describes the appearance -->
<div class="red-text"></div>
```
**1.2 Block组件不能影响他自身的环境，所以你不应该给block组件设置margin或定位等**

**1.3 在使用BEM时，不能使用tag标签或者ID选择器，只使用className选择器**

**4. Block嵌套**

- Blocks can be nested in each other. （Block之间可以相互嵌套）
- You can have any number of nesting levels.（有多个嵌套层级）
```html
<!-- `header` block -->
<header class="header">
    <!-- Nested `logo` block -->
    <div class="logo"></div>

    <!-- Nested `search-form` block -->
    <form class="search-form"></form>
</header>
```


## **2. Element的规则**
**2.1 Element必须用在block内，不能和block分开使用。**

**2.2 命名Element时，Block与Element之间用双下划线（__）分隔开。**
比如：`block-name__element-name`

举例：
```html
<!-- `search-form` block -->
<form class="search-form">
    <!-- `input` element in the `search-form` block -->
    <input class="search-form__input">

    <!-- `button` element in the `search-form` block -->
    <button class="search-form__button">Search</button>
</form>
```

**2.3 Element的嵌套**
- Elements can be nested inside each other.（**Element之间也可以被任意嵌套**）

- You can have any number of nesting levels.（**Element的嵌套层级也可以任意多级**）

- An element is always part of a block, not another element. This means that element names can't define a hierarchy such as `block__elem1__elem2`.（**一个Element永远只是block的一部分，但是一个Element不能是另一个Element的一部分**。）

- An element is always part of a block, and you shouldn't use it separately from the block.（**再次强调：个Element永远只是block的一部分，所以Element不能离开Block使用**）


```html
<!--
    Correct. The structure of the full element name follows the pattern:
    `block-name__element-name`正确示范
-->
<form class="search-form">
    <div class="search-form__content">
        <input class="search-form__input">

        <button class="search-form__button">Search</button>
    </div>
</form>

<!--
    Incorrect. The structure of the full element name doesn't follow the pattern:
    `block-name__element-name`错误示范
-->
<form class="search-form">
    <div class="search-form__content">
        <!-- Recommended: `search-form__input` or `search-form__content-input` -->
        <input class="search-form__content__input">

        <!-- Recommended: `search-form__button` or `search-form__content-button` -->
        <button class="search-form__content__button">Search</button>
    </div>
</form>
```
- **你可以改变Block的DOM结构，但不用改变Element的名称**。
```html
<div class="block">
    <div class="block__elem1">
        <div class="block__elem2">
            <div class="block__elem3"></div>
        </div>
    </div>
</div>
```
```css
.block {}
.block__elem1 {}
.block__elem2 {}
.block__elem3 {}
```
修改Block的DOM结构：
```html
<div class="block">
    <div class="block__elem1">
        <div class="block__elem2"></div>
    </div>

    <div class="block__elem3"></div>
</div>
```

## **3. Modifier**
Modifier命名是用来修饰外观、状态或行为

- The **modifier name** describes: （**modifier的命名时用来描述**：）
    - its **appearance** （外观）
        - ("What size?" or "Which theme?" and so on — `size--small` or `theme--islands`)

    - its **state** （状态）
        - ("How is it different from the others?" — `disabled`, `focused`, etc.)

    - its **behavior** （行为）
        - ("How does it behave?" or "How does it respond to the user?" — such as `directions--left-top`).

- The modifier name is separated from the block or element name by a double underscore ( `--` ).使用双单线来表示modifier

### **Modifier规则**

**3.1 Modifier 的 Key-value**


Used when the modifier value is important. For example, "a menu with the islands design theme": menu_theme_islands.

The structure of the modifier's full name follows the pattern:

- `block-name--modifier-name--modifier-value`
- `block-name__element-name--modifier-name-modifier-value`

**3.2 You can't use two identical modifiers with different values simultaneously**

```html
<!-- You can't use two identical modifiers with different values simultaneously 
    不能这样做，因为会发生覆盖。
-->
<form class="search-form
             search-form--theme_islands
             search-form--theme_lite">

    <input class="search-form__input">

    <button class="search-form__button
                   search-form__button--size_s
                   search-form__button--size_m">
        Search
    </button>
</form>
```

**3.3 Modifier 不能单独使用，一定要跟在 Block 或者 Element 之后使用。** 如：

- `block-name--modifier-name`
- `block-name__elment-name--modifier-name`

例子：
```html
<!--
    Correct. The `search-form` block has the `theme` modifier with
    the value `islands` 正确示范
-->
<form class="search-form search-form_theme_islands">
    <input class="search-form__input">

    <button class="search-form__button">Search</button>
</form>

<!-- Incorrect. The modified class `search-form` is missing 错误示范--> 
<form class="search-form_theme_islands">
    <input class="search-form__input">

    <button class="search-form__button">Search</button>
</form>
```

[BEM重要概念](https://en.bem.info/methodology/key-concepts/)

## 4. **Mix**

A technique for using different BEM entities on a single DOM node.

Mixes allow you to:

- Combine the behavior and styles of multiple entities without duplicating code.
- Create semantically new UI components based on existing ones.

Example：

```html
<!-- `header` block -->
<div class="header">
    <!--
        The `search-form` block is mixed with the `search-form` element
        from the `header` block
    -->
    <div class="search-form header__search-form"></div>
</div>
```

In this example, we combined the behavior and styles of the search-form block and the search-form element from the header block.

 This approach allows us to s**et the external geometry and positioning** in the header__search-form element, while the search-form block itself remains universal. 
 
 As a result, we can use the block in any other environment, because it doesn't specify any padding. This is why we can call it independent.


----

## BEM命名规范（naming convention）
>BEM的核心觀念是以 **組件化(component)** 進行網頁開發(component-based approach to web development.)核心理念上強調 允許程式碼可分享與重複利用性、完全只使用Class Selector並以功能導向命名而非表述方式(ex. user-info vs fl, mr10)

>In this CSS methodology a `block` is a top-level abstraction of a new component, for example a button: `.btn { }`. This block should be thought of as a parent. 
Child items, or `elements`, can be placed inside and these are denoted by **two underscores** following the name of the block like `.btn__price { }`. 
Finally, `modifiers` can manipulate the **block** so that we can theme or style that particular component **without** inflicting changes on a completely unrelated module. This is done by appending **two hyphens** to the name of the block just like `btn--orange`.

>BEM的意思就是块（block）、元素（element）、修饰符（modifier)

---
## BEM命名模式：
```css
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
```
------

## BEM 最多只有B+E+M三级
>The **Block**, **Element**, **Modifier** methodology (commonly referred to as **BEM**) is a popular **naming convention** for classes in HTML and CSS. 
- Block
- Element
- Modifier

BEM stands for `Block__Element--Modifier`, **not** `Block__Element__Element--Modifier`. （BEM命名规则中：命名类名时，双下划线只能在一个类选择器中出现**一次**）

EXample：

```html
<div class="c-card">
    <div class="c-card__header">
        <h2 class="c-card__title">Title text here</h2>   <!-- 祖父类c-card的孙子元素的类名中，双下划线只出现一次 -->
    </div>

    <div class="c-card__body">

        <img class="c-card__img" src="some-img.png" alt="description">
        <p class="c-card__text">Lorem ipsum dolor sit amet, consectetur</p>
        <p class="c-card__text">Adipiscing elit.
            <a href="/somelink.html" class="c-card__link">Pellentesque amet</a>
        </p>

    </div>
</div>
```
- COP(Component Oriented Programing) 組件導向編程，最近火熱的前端框架React和Angular2，都**強調使用Component當作網頁的最小獨立元件**，面向Component的思考可以更好維護各個細節、附帶整個專案都好維護、Component可以重複利用等好處。所以，就要使用BEM来使得写出来的CSS更易读，可维护。

![](../images/命名前缀.png)
------

## 相关链接
[Battling BEM CSS: 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)

[Scalable CSS - 介紹OOCSS/SMACSS/BEM](http://sj82516-blog.logdown.com/posts/1077348/finish-css-intro-oocss-smacss-bem)

[BEM官方文档](https://en.bem.info/methodology/)

---


## 常用类名（class）关键字
- 布局类：
    - header, footer, container, main, content, aside, page, section
- 包裹类：
    - wrap, inner
- 区块类：
    - region, block, box
- 结构类：
    - hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span
- 列表类：
    - list, item, field
- 主次类：
    - primary, secondary, sub, minor
- 大小类：
    - s, m, l, xl, large, small
- 状态类：
    - active, current, checked, hover, fail, success, warn, error, on, off
- 导航类：
    - nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
- 交互类：
    - tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,
- 星级类：
    - rate, star
- 分割类：
    - group, seperate, divider
- 等分类：
    - full, half, third, quarter
- 表格类：
    - table, tr, td, cell, row
- 图片类：
    - img, thumbnail, original, album, gallery
- 语言类：
    - cn, en
- 论坛类：
    - forum, bbs, topic, post
- 方向类：
    - up, down, left, right
- 其他语义类：
    - btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading