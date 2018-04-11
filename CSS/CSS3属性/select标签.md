# select标签相关的问题

## 下来菜单的格式
```html
<select>
    <option>GZ</option>
    <option>SZ</option>
    <option>ZS</option>
</select>
```

## 如何改变select标签的默认小图标（箭头）
```css
select {
    width:108px;
    height:54px;
    /* 清除边框 */
    border: 0;
    /* 清除select默认样式 */
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
    /* 下面这句是改变select标签的默认小箭头图标 */
    background: url(images/web/down.png) 96% / 15% no-repeat #ffe13e;    
    font-size: 18px;
    border-right: 1px solid #ffffff;

}
```

### 解释一下
```css
select {
    background: url(images/web/down.png) 96% / 15% no-repeat #ffe13e; 
} 
```
- 其中**96%**表示举例最左边的距离，越大距离左边越远。
- 而斜杠后面的**15%**，表示图标的大小
- no-repeat：你懂得，就是不重复。