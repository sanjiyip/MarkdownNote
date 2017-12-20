# git 常见问题

## 1. ssh: connect to host github.com port 22: Operation timed out

### 症状：
```bash
git push origin master

ssh: connect to host github.com port 22: Operation timed out 

fatal: Could not read from remote repository.

Please make sure you have the correct access rightsand the repository exists.
```

### 可能造成问题的原因：

第一种可能情况： The reason could be the firewall modification as you are under a network.（防火墙原因）

[ssh: connect to host github.com port 22: Connection timed out](https://stackoverflow.com/questions/15589682/ssh-connect-to-host-github-com-port-22-connection-timed-out)

### 解决办法

重新配置git的ssh

---

## 2. 千万不要在根目录使用 git！！！

解决办法：`rm -rf ~/.git`
