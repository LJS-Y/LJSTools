# 前端运行部署
## 运行+打包
### 本地运行
```
npm run dev
```
### 打包 - 测试环境
```
npm run test
```
### 打包 - 生产环境
```
npm run build
```

## 安装依赖
```
npm install
```
#### 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
```
npm install --registry=https://registry.npmmirror.com
```
## 开发中遇到的问题
1.vite5本地开发存在问题：预加载资源会导致页面出现请求瀑布，导致开发环境页面白屏。此时需清理缓存，重新加载，开发模式可以正常开发。此问题在打包后部署时不存在，可放心使用。
如果您觉得这个问题影响到您的日常工作，可使用 [rsbuil版](https://github.com/LJS-Y/ljs-vue3/tree/main/ljs-vue3-rsbuild) 构建版本尝试日常工作。
