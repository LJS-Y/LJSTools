/**
 * ljs-tools 类型声明
 * 版本以 package.json 为准
 * 与 AI.md 配套使用；只描述对外 API，不涉及内部实现。
 *
 * 引入方式：
 *   1. 全局安装：import LjsTools from 'ljs-tools'; app.use(LjsTools);
 *      → 工具模块挂载为 $LJSxxx，组件全局注册，LJSws/htmlPdf 挂载为全局属性
 *   2. 局部引入：import LjsTools, { LJSdate, LJSLoading } from 'ljs-tools'
 *      （具名导出依赖 CJS 互操作，最保险的写法是 import LjsTools from 'ljs-tools'
 *        后 const { LJSdate } = LjsTools）
 */
import type { App, DefineComponent } from 'vue';

/* ==================== 工具模块 ==================== */

/** $LJSbase — 基础工具（判空、树、字典、拷贝等） */
export interface LJSbaseModule {
  /** 字段判断：是否为 undefined、null、'' */
  fieldCheck(field: unknown): boolean;
  /** 树通过一个值反查，返回选中数据及直系父集合 */
  getTreeParents(opt: { data: any[]; value: string; key?: string; children?: string; parents?: any[] }): any[];
  /** 树按条件生成部分禁用选择的新树（父可影响子） */
  editTreeParentIdCheck(opt: { data: any[]; opts?: Array<{ value: string; key: string }>; disabled?: boolean; fatherInfluenceSon?: boolean }): any[] | undefined;
  /** tree 转 list（剥离 children，深拷贝每行） */
  handleTreeList(treeList: any[]): any[];
  /** list 转 tree */
  handleListTree(opt: { data: any[]; id?: string; parentId?: string; children?: string }): any[];
  /** 根节点 font-size 计算（PC 120→16px；移动端 25→30rpx） */
  setRemUnit(xs?: number): void;
  /** 字典/接口值回显；labelKey='$index' 返回索引；isTrue=false 拼接字符串；找不到返回 value 本身 */
  selectDictLabel(opt: { data: any[]; value: any; labelKey?: string; valueKey?: string; isTrue?: boolean }): string | any[] | number | null;
  /** 字典数据按 dictValue 删除/保留（del、retain 传其一） */
  dictDataChange(opt?: { data?: any[]; valueKey?: string; del?: string[] | null; retain?: string[] | null }): any[];
  /** 输出带颜色的 console 日志（type 与 console 方法同名） */
  colorLog(opt?: { content?: any[]; type?: string; color?: string[] }): void;
  /** 按图片绝对地址触发下载（canvas 转 blob；url 自动加时间戳） */
  downloadImage(opt: { _this: any; url: string; name?: string | number; loadcallback?: (...args: any[]) => void }): void;
  /** 图片流转 base64；非 Blob/File 返回空字符串 */
  imageFileToBase64(fileFlow: Blob | File): Promise<string> | '';
  /** 浏览器缩放百分比数值（如 100） */
  getWindowRatio(): number;
  /** 深拷贝 */
  deepCopy<T>(obj: T): T;
  /** 参数对象覆盖默认对象，返回大而全的新对象（不改原对象） */
  objectCopy(parameterObj: Record<string, any>, defaultObj: Record<string, any>): Record<string, any>;
}

/** $LJSnum — 数字处理 */
export interface LJSnumModule {
  /** 数字补零（常用于日期）；非数字原样返回 */
  numberB0(n: number | string, num?: number, fillStr?: string): string | number | any;
  /** 金额分位符（人民币 fw=4，美元 fw=3） */
  moneySplit(value: string | number, fw?: number, symbol?: string): string;
  /** 整数上取舍：最高位进 1 其余归 0（1234→2000），适配万亿级 */
  numberCeil(value: string | number): number | any;
  /** 数字单位升级（万/亿/万亿）；isMerge=false 返回 {num, unit} */
  longNumText(opt: { value: string | number; ws?: number; dws?: string[]; isMerge?: boolean; numeralSystem?: number }): string | { num: string | number; unit: string } | any;
  /** 保留小数位（整数不补小数位，非数字原样返回） */
  numberChangeDecimal(value: string | number, ws?: number): string | any;
  /** 总数按份数平均（末位为余数） */
  averageNum(total: string | number, shares?: number, decimal?: number): string[];
}

