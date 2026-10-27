# ljs-vue3-rsbuild-module-platform
Rsbuild+Vue3构建的PC端的模块化管理系统（俗称大平台）。

## 项目结构
```
├── dist                           // 打包文件
├── public                         // 公共文件
│   └── config.js                  // 公共配置。可在打包后的文件中直接修改
├── src                            // 源代码
│   ├── api                        // 所有请求
│   ├── assets                     // 全局样式、字体、svg、全局业务的js文件等静态资源
│   ├── components                 // 全局公用组件
│   ├── router                     // 路由
│   ├── store                      // 全局 store管理
│   ├── tools                      // 全局公用方法，以及若依部分公共方法
│   ├── views                      // view
│   ├── App.vue                    // 入口页面
│   └── index.js                   // 入口 加载组件 初始化等
├── .biomelintrc-auto-import.json  // 自动构建自动生成的文件
├── .browserslistrc                // 兼容浏览器版本配置
├── .env                           // 公共环境配置
├── .env.development               // 开发环境配置
├── .env.production                // 生产环境配置
├── .env.test                      // 测试环境配置
├── .gitignore                     // git 忽略项
├── index.html                     // html模板
├── package.json                   // package.json
└── rsbuild.config.mjs             // rsbuild.config.mjs
```

## 技术版本

前端框架版本：@rsbuild/core1+vue3+vue-router4+Element-plus2.8.5。

前端核心库版本：ljs-tools@0.5.21。

基于若依后端服务版本：V~3.8.5。

## 去下载前端
[github](https://github.com/LJS-Y/ljs-vue3/tree/main/ljs-vue3-rsbuild-module-platform) <!-- 或者可以添加 .html -->

## 获取后端

后端基于若依服务版本：V~3.8.5，进行二次改造，请联系我们获取后端代码。