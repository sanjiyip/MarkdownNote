# JQuery笔记

## jQuery中，事件委托：
```js
$(document).ready(function() {
  $('.tour').on('click', 'button',function() {  // 'button' 就是委托者
    var tour = $(this).closest('.tour');
    var discount = tour.data('discount');
    var message = $('<span>Call 1-555-jquery-air for a $' + discount + ' discount.</span>');
    tour.append(message);
    $(this).remove();
  });
});
```

`.on( events [, selector ] [, data ], handler(eventObject) )` on 的参数 [,]这样的表示可选参数

[,selector]参数表示

类型: String

一个选择器字符串，**用于过滤出被选中的元素中能触发事件的后代元素**。如果选择器是 null 或者忽略了该选择器，那么被选中的元素总是能触发事件。

[jQuery-on()](http://www.jquery123.com/on/)


记住：$().ready(function(){})这个格式
```js
$(document).ready(function(){
	 alert($('img').length);
	}
);
```
