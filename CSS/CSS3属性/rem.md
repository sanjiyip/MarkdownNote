# 相对长度单位 rem

rem的具体长度是参照根元素 `<html>` 来决定，默认情况下，当font-size为100%时，实际的 px 为 16px。

默认下 `<html>` 的 `font-size: 100%`，此时 1 rem = 16px;（16/16*100%）

将 `<html>` 的 `font-size: 62.5%`，此时 1 rem = 10px;（10/16*100%）

如果修改 `<html>` 的 font-size 值时，1 rem 的对应长度也会发生改变。
