# **git 简单教程**

## 版本库（Repository）

工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库。

Git的版本库里存了很多东西，其中最重要的就是称为`stage`（或者叫index）的**暂存区**，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。

![版本库](images/版本库.png)

前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：

- 第一步是用`git add`把文件添加进去，实际上就是把文件修改添加到暂存区；

- 第二步是用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支。

因为我们创建Git版本库时，Git自动为我们创建了唯一一个`master`分支，所以，现在，`git commit`就是往`master`分支上提交更改。

你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改。



![git add](images/gitadd.png)

所以，`git add`命令实际上就是把要提交的所有修改放到**暂存区**（`Stage`），然后，执行`git commit`就可以一次性**把暂存区的所有修改提交到分支**。

当执行了git commit以后，stage区就会如下图一样（清空了，修改的转到分支上了）。

![git commit](images/gitcommit.png)

常用指令：

1. **`git init`——创建本地版本库**

2. **`git add` —— 把工作区的文件添加到本地版本库（的暂存区）**

3. **`git commit -m "summary"` —— 把暂存区的文件提交到本地仓库的分支上**

4. `git status` —— 查看当前仓库的状态（查看哪些文件被修改）

5. `git diff` —— 查看difference（查看被修改的文件内容）

6. `git log` —— 查看提交日志

7. `git reset HEAD file` ——将暂存区修改的文件退回工作区

---

## 远程仓库 Github
**关联远程库和推送到远程库**

**关联一个远程库**

`git remote add origin git@sanjiyip:path/repo-name.git`

（关联一个远程库——前提远程库也有同名的文件夹）

**第一次推送master分支的所有内容**

第一次推送建议：

- 先 **`git pull origin master`**
    - 如果提示出错，请看：
        
        > "git merge" used to allow merging two branches that have no common base by default, which led to a brand new history of an existing project created and then get pulled by an unsuspecting maintainer, which allowed an unnecessary parallel history merged into the existing project. The command has been taught not to allow this by default, with an escape hatch `--allow-unrelated-histories` option to **be used in a rare event** that merges histories of two projects that started their lives independently.

        > You can use `git pull origin master --allow-unrelated-histories` to **force** the merge to happen.

    - `git pull origin master --allow-unrelated-histories` 强制合并两个项目（一般不建议）
    
    - 此时会进入emacs界面，要你写明合并的原因，然后退出emacs就可以了。

    - 退出Emacs
        - 如果想结束一次Emacs会话，可以按下“Ctrl +x Ctrl +c”如果回答“y”则存盘退出，如果输入“n”，Emacs会再次询问是否真的想放弃所做的修改并退出这次必须输入完整的“yes”或“no”。如果回答“no”则会话会持续下去，如果回答是“yes”则退出Emacs，所做的修改也不会保存下来。

- 再 **`git push -u origin master`** 目的是避免冲突

- 以后就直接使用 **`git push origin master`** 进行推送

----

## 克隆远程库

先创建远程库，然后，从远程库克隆。

要克隆一个仓库，首先必须知道仓库的地址，然后使用`git clone`命令克隆。

---

## 设置git的ssh步骤

1. `git config --global user.name "sanjiyip"`
2. `git config --global user.email "sanjiyip@hotmail.com"`
3. `ssh-keygen -t rsa -C "sanjiyip@hotmail.com"`
4. **`cat ~/.ssh/id_rsa.pub`**
5. 查看文件id_rsa.pub的内容，复制内容到github上的ssh key
6. `ssh -T git@github.com`（后面输入yes）

参考资料：
[关于git的ssh问题](http://blog.csdn.net/jingtingfengguo/article/details/51892864)

`git remote set-url origin git@github.com:sanjiyip/TinyProject.git`


---


## 常见问题

**1. Changing a remote's URL （可以ssh或者https）**

比如：
`git remote set-url origin git@github.com:sanjiyip/TinyProject.git` （url不正确的情况下，使用该命令行修改url）

**2. 使用git push origin master出问题**

原因：可能远程库的比本地库的要新，所以要先git pull 再 git push


--

## 相关资料：

[GitBook](https://git-scm.com/book/zh/v2)

[Learn Git Branching](https://learngitbranching.js.org/?demo)

[廖雪峰Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

[Mac 终端命令大全](http://www.jianshu.com/p/3291de46f3ff)