/** $LJSdate — 日期处理 */
export interface LJSdateModule {
  /** 时间戳转固定格式日期，占位符 {y}{m}{d}{h}{i}{s}{MS}；time 为空原样返回 */
  formatTime(time: Date | number | string, pattern?: string): string;
  /** 定制日期（前一天/月/年等），span 正数未来负数过去；pattern 仅支持 {y}-{m}-{d} / {y}-{m} / {y} */
  customizedDate(time: Date | number | string, pattern: string, span?: number): string | undefined;
  /** 区间日期补齐时分秒：1 补时分秒（00:00:00~23:59:59），2 补分秒，3 补秒 */
  dateQjChange(dates: [string, string], tag?: number): [string, string];
  /** 毫秒时长转"x天x小时x分x秒x毫秒"文本；onlyTime=true 返回 [天,时,分,秒,毫秒] */
  timeRunDistance(opt?: { time?: number; showTag?: string[]; showAll?: boolean; onlyTime?: boolean }): string | number[];
  /** 默认区间日期（近 day 天到今天） */
  initSearchDate(day?: number, time?: boolean): [string, string];
  /** 取当月/当年/近 n 年区间（type='year' 返回数字年份） */
  initSearchDateQj(date?: Date, type?: 'datetime' | 'date' | 'month' | 'year', span?: number, n?: number): [string | number, string | number];
}

/** $LJSfc — 表单/输入处理 */
export interface LJSfcModule {
  /** 输入框正负数字+小数位限制（原地改 form[key]）。注意：zs 默认 10、ws 默认 2 */
  numDxsCheck(opt: { form: Record<string, any>; key?: string; zs?: number; ws?: number; type?: 'Number' | 'String'; fu?: boolean }): void;
  /** 只能输入数字（原地改 form[key]，type='Number' 时转 Number） */
  numCheck(opt: { form: Record<string, any>; key?: string; type?: string; fu?: boolean }): void;
  /** 失焦检查数字合法性（'0.'/'-0.' 清空，'-0'→'0'） */
  numBlurCheck(opt: { form: Record<string, any>; key?: string }): void;
  /** 只能输入数字、字母（注意：位置参数签名，非解构） */
  numEnCheck(form: Record<string, any>, key?: string): void;
  /** Blob 流下载为 excel 文件（请求需 responseType:'blob'） */
  downloadBlobData(data: Blob, title: string): void;
  /** Element Plus 日期禁用函数（direction 1 禁未来，-1 禁以前） */
  pickerOptions(opt?: { dateType?: string; direction?: 1 | -1; span?: number; dateTypeKeyValue?: string[] }): (time: Date) => boolean;
  /** 日期区间动态跨度禁用函数（配合 calendar-change/visible-change） */
  pickerOptionsDynamic(day?: number, times?: [Date, Date]): (time: Date) => boolean;
}

/** $LJSecDC — ECharts 数据处理 */
export interface LJSecDCModule {
  /** 饼图数据处理（解决极限值/0 值/全 0 显示与百分比错误；配置需设 minAngle: 5） */
  pieChange(data: any[], o?: { name?: string; key?: string }): Array<{ name: string; value: any; proportion: string }>;
}

/** $LJSsession — 本地存储（含有效期） */
export interface LJSsessionModule {
  /** sessionStorage 取（JSON.parse） */
  getSS(key: string): any;
  /** sessionStorage 存 */
  setSS(key: string, value: any): void;
  /** sessionStorage 删 */
  delSS(key: string): void;
  /** sessionStorage 清空 */
  clearSS(): void;
  /** localStorage 取；带 time 时校验有效期，过期自动删除返回 null */
  getLS(key: string): any | null;
  /** localStorage 存；time 为毫秒有效期，0/不填永久 */
  setLS(key: string, value: any, time?: number): void;
  /** localStorage 删 */
  delLS(key: string): void;
  /** localStorage 清空 */
  clearLS(): void;
  /** vuex 还原（提交一组固定 SET_* mutation 后执行回调） */
  clearVuex(store: any, somethings?: () => void): void;
}

