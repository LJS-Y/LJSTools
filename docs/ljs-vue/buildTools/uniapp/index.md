# ljs-uniapp
Uniapp+Vue2构建的移动端的框架（可快速开发：安卓，移动端H5，微信小程序）。

## 项目结构
```
├── assets                     // 静态资源（样式文件，字体文件等）
├── components                 // 自定义公用组件
├── node_modules               // 插件
├── pages                      // 页面
├── request                    // 请求
│   ├── config.js              // 请求配置
│   └── index.js               // 全局请求，配置在此可通过this.$API.common.getInfo()调用请求
├── router                     // 路由守卫
├── static                     // 静态资源（图片）
├── store                      // vuex
│   └── modules               
│       └── permission.js      // 可动态处理底部菜单
├── tools                      // 工具
│   ├── base.js
│   ├── menu.js                // 可手动配置菜单
│   └── permission.js          // 权限
├── uni_modules                // 官方插件
├── .gitignore                 // git 忽略项
├── App.vue                    // 入口页面
├── index.html                 // html模板
├── main.js                    // 入口 加载组件 初始化等
├── manifest.json              // uniapp配置
├── package.json               // package.json
├── pages.json                 // pages.json
├── uni.scss                   // 全局样式变量
└── vue.config.js              // vue.config.js
```

## 技术版本

前端框架版本：uniapp框架+vue2+uni-simple-router2。

前端核心库版本：ljs-sdk-public@0.2.16。

基于若依后端服务版本：V~3.8.5。


## 去下载
[github](https://github.com/LJS-Y/ljs-vue3/tree/main/ljs-uniapp) <!-- 或者可以添加 .html -->


## 说明
该版本只修复bug，不维护新的功能。可移步至uniapp-vue3体验新版框架。