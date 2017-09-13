# BEM命名规范（naming convention）
>BEM的核心觀念是以 **組件化(component)** 進行網頁開發(component-based approach to web development.)核心理念上強調 允許程式碼可分享與重複利用性、完全只使用Class Selector並以功能導向命名而非表述方式(ex. user-info vs fl, mr10)

>In this CSS methodology a `block` is a top-level abstraction of a new component, for example a button: `.btn { }`. This block should be thought of as a parent. 
Child items, or `elements`, can be placed inside and these are denoted by **two underscores** following the name of the block like `.btn__price { }`. 
Finally, `modifiers` can manipulate the **block** so that we can theme or style that particular component without inflicting changes on a completely unrelated module. This is done by appending **two hyphens** to the name of the block just like `btn--orange`.

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

**BEM 最多只有 B+E+M 三级**
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

------

## 相关链接
[Battling BEM CSS: 10 Common Problems And How To Avoid Them](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)

[Scalable CSS - 介紹OOCSS/SMACSS/BEM](http://sj82516-blog.logdown.com/posts/1077348/finish-css-intro-oocss-smacss-bem)

[BEM官方文档](https://en.bem.info/methodology/)

---

## 常用类名（class）关键字
- 布局类：header, footer, container, main, content, aside, page, section
- 包裹类：wrap, inner
- 区块类：region, block, box
- 结构类：hd, bd, ft, top, bottom, left, right, middle, col, row, grid, span
- 列表类：list, item, field
- 主次类：primary, secondary, sub, minor
- 大小类：s, m, l, xl, large, small
- 状态类：active, current, checked, hover, fail, success, warn, error, on, off
- 导航类：nav, prev, next, breadcrumb, forward, back, indicator, paging, first, last
- 交互类：tips, alert, modal, pop, panel, tabs, accordion, slide, scroll, overlay,
- 星级类：rate, star
- 分割类：group, seperate, divider
- 等分类：full, half, third, quarter
- 表格类：table, tr, td, cell, row
- 图片类：img, thumbnail, original, album, gallery
- 语言类：cn, en
- 论坛类：forum, bbs, topic, post
- 方向类：up, down, left, right
- 其他语义类：btn, close, ok, cancel, switch; link, title, info, intro, more, icon; form, label, search, contact, phone, date, email, user; view, loading