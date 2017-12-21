# git 常见问题

## 问题1

```
ssh: connect to host github.com port 22: Operation timed out
```

### 1.1 可能的原因及解决办法

- 网络发生问题

- SSH 钥匙失效，重新设置

---

## 问题2

```
fatal: refusing to merge unrelated histories
```

导致无法 `git pull`

### 2.1 可能的原因及解决办法

假如我们的源是origin，分支是master，需要这样写来实现合并pull两个不同的项目
```
git pull origin master ----allow-unrelated-histories
```

---

## 问题3

在根目录上进行了 `git init`

### 3.1 解决办法

```
$ rm -rf ~/.git
```

来删掉 .git 配置文件

---

## 问题4
