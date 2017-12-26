# Resume 项目

## 流程：

1. 在 github 上创建名为 Resume 的库

1. 本地 git 库与 github 库关联（创建一个 README）

    ```
    echo "# Resume" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:sanjiyip/Resume.git
    git push -u origin master
    ```

1. 项目目录架构搭建

    ```bash
    ├── src
    │   ├── js
    │   │   ├── main.js
    │   │   ├── plugins.js
    │   │   └── vendor
    │   │       └── modernizr-2.8.3.min.js
    │   ├── img
    │   ├── css
    │   │   └── main.css
    │   ├── favicon.ico
    │   ├── humans.txt
    │   ├── index.html
    │   ├── 404.html
    │   ├── apple-touch-icon.png
    │   ├── browserconfig.xml
    │   ├── crossdomain.xml
    │   ├── robots.txt
    │   ├── tile-wide.png
    │   └── tile.png
    │
    ├── dist
    │
    ├── README.md
    ├── package.json
    ├── .editorconfig
    ```
