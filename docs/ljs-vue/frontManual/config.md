# 全局参数
rsbuild版配置如下。vite版前缀有 VITE_APP_ 的区别。

## .env参数

### .env

```js
BASE_URL // 服务器目录基础位置
PUBLIC_COMPANY_OWNER // 版权所属人
PUBLIC_PROJECT_NAME // 项目名称
```

### .env.development
开发模式配置。
```js
PUBLIC_API_URL // API地址
PUBLIC_GO_HOME // 返回首页
PUBLIC_CAPTCHA_ON_OFF // 其他公共配置，0关，1开
```

### .env.test
测试服务器配置。
```js
PUBLIC_API_URL // API地址
PUBLIC_GO_HOME // 返回首页
PUBLIC_CAPTCHA_ON_OFF // 其他公共配置，0关，1开
```

### .env.production
生产服务器配置。
```js
PUBLIC_API_URL // API地址
PUBLIC_GO_HOME // 返回首页
PUBLIC_CAPTCHA_ON_OFF // 其他公共配置，0关，1开
```

## public/config.js
打包后可直接修改的配置项。
```js
API_OUT_TIME // 请求超时时间，毫秒。
grayStyle // 灰色模式，默认不开启。常用于大事件发生，全站灰色处理。
```