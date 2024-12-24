# 什么是ljs-tools？
## 简介
一款基于V3JS前端框架提供的依赖工具补给包。

它可以帮助前端（尤其是基于若依的开发人员）快速的完成日常开发。ljs-tools依赖于Element-puls，常用的日常性UI可移步 [Element-plus](https://element-plus.org/zh-CN/)  。

## 我们提供了什么？
基于业务衍生的常用组件和方法。常用组件，如：loading，分页，右键菜单等。

我们努力提供了很多，您可以继续浏览下面的内容。

她看起来很好的样子，那我们去安装她吧！

注意：若您使用的是本前端框架V3JS，可跳过ljs-tools的安装和注入，直接使用即可。


### 安装
```
npm i ljs-tools -S
```

### 全局引入
```js
import 'ljs-tools/index.css';
import LjsTools from 'ljs-tools';
app.use(LjsTools);
```

##### 全局变量
```js
// websocket
// this.LJSws

// html转PDF
// this.htmlPdf
```

### 局部引入
```js
import 'ljs-tools/index.css'; main中引入
import { LJSLoading } from 'ljs-tools';
```

##### 局部引入大全
```js
import { 
  // 插件
  LJSLoading,
  Pagination,
  RightMenu,
  DatetypeChooseDate,
  DatetypeChooseDateRange,
  DateRange,
  DictTag,
  Particles,
  TextAbbreviation
  // 方法
  LJSbase,
  LJSnum,
  LJSdate,
  LJSfc,
  LJSecDC,
  LJSsession,
  LJScryptoJs,
  LJSrgbC,
  LJSurl,
  LJSlicense,
  LJSEl,
  LJSWatermark,
  DateRange_spanLimit, // 一般用于DateRange组件
} from 'ljs-tools';
```
