# BS dropdown

## 关键属性

- `class = "dropdown"`

- `class = "dropdown-toggle"` `data-toggle = "dropdown"` :必须要！

- `class = "dropdown-menu"`

- `class="dropdown-item"`

## 实例

- 下拉菜单最外层的包裹元素设类名为`.dropdown`

- 下拉触发元素（`<button>` 或 `<a>` 元素）以及下拉菜单的所有元素都要将 css 属性：`position: relative;`

- 使用 `<button>` 或 `<a>` 元素则由你的需要决定。

```html
<li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">TEAM</a>
  <div class="dropdown-menu">
    <button class="dropdown-item" href="#">Action</button>
    <button class="dropdown-item" href="#">Disabled action</button>
  </div>
</li>
```
