# 为什么有了它？
## 介绍
起初若依没有出vue3的分离板，他们可能正在做这个事情，而我们需要一个vue3的版本满足老板和客户的要求，所以我就开始着手准备。

后来若依有了vue3的分离板，用的是ts！我的天哪！我不会这个玩意呀！我学不会呀！怎么办呀！我只好继续努力完善之前的工程。

so，你看到了，有了它！

若依原有的，它应该都有的哦。

### 去下载
[github](https://github.com/LJS-Y/ljs-vue3) <!-- 或者可以添加 .html -->

[Gitee（暂不维护）](https://gitee.com/ljs-framework/ljs-vue3) <!-- 或者可以添加 .html -->

### 运行前
1.您需要先运行若依分离板V3.8.5后端服务。
2.配置.env.development服务地址。
```
VITE_APP_API_URL = '//192.168.1.100:8080'
```

### 部署前
1.您需要同时部署若依分离板V3.8.5后端服务。
2.配置.env.test或.env.production服务地址。
```
VITE_APP_API_URL = '/dev-api'
```
```
VITE_APP_API_URL = '/prod-api'
```