/** $LJScryptoJs — 常用加解密 */
export interface LJScryptoJsModule {
  /** DES 加密（CBC/Pkcs7，iv=key，返回密文 hex） */
  setDES(word: string, keyStr: string): string;
  /** DES 解密（输入 hex 密文，返回 utf8 明文） */
  getDES(word: string, keyStr: string): string;
  /** SHA256 摘要 */
  setSha256(word: string): string;
  /** MD5 摘要 */
  setMD5(word: string): string;
}

/** SM2 工具 */
export interface SM2UtilType {
  /** 生成 sm2 密钥对 */
  generateKeyPair(): { privateKey: string; publicKey: string };
  /** 公钥加密（cipherMode 1=C1C3C2，0=C1C2C3） */
  encrypt(data: string, publicKey: string, cipherMode?: 0 | 1): string;
  /** 私钥解密 */
  decrypt(encryptedData: string, privateKey: string, cipherMode?: 0 | 1): string;
  /** 私钥签名（国密标准 SM2 杂凑 ZA||M，内部 SM3；输出 base64，内容为 r||s 拼接） */
  sign(data: string, privateKey: string): string;
  /** 公钥验签（入参为 sign 输出的 base64 签名；同为国密标准杂凑，userId 默认 '1234567812345678'） */
  verify(data: string, signature: string, publicKey: string): boolean;
}
/** SM3 工具 */
export interface SM3UtilType {
  /** sm3 哈希摘要（hex） */
  digest(data: string): string;
}
/** SM4 工具 */
export interface SM4UtilType {
  /** 随机生成 16 字节 hex 密钥（128 位） */
  generateKey(): string;
  /** sm4 加密 */
  encrypt(data: string, hexKey: string): string;
  /** sm4 解密 */
  decrypt(encryptedData: string, key: string): string;
}
/** $LJSsm — 国密 SM2/SM3/SM4 */
export interface LJSsmModule {
  SM2Util: SM2UtilType;
  SM3Util: SM3UtilType;
  SM4Util: SM4UtilType;
}

/** $LJSrgbC — 颜色处理 */
export interface LJSrgbCModule {
  /** 16 进制转 rgb（'#02A7EF'→'2,167,239'；支持 3/6 位；非法返回 undefined） */
  c16ToRgb(color: string): string | undefined;
  /** rgb 转 16 进制（要求输入以 rgb/RGB 开头） */
  rgbToC16(color: string): string | undefined;
  /** 随机 16 进制颜色 */
  random16Color(): string;
}

/** $LJSurl — 地址/文件名处理 */
export interface LJSurlModule {
  /** 地址解析，返回 [path, 参数对象]；url 为空返回 null */
  getUrlAllParameter(url: string): [string, Record<string, any>] | null;
  /** 取指定参数值，无则 null（默认取 location.search） */
  getUrlParameter(key: string, url?: string): string | null;
  /** 取文件类型（'.pdf' / 'pdf'） */
  getFileType(str: string, showDot?: boolean): string | null;
  /** 取文件名（默认不含后缀） */
  getFileName(str: string, showSuffix?: boolean): string | null;
  /** IPv4 校验 */
  isIPV4ValidIP(ip: string): boolean;
  /** IPv6 校验 */
  isIPV6ValidIP(ip: string): boolean;
  /** IPv4 或 IPv6 */
  isIPValid(ip: string): boolean;
  /** 参数对象按 ASCII 字典序拼接为 key=value&key=value（过滤 undefined/null/''） */
  formatParamsByAscii(params: Record<string, any>, excludeKeys?: string[]): string;
}

/** $LJSlicense — 日期鉴权 */
export interface LJSlicenseModule {
  /** 解密 window.g.SRKJ_APP 得到起始日期，30 天内返回 true */
  licenseDateCheck(): boolean;
}

