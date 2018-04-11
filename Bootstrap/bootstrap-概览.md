# 概览
---
## 移动设备优先
- 为了确保适当的绘制和触屏缩放，需要在 `<head>` 之中添加 `viewport` 元数据标签。
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

- 在移动设备浏览器上，通过为视口（viewport）设置 `meta` 属性为 `user-scalable=no` 可以禁用其缩放（zooming）功能。
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
```

## 布局容器
Bootstrap 需要为页面内容和栅格系统包裹一个 `.container` 容器。我们提供了两个作此用处的类。注意，由于 `padding` 等属性的原因，这两种 容器类不能互相嵌套。
- `.container` 类用于固定宽度并支持响应式布局的容器。
```html
<div class="container">
  ...
</div>
```

- .container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。
```html
<div class="container-fluid">
  ...
</div>
```

