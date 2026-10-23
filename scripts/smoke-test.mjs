/**
 * 发布前冒烟测试（固化于发版流程，2026-10-23）
 * 完全按 AI.md / README 文档写法接入构建产物，验证 AI 可用性四层中的「能直接接入」。
 * 用法：node scripts/smoke-test.mjs（或 npm run test:smoke）
 *
 * 验证设计（全家桶契约）：
 * - 接入契约：default 导出 / install / 工具库与组件与全局对象解构。
 * - 注册契约：app.use 后 9 组件全局注册 + $LJSxxx 全局属性 + LJSws/htmlPdf 独立挂载。
 * - 工具契约：fieldCheck / moneySplit / formatTime 纯函数实测（Node 直跑）。
 * - 渲染契约（SSR）：TextAbbreviation 文本渲染（无 Teleport/无 Element Plus 依赖的代表组件）。
 */
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import LjsTools from '../ljs-tools/index.js';

const checks = [];

// ===== 接入契约（文档写法：default 导入后解构） =====
checks.push(['default 导出对象存在', !!LjsTools]);
checks.push(['install 是函数（app.use 可用）', typeof LjsTools.install === 'function']);
const {
  LJSbase, LJSnum, LJSdate, LJSfc, LJSsm, LJSsession, LJSWatermark,
  LJSLoading, Pagination, RightMenu, DatetypeChooseDate, DatetypeChooseDateRange,
  DateRange, DictTag, Particles, TextAbbreviation,
  LJSws, htmlPdf, mqttCreateds, DateRange_spanLimit,
} = LjsTools;
checks.push(['工具库可解构（base/num/date/fc/sm/session/Watermark）', !!(LJSbase && LJSnum && LJSdate && LJSfc && LJSsm && LJSsession && LJSWatermark)]);
checks.push(['9 组件可解构', !!(LJSLoading && Pagination && RightMenu && DatetypeChooseDate && DatetypeChooseDateRange && DateRange && DictTag && Particles && TextAbbreviation)]);
checks.push(['全局对象/类可解构（LJSws/htmlPdf/mqttCreateds/DateRange_spanLimit）', !!(LJSws && typeof htmlPdf === 'function' && typeof mqttCreateds === 'function' && DateRange_spanLimit)]);
checks.push(['Pagination.pagerCount 惰性默认（函数工厂，Node 直导安全）', typeof Pagination?.props?.pagerCount?.default === 'function']);

// ===== 工具契约（纯函数 Node 实测） =====
checks.push(['LJSbase.fieldCheck 判空（true=空）', LJSbase.fieldCheck('') === true && LJSbase.fieldCheck(null) === true && LJSbase.fieldCheck('x') === false]);
checks.push(['LJSnum.moneySplit(3889999) = 388,9999', LJSnum.moneySplit(3889999) === '388,9999']);
checks.push(['LJSdate.formatTime 格式化（{y}-{m}-{d}）', /^\d{4}-\d{2}-\d{2}$/.test(LJSdate.formatTime(Date.now(), '{y}-{m}-{d}'))]);

// ===== 注册契约（app.use） =====
const app = createSSRApp({ render: () => h('div') });
app.use(LjsTools);
checks.push(['app.use 后组件全局注册（抽查 4 个）', !!(app.component('LJSLoading') && app.component('Pagination') && app.component('TextAbbreviation') && app.component('DateRange'))]);
checks.push(['app.use 后挂载 $LJSxxx（base/num/date/sm）', app.config.globalProperties.$LJSbase === LJSbase && app.config.globalProperties.$LJSnum === LJSnum && app.config.globalProperties.$LJSdate === LJSdate && app.config.globalProperties.$LJSsm === LJSsm]);
checks.push(['app.use 后挂载 LJSws/htmlPdf 独立全局属性', app.config.globalProperties.LJSws === LJSws && app.config.globalProperties.htmlPdf === htmlPdf]);

// ===== 渲染契约（SSR：TextAbbreviation 为代表组件） =====
const app2 = createSSRApp({ render: () => h(TextAbbreviation, { data: '缩略文本测试', mode: 'last' }) });
const html2 = await renderToString(app2);
checks.push(['SSR：TextAbbreviation 渲染根结构（textAbbreviation）', html2.includes('textAbbreviation')]);
checks.push(['SSR：TextAbbreviation 渲染 data 文本', html2.includes('缩略文本测试')]);

// ===== 产物检查 =====
const distDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'ljs-tools');
checks.push(['index.css 产物存在（需手动引入）', existsSync(join(distDir, 'index.css'))]);
checks.push(['index.d.ts 产物存在（types 生效）', existsSync(join(distDir, 'index.d.ts'))]);

// ===== 输出 =====
let pass = 0;
for (const [name, ok] of checks) {
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + name);
  if (ok) pass++;
}
console.log('\n' + pass + '/' + checks.length + ' 通过');
process.exit(pass === checks.length ? 0 : 1);