/** $LJSEl — Element Plus 封装 */
export interface LJSElModule {
  /** ElMessageBox 删除确认框封装；confirm 执行 doSomething，其余执行 cancelDoSomething */
  delMessageBox(opt: {
    type?: string;
    icon?: any;
    title?: string;
    message: string;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    center?: boolean;
    overflow?: boolean;
    draggable?: boolean;
    appendTo?: any;
    customStyle?: Record<string, any>;
    doSomething?: () => void;
    cancelDoSomething?: () => void;
  }): void;
}

/** $LJSWatermark — 水印 */
export interface LJSWatermarkModule {
  /** 设置水印（只允许调用一次；两行文本；定时检测防删 + window.onresize 重建） */
  set(uid: string, str: [string, string] | string[], opt?: {
    rotate?: number;
    can_w?: number;
    can_h?: number;
    font?: string;
    color?: string;
    align?: string;
  }, time?: number): void;
}

/** $LJSprivacy — 脱敏 */
export interface LJSprivacyModule {
  /** 姓名脱敏（2字"x*"，3字以上"首*末"） */
  desensitizationName(name: string): string;
  /** 手机号脱敏（11位/7-8位座机/其他通用规则） */
  desensitizationPhone(phone: string, handleNum?: number): string;
  /** 身份证/通用文本脱敏 */
  desensitizationStr(opt: { str: string; keepStart?: number; keepEnd?: number; maskChar?: string; maskLength?: number }): string;
}

/** $LJSmenu — 菜单管理 */
export interface LJSmenuModule {
  /** 处理首次打开的菜单 */
  fristOpenMenu(store: any): void;
  /** 手动跳转菜单管理已注册路由（run 为 router 实例） */
  handPush(opt: { store: any; run: any; path: string; query?: Record<string, any> }): void;
  /** 菜单打开总控（展开/跳转/外链/tabs 卡片管理；openType='2' 全屏不入 tabs） */
  menuControl(opt: { store: any; run: any; menuObj: any; query?: Record<string, any> }): void;
  /** 更新菜单展开状态 */
  updateTreeOpen(opt: { menuList: any[]; parents: any[]; key?: string }): any[];
  /** 跳外部地址（window.open） */
  goExternalUrl(url: string, method?: string): void;
}

/** 全局属性 LJSws — WebSocket 封装 */
export interface LJSwsModule {
  /** 初始化 websocket（token 作子协议；onmessage 内 JSON.parse 后回调；不支持时返回 null） */
  init(url: string, token: string | null, dataChangeF: (data: any) => void): WebSocket | null;
}

/** 全局属性 htmlPdf — HTML 转 PDF（jspdf/html2canvas 由调用方注入） */
export type htmlPdfFn = (
  plugin: { html2Canvas?: any; JsPDF?: any },
  title: string,
  html: Element,
  fileList?: HTMLCollection | any[],
  type?: boolean,
  complete?: (result: any) => void
) => void;

/** DateRange_spanLimit — 日期区间跨度限制方法库（不挂载，需手动引入使用） */
export interface DateRangeSpanLimitModule {
  /** 区间禁用逻辑（记录 _this.trendsDisabledDate） */
  pickerOptionsDynamic(_this: any, day?: number, chooseTime?: Date | string): (time: Date) => boolean;
  /** 开始日期 visible-change 处理（超跨度时回改 query.date） */
  visibleChange_start(query: Record<string, any>, _this: any, day: number, tag: boolean): void;
  /** 结束日期 visible-change 处理 */
  visibleChange_end(query: Record<string, any>, _this: any, day: number, tag: boolean): void;
}

/** mqttCreateds — MQTT 封装类（⚠️ API 待补录：源码本次提取被安全策略拦截，以下为 any 占位，不影响使用） */
export declare const mqttCreateds: any;

/* ==================== 组件 ==================== */

export interface LJSLoadingProps {
  /** 转速（转/秒） */
  speed?: number;
  /** 高斯模糊 */
  gaussian?: number;
  /** 背景透明度 0~1 */
  bgOpacity?: number;
  /** 插槽字体颜色 */
  textColor?: string;
}
/** LJSLoading — 全屏 Loading（Teleport 到 body），默认插槽为提示文本 */
export declare const LJSLoading: DefineComponent<LJSLoadingProps>;

