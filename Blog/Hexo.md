# Hexo 博客搭建

## 1 利用 hexo 搭建博客

### 1.1 安装hexo

```
$ npm install hexo-cli -g
```

### 1.2 创建 sanjiyip.github.io 目录

```
$ hexo init sanjiyip.github.io

$ cd sanjiyip.github.io

$ npm install
```

### 1.3 生成静态页面

```
$ hexo clean
$ hexo g
```

> g 即generate

### 1.4 运行

```
$ hexo s
```

> s 即server

然后打开浏览器，输入地址 localhost:4000 即可看到效果

## 2 新增文章

```
$ hexo new <name>
```

此时会在`source/_posts`目录下生成`page.md`文件，输入些许内容，然后保存.

执行以下命令
：
```
$ hexo clean
$ hexo g
$ hexo s
```

## 3 配置

 ### 3.1 `_config.yml` 配置参数[官方文档](https://hexo.io/zh-cn/docs/configuration.html)

常用的参数

- title：网站标题
- subtitle：网站副标题
- description：网站描述
- author：您的名字
- language：网站使用的语言
- timezone：网站时区。

Hexo 默认使用您电脑的时区。时区列表。比如说：America/New_York, Japan, 和 UTC 。

#### 注意：进行配置时，需要在冒号:后加一个英文空格

## 4 换皮肤

比较多人用的 [next主题](https://github.com/iissnan/hexo-theme-next/blob/master/README.cn.md)

### 4.1 下载主题

```
$ mkdir themes/next
$ curl -s https://api.github.com/repos/iissnan/hexo-theme-next/releases/latest | grep tarball_url | cut -d '"' -f 4 | wget -i - -O- | tar -zx -C themes/next --strip-components=1
```

### 4.2 在`_config.yml`配置相应的主题

```yml
theme: next
```

更新博客内容
```
$ hexo clean
$ hexo g
$ hexo s
```

## 5 部署到Github

### 5.1 关联 github（略）

### 5.2 安装 hexo-deployer-git

```
$ npm install hexo-deployer-git --save
```

### 5.3 在 `_config.yml` 中配置deploy

```yml
deploy:
  type: git
  repo: git@github.com:sanjiyip/sanjiyip.github.io.git
  branch: master
```

### 5.4 部署

```
$ hexo d
```

> d 即deploy

## 6 绑定自己的域名

### 6.1 在 Github Pages 仓库添加一个 CNAME 文件

- 文件内只能包括一个顶级域名

```
example.com
```

> 使用用 hexo 框架搭建博客并部署到 Github Pages 上，可以将 CNAME 文件放在 source 文件夹内

### 6.2 向你的 DNS 配置中添加 3 条记录

```
@          A             192.30.252.153
@          A             192.30.252.154
www      CNAME           username.github.io.
```

> 我使用的是 DNSPOD 的服务，具体 DNS 配置 google / 百度

### 6.3 等候生效

- 等十分钟左右，刷新浏览器，用你自己域名访问下试试

## 