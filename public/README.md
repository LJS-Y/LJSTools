# ljs-tools

Vue3 前端工具库与常用组件全家桶（基于 Element Plus）：日期/数字/判空/字典/树处理/表单输入限制/国密 SM2-SM4 加解密/水印/脱敏/HTML 转 PDF/WebSocket/MQTT + 9 个常用组件——若依等中后台项目装一个包，业务工具开箱即用。

> English: Vue3 utility toolkit and common-component bundle built around Element Plus — dates/numbers/empty-check/dict/tree/form-input guards/GM crypto (SM2-SM4)/watermark/masking/HTML-to-PDF/WebSocket/MQTT plus 9 ready-made components. One package for admin dashboards (RuoYi-style projects).

# 功能

**15 个方法库**（`app.use` 后挂载为 `$LJSxxx` 全局属性，也可局部解构）：

| 挂载名 | 能力域 | 核心 API |
| --- | --- | --- |
| `$LJSbase` | 判空/树/字典/拷贝 | fieldCheck、handleListTree、handleTreeList、getTreeParents、selectDictLabel、dictDataChange、deepCopy、objectCopy、setRemUnit、getWindowRatio、downloadImage、imageFileToBase64、colorLog、editTreeParentIdCheck |
| `$LJSnum` | 数字 | numberB0、moneySplit、numberCeil、longNumText、numberChangeDecimal、averageNum |
| `$LJSdate` | 日期 | formatTime、customizedDate、dateQjChange、timeRunDistance、initSearchDate、initSearchDateQj |
| `$LJSfc` | 表单输入 | numCheck、numDxsCheck、numBlurCheck、numEnCheck、downloadBlobData、pickerOptions、pickerOptionsDynamic |
| `$LJSecDC` | ECharts | pieChange（饼图数据） |
| `$LJSsession` | 存储 | getSS/setSS/delSS/clearSS、getLS/setLS/delLS/clearLS、clearVuex |
| `$LJScryptoJs` | 常用加密 | setDES/getDES、setSha256、setMD5 |
| `$LJSsm` | 国密 | SM2Util（generateKeyPair/encrypt/decrypt/sign/verify）、SM3Util.digest、SM4Util（generateKey/encrypt/decrypt） |
| `$LJSrgbC` | 颜色 | c16ToRgb、rgbToC16、random16Color |
| `$LJSurl` | 地址/文件 | getUrlAllParameter、getUrlParameter、getFileType、getFileName、isIPValid、isIPV4ValidIP、isIPV6ValidIP、formatParamsByAscii |
| `$LJSEl` | Element Plus | delMessageBox（删除确认框） |
| `$LJSWatermark` | 水印 | set |
| `$LJSprivacy` | 脱敏 | desensitizationName、desensitizationPhone、desensitizationStr |
| `$LJSmenu` | 菜单 | fristOpenMenu、handPush、menuControl、updateTreeOpen、goExternalUrl |

**9 个组件**（全局注册，也可局部引入）：

| 组件 | 用途 | 关键 props / slots |
| --- | --- | --- |
| LJSLoading | 全屏 Loading | speed、gaussian、bgOpacity、textColor；默认插槽=提示文本 |
| Pagination | 分页 | total(必填)、page、limit、pageSizes、note；事件 update:page/update:limit/pagination |
| RightMenu | 右键菜单 | modelValue、opts{top,left,width,height}；默认插槽=菜单内容 |
| DatetypeChooseDate | 日期类型+单日期 | date、dictValue、datetypeData、dateTypeKeyValue、noType |
| DatetypeChooseDateRange | 日期类型+区间 | date、dictValue、datetypeData、dateSwitchRule、symbol |
| DateRange | 日期区间 | modelValue、dateType、formItemLabel、disabledDate_start/end |
| DictTag | 字典标签 | options、value（支持多值） |
| Particles | 粒子背景 | 无 props |
| TextAbbreviation | 文本缩略 | data、mode(line/last)、max、unit、lineHeight、fontSize |

**2 个全局对象 + 1 个类**：`LJSws`（WebSocket 封装）、`htmlPdf`（HTML 转 PDF，html2canvas/jspdf 需注入）、`mqttCreateds`（MQTT 类，需独立引入）。
另提供 `DateRange_spanLimit`（日期区间跨度限制方法库）。