export interface PaginationProps {
  /** 总条数（必填） */
  total: number;
  /** 当前页（v-model:page） */
  page?: number;
  /** 每页条数（v-model:limit） */
  limit?: number;
  pageSizes?: number[];
  pagerCount?: number;
  layout?: string;
  background?: boolean;
  autoScroll?: boolean;
  /** 左下角注释文字 */
  note?: string;
}
/** Pagination — el-pagination 封装；事件：update:page、update:limit、pagination({page, limit}) */
export declare const Pagination: DefineComponent<PaginationProps>;

export interface RightMenuProps {
  /** 显示开关（v-model） */
  modelValue?: boolean;
  /** 定位与可视区域 {top,left,width,height} */
  opts?: { top?: number; left?: number; width?: number; height?: number };
  menuClass?: string;
}
/** RightMenu — 右键菜单（Teleport 到 body），默认插槽为菜单内容；点外自动关闭 */
export declare const RightMenu: DefineComponent<RightMenuProps>;

export interface DatetypeChooseDateProps {
  /** 日期值（v-model:date） */
  date?: string;
  /** 当前日期类型字典 value（v-model:dictValue） */
  dictValue?: string;
  /** 日期类型字典数组 */
  datetypeData?: any[];
  /** 按年月日顺序的类型 value */
  dateTypeKeyValue?: string[];
  formItemLabel?: string;
  /** 禁用跨度 */
  disabledDateSpan?: number;
  /** 不显示的类型 value */
  noType?: string[];
}
/** DatetypeChooseDate — 日期类型切换 + 单日期选择 */
export declare const DatetypeChooseDate: DefineComponent<DatetypeChooseDateProps>;

export interface DatetypeChooseDateRangeProps {
  /** [开始,结束]（v-model:date） */
  date?: [string, string] | string[];
  dictValue?: string;
  datetypeData?: any[];
  clearable?: boolean;
  disabledDate?: (time: Date) => boolean;
  dateTypeKeyValue?: string[];
  /** 0 跟随传入日期；1 每次切换取当月/当年 */
  dateSwitchRule?: number;
  formItemLabel?: string;
  noType?: string[];
  /** 中间符 */
  symbol?: string;
}
/** DatetypeChooseDateRange — 日期类型切换 + 区间选择 */
export declare const DatetypeChooseDateRange: DefineComponent<DatetypeChooseDateRangeProps>;

export interface DateRangeProps {
  /** [开始,结束]（v-model，自动纠正起止顺序） */
  modelValue?: [string, string] | string[];
  /** datetime / date / month / year */
  dateType?: string;
  formItemLabel?: string;
  formItemProp?: string;
  formItemRules?: any[];
  clearable?: boolean;
  disabledDate_start?: (time: Date) => boolean;
  disabledDate_end?: (time: Date) => boolean;
  change_start?: (val: any) => void;
  change_end?: (val: any) => void;
  visibleChange_start?: (val: any) => void;
  visibleChange_end?: (val: any) => void;
}
/** DateRange — 日期区间选择（含起止顺序纠正） */
export declare const DateRange: DefineComponent<DateRangeProps>;

export interface DictTagProps {
  /** 字典数组：{dictValue, dictLabel, listClass, cssClass} */
  options?: any[];
  /** 匹配 dictValue，支持多值 */
  value?: string | number | any[];
}
/** DictTag — 字典 Tag 标签（listClass 为 'default'/'' 时渲染 span，否则 el-tag） */
export declare const DictTag: DefineComponent<DictTagProps>;

/** Particles — 粒子动画背景（无 props，配置内置于包内 particles.json；会设置 body overflow:hidden） */
export declare const Particles: DefineComponent<Record<string, never>>;

export interface TextAbbreviationProps {
  /** 内容 */
  data?: string;
  /** line 行截断 / last 尾截断 */
  mode?: string;
  /** 最大行数 */
  max?: number;
  /** px / rem */
  unit?: string;
  lineHeight?: number;
  fontSize?: number;
}
/** TextAbbreviation — 内容缩略（超出 max 行显示展开/收起） */
export declare const TextAbbreviation: DefineComponent<TextAbbreviationProps>;

