# git 常见问题

## 1 问题 git push 时出现 Connection timed out 的问题

（缘由：图书馆网络导致无法git push， 一开始我还以为是我 SSH KEY 无效...）

```bash
$ git push
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

### 1.1 可能的原因

- 当前网络发生问题（比如当前网络防火墙关闭了22端口）

  - Sometimes, firewalls refuse to allow SSH connections entirely.

### 1.2 解决办法

- 1.2.1 改用 https 协议

  - 不想用，因为 https 每次都要询问用户名，密码太烦了。

- 1.2.2 改用别的网络（比如手机移动网络来 git push）

  - 能解决问题

### 1.3 参考

- [Using SSH over the HTTPS port](https://help.github.com/articles/using-ssh-over-the-https-port/)

---

## 2 问题

```bash
fatal: refusing to merge unrelated histories
```

- 导致无法 `git pull` 的问题

### 2.1 可能的原因及解决办法

假如我们的源是origin，分支是master，需要这样写来实现合并pull两个不同的项目

```bash
git pull origin master ----allow-unrelated-histories
```

---

## 3 问题

- 在根目录上进行了 `git init`

### 3.1 解决办法

- 来删掉 .git 配置文件

```bash
$ rm -rf ~/.git
```

---

## 问题4