# 快速开始

```
npm i ljs-tools -S
```

注：使用组件需自行安装 element-plus（本库不打包它；$LJSEl、Pagination、日期系列组件依赖）。
注：样式需手动引入 `import 'ljs-tools/index.css'`（只要用到组件就必须引）。
注：产物为 default 导出，具名导入依赖 CJS 互操作、部分构建工具（如 Vite）下不可靠，请 default 导入后解构。

### 快速应用

###### 全局注入

```
import 'ljs-tools/index.css'; // ⚠️ 样式需手动引入
import LjsTools from 'ljs-tools'
app.use(LjsTools); // 组件全局注册 + $LJSxxx 全局属性挂载
// 之后 this.$LJSdate / 模板 <LJSLoading> 可用
```

###### 局部注入

```
import 'ljs-tools/index.css';
import LjsTools from 'ljs-tools';
// 注：产物为 default 导出，具名导入依赖 CJS 互操作、部分构建工具（如 Vite）下不可靠，请 default 导入后解构
const { LJSLoading, LJSdate } = LjsTools;
```

### TypeScript 与 AI 支持

- 自带 `index.d.ts` 类型声明（package.json `types` 字段已配置），安装后编辑器/AI 直接获得完整类型提示。
- 配套 `AI.md`：面向 AI 助手的使用指南（API 速查、最小示例、典型错误对照），AI 编码工具可直接读取。

## 与同类的区别（选型参考）

| 对比对象 | 选择本包的理由 |
| --- | --- |
| dayjs / date-fns（日期单点库） | 只解决日期解析/运算；本包日期面向业务展示（格式化、查询区间、日期类型切换组件），且同包还有判空/字典/树/表单限制/加密等 14 个能力域——中后台一次装齐 |
| lodash-es / @vueuse/core（通用工具/组合函数） | 通用底层工具，不含业务语义（字典回显、金额分位、表单输入限制、右键菜单、日期类型组件）；本包是「Element Plus 中后台业务工具全家桶」 |
| 自己逐个拼装（sm-crypto + mqtt + html2canvas + 水印…） | 单点库要自己封装成体系；本包 15 方法库 + 9 组件统一 `$LJSxxx` 挂载、开箱即用，且工具间有组合（如 DateRange_spanLimit 配 DateRange） |
| 若依等脚手架内置 utils | 内置在脚手架里拆不出来、无法单独升级；本包是独立 npm 包，任意 Vue3 + Element Plus 项目可装 |

**适用**：中后台（尤其若依/V3JS 等框架）需要成体系业务工具 + 常用组件、国密加解密、水印/脱敏/HTML 转 PDF 的 Vue3 项目。
**不适用**：纯日期运算/解析（用 dayjs / date-fns）；非 Vue3 项目；SSR / Nuxt（未做适配）；没有 Element Plus 且不愿引入（$LJSEl、Pagination、日期系列依赖它）。

### 详细 API

每个方法的参数签名与示例见 API 文档站：[ljs-tools API](https://ljs-y.github.io/ljs-vue3/ljs-tools/function/base/)（精确签名以 `index.d.ts` 为准）。

#### 示例

```vue
<template>
  <div>
    <DateRange v-model="dateRange" dateType="date" formItemLabel="查询日期" />
    <Pagination :total="total" v-model:page="page" v-model:limit="limit" @pagination="onPage" />
    <LJSLoading v-if="loading">加载中...</LJSLoading>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'ljs-tools/index.css'; // ⚠️ 样式需手动引入
import LjsTools from 'ljs-tools';
// 注：产物为 default 导出，具名导入依赖 CJS 互操作、部分构建工具（如 Vite）下不可靠，请 default 导入后解构
const { DateRange, Pagination, LJSLoading, LJSdate, LJSbase } = LjsTools;

const dateRange = ref([]);
const total = ref(100);
const page = ref(1);
const limit = ref(10);
const loading = ref(false);

// 判空 + 日期格式化
const name = ref('');
const title = LJSbase.fieldCheck(name.value) ? '默认标题' : name.value;
const now = LJSdate.formatTime(Date.now(), '{y}-{m}-{d} {h}:{i}:{s}');
// 默认查询区间（近 10 天）：LJSdate.initSearchDate(10)

const onPage = () => {};
</script>
```

> 版本以 package.json 为准。
