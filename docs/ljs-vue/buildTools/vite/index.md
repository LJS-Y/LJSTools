# ljs-vue3-vite
Vite+Vue3构建的PC端的管理系统。

## 项目结构
```
├── dist                       // 打包文件
├── public                     // 公共文件
│   ├── favicon.ico            // favicon图标
│   └── config.js              // 公共配置。可在打包后的文件中直接修改
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 全局样式、字体、svg、全局业务的js文件等静态资源
│   ├── components             // 全局公用组件
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── tools                  // 全局公用方法，以及若依部分公共方法
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口 加载组件 初始化等
├── .env                       // 公共环境配置
├── .env.development           // 开发环境配置
├── .env.production            // 生产环境配置
├── .env.test                  // 测试环境配置
├── .gitignore                 // git 忽略项
├── index.html                 // html模板
├── package.json               // package.json
└── vue.config.js              // vue.config.js
```
## 技术版本

前端框架版本：vite5+vue3+vue-router4+Element-plus2.3.4。

前端核心库版本：ljs-tools@0.5.21。

基于若依后端服务版本：V~3.8.5。


## 去下载
[github](https://github.com/LJS-Y/ljs-vue3/tree/main/ljs-vue3-vite) <!-- 或者可以添加 .html -->