/* ==================== 插件本体 ==================== */

export interface LjsToolsPlugin {
  /** 全局安装：注册组件、挂载 $LJSxxx 与 LJSws/htmlPdf */
  install(app: App): void;

  /* 局部引入用（组件） */
  LJSLoading: typeof LJSLoading;
  Pagination: typeof Pagination;
  RightMenu: typeof RightMenu;
  DatetypeChooseDate: typeof DatetypeChooseDate;
  DatetypeChooseDateRange: typeof DatetypeChooseDateRange;
  DateRange: typeof DateRange;
  DictTag: typeof DictTag;
  Particles: typeof Particles;
  TextAbbreviation: typeof TextAbbreviation;

  /* 局部引入用（方法库） */
  LJSmenu: LJSmenuModule;
  LJSbase: LJSbaseModule;
  LJSnum: LJSnumModule;
  LJSdate: LJSdateModule;
  LJSfc: LJSfcModule;
  LJSecDC: LJSecDCModule;
  LJSsession: LJSsessionModule;
  LJScryptoJs: LJScryptoJsModule;
  LJSsm: LJSsmModule;
  LJSrgbC: LJSrgbCModule;
  LJSurl: LJSurlModule;
  LJSlicense: LJSlicenseModule;
  LJSEl: LJSElModule;
  LJSWatermark: LJSWatermarkModule;
  LJSprivacy: LJSprivacyModule;
  DateRange_spanLimit: DateRangeSpanLimitModule;

  /* 全局变量 */
  LJSws: LJSwsModule;
  htmlPdf: htmlPdfFn;

  /* class，需独立引入 */
  mqttCreateds: any;
}

declare const LjsTools: LjsToolsPlugin;
export default LjsTools;

/**
 * 具名导出（与默认导出同源成员）。
 * 注意：产物 ESM 仅默认导出，具名导入依赖打包器的 CJS 互操作；
 * 最保险写法：import LjsTools from 'ljs-tools'; const { LJSdate } = LjsTools;
 */
export declare const LJSmenu: LJSmenuModule;
export declare const LJSbase: LJSbaseModule;
export declare const LJSnum: LJSnumModule;
export declare const LJSdate: LJSdateModule;
export declare const LJSfc: LJSfcModule;
export declare const LJSecDC: LJSecDCModule;
export declare const LJSsession: LJSsessionModule;
export declare const LJScryptoJs: LJScryptoJsModule;
export declare const LJSsm: LJSsmModule;
export declare const LJSrgbC: LJSrgbCModule;
export declare const LJSurl: LJSurlModule;
export declare const LJSlicense: LJSlicenseModule;
export declare const LJSEl: LJSElModule;
export declare const LJSWatermark: LJSWatermarkModule;
export declare const LJSprivacy: LJSprivacyModule;
export declare const LJSws: LJSwsModule;
export declare const htmlPdf: htmlPdfFn;
export declare const DateRange_spanLimit: DateRangeSpanLimitModule;

/* Vue 全局属性类型（app.use 后在模板/this 上可用） */
declare module 'vue' {
  interface ComponentCustomProperties {
    $LJSmenu: LJSmenuModule;
    $LJSbase: LJSbaseModule;
    $LJSnum: LJSnumModule;
    $LJSdate: LJSdateModule;
    $LJSfc: LJSfcModule;
    $LJSecDC: LJSecDCModule;
    $LJSsession: LJSsessionModule;
    $LJScryptoJs: LJScryptoJsModule;
    $LJSsm: LJSsmModule;
    $LJSrgbC: LJSrgbCModule;
    $LJSurl: LJSurlModule;
    $LJSlicense: LJSlicenseModule;
    $LJSEl: LJSElModule;
    $LJSWatermark: LJSWatermarkModule;
    $LJSprivacy: LJSprivacyModule;
    LJSws: LJSwsModule;
    htmlPdf: htmlPdfFn;
  }
}
