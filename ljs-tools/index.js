var so = Object.defineProperty;
var lo = (e, n, r) => n in e ? so(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var St = (e, n, r) => (lo(e, typeof n != "symbol" ? n + "" : n, r), r);
import { getCurrentInstance as He, inject as Ee, ref as ie, computed as H, unref as R, shallowRef as Rt, watchEffect as ya, readonly as co, getCurrentScope as uo, onScopeDispose as _a, onMounted as qe, nextTick as Ce, watch as Be, isRef as Ca, warn as fo, provide as yn, defineComponent as se, openBlock as L, createElementBlock as V, mergeProps as Lt, renderSlot as he, createElementVNode as Y, toRef as n0, onUnmounted as xo, useAttrs as vo, useSlots as Ea, normalizeClass as U, normalizeStyle as ve, createCommentVNode as Q, Fragment as Le, createBlock as ne, withCtx as oe, resolveDynamicComponent as Se, withModifiers as Pt, createVNode as xe, toDisplayString as le, onBeforeUnmount as Nt, Text as po, reactive as Ba, h as ho, markRaw as r0, toRefs as mo, resolveComponent as Fe, Transition as _n, withDirectives as y0, withKeys as Wt, createTextVNode as Jt, vShow as _0, isVNode as Da, render as Aa, Teleport as wa, renderList as x0, pushScopeId as Cn, popScopeId as En } from "vue";
const go = () => {
  re.colorLog({ content: ["", "******************************************"] }), re.colorLog({ content: ["Core Dependencies：", "ljs-tools"] }), re.colorLog({ content: ["Author：", "LJS"] }), re.colorLog({ content: ["API", "https://ljs-y.github.io/ljs-vue3"], color: [
    "background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;",
    "background: #FFF; border: 1px solid #666666; color: #fff; border-radius: 0 4px 4px 0; padding: 2px 6px;"
  ] }), re.colorLog({ content: ["", "******************************************"] });
};
function Bn(e) {
  if (re.fieldCheck(e))
    return null;
  const n = {};
  let r = e.split("?");
  if (r.length === 1)
    return [r[0], n];
  const t = r[1].split("&"), a = t.length;
  for (let i = 0; i < a; i++) {
    const o = t[i].split("=");
    n[o[0]] = o[1];
  }
  return [r[0], n];
}
function bo(e, n = location.search) {
  const r = Bn(n);
  if (r === null)
    return null;
  const t = r[1];
  return e in t ? t[e] : null;
}
function yo(e, n = !0) {
  if (re.fieldCheck(e))
    return null;
  let r = e.lastIndexOf(".");
  return r === -1 ? null : (r = n ? r : r + 1, e.slice(r, e.length));
}
function _o(e, n = !1) {
  if (re.fieldCheck(e))
    return null;
  const r = e.lastIndexOf("/"), t = e.lastIndexOf("\\");
  let a = r > t ? r : t;
  return a !== -1 ? a++ : a = 0, n ? e.slice(a, e.length) : e.lastIndexOf(".") > -1 ? e.slice(a, e.lastIndexOf(".")) : e.slice(a, e.length);
}
function Fa(e) {
  var n = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return n.test(e);
}
function Sa(e) {
  var n = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/gm;
  return n.test(e);
}
function Co(e) {
  return Sa(e) || Fa(e);
}
function ka(e, n = ["sign"]) {
  return Object.entries(e).filter(([a, i]) => /* 排除未定义的值 */ i != null && // 排除 null
  i !== "" && // 排除空字符串
  !n.includes(a)).sort(([a], [i]) => a.localeCompare(i, "en-US")).map(([a, i]) => `${a}=${i}`).join("&");
}
const Ta = {
  getUrlAllParameter: Bn,
  getUrlParameter: bo,
  getFileType: yo,
  getFileName: _o,
  isIPV4ValidIP: Fa,
  isIPV6ValidIP: Sa,
  isIPValid: Co,
  formatParamsByAscii: ka
};
function Eo(e) {
  return e == null || e === "";
}
function Ia({ data: e, value: n, key: r = "id", children: t = "children", parents: a = [] }) {
  const i = e.length;
  for (let o = 0; o < i; o++)
    if (e[o][r] === n || e[o][t] !== void 0 && (a = Ia({
      data: e[o][t],
      value: n,
      key: r,
      children: t,
      parents: a
    }), a.length > 0 && a[a.length - 1][r] === n))
      return a.unshift(e[o]), a;
  return a;
}
function fn({ data: e, opts: n = [], disabled: r = !1 }) {
  if (!e)
    return;
  const t = e.length;
  for (let a = 0; a < t; a++) {
    e[a].disabled = r;
    let i = !1;
    const o = n.length;
    for (let l = 0; l < o; l++) {
      const c = n[l];
      if (e[a][c.key] === c.value) {
        i = !0;
        break;
      }
    }
    i ? (e[a].disabled = !0, e[a].children = fn({ data: e[a].children, opts: n, disabled: !0 })) : e[a].children !== void 0 && (e[a].children = fn({ data: e[a].children, opts: n, disabled: r }));
  }
  return e;
}
function Bo(e) {
  let n = [];
  if (!e || !e.length)
    return [];
  for (let r = 0; r < e.length; r++) {
    let t = e[r], a = JSON.parse(JSON.stringify(t));
    a.children = void 0, n.push(a);
    const i = this.handleTreeList(t.children);
    n = n.concat(i);
  }
  return n;
}
function Do({ data: e, id: n = "id", parentId: r = "parentId", children: t = "children" }) {
  let a = { id: n, parentId: r, childrenList: t };
  var i = {}, o = {}, l = [];
  for (let s of e) {
    let u = s[a.parentId];
    i[u] == null && (i[u] = []), o[s[a.id]] = s, i[u].push(s);
  }
  for (let s of e) {
    let u = s[a.parentId];
    o[u] == null && l.push(s);
  }
  for (let s of l)
    c(s);
  function c(s) {
    if (i[s[a.id]] !== null && (s[a.childrenList] = i[s[a.id]]), s[a.childrenList])
      for (let u of s[a.childrenList])
        c(u);
  }
  return l;
}
function Ao(e = 120) {
  var n = document.documentElement, r = n.clientWidth / e;
  n.style.fontSize = r + "px";
}
function wo({ data: e, value: n, labelKey: r = "dictLabel", valueKey: t = "dictValue", isTrue: a = !1 }) {
  if (n === void 0)
    return "";
  let i = [];
  return Object.keys(e).some((o, l) => {
    if (e[o][t] == "" + n)
      return r === "$index" ? (i = l, l) : (i.push(e[o][r]), !0);
  }), r === "$index" ? i : (i.length === 0 && i.push(n), a ? i[0] : i.join(""));
}
function Fo({ content: e = ["暂无内容"], type: n = "info", color: r = [
  "background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;",
  "background: #1475B2; color: #fff; border-radius: 0 4px 4px 0; padding: 3px 6px;"
] }) {
  let t = "";
  e.forEach((a) => {
    t += `%c${a}`;
  }), console[n](t, r[0], r[1]);
}
function So({ _this: e, url: n, name: r = (/* @__PURE__ */ new Date()).valueOf() }) {
  let t = new Image();
  t.setAttribute("crossOrigin", "anonymous");
  const a = Bn(n);
  n = a[0];
  let i = {};
  a.length === 2 && (i = {
    ...a[1]
  }), i._time = (/* @__PURE__ */ new Date()).valueOf(), t.src = n + "?time=" + ka(i), e.$nextTick(() => {
    t.onload = () => {
      const o = document.createElement("canvas");
      o.width = t.width, o.height = t.height, o.getContext("2d").drawImage(t, 0, 0, t.width, t.height), o.toBlob((c) => {
        const s = URL.createObjectURL(c), u = document.createElement("a");
        u.download = r, u.href = s, u.click(), u.remove(), URL.revokeObjectURL(s);
      });
    };
  });
}
function ko(e) {
  return e instanceof Blob || e instanceof File ? new Promise((n, r) => {
    const t = new FileReader();
    t.onloadend = () => n(t.result);
    try {
      t.readAsDataURL(e);
    } catch (a) {
      r(a);
    }
  }) : "";
}
function To() {
  var e = 0, n = window.screen, r = navigator.userAgent.toLowerCase();
  return window.devicePixelRatio !== void 0 ? e = window.devicePixelRatio : ~r.indexOf("msie") ? n.deviceXDPI && n.logicalXDPI && (e = n.deviceXDPI / n.logicalXDPI) : window.outerWidth !== void 0 && window.innerWidth !== void 0 && (e = window.outerWidth / window.innerWidth), e && (e = Math.round(e * 100)), e;
}
function a0(e) {
  let n = Array.isArray(e) ? [] : {};
  for (let r in e)
    e.hasOwnProperty(r) && (typeof e[r] == "object" && e[r] !== null ? n[r] = a0(e[r]) : n[r] = e[r]);
  return n;
}
function Io(e, n) {
  if (typeof e != "object" || typeof n != "object")
    return n;
  const r = a0(e), t = a0(n);
  for (let a in r)
    t[a] = r[a];
  return t;
}
const re = {
  fieldCheck: Eo,
  deepCopy: a0,
  getTreeParents: Ia,
  editTreeParentIdCheck: fn,
  handleTreeList: Bo,
  handleListTree: Do,
  setRemUnit: Ao,
  selectDictLabel: wo,
  colorLog: Fo,
  downloadImage: So,
  imageFileToBase64: ko,
  getWindowRatio: To,
  objectCopy: Io
};
go();
function Po(e) {
  const n = e.getters.menuList, r = Ma({ menuList: n }), t = Pa({ data: n, value: r.url });
  r.address = t, e.commit("SET_menuNowOpen", r), e.commit("SET_menuOpenList", [r]);
}
function Pa({ data: e, value: n, key: r = "url" }) {
  const t = re.getTreeParents({ data: e, value: n, key: r }), a = [];
  return t.forEach((i) => {
    const o = {
      title: i.title,
      // 菜单名称
      url: i.url
      // 菜单路由path
    };
    a.push(o);
  }), a;
}
function Ma({ menuList: e }) {
  if (e.length === 0)
    return {};
  let n = {};
  return e.forEach((r, t) => {
    t === 0 && (!re.fieldCheck(r.children) && r.children.length > 0 ? (r.open = !0, n = Ma({ menuList: r.children })) : n = r);
  }), n;
}
function Mo({ store: e, path: n }) {
  const r = e.getters.menuList, t = re.handleTreeList(r), a = t.length;
  for (let i = 0; i < a; i++) {
    const o = t[i];
    if (o.url === n)
      return o;
  }
}
function Ro({ store: e, run: n, path: r, query: t = {} }) {
  const a = Mo({ store: e, path: r });
  Ra({ store: e, run: n, menuObj: a, query: t });
}
function Ra({ store: e, run: n, menuObj: r, query: t }) {
  let a = e.getters.menuList;
  if (re.fieldCheck(r.children) && (r.children = []), r.children.length > 0) {
    if (r.open)
      r.open = !r.open;
    else {
      const i = re.getTreeParents({
        data: a,
        value: r.menuId,
        key: "menuId"
      });
      Dn({ menuList: a, parents: i });
    }
    e.commit("SET_menuList", a);
  } else {
    const i = e.getters.menuNowOpen;
    let o = e.getters.menuOpenList;
    if (i.url === r.url)
      return;
    r.address = Pa({ data: e.getters.menuList, value: r.url });
    let l = r;
    r.choose = !r.choose, e.commit("SET_menuNowOpen", l);
    const c = o.length;
    let s = !1;
    for (let u = 0; u < c; u++)
      if (o[u].url === r.url) {
        s = !0;
        break;
      }
    s || (o = e.getters.menuOpenList, o.push(l), e.commit("SET_menuOpenList", o)), n.push({
      path: r.url,
      query: t
    });
  }
}
function Dn({ menuList: e, parents: n, key: r = "menuId" }) {
  return e.forEach((t) => {
    t[r] === n[0][r] ? (t.open = !0, n.length > 1 && n.splice(0, 1)) : t.open = !1, t.children && t.children.length > 0 && (t.children = Dn({ menuList: t.children, parents: n, key: r }));
  }), e;
}
const za = {
  fristOpenMenu: Po,
  handPush: Ro,
  menuControl: Ra,
  updateTreeOpen: Dn
}, Zt = 1e-14;
function zo(e, n = 2, r = "0") {
  if (Ct(e)) {
    e = e.toString();
    const t = e.length, a = n - t;
    let i = "";
    for (let o = 0; o < a; o++)
      i += r;
    return i + e;
  }
  return e;
}
function Lo(e, n = 4, r = ",") {
  if (Ct(e)) {
    e += "";
    var t = e.split("."), a = t[0], i = t.length > 1 ? "." + t[1] : "";
    const o = new RegExp("(\\d+)(\\d{" + n + "})");
    for (; o.test(a); )
      a = a.replace(o, "$1" + r + "$2");
    return a + i;
  }
  return e;
}
function $o(e) {
  if (Ct(e)) {
    e = Math.ceil(e);
    const n = (e + "").length, r = Math.pow(10, n - 1);
    return Math.ceil(e / r) * r;
  }
  return e;
}
function Oo({
  value: e,
  ws: n = 0,
  units: r = ["", "万", "亿万", "万亿"],
  isMerge: t = !0
}) {
  if (Ct(e)) {
    let a = "";
    const i = Number(e) < 0 ? -1 : 1, o = Math.abs(Number(e));
    let l = 0;
    if (o < 1e4)
      a = i * o, l = 0;
    else if (o >= 1e4 && o < 1e4 * 1e4) {
      let c = o / 1e4 + Zt;
      c = Number(c.toFixed(n)), c < 1e4 ? (a = i * c, l = 1) : (a = i * c / 1e4, l = 2);
    } else if (o >= 1e4 * 1e4 && o < 1e4 * 1e4 * 1e4) {
      let c = o / 1e8 + Zt;
      c = Number(c.toFixed(n)), c < 1e4 ? (a = i * c, l = 2) : (a = i * c / 1e4, l = 3);
    } else
      o >= 1e4 * 1e4 * 1e4 && (a = i * (o / (1e4 * 1e4 * 1e4) + Zt).toFixed(n), l = 3);
    return t ? a + r[l] : {
      num: a,
      unit: r[l]
    };
  }
  return e;
}
function La(e, n = 2) {
  return Ct(e) && (e = e + "", e.indexOf(".") > -1 && e.split(".")[1].length > n) ? (e = Number(e), (e + Zt).toFixed(n)) : e;
}
function Ct(e) {
  const n = typeof e;
  return n === "number" || n === "string" && !isNaN(Number(e, 10));
}
function Ho(e, n = 12, r = 2) {
  e = Number(e);
  const t = (e / n).toFixed(r), a = [];
  for (let i = 0; i < n; i++)
    i < n - 1 ? a.push(t) : a.push(La(e - t * (n - 1), r));
  return a;
}
const te = {
  numberB0: zo,
  longNumText: Oo,
  numberCeil: $o,
  moneySplit: Lo,
  numberChangeDecimal: La,
  averageNum: Ho
};
function Me(e, n) {
  if (re.fieldCheck(e))
    return e;
  const r = new Date(e), t = n || "{y}-{m}-{d} {h}:{i}:{s}", a = {
    y: r.getFullYear(),
    m: te.numberB0(r.getMonth() + 1),
    d: te.numberB0(r.getDate()),
    h: te.numberB0(r.getHours()),
    i: te.numberB0(r.getMinutes()),
    s: te.numberB0(r.getSeconds()),
    MS: r.getMilliseconds()
  };
  return t.replace(/{(y|m|d|h|i|s|MS)+}/g, (i, o) => a[o]);
}
function No(e, n, r = 0) {
  if (re.fieldCheck(e))
    return e;
  if (r === 0) {
    let t = new Date(e).getTime();
    return Me(t, n);
  }
  if (n === "{y}-{m}-{d}") {
    let t = new Date(e).getTime();
    return t = t + 3600 * 1e3 * 24 * r, Me(t, n);
  } else if (n === "{y}-{m}") {
    const t = r / Math.abs(r);
    let a = new Date(e), i = "";
    const o = a.getMonth() + 1;
    let l = 0, c = 0;
    if (t === -1)
      l = a.getFullYear() + Math.floor((o + r) / 12), c = 12 * Math.abs(l - a.getFullYear()) + o + r, (o + r) % 12 === 0 && (l += t, c = 12);
    else if (t === 1)
      if (o + r <= 12)
        l = a.getFullYear(), c = o + r;
      else if ((o + r) % 12 !== 0)
        l = a.getFullYear() + Math.floor((o + r) / 12), c = o + r - Math.abs(l - a.getFullYear()) * 12;
      else {
        const s = (o + r) / 12;
        l = a.getFullYear() + (s > 1 ? s - 1 : s), c = o + r - Math.abs(l - a.getFullYear()) * 12;
      }
    return i = l + "-" + te.numberB0(c), i;
  } else if (n === "{y}")
    return (new Date(e).getFullYear() + r).toString();
}
function Vo(e, n = 1) {
  if (e[0] === "" || e[0] === null)
    return e;
  const r = new Date(e[0]), t = new Date(e[1]);
  switch (n === void 0 && (n = 1), n) {
    case 1:
      return [
        r.getFullYear() + "-" + te.numberB0(r.getMonth() + 1) + "-" + te.numberB0(r.getDate()) + " 00:00:00",
        t.getFullYear() + "-" + te.numberB0(t.getMonth() + 1) + "-" + te.numberB0(t.getDate()) + " 23:59:59"
      ];
    case 2:
      return [
        r.getFullYear() + "-" + te.numberB0(r.getMonth() + 1) + "-" + te.numberB0(r.getDate()) + " " + te.numberB0(r.getHours()) + ":00:00",
        t.getFullYear() + "-" + te.numberB0(t.getMonth() + 1) + "-" + te.numberB0(t.getDate()) + " " + te.numberB0(t.getHours()) + ":59:59"
      ];
    case 3:
      return [
        r.getFullYear() + "-" + te.numberB0(r.getMonth() + 1) + "-" + te.numberB0(r.getDate()) + " " + te.numberB0(r.getHours()) + ":" + te.numberB0(r.getMinutes()) + ":00",
        t.getFullYear() + "-" + te.numberB0(t.getMonth() + 1) + "-" + te.numberB0(t.getDate()) + " " + te.numberB0(t.getHours()) + ":" + te.numberB0(t.getMinutes()) + ":59"
      ];
  }
  return e;
}
function qo({ time: e = 0, showTag: n = ["天", "小时", "分钟", "秒", "毫秒"], showAll: r = !1, onlyTime: t = !1 }) {
  let a = 1;
  e < 0 && (a = -1), e = Math.abs(e);
  const i = 1e3, o = 60 * i, l = 60 * o, c = 24 * l, s = [0, 0, 0, 0, 0];
  if (e >= c) {
    const f = Math.floor(e / c);
    s[0] = a * f, e -= c * f;
  }
  if (e >= l) {
    const f = Math.floor(e / l);
    s[1] = a * f, e -= l * f;
  }
  if (e >= o) {
    const f = Math.floor(e / o);
    s[2] = a * f, e -= o * f;
  }
  if (e >= i) {
    const f = Math.floor(e / i);
    s[3] = a * f, e -= i * f;
  }
  if (s[4] = a * e, t)
    return s;
  let u = r, m = "";
  return s.forEach((f, h) => {
    !u && f !== 0 && (u = !0), u && (m += f + n[h]);
  }), m;
}
function Wo(e = 10, n = !1) {
  let r = "", t = "", a = "{y}-{m}-{d}";
  return n && (a = "{y}-{m}-{d} {h}:{i}:{s}"), r = Me((/* @__PURE__ */ new Date()).getTime() - 3600 * 1e3 * 24 * (e - 1), a), t = Me(/* @__PURE__ */ new Date(), a), [r, t];
}
function Yo(e = "date", n = 0) {
  const r = /* @__PURE__ */ new Date();
  let t = "", a = "";
  switch (e) {
    case "datetime":
      t = Me(r, "{y}-{m}-{d} 00:00:00"), a = Me(r, "{y}-{m}-{d} {h}:{i}:{s}");
      break;
    case "date":
      t = Me(r, "{y}-{m}-01"), a = Me(r, "{y}-{m}-{d}");
      break;
    case "month":
      t = Me(r, "{y}-01"), a = Me(r, "{y}-{m}");
      break;
    case "year":
      t = r.getFullYear() - (n + 1) * 5, a = r.getFullYear();
      break;
  }
  return [t, a];
}
const ue = {
  formatTime: Me,
  customizedDate: No,
  dateQjChange: Vo,
  timeRunDistance: qo,
  initSearchDate: Wo,
  initSearchDateQj: Yo
};
function Uo({ form: e, key: n = "money", zs: r = 10, ws: t = 2, type: a = "Number", fu: i = !1 }) {
  const o = e;
  o[n] = o[n] + "", a === "Number" && (o[n].slice(0, 1) === "0" && (o[n] = o[n].slice(1, 2) !== "." ? "0" : o[n]), o[n].slice(0, 1) === "-" && (o[n] = o[n].slice(1, 2) === "." ? "-" : o[n]), o[n].slice(0, 2) === "-0" && (o[n] = o[n].slice(2, 3) !== "." ? "-0" : o[n])), i ? o[n] = o[n].replace(/[^\d.-]/g, "") : o[n] = o[n].replace(/[^\d.]/g, ""), o[n] = o[n].replace(/^\./g, ""), o[n] = o[n].replace(/\.{2,}/g, "."), o[n] = o[n].slice(0, 1) + o[n].slice(1, o[n].length).replace(/\-/g, "");
  const l = new RegExp("^(\\-)*(\\d+)\\.(\\d{0," + t + "}).*$");
  if (r !== "" && o[n].length > 0) {
    const c = o[n].split(".");
    let s = c[0], u = "";
    const m = s.slice(0, 1) === "-" ? 1 : 0;
    s.length > r + m && (s = s.slice(0, r + m)), c.length > 1 ? (u = c[1], o[n] = s + "." + u) : o[n] = s;
  }
  o[n] = o[n].replace(l, "$1$2.$3");
}
function Ko({ form: e, key: n = "num", type: r = "Number", fu: t = !1 }) {
  r === "Number" && (t ? e[n] = e[n].slice(0, 1) + e[n].slice(1, e[n].length).replace(/\-/g, "") : e[n].slice(0, 1) === "-" && (e[n] = e[n].slice(1, e[n].length))), e[n] = e[n].replace(/[^\d-]/g, ""), r === "Number" && e[n].length > 0 && e[n] !== "-" && (e[n] = Number(e[n]));
}
function jo({ form: e, key: n = "num" }) {
  if (!Ct(e[n])) {
    e[n] = "";
    return;
  }
  if (e[n] === "0." || e[n] === "-0.") {
    e[n] = "";
    return;
  }
  if (e[n] === "-0") {
    e[n] = "0";
    return;
  }
}
function Go(e, n = "username") {
  e[n] = e[n] + "", e[n] = e[n].replace(/[^\w]/g, ""), e[n] = e[n].replace(/\_/g, "");
}
function Xo(e, n) {
  const r = document.createElement("a"), t = new Blob([e], {
    type: "application/vnd.ms-excel"
  });
  r.style.display = "none", r.href = URL.createObjectURL(t), r.setAttribute("download", n), document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
function Jo(e = {}) {
  const n = {
    dateType: "3",
    direction: 1,
    span: 0,
    dateTypeKeyValue: ["1", "2", "3", "4"]
  };
  for (let o in e)
    n[o] = e[o];
  const r = 3600 * 1e3 * 24;
  let t = null, a = null, i = 0;
  switch (n.dateType) {
    case n.dateTypeKeyValue[3]:
      i += 1e3 * n.span;
      break;
    case n.dateTypeKeyValue[2]:
      i += r * n.span;
      break;
    case n.dateTypeKeyValue[1]:
      t = new Date(i).getFullYear(), a = new Date(i).getMonth() + 1 + n.span, a < 0 ? (t += n.span, a = 12) : a += 1, i = (/* @__PURE__ */ new Date(`${t}-${a}`)).getTime();
      break;
    case n.dateTypeKeyValue[0]:
      t = new Date(i).getFullYear(), t += n.span, i = (/* @__PURE__ */ new Date(`${t}-01`)).getTime();
      break;
  }
  return (o) => {
    if (n.direction === 1)
      return o.getTime() > i + Date.now();
    if (n.direction === -1)
      return o.getTime() < i + Date.now();
  };
}
let mt = 0;
function Zo(e = 30, n) {
  n ? mt = ue.formatTime(n[0], "{y}-{m}-{d}") : mt = 0;
  const r = 3600 * 1e3 * 24 * e;
  return (t) => {
    if (mt === 0)
      return t.getTime() > Date.now() || t.getTime() < mt;
    {
      const a = new Date(mt).getTime() + r - 864e5, i = new Date(mt).getTime() - r;
      return a >= Date.now() ? t.getTime() > Date.now() || t.getTime() < i : t.getTime() > a || t.getTime() < i;
    }
  };
}
const v0 = {
  numCheck: Ko,
  numBlurCheck: jo,
  numEnCheck: Go,
  numDxsCheck: Uo,
  downloadBlobData: Xo,
  pickerOptions: Jo,
  pickerOptionsDynamic: Zo
};
function Qo(e, n = {
  name: "name",
  key: "val"
}) {
  if (e.length === 0)
    return e;
  const r = {
    name: "name",
    key: "val"
  };
  for (let i in n)
    r[i] = n[i];
  let t = 0;
  if (e.forEach((i) => {
    i.proportion = 0, t += Number(i[r.key]);
  }), t > 0) {
    let i = {
      value: 0,
      index: -1
    };
    e.forEach((o, l) => {
      o[r.key] = o[r.key] == 0 ? null : o[r.key];
      const c = te.numberChangeDecimal(Number(o[r.key]) / t * 100), s = Number(c);
      Number(i.value) < s && (i = {
        value: c,
        index: l
      }), o.proportion = s === 0 && Number(o[r.key]) > 0 ? 0.01 : s;
    }), e[i.index].proportion = 100, e.forEach((o, l) => {
      l !== i.index && (e[i.index].proportion = te.numberChangeDecimal(e[i.index].proportion - Number(o.proportion)));
    });
  }
  const a = [];
  return e.forEach((i) => {
    a.push({
      name: i[r.name],
      value: i[r.key],
      proportion: i.proportion + "%"
    });
  }), a;
}
const $a = {
  pieChange: Qo
};
var j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function es(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ts(e) {
  if (e.__esModule)
    return e;
  var n = e.default;
  if (typeof n == "function") {
    var r = function t() {
      return this instanceof t ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    r.prototype = n.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
    var a = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(r, t, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), r;
}
var Oa = { exports: {} };
function ns(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var C0 = { exports: {} };
const rs = {}, as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rs
}, Symbol.toStringTag, { value: "Module" })), is = /* @__PURE__ */ ts(as);
var er;
function X() {
  return er || (er = 1, function(e, n) {
    (function(r, t) {
      e.exports = t();
    })(j, function() {
      var r = r || function(t, a) {
        var i;
        if (typeof window < "u" && window.crypto && (i = window.crypto), typeof self < "u" && self.crypto && (i = self.crypto), typeof globalThis < "u" && globalThis.crypto && (i = globalThis.crypto), !i && typeof window < "u" && window.msCrypto && (i = window.msCrypto), !i && typeof j < "u" && j.crypto && (i = j.crypto), !i && typeof ns == "function")
          try {
            i = is;
          } catch {
          }
        var o = function() {
          if (i) {
            if (typeof i.getRandomValues == "function")
              try {
                return i.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof i.randomBytes == "function")
              try {
                return i.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, l = Object.create || function() {
          function p() {
          }
          return function(g) {
            var b;
            return p.prototype = g, b = new p(), p.prototype = null, b;
          };
        }(), c = {}, s = c.lib = {}, u = s.Base = function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(p) {
              var g = l(this);
              return p && g.mixIn(p), (!g.hasOwnProperty("init") || this.init === g.init) && (g.init = function() {
                g.$super.init.apply(this, arguments);
              }), g.init.prototype = g, g.$super = this, g;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var p = this.extend();
              return p.init.apply(p, arguments), p;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(p) {
              for (var g in p)
                p.hasOwnProperty(g) && (this[g] = p[g]);
              p.hasOwnProperty("toString") && (this.toString = p.toString);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }(), m = s.WordArray = u.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(p, g) {
            p = this.words = p || [], g != a ? this.sigBytes = g : this.sigBytes = p.length * 4;
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(p) {
            return (p || h).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(p) {
            var g = this.words, b = p.words, E = this.sigBytes, C = p.sigBytes;
            if (this.clamp(), E % 4)
              for (var B = 0; B < C; B++) {
                var w = b[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                g[E + B >>> 2] |= w << 24 - (E + B) % 4 * 8;
              }
            else
              for (var P = 0; P < C; P += 4)
                g[E + P >>> 2] = b[P >>> 2];
            return this.sigBytes += C, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var p = this.words, g = this.sigBytes;
            p[g >>> 2] &= 4294967295 << 32 - g % 4 * 8, p.length = t.ceil(g / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var p = u.clone.call(this);
            return p.words = this.words.slice(0), p;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(p) {
            for (var g = [], b = 0; b < p; b += 4)
              g.push(o());
            return new m.init(g, p);
          }
        }), f = c.enc = {}, h = f.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(p) {
            for (var g = p.words, b = p.sigBytes, E = [], C = 0; C < b; C++) {
              var B = g[C >>> 2] >>> 24 - C % 4 * 8 & 255;
              E.push((B >>> 4).toString(16)), E.push((B & 15).toString(16));
            }
            return E.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(p) {
            for (var g = p.length, b = [], E = 0; E < g; E += 2)
              b[E >>> 3] |= parseInt(p.substr(E, 2), 16) << 24 - E % 8 * 4;
            return new m.init(b, g / 2);
          }
        }, d = f.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(p) {
            for (var g = p.words, b = p.sigBytes, E = [], C = 0; C < b; C++) {
              var B = g[C >>> 2] >>> 24 - C % 4 * 8 & 255;
              E.push(String.fromCharCode(B));
            }
            return E.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(p) {
            for (var g = p.length, b = [], E = 0; E < g; E++)
              b[E >>> 2] |= (p.charCodeAt(E) & 255) << 24 - E % 4 * 8;
            return new m.init(b, g);
          }
        }, x = f.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(p) {
            try {
              return decodeURIComponent(escape(d.stringify(p)));
            } catch {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(p) {
            return d.parse(unescape(encodeURIComponent(p)));
          }
        }, v = s.BufferedBlockAlgorithm = u.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new m.init(), this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(p) {
            typeof p == "string" && (p = x.parse(p)), this._data.concat(p), this._nDataBytes += p.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(p) {
            var g, b = this._data, E = b.words, C = b.sigBytes, B = this.blockSize, w = B * 4, P = C / w;
            p ? P = t.ceil(P) : P = t.max((P | 0) - this._minBufferSize, 0);
            var _ = P * B, A = t.min(_ * 4, C);
            if (_) {
              for (var F = 0; F < _; F += B)
                this._doProcessBlock(E, F);
              g = E.splice(0, _), b.sigBytes -= A;
            }
            return new m.init(g, A);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var p = u.clone.call(this);
            return p._data = this._data.clone(), p;
          },
          _minBufferSize: 0
        });
        s.Hasher = v.extend({
          /**
           * Configuration options.
           */
          cfg: u.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(p) {
            this.cfg = this.cfg.extend(p), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            v.reset.call(this), this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(p) {
            return this._append(p), this._process(), this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(p) {
            p && this._append(p);
            var g = this._doFinalize();
            return g;
          },
          blockSize: 16,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(p) {
            return function(g, b) {
              return new p.init(b).finalize(g);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(p) {
            return function(g, b) {
              return new y.HMAC.init(p, b).finalize(g);
            };
          }
        });
        var y = c.algo = {};
        return c;
      }(Math);
      return r;
    });
  }(C0)), C0.exports;
}
var E0 = { exports: {} }, tr;
function p0() {
  return tr || (tr = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      return function(t) {
        var a = r, i = a.lib, o = i.Base, l = i.WordArray, c = a.x64 = {};
        c.Word = o.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(s, u) {
            this.high = s, this.low = u;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        }), c.WordArray = o.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(s, u) {
            s = this.words = s || [], u != t ? this.sigBytes = u : this.sigBytes = s.length * 8;
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            for (var s = this.words, u = s.length, m = [], f = 0; f < u; f++) {
              var h = s[f];
              m.push(h.high), m.push(h.low);
            }
            return l.create(m, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            for (var s = o.clone.call(this), u = s.words = this.words.slice(0), m = u.length, f = 0; f < m; f++)
              u[f] = u[f].clone();
            return s;
          }
        });
      }(), r;
    });
  }(E0)), E0.exports;
}
var B0 = { exports: {} }, nr;
function os() {
  return nr || (nr = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var t = r, a = t.lib, i = a.WordArray, o = i.init, l = i.init = function(c) {
            if (c instanceof ArrayBuffer && (c = new Uint8Array(c)), (c instanceof Int8Array || typeof Uint8ClampedArray < "u" && c instanceof Uint8ClampedArray || c instanceof Int16Array || c instanceof Uint16Array || c instanceof Int32Array || c instanceof Uint32Array || c instanceof Float32Array || c instanceof Float64Array) && (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)), c instanceof Uint8Array) {
              for (var s = c.byteLength, u = [], m = 0; m < s; m++)
                u[m >>> 2] |= c[m] << 24 - m % 4 * 8;
              o.call(this, u, s);
            } else
              o.apply(this, arguments);
          };
          l.prototype = i;
        }
      }(), r.lib.WordArray;
    });
  }(B0)), B0.exports;
}
var D0 = { exports: {} }, rr;
function ss() {
  return rr || (rr = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.WordArray, o = t.enc;
        o.Utf16 = o.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(c) {
            for (var s = c.words, u = c.sigBytes, m = [], f = 0; f < u; f += 2) {
              var h = s[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
              m.push(String.fromCharCode(h));
            }
            return m.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(c) {
            for (var s = c.length, u = [], m = 0; m < s; m++)
              u[m >>> 1] |= c.charCodeAt(m) << 16 - m % 2 * 16;
            return i.create(u, s * 2);
          }
        }, o.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(c) {
            for (var s = c.words, u = c.sigBytes, m = [], f = 0; f < u; f += 2) {
              var h = l(s[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
              m.push(String.fromCharCode(h));
            }
            return m.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(c) {
            for (var s = c.length, u = [], m = 0; m < s; m++)
              u[m >>> 1] |= l(c.charCodeAt(m) << 16 - m % 2 * 16);
            return i.create(u, s * 2);
          }
        };
        function l(c) {
          return c << 8 & 4278255360 | c >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(D0)), D0.exports;
}
var A0 = { exports: {} }, ar;
function dt() {
  return ar || (ar = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.WordArray, o = t.enc;
        o.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(c) {
            var s = c.words, u = c.sigBytes, m = this._map;
            c.clamp();
            for (var f = [], h = 0; h < u; h += 3)
              for (var d = s[h >>> 2] >>> 24 - h % 4 * 8 & 255, x = s[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, v = s[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, y = d << 16 | x << 8 | v, p = 0; p < 4 && h + p * 0.75 < u; p++)
                f.push(m.charAt(y >>> 6 * (3 - p) & 63));
            var g = m.charAt(64);
            if (g)
              for (; f.length % 4; )
                f.push(g);
            return f.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(c) {
            var s = c.length, u = this._map, m = this._reverseMap;
            if (!m) {
              m = this._reverseMap = [];
              for (var f = 0; f < u.length; f++)
                m[u.charCodeAt(f)] = f;
            }
            var h = u.charAt(64);
            if (h) {
              var d = c.indexOf(h);
              d !== -1 && (s = d);
            }
            return l(c, s, m);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function l(c, s, u) {
          for (var m = [], f = 0, h = 0; h < s; h++)
            if (h % 4) {
              var d = u[c.charCodeAt(h - 1)] << h % 4 * 2, x = u[c.charCodeAt(h)] >>> 6 - h % 4 * 2, v = d | x;
              m[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return i.create(m, f);
        }
      }(), r.enc.Base64;
    });
  }(A0)), A0.exports;
}
var w0 = { exports: {} }, ir;
function ls() {
  return ir || (ir = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.WordArray, o = t.enc;
        o.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(c, s) {
            s === void 0 && (s = !0);
            var u = c.words, m = c.sigBytes, f = s ? this._safe_map : this._map;
            c.clamp();
            for (var h = [], d = 0; d < m; d += 3)
              for (var x = u[d >>> 2] >>> 24 - d % 4 * 8 & 255, v = u[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, y = u[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, p = x << 16 | v << 8 | y, g = 0; g < 4 && d + g * 0.75 < m; g++)
                h.push(f.charAt(p >>> 6 * (3 - g) & 63));
            var b = f.charAt(64);
            if (b)
              for (; h.length % 4; )
                h.push(b);
            return h.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(c, s) {
            s === void 0 && (s = !0);
            var u = c.length, m = s ? this._safe_map : this._map, f = this._reverseMap;
            if (!f) {
              f = this._reverseMap = [];
              for (var h = 0; h < m.length; h++)
                f[m.charCodeAt(h)] = h;
            }
            var d = m.charAt(64);
            if (d) {
              var x = c.indexOf(d);
              x !== -1 && (u = x);
            }
            return l(c, u, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function l(c, s, u) {
          for (var m = [], f = 0, h = 0; h < s; h++)
            if (h % 4) {
              var d = u[c.charCodeAt(h - 1)] << h % 4 * 2, x = u[c.charCodeAt(h)] >>> 6 - h % 4 * 2, v = d | x;
              m[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return i.create(m, f);
        }
      }(), r.enc.Base64url;
    });
  }(w0)), w0.exports;
}
var F0 = { exports: {} }, or;
function ft() {
  return or || (or = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      return function(t) {
        var a = r, i = a.lib, o = i.WordArray, l = i.Hasher, c = a.algo, s = [];
        (function() {
          for (var x = 0; x < 64; x++)
            s[x] = t.abs(t.sin(x + 1)) * 4294967296 | 0;
        })();
        var u = c.MD5 = l.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(x, v) {
            for (var y = 0; y < 16; y++) {
              var p = v + y, g = x[p];
              x[p] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            var b = this._hash.words, E = x[v + 0], C = x[v + 1], B = x[v + 2], w = x[v + 3], P = x[v + 4], _ = x[v + 5], A = x[v + 6], F = x[v + 7], S = x[v + 8], O = x[v + 9], N = x[v + 10], $ = x[v + 11], q = x[v + 12], W = x[v + 13], J = x[v + 14], G = x[v + 15], k = b[0], I = b[1], M = b[2], T = b[3];
            k = m(k, I, M, T, E, 7, s[0]), T = m(T, k, I, M, C, 12, s[1]), M = m(M, T, k, I, B, 17, s[2]), I = m(I, M, T, k, w, 22, s[3]), k = m(k, I, M, T, P, 7, s[4]), T = m(T, k, I, M, _, 12, s[5]), M = m(M, T, k, I, A, 17, s[6]), I = m(I, M, T, k, F, 22, s[7]), k = m(k, I, M, T, S, 7, s[8]), T = m(T, k, I, M, O, 12, s[9]), M = m(M, T, k, I, N, 17, s[10]), I = m(I, M, T, k, $, 22, s[11]), k = m(k, I, M, T, q, 7, s[12]), T = m(T, k, I, M, W, 12, s[13]), M = m(M, T, k, I, J, 17, s[14]), I = m(I, M, T, k, G, 22, s[15]), k = f(k, I, M, T, C, 5, s[16]), T = f(T, k, I, M, A, 9, s[17]), M = f(M, T, k, I, $, 14, s[18]), I = f(I, M, T, k, E, 20, s[19]), k = f(k, I, M, T, _, 5, s[20]), T = f(T, k, I, M, N, 9, s[21]), M = f(M, T, k, I, G, 14, s[22]), I = f(I, M, T, k, P, 20, s[23]), k = f(k, I, M, T, O, 5, s[24]), T = f(T, k, I, M, J, 9, s[25]), M = f(M, T, k, I, w, 14, s[26]), I = f(I, M, T, k, S, 20, s[27]), k = f(k, I, M, T, W, 5, s[28]), T = f(T, k, I, M, B, 9, s[29]), M = f(M, T, k, I, F, 14, s[30]), I = f(I, M, T, k, q, 20, s[31]), k = h(k, I, M, T, _, 4, s[32]), T = h(T, k, I, M, S, 11, s[33]), M = h(M, T, k, I, $, 16, s[34]), I = h(I, M, T, k, J, 23, s[35]), k = h(k, I, M, T, C, 4, s[36]), T = h(T, k, I, M, P, 11, s[37]), M = h(M, T, k, I, F, 16, s[38]), I = h(I, M, T, k, N, 23, s[39]), k = h(k, I, M, T, W, 4, s[40]), T = h(T, k, I, M, E, 11, s[41]), M = h(M, T, k, I, w, 16, s[42]), I = h(I, M, T, k, A, 23, s[43]), k = h(k, I, M, T, O, 4, s[44]), T = h(T, k, I, M, q, 11, s[45]), M = h(M, T, k, I, G, 16, s[46]), I = h(I, M, T, k, B, 23, s[47]), k = d(k, I, M, T, E, 6, s[48]), T = d(T, k, I, M, F, 10, s[49]), M = d(M, T, k, I, J, 15, s[50]), I = d(I, M, T, k, _, 21, s[51]), k = d(k, I, M, T, q, 6, s[52]), T = d(T, k, I, M, w, 10, s[53]), M = d(M, T, k, I, N, 15, s[54]), I = d(I, M, T, k, C, 21, s[55]), k = d(k, I, M, T, S, 6, s[56]), T = d(T, k, I, M, G, 10, s[57]), M = d(M, T, k, I, A, 15, s[58]), I = d(I, M, T, k, W, 21, s[59]), k = d(k, I, M, T, P, 6, s[60]), T = d(T, k, I, M, $, 10, s[61]), M = d(M, T, k, I, B, 15, s[62]), I = d(I, M, T, k, O, 21, s[63]), b[0] = b[0] + k | 0, b[1] = b[1] + I | 0, b[2] = b[2] + M | 0, b[3] = b[3] + T | 0;
          },
          _doFinalize: function() {
            var x = this._data, v = x.words, y = this._nDataBytes * 8, p = x.sigBytes * 8;
            v[p >>> 5] |= 128 << 24 - p % 32;
            var g = t.floor(y / 4294967296), b = y;
            v[(p + 64 >>> 9 << 4) + 15] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, v[(p + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, x.sigBytes = (v.length + 1) * 4, this._process();
            for (var E = this._hash, C = E.words, B = 0; B < 4; B++) {
              var w = C[B];
              C[B] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var x = l.clone.call(this);
            return x._hash = this._hash.clone(), x;
          }
        });
        function m(x, v, y, p, g, b, E) {
          var C = x + (v & y | ~v & p) + g + E;
          return (C << b | C >>> 32 - b) + v;
        }
        function f(x, v, y, p, g, b, E) {
          var C = x + (v & p | y & ~p) + g + E;
          return (C << b | C >>> 32 - b) + v;
        }
        function h(x, v, y, p, g, b, E) {
          var C = x + (v ^ y ^ p) + g + E;
          return (C << b | C >>> 32 - b) + v;
        }
        function d(x, v, y, p, g, b, E) {
          var C = x + (y ^ (v | ~p)) + g + E;
          return (C << b | C >>> 32 - b) + v;
        }
        a.MD5 = l._createHelper(u), a.HmacMD5 = l._createHmacHelper(u);
      }(Math), r.MD5;
    });
  }(F0)), F0.exports;
}
var S0 = { exports: {} }, sr;
function Ha() {
  return sr || (sr = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.WordArray, o = a.Hasher, l = t.algo, c = [], s = l.SHA1 = o.extend({
          _doReset: function() {
            this._hash = new i.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(u, m) {
            for (var f = this._hash.words, h = f[0], d = f[1], x = f[2], v = f[3], y = f[4], p = 0; p < 80; p++) {
              if (p < 16)
                c[p] = u[m + p] | 0;
              else {
                var g = c[p - 3] ^ c[p - 8] ^ c[p - 14] ^ c[p - 16];
                c[p] = g << 1 | g >>> 31;
              }
              var b = (h << 5 | h >>> 27) + y + c[p];
              p < 20 ? b += (d & x | ~d & v) + 1518500249 : p < 40 ? b += (d ^ x ^ v) + 1859775393 : p < 60 ? b += (d & x | d & v | x & v) - 1894007588 : b += (d ^ x ^ v) - 899497514, y = v, v = x, x = d << 30 | d >>> 2, d = h, h = b;
            }
            f[0] = f[0] + h | 0, f[1] = f[1] + d | 0, f[2] = f[2] + x | 0, f[3] = f[3] + v | 0, f[4] = f[4] + y | 0;
          },
          _doFinalize: function() {
            var u = this._data, m = u.words, f = this._nDataBytes * 8, h = u.sigBytes * 8;
            return m[h >>> 5] |= 128 << 24 - h % 32, m[(h + 64 >>> 9 << 4) + 14] = Math.floor(f / 4294967296), m[(h + 64 >>> 9 << 4) + 15] = f, u.sigBytes = m.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var u = o.clone.call(this);
            return u._hash = this._hash.clone(), u;
          }
        });
        t.SHA1 = o._createHelper(s), t.HmacSHA1 = o._createHmacHelper(s);
      }(), r.SHA1;
    });
  }(S0)), S0.exports;
}
var k0 = { exports: {} }, lr;
function An() {
  return lr || (lr = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      return function(t) {
        var a = r, i = a.lib, o = i.WordArray, l = i.Hasher, c = a.algo, s = [], u = [];
        (function() {
          function h(y) {
            for (var p = t.sqrt(y), g = 2; g <= p; g++)
              if (!(y % g))
                return !1;
            return !0;
          }
          function d(y) {
            return (y - (y | 0)) * 4294967296 | 0;
          }
          for (var x = 2, v = 0; v < 64; )
            h(x) && (v < 8 && (s[v] = d(t.pow(x, 1 / 2))), u[v] = d(t.pow(x, 1 / 3)), v++), x++;
        })();
        var m = [], f = c.SHA256 = l.extend({
          _doReset: function() {
            this._hash = new o.init(s.slice(0));
          },
          _doProcessBlock: function(h, d) {
            for (var x = this._hash.words, v = x[0], y = x[1], p = x[2], g = x[3], b = x[4], E = x[5], C = x[6], B = x[7], w = 0; w < 64; w++) {
              if (w < 16)
                m[w] = h[d + w] | 0;
              else {
                var P = m[w - 15], _ = (P << 25 | P >>> 7) ^ (P << 14 | P >>> 18) ^ P >>> 3, A = m[w - 2], F = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                m[w] = _ + m[w - 7] + F + m[w - 16];
              }
              var S = b & E ^ ~b & C, O = v & y ^ v & p ^ y & p, N = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), $ = (b << 26 | b >>> 6) ^ (b << 21 | b >>> 11) ^ (b << 7 | b >>> 25), q = B + $ + S + u[w] + m[w], W = N + O;
              B = C, C = E, E = b, b = g + q | 0, g = p, p = y, y = v, v = q + W | 0;
            }
            x[0] = x[0] + v | 0, x[1] = x[1] + y | 0, x[2] = x[2] + p | 0, x[3] = x[3] + g | 0, x[4] = x[4] + b | 0, x[5] = x[5] + E | 0, x[6] = x[6] + C | 0, x[7] = x[7] + B | 0;
          },
          _doFinalize: function() {
            var h = this._data, d = h.words, x = this._nDataBytes * 8, v = h.sigBytes * 8;
            return d[v >>> 5] |= 128 << 24 - v % 32, d[(v + 64 >>> 9 << 4) + 14] = t.floor(x / 4294967296), d[(v + 64 >>> 9 << 4) + 15] = x, h.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = l.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        a.SHA256 = l._createHelper(f), a.HmacSHA256 = l._createHmacHelper(f);
      }(Math), r.SHA256;
    });
  }(k0)), k0.exports;
}
var T0 = { exports: {} }, cr;
function cs() {
  return cr || (cr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), An());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.WordArray, o = t.algo, l = o.SHA256, c = o.SHA224 = l.extend({
          _doReset: function() {
            this._hash = new i.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var s = l._doFinalize.call(this);
            return s.sigBytes -= 4, s;
          }
        });
        t.SHA224 = l._createHelper(c), t.HmacSHA224 = l._createHmacHelper(c);
      }(), r.SHA224;
    });
  }(T0)), T0.exports;
}
var I0 = { exports: {} }, ur;
function Na() {
  return ur || (ur = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), p0());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.Hasher, o = t.x64, l = o.Word, c = o.WordArray, s = t.algo;
        function u() {
          return l.create.apply(l, arguments);
        }
        var m = [
          u(1116352408, 3609767458),
          u(1899447441, 602891725),
          u(3049323471, 3964484399),
          u(3921009573, 2173295548),
          u(961987163, 4081628472),
          u(1508970993, 3053834265),
          u(2453635748, 2937671579),
          u(2870763221, 3664609560),
          u(3624381080, 2734883394),
          u(310598401, 1164996542),
          u(607225278, 1323610764),
          u(1426881987, 3590304994),
          u(1925078388, 4068182383),
          u(2162078206, 991336113),
          u(2614888103, 633803317),
          u(3248222580, 3479774868),
          u(3835390401, 2666613458),
          u(4022224774, 944711139),
          u(264347078, 2341262773),
          u(604807628, 2007800933),
          u(770255983, 1495990901),
          u(1249150122, 1856431235),
          u(1555081692, 3175218132),
          u(1996064986, 2198950837),
          u(2554220882, 3999719339),
          u(2821834349, 766784016),
          u(2952996808, 2566594879),
          u(3210313671, 3203337956),
          u(3336571891, 1034457026),
          u(3584528711, 2466948901),
          u(113926993, 3758326383),
          u(338241895, 168717936),
          u(666307205, 1188179964),
          u(773529912, 1546045734),
          u(1294757372, 1522805485),
          u(1396182291, 2643833823),
          u(1695183700, 2343527390),
          u(1986661051, 1014477480),
          u(2177026350, 1206759142),
          u(2456956037, 344077627),
          u(2730485921, 1290863460),
          u(2820302411, 3158454273),
          u(3259730800, 3505952657),
          u(3345764771, 106217008),
          u(3516065817, 3606008344),
          u(3600352804, 1432725776),
          u(4094571909, 1467031594),
          u(275423344, 851169720),
          u(430227734, 3100823752),
          u(506948616, 1363258195),
          u(659060556, 3750685593),
          u(883997877, 3785050280),
          u(958139571, 3318307427),
          u(1322822218, 3812723403),
          u(1537002063, 2003034995),
          u(1747873779, 3602036899),
          u(1955562222, 1575990012),
          u(2024104815, 1125592928),
          u(2227730452, 2716904306),
          u(2361852424, 442776044),
          u(2428436474, 593698344),
          u(2756734187, 3733110249),
          u(3204031479, 2999351573),
          u(3329325298, 3815920427),
          u(3391569614, 3928383900),
          u(3515267271, 566280711),
          u(3940187606, 3454069534),
          u(4118630271, 4000239992),
          u(116418474, 1914138554),
          u(174292421, 2731055270),
          u(289380356, 3203993006),
          u(460393269, 320620315),
          u(685471733, 587496836),
          u(852142971, 1086792851),
          u(1017036298, 365543100),
          u(1126000580, 2618297676),
          u(1288033470, 3409855158),
          u(1501505948, 4234509866),
          u(1607167915, 987167468),
          u(1816402316, 1246189591)
        ], f = [];
        (function() {
          for (var d = 0; d < 80; d++)
            f[d] = u();
        })();
        var h = s.SHA512 = i.extend({
          _doReset: function() {
            this._hash = new c.init([
              new l.init(1779033703, 4089235720),
              new l.init(3144134277, 2227873595),
              new l.init(1013904242, 4271175723),
              new l.init(2773480762, 1595750129),
              new l.init(1359893119, 2917565137),
              new l.init(2600822924, 725511199),
              new l.init(528734635, 4215389547),
              new l.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(d, x) {
            for (var v = this._hash.words, y = v[0], p = v[1], g = v[2], b = v[3], E = v[4], C = v[5], B = v[6], w = v[7], P = y.high, _ = y.low, A = p.high, F = p.low, S = g.high, O = g.low, N = b.high, $ = b.low, q = E.high, W = E.low, J = C.high, G = C.low, k = B.high, I = B.low, M = w.high, T = w.low, ae = P, Z = _, pe = A, K = F, Te = S, Re = O, vt = N, Ye = $, me = q, fe = W, rt = J, at = G, pt = k, it = I, wt = M, ot = T, ge = 0; ge < 80; ge++) {
              var be, Ie, z = f[ge];
              if (ge < 16)
                Ie = z.high = d[x + ge * 2] | 0, be = z.low = d[x + ge * 2 + 1] | 0;
              else {
                var ee = f[ge - 15], De = ee.high, Ue = ee.low, qt = (De >>> 1 | Ue << 31) ^ (De >>> 8 | Ue << 24) ^ De >>> 7, qn = (Ue >>> 1 | De << 31) ^ (Ue >>> 8 | De << 24) ^ (Ue >>> 7 | De << 25), Wn = f[ge - 2], ht = Wn.high, Ft = Wn.low, Gi = (ht >>> 19 | Ft << 13) ^ (ht << 3 | Ft >>> 29) ^ ht >>> 6, Yn = (Ft >>> 19 | ht << 13) ^ (Ft << 3 | ht >>> 29) ^ (Ft >>> 6 | ht << 26), Un = f[ge - 7], Xi = Un.high, Ji = Un.low, Kn = f[ge - 16], Zi = Kn.high, jn = Kn.low;
                be = qn + Ji, Ie = qt + Xi + (be >>> 0 < qn >>> 0 ? 1 : 0), be = be + Yn, Ie = Ie + Gi + (be >>> 0 < Yn >>> 0 ? 1 : 0), be = be + jn, Ie = Ie + Zi + (be >>> 0 < jn >>> 0 ? 1 : 0), z.high = Ie, z.low = be;
              }
              var Qi = me & rt ^ ~me & pt, Gn = fe & at ^ ~fe & it, eo = ae & pe ^ ae & Te ^ pe & Te, to = Z & K ^ Z & Re ^ K & Re, no = (ae >>> 28 | Z << 4) ^ (ae << 30 | Z >>> 2) ^ (ae << 25 | Z >>> 7), Xn = (Z >>> 28 | ae << 4) ^ (Z << 30 | ae >>> 2) ^ (Z << 25 | ae >>> 7), ro = (me >>> 14 | fe << 18) ^ (me >>> 18 | fe << 14) ^ (me << 23 | fe >>> 9), ao = (fe >>> 14 | me << 18) ^ (fe >>> 18 | me << 14) ^ (fe << 23 | me >>> 9), Jn = m[ge], io = Jn.high, Zn = Jn.low, Ae = ot + ao, Ke = wt + ro + (Ae >>> 0 < ot >>> 0 ? 1 : 0), Ae = Ae + Gn, Ke = Ke + Qi + (Ae >>> 0 < Gn >>> 0 ? 1 : 0), Ae = Ae + Zn, Ke = Ke + io + (Ae >>> 0 < Zn >>> 0 ? 1 : 0), Ae = Ae + be, Ke = Ke + Ie + (Ae >>> 0 < be >>> 0 ? 1 : 0), Qn = Xn + to, oo = no + eo + (Qn >>> 0 < Xn >>> 0 ? 1 : 0);
              wt = pt, ot = it, pt = rt, it = at, rt = me, at = fe, fe = Ye + Ae | 0, me = vt + Ke + (fe >>> 0 < Ye >>> 0 ? 1 : 0) | 0, vt = Te, Ye = Re, Te = pe, Re = K, pe = ae, K = Z, Z = Ae + Qn | 0, ae = Ke + oo + (Z >>> 0 < Ae >>> 0 ? 1 : 0) | 0;
            }
            _ = y.low = _ + Z, y.high = P + ae + (_ >>> 0 < Z >>> 0 ? 1 : 0), F = p.low = F + K, p.high = A + pe + (F >>> 0 < K >>> 0 ? 1 : 0), O = g.low = O + Re, g.high = S + Te + (O >>> 0 < Re >>> 0 ? 1 : 0), $ = b.low = $ + Ye, b.high = N + vt + ($ >>> 0 < Ye >>> 0 ? 1 : 0), W = E.low = W + fe, E.high = q + me + (W >>> 0 < fe >>> 0 ? 1 : 0), G = C.low = G + at, C.high = J + rt + (G >>> 0 < at >>> 0 ? 1 : 0), I = B.low = I + it, B.high = k + pt + (I >>> 0 < it >>> 0 ? 1 : 0), T = w.low = T + ot, w.high = M + wt + (T >>> 0 < ot >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var d = this._data, x = d.words, v = this._nDataBytes * 8, y = d.sigBytes * 8;
            x[y >>> 5] |= 128 << 24 - y % 32, x[(y + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), x[(y + 128 >>> 10 << 5) + 31] = v, d.sigBytes = x.length * 4, this._process();
            var p = this._hash.toX32();
            return p;
          },
          clone: function() {
            var d = i.clone.call(this);
            return d._hash = this._hash.clone(), d;
          },
          blockSize: 1024 / 32
        });
        t.SHA512 = i._createHelper(h), t.HmacSHA512 = i._createHmacHelper(h);
      }(), r.SHA512;
    });
  }(I0)), I0.exports;
}
var P0 = { exports: {} }, dr;
function us() {
  return dr || (dr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), p0(), Na());
    })(j, function(r) {
      return function() {
        var t = r, a = t.x64, i = a.Word, o = a.WordArray, l = t.algo, c = l.SHA512, s = l.SHA384 = c.extend({
          _doReset: function() {
            this._hash = new o.init([
              new i.init(3418070365, 3238371032),
              new i.init(1654270250, 914150663),
              new i.init(2438529370, 812702999),
              new i.init(355462360, 4144912697),
              new i.init(1731405415, 4290775857),
              new i.init(2394180231, 1750603025),
              new i.init(3675008525, 1694076839),
              new i.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var u = c._doFinalize.call(this);
            return u.sigBytes -= 16, u;
          }
        });
        t.SHA384 = c._createHelper(s), t.HmacSHA384 = c._createHmacHelper(s);
      }(), r.SHA384;
    });
  }(P0)), P0.exports;
}
var M0 = { exports: {} }, fr;
function ds() {
  return fr || (fr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), p0());
    })(j, function(r) {
      return function(t) {
        var a = r, i = a.lib, o = i.WordArray, l = i.Hasher, c = a.x64, s = c.Word, u = a.algo, m = [], f = [], h = [];
        (function() {
          for (var v = 1, y = 0, p = 0; p < 24; p++) {
            m[v + 5 * y] = (p + 1) * (p + 2) / 2 % 64;
            var g = y % 5, b = (2 * v + 3 * y) % 5;
            v = g, y = b;
          }
          for (var v = 0; v < 5; v++)
            for (var y = 0; y < 5; y++)
              f[v + 5 * y] = y + (2 * v + 3 * y) % 5 * 5;
          for (var E = 1, C = 0; C < 24; C++) {
            for (var B = 0, w = 0, P = 0; P < 7; P++) {
              if (E & 1) {
                var _ = (1 << P) - 1;
                _ < 32 ? w ^= 1 << _ : B ^= 1 << _ - 32;
              }
              E & 128 ? E = E << 1 ^ 113 : E <<= 1;
            }
            h[C] = s.create(B, w);
          }
        })();
        var d = [];
        (function() {
          for (var v = 0; v < 25; v++)
            d[v] = s.create();
        })();
        var x = u.SHA3 = l.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: l.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var v = this._state = [], y = 0; y < 25; y++)
              v[y] = new s.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, y) {
            for (var p = this._state, g = this.blockSize / 2, b = 0; b < g; b++) {
              var E = v[y + 2 * b], C = v[y + 2 * b + 1];
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
              var B = p[b];
              B.high ^= C, B.low ^= E;
            }
            for (var w = 0; w < 24; w++) {
              for (var P = 0; P < 5; P++) {
                for (var _ = 0, A = 0, F = 0; F < 5; F++) {
                  var B = p[P + 5 * F];
                  _ ^= B.high, A ^= B.low;
                }
                var S = d[P];
                S.high = _, S.low = A;
              }
              for (var P = 0; P < 5; P++)
                for (var O = d[(P + 4) % 5], N = d[(P + 1) % 5], $ = N.high, q = N.low, _ = O.high ^ ($ << 1 | q >>> 31), A = O.low ^ (q << 1 | $ >>> 31), F = 0; F < 5; F++) {
                  var B = p[P + 5 * F];
                  B.high ^= _, B.low ^= A;
                }
              for (var W = 1; W < 25; W++) {
                var _, A, B = p[W], J = B.high, G = B.low, k = m[W];
                k < 32 ? (_ = J << k | G >>> 32 - k, A = G << k | J >>> 32 - k) : (_ = G << k - 32 | J >>> 64 - k, A = J << k - 32 | G >>> 64 - k);
                var I = d[f[W]];
                I.high = _, I.low = A;
              }
              var M = d[0], T = p[0];
              M.high = T.high, M.low = T.low;
              for (var P = 0; P < 5; P++)
                for (var F = 0; F < 5; F++) {
                  var W = P + 5 * F, B = p[W], ae = d[W], Z = d[(P + 1) % 5 + 5 * F], pe = d[(P + 2) % 5 + 5 * F];
                  B.high = ae.high ^ ~Z.high & pe.high, B.low = ae.low ^ ~Z.low & pe.low;
                }
              var B = p[0], K = h[w];
              B.high ^= K.high, B.low ^= K.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, y = v.words;
            this._nDataBytes * 8;
            var p = v.sigBytes * 8, g = this.blockSize * 32;
            y[p >>> 5] |= 1 << 24 - p % 32, y[(t.ceil((p + 1) / g) * g >>> 5) - 1] |= 128, v.sigBytes = y.length * 4, this._process();
            for (var b = this._state, E = this.cfg.outputLength / 8, C = E / 8, B = [], w = 0; w < C; w++) {
              var P = b[w], _ = P.high, A = P.low;
              _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, B.push(A), B.push(_);
            }
            return new o.init(B, E);
          },
          clone: function() {
            for (var v = l.clone.call(this), y = v._state = this._state.slice(0), p = 0; p < 25; p++)
              y[p] = y[p].clone();
            return v;
          }
        });
        a.SHA3 = l._createHelper(x), a.HmacSHA3 = l._createHmacHelper(x);
      }(Math), r.SHA3;
    });
  }(M0)), M0.exports;
}
var R0 = { exports: {} }, xr;
function fs() {
  return xr || (xr = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(t) {
        var a = r, i = a.lib, o = i.WordArray, l = i.Hasher, c = a.algo, s = o.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]), u = o.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]), m = o.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]), f = o.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]), h = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), d = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), x = c.RIPEMD160 = l.extend({
          _doReset: function() {
            this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(C, B) {
            for (var w = 0; w < 16; w++) {
              var P = B + w, _ = C[P];
              C[P] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
            }
            var A = this._hash.words, F = h.words, S = d.words, O = s.words, N = u.words, $ = m.words, q = f.words, W, J, G, k, I, M, T, ae, Z, pe;
            M = W = A[0], T = J = A[1], ae = G = A[2], Z = k = A[3], pe = I = A[4];
            for (var K, w = 0; w < 80; w += 1)
              K = W + C[B + O[w]] | 0, w < 16 ? K += v(J, G, k) + F[0] : w < 32 ? K += y(J, G, k) + F[1] : w < 48 ? K += p(J, G, k) + F[2] : w < 64 ? K += g(J, G, k) + F[3] : K += b(J, G, k) + F[4], K = K | 0, K = E(K, $[w]), K = K + I | 0, W = I, I = k, k = E(G, 10), G = J, J = K, K = M + C[B + N[w]] | 0, w < 16 ? K += b(T, ae, Z) + S[0] : w < 32 ? K += g(T, ae, Z) + S[1] : w < 48 ? K += p(T, ae, Z) + S[2] : w < 64 ? K += y(T, ae, Z) + S[3] : K += v(T, ae, Z) + S[4], K = K | 0, K = E(K, q[w]), K = K + pe | 0, M = pe, pe = Z, Z = E(ae, 10), ae = T, T = K;
            K = A[1] + G + Z | 0, A[1] = A[2] + k + pe | 0, A[2] = A[3] + I + M | 0, A[3] = A[4] + W + T | 0, A[4] = A[0] + J + ae | 0, A[0] = K;
          },
          _doFinalize: function() {
            var C = this._data, B = C.words, w = this._nDataBytes * 8, P = C.sigBytes * 8;
            B[P >>> 5] |= 128 << 24 - P % 32, B[(P + 64 >>> 9 << 4) + 14] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360, C.sigBytes = (B.length + 1) * 4, this._process();
            for (var _ = this._hash, A = _.words, F = 0; F < 5; F++) {
              var S = A[F];
              A[F] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            return _;
          },
          clone: function() {
            var C = l.clone.call(this);
            return C._hash = this._hash.clone(), C;
          }
        });
        function v(C, B, w) {
          return C ^ B ^ w;
        }
        function y(C, B, w) {
          return C & B | ~C & w;
        }
        function p(C, B, w) {
          return (C | ~B) ^ w;
        }
        function g(C, B, w) {
          return C & w | B & ~w;
        }
        function b(C, B, w) {
          return C ^ (B | ~w);
        }
        function E(C, B) {
          return C << B | C >>> 32 - B;
        }
        a.RIPEMD160 = l._createHelper(x), a.HmacRIPEMD160 = l._createHmacHelper(x);
      }(), r.RIPEMD160;
    });
  }(R0)), R0.exports;
}
var z0 = { exports: {} }, vr;
function wn() {
  return vr || (vr = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(X());
    })(j, function(r) {
      (function() {
        var t = r, a = t.lib, i = a.Base, o = t.enc, l = o.Utf8, c = t.algo;
        c.HMAC = i.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(s, u) {
            s = this._hasher = new s.init(), typeof u == "string" && (u = l.parse(u));
            var m = s.blockSize, f = m * 4;
            u.sigBytes > f && (u = s.finalize(u)), u.clamp();
            for (var h = this._oKey = u.clone(), d = this._iKey = u.clone(), x = h.words, v = d.words, y = 0; y < m; y++)
              x[y] ^= 1549556828, v[y] ^= 909522486;
            h.sigBytes = d.sigBytes = f, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var s = this._hasher;
            s.reset(), s.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(s) {
            return this._hasher.update(s), this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(s) {
            var u = this._hasher, m = u.finalize(s);
            u.reset();
            var f = u.finalize(this._oKey.clone().concat(m));
            return f;
          }
        });
      })();
    });
  }(z0)), z0.exports;
}
var L0 = { exports: {} }, pr;
function xs() {
  return pr || (pr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), An(), wn());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.Base, o = a.WordArray, l = t.algo, c = l.SHA256, s = l.HMAC, u = l.PBKDF2 = i.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: i.extend({
            keySize: 128 / 32,
            hasher: c,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(m) {
            this.cfg = this.cfg.extend(m);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(m, f) {
            for (var h = this.cfg, d = s.create(h.hasher, m), x = o.create(), v = o.create([1]), y = x.words, p = v.words, g = h.keySize, b = h.iterations; y.length < g; ) {
              var E = d.update(f).finalize(v);
              d.reset();
              for (var C = E.words, B = C.length, w = E, P = 1; P < b; P++) {
                w = d.finalize(w), d.reset();
                for (var _ = w.words, A = 0; A < B; A++)
                  C[A] ^= _[A];
              }
              x.concat(E), p[0]++;
            }
            return x.sigBytes = g * 4, x;
          }
        });
        t.PBKDF2 = function(m, f, h) {
          return u.create(h).compute(m, f);
        };
      }(), r.PBKDF2;
    });
  }(L0)), L0.exports;
}
var $0 = { exports: {} }, hr;
function nt() {
  return hr || (hr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), Ha(), wn());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.Base, o = a.WordArray, l = t.algo, c = l.MD5, s = l.EvpKDF = i.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: i.extend({
            keySize: 128 / 32,
            hasher: c,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(u) {
            this.cfg = this.cfg.extend(u);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(u, m) {
            for (var f, h = this.cfg, d = h.hasher.create(), x = o.create(), v = x.words, y = h.keySize, p = h.iterations; v.length < y; ) {
              f && d.update(f), f = d.update(u).finalize(m), d.reset();
              for (var g = 1; g < p; g++)
                f = d.finalize(f), d.reset();
              x.concat(f);
            }
            return x.sigBytes = y * 4, x;
          }
        });
        t.EvpKDF = function(u, m, f) {
          return s.create(f).compute(u, m);
        };
      }(), r.EvpKDF;
    });
  }($0)), $0.exports;
}
var O0 = { exports: {} }, mr;
function ce() {
  return mr || (mr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), nt());
    })(j, function(r) {
      r.lib.Cipher || function(t) {
        var a = r, i = a.lib, o = i.Base, l = i.WordArray, c = i.BufferedBlockAlgorithm, s = a.enc;
        s.Utf8;
        var u = s.Base64, m = a.algo, f = m.EvpKDF, h = i.Cipher = c.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: o.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(_, A) {
            return this.create(this._ENC_XFORM_MODE, _, A);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(_, A) {
            return this.create(this._DEC_XFORM_MODE, _, A);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(_, A, F) {
            this.cfg = this.cfg.extend(F), this._xformMode = _, this._key = A, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            c.reset.call(this), this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(_) {
            return this._append(_), this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(_) {
            _ && this._append(_);
            var A = this._doFinalize();
            return A;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: function() {
            function _(A) {
              return typeof A == "string" ? P : C;
            }
            return function(A) {
              return {
                encrypt: function(F, S, O) {
                  return _(S).encrypt(A, F, S, O);
                },
                decrypt: function(F, S, O) {
                  return _(S).decrypt(A, F, S, O);
                }
              };
            };
          }()
        });
        i.StreamCipher = h.extend({
          _doFinalize: function() {
            var _ = this._process(!0);
            return _;
          },
          blockSize: 1
        });
        var d = a.mode = {}, x = i.BlockCipherMode = o.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(_, A) {
            return this.Encryptor.create(_, A);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(_, A) {
            return this.Decryptor.create(_, A);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(_, A) {
            this._cipher = _, this._iv = A;
          }
        }), v = d.CBC = function() {
          var _ = x.extend();
          _.Encryptor = _.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(F, S) {
              var O = this._cipher, N = O.blockSize;
              A.call(this, F, S, N), O.encryptBlock(F, S), this._prevBlock = F.slice(S, S + N);
            }
          }), _.Decryptor = _.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(F, S) {
              var O = this._cipher, N = O.blockSize, $ = F.slice(S, S + N);
              O.decryptBlock(F, S), A.call(this, F, S, N), this._prevBlock = $;
            }
          });
          function A(F, S, O) {
            var N, $ = this._iv;
            $ ? (N = $, this._iv = t) : N = this._prevBlock;
            for (var q = 0; q < O; q++)
              F[S + q] ^= N[q];
          }
          return _;
        }(), y = a.pad = {}, p = y.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(_, A) {
            for (var F = A * 4, S = F - _.sigBytes % F, O = S << 24 | S << 16 | S << 8 | S, N = [], $ = 0; $ < S; $ += 4)
              N.push(O);
            var q = l.create(N, S);
            _.concat(q);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(_) {
            var A = _.words[_.sigBytes - 1 >>> 2] & 255;
            _.sigBytes -= A;
          }
        };
        i.BlockCipher = h.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: h.cfg.extend({
            mode: v,
            padding: p
          }),
          reset: function() {
            var _;
            h.reset.call(this);
            var A = this.cfg, F = A.iv, S = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? _ = S.createEncryptor : (_ = S.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == _ ? this._mode.init(this, F && F.words) : (this._mode = _.call(S, this, F && F.words), this._mode.__creator = _);
          },
          _doProcessBlock: function(_, A) {
            this._mode.processBlock(_, A);
          },
          _doFinalize: function() {
            var _, A = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (A.pad(this._data, this.blockSize), _ = this._process(!0)) : (_ = this._process(!0), A.unpad(_)), _;
          },
          blockSize: 128 / 32
        });
        var g = i.CipherParams = o.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(_) {
            this.mixIn(_);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(_) {
            return (_ || this.formatter).stringify(this);
          }
        }), b = a.format = {}, E = b.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(_) {
            var A, F = _.ciphertext, S = _.salt;
            return S ? A = l.create([1398893684, 1701076831]).concat(S).concat(F) : A = F, A.toString(u);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(_) {
            var A, F = u.parse(_), S = F.words;
            return S[0] == 1398893684 && S[1] == 1701076831 && (A = l.create(S.slice(2, 4)), S.splice(0, 4), F.sigBytes -= 16), g.create({ ciphertext: F, salt: A });
          }
        }, C = i.SerializableCipher = o.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: o.extend({
            format: E
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(_, A, F, S) {
            S = this.cfg.extend(S);
            var O = _.createEncryptor(F, S), N = O.finalize(A), $ = O.cfg;
            return g.create({
              ciphertext: N,
              key: F,
              iv: $.iv,
              algorithm: _,
              mode: $.mode,
              padding: $.padding,
              blockSize: _.blockSize,
              formatter: S.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(_, A, F, S) {
            S = this.cfg.extend(S), A = this._parse(A, S.format);
            var O = _.createDecryptor(F, S).finalize(A.ciphertext);
            return O;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(_, A) {
            return typeof _ == "string" ? A.parse(_, this) : _;
          }
        }), B = a.kdf = {}, w = B.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(_, A, F, S, O) {
            if (S || (S = l.random(64 / 8)), O)
              var N = f.create({ keySize: A + F, hasher: O }).compute(_, S);
            else
              var N = f.create({ keySize: A + F }).compute(_, S);
            var $ = l.create(N.words.slice(A), F * 4);
            return N.sigBytes = A * 4, g.create({ key: N, iv: $, salt: S });
          }
        }, P = i.PasswordBasedCipher = C.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: C.cfg.extend({
            kdf: w
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(_, A, F, S) {
            S = this.cfg.extend(S);
            var O = S.kdf.execute(F, _.keySize, _.ivSize, S.salt, S.hasher);
            S.iv = O.iv;
            var N = C.encrypt.call(this, _, A, O.key, S);
            return N.mixIn(O), N;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(_, A, F, S) {
            S = this.cfg.extend(S), A = this._parse(A, S.format);
            var O = S.kdf.execute(F, _.keySize, _.ivSize, A.salt, S.hasher);
            S.iv = O.iv;
            var N = C.decrypt.call(this, _, A, O.key, S);
            return N;
          }
        });
      }();
    });
  }(O0)), O0.exports;
}
var H0 = { exports: {} }, gr;
function vs() {
  return gr || (gr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.mode.CFB = function() {
        var t = r.lib.BlockCipherMode.extend();
        t.Encryptor = t.extend({
          processBlock: function(i, o) {
            var l = this._cipher, c = l.blockSize;
            a.call(this, i, o, c, l), this._prevBlock = i.slice(o, o + c);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(i, o) {
            var l = this._cipher, c = l.blockSize, s = i.slice(o, o + c);
            a.call(this, i, o, c, l), this._prevBlock = s;
          }
        });
        function a(i, o, l, c) {
          var s, u = this._iv;
          u ? (s = u.slice(0), this._iv = void 0) : s = this._prevBlock, c.encryptBlock(s, 0);
          for (var m = 0; m < l; m++)
            i[o + m] ^= s[m];
        }
        return t;
      }(), r.mode.CFB;
    });
  }(H0)), H0.exports;
}
var N0 = { exports: {} }, br;
function ps() {
  return br || (br = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.mode.CTR = function() {
        var t = r.lib.BlockCipherMode.extend(), a = t.Encryptor = t.extend({
          processBlock: function(i, o) {
            var l = this._cipher, c = l.blockSize, s = this._iv, u = this._counter;
            s && (u = this._counter = s.slice(0), this._iv = void 0);
            var m = u.slice(0);
            l.encryptBlock(m, 0), u[c - 1] = u[c - 1] + 1 | 0;
            for (var f = 0; f < c; f++)
              i[o + f] ^= m[f];
          }
        });
        return t.Decryptor = a, t;
      }(), r.mode.CTR;
    });
  }(N0)), N0.exports;
}
var V0 = { exports: {} }, yr;
function hs() {
  return yr || (yr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var t = r.lib.BlockCipherMode.extend();
        function a(l) {
          if ((l >> 24 & 255) === 255) {
            var c = l >> 16 & 255, s = l >> 8 & 255, u = l & 255;
            c === 255 ? (c = 0, s === 255 ? (s = 0, u === 255 ? u = 0 : ++u) : ++s) : ++c, l = 0, l += c << 16, l += s << 8, l += u;
          } else
            l += 1 << 24;
          return l;
        }
        function i(l) {
          return (l[0] = a(l[0])) === 0 && (l[1] = a(l[1])), l;
        }
        var o = t.Encryptor = t.extend({
          processBlock: function(l, c) {
            var s = this._cipher, u = s.blockSize, m = this._iv, f = this._counter;
            m && (f = this._counter = m.slice(0), this._iv = void 0), i(f);
            var h = f.slice(0);
            s.encryptBlock(h, 0);
            for (var d = 0; d < u; d++)
              l[c + d] ^= h[d];
          }
        });
        return t.Decryptor = o, t;
      }(), r.mode.CTRGladman;
    });
  }(V0)), V0.exports;
}
var q0 = { exports: {} }, _r;
function ms() {
  return _r || (_r = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.mode.OFB = function() {
        var t = r.lib.BlockCipherMode.extend(), a = t.Encryptor = t.extend({
          processBlock: function(i, o) {
            var l = this._cipher, c = l.blockSize, s = this._iv, u = this._keystream;
            s && (u = this._keystream = s.slice(0), this._iv = void 0), l.encryptBlock(u, 0);
            for (var m = 0; m < c; m++)
              i[o + m] ^= u[m];
          }
        });
        return t.Decryptor = a, t;
      }(), r.mode.OFB;
    });
  }(q0)), q0.exports;
}
var W0 = { exports: {} }, Cr;
function gs() {
  return Cr || (Cr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.mode.ECB = function() {
        var t = r.lib.BlockCipherMode.extend();
        return t.Encryptor = t.extend({
          processBlock: function(a, i) {
            this._cipher.encryptBlock(a, i);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(a, i) {
            this._cipher.decryptBlock(a, i);
          }
        }), t;
      }(), r.mode.ECB;
    });
  }(W0)), W0.exports;
}
var Y0 = { exports: {} }, Er;
function bs() {
  return Er || (Er = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(t, a) {
          var i = t.sigBytes, o = a * 4, l = o - i % o, c = i + l - 1;
          t.clamp(), t.words[c >>> 2] |= l << 24 - c % 4 * 8, t.sigBytes += l;
        },
        unpad: function(t) {
          var a = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= a;
        }
      }, r.pad.Ansix923;
    });
  }(Y0)), Y0.exports;
}
var U0 = { exports: {} }, Br;
function ys() {
  return Br || (Br = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.pad.Iso10126 = {
        pad: function(t, a) {
          var i = a * 4, o = i - t.sigBytes % i;
          t.concat(r.lib.WordArray.random(o - 1)).concat(r.lib.WordArray.create([o << 24], 1));
        },
        unpad: function(t) {
          var a = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= a;
        }
      }, r.pad.Iso10126;
    });
  }(U0)), U0.exports;
}
var K0 = { exports: {} }, Dr;
function _s() {
  return Dr || (Dr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.pad.Iso97971 = {
        pad: function(t, a) {
          t.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(t, a);
        },
        unpad: function(t) {
          r.pad.ZeroPadding.unpad(t), t.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(K0)), K0.exports;
}
var j0 = { exports: {} }, Ar;
function Cs() {
  return Ar || (Ar = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(t, a) {
          var i = a * 4;
          t.clamp(), t.sigBytes += i - (t.sigBytes % i || i);
        },
        unpad: function(t) {
          for (var a = t.words, i = t.sigBytes - 1, i = t.sigBytes - 1; i >= 0; i--)
            if (a[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
              t.sigBytes = i + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(j0)), j0.exports;
}
var G0 = { exports: {} }, wr;
function Es() {
  return wr || (wr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(G0)), G0.exports;
}
var X0 = { exports: {} }, Fr;
function Bs() {
  return Fr || (Fr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), ce());
    })(j, function(r) {
      return function(t) {
        var a = r, i = a.lib, o = i.CipherParams, l = a.enc, c = l.Hex, s = a.format;
        s.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(u) {
            return u.ciphertext.toString(c);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(u) {
            var m = c.parse(u);
            return o.create({ ciphertext: m });
          }
        };
      }(), r.format.Hex;
    });
  }(X0)), X0.exports;
}
var J0 = { exports: {} }, Sr;
function Ds() {
  return Sr || (Sr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.BlockCipher, o = t.algo, l = [], c = [], s = [], u = [], m = [], f = [], h = [], d = [], x = [], v = [];
        (function() {
          for (var g = [], b = 0; b < 256; b++)
            b < 128 ? g[b] = b << 1 : g[b] = b << 1 ^ 283;
          for (var E = 0, C = 0, b = 0; b < 256; b++) {
            var B = C ^ C << 1 ^ C << 2 ^ C << 3 ^ C << 4;
            B = B >>> 8 ^ B & 255 ^ 99, l[E] = B, c[B] = E;
            var w = g[E], P = g[w], _ = g[P], A = g[B] * 257 ^ B * 16843008;
            s[E] = A << 24 | A >>> 8, u[E] = A << 16 | A >>> 16, m[E] = A << 8 | A >>> 24, f[E] = A;
            var A = _ * 16843009 ^ P * 65537 ^ w * 257 ^ E * 16843008;
            h[B] = A << 24 | A >>> 8, d[B] = A << 16 | A >>> 16, x[B] = A << 8 | A >>> 24, v[B] = A, E ? (E = w ^ g[g[g[_ ^ w]]], C ^= g[g[C]]) : E = C = 1;
          }
        })();
        var y = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], p = o.AES = i.extend({
          _doReset: function() {
            var g;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var b = this._keyPriorReset = this._key, E = b.words, C = b.sigBytes / 4, B = this._nRounds = C + 6, w = (B + 1) * 4, P = this._keySchedule = [], _ = 0; _ < w; _++)
                _ < C ? P[_] = E[_] : (g = P[_ - 1], _ % C ? C > 6 && _ % C == 4 && (g = l[g >>> 24] << 24 | l[g >>> 16 & 255] << 16 | l[g >>> 8 & 255] << 8 | l[g & 255]) : (g = g << 8 | g >>> 24, g = l[g >>> 24] << 24 | l[g >>> 16 & 255] << 16 | l[g >>> 8 & 255] << 8 | l[g & 255], g ^= y[_ / C | 0] << 24), P[_] = P[_ - C] ^ g);
              for (var A = this._invKeySchedule = [], F = 0; F < w; F++) {
                var _ = w - F;
                if (F % 4)
                  var g = P[_];
                else
                  var g = P[_ - 4];
                F < 4 || _ <= 4 ? A[F] = g : A[F] = h[l[g >>> 24]] ^ d[l[g >>> 16 & 255]] ^ x[l[g >>> 8 & 255]] ^ v[l[g & 255]];
              }
            }
          },
          encryptBlock: function(g, b) {
            this._doCryptBlock(g, b, this._keySchedule, s, u, m, f, l);
          },
          decryptBlock: function(g, b) {
            var E = g[b + 1];
            g[b + 1] = g[b + 3], g[b + 3] = E, this._doCryptBlock(g, b, this._invKeySchedule, h, d, x, v, c);
            var E = g[b + 1];
            g[b + 1] = g[b + 3], g[b + 3] = E;
          },
          _doCryptBlock: function(g, b, E, C, B, w, P, _) {
            for (var A = this._nRounds, F = g[b] ^ E[0], S = g[b + 1] ^ E[1], O = g[b + 2] ^ E[2], N = g[b + 3] ^ E[3], $ = 4, q = 1; q < A; q++) {
              var W = C[F >>> 24] ^ B[S >>> 16 & 255] ^ w[O >>> 8 & 255] ^ P[N & 255] ^ E[$++], J = C[S >>> 24] ^ B[O >>> 16 & 255] ^ w[N >>> 8 & 255] ^ P[F & 255] ^ E[$++], G = C[O >>> 24] ^ B[N >>> 16 & 255] ^ w[F >>> 8 & 255] ^ P[S & 255] ^ E[$++], k = C[N >>> 24] ^ B[F >>> 16 & 255] ^ w[S >>> 8 & 255] ^ P[O & 255] ^ E[$++];
              F = W, S = J, O = G, N = k;
            }
            var W = (_[F >>> 24] << 24 | _[S >>> 16 & 255] << 16 | _[O >>> 8 & 255] << 8 | _[N & 255]) ^ E[$++], J = (_[S >>> 24] << 24 | _[O >>> 16 & 255] << 16 | _[N >>> 8 & 255] << 8 | _[F & 255]) ^ E[$++], G = (_[O >>> 24] << 24 | _[N >>> 16 & 255] << 16 | _[F >>> 8 & 255] << 8 | _[S & 255]) ^ E[$++], k = (_[N >>> 24] << 24 | _[F >>> 16 & 255] << 16 | _[S >>> 8 & 255] << 8 | _[O & 255]) ^ E[$++];
            g[b] = W, g[b + 1] = J, g[b + 2] = G, g[b + 3] = k;
          },
          keySize: 256 / 32
        });
        t.AES = i._createHelper(p);
      }(), r.AES;
    });
  }(J0)), J0.exports;
}
var Z0 = { exports: {} }, kr;
function As() {
  return kr || (kr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.WordArray, o = a.BlockCipher, l = t.algo, c = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], s = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], u = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], m = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], f = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], h = l.DES = o.extend({
          _doReset: function() {
            for (var y = this._key, p = y.words, g = [], b = 0; b < 56; b++) {
              var E = c[b] - 1;
              g[b] = p[E >>> 5] >>> 31 - E % 32 & 1;
            }
            for (var C = this._subKeys = [], B = 0; B < 16; B++) {
              for (var w = C[B] = [], P = u[B], b = 0; b < 24; b++)
                w[b / 6 | 0] |= g[(s[b] - 1 + P) % 28] << 31 - b % 6, w[4 + (b / 6 | 0)] |= g[28 + (s[b + 24] - 1 + P) % 28] << 31 - b % 6;
              w[0] = w[0] << 1 | w[0] >>> 31;
              for (var b = 1; b < 7; b++)
                w[b] = w[b] >>> (b - 1) * 4 + 3;
              w[7] = w[7] << 5 | w[7] >>> 27;
            }
            for (var _ = this._invSubKeys = [], b = 0; b < 16; b++)
              _[b] = C[15 - b];
          },
          encryptBlock: function(y, p) {
            this._doCryptBlock(y, p, this._subKeys);
          },
          decryptBlock: function(y, p) {
            this._doCryptBlock(y, p, this._invSubKeys);
          },
          _doCryptBlock: function(y, p, g) {
            this._lBlock = y[p], this._rBlock = y[p + 1], d.call(this, 4, 252645135), d.call(this, 16, 65535), x.call(this, 2, 858993459), x.call(this, 8, 16711935), d.call(this, 1, 1431655765);
            for (var b = 0; b < 16; b++) {
              for (var E = g[b], C = this._lBlock, B = this._rBlock, w = 0, P = 0; P < 8; P++)
                w |= m[P][((B ^ E[P]) & f[P]) >>> 0];
              this._lBlock = B, this._rBlock = C ^ w;
            }
            var _ = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = _, d.call(this, 1, 1431655765), x.call(this, 8, 16711935), x.call(this, 2, 858993459), d.call(this, 16, 65535), d.call(this, 4, 252645135), y[p] = this._lBlock, y[p + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function d(y, p) {
          var g = (this._lBlock >>> y ^ this._rBlock) & p;
          this._rBlock ^= g, this._lBlock ^= g << y;
        }
        function x(y, p) {
          var g = (this._rBlock >>> y ^ this._lBlock) & p;
          this._lBlock ^= g, this._rBlock ^= g << y;
        }
        t.DES = o._createHelper(h);
        var v = l.TripleDES = o.extend({
          _doReset: function() {
            var y = this._key, p = y.words;
            if (p.length !== 2 && p.length !== 4 && p.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var g = p.slice(0, 2), b = p.length < 4 ? p.slice(0, 2) : p.slice(2, 4), E = p.length < 6 ? p.slice(0, 2) : p.slice(4, 6);
            this._des1 = h.createEncryptor(i.create(g)), this._des2 = h.createEncryptor(i.create(b)), this._des3 = h.createEncryptor(i.create(E));
          },
          encryptBlock: function(y, p) {
            this._des1.encryptBlock(y, p), this._des2.decryptBlock(y, p), this._des3.encryptBlock(y, p);
          },
          decryptBlock: function(y, p) {
            this._des3.decryptBlock(y, p), this._des2.encryptBlock(y, p), this._des1.decryptBlock(y, p);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        t.TripleDES = o._createHelper(v);
      }(), r.TripleDES;
    });
  }(Z0)), Z0.exports;
}
var Q0 = { exports: {} }, Tr;
function ws() {
  return Tr || (Tr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.StreamCipher, o = t.algo, l = o.RC4 = i.extend({
          _doReset: function() {
            for (var u = this._key, m = u.words, f = u.sigBytes, h = this._S = [], d = 0; d < 256; d++)
              h[d] = d;
            for (var d = 0, x = 0; d < 256; d++) {
              var v = d % f, y = m[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              x = (x + h[d] + y) % 256;
              var p = h[d];
              h[d] = h[x], h[x] = p;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(u, m) {
            u[m] ^= c.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function c() {
          for (var u = this._S, m = this._i, f = this._j, h = 0, d = 0; d < 4; d++) {
            m = (m + 1) % 256, f = (f + u[m]) % 256;
            var x = u[m];
            u[m] = u[f], u[f] = x, h |= u[(u[m] + u[f]) % 256] << 24 - d * 8;
          }
          return this._i = m, this._j = f, h;
        }
        t.RC4 = i._createHelper(l);
        var s = o.RC4Drop = l.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: l.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            l._doReset.call(this);
            for (var u = this.cfg.drop; u > 0; u--)
              c.call(this);
          }
        });
        t.RC4Drop = i._createHelper(s);
      }(), r.RC4;
    });
  }(Q0)), Q0.exports;
}
var en = { exports: {} }, Ir;
function Fs() {
  return Ir || (Ir = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.StreamCipher, o = t.algo, l = [], c = [], s = [], u = o.Rabbit = i.extend({
          _doReset: function() {
            for (var f = this._key.words, h = this.cfg.iv, d = 0; d < 4; d++)
              f[d] = (f[d] << 8 | f[d] >>> 24) & 16711935 | (f[d] << 24 | f[d] >>> 8) & 4278255360;
            var x = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], v = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var d = 0; d < 4; d++)
              m.call(this);
            for (var d = 0; d < 8; d++)
              v[d] ^= x[d + 4 & 7];
            if (h) {
              var y = h.words, p = y[0], g = y[1], b = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, E = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, C = b >>> 16 | E & 4294901760, B = E << 16 | b & 65535;
              v[0] ^= b, v[1] ^= C, v[2] ^= E, v[3] ^= B, v[4] ^= b, v[5] ^= C, v[6] ^= E, v[7] ^= B;
              for (var d = 0; d < 4; d++)
                m.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var d = this._X;
            m.call(this), l[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, l[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, l[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, l[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var x = 0; x < 4; x++)
              l[x] = (l[x] << 8 | l[x] >>> 24) & 16711935 | (l[x] << 24 | l[x] >>> 8) & 4278255360, f[h + x] ^= l[x];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function m() {
          for (var f = this._X, h = this._C, d = 0; d < 8; d++)
            c[d] = h[d];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var x = f[d] + h[d], v = x & 65535, y = x >>> 16, p = ((v * v >>> 17) + v * y >>> 15) + y * y, g = ((x & 4294901760) * x | 0) + ((x & 65535) * x | 0);
            s[d] = p ^ g;
          }
          f[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, f[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, f[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, f[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, f[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, f[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, f[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, f[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        t.Rabbit = i._createHelper(u);
      }(), r.Rabbit;
    });
  }(en)), en.exports;
}
var tn = { exports: {} }, Pr;
function Ss() {
  return Pr || (Pr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.StreamCipher, o = t.algo, l = [], c = [], s = [], u = o.RabbitLegacy = i.extend({
          _doReset: function() {
            var f = this._key.words, h = this.cfg.iv, d = this._X = [
              f[0],
              f[3] << 16 | f[2] >>> 16,
              f[1],
              f[0] << 16 | f[3] >>> 16,
              f[2],
              f[1] << 16 | f[0] >>> 16,
              f[3],
              f[2] << 16 | f[1] >>> 16
            ], x = this._C = [
              f[2] << 16 | f[2] >>> 16,
              f[0] & 4294901760 | f[1] & 65535,
              f[3] << 16 | f[3] >>> 16,
              f[1] & 4294901760 | f[2] & 65535,
              f[0] << 16 | f[0] >>> 16,
              f[2] & 4294901760 | f[3] & 65535,
              f[1] << 16 | f[1] >>> 16,
              f[3] & 4294901760 | f[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              m.call(this);
            for (var v = 0; v < 8; v++)
              x[v] ^= d[v + 4 & 7];
            if (h) {
              var y = h.words, p = y[0], g = y[1], b = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, E = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, C = b >>> 16 | E & 4294901760, B = E << 16 | b & 65535;
              x[0] ^= b, x[1] ^= C, x[2] ^= E, x[3] ^= B, x[4] ^= b, x[5] ^= C, x[6] ^= E, x[7] ^= B;
              for (var v = 0; v < 4; v++)
                m.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var d = this._X;
            m.call(this), l[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, l[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, l[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, l[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var x = 0; x < 4; x++)
              l[x] = (l[x] << 8 | l[x] >>> 24) & 16711935 | (l[x] << 24 | l[x] >>> 8) & 4278255360, f[h + x] ^= l[x];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function m() {
          for (var f = this._X, h = this._C, d = 0; d < 8; d++)
            c[d] = h[d];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var x = f[d] + h[d], v = x & 65535, y = x >>> 16, p = ((v * v >>> 17) + v * y >>> 15) + y * y, g = ((x & 4294901760) * x | 0) + ((x & 65535) * x | 0);
            s[d] = p ^ g;
          }
          f[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, f[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, f[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, f[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, f[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, f[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, f[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, f[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        t.RabbitLegacy = i._createHelper(u);
      }(), r.RabbitLegacy;
    });
  }(tn)), tn.exports;
}
var nn = { exports: {} }, Mr;
function ks() {
  return Mr || (Mr = 1, function(e, n) {
    (function(r, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(r) {
      return function() {
        var t = r, a = t.lib, i = a.BlockCipher, o = t.algo;
        const l = 16, c = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ], s = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var u = {
          pbox: [],
          sbox: []
        };
        function m(v, y) {
          let p = y >> 24 & 255, g = y >> 16 & 255, b = y >> 8 & 255, E = y & 255, C = v.sbox[0][p] + v.sbox[1][g];
          return C = C ^ v.sbox[2][b], C = C + v.sbox[3][E], C;
        }
        function f(v, y, p) {
          let g = y, b = p, E;
          for (let C = 0; C < l; ++C)
            g = g ^ v.pbox[C], b = m(v, g) ^ b, E = g, g = b, b = E;
          return E = g, g = b, b = E, b = b ^ v.pbox[l], g = g ^ v.pbox[l + 1], { left: g, right: b };
        }
        function h(v, y, p) {
          let g = y, b = p, E;
          for (let C = l + 1; C > 1; --C)
            g = g ^ v.pbox[C], b = m(v, g) ^ b, E = g, g = b, b = E;
          return E = g, g = b, b = E, b = b ^ v.pbox[1], g = g ^ v.pbox[0], { left: g, right: b };
        }
        function d(v, y, p) {
          for (let B = 0; B < 4; B++) {
            v.sbox[B] = [];
            for (let w = 0; w < 256; w++)
              v.sbox[B][w] = s[B][w];
          }
          let g = 0;
          for (let B = 0; B < l + 2; B++)
            v.pbox[B] = c[B] ^ y[g], g++, g >= p && (g = 0);
          let b = 0, E = 0, C = 0;
          for (let B = 0; B < l + 2; B += 2)
            C = f(v, b, E), b = C.left, E = C.right, v.pbox[B] = b, v.pbox[B + 1] = E;
          for (let B = 0; B < 4; B++)
            for (let w = 0; w < 256; w += 2)
              C = f(v, b, E), b = C.left, E = C.right, v.sbox[B][w] = b, v.sbox[B][w + 1] = E;
          return !0;
        }
        var x = o.Blowfish = i.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var v = this._keyPriorReset = this._key, y = v.words, p = v.sigBytes / 4;
              d(u, y, p);
            }
          },
          encryptBlock: function(v, y) {
            var p = f(u, v[y], v[y + 1]);
            v[y] = p.left, v[y + 1] = p.right;
          },
          decryptBlock: function(v, y) {
            var p = h(u, v[y], v[y + 1]);
            v[y] = p.left, v[y + 1] = p.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        t.Blowfish = i._createHelper(x);
      }(), r.Blowfish;
    });
  }(nn)), nn.exports;
}
(function(e, n) {
  (function(r, t, a) {
    e.exports = t(X(), p0(), os(), ss(), dt(), ls(), ft(), Ha(), An(), cs(), Na(), us(), ds(), fs(), wn(), xs(), nt(), ce(), vs(), ps(), hs(), ms(), gs(), bs(), ys(), _s(), Cs(), Es(), Bs(), Ds(), As(), ws(), Fs(), Ss(), ks());
  })(j, function(r) {
    return r;
  });
})(Oa);
var Ts = Oa.exports;
const _e = /* @__PURE__ */ es(Ts);
function Is(e, n) {
  e = e.toString();
  var r = _e.enc.Utf8.parse(n), t = _e.enc.Utf8.parse(n);
  return _e.DES.encrypt(
    e,
    r,
    {
      iv: t,
      mode: _e.mode.CBC,
      padding: _e.pad.Pkcs7
    }
  ).ciphertext.toString();
}
function Ps(e, n) {
  var r = _e.enc.Utf8.parse(n), t = _e.enc.Utf8.parse(n), a = _e.DES.decrypt({
    ciphertext: _e.enc.Hex.parse(e)
  }, r, {
    iv: t,
    mode: _e.mode.CBC,
    padding: _e.pad.Pkcs7
  });
  return a.toString(_e.enc.Utf8);
}
function Ms(e) {
  return _e.SHA256(e).toString();
}
function Rs(e) {
  return _e.MD5(e).toString();
}
const et = {
  setDES: Is,
  getDES: Ps,
  setSha256: Ms,
  setMD5: Rs
}, i0 = "LJS_TIME_KEY_20231227";
function zs(e) {
  return JSON.parse(sessionStorage.getItem(e));
}
function Ls(e, n) {
  sessionStorage.setItem(e, JSON.stringify(n));
}
function $s(e) {
  sessionStorage.removeItem(e);
}
function Os() {
  sessionStorage.clear();
}
function Hs(e) {
  const n = JSON.parse(localStorage.getItem(e));
  return n === null ? null : n.time && (n.startTime = et.getDES(n.startTime, i0), n.time = et.getDES(n.time, i0), (/* @__PURE__ */ new Date()).getTime() - n.startTime > n.time) ? (Va(e), null) : n.value;
}
function Ns(e, n, r = 0) {
  const t = {
    value: n
  };
  r > 0 && (t.startTime = et.setDES((/* @__PURE__ */ new Date()).getTime(), i0), t.time = et.setDES(r, i0)), localStorage.setItem(e, JSON.stringify(t));
}
function Va(e) {
  localStorage.removeItem(e);
}
function Vs() {
  localStorage.clear();
}
function qs(e, n = () => {
}) {
  e.commit("SET_token", null), e.commit("SET_userinfo", null), e.commit("SET_apiShake", []), e.commit("SET_permissions", []), e.commit("SET_roles", []), e.commit("SET_routerList", []), e.commit("SET_menuList", []), e.commit("SET_menuOpenList", []), e.commit("SET_menuNowOpen", null), e.commit("SET_menuShrink", !1), n();
}
const qa = {
  getSS: zs,
  setSS: Ls,
  delSS: $s,
  clearSS: Os,
  getLS: Hs,
  setLS: Ns,
  delLS: Va,
  clearLS: Vs,
  clearVuex: qs
};
function Ws(e) {
  if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(e))
    return;
  let r = e.toLowerCase().replace(/\#/g, ""), t = r.length;
  if (t == 3) {
    let o = "";
    for (var a = 0; a < t; a++)
      o += r.slice(a, a + 1).concat(r.slice(a, a + 1));
    r = o;
  }
  let i = [];
  for (let o = 0; o < 6; o = o + 2) {
    let l = r.slice(o, o + 2);
    i.push(parseInt("0x" + l));
  }
  return i.join(",");
}
function Ys(e) {
  if (!/^(rgb|RGB)/.test(e))
    return;
  var r = e.slice(4, e.length - 1).split(",");
  let t = "#";
  for (var a = 0; a < r.length; a++) {
    var i = Number(r[a]).toString(16);
    i == "0" && (i = i + "0"), t += i;
  }
  return t;
}
function Us() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
}
const Wa = {
  c16ToRgb: Ws,
  rgbToC16: Ys,
  random16Color: Us
}, Ks = 30 * 1;
function js() {
  const e = new Date(et.getDES(window.g.SRKJ_APP, "SRKJ_LJS_license_date_2023_07_27")).getTime();
  return ((/* @__PURE__ */ new Date()).getTime() - e) / 1e3 / 60 / 60 / 24 <= Ks;
}
const Ya = {
  licenseDateCheck: js
}, Ua = Symbol(), Qt = "el", Gs = "is-", st = (e, n, r, t, a) => {
  let i = `${e}-${n}`;
  return r && (i += `-${r}`), t && (i += `__${t}`), a && (i += `--${a}`), i;
}, Ka = Symbol("namespaceContextKey"), ja = (e) => {
  const n = e || (He() ? Ee(Ka, ie(Qt)) : ie(Qt));
  return H(() => R(n) || Qt);
}, Ve = (e, n) => {
  const r = ja(n);
  return {
    namespace: r,
    b: (x = "") => st(r.value, e, x, "", ""),
    e: (x) => x ? st(r.value, e, "", x, "") : "",
    m: (x) => x ? st(r.value, e, "", "", x) : "",
    be: (x, v) => x && v ? st(r.value, e, x, v, "") : "",
    em: (x, v) => x && v ? st(r.value, e, "", x, v) : "",
    bm: (x, v) => x && v ? st(r.value, e, x, "", v) : "",
    bem: (x, v, y) => x && v && y ? st(r.value, e, x, v, y) : "",
    is: (x, ...v) => {
      const y = v.length >= 1 ? v[0] : !0;
      return x && y ? `${Gs}${x}` : "";
    },
    cssVar: (x) => {
      const v = {};
      for (const y in x)
        x[y] && (v[`--${r.value}-${y}`] = x[y]);
      return v;
    },
    cssVarName: (x) => `--${r.value}-${x}`,
    cssVarBlock: (x) => {
      const v = {};
      for (const y in x)
        x[y] && (v[`--${r.value}-${e}-${y}`] = x[y]);
      return v;
    },
    cssVarBlockName: (x) => `--${r.value}-${e}-${x}`
  };
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const zt = () => {
}, Xs = Object.prototype.hasOwnProperty, o0 = (e, n) => Xs.call(e, n), yt = (e) => typeof e == "function", $e = (e) => typeof e == "string", _t = (e) => e !== null && typeof e == "object", Js = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (r) => n[r] || (n[r] = e(r));
}, Zs = /-(\w)/g, Qs = Js((e) => e.replace(Zs, (n, r) => r ? r.toUpperCase() : ""));
var el = typeof global == "object" && global && global.Object === Object && global;
const tl = el;
var nl = typeof self == "object" && self && self.Object === Object && self, rl = tl || nl || Function("return this")();
const Fn = rl;
var al = Fn.Symbol;
const tt = al;
var Ga = Object.prototype, il = Ga.hasOwnProperty, ol = Ga.toString, kt = tt ? tt.toStringTag : void 0;
function sl(e) {
  var n = il.call(e, kt), r = e[kt];
  try {
    e[kt] = void 0;
    var t = !0;
  } catch {
  }
  var a = ol.call(e);
  return t && (n ? e[kt] = r : delete e[kt]), a;
}
var ll = Object.prototype, cl = ll.toString;
function ul(e) {
  return cl.call(e);
}
var dl = "[object Null]", fl = "[object Undefined]", Rr = tt ? tt.toStringTag : void 0;
function Sn(e) {
  return e == null ? e === void 0 ? fl : dl : Rr && Rr in Object(e) ? sl(e) : ul(e);
}
function kn(e) {
  return e != null && typeof e == "object";
}
var xl = "[object Symbol]";
function Tn(e) {
  return typeof e == "symbol" || kn(e) && Sn(e) == xl;
}
function vl(e, n) {
  for (var r = -1, t = e == null ? 0 : e.length, a = Array(t); ++r < t; )
    a[r] = n(e[r], r, e);
  return a;
}
var pl = Array.isArray;
const Vt = pl;
var hl = 1 / 0, zr = tt ? tt.prototype : void 0, Lr = zr ? zr.toString : void 0;
function Xa(e) {
  if (typeof e == "string")
    return e;
  if (Vt(e))
    return vl(e, Xa) + "";
  if (Tn(e))
    return Lr ? Lr.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -hl ? "-0" : n;
}
function s0(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function ml(e) {
  return e;
}
var gl = "[object AsyncFunction]", bl = "[object Function]", yl = "[object GeneratorFunction]", _l = "[object Proxy]";
function Cl(e) {
  if (!s0(e))
    return !1;
  var n = Sn(e);
  return n == bl || n == yl || n == gl || n == _l;
}
var El = Fn["__core-js_shared__"];
const rn = El;
var $r = function() {
  var e = /[^.]+$/.exec(rn && rn.keys && rn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Bl(e) {
  return !!$r && $r in e;
}
var Dl = Function.prototype, Al = Dl.toString;
function wl(e) {
  if (e != null) {
    try {
      return Al.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Fl = /[\\^$.*+?()[\]{}|]/g, Sl = /^\[object .+?Constructor\]$/, kl = Function.prototype, Tl = Object.prototype, Il = kl.toString, Pl = Tl.hasOwnProperty, Ml = RegExp(
  "^" + Il.call(Pl).replace(Fl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Rl(e) {
  if (!s0(e) || Bl(e))
    return !1;
  var n = Cl(e) ? Ml : Sl;
  return n.test(wl(e));
}
function zl(e, n) {
  return e == null ? void 0 : e[n];
}
function In(e, n) {
  var r = zl(e, n);
  return Rl(r) ? r : void 0;
}
function Ll(e, n, r) {
  switch (r.length) {
    case 0:
      return e.call(n);
    case 1:
      return e.call(n, r[0]);
    case 2:
      return e.call(n, r[0], r[1]);
    case 3:
      return e.call(n, r[0], r[1], r[2]);
  }
  return e.apply(n, r);
}
var $l = 800, Ol = 16, Hl = Date.now;
function Nl(e) {
  var n = 0, r = 0;
  return function() {
    var t = Hl(), a = Ol - (t - r);
    if (r = t, a > 0) {
      if (++n >= $l)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function Vl(e) {
  return function() {
    return e;
  };
}
var ql = function() {
  try {
    var e = In(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const l0 = ql;
var Wl = l0 ? function(e, n) {
  return l0(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Vl(n),
    writable: !0
  });
} : ml;
const Yl = Wl;
var Ul = Nl(Yl);
const Kl = Ul;
var jl = 9007199254740991, Gl = /^(?:0|[1-9]\d*)$/;
function Ja(e, n) {
  var r = typeof e;
  return n = n ?? jl, !!n && (r == "number" || r != "symbol" && Gl.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Xl(e, n, r) {
  n == "__proto__" && l0 ? l0(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function Za(e, n) {
  return e === n || e !== e && n !== n;
}
var Jl = Object.prototype, Zl = Jl.hasOwnProperty;
function Ql(e, n, r) {
  var t = e[n];
  (!(Zl.call(e, n) && Za(t, r)) || r === void 0 && !(n in e)) && Xl(e, n, r);
}
var Or = Math.max;
function ec(e, n, r) {
  return n = Or(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var t = arguments, a = -1, i = Or(t.length - n, 0), o = Array(i); ++a < i; )
      o[a] = t[n + a];
    a = -1;
    for (var l = Array(n + 1); ++a < n; )
      l[a] = t[a];
    return l[n] = r(o), Ll(e, this, l);
  };
}
var tc = 9007199254740991;
function nc(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= tc;
}
var rc = "[object Arguments]";
function Hr(e) {
  return kn(e) && Sn(e) == rc;
}
var Qa = Object.prototype, ac = Qa.hasOwnProperty, ic = Qa.propertyIsEnumerable, oc = Hr(function() {
  return arguments;
}()) ? Hr : function(e) {
  return kn(e) && ac.call(e, "callee") && !ic.call(e, "callee");
};
const ei = oc;
var sc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lc = /^\w*$/;
function cc(e, n) {
  if (Vt(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Tn(e) ? !0 : lc.test(e) || !sc.test(e) || n != null && e in Object(n);
}
var uc = In(Object, "create");
const $t = uc;
function dc() {
  this.__data__ = $t ? $t(null) : {}, this.size = 0;
}
function fc(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var xc = "__lodash_hash_undefined__", vc = Object.prototype, pc = vc.hasOwnProperty;
function hc(e) {
  var n = this.__data__;
  if ($t) {
    var r = n[e];
    return r === xc ? void 0 : r;
  }
  return pc.call(n, e) ? n[e] : void 0;
}
var mc = Object.prototype, gc = mc.hasOwnProperty;
function bc(e) {
  var n = this.__data__;
  return $t ? n[e] !== void 0 : gc.call(n, e);
}
var yc = "__lodash_hash_undefined__";
function _c(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = $t && n === void 0 ? yc : n, this;
}
function ut(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var t = e[n];
    this.set(t[0], t[1]);
  }
}
ut.prototype.clear = dc;
ut.prototype.delete = fc;
ut.prototype.get = hc;
ut.prototype.has = bc;
ut.prototype.set = _c;
function Cc() {
  this.__data__ = [], this.size = 0;
}
function h0(e, n) {
  for (var r = e.length; r--; )
    if (Za(e[r][0], n))
      return r;
  return -1;
}
var Ec = Array.prototype, Bc = Ec.splice;
function Dc(e) {
  var n = this.__data__, r = h0(n, e);
  if (r < 0)
    return !1;
  var t = n.length - 1;
  return r == t ? n.pop() : Bc.call(n, r, 1), --this.size, !0;
}
function Ac(e) {
  var n = this.__data__, r = h0(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function wc(e) {
  return h0(this.__data__, e) > -1;
}
function Fc(e, n) {
  var r = this.__data__, t = h0(r, e);
  return t < 0 ? (++this.size, r.push([e, n])) : r[t][1] = n, this;
}
function Et(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var t = e[n];
    this.set(t[0], t[1]);
  }
}
Et.prototype.clear = Cc;
Et.prototype.delete = Dc;
Et.prototype.get = Ac;
Et.prototype.has = wc;
Et.prototype.set = Fc;
var Sc = In(Fn, "Map");
const kc = Sc;
function Tc() {
  this.size = 0, this.__data__ = {
    hash: new ut(),
    map: new (kc || Et)(),
    string: new ut()
  };
}
function Ic(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function m0(e, n) {
  var r = e.__data__;
  return Ic(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function Pc(e) {
  var n = m0(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Mc(e) {
  return m0(this, e).get(e);
}
function Rc(e) {
  return m0(this, e).has(e);
}
function zc(e, n) {
  var r = m0(this, e), t = r.size;
  return r.set(e, n), this.size += r.size == t ? 0 : 1, this;
}
function xt(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var t = e[n];
    this.set(t[0], t[1]);
  }
}
xt.prototype.clear = Tc;
xt.prototype.delete = Pc;
xt.prototype.get = Mc;
xt.prototype.has = Rc;
xt.prototype.set = zc;
var Lc = "Expected a function";
function Pn(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(Lc);
  var r = function() {
    var t = arguments, a = n ? n.apply(this, t) : t[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, t);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (Pn.Cache || xt)(), r;
}
Pn.Cache = xt;
var $c = 500;
function Oc(e) {
  var n = Pn(e, function(t) {
    return r.size === $c && r.clear(), t;
  }), r = n.cache;
  return n;
}
var Hc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Nc = /\\(\\)?/g, Vc = Oc(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(Hc, function(r, t, a, i) {
    n.push(a ? i.replace(Nc, "$1") : t || r);
  }), n;
});
const qc = Vc;
function Wc(e) {
  return e == null ? "" : Xa(e);
}
function g0(e, n) {
  return Vt(e) ? e : cc(e, n) ? [e] : qc(Wc(e));
}
var Yc = 1 / 0;
function Mn(e) {
  if (typeof e == "string" || Tn(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -Yc ? "-0" : n;
}
function ti(e, n) {
  n = g0(n, e);
  for (var r = 0, t = n.length; e != null && r < t; )
    e = e[Mn(n[r++])];
  return r && r == t ? e : void 0;
}
function Uc(e, n, r) {
  var t = e == null ? void 0 : ti(e, n);
  return t === void 0 ? r : t;
}
function Kc(e, n) {
  for (var r = -1, t = n.length, a = e.length; ++r < t; )
    e[a + r] = n[r];
  return e;
}
var Nr = tt ? tt.isConcatSpreadable : void 0;
function jc(e) {
  return Vt(e) || ei(e) || !!(Nr && e && e[Nr]);
}
function ni(e, n, r, t, a) {
  var i = -1, o = e.length;
  for (r || (r = jc), a || (a = []); ++i < o; ) {
    var l = e[i];
    n > 0 && r(l) ? n > 1 ? ni(l, n - 1, r, t, a) : Kc(a, l) : t || (a[a.length] = l);
  }
  return a;
}
function Gc(e) {
  var n = e == null ? 0 : e.length;
  return n ? ni(e, 1) : [];
}
function Xc(e) {
  return Kl(ec(e, void 0, Gc), e + "");
}
function Jc(e, n) {
  return e != null && n in Object(e);
}
function Zc(e, n, r) {
  n = g0(n, e);
  for (var t = -1, a = n.length, i = !1; ++t < a; ) {
    var o = Mn(n[t]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++t != a ? i : (a = e == null ? 0 : e.length, !!a && nc(a) && Ja(o, a) && (Vt(e) || ei(e)));
}
function Qc(e, n) {
  return e != null && Zc(e, n, Jc);
}
function ri(e) {
  for (var n = -1, r = e == null ? 0 : e.length, t = {}; ++n < r; ) {
    var a = e[n];
    t[a[0]] = a[1];
  }
  return t;
}
function ai(e) {
  return e == null;
}
function eu(e, n, r, t) {
  if (!s0(e))
    return e;
  n = g0(n, e);
  for (var a = -1, i = n.length, o = i - 1, l = e; l != null && ++a < i; ) {
    var c = Mn(n[a]), s = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var u = l[c];
      s = t ? t(u, c, l) : void 0, s === void 0 && (s = s0(u) ? u : Ja(n[a + 1]) ? [] : {});
    }
    Ql(l, c, s), l = l[c];
  }
  return e;
}
function tu(e, n, r) {
  for (var t = -1, a = n.length, i = {}; ++t < a; ) {
    var o = n[t], l = ti(e, o);
    r(l, o) && eu(i, g0(o, e), l);
  }
  return i;
}
function nu(e, n) {
  return tu(e, n, function(r, t) {
    return Qc(e, t);
  });
}
var ru = Xc(function(e, n) {
  return e == null ? {} : nu(e, n);
});
const au = ru, ii = (e) => e === void 0, c0 = (e) => typeof e == "number", Ot = (e) => typeof Element > "u" ? !1 : e instanceof Element, iu = (e) => $e(e) ? !Number.isNaN(Number(e)) : !1;
var ou = Object.defineProperty, su = Object.defineProperties, lu = Object.getOwnPropertyDescriptors, Vr = Object.getOwnPropertySymbols, cu = Object.prototype.hasOwnProperty, uu = Object.prototype.propertyIsEnumerable, qr = (e, n, r) => n in e ? ou(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, du = (e, n) => {
  for (var r in n || (n = {}))
    cu.call(n, r) && qr(e, r, n[r]);
  if (Vr)
    for (var r of Vr(n))
      uu.call(n, r) && qr(e, r, n[r]);
  return e;
}, fu = (e, n) => su(e, lu(n));
function xu(e, n) {
  var r;
  const t = Rt();
  return ya(() => {
    t.value = e();
  }, fu(du({}, n), {
    flush: (r = n == null ? void 0 : n.flush) != null ? r : "sync"
  })), co(t);
}
var Wr;
const ke = typeof window < "u", vu = (e) => typeof e == "string", pu = () => {
};
ke && ((Wr = window == null ? void 0 : window.navigator) != null && Wr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function oi(e) {
  return typeof e == "function" ? e() : R(e);
}
function hu(e) {
  return e;
}
function si(e) {
  return uo() ? (_a(e), !0) : !1;
}
function mu(e, n = !0) {
  He() ? qe(e) : n ? e() : Ce(e);
}
function li(e) {
  var n;
  const r = oi(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const ci = ke ? window : void 0;
function Tt(...e) {
  let n, r, t, a;
  if (vu(e[0]) || Array.isArray(e[0]) ? ([r, t, a] = e, n = ci) : [n, r, t, a] = e, !n)
    return pu;
  Array.isArray(r) || (r = [r]), Array.isArray(t) || (t = [t]);
  const i = [], o = () => {
    i.forEach((u) => u()), i.length = 0;
  }, l = (u, m, f, h) => (u.addEventListener(m, f, h), () => u.removeEventListener(m, f, h)), c = Be(() => [li(n), oi(a)], ([u, m]) => {
    o(), u && i.push(...r.flatMap((f) => t.map((h) => l(u, f, h, m))));
  }, { immediate: !0, flush: "post" }), s = () => {
    c(), o();
  };
  return si(s), s;
}
function gu(e, n = !1) {
  const r = ie(), t = () => r.value = !!e();
  return t(), mu(t, n), r;
}
const Yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ur = "__vueuse_ssr_handlers__";
Yr[Ur] = Yr[Ur] || {};
var Kr = Object.getOwnPropertySymbols, bu = Object.prototype.hasOwnProperty, yu = Object.prototype.propertyIsEnumerable, _u = (e, n) => {
  var r = {};
  for (var t in e)
    bu.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && Kr)
    for (var t of Kr(e))
      n.indexOf(t) < 0 && yu.call(e, t) && (r[t] = e[t]);
  return r;
};
function Cu(e, n, r = {}) {
  const t = r, { window: a = ci } = t, i = _u(t, ["window"]);
  let o;
  const l = gu(() => a && "ResizeObserver" in a), c = () => {
    o && (o.disconnect(), o = void 0);
  }, s = Be(() => li(e), (m) => {
    c(), l.value && a && m && (o = new ResizeObserver(n), o.observe(m, i));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), s();
  };
  return si(u), {
    isSupported: l,
    stop: u
  };
}
var jr;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(jr || (jr = {}));
var Eu = Object.defineProperty, Gr = Object.getOwnPropertySymbols, Bu = Object.prototype.hasOwnProperty, Du = Object.prototype.propertyIsEnumerable, Xr = (e, n, r) => n in e ? Eu(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Au = (e, n) => {
  for (var r in n || (n = {}))
    Bu.call(n, r) && Xr(e, r, n[r]);
  if (Gr)
    for (var r of Gr(n))
      Du.call(n, r) && Xr(e, r, n[r]);
  return e;
};
const wu = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
Au({
  linear: hu
}, wu);
class ui extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function Fu(e, n) {
  throw new ui(`[${e}] ${n}`);
}
function Oe(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const r = $e(e) ? new ui(`[${e}] ${n}`) : e;
  }
}
const Jr = {
  current: 0
}, Zr = ie(0), di = 2e3, Qr = Symbol("elZIndexContextKey"), fi = Symbol("zIndexContextKey"), Su = (e) => {
  const n = He() ? Ee(Qr, Jr) : Jr, r = e || (He() ? Ee(fi, void 0) : void 0), t = H(() => {
    const o = R(r);
    return c0(o) ? o : di;
  }), a = H(() => t.value + Zr.value), i = () => (n.current++, Zr.value = n.current, a.value);
  return !ke && !Ee(Qr) && Oe("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: t,
    currentZIndex: a,
    nextZIndex: i
  };
};
var ku = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const Tu = (e) => (n, r) => Iu(n, r, R(e)), Iu = (e, n, r) => Uc(r, e, e).replace(/\{(\w+)\}/g, (t, a) => {
  var i;
  return `${(i = n == null ? void 0 : n[a]) != null ? i : `{${a}}`}`;
}), Pu = (e) => {
  const n = H(() => R(e).name), r = Ca(e) ? e : ie(e);
  return {
    lang: n,
    locale: r,
    t: Tu(e)
  };
}, xi = Symbol("localeContextKey"), Mu = (e) => {
  const n = e || Ee(xi, ie());
  return Pu(H(() => n.value || ku));
}, vi = "__epPropKey", Qe = (e) => e, Ru = (e) => _t(e) && !!e[vi], pi = (e, n) => {
  if (!_t(e) || Ru(e))
    return e;
  const { values: r, required: t, default: a, type: i, validator: o } = e, c = {
    type: i,
    required: !!t,
    validator: r || o ? (s) => {
      let u = !1, m = [];
      if (r && (m = Array.from(r), o0(e, "default") && m.push(a), u || (u = m.includes(s))), o && (u || (u = o(s))), !u && m.length > 0) {
        const f = [...new Set(m)].map((h) => JSON.stringify(h)).join(", ");
        fo(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(s)}.`);
      }
      return u;
    } : void 0,
    [vi]: !0
  };
  return o0(e, "default") && (c.default = a), c;
}, Bt = (e) => ri(Object.entries(e).map(([n, r]) => [
  n,
  pi(r, n)
])), hi = ["", "default", "small", "large"], mi = pi({
  type: String,
  values: hi,
  required: !1
}), gi = Symbol("size"), zu = () => {
  const e = Ee(gi, {});
  return H(() => R(e.size) || "");
}, Lu = Symbol("emptyValuesContextKey");
Bt({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => yt(e) ? !e() : !e
  }
});
const ea = (e) => Object.keys(e), u0 = ie();
function Rn(e, n = void 0) {
  const r = He() ? Ee(Ua, u0) : u0;
  return e ? H(() => {
    var t, a;
    return (a = (t = r.value) == null ? void 0 : t[e]) != null ? a : n;
  }) : r;
}
function $u(e, n) {
  const r = Rn(), t = Ve(e, H(() => {
    var l;
    return ((l = r.value) == null ? void 0 : l.namespace) || Qt;
  })), a = Mu(H(() => {
    var l;
    return (l = r.value) == null ? void 0 : l.locale;
  })), i = Su(H(() => {
    var l;
    return ((l = r.value) == null ? void 0 : l.zIndex) || di;
  })), o = H(() => {
    var l;
    return R(n) || ((l = r.value) == null ? void 0 : l.size) || "";
  });
  return Ou(H(() => R(r) || {})), {
    ns: t,
    locale: a,
    zIndex: i,
    size: o
  };
}
const Ou = (e, n, r = !1) => {
  var t;
  const a = !!He(), i = a ? Rn() : void 0, o = (t = n == null ? void 0 : n.provide) != null ? t : a ? yn : void 0;
  if (!o) {
    Oe("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = H(() => {
    const c = R(e);
    return i != null && i.value ? Hu(i.value, c) : c;
  });
  return o(Ua, l), o(xi, H(() => l.value.locale)), o(Ka, H(() => l.value.namespace)), o(fi, H(() => l.value.zIndex)), o(gi, {
    size: H(() => l.value.size || "")
  }), o(Lu, H(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (r || !u0.value) && (u0.value = l.value), l;
}, Hu = (e, n) => {
  const r = [.../* @__PURE__ */ new Set([...ea(e), ...ea(n)])], t = {};
  for (const a of r)
    t[a] = n[a] !== void 0 ? n[a] : e[a];
  return t;
}, xn = "update:modelValue", ta = "change", na = "input";
var Dt = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [t, a] of n)
    r[t] = a;
  return r;
};
const Nu = "utils/dom/style", bi = (e = "") => e.split(" ").filter((n) => !!n.trim()), ra = (e, n) => {
  if (!e || !n)
    return !1;
  if (n.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(n);
}, Vu = (e, n) => {
  !e || !n.trim() || e.classList.add(...bi(n));
}, qu = (e, n) => {
  !e || !n.trim() || e.classList.remove(...bi(n));
}, Wu = (e, n) => {
  var r;
  if (!ke || !e || !n)
    return "";
  let t = Qs(n);
  t === "float" && (t = "cssFloat");
  try {
    const a = e.style[t];
    if (a)
      return a;
    const i = (r = document.defaultView) == null ? void 0 : r.getComputedStyle(e, "");
    return i ? i[t] : "";
  } catch {
    return e.style[t];
  }
};
function vn(e, n = "px") {
  if (!e)
    return "";
  if (c0(e) || iu(e))
    return `${e}${n}`;
  if ($e(e))
    return e;
  Oe(Nu, "binding value must be a string or number");
}
let Yt;
const Yu = (e) => {
  var n;
  if (!ke)
    return 0;
  if (Yt !== void 0)
    return Yt;
  const r = document.createElement("div");
  r.className = `${e}-scrollbar__wrap`, r.style.visibility = "hidden", r.style.width = "100px", r.style.position = "absolute", r.style.top = "-9999px", document.body.appendChild(r);
  const t = r.offsetWidth;
  r.style.overflow = "scroll";
  const a = document.createElement("div");
  a.style.width = "100%", r.appendChild(a);
  const i = a.offsetWidth;
  return (n = r.parentNode) == null || n.removeChild(r), Yt = t - i, Yt;
}, zn = (e, n) => {
  if (e.install = (r) => {
    for (const t of [e, ...Object.values(n ?? {})])
      r.component(t.name, t);
  }, n)
    for (const [r, t] of Object.entries(n))
      e[r] = t;
  return e;
}, Uu = (e) => (e.install = zt, e), Ku = Bt({
  size: {
    type: Qe([Number, String])
  },
  color: {
    type: String
  }
}), ju = se({
  name: "ElIcon",
  inheritAttrs: !1
}), Gu = /* @__PURE__ */ se({
  ...ju,
  props: Ku,
  setup(e) {
    const n = e, r = Ve("icon"), t = H(() => {
      const { size: a, color: i } = n;
      return !a && !i ? {} : {
        fontSize: ii(a) ? void 0 : vn(a),
        "--color": i
      };
    });
    return (a, i) => (L(), V("i", Lt({
      class: R(r).b(),
      style: R(t)
    }, a.$attrs), [
      he(a.$slots, "default")
    ], 16));
  }
});
var Xu = /* @__PURE__ */ Dt(Gu, [["__file", "icon.vue"]]);
const Je = zn(Xu);
/*! Element Plus Icons Vue v2.3.1 */
var Ju = /* @__PURE__ */ se({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      Y("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Zu = Ju, Qu = /* @__PURE__ */ se({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), yi = Qu, ed = /* @__PURE__ */ se({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      Y("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), _i = ed, td = /* @__PURE__ */ se({
  name: "Close",
  __name: "close",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), nd = td, rd = /* @__PURE__ */ se({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      Y("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), ad = rd, id = /* @__PURE__ */ se({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), Ci = id, od = /* @__PURE__ */ se({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), d0 = od, sd = /* @__PURE__ */ se({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), Ei = sd, ld = /* @__PURE__ */ se({
  name: "View",
  __name: "view",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), cd = ld, ud = /* @__PURE__ */ se({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Bi = ud, dd = /* @__PURE__ */ se({
  name: "Warning",
  __name: "warning",
  setup(e) {
    return (n, r) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), fd = dd;
const f0 = Qe([
  String,
  Object,
  Function
]), xd = {
  Close: nd,
  SuccessFilled: Ei,
  InfoFilled: Ci,
  WarningFilled: Bi,
  CircleCloseFilled: yi
}, aa = {
  success: Ei,
  warning: Bi,
  error: yi,
  info: Ci
}, vd = {
  validating: d0,
  success: Zu,
  error: _i
}, pd = () => ke && /firefox/i.test(window.navigator.userAgent);
let ye;
const hd = {
  height: "0",
  visibility: "hidden",
  overflow: pd() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, md = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function gd(e) {
  const n = window.getComputedStyle(e), r = n.getPropertyValue("box-sizing"), t = Number.parseFloat(n.getPropertyValue("padding-bottom")) + Number.parseFloat(n.getPropertyValue("padding-top")), a = Number.parseFloat(n.getPropertyValue("border-bottom-width")) + Number.parseFloat(n.getPropertyValue("border-top-width"));
  return { contextStyle: md.map((o) => [
    o,
    n.getPropertyValue(o)
  ]), paddingSize: t, borderSize: a, boxSizing: r };
}
function ia(e, n = 1, r) {
  var t;
  ye || (ye = document.createElement("textarea"), document.body.appendChild(ye));
  const { paddingSize: a, borderSize: i, boxSizing: o, contextStyle: l } = gd(e);
  l.forEach(([m, f]) => ye == null ? void 0 : ye.style.setProperty(m, f)), Object.entries(hd).forEach(([m, f]) => ye == null ? void 0 : ye.style.setProperty(m, f, "important")), ye.value = e.value || e.placeholder || "";
  let c = ye.scrollHeight;
  const s = {};
  o === "border-box" ? c = c + i : o === "content-box" && (c = c - a), ye.value = "";
  const u = ye.scrollHeight - a;
  if (c0(n)) {
    let m = u * n;
    o === "border-box" && (m = m + a + i), c = Math.max(m, c), s.minHeight = `${m}px`;
  }
  if (c0(r)) {
    let m = u * r;
    o === "border-box" && (m = m + a + i), c = Math.min(m, c);
  }
  return s.height = `${c}px`, (t = ye.parentNode) == null || t.removeChild(ye), ye = void 0, s;
}
const bd = (e) => e, yd = Bt({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), _d = (e) => au(yd, e), Cd = Bt({
  id: {
    type: String,
    default: void 0
  },
  size: mi,
  disabled: Boolean,
  modelValue: {
    type: Qe([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: Qe([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: f0
  },
  prefixIcon: {
    type: f0
  },
  containerRole: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: Qe([Object, Array, String]),
    default: () => bd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ..._d(["ariaLabel"])
}), Ed = {
  [xn]: (e) => $e(e),
  input: (e) => $e(e),
  change: (e) => $e(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Bd = ["class", "style"], Dd = /^on[A-Z]/, Ad = (e = {}) => {
  const { excludeListeners: n = !1, excludeKeys: r } = e, t = H(() => ((r == null ? void 0 : r.value) || []).concat(Bd)), a = He();
  return a ? H(() => {
    var i;
    return ri(Object.entries((i = a.proxy) == null ? void 0 : i.$attrs).filter(([o]) => !t.value.includes(o) && !(n && Dd.test(o))));
  }) : (Oe("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), H(() => ({})));
}, Ln = Symbol("formContextKey"), Di = Symbol("formItemContextKey"), pn = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, wd = Symbol("elIdInjection"), Fd = () => He() ? Ee(wd, pn) : pn, hn = (e) => {
  const n = Fd();
  !ke && n === pn && Oe("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const r = ja();
  return xu(() => R(e) || `${r.value}-id-${n.prefix}-${n.current++}`);
}, Ai = () => {
  const e = Ee(Ln, void 0), n = Ee(Di, void 0);
  return {
    form: e,
    formItem: n
  };
}, Sd = (e, {
  formItemContext: n,
  disableIdGeneration: r,
  disableIdManagement: t
}) => {
  r || (r = ie(!1)), t || (t = ie(!1));
  const a = ie();
  let i;
  const o = H(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && n && n.inputIds && ((l = n.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return qe(() => {
    i = Be([n0(e, "id"), r], ([l, c]) => {
      const s = l ?? (c ? void 0 : hn().value);
      s !== a.value && (n != null && n.removeInputId && (a.value && n.removeInputId(a.value), !(t != null && t.value) && !c && s && n.addInputId(s)), a.value = s);
    }, { immediate: !0 });
  }), xo(() => {
    i && i(), n != null && n.removeInputId && a.value && n.removeInputId(a.value);
  }), {
    isLabeledByFormItem: o,
    inputId: a
  };
}, wi = (e) => {
  const n = He();
  return H(() => {
    var r, t;
    return (t = (r = n == null ? void 0 : n.proxy) == null ? void 0 : r.$props) == null ? void 0 : t[e];
  });
}, Fi = (e, n = {}) => {
  const r = ie(void 0), t = n.prop ? r : wi("size"), a = n.global ? r : zu(), i = n.form ? { size: void 0 } : Ee(Ln, void 0), o = n.formItem ? { size: void 0 } : Ee(Di, void 0);
  return H(() => t.value || R(e) || (o == null ? void 0 : o.size) || (i == null ? void 0 : i.size) || a.value || "");
}, $n = (e) => {
  const n = wi("disabled"), r = Ee(Ln, void 0);
  return H(() => n.value || R(e) || (r == null ? void 0 : r.disabled) || !1);
};
function kd(e, {
  beforeFocus: n,
  afterFocus: r,
  beforeBlur: t,
  afterBlur: a
} = {}) {
  const i = He(), { emit: o } = i, l = Rt(), c = ie(!1), s = (f) => {
    yt(n) && n(f) || c.value || (c.value = !0, o("focus", f), r == null || r());
  }, u = (f) => {
    var h;
    yt(t) && t(f) || f.relatedTarget && ((h = l.value) != null && h.contains(f.relatedTarget)) || (c.value = !1, o("blur", f), a == null || a());
  }, m = () => {
    var f, h;
    (f = l.value) != null && f.contains(document.activeElement) && l.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return Be(l, (f) => {
    f && f.setAttribute("tabindex", "-1");
  }), Tt(l, "focus", s, !0), Tt(l, "blur", u, !0), Tt(l, "click", m, !0), process.env.NODE_ENV === "test" && qe(() => {
    const f = Ot(e.value) ? e.value : document.querySelector("input,textarea");
    f && (Tt(f, "focus", s, !0), Tt(f, "blur", u, !0));
  }), {
    isFocused: c,
    wrapperRef: l,
    handleFocus: s,
    handleBlur: u
  };
}
const Td = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Id({
  afterComposition: e,
  emit: n
}) {
  const r = ie(!1), t = (l) => {
    n == null || n("compositionstart", l), r.value = !0;
  }, a = (l) => {
    var c;
    n == null || n("compositionupdate", l);
    const s = (c = l.target) == null ? void 0 : c.value, u = s[s.length - 1] || "";
    r.value = !Td(u);
  }, i = (l) => {
    n == null || n("compositionend", l), r.value && (r.value = !1, Ce(() => e(l)));
  };
  return {
    isComposing: r,
    handleComposition: (l) => {
      l.type === "compositionend" ? i(l) : a(l);
    },
    handleCompositionStart: t,
    handleCompositionUpdate: a,
    handleCompositionEnd: i
  };
}
function Pd(e) {
  let n;
  function r() {
    if (e.value == null)
      return;
    const { selectionStart: a, selectionEnd: i, value: o } = e.value;
    if (a == null || i == null)
      return;
    const l = o.slice(0, Math.max(0, a)), c = o.slice(Math.max(0, i));
    n = {
      selectionStart: a,
      selectionEnd: i,
      value: o,
      beforeTxt: l,
      afterTxt: c
    };
  }
  function t() {
    if (e.value == null || n == null)
      return;
    const { value: a } = e.value, { beforeTxt: i, afterTxt: o, selectionStart: l } = n;
    if (i == null || o == null || l == null)
      return;
    let c = a.length;
    if (a.endsWith(o))
      c = a.length - o.length;
    else if (a.startsWith(i))
      c = i.length;
    else {
      const s = i[l - 1], u = a.indexOf(s, l - 1);
      u !== -1 && (c = u + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [r, t];
}
const Si = "ElInput", Md = se({
  name: Si,
  inheritAttrs: !1
}), Rd = /* @__PURE__ */ se({
  ...Md,
  props: Cd,
  emits: Ed,
  setup(e, { expose: n, emit: r }) {
    const t = e, a = vo(), i = Ad(), o = Ea(), l = H(() => [
      t.type === "textarea" ? x.b() : d.b(),
      d.m(f.value),
      d.is("disabled", h.value),
      d.is("exceed", I.value),
      {
        [d.b("group")]: o.prepend || o.append,
        [d.m("prefix")]: o.prefix || t.prefixIcon,
        [d.m("suffix")]: o.suffix || t.suffixIcon || t.clearable || t.showPassword,
        [d.bm("suffix", "password-clear")]: W.value && J.value,
        [d.b("hidden")]: t.type === "hidden"
      },
      a.class
    ]), c = H(() => [
      d.e("wrapper"),
      d.is("focus", w.value)
    ]), { form: s, formItem: u } = Ai(), { inputId: m } = Sd(t, {
      formItemContext: u
    }), f = Fi(), h = $n(), d = Ve("input"), x = Ve("textarea"), v = Rt(), y = Rt(), p = ie(!1), g = ie(!1), b = ie(), E = Rt(t.inputStyle), C = H(() => v.value || y.value), { wrapperRef: B, isFocused: w, handleFocus: P, handleBlur: _ } = kd(C, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var z;
        t.validateEvent && ((z = u == null ? void 0 : u.validate) == null || z.call(u, "blur").catch((ee) => Oe(ee)));
      }
    }), A = H(() => {
      var z;
      return (z = s == null ? void 0 : s.statusIcon) != null ? z : !1;
    }), F = H(() => (u == null ? void 0 : u.validateState) || ""), S = H(() => F.value && vd[F.value]), O = H(() => g.value ? cd : ad), N = H(() => [
      a.style
    ]), $ = H(() => [
      t.inputStyle,
      E.value,
      { resize: t.resize }
    ]), q = H(() => ai(t.modelValue) ? "" : String(t.modelValue)), W = H(() => t.clearable && !h.value && !t.readonly && !!q.value && (w.value || p.value)), J = H(() => t.showPassword && !h.value && !!q.value && (!!q.value || w.value)), G = H(() => t.showWordLimit && !!t.maxlength && (t.type === "text" || t.type === "textarea") && !h.value && !t.readonly && !t.showPassword), k = H(() => q.value.length), I = H(() => !!G.value && k.value > Number(t.maxlength)), M = H(() => !!o.suffix || !!t.suffixIcon || W.value || t.showPassword || G.value || !!F.value && A.value), [T, ae] = Pd(v);
    Cu(y, (z) => {
      if (K(), !G.value || t.resize !== "both")
        return;
      const ee = z[0], { width: De } = ee.contentRect;
      b.value = {
        right: `calc(100% - ${De + 15 + 6}px)`
      };
    });
    const Z = () => {
      const { type: z, autosize: ee } = t;
      if (!(!ke || z !== "textarea" || !y.value))
        if (ee) {
          const De = _t(ee) ? ee.minRows : void 0, Ue = _t(ee) ? ee.maxRows : void 0, qt = ia(y.value, De, Ue);
          E.value = {
            overflowY: "hidden",
            ...qt
          }, Ce(() => {
            y.value.offsetHeight, E.value = qt;
          });
        } else
          E.value = {
            minHeight: ia(y.value).minHeight
          };
    }, K = ((z) => {
      let ee = !1;
      return () => {
        var De;
        if (ee || !t.autosize)
          return;
        ((De = y.value) == null ? void 0 : De.offsetParent) === null || (z(), ee = !0);
      };
    })(Z), Te = () => {
      const z = C.value, ee = t.formatter ? t.formatter(q.value) : q.value;
      !z || z.value === ee || (z.value = ee);
    }, Re = async (z) => {
      T();
      let { value: ee } = z.target;
      if (t.formatter && t.parser && (ee = t.parser(ee)), !Ye.value) {
        if (ee === q.value) {
          Te();
          return;
        }
        r(xn, ee), r(na, ee), await Ce(), Te(), ae();
      }
    }, vt = (z) => {
      let { value: ee } = z.target;
      t.formatter && t.parser && (ee = t.parser(ee)), r(ta, ee);
    }, {
      isComposing: Ye,
      handleCompositionStart: me,
      handleCompositionUpdate: fe,
      handleCompositionEnd: rt
    } = Id({ emit: r, afterComposition: Re }), at = () => {
      T(), g.value = !g.value, setTimeout(ae);
    }, pt = () => {
      var z;
      return (z = C.value) == null ? void 0 : z.focus();
    }, it = () => {
      var z;
      return (z = C.value) == null ? void 0 : z.blur();
    }, wt = (z) => {
      p.value = !1, r("mouseleave", z);
    }, ot = (z) => {
      p.value = !0, r("mouseenter", z);
    }, ge = (z) => {
      r("keydown", z);
    }, be = () => {
      var z;
      (z = C.value) == null || z.select();
    }, Ie = () => {
      r(xn, ""), r(ta, ""), r("clear"), r(na, "");
    };
    return Be(() => t.modelValue, () => {
      var z;
      Ce(() => Z()), t.validateEvent && ((z = u == null ? void 0 : u.validate) == null || z.call(u, "change").catch((ee) => Oe(ee)));
    }), Be(q, () => Te()), Be(() => t.type, async () => {
      await Ce(), Te(), Z();
    }), qe(() => {
      !t.formatter && t.parser && Oe(Si, "If you set the parser, you also need to set the formatter."), Te(), Ce(Z);
    }), n({
      input: v,
      textarea: y,
      ref: C,
      textareaStyle: $,
      autosize: n0(t, "autosize"),
      isComposing: Ye,
      focus: pt,
      blur: it,
      select: be,
      clear: Ie,
      resizeTextarea: Z
    }), (z, ee) => (L(), V("div", {
      class: U([
        R(l),
        {
          [R(d).bm("group", "append")]: z.$slots.append,
          [R(d).bm("group", "prepend")]: z.$slots.prepend
        }
      ]),
      style: ve(R(N)),
      onMouseenter: ot,
      onMouseleave: wt
    }, [
      Q(" input "),
      z.type !== "textarea" ? (L(), V(Le, { key: 0 }, [
        Q(" prepend slot "),
        z.$slots.prepend ? (L(), V("div", {
          key: 0,
          class: U(R(d).be("group", "prepend"))
        }, [
          he(z.$slots, "prepend")
        ], 2)) : Q("v-if", !0),
        Y("div", {
          ref_key: "wrapperRef",
          ref: B,
          class: U(R(c))
        }, [
          Q(" prefix slot "),
          z.$slots.prefix || z.prefixIcon ? (L(), V("span", {
            key: 0,
            class: U(R(d).e("prefix"))
          }, [
            Y("span", {
              class: U(R(d).e("prefix-inner"))
            }, [
              he(z.$slots, "prefix"),
              z.prefixIcon ? (L(), ne(R(Je), {
                key: 0,
                class: U(R(d).e("icon"))
              }, {
                default: oe(() => [
                  (L(), ne(Se(z.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0),
          Y("input", Lt({
            id: R(m),
            ref_key: "input",
            ref: v,
            class: R(d).e("inner")
          }, R(i), {
            minlength: z.minlength,
            maxlength: z.maxlength,
            type: z.showPassword ? g.value ? "text" : "password" : z.type,
            disabled: R(h),
            readonly: z.readonly,
            autocomplete: z.autocomplete,
            tabindex: z.tabindex,
            "aria-label": z.ariaLabel,
            placeholder: z.placeholder,
            style: z.inputStyle,
            form: z.form,
            autofocus: z.autofocus,
            role: z.containerRole,
            onCompositionstart: R(me),
            onCompositionupdate: R(fe),
            onCompositionend: R(rt),
            onInput: Re,
            onChange: vt,
            onKeydown: ge
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Q(" suffix slot "),
          R(M) ? (L(), V("span", {
            key: 1,
            class: U(R(d).e("suffix"))
          }, [
            Y("span", {
              class: U(R(d).e("suffix-inner"))
            }, [
              !R(W) || !R(J) || !R(G) ? (L(), V(Le, { key: 0 }, [
                he(z.$slots, "suffix"),
                z.suffixIcon ? (L(), ne(R(Je), {
                  key: 0,
                  class: U(R(d).e("icon"))
                }, {
                  default: oe(() => [
                    (L(), ne(Se(z.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Q("v-if", !0)
              ], 64)) : Q("v-if", !0),
              R(W) ? (L(), ne(R(Je), {
                key: 1,
                class: U([R(d).e("icon"), R(d).e("clear")]),
                onMousedown: Pt(R(zt), ["prevent"]),
                onClick: Ie
              }, {
                default: oe(() => [
                  xe(R(_i))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Q("v-if", !0),
              R(J) ? (L(), ne(R(Je), {
                key: 2,
                class: U([R(d).e("icon"), R(d).e("password")]),
                onClick: at
              }, {
                default: oe(() => [
                  (L(), ne(Se(R(O))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              R(G) ? (L(), V("span", {
                key: 3,
                class: U(R(d).e("count"))
              }, [
                Y("span", {
                  class: U(R(d).e("count-inner"))
                }, le(R(k)) + " / " + le(z.maxlength), 3)
              ], 2)) : Q("v-if", !0),
              R(F) && R(S) && R(A) ? (L(), ne(R(Je), {
                key: 4,
                class: U([
                  R(d).e("icon"),
                  R(d).e("validateIcon"),
                  R(d).is("loading", R(F) === "validating")
                ])
              }, {
                default: oe(() => [
                  (L(), ne(Se(R(S))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0)
        ], 2),
        Q(" append slot "),
        z.$slots.append ? (L(), V("div", {
          key: 1,
          class: U(R(d).be("group", "append"))
        }, [
          he(z.$slots, "append")
        ], 2)) : Q("v-if", !0)
      ], 64)) : (L(), V(Le, { key: 1 }, [
        Q(" textarea "),
        Y("textarea", Lt({
          id: R(m),
          ref_key: "textarea",
          ref: y,
          class: [R(x).e("inner"), R(d).is("focus", R(w))]
        }, R(i), {
          minlength: z.minlength,
          maxlength: z.maxlength,
          tabindex: z.tabindex,
          disabled: R(h),
          readonly: z.readonly,
          autocomplete: z.autocomplete,
          style: R($),
          "aria-label": z.ariaLabel,
          placeholder: z.placeholder,
          form: z.form,
          autofocus: z.autofocus,
          rows: z.rows,
          role: z.containerRole,
          onCompositionstart: R(me),
          onCompositionupdate: R(fe),
          onCompositionend: R(rt),
          onInput: Re,
          onFocus: R(P),
          onBlur: R(_),
          onChange: vt,
          onKeydown: ge
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        R(G) ? (L(), V("span", {
          key: 0,
          style: ve(b.value),
          class: U(R(d).e("count"))
        }, le(R(k)) + " / " + le(z.maxlength), 7)) : Q("v-if", !0)
      ], 64))
    ], 38));
  }
});
var zd = /* @__PURE__ */ Dt(Rd, [["__file", "input.vue"]]);
const Ld = zn(zd), $d = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', Od = (e) => process.env.NODE_ENV === "test" ? !0 : getComputedStyle(e).position === "fixed" ? !1 : e.offsetParent !== null, oa = (e) => Array.from(e.querySelectorAll($d)).filter((n) => ki(n) && Od(n)), ki = (e) => {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.tabIndex < 0 || e.hasAttribute("disabled") || e.getAttribute("aria-disabled") === "true")
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return !(e.type === "hidden" || e.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}, an = "focus-trap.focus-after-trapped", on = "focus-trap.focus-after-released", Hd = "focus-trap.focusout-prevented", sa = {
  cancelable: !0,
  bubbles: !1
}, Nd = {
  cancelable: !0,
  bubbles: !1
}, la = "focusAfterTrapped", ca = "focusAfterReleased", Vd = Symbol("elFocusTrap"), On = ie(), b0 = ie(0), Hn = ie(0);
let Ut = 0;
const Ti = (e) => {
  const n = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (t) => {
      const a = t.tagName === "INPUT" && t.type === "hidden";
      return t.disabled || t.hidden || a ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 || t === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    n.push(r.currentNode);
  return n;
}, ua = (e, n) => {
  for (const r of e)
    if (!qd(r, n))
      return r;
}, qd = (e, n) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (n && e === n)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Wd = (e) => {
  const n = Ti(e), r = ua(n, e), t = ua(n.reverse(), e);
  return [r, t];
}, Yd = (e) => e instanceof HTMLInputElement && "select" in e, Ge = (e, n) => {
  if (e && e.focus) {
    const r = document.activeElement;
    let t = !1;
    Ot(e) && !ki(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), t = !0), e.focus({ preventScroll: !0 }), Hn.value = window.performance.now(), e !== r && Yd(e) && n && e.select(), Ot(e) && t && e.removeAttribute("tabindex");
  }
};
function da(e, n) {
  const r = [...e], t = e.indexOf(n);
  return t !== -1 && r.splice(t, 1), r;
}
const Ud = () => {
  let e = [];
  return {
    push: (t) => {
      const a = e[0];
      a && t !== a && a.pause(), e = da(e, t), e.unshift(t);
    },
    remove: (t) => {
      var a, i;
      e = da(e, t), (i = (a = e[0]) == null ? void 0 : a.resume) == null || i.call(a);
    }
  };
}, Kd = (e, n = !1) => {
  const r = document.activeElement;
  for (const t of e)
    if (Ge(t, n), document.activeElement !== r)
      return;
}, fa = Ud(), jd = () => b0.value > Hn.value, Kt = () => {
  On.value = "pointer", b0.value = window.performance.now();
}, xa = () => {
  On.value = "keyboard", b0.value = window.performance.now();
}, Gd = () => (qe(() => {
  Ut === 0 && (document.addEventListener("mousedown", Kt), document.addEventListener("touchstart", Kt), document.addEventListener("keydown", xa)), Ut++;
}), Nt(() => {
  Ut--, Ut <= 0 && (document.removeEventListener("mousedown", Kt), document.removeEventListener("touchstart", Kt), document.removeEventListener("keydown", xa));
}), {
  focusReason: On,
  lastUserFocusTimestamp: b0,
  lastAutomatedFocusTimestamp: Hn
}), jt = (e) => new CustomEvent(Hd, {
  ...Nd,
  detail: e
}), Nn = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
let gt = [];
const va = (e) => {
  e.code === Nn.esc && gt.forEach((n) => n(e));
}, Xd = (e) => {
  qe(() => {
    gt.length === 0 && document.addEventListener("keydown", va), ke && gt.push(e);
  }), Nt(() => {
    gt = gt.filter((n) => n !== e), gt.length === 0 && ke && document.removeEventListener("keydown", va);
  });
}, Jd = se({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    la,
    ca,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: n }) {
    const r = ie();
    let t, a;
    const { focusReason: i } = Gd();
    Xd((d) => {
      e.trapped && !o.paused && n("release-requested", d);
    });
    const o = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, l = (d) => {
      if (!e.loop && !e.trapped || o.paused)
        return;
      const { code: x, altKey: v, ctrlKey: y, metaKey: p, currentTarget: g, shiftKey: b } = d, { loop: E } = e, C = x === Nn.tab && !v && !y && !p, B = document.activeElement;
      if (C && B) {
        const w = g, [P, _] = Wd(w);
        if (P && _) {
          if (!b && B === _) {
            const F = jt({
              focusReason: i.value
            });
            n("focusout-prevented", F), F.defaultPrevented || (d.preventDefault(), E && Ge(P, !0));
          } else if (b && [P, w].includes(B)) {
            const F = jt({
              focusReason: i.value
            });
            n("focusout-prevented", F), F.defaultPrevented || (d.preventDefault(), E && Ge(_, !0));
          }
        } else if (B === w) {
          const F = jt({
            focusReason: i.value
          });
          n("focusout-prevented", F), F.defaultPrevented || d.preventDefault();
        }
      }
    };
    yn(Vd, {
      focusTrapRef: r,
      onKeydown: l
    }), Be(() => e.focusTrapEl, (d) => {
      d && (r.value = d);
    }, { immediate: !0 }), Be([r], ([d], [x]) => {
      d && (d.addEventListener("keydown", l), d.addEventListener("focusin", u), d.addEventListener("focusout", m)), x && (x.removeEventListener("keydown", l), x.removeEventListener("focusin", u), x.removeEventListener("focusout", m));
    });
    const c = (d) => {
      n(la, d);
    }, s = (d) => n(ca, d), u = (d) => {
      const x = R(r);
      if (!x)
        return;
      const v = d.target, y = d.relatedTarget, p = v && x.contains(v);
      e.trapped || y && x.contains(y) || (t = y), p && n("focusin", d), !o.paused && e.trapped && (p ? a = v : Ge(a, !0));
    }, m = (d) => {
      const x = R(r);
      if (!(o.paused || !x))
        if (e.trapped) {
          const v = d.relatedTarget;
          !ai(v) && !x.contains(v) && setTimeout(() => {
            if (!o.paused && e.trapped) {
              const y = jt({
                focusReason: i.value
              });
              n("focusout-prevented", y), y.defaultPrevented || Ge(a, !0);
            }
          }, 0);
        } else {
          const v = d.target;
          v && x.contains(v) || n("focusout", d);
        }
    };
    async function f() {
      await Ce();
      const d = R(r);
      if (d) {
        fa.push(o);
        const x = d.contains(document.activeElement) ? t : document.activeElement;
        if (t = x, !d.contains(x)) {
          const y = new Event(an, sa);
          d.addEventListener(an, c), d.dispatchEvent(y), y.defaultPrevented || Ce(() => {
            let p = e.focusStartEl;
            $e(p) || (Ge(p), document.activeElement !== p && (p = "first")), p === "first" && Kd(Ti(d), !0), (document.activeElement === x || p === "container") && Ge(d);
          });
        }
      }
    }
    function h() {
      const d = R(r);
      if (d) {
        d.removeEventListener(an, c);
        const x = new CustomEvent(on, {
          ...sa,
          detail: {
            focusReason: i.value
          }
        });
        d.addEventListener(on, s), d.dispatchEvent(x), !x.defaultPrevented && (i.value == "keyboard" || !jd() || d.contains(document.activeElement)) && Ge(t ?? document.body), d.removeEventListener(on, s), fa.remove(o);
      }
    }
    return qe(() => {
      e.trapped && f(), Be(() => e.trapped, (d) => {
        d ? f() : h();
      });
    }), Nt(() => {
      e.trapped && h(), r.value && (r.value.removeEventListener("keydown", l), r.value.removeEventListener("focusin", u), r.value.removeEventListener("focusout", m), r.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function Zd(e, n, r, t, a, i) {
  return he(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Qd = /* @__PURE__ */ Dt(Jd, [["render", Zd], ["__file", "focus-trap.vue"]]);
const Ii = Symbol("buttonGroupContextKey"), ef = ({ from: e, replacement: n, scope: r, version: t, ref: a, type: i = "API" }, o) => {
  Be(() => R(o), (l) => {
    l && Oe(r, `[${i}] ${e} is about to be deprecated in version ${t}, please use ${n} instead.
For more detail, please visit: ${a}
`);
  }, {
    immediate: !0
  });
}, tf = (e, n) => {
  ef({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, H(() => e.type === "text"));
  const r = Ee(Ii, void 0), t = Rn("button"), { form: a } = Ai(), i = Fi(H(() => r == null ? void 0 : r.size)), o = $n(), l = ie(), c = Ea(), s = H(() => e.type || (r == null ? void 0 : r.type) || ""), u = H(() => {
    var d, x, v;
    return (v = (x = e.autoInsertSpace) != null ? x : (d = t.value) == null ? void 0 : d.autoInsertSpace) != null ? v : !1;
  }), m = H(() => e.tag === "button" ? {
    ariaDisabled: o.value || e.loading,
    disabled: o.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), f = H(() => {
    var d;
    const x = (d = c.default) == null ? void 0 : d.call(c);
    if (u.value && (x == null ? void 0 : x.length) === 1) {
      const v = x[0];
      if ((v == null ? void 0 : v.type) === po) {
        const y = v.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(y.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: o,
    _size: i,
    _type: s,
    _ref: l,
    _props: m,
    shouldAddSpace: f,
    handleClick: (d) => {
      if (o.value || e.loading) {
        d.stopPropagation();
        return;
      }
      e.nativeType === "reset" && (a == null || a.resetFields()), n("click", d);
    }
  };
}, nf = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], rf = ["button", "submit", "reset"], mn = Bt({
  size: mi,
  disabled: Boolean,
  type: {
    type: String,
    values: nf,
    default: ""
  },
  icon: {
    type: f0
  },
  nativeType: {
    type: String,
    values: rf,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: f0,
    default: () => d0
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: Qe([String, Object]),
    default: "button"
  }
}), af = {
  click: (e) => e instanceof MouseEvent
};
function de(e, n) {
  of(e) && (e = "100%");
  var r = sf(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function Gt(e) {
  return Math.min(1, Math.max(0, e));
}
function of(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function sf(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Pi(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Xt(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function lt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function lf(e, n, r) {
  return {
    r: de(e, 255) * 255,
    g: de(n, 255) * 255,
    b: de(r, 255) * 255
  };
}
function pa(e, n, r) {
  e = de(e, 255), n = de(n, 255), r = de(r, 255);
  var t = Math.max(e, n, r), a = Math.min(e, n, r), i = 0, o = 0, l = (t + a) / 2;
  if (t === a)
    o = 0, i = 0;
  else {
    var c = t - a;
    switch (o = l > 0.5 ? c / (2 - t - a) : c / (t + a), t) {
      case e:
        i = (n - r) / c + (n < r ? 6 : 0);
        break;
      case n:
        i = (r - e) / c + 2;
        break;
      case r:
        i = (e - n) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: o, l };
}
function sn(e, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * (6 * r) : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
}
function cf(e, n, r) {
  var t, a, i;
  if (e = de(e, 360), n = de(n, 100), r = de(r, 100), n === 0)
    a = r, i = r, t = r;
  else {
    var o = r < 0.5 ? r * (1 + n) : r + n - r * n, l = 2 * r - o;
    t = sn(l, o, e + 1 / 3), a = sn(l, o, e), i = sn(l, o, e - 1 / 3);
  }
  return { r: t * 255, g: a * 255, b: i * 255 };
}
function ha(e, n, r) {
  e = de(e, 255), n = de(n, 255), r = de(r, 255);
  var t = Math.max(e, n, r), a = Math.min(e, n, r), i = 0, o = t, l = t - a, c = t === 0 ? 0 : l / t;
  if (t === a)
    i = 0;
  else {
    switch (t) {
      case e:
        i = (n - r) / l + (n < r ? 6 : 0);
        break;
      case n:
        i = (r - e) / l + 2;
        break;
      case r:
        i = (e - n) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, v: o };
}
function uf(e, n, r) {
  e = de(e, 360) * 6, n = de(n, 100), r = de(r, 100);
  var t = Math.floor(e), a = e - t, i = r * (1 - n), o = r * (1 - a * n), l = r * (1 - (1 - a) * n), c = t % 6, s = [r, o, i, i, l, r][c], u = [l, r, r, o, i, i][c], m = [i, i, l, r, r, o][c];
  return { r: s * 255, g: u * 255, b: m * 255 };
}
function ma(e, n, r, t) {
  var a = [
    lt(Math.round(e).toString(16)),
    lt(Math.round(n).toString(16)),
    lt(Math.round(r).toString(16))
  ];
  return t && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function df(e, n, r, t, a) {
  var i = [
    lt(Math.round(e).toString(16)),
    lt(Math.round(n).toString(16)),
    lt(Math.round(r).toString(16)),
    lt(ff(t))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function ff(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ga(e) {
  return we(e) / 255;
}
function we(e) {
  return parseInt(e, 16);
}
function xf(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var gn = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function vf(e) {
  var n = { r: 0, g: 0, b: 0 }, r = 1, t = null, a = null, i = null, o = !1, l = !1;
  return typeof e == "string" && (e = mf(e)), typeof e == "object" && (Ne(e.r) && Ne(e.g) && Ne(e.b) ? (n = lf(e.r, e.g, e.b), o = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ne(e.h) && Ne(e.s) && Ne(e.v) ? (t = Xt(e.s), a = Xt(e.v), n = uf(e.h, t, a), o = !0, l = "hsv") : Ne(e.h) && Ne(e.s) && Ne(e.l) && (t = Xt(e.s), i = Xt(e.l), n = cf(e.h, t, i), o = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Pi(r), {
    ok: o,
    format: e.format || l,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: r
  };
}
var pf = "[-\\+]?\\d+%?", hf = "[-\\+]?\\d*\\.\\d+%?", Ze = "(?:".concat(hf, ")|(?:").concat(pf, ")"), ln = "[\\s|\\(]+(".concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")\\s*\\)?"), cn = "[\\s|\\(]+(".concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")\\s*\\)?"), Pe = {
  CSS_UNIT: new RegExp(Ze),
  rgb: new RegExp("rgb" + ln),
  rgba: new RegExp("rgba" + cn),
  hsl: new RegExp("hsl" + ln),
  hsla: new RegExp("hsla" + cn),
  hsv: new RegExp("hsv" + ln),
  hsva: new RegExp("hsva" + cn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function mf(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (gn[e])
    e = gn[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = Pe.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = Pe.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = Pe.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = Pe.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = Pe.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = Pe.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = Pe.hex8.exec(e), r ? {
    r: we(r[1]),
    g: we(r[2]),
    b: we(r[3]),
    a: ga(r[4]),
    format: n ? "name" : "hex8"
  } : (r = Pe.hex6.exec(e), r ? {
    r: we(r[1]),
    g: we(r[2]),
    b: we(r[3]),
    format: n ? "name" : "hex"
  } : (r = Pe.hex4.exec(e), r ? {
    r: we(r[1] + r[1]),
    g: we(r[2] + r[2]),
    b: we(r[3] + r[3]),
    a: ga(r[4] + r[4]),
    format: n ? "name" : "hex8"
  } : (r = Pe.hex3.exec(e), r ? {
    r: we(r[1] + r[1]),
    g: we(r[2] + r[2]),
    b: we(r[3] + r[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function Ne(e) {
  return !!Pe.CSS_UNIT.exec(String(e));
}
var gf = (
  /** @class */
  function() {
    function e(n, r) {
      n === void 0 && (n = ""), r === void 0 && (r = {});
      var t;
      if (n instanceof e)
        return n;
      typeof n == "number" && (n = xf(n)), this.originalInput = n;
      var a = vf(n);
      this.originalInput = n, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (t = r.format) !== null && t !== void 0 ? t : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var n = this.toRgb();
      return (n.r * 299 + n.g * 587 + n.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var n = this.toRgb(), r, t, a, i = n.r / 255, o = n.g / 255, l = n.b / 255;
      return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), o <= 0.03928 ? t = o / 12.92 : t = Math.pow((o + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * t + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(n) {
      return this.a = Pi(n), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var n = this.toHsl().s;
      return n === 0;
    }, e.prototype.toHsv = function() {
      var n = ha(this.r, this.g, this.b);
      return { h: n.h * 360, s: n.s, v: n.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var n = ha(this.r, this.g, this.b), r = Math.round(n.h * 360), t = Math.round(n.s * 100), a = Math.round(n.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(t, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(t, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var n = pa(this.r, this.g, this.b);
      return { h: n.h * 360, s: n.s, l: n.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var n = pa(this.r, this.g, this.b), r = Math.round(n.h * 360), t = Math.round(n.s * 100), a = Math.round(n.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(t, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(t, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(n) {
      return n === void 0 && (n = !1), ma(this.r, this.g, this.b, n);
    }, e.prototype.toHexString = function(n) {
      return n === void 0 && (n = !1), "#" + this.toHex(n);
    }, e.prototype.toHex8 = function(n) {
      return n === void 0 && (n = !1), df(this.r, this.g, this.b, this.a, n);
    }, e.prototype.toHex8String = function(n) {
      return n === void 0 && (n = !1), "#" + this.toHex8(n);
    }, e.prototype.toHexShortString = function(n) {
      return n === void 0 && (n = !1), this.a === 1 ? this.toHexString(n) : this.toHex8String(n);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var n = Math.round(this.r), r = Math.round(this.g), t = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(n, ", ").concat(r, ", ").concat(t, ")") : "rgba(".concat(n, ", ").concat(r, ", ").concat(t, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var n = function(r) {
        return "".concat(Math.round(de(r, 255) * 100), "%");
      };
      return {
        r: n(this.r),
        g: n(this.g),
        b: n(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var n = function(r) {
        return Math.round(de(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%)") : "rgba(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var n = "#" + ma(this.r, this.g, this.b, !1), r = 0, t = Object.entries(gn); r < t.length; r++) {
        var a = t[r], i = a[0], o = a[1];
        if (n === o)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(n) {
      var r = !!n;
      n = n ?? this.format;
      var t = !1, a = this.a < 1 && this.a >= 0, i = !r && a && (n.startsWith("hex") || n === "name");
      return i ? n === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (n === "rgb" && (t = this.toRgbString()), n === "prgb" && (t = this.toPercentageRgbString()), (n === "hex" || n === "hex6") && (t = this.toHexString()), n === "hex3" && (t = this.toHexString(!0)), n === "hex4" && (t = this.toHex8String(!0)), n === "hex8" && (t = this.toHex8String()), n === "name" && (t = this.toName()), n === "hsl" && (t = this.toHslString()), n === "hsv" && (t = this.toHsvString()), t || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(n) {
      n === void 0 && (n = 10);
      var r = this.toHsl();
      return r.l += n / 100, r.l = Gt(r.l), new e(r);
    }, e.prototype.brighten = function(n) {
      n === void 0 && (n = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100)))), new e(r);
    }, e.prototype.darken = function(n) {
      n === void 0 && (n = 10);
      var r = this.toHsl();
      return r.l -= n / 100, r.l = Gt(r.l), new e(r);
    }, e.prototype.tint = function(n) {
      return n === void 0 && (n = 10), this.mix("white", n);
    }, e.prototype.shade = function(n) {
      return n === void 0 && (n = 10), this.mix("black", n);
    }, e.prototype.desaturate = function(n) {
      n === void 0 && (n = 10);
      var r = this.toHsl();
      return r.s -= n / 100, r.s = Gt(r.s), new e(r);
    }, e.prototype.saturate = function(n) {
      n === void 0 && (n = 10);
      var r = this.toHsl();
      return r.s += n / 100, r.s = Gt(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(n) {
      var r = this.toHsl(), t = (r.h + n) % 360;
      return r.h = t < 0 ? 360 + t : t, new e(r);
    }, e.prototype.mix = function(n, r) {
      r === void 0 && (r = 50);
      var t = this.toRgb(), a = new e(n).toRgb(), i = r / 100, o = {
        r: (a.r - t.r) * i + t.r,
        g: (a.g - t.g) * i + t.g,
        b: (a.b - t.b) * i + t.b,
        a: (a.a - t.a) * i + t.a
      };
      return new e(o);
    }, e.prototype.analogous = function(n, r) {
      n === void 0 && (n = 6), r === void 0 && (r = 30);
      var t = this.toHsl(), a = 360 / r, i = [this];
      for (t.h = (t.h - (a * n >> 1) + 720) % 360; --n; )
        t.h = (t.h + a) % 360, i.push(new e(t));
      return i;
    }, e.prototype.complement = function() {
      var n = this.toHsl();
      return n.h = (n.h + 180) % 360, new e(n);
    }, e.prototype.monochromatic = function(n) {
      n === void 0 && (n = 6);
      for (var r = this.toHsv(), t = r.h, a = r.s, i = r.v, o = [], l = 1 / n; n--; )
        o.push(new e({ h: t, s: a, v: i })), i = (i + l) % 1;
      return o;
    }, e.prototype.splitcomplement = function() {
      var n = this.toHsl(), r = n.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: n.s, l: n.l }),
        new e({ h: (r + 216) % 360, s: n.s, l: n.l })
      ];
    }, e.prototype.onBackground = function(n) {
      var r = this.toRgb(), t = new e(n).toRgb(), a = r.a + t.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + t.r * t.a * (1 - r.a)) / a,
        g: (r.g * r.a + t.g * t.a * (1 - r.a)) / a,
        b: (r.b * r.a + t.b * t.a * (1 - r.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(n) {
      for (var r = this.toHsl(), t = r.h, a = [this], i = 360 / n, o = 1; o < n; o++)
        a.push(new e({ h: (t + o * i) % 360, s: r.s, l: r.l }));
      return a;
    }, e.prototype.equals = function(n) {
      return this.toRgbString() === new e(n).toRgbString();
    }, e;
  }()
);
function je(e, n = 20) {
  return e.mix("#141414", n).toString();
}
function bf(e) {
  const n = $n(), r = Ve("button");
  return H(() => {
    let t = {}, a = e.color;
    if (a) {
      const i = a.match(/var\((.*?)\)/);
      i && (a = window.getComputedStyle(window.document.documentElement).getPropertyValue(i[1]));
      const o = new gf(a), l = e.dark ? o.tint(20).toString() : je(o, 20);
      if (e.plain)
        t = r.cssVarBlock({
          "bg-color": e.dark ? je(o, 90) : o.tint(90).toString(),
          "text-color": a,
          "border-color": e.dark ? je(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${r.cssVarName("color-white")})`,
          "hover-bg-color": a,
          "hover-border-color": a,
          "active-bg-color": l,
          "active-text-color": `var(${r.cssVarName("color-white")})`,
          "active-border-color": l
        }), n.value && (t[r.cssVarBlockName("disabled-bg-color")] = e.dark ? je(o, 90) : o.tint(90).toString(), t[r.cssVarBlockName("disabled-text-color")] = e.dark ? je(o, 50) : o.tint(50).toString(), t[r.cssVarBlockName("disabled-border-color")] = e.dark ? je(o, 80) : o.tint(80).toString());
      else {
        const c = e.dark ? je(o, 30) : o.tint(30).toString(), s = o.isDark() ? `var(${r.cssVarName("color-white")})` : `var(${r.cssVarName("color-black")})`;
        if (t = r.cssVarBlock({
          "bg-color": a,
          "text-color": s,
          "border-color": a,
          "hover-bg-color": c,
          "hover-text-color": s,
          "hover-border-color": c,
          "active-bg-color": l,
          "active-border-color": l
        }), n.value) {
          const u = e.dark ? je(o, 50) : o.tint(50).toString();
          t[r.cssVarBlockName("disabled-bg-color")] = u, t[r.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${r.cssVarName("color-white")})`, t[r.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return t;
  });
}
const yf = se({
  name: "ElButton"
}), _f = /* @__PURE__ */ se({
  ...yf,
  props: mn,
  emits: af,
  setup(e, { expose: n, emit: r }) {
    const t = e, a = bf(t), i = Ve("button"), { _ref: o, _size: l, _type: c, _disabled: s, _props: u, shouldAddSpace: m, handleClick: f } = tf(t, r), h = H(() => [
      i.b(),
      i.m(c.value),
      i.m(l.value),
      i.is("disabled", s.value),
      i.is("loading", t.loading),
      i.is("plain", t.plain),
      i.is("round", t.round),
      i.is("circle", t.circle),
      i.is("text", t.text),
      i.is("link", t.link),
      i.is("has-bg", t.bg)
    ]);
    return n({
      ref: o,
      size: l,
      type: c,
      disabled: s,
      shouldAddSpace: m
    }), (d, x) => (L(), ne(Se(d.tag), Lt({
      ref_key: "_ref",
      ref: o
    }, R(u), {
      class: R(h),
      style: R(a),
      onClick: R(f)
    }), {
      default: oe(() => [
        d.loading ? (L(), V(Le, { key: 0 }, [
          d.$slots.loading ? he(d.$slots, "loading", { key: 0 }) : (L(), ne(R(Je), {
            key: 1,
            class: U(R(i).is("loading"))
          }, {
            default: oe(() => [
              (L(), ne(Se(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (L(), ne(R(Je), { key: 1 }, {
          default: oe(() => [
            d.icon ? (L(), ne(Se(d.icon), { key: 0 })) : he(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : Q("v-if", !0),
        d.$slots.default ? (L(), V("span", {
          key: 2,
          class: U({ [R(i).em("text", "expand")]: R(m) })
        }, [
          he(d.$slots, "default")
        ], 2)) : Q("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Cf = /* @__PURE__ */ Dt(_f, [["__file", "button.vue"]]);
const Ef = {
  size: mn.size,
  type: mn.type
}, Bf = se({
  name: "ElButtonGroup"
}), Df = /* @__PURE__ */ se({
  ...Bf,
  props: Ef,
  setup(e) {
    const n = e;
    yn(Ii, Ba({
      size: n0(n, "size"),
      type: n0(n, "type")
    }));
    const r = Ve("button");
    return (t, a) => (L(), V("div", {
      class: U(R(r).b("group"))
    }, [
      he(t.$slots, "default")
    ], 2));
  }
});
var Mi = /* @__PURE__ */ Dt(Df, [["__file", "button-group.vue"]]);
const Af = zn(Cf, {
  ButtonGroup: Mi
});
Uu(Mi);
var e0 = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(e0 || {});
const Ri = (e) => {
  if (!e)
    return { onClick: zt, onMousedown: zt, onMouseup: zt };
  let n = !1, r = !1;
  return { onClick: (o) => {
    n && r && e(o), n = r = !1;
  }, onMousedown: (o) => {
    n = o.target === o.currentTarget;
  }, onMouseup: (o) => {
    r = o.target === o.currentTarget;
  } };
}, wf = Bt({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: Qe([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: Qe([String, Number])
  }
}), Ff = {
  click: (e) => e instanceof MouseEvent
}, Sf = "overlay";
var kf = se({
  name: "ElOverlay",
  props: wf,
  emits: Ff,
  setup(e, { slots: n, emit: r }) {
    const t = Ve(Sf), a = (c) => {
      r("click", c);
    }, { onClick: i, onMousedown: o, onMouseup: l } = Ri(e.customMaskEvent ? void 0 : a);
    return () => e.mask ? xe("div", {
      class: [t.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: i,
      onMousedown: o,
      onMouseup: l
    }, [he(n, "default")], e0.STYLE | e0.CLASS | e0.PROPS, ["onClick", "onMouseup", "onMousedown"]) : ho("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [he(n, "default")]);
  }
});
const Tf = kf, If = (e, n, r, t) => {
  let a = {
    offsetX: 0,
    offsetY: 0
  };
  const i = (s) => {
    const u = s.clientX, m = s.clientY, { offsetX: f, offsetY: h } = a, d = e.value.getBoundingClientRect(), x = d.left, v = d.top, y = d.width, p = d.height, g = document.documentElement.clientWidth, b = document.documentElement.clientHeight, E = -x + f, C = -v + h, B = g - x - y + f, w = b - v - p + h, P = (A) => {
      let F = f + A.clientX - u, S = h + A.clientY - m;
      t != null && t.value || (F = Math.min(Math.max(F, E), B), S = Math.min(Math.max(S, C), w)), a = {
        offsetX: F,
        offsetY: S
      }, e.value && (e.value.style.transform = `translate(${vn(F)}, ${vn(S)})`);
    }, _ = () => {
      document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", _);
    };
    document.addEventListener("mousemove", P), document.addEventListener("mouseup", _);
  }, o = () => {
    n.value && e.value && n.value.addEventListener("mousedown", i);
  }, l = () => {
    n.value && e.value && n.value.removeEventListener("mousedown", i);
  }, c = () => {
    a = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return qe(() => {
    ya(() => {
      r.value ? o() : l();
    });
  }), Nt(() => {
    l();
  }), {
    resetPosition: c
  };
}, Pf = (e, n = {}) => {
  Ca(e) || Fu("[useLockscreen]", "You need to pass a ref param to this function");
  const r = n.ns || Ve("popup"), t = H(() => r.bm("parent", "hidden"));
  if (!ke || ra(document.body, t.value))
    return;
  let a = 0, i = !1, o = "0";
  const l = () => {
    setTimeout(() => {
      typeof document > "u" || i && document && (document.body.style.width = o, qu(document.body, t.value));
    }, 200);
  };
  Be(e, (c) => {
    if (!c) {
      l();
      return;
    }
    i = !ra(document.body, t.value), i && (o = document.body.style.width, Vu(document.body, t.value)), a = Yu(r.namespace.value);
    const s = document.documentElement.clientHeight < document.body.scrollHeight, u = Wu(document.body, "overflowY");
    a > 0 && (s || u === "scroll") && i && (document.body.style.width = `calc(100% - ${a}px)`);
  }), _a(() => l());
}, Mf = (e) => ["", ...hi].includes(e), bn = "_trap-focus-children", ct = [], ba = (e) => {
  var n;
  if (ct.length === 0)
    return;
  const r = ct[ct.length - 1][bn];
  if (r.length > 0 && e.code === Nn.tab) {
    if (r.length === 1) {
      e.preventDefault(), document.activeElement !== r[0] && r[0].focus();
      return;
    }
    const t = e.shiftKey, a = e.target === r[0], i = e.target === r[r.length - 1];
    if (a && t && (e.preventDefault(), r[r.length - 1].focus()), i && !t && (e.preventDefault(), r[0].focus()), process.env.NODE_ENV === "test") {
      const o = r.indexOf(e.target);
      o !== -1 && ((n = r[t ? o - 1 : o + 1]) == null || n.focus());
    }
  }
}, Rf = {
  beforeMount(e) {
    e[bn] = oa(e), ct.push(e), ct.length <= 1 && document.addEventListener("keydown", ba);
  },
  updated(e) {
    Ce(() => {
      e[bn] = oa(e);
    });
  },
  unmounted() {
    ct.shift(), ct.length === 0 && document.removeEventListener("keydown", ba);
  }
}, zf = se({
  name: "ElMessageBox",
  directives: {
    TrapFocus: Rf
  },
  components: {
    ElButton: Af,
    ElFocusTrap: Qd,
    ElInput: Ld,
    ElOverlay: Tf,
    ElIcon: Je,
    ...xd
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: Mf
    },
    modal: {
      type: Boolean,
      default: !0
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    showClose: {
      type: Boolean,
      default: !0
    },
    closeOnClickModal: {
      type: Boolean,
      default: !0
    },
    closeOnPressEscape: {
      type: Boolean,
      default: !0
    },
    closeOnHashChange: {
      type: Boolean,
      default: !0
    },
    center: Boolean,
    draggable: Boolean,
    overflow: Boolean,
    roundButton: {
      default: !1,
      type: Boolean
    },
    container: {
      type: String,
      default: "body"
    },
    boxType: {
      type: String,
      default: ""
    }
  },
  emits: ["vanish", "action"],
  setup(e, { emit: n }) {
    const {
      locale: r,
      zIndex: t,
      ns: a,
      size: i
    } = $u("message-box", H(() => e.buttonSize)), { t: o } = r, { nextZIndex: l } = t, c = ie(!1), s = Ba({
      autofocus: !0,
      beforeClose: null,
      callback: null,
      cancelButtonText: "",
      cancelButtonClass: "",
      confirmButtonText: "",
      confirmButtonClass: "",
      customClass: "",
      customStyle: {},
      dangerouslyUseHTMLString: !1,
      distinguishCancelAndClose: !1,
      icon: "",
      closeIcon: "",
      inputPattern: null,
      inputPlaceholder: "",
      inputType: "text",
      inputValue: "",
      inputValidator: void 0,
      inputErrorMessage: "",
      message: "",
      modalFade: !0,
      modalClass: "",
      showCancelButton: !1,
      showConfirmButton: !0,
      type: "",
      title: void 0,
      showInput: !1,
      action: "",
      confirmButtonLoading: !1,
      cancelButtonLoading: !1,
      confirmButtonLoadingIcon: r0(d0),
      cancelButtonLoadingIcon: r0(d0),
      confirmButtonDisabled: !1,
      editorErrorMessage: "",
      validateError: !1,
      zIndex: l()
    }), u = H(() => {
      const $ = s.type;
      return { [a.bm("icon", $)]: $ && aa[$] };
    }), m = hn(), f = hn(), h = H(() => {
      const $ = s.type;
      return s.icon || $ && aa[$] || "";
    }), d = H(() => !!s.message), x = ie(), v = ie(), y = ie(), p = ie(), g = ie(), b = H(() => s.confirmButtonClass);
    Be(() => s.inputValue, async ($) => {
      await Ce(), e.boxType === "prompt" && $ && F();
    }, { immediate: !0 }), Be(() => c.value, ($) => {
      var q, W;
      $ && (e.boxType !== "prompt" && (s.autofocus ? y.value = (W = (q = g.value) == null ? void 0 : q.$el) != null ? W : x.value : y.value = x.value), s.zIndex = l()), e.boxType === "prompt" && ($ ? Ce().then(() => {
        var J;
        p.value && p.value.$el && (s.autofocus ? y.value = (J = S()) != null ? J : x.value : y.value = x.value);
      }) : (s.editorErrorMessage = "", s.validateError = !1));
    });
    const E = H(() => e.draggable), C = H(() => e.overflow);
    If(x, v, E, C), qe(async () => {
      await Ce(), e.closeOnHashChange && window.addEventListener("hashchange", B);
    }), Nt(() => {
      e.closeOnHashChange && window.removeEventListener("hashchange", B);
    });
    function B() {
      c.value && (c.value = !1, Ce(() => {
        s.action && n("action", s.action);
      }));
    }
    const w = () => {
      e.closeOnClickModal && A(s.distinguishCancelAndClose ? "close" : "cancel");
    }, P = Ri(w), _ = ($) => {
      if (s.inputType !== "textarea")
        return $.preventDefault(), A("confirm");
    }, A = ($) => {
      var q;
      e.boxType === "prompt" && $ === "confirm" && !F() || (s.action = $, s.beforeClose ? (q = s.beforeClose) == null || q.call(s, $, s, B) : B());
    }, F = () => {
      if (e.boxType === "prompt") {
        const $ = s.inputPattern;
        if ($ && !$.test(s.inputValue || ""))
          return s.editorErrorMessage = s.inputErrorMessage || o("el.messagebox.error"), s.validateError = !0, !1;
        const q = s.inputValidator;
        if (yt(q)) {
          const W = q(s.inputValue);
          if (W === !1)
            return s.editorErrorMessage = s.inputErrorMessage || o("el.messagebox.error"), s.validateError = !0, !1;
          if ($e(W))
            return s.editorErrorMessage = W, s.validateError = !0, !1;
        }
      }
      return s.editorErrorMessage = "", s.validateError = !1, !0;
    }, S = () => {
      var $, q;
      const W = ($ = p.value) == null ? void 0 : $.$refs;
      return (q = W == null ? void 0 : W.input) != null ? q : W == null ? void 0 : W.textarea;
    }, O = () => {
      A("close");
    }, N = () => {
      e.closeOnPressEscape && O();
    };
    return e.lockScroll && Pf(c), {
      ...mo(s),
      ns: a,
      overlayEvent: P,
      visible: c,
      hasMessage: d,
      typeClass: u,
      contentId: m,
      inputId: f,
      btnSize: i,
      iconComponent: h,
      confirmButtonClasses: b,
      rootRef: x,
      focusStartRef: y,
      headerRef: v,
      inputRef: p,
      confirmRef: g,
      doClose: B,
      handleClose: O,
      onCloseRequested: N,
      handleWrapperClick: w,
      handleInputEnter: _,
      handleAction: A,
      t: o
    };
  }
});
function Lf(e, n, r, t, a, i) {
  const o = Fe("el-icon"), l = Fe("el-input"), c = Fe("el-button"), s = Fe("el-focus-trap"), u = Fe("el-overlay");
  return L(), ne(_n, {
    name: "fade-in-linear",
    onAfterLeave: (m) => e.$emit("vanish"),
    persisted: ""
  }, {
    default: oe(() => [
      y0(xe(u, {
        "z-index": e.zIndex,
        "overlay-class": [e.ns.is("message-box"), e.modalClass],
        mask: e.modal
      }, {
        default: oe(() => [
          Y("div", {
            role: "dialog",
            "aria-label": e.title,
            "aria-modal": "true",
            "aria-describedby": e.showInput ? void 0 : e.contentId,
            class: U(`${e.ns.namespace.value}-overlay-message-box`),
            onClick: e.overlayEvent.onClick,
            onMousedown: e.overlayEvent.onMousedown,
            onMouseup: e.overlayEvent.onMouseup
          }, [
            xe(s, {
              loop: "",
              trapped: e.visible,
              "focus-trap-el": e.rootRef,
              "focus-start-el": e.focusStartRef,
              onReleaseRequested: e.onCloseRequested
            }, {
              default: oe(() => [
                Y("div", {
                  ref: "rootRef",
                  class: U([
                    e.ns.b(),
                    e.customClass,
                    e.ns.is("draggable", e.draggable),
                    { [e.ns.m("center")]: e.center }
                  ]),
                  style: ve(e.customStyle),
                  tabindex: "-1",
                  onClick: Pt(() => {
                  }, ["stop"])
                }, [
                  e.title !== null && e.title !== void 0 ? (L(), V("div", {
                    key: 0,
                    ref: "headerRef",
                    class: U([e.ns.e("header"), { "show-close": e.showClose }])
                  }, [
                    Y("div", {
                      class: U(e.ns.e("title"))
                    }, [
                      e.iconComponent && e.center ? (L(), ne(o, {
                        key: 0,
                        class: U([e.ns.e("status"), e.typeClass])
                      }, {
                        default: oe(() => [
                          (L(), ne(Se(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : Q("v-if", !0),
                      Y("span", null, le(e.title), 1)
                    ], 2),
                    e.showClose ? (L(), V("button", {
                      key: 0,
                      type: "button",
                      class: U(e.ns.e("headerbtn")),
                      "aria-label": e.t("el.messagebox.close"),
                      onClick: (m) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"),
                      onKeydown: Wt(Pt((m) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
                    }, [
                      xe(o, {
                        class: U(e.ns.e("close"))
                      }, {
                        default: oe(() => [
                          (L(), ne(Se(e.closeIcon || "close")))
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, ["aria-label", "onClick", "onKeydown"])) : Q("v-if", !0)
                  ], 2)) : Q("v-if", !0),
                  Y("div", {
                    id: e.contentId,
                    class: U(e.ns.e("content"))
                  }, [
                    Y("div", {
                      class: U(e.ns.e("container"))
                    }, [
                      e.iconComponent && !e.center && e.hasMessage ? (L(), ne(o, {
                        key: 0,
                        class: U([e.ns.e("status"), e.typeClass])
                      }, {
                        default: oe(() => [
                          (L(), ne(Se(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : Q("v-if", !0),
                      e.hasMessage ? (L(), V("div", {
                        key: 1,
                        class: U(e.ns.e("message"))
                      }, [
                        he(e.$slots, "default", {}, () => [
                          e.dangerouslyUseHTMLString ? (L(), ne(Se(e.showInput ? "label" : "p"), {
                            key: 1,
                            for: e.showInput ? e.inputId : void 0,
                            innerHTML: e.message
                          }, null, 8, ["for", "innerHTML"])) : (L(), ne(Se(e.showInput ? "label" : "p"), {
                            key: 0,
                            for: e.showInput ? e.inputId : void 0
                          }, {
                            default: oe(() => [
                              Jt(le(e.dangerouslyUseHTMLString ? "" : e.message), 1)
                            ]),
                            _: 1
                          }, 8, ["for"]))
                        ])
                      ], 2)) : Q("v-if", !0)
                    ], 2),
                    y0(Y("div", {
                      class: U(e.ns.e("input"))
                    }, [
                      xe(l, {
                        id: e.inputId,
                        ref: "inputRef",
                        modelValue: e.inputValue,
                        "onUpdate:modelValue": (m) => e.inputValue = m,
                        type: e.inputType,
                        placeholder: e.inputPlaceholder,
                        "aria-invalid": e.validateError,
                        class: U({ invalid: e.validateError }),
                        onKeydown: Wt(e.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      Y("div", {
                        class: U(e.ns.e("errormsg")),
                        style: ve({
                          visibility: e.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, le(e.editorErrorMessage), 7)
                    ], 2), [
                      [_0, e.showInput]
                    ])
                  ], 10, ["id"]),
                  Y("div", {
                    class: U(e.ns.e("btns"))
                  }, [
                    e.showCancelButton ? (L(), ne(c, {
                      key: 0,
                      loading: e.cancelButtonLoading,
                      "loading-icon": e.cancelButtonLoadingIcon,
                      class: U([e.cancelButtonClass]),
                      round: e.roundButton,
                      size: e.btnSize,
                      onClick: (m) => e.handleAction("cancel"),
                      onKeydown: Wt(Pt((m) => e.handleAction("cancel"), ["prevent"]), ["enter"])
                    }, {
                      default: oe(() => [
                        Jt(le(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : Q("v-if", !0),
                    y0(xe(c, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: e.confirmButtonLoading,
                      "loading-icon": e.confirmButtonLoadingIcon,
                      class: U([e.confirmButtonClasses]),
                      round: e.roundButton,
                      disabled: e.confirmButtonDisabled,
                      size: e.btnSize,
                      onClick: (m) => e.handleAction("confirm"),
                      onKeydown: Wt(Pt((m) => e.handleAction("confirm"), ["prevent"]), ["enter"])
                    }, {
                      default: oe(() => [
                        Jt(le(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "disabled", "size", "onClick", "onKeydown"]), [
                      [_0, e.showConfirmButton]
                    ])
                  ], 2)
                ], 14, ["onClick"])
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])
          ], 42, ["aria-label", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask"]), [
        [_0, e.visible]
      ])
    ]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
var $f = /* @__PURE__ */ Dt(zf, [["render", Lf], ["__file", "index.vue"]]);
const Ht = /* @__PURE__ */ new Map(), Of = (e) => {
  let n = document.body;
  return e.appendTo && ($e(e.appendTo) && (n = document.querySelector(e.appendTo)), Ot(e.appendTo) && (n = e.appendTo), Ot(n) || (Oe("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body."), n = document.body)), n;
}, Hf = (e, n, r = null) => {
  const t = xe($f, e, yt(e.message) || Da(e.message) ? {
    default: yt(e.message) ? e.message : () => e.message
  } : null);
  return t.appContext = r, Aa(t, n), Of(e).appendChild(n.firstElementChild), t.component;
}, Nf = () => document.createElement("div"), Vf = (e, n) => {
  const r = Nf();
  e.onVanish = () => {
    Aa(null, r), Ht.delete(a);
  }, e.onAction = (i) => {
    const o = Ht.get(a);
    let l;
    e.showInput ? l = { value: a.inputValue, action: i } : l = i, e.callback ? e.callback(l, t.proxy) : i === "cancel" || i === "close" ? e.distinguishCancelAndClose && i !== "cancel" ? o.reject("close") : o.reject("cancel") : o.resolve(l);
  };
  const t = Hf(e, r, n), a = t.proxy;
  for (const i in e)
    o0(e, i) && !o0(a.$props, i) && (i === "closeIcon" && _t(e[i]) ? a[i] = r0(e[i]) : a[i] = e[i]);
  return a.visible = !0, a;
};
function At(e, n = null) {
  if (!ke)
    return Promise.reject();
  let r;
  return $e(e) || Da(e) ? e = {
    message: e
  } : r = e.callback, new Promise((t, a) => {
    const i = Vf(e, n ?? At._context);
    Ht.set(i, {
      options: e,
      callback: r,
      resolve: t,
      reject: a
    });
  });
}
const qf = ["alert", "confirm", "prompt"], Wf = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
qf.forEach((e) => {
  At[e] = Yf(e);
});
function Yf(e) {
  return (n, r, t, a) => {
    let i = "";
    return _t(r) ? (t = r, i = "") : ii(r) ? i = "" : i = r, At(Object.assign({
      title: i,
      message: n,
      type: "",
      ...Wf[e]
    }, t, {
      boxType: e
    }), a);
  };
}
At.close = () => {
  Ht.forEach((e, n) => {
    n.doClose();
  }), Ht.clear();
};
At._context = null;
const Xe = At;
Xe.install = (e) => {
  Xe._context = e._context, e.config.globalProperties.$msgbox = Xe, e.config.globalProperties.$messageBox = Xe, e.config.globalProperties.$alert = Xe.alert, e.config.globalProperties.$confirm = Xe.confirm, e.config.globalProperties.$prompt = Xe.prompt;
};
const Uf = Xe;
function Kf({
  type: e = "warning",
  icon: n = "",
  title: r = "系统提示",
  message: t,
  showCancelButton: a = !0,
  confirmButtonText: i = "确定",
  cancelButtonText: o = "取消",
  center: l = !1,
  overflow: c = !1,
  draggable: s = !1,
  appendTo: u,
  customStyle: m = {},
  doSomething: f = () => {
  },
  cancelDoSomething: h = () => {
  }
}) {
  Uf({
    icon: n === "" ? r0(fd) : n,
    type: e,
    title: r,
    message: t,
    showCancelButton: a,
    confirmButtonText: i,
    cancelButtonText: o,
    center: l,
    overflow: c,
    draggable: s,
    appendTo: u,
    customStyle: m,
    beforeClose: (d, x, v) => {
      if (d === "confirm") {
        f(), v();
        return;
      }
      h(), v();
    }
  }).catch(() => {
  });
}
const zi = {
  delMessageBox: Kf
};
let Vn = {};
const jf = "ljs-2024.01.30";
function un(e, n, r) {
  const t = {
    rotate: -25,
    // 旋转角度
    can_w: 150,
    // 画布宽
    can_h: 130,
    // 画布高
    font: "14px Vedana",
    // 字体
    color: "rgba(127, 127, 127, 0.1)",
    // 颜色
    align: "left"
    // 文本对齐方式
  };
  for (let c in r)
    t[c] = r[c];
  let a = et.setDES(e, jf);
  document.getElementById(a) !== null && document.body.removeChild(document.getElementById(a));
  let i = document.createElement("canvas");
  i.width = t.can_w, i.height = t.can_h;
  let o = i.getContext("2d");
  o.rotate(t.rotate * Math.PI / 180), o.font = t.font, o.fillStyle = t.color, o.textAlign = t.align, o.textBaseline = "Middle", o.fillText(n[0], i.width / 8, i.height / 2), o.fillText(n[1], i.width / 8, i.height * 2 / 3);
  let l = document.createElement("div");
  return l.id = a, l.style.display = "block", l.style.visibility = "visible", l.style.opacity = "1", l.style.pointerEvents = "none", l.style.top = "0px", l.style.left = "0px", l.style.position = "fixed", l.style.zIndex = "100000", l.style.width = document.documentElement.clientWidth + "px", l.style.height = document.documentElement.clientHeight + "px", l.style.background = "url(" + i.toDataURL("image/png") + ") left top repeat", document.body.appendChild(l), a;
}
Vn.set = (e, n, r, t = 500) => {
  let a = un(e, n, r);
  setInterval(() => {
    const i = document.getElementById(a), o = i.style;
    (i === null || o.display !== "block" || o.visibility !== "visible" || o.opacity !== "1" || o.position !== "fixed" || o.top !== "0px" || o.left !== "0px") && (a = un(e, n, r));
  }, t), window.onresize = () => {
    un(e, n, r);
  };
};
function Gf(e) {
  const n = e.length;
  if (n === 2)
    return e.slice(0, 1) + "*";
  if (n > 2) {
    const r = e.slice(0, 1), t = e.slice(n - 1, n);
    return r + "*" + t;
  }
  return e;
}
function Xf(e, n = 4) {
  e = e + "";
  const r = e.length;
  if (r === 11) {
    const t = e.slice(0, 3), a = e.slice(3 + n, r);
    let i = "";
    for (let o = 0; o < n; o++)
      i += "*";
    return t + i + a;
  } else if (r === 7 || r === 8) {
    const t = e.slice(0, 2), a = e.slice(2 + n, r);
    let i = "";
    for (let o = 0; o < n; o++)
      i += "*";
    return t + i + a;
  } else {
    const t = e.slice(0, 2), a = e.slice(r - 2, r);
    let i = "";
    for (let o = 0; o < r - 4; o++)
      i += "*";
    return t + i + a;
  }
}
function Jf(e, n = 3, r = 4, t = "*") {
  if (!e || e.length < n + r)
    return e;
  const a = e.substr(0, n), i = e.substr(-r), o = e.length - n - r;
  return a + t.repeat(o) + i;
}
const Li = {
  desensitizationName: Gf,
  desensitizationPhone: Xf,
  desensitizationIdCard: Jf
}, Zf = {
  // emits: ['input', 'update:value'],
  props: {
    // 转速，单位秒
    speed: {
      type: Number,
      default: 3
    },
    // 高斯模糊
    gaussian: {
      type: Number,
      default: 1
    },
    // 背景透明度，0~1的数字。
    bgOpacity: {
      type: Number,
      default: 0.5
    },
    // solt字体颜色
    textColor: {
      type: String,
      default: "#FFF"
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
    }
  }
};
const We = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [t, a] of n)
    r[t] = a;
  return r;
}, Qf = Zf, ex = (e) => (Cn("data-v-474ec553"), e = e(), En(), e), tx = { class: "text" }, nx = { class: "g-container" }, rx = /* @__PURE__ */ ex(() => /* @__PURE__ */ Y("div", { class: "g-circle" }, null, -1)), ax = { class: "g-bubbles" };
function ix(e, n, r, t, a, i) {
  return L(), ne(wa, { to: "body" }, [
    Y("div", {
      class: "ljs-loading",
      id: "ljs-loading",
      ref: "ljsLoading",
      style: ve({
        "--speed": e.speed,
        "--gaussian": e.gaussian,
        "--bgopacity": e.bgOpacity,
        "--textcolor": e.textColor
      })
    }, [
      Y("div", tx, [
        he(e.$slots, "default", {}, void 0, !0)
      ]),
      Y("div", nx, [
        rx,
        Y("div", ax, [
          (L(), V(Le, null, x0(200, (o) => Y("div", {
            class: "g-bubble",
            key: o
          })), 64))
        ])
      ])
    ], 4)
  ]);
}
const $i = /* @__PURE__ */ We(Qf, [["render", ix], ["__scopeId", "data-v-474ec553"]]);
const ox = {
  name: "pagination",
  props: {
    total: {
      required: !0,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      }
    },
    // 移动端页码按钮的数量端默认值5
    pagerCount: {
      type: Number,
      default: document.body.clientWidth < 992 ? 5 : 7
    },
    layout: {
      type: String,
      default: "prev, pager, next, sizes, total"
    },
    background: {
      type: Boolean,
      default: !0
    },
    autoScroll: {
      type: Boolean,
      default: !0
    },
    note: {
      type: String,
      default: ""
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(e) {
        this.$emit("update:page", e);
      }
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(e) {
        this.$emit("update:limit", e);
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleSizeChange(e) {
      this.currentPage * e > this.total && (this.currentPage = 1), this.$emit("pagination", { page: this.currentPage, limit: e }), this.autoScroll;
    },
    handleCurrentChange(e) {
      this.$emit("pagination", { page: e, limit: this.pageSize }), this.autoScroll;
    }
  }
}, sx = { class: "pagination" }, lx = { class: "note" };
function cx(e, n, r, t, a, i) {
  const o = Fe("el-pagination");
  return L(), V("div", sx, [
    Y("div", lx, le(r.note), 1),
    xe(o, Lt({
      background: r.background,
      "current-page": i.currentPage,
      "onUpdate:currentPage": n[0] || (n[0] = (l) => i.currentPage = l),
      "page-size": i.pageSize,
      "onUpdate:pageSize": n[1] || (n[1] = (l) => i.pageSize = l),
      layout: r.layout,
      "page-sizes": r.pageSizes,
      "pager-count": r.pagerCount,
      total: r.total
    }, e.$attrs, {
      onSizeChange: i.handleSizeChange,
      onCurrentChange: i.handleCurrentChange
    }), null, 16, ["background", "current-page", "page-size", "layout", "page-sizes", "pager-count", "total", "onSizeChange", "onCurrentChange"])
  ]);
}
const Oi = /* @__PURE__ */ We(ox, [["render", cx], ["__scopeId", "data-v-83c57e11"]]), ux = {
  name: "RightMenu",
  props: {
    modelValue: [Boolean],
    // 配置参数
    opts: {
      type: Object,
      default: () => ({
        top: 0,
        // 定位 top
        left: 0,
        // 定位 left
        width: 0,
        // 菜单可视区域 宽
        height: 0
        // 菜单可视区域 高
      })
    },
    // 为 RightMenu 添加类名
    menuClass: {
      type: String,
      default: ""
    }
  },
  watch: {
    modelValue: {
      handler(e) {
        this.modelValue && (this.time = (/* @__PURE__ */ new Date()).getTime(), this.changePosition());
      },
      deep: !0,
      immediate: !0
    },
    opts: {
      handler(e) {
        this.modelValue && (this.time = (/* @__PURE__ */ new Date()).getTime(), this.changePosition());
      },
      deep: !0,
      immediate: !0
    }
  },
  data() {
    return {
      time: null,
      position: {
        top: 0,
        left: 0
      }
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 处理位置，但不支持原生滚动条占位处理
    changePosition() {
      this.$nextTick(() => {
        const e = this.$refs.rightMenu.offsetWidth, n = this.$refs.rightMenu.offsetHeight, r = e + this.opts.left;
        n + this.opts.top > this.opts.height ? this.position.top = this.opts.height - n : this.position.top = this.opts.top, r > this.opts.width ? this.position.left = this.opts.width - e : this.position.left = this.opts.left;
      });
    },
    // 初始化数据
    async initData() {
      window.addEventListener("click", () => {
        (/* @__PURE__ */ new Date()).getTime() - this.time >= 100 && this.$emit("update:modelValue", !1);
      });
    }
  }
};
const dx = ux;
function fx(e, n, r, t, a, i) {
  return L(), ne(wa, { to: "body" }, [
    e.modelValue ? (L(), V("div", {
      key: 0,
      ref: "rightMenu",
      class: U(`rightMenu ${e.menuClass} ${e.modelValue ? "show" : ""}`),
      style: ve({
        top: `${e.position.top}px`,
        left: `${e.position.left}px`
      })
    }, [
      he(e.$slots, "default", {}, void 0, !0)
    ], 6)) : Q("", !0)
  ]);
}
const Hi = /* @__PURE__ */ We(dx, [["render", fx], ["__scopeId", "data-v-99657e8c"]]);
const xx = {
  name: "DatetypeChooseDate",
  props: {
    // 日期数据
    date: String,
    // 默认类型，默认值：日。字典value
    dictValue: String,
    // 日期类型字典数据
    datetypeData: Array,
    // 字典key值对应的value值，按照年月日的顺序，默认年为1日为3
    dateTypeKeyValue: {
      type: Array,
      default: ["1", "2", "3"]
    },
    // form-item，label值
    formItemLabel: {
      type: String,
      default: "日期"
    },
    // 禁用日期，默认跨度为0
    disabledDateSpan: {
      type: Number,
      default: 0
    },
    // 日期类型 - 不显示项，根据value处理
    noType: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      date_type: [],
      // 日期参数
      opts: {
        dateType: "year",
        // 日期类型，年year，月month，日date
        dateTypeTag: !0,
        // 日期控件是否显示
        valueFormat: "yyyy"
      }
    };
  },
  computed: {
    disabledDate() {
      return v0.pickerOptions(this.dateType, this.disabledDateSpan, this.dateTypeKeyValue);
    },
    dateType: {
      get() {
        return this.dictValue;
      },
      set(e) {
        this.$emit("update:dictValue", e);
      }
    },
    dateValue: {
      get() {
        return this.date;
      },
      set(e) {
        this.$emit("update:date", e);
      }
    }
  },
  watch: {
    dateType: {
      handler(e) {
        this.dateTypeF(this.dateType);
      },
      deep: !0,
      immediate: !0
    },
    datetypeData: {
      handler(e) {
        this.datetypeData !== void 0 && this.datetypeData !== null && this.datetypeData.length !== 0 && this.init();
      },
      deep: !0,
      immediate: !0
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.initData();
    },
    // 初始化数据
    async initData() {
      const e = this.datetypeData;
      e && (this.noType.forEach((n) => {
        const r = e.length;
        for (let t = 0; t < r; t++) {
          const a = e[t];
          if (n === a.dictValue) {
            e.splice(t, 1);
            break;
          }
        }
      }), this.date_type = e), this.dateTypeF(this.dateType);
    },
    // 日期类型切换
    dateTypeF(e) {
      this.opts.dateTypeTag = !1;
      let n = Date.now();
      this.dateType = e;
      let r = null, t = null;
      switch (e) {
        case this.dateTypeKeyValue[3]:
        case this.dateTypeKeyValue[2]:
          n += this.disabledDateSpan * 3600 * 1e3 * 24, this.opts.dateType = "date", this.opts.valueFormat = "YYYY-MM-DD", this.dateValue = ue.formatTime(n, "{y}-{m}-{d}");
          break;
        case this.dateTypeKeyValue[1]:
          r = new Date(n).getFullYear(), t = new Date(n).getMonth() + this.disabledDateSpan, t < 0 ? (r += this.disabledDateSpan, t = 12) : t += 1, this.opts.dateType = "month", this.opts.valueFormat = "YYYY-MM", this.dateValue = ue.formatTime(/* @__PURE__ */ new Date(`${r}-${te.numberB0(t)}`), "{y}-{m}");
          break;
        case this.dateTypeKeyValue[0]:
          r = new Date(n).getFullYear(), r += this.disabledDateSpan, this.opts.dateType = "year", this.opts.valueFormat = "YYYY", this.dateValue = r.toString();
          break;
      }
      setTimeout(() => {
        this.opts.dateTypeTag = !0;
      }, 0);
    }
  }
}, vx = ["onClick"], px = { class: "frequencyDate" };
function hx(e, n, r, t, a, i) {
  const o = Fe("el-date-picker"), l = Fe("el-form-item");
  return L(), ne(l, {
    label: r.formItemLabel,
    prop: "date"
  }, {
    default: oe(() => [
      Y("div", {
        class: "frequency",
        style: ve({
          "--dateTypeNum": a.date_type.length
        })
      }, [
        (L(!0), V(Le, null, x0(a.date_type, (c) => (L(), V("div", {
          class: U(["one", { active: i.dateType === c.dictValue }]),
          onClick: (s) => i.dateTypeF(c.dictValue),
          key: c.dictValue
        }, le(c.dictLabel), 11, vx))), 128))
      ], 4),
      xe(_n, { name: "frequencyDate" }, {
        default: oe(() => [
          Y("div", px, [
            xe(o, {
              modelValue: i.dateValue,
              "onUpdate:modelValue": n[0] || (n[0] = (c) => i.dateValue = c),
              style: { width: "240px" },
              "value-format": a.opts.valueFormat,
              type: a.opts.dateType,
              placeholder: "请选择",
              editable: !1,
              clearable: !1,
              "disabled-date": i.disabledDate
            }, null, 8, ["modelValue", "value-format", "type", "disabled-date"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["label"]);
}
const Ni = /* @__PURE__ */ We(xx, [["render", hx], ["__scopeId", "data-v-5475b4d5"]]), mx = {
  name: "DatetypeChooseDateRange",
  props: {
    // 日期区间数据
    date: Array,
    // 默认类型，默认值：日。字典value
    dictValue: String,
    // 日期类型字典数据
    datetypeData: Array,
    // 清除按钮
    clearable: {
      type: Boolean,
      default: !1
    },
    disabledDate: {
      type: Function,
      default: () => {
      }
    },
    // 字典key值对应的value值，按照年月日的顺序，默认年为1日为3
    dateTypeKeyValue: {
      type: Array,
      default: ["1", "2", "3"]
    },
    // 日期区间值切换规则：0跟随传入日期；1每次切换取当月、当年；
    dateSwitchRule: {
      type: Number,
      default: 0
    },
    // 默认类型，默认值：日。字典value
    formItemLabel: {
      type: String,
      default: "日期区间"
    },
    // 日期类型 - 不显示项，根据value处理
    noType: {
      type: Array,
      default: () => []
    },
    // 中间符
    symbol: {
      type: String,
      default: "~"
    }
  },
  data() {
    return {
      LJSfc: v0,
      date_type: [],
      // 日期参数
      opts: {
        startDate: null,
        endDate: null,
        dateType: "date",
        // 日期类型，年year，月month，日date
        dateTypeTag: !0,
        // 日期控件是否显示
        valueFormat: "YYYY-MM-DD"
      }
    };
  },
  computed: {
    dateType: {
      get() {
        return this.dictValue;
      },
      set(e) {
        this.$emit("update:dictValue", e);
      }
    }
  },
  watch: {
    dateType: {
      handler(e) {
        this.dateTypeF(this.dateType);
      },
      deep: !0,
      immediate: !0
    },
    datetypeData: {
      handler(e) {
        this.datetypeData !== void 0 && this.datetypeData !== null && this.datetypeData.length !== 0 && this.init();
      },
      deep: !0,
      immediate: !0
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    // 切换日期
    dateChange() {
      if (this.opts.startDate === null || this.opts.endDate === null) {
        this.$emit("update:date", [this.opts.startDate, this.opts.endDate]);
        return;
      }
      let e = this.opts.startDate, n = this.opts.startDate;
      if (this.dateType !== "year" && (e = new Date(this.opts.startDate).getTime(), n = new Date(this.opts.endDate).getTime()), Number(e) > Number(n)) {
        const r = this.opts.startDate;
        this.opts.startDate = this.opts.endDate, this.opts.endDate = r;
      }
      this.$emit("update:date", [this.opts.startDate, this.opts.endDate]);
    },
    init() {
      this.initData();
    },
    // 初始化数据
    async initData() {
      const e = this.datetypeData;
      e && (this.noType.forEach((n) => {
        const r = e.length;
        for (let t = 0; t < r; t++) {
          const a = e[t];
          if (n === a.dictValue) {
            e.splice(t, 1);
            break;
          }
        }
      }), this.date_type = e), !re.fieldCheck(this.date) && this.date.length === 2 && (this.opts.startDate = this.date[0], this.opts.endDate = this.date[1]), this.dateTypeF(this.dateType);
    },
    // 日期类型切换
    dateTypeF(e) {
      this.opts.dateTypeTag = !1, this.dateType = e;
      let n = [], r = null;
      switch (e) {
        case this.dateTypeKeyValue[3]:
          this.opts.dateType = "datetime", this.opts.valueFormat = "YYYY-MM-DD HH:mm:ss";
          break;
        case this.dateTypeKeyValue[2]:
          this.opts.dateType = "date", this.opts.valueFormat = "YYYY-MM-DD";
          break;
        case this.dateTypeKeyValue[1]:
          this.opts.dateType = "month", this.opts.valueFormat = "YYYY-MM";
          break;
        case this.dateTypeKeyValue[0]:
          this.opts.dateType = "year", this.opts.valueFormat = "YYYY";
          break;
      }
      if (!re.fieldCheck(this.date) && this.date.length === 2) {
        switch (this.dateSwitchRule === 0 ? r = [this.date[0], this.date[1]] : this.dateSwitchRule === 1 && (r = ue.initSearchDateQj(this.opts.dateType)), e) {
          case this.dateTypeKeyValue[3]:
            this.opts.startDate = ue.formatTime(r[0], "{y}-{m}-{d} {h}:{i}:{s}"), this.opts.endDate = ue.formatTime(r[1], "{y}-{m}-{d} {h}:{i}:{s}");
            break;
          case this.dateTypeKeyValue[2]:
            this.opts.startDate = ue.formatTime(r[0], "{y}-{m}-{d}"), this.opts.endDate = ue.formatTime(r[1], "{y}-{m}-{d}");
            break;
          case this.dateTypeKeyValue[1]:
            this.opts.startDate = ue.formatTime(r[0], "{y}-{m}"), this.opts.endDate = ue.formatTime(r[1], "{y}-{m}");
            break;
          case this.dateTypeKeyValue[0]:
            this.opts.startDate = r[0].toString(), this.opts.endDate = r[1].toString();
            break;
        }
        this.dateValue = n;
      }
      this.$emit("update:date", [this.opts.startDate, this.opts.endDate]), setTimeout(() => {
        this.opts.dateTypeTag = !0;
      }, 0);
    }
  }
};
const gx = mx, bx = ["onClick"], yx = {
  key: 0,
  class: "frequencyDate"
}, _x = { class: "zhi" };
function Cx(e, n, r, t, a, i) {
  const o = Fe("el-date-picker"), l = Fe("el-form-item");
  return L(), ne(l, {
    label: e.formItemLabel,
    prop: "date"
  }, {
    default: oe(() => [
      Y("div", {
        class: "frequency",
        style: ve({
          "--dateTypeNum": e.date_type.length
        })
      }, [
        (L(!0), V(Le, null, x0(e.date_type, (c) => (L(), V("div", {
          class: U(["one", { active: e.dateType === c.dictValue }]),
          onClick: (s) => e.dateTypeF(c.dictValue),
          key: c.dictValue
        }, le(c.dictLabel), 11, bx))), 128))
      ], 4),
      xe(_n, { name: "frequencyDate" }, {
        default: oe(() => [
          e.opts.dateTypeTag ? (L(), V("div", yx, [
            xe(o, {
              modelValue: e.opts.startDate,
              "onUpdate:modelValue": n[0] || (n[0] = (c) => e.opts.startDate = c),
              style: ve({
                width: `${e.opts.dateType === "year" ? 100 : e.opts.dateType === "month" ? 120 : e.opts.dateType === "date" ? 140 : (e.opts.dateType === "datetime", 200)}px !important`
              }),
              "value-format": e.opts.valueFormat,
              type: e.opts.dateType,
              placeholder: "请选择",
              editable: !1,
              clearable: e.clearable,
              "disabled-date": e.disabledDate,
              onChange: e.dateChange
            }, null, 8, ["modelValue", "style", "value-format", "type", "clearable", "disabled-date", "onChange"]),
            Y("span", _x, le(e.symbol), 1),
            xe(o, {
              modelValue: e.opts.endDate,
              "onUpdate:modelValue": n[1] || (n[1] = (c) => e.opts.endDate = c),
              style: ve({
                width: `${e.opts.dateType === "year" ? 100 : e.opts.dateType === "month" ? 120 : e.opts.dateType === "date" ? 140 : (e.opts.dateType === "datetime", 200)}px !important`
              }),
              "value-format": e.opts.valueFormat,
              type: e.opts.dateType,
              placeholder: "请选择",
              editable: !1,
              clearable: e.clearable,
              "disabled-date": e.disabledDate,
              onChange: e.dateChange
            }, null, 8, ["modelValue", "style", "value-format", "type", "clearable", "disabled-date", "onChange"])
          ])) : Q("", !0)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["label"]);
}
const Vi = /* @__PURE__ */ We(gx, [["render", Cx], ["__scopeId", "data-v-1e7c37ee"]]), Ex = {
  name: "DateRange",
  props: {
    // 日期区间数据
    modelValue: Array,
    // 日期类型
    dateType: {
      type: String,
      default: "date"
    },
    // 默认类型，默认值：日。字典value
    formItemLabel: {
      type: String,
      default: "日期"
    },
    // 清除按钮
    clearable: {
      type: Boolean,
      default: !0
    },
    disabledDate_start: {
      type: Function,
      default: () => {
      }
    },
    disabledDate_end: {
      type: Function,
      default: () => {
      }
    },
    // 开始日期事件。同 el-date-picker 事件 change
    change_start: {
      type: Function,
      default: (e) => {
      }
    },
    // 结束日期事件。同 el-date-picker 事件 change
    change_end: {
      type: Function,
      default: (e) => {
      }
    },
    // 开始日期事件。同 el-date-picker 事件 visible-change
    visibleChange_start: {
      type: Function,
      default: () => {
      }
    },
    // 结束日期事件。同 el-date-picker 事件 visible-change
    visibleChange_end: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {
      // 日期参数
      opts: {
        startDate: null,
        endDate: null,
        valueFormat: "YYYY-MM-DD"
      }
    };
  },
  watch: {
    modelValue: {
      handler(e) {
        !re.fieldCheck(this.modelValue) && this.modelValue.length >= 1 ? (this.opts.startDate = this.modelValue[0], this.opts.endDate = this.modelValue[1]) : (this.opts.startDate = null, this.opts.endDate = null);
      },
      deep: !0,
      immediate: !0
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    // 切换日期
    dateChange() {
      if (this.opts.startDate === null || this.opts.endDate === null) {
        this.$emit("update:modelValue", [this.opts.startDate, this.opts.endDate]);
        return;
      }
      let e = this.opts.startDate, n = this.opts.startDate;
      if (this.dateType !== "year" && (e = new Date(this.opts.startDate).getTime(), n = new Date(this.opts.endDate).getTime()), Number(e) > Number(n)) {
        const r = this.opts.startDate;
        this.opts.startDate = this.opts.endDate, this.opts.endDate = r;
      }
      this.$emit("update:modelValue", [this.opts.startDate, this.opts.endDate]);
    },
    init() {
      this.dateTypeF();
    },
    // 日期类型切换
    dateTypeF() {
      switch (this.dateType) {
        case "datetime":
          this.opts.valueFormat = "YYYY-MM-DD HH:mm:ss";
          break;
        case "date":
          this.opts.valueFormat = "YYYY-MM-DD";
          break;
        case "month":
          this.opts.valueFormat = "YYYY-MM";
          break;
        case "year":
          this.opts.valueFormat = "YYYY";
          break;
      }
    },
    // let trendsDisabledDate = 0; // 根据点击的第一个日期，控制日期区间是否可选
    pickerOptionsDynamic(e = 30, n) {
      n ? trendsDisabledDate = D.formatTime(n[0], "{y}-{m}-{d}") : trendsDisabledDate = 0;
      const r = 3600 * 1e3 * 24 * e;
      return (t) => {
        if (trendsDisabledDate === 0)
          return t.getTime() > Date.now() || t.getTime() < trendsDisabledDate;
        {
          const a = new Date(trendsDisabledDate).getTime() + r - 864e5, i = new Date(trendsDisabledDate).getTime() - r;
          return a >= Date.now() ? t.getTime() > Date.now() || t.getTime() < i : t.getTime() > a || t.getTime() < i;
        }
      };
    }
  }
};
const Bx = Ex, Dx = (e) => (Cn("data-v-51214b0d"), e = e(), En(), e), Ax = /* @__PURE__ */ Dx(() => /* @__PURE__ */ Y("span", { class: "and" }, "~", -1));
function wx(e, n, r, t, a, i) {
  const o = Fe("el-date-picker"), l = Fe("el-form-item");
  return L(), ne(l, {
    label: e.formItemLabel,
    prop: "date"
  }, {
    default: oe(() => [
      xe(o, {
        modelValue: e.opts.startDate,
        "onUpdate:modelValue": n[0] || (n[0] = (c) => e.opts.startDate = c),
        style: ve({
          width: `${e.dateType === "year" ? 100 : e.dateType === "month" ? 120 : e.dateType === "date" ? 140 : (e.dateType === "datetime", 200)}px !important`
        }),
        "value-format": e.opts.valueFormat,
        type: e.dateType,
        placeholder: "开始日期",
        editable: !1,
        clearable: e.clearable,
        "disabled-date": e.disabledDate_start,
        onChange: n[1] || (n[1] = (c) => (e.dateChange(), e.change_start(c))),
        onVisibleChange: n[2] || (n[2] = (c) => e.visibleChange_start(c))
      }, null, 8, ["modelValue", "style", "value-format", "type", "clearable", "disabled-date"]),
      Ax,
      xe(o, {
        modelValue: e.opts.endDate,
        "onUpdate:modelValue": n[3] || (n[3] = (c) => e.opts.endDate = c),
        style: ve({
          width: `${e.dateType === "year" ? 100 : e.dateType === "month" ? 120 : e.dateType === "date" ? 140 : (e.dateType === "datetime", 200)}px !important`
        }),
        "value-format": e.opts.valueFormat,
        type: e.dateType,
        placeholder: "结束日期",
        editable: !1,
        clearable: e.clearable,
        "disabled-date": e.disabledDate_end,
        onChange: n[4] || (n[4] = (c) => (e.dateChange(), e.change_end(c))),
        onVisibleChange: n[5] || (n[5] = (c) => e.visibleChange_end(c))
      }, null, 8, ["modelValue", "style", "value-format", "type", "clearable", "disabled-date"])
    ]),
    _: 1
  }, 8, ["label"]);
}
const qi = /* @__PURE__ */ We(Bx, [["render", wx], ["__scopeId", "data-v-51214b0d"]]), bt = 3600 * 1e3 * 24;
function Fx(e, n = 30, r) {
  r ? e.trendsDisabledDate = ue.formatTime(r, "{y}-{m}-{d}") : e.trendsDisabledDate = 0;
  const t = 3600 * 1e3 * 24 * n;
  return (a) => {
    if (e.trendsDisabledDate === 0)
      return a.getTime() > Date.now() || a.getTime() < e.trendsDisabledDate;
    {
      const i = new Date(e.trendsDisabledDate).getTime() + t - 864e5, o = new Date(e.trendsDisabledDate).getTime() - t;
      return i >= Date.now() ? a.getTime() > Date.now() || a.getTime() < o : a.getTime() > i || a.getTime() < o;
    }
  };
}
function Sx(e, n, r, t) {
  if (t)
    n.tempDate = e.date;
  else if (!re.fieldCheck(e.date) && e.date.length > 0 && !re.fieldCheck(e.date[0]) && !re.fieldCheck(e.date[1])) {
    let a = new Date(e.date[0]).getTime(), i = new Date(e.date[1]).getTime();
    Math.abs(a - i) / bt >= r && (n.tempDate[1] === e.date[1] ? e.date[1] = ue.formatTime(a + bt * (r - 1), "{y}-{m}-{d}") : e.date[0] = ue.formatTime(i - bt * (r - 1), "{y}-{m}-{d}"));
  }
}
function kx(e, n, r, t) {
  if (t)
    n.tempDate = e.date;
  else if (!re.fieldCheck(e.date) && e.date.length > 0 && !re.fieldCheck(e.date[0]) && !re.fieldCheck(e.date[1])) {
    let a = new Date(e.date[0]).getTime(), i = new Date(e.date[1]).getTime();
    Math.abs(a - i) / bt >= r && (n.tempDate[0] === e.date[0] ? e.date[0] = ue.formatTime(i - bt * (r - 1), "{y}-{m}-{d}") : e.date[1] = ue.formatTime(a + bt * (r - 1), "{y}-{m}-{d}"));
  }
}
const Tx = {
  pickerOptionsDynamic: Fx,
  visibleChange_start: Sx,
  visibleChange_end: kx
};
const Ix = {
  name: "DictTag",
  props: {
    options: {
      type: Array,
      default: null
    },
    value: [Number, String, Array]
  },
  computed: {
    values() {
      return this.value !== null && typeof this.value < "u" ? Array.isArray(this.value) ? this.value : [String(this.value)] : [];
    }
  }
}, Px = ["index"];
function Mx(e, n, r, t, a, i) {
  const o = Fe("el-tag");
  return L(), V("div", null, [
    (L(!0), V(Le, null, x0(r.options, (l, c) => (L(), V(Le, {
      key: l.dictValue
    }, [
      i.values.includes(l.dictValue) ? (L(), V(Le, { key: 0 }, [
        l.listClass == "default" || l.listClass == "" ? (L(), V("span", {
          key: 0,
          index: c,
          class: U(l.cssClass)
        }, le(l.dictLabel), 11, Px)) : (L(), ne(o, {
          key: 1,
          "disable-transitions": !0,
          index: c,
          type: l.listClass === void 0 || l.listClass === null || l.listClass === "" ? "info" : l.listClass,
          class: U(l.cssClass)
        }, {
          default: oe(() => [
            Jt(le(l.dictLabel), 1)
          ]),
          _: 2
        }, 1032, ["index", "type", "class"]))
      ], 64)) : Q("", !0)
    ], 64))), 128))
  ]);
}
const Wi = /* @__PURE__ */ We(Ix, [["render", Mx], ["__scopeId", "data-v-339f3229"]]);
var Rx = function(e, n) {
  var r = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: r,
      w: r.offsetWidth,
      h: r.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var t = this.pJS;
  n && Object.deepExtend(t, n), t.tmp.obj = {
    size_value: t.particles.size.value,
    size_anim_speed: t.particles.size.anim.speed,
    move_speed: t.particles.move.speed,
    line_linked_distance: t.particles.line_linked.distance,
    line_linked_width: t.particles.line_linked.width,
    mode_grab_distance: t.interactivity.modes.grab.distance,
    mode_bubble_distance: t.interactivity.modes.bubble.distance,
    mode_bubble_size: t.interactivity.modes.bubble.size,
    mode_repulse_distance: t.interactivity.modes.repulse.distance
  }, t.fn.retinaInit = function() {
    t.retina_detect && window.devicePixelRatio > 1 ? (t.canvas.pxratio = window.devicePixelRatio, t.tmp.retina = !0) : (t.canvas.pxratio = 1, t.tmp.retina = !1), t.canvas.w = t.canvas.el.offsetWidth * t.canvas.pxratio, t.canvas.h = t.canvas.el.offsetHeight * t.canvas.pxratio, t.particles.size.value = t.tmp.obj.size_value * t.canvas.pxratio, t.particles.size.anim.speed = t.tmp.obj.size_anim_speed * t.canvas.pxratio, t.particles.move.speed = t.tmp.obj.move_speed * t.canvas.pxratio, t.particles.line_linked.distance = t.tmp.obj.line_linked_distance * t.canvas.pxratio, t.interactivity.modes.grab.distance = t.tmp.obj.mode_grab_distance * t.canvas.pxratio, t.interactivity.modes.bubble.distance = t.tmp.obj.mode_bubble_distance * t.canvas.pxratio, t.particles.line_linked.width = t.tmp.obj.line_linked_width * t.canvas.pxratio, t.interactivity.modes.bubble.size = t.tmp.obj.mode_bubble_size * t.canvas.pxratio, t.interactivity.modes.repulse.distance = t.tmp.obj.mode_repulse_distance * t.canvas.pxratio;
  }, t.fn.canvasInit = function() {
    t.canvas.ctx = t.canvas.el.getContext("2d");
  }, t.fn.canvasSize = function() {
    t.canvas.el.width = t.canvas.w, t.canvas.el.height = t.canvas.h, t && t.interactivity.events.resize && window.addEventListener("resize", function() {
      t.canvas.w = t.canvas.el.offsetWidth, t.canvas.h = t.canvas.el.offsetHeight, t.tmp.retina && (t.canvas.w *= t.canvas.pxratio, t.canvas.h *= t.canvas.pxratio), t.canvas.el.width = t.canvas.w, t.canvas.el.height = t.canvas.h, t.particles.move.enable || (t.fn.particlesEmpty(), t.fn.particlesCreate(), t.fn.particlesDraw(), t.fn.vendors.densityAutoParticles()), t.fn.vendors.densityAutoParticles();
    });
  }, t.fn.canvasPaint = function() {
    t.canvas.ctx.fillRect(0, 0, t.canvas.w, t.canvas.h);
  }, t.fn.canvasClear = function() {
    t.canvas.ctx.clearRect(0, 0, t.canvas.w, t.canvas.h);
  }, t.fn.particle = function(a, i, o) {
    if (this.radius = (t.particles.size.random ? Math.random() : 1) * t.particles.size.value, t.particles.size.anim.enable && (this.size_status = !1, this.vs = t.particles.size.anim.speed / 100, t.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = o ? o.x : Math.random() * t.canvas.w, this.y = o ? o.y : Math.random() * t.canvas.h, this.x > t.canvas.w - this.radius * 2 ? this.x = this.x - this.radius : this.x < this.radius * 2 && (this.x = this.x + this.radius), this.y > t.canvas.h - this.radius * 2 ? this.y = this.y - this.radius : this.y < this.radius * 2 && (this.y = this.y + this.radius), t.particles.move.bounce && t.fn.vendors.checkOverlap(this, o), this.color = {}, typeof a.value == "object")
      if (a.value instanceof Array) {
        var l = a.value[Math.floor(Math.random() * t.particles.color.value.length)];
        this.color.rgb = dn(l);
      } else
        a.value.r != null && a.value.g != null && a.value.b != null && (this.color.rgb = {
          r: a.value.r,
          g: a.value.g,
          b: a.value.b
        }), a.value.h != null && a.value.s != null && a.value.l != null && (this.color.hsl = {
          h: a.value.h,
          s: a.value.s,
          l: a.value.l
        });
    else
      a.value == "random" ? this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      } : typeof a.value == "string" && (this.color = a, this.color.rgb = dn(this.color.value));
    this.opacity = (t.particles.opacity.random ? Math.random() : 1) * t.particles.opacity.value, t.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = t.particles.opacity.anim.speed / 100, t.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var c = {};
    switch (t.particles.move.direction) {
      case "top":
        c = { x: 0, y: -1 };
        break;
      case "top-right":
        c = { x: 0.5, y: -0.5 };
        break;
      case "right":
        c = { x: 1, y: -0 };
        break;
      case "bottom-right":
        c = { x: 0.5, y: 0.5 };
        break;
      case "bottom":
        c = { x: 0, y: 1 };
        break;
      case "bottom-left":
        c = { x: -0.5, y: 1 };
        break;
      case "left":
        c = { x: -1, y: 0 };
        break;
      case "top-left":
        c = { x: -0.5, y: -0.5 };
        break;
      default:
        c = { x: 0, y: 0 };
        break;
    }
    t.particles.move.straight ? (this.vx = c.x, this.vy = c.y, t.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = c.x + Math.random() - 0.5, this.vy = c.y + Math.random() - 0.5), this.vx_i = this.vx, this.vy_i = this.vy;
    var s = t.particles.shape.type;
    if (typeof s == "object") {
      if (s instanceof Array) {
        var u = s[Math.floor(Math.random() * s.length)];
        this.shape = u;
      }
    } else
      this.shape = s;
    if (this.shape == "image") {
      var m = t.particles.shape;
      this.img = {
        src: m.image.src,
        ratio: m.image.width / m.image.height
      }, this.img.ratio || (this.img.ratio = 1), t.tmp.img_type == "svg" && t.tmp.source_svg != null && (t.fn.vendors.createSvgImg(this), t.tmp.pushing && (this.img.loaded = !1));
    }
  }, t.fn.particle.prototype.draw = function() {
    var a = this;
    if (a.radius_bubble != null)
      var i = a.radius_bubble;
    else
      var i = a.radius;
    if (a.opacity_bubble != null)
      var o = a.opacity_bubble;
    else
      var o = a.opacity;
    if (a.color.rgb)
      var l = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + o + ")";
    else
      var l = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + o + ")";
    switch (t.canvas.ctx.fillStyle = l, t.canvas.ctx.beginPath(), a.shape) {
      case "circle":
        t.canvas.ctx.arc(a.x, a.y, i, 0, Math.PI * 2, !1);
        break;
      case "edge":
        t.canvas.ctx.rect(a.x - i, a.y - i, i * 2, i * 2);
        break;
      case "triangle":
        t.fn.vendors.drawShape(t.canvas.ctx, a.x - i, a.y + i / 1.66, i * 2, 3, 2);
        break;
      case "polygon":
        t.fn.vendors.drawShape(
          t.canvas.ctx,
          a.x - i / (t.particles.shape.polygon.nb_sides / 3.5),
          // startX
          a.y - i / (2.66 / 3.5),
          // startY
          i * 2.66 / (t.particles.shape.polygon.nb_sides / 3),
          // sideLength
          t.particles.shape.polygon.nb_sides,
          // sideCountNumerator
          1
          // sideCountDenominator
        );
        break;
      case "star":
        t.fn.vendors.drawShape(
          t.canvas.ctx,
          a.x - i * 2 / (t.particles.shape.polygon.nb_sides / 4),
          // startX
          a.y - i / (2 * 2.66 / 3.5),
          // startY
          i * 2 * 2.66 / (t.particles.shape.polygon.nb_sides / 3),
          // sideLength
          t.particles.shape.polygon.nb_sides,
          // sideCountNumerator
          2
          // sideCountDenominator
        );
        break;
      case "image":
        let s = function() {
          t.canvas.ctx.drawImage(
            c,
            a.x - i,
            a.y - i,
            i * 2,
            i * 2 / a.img.ratio
          );
        };
        if (t.tmp.img_type == "svg")
          var c = a.img.obj;
        else
          var c = t.tmp.img_obj;
        c && s();
        break;
    }
    t.canvas.ctx.closePath(), t.particles.shape.stroke.width > 0 && (t.canvas.ctx.strokeStyle = t.particles.shape.stroke.color, t.canvas.ctx.lineWidth = t.particles.shape.stroke.width, t.canvas.ctx.stroke()), t.canvas.ctx.fill();
  }, t.fn.particlesCreate = function() {
    for (var a = 0; a < t.particles.number.value; a++)
      t.particles.array.push(new t.fn.particle(t.particles.color, t.particles.opacity.value));
  }, t.fn.particlesUpdate = function() {
    for (var a = 0; a < t.particles.array.length; a++) {
      var i = t.particles.array[a];
      if (t.particles.move.enable) {
        var o = t.particles.move.speed / 2;
        i.x += i.vx * o, i.y += i.vy * o;
      }
      if (t.particles.opacity.anim.enable && (i.opacity_status == !0 ? (i.opacity >= t.particles.opacity.value && (i.opacity_status = !1), i.opacity += i.vo) : (i.opacity <= t.particles.opacity.anim.opacity_min && (i.opacity_status = !0), i.opacity -= i.vo), i.opacity < 0 && (i.opacity = 0)), t.particles.size.anim.enable && (i.size_status == !0 ? (i.radius >= t.particles.size.value && (i.size_status = !1), i.radius += i.vs) : (i.radius <= t.particles.size.anim.size_min && (i.size_status = !0), i.radius -= i.vs), i.radius < 0 && (i.radius = 0)), t.particles.move.out_mode == "bounce")
        var l = {
          x_left: i.radius,
          x_right: t.canvas.w,
          y_top: i.radius,
          y_bottom: t.canvas.h
        };
      else
        var l = {
          x_left: -i.radius,
          x_right: t.canvas.w + i.radius,
          y_top: -i.radius,
          y_bottom: t.canvas.h + i.radius
        };
      switch (i.x - i.radius > t.canvas.w ? (i.x = l.x_left, i.y = Math.random() * t.canvas.h) : i.x + i.radius < 0 && (i.x = l.x_right, i.y = Math.random() * t.canvas.h), i.y - i.radius > t.canvas.h ? (i.y = l.y_top, i.x = Math.random() * t.canvas.w) : i.y + i.radius < 0 && (i.y = l.y_bottom, i.x = Math.random() * t.canvas.w), t.particles.move.out_mode) {
        case "bounce":
          (i.x + i.radius > t.canvas.w || i.x - i.radius < 0) && (i.vx = -i.vx), (i.y + i.radius > t.canvas.h || i.y - i.radius < 0) && (i.vy = -i.vy);
          break;
      }
      if (ze("grab", t.interactivity.events.onhover.mode) && t.fn.modes.grabParticle(i), (ze("bubble", t.interactivity.events.onhover.mode) || ze("bubble", t.interactivity.events.onclick.mode)) && t.fn.modes.bubbleParticle(i), (ze("repulse", t.interactivity.events.onhover.mode) || ze("repulse", t.interactivity.events.onclick.mode)) && t.fn.modes.repulseParticle(i), t.particles.line_linked.enable || t.particles.move.attract.enable)
        for (var c = a + 1; c < t.particles.array.length; c++) {
          var s = t.particles.array[c];
          t.particles.line_linked.enable && t.fn.interact.linkParticles(i, s), t.particles.move.attract.enable && t.fn.interact.attractParticles(i, s), t.particles.move.bounce && t.fn.interact.bounceParticles(i, s);
        }
    }
  }, t.fn.particlesDraw = function() {
    t.canvas.ctx.clearRect(0, 0, t.canvas.w, t.canvas.h), t.fn.particlesUpdate();
    for (var a = 0; a < t.particles.array.length; a++) {
      var i = t.particles.array[a];
      i.draw();
    }
  }, t.fn.particlesEmpty = function() {
    t.particles.array = [];
  }, t.fn.particlesRefresh = function() {
    cancelRequestAnimFrame(t.fn.checkAnimFrame), cancelRequestAnimFrame(t.fn.drawAnimFrame), t.tmp.source_svg = void 0, t.tmp.img_obj = void 0, t.tmp.count_svg = 0, t.fn.particlesEmpty(), t.fn.canvasClear(), t.fn.vendors.start();
  }, t.fn.interact.linkParticles = function(a, i) {
    var o = a.x - i.x, l = a.y - i.y, c = Math.sqrt(o * o + l * l);
    if (c <= t.particles.line_linked.distance) {
      var s = t.particles.line_linked.opacity - c / (1 / t.particles.line_linked.opacity) / t.particles.line_linked.distance;
      if (s > 0) {
        var u = t.particles.line_linked.color_rgb_line;
        t.canvas.ctx.strokeStyle = "rgba(" + u.r + "," + u.g + "," + u.b + "," + s + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(a.x, a.y), t.canvas.ctx.lineTo(i.x, i.y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
      }
    }
  }, t.fn.interact.attractParticles = function(a, i) {
    var o = a.x - i.x, l = a.y - i.y, c = Math.sqrt(o * o + l * l);
    if (c <= t.particles.line_linked.distance) {
      var s = o / (t.particles.move.attract.rotateX * 1e3), u = l / (t.particles.move.attract.rotateY * 1e3);
      a.vx -= s, a.vy -= u, i.vx += s, i.vy += u;
    }
  }, t.fn.interact.bounceParticles = function(a, i) {
    var o = a.x - i.x, l = a.y - i.y, c = Math.sqrt(o * o + l * l), s = a.radius + i.radius;
    c <= s && (a.vx = -a.vx, a.vy = -a.vy, i.vx = -i.vx, i.vy = -i.vy);
  }, t.fn.modes.pushParticles = function(a, i) {
    t.tmp.pushing = !0;
    for (var o = 0; o < a; o++)
      t.particles.array.push(
        new t.fn.particle(
          t.particles.color,
          t.particles.opacity.value,
          {
            x: i ? i.pos_x : Math.random() * t.canvas.w,
            y: i ? i.pos_y : Math.random() * t.canvas.h
          }
        )
      ), o == a - 1 && (t.particles.move.enable || t.fn.particlesDraw(), t.tmp.pushing = !1);
  }, t.fn.modes.removeParticles = function(a) {
    t.particles.array.splice(0, a), t.particles.move.enable || t.fn.particlesDraw();
  }, t.fn.modes.bubbleParticle = function(a) {
    if (t.interactivity.events.onhover.enable && ze("bubble", t.interactivity.events.onhover.mode)) {
      let h = function() {
        a.opacity_bubble = a.opacity, a.radius_bubble = a.radius;
      };
      var i = a.x - t.interactivity.mouse.pos_x, o = a.y - t.interactivity.mouse.pos_y, l = Math.sqrt(i * i + o * o), c = 1 - l / t.interactivity.modes.bubble.distance;
      if (l <= t.interactivity.modes.bubble.distance) {
        if (c >= 0 && t.interactivity.status == "mousemove") {
          if (t.interactivity.modes.bubble.size != t.particles.size.value)
            if (t.interactivity.modes.bubble.size > t.particles.size.value) {
              var s = a.radius + t.interactivity.modes.bubble.size * c;
              s >= 0 && (a.radius_bubble = s);
            } else {
              var u = a.radius - t.interactivity.modes.bubble.size, s = a.radius - u * c;
              s > 0 ? a.radius_bubble = s : a.radius_bubble = 0;
            }
          if (t.interactivity.modes.bubble.opacity != t.particles.opacity.value)
            if (t.interactivity.modes.bubble.opacity > t.particles.opacity.value) {
              var m = t.interactivity.modes.bubble.opacity * c;
              m > a.opacity && m <= t.interactivity.modes.bubble.opacity && (a.opacity_bubble = m);
            } else {
              var m = a.opacity - (t.particles.opacity.value - t.interactivity.modes.bubble.opacity) * c;
              m < a.opacity && m >= t.interactivity.modes.bubble.opacity && (a.opacity_bubble = m);
            }
        }
      } else
        h();
      t.interactivity.status == "mouseleave" && h();
    } else if (t.interactivity.events.onclick.enable && ze("bubble", t.interactivity.events.onclick.mode)) {
      let h = function(d, x, v, y, p) {
        if (d != x)
          if (t.tmp.bubble_duration_end) {
            if (v != null) {
              var E = y - f * (y - d) / t.interactivity.modes.bubble.duration, C = d - E;
              b = d + C, p == "size" && (a.radius_bubble = b), p == "opacity" && (a.opacity_bubble = b);
            }
          } else if (l <= t.interactivity.modes.bubble.distance) {
            if (v != null)
              var g = v;
            else
              var g = y;
            if (g != d) {
              var b = y - f * (y - d) / t.interactivity.modes.bubble.duration;
              p == "size" && (a.radius_bubble = b), p == "opacity" && (a.opacity_bubble = b);
            }
          } else
            p == "size" && (a.radius_bubble = void 0), p == "opacity" && (a.opacity_bubble = void 0);
      };
      if (t.tmp.bubble_clicking) {
        var i = a.x - t.interactivity.mouse.click_pos_x, o = a.y - t.interactivity.mouse.click_pos_y, l = Math.sqrt(i * i + o * o), f = ((/* @__PURE__ */ new Date()).getTime() - t.interactivity.mouse.click_time) / 1e3;
        f > t.interactivity.modes.bubble.duration && (t.tmp.bubble_duration_end = !0), f > t.interactivity.modes.bubble.duration * 2 && (t.tmp.bubble_clicking = !1, t.tmp.bubble_duration_end = !1);
      }
      t.tmp.bubble_clicking && (h(t.interactivity.modes.bubble.size, t.particles.size.value, a.radius_bubble, a.radius, "size"), h(t.interactivity.modes.bubble.opacity, t.particles.opacity.value, a.opacity_bubble, a.opacity, "opacity"));
    }
  }, t.fn.modes.repulseParticle = function(a) {
    if (t.interactivity.events.onhover.enable && ze("repulse", t.interactivity.events.onhover.mode) && t.interactivity.status == "mousemove") {
      var i = a.x - t.interactivity.mouse.pos_x, o = a.y - t.interactivity.mouse.pos_y, l = Math.sqrt(i * i + o * o), c = { x: i / l, y: o / l }, s = t.interactivity.modes.repulse.distance, u = 100, m = zx(1 / s * (-1 * Math.pow(l / s, 2) + 1) * s * u, 0, 50), f = {
        x: a.x + c.x * m,
        y: a.y + c.y * m
      };
      t.particles.move.out_mode == "bounce" ? (f.x - a.radius > 0 && f.x + a.radius < t.canvas.w && (a.x = f.x), f.y - a.radius > 0 && f.y + a.radius < t.canvas.h && (a.y = f.y)) : (a.x = f.x, a.y = f.y);
    } else if (t.interactivity.events.onclick.enable && ze("repulse", t.interactivity.events.onclick.mode))
      if (t.tmp.repulse_finish || (t.tmp.repulse_count++, t.tmp.repulse_count == t.particles.array.length && (t.tmp.repulse_finish = !0)), t.tmp.repulse_clicking) {
        let p = function() {
          var g = Math.atan2(d, h);
          if (a.vx = v * Math.cos(g), a.vy = v * Math.sin(g), t.particles.move.out_mode == "bounce") {
            var b = {
              x: a.x + a.vx,
              y: a.y + a.vy
            };
            (b.x + a.radius > t.canvas.w || b.x - a.radius < 0) && (a.vx = -a.vx), (b.y + a.radius > t.canvas.h || b.y - a.radius < 0) && (a.vy = -a.vy);
          }
        };
        var s = Math.pow(t.interactivity.modes.repulse.distance / 6, 3), h = t.interactivity.mouse.click_pos_x - a.x, d = t.interactivity.mouse.click_pos_y - a.y, x = h * h + d * d, v = -s / x * 1;
        x <= s && p();
      } else
        t.tmp.repulse_clicking == !1 && (a.vx = a.vx_i, a.vy = a.vy_i);
  }, t.fn.modes.grabParticle = function(a) {
    if (t.interactivity.events.onhover.enable && t.interactivity.status == "mousemove") {
      var i = a.x - t.interactivity.mouse.pos_x, o = a.y - t.interactivity.mouse.pos_y, l = Math.sqrt(i * i + o * o);
      if (l <= t.interactivity.modes.grab.distance) {
        var c = t.interactivity.modes.grab.line_linked.opacity - l / (1 / t.interactivity.modes.grab.line_linked.opacity) / t.interactivity.modes.grab.distance;
        if (c > 0) {
          var s = t.particles.line_linked.color_rgb_line;
          t.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + c + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(a.x, a.y), t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x, t.interactivity.mouse.pos_y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
        }
      }
    }
  }, t.fn.vendors.eventsListeners = function() {
    t.interactivity.detect_on == "window" ? t.interactivity.el = window : t.interactivity.el = t.canvas.el, (t.interactivity.events.onhover.enable || t.interactivity.events.onclick.enable) && (t.interactivity.el.addEventListener("mousemove", function(a) {
      if (t.interactivity.el == window)
        var i = a.clientX, o = a.clientY;
      else
        var i = a.offsetX || a.clientX, o = a.offsetY || a.clientY;
      t.interactivity.mouse.pos_x = i, t.interactivity.mouse.pos_y = o, t.tmp.retina && (t.interactivity.mouse.pos_x *= t.canvas.pxratio, t.interactivity.mouse.pos_y *= t.canvas.pxratio), t.interactivity.status = "mousemove";
    }), t.interactivity.el.addEventListener("mouseleave", function(a) {
      t.interactivity.mouse.pos_x = null, t.interactivity.mouse.pos_y = null, t.interactivity.status = "mouseleave";
    })), t.interactivity.events.onclick.enable && t.interactivity.el.addEventListener("click", function() {
      if (t.interactivity.mouse.click_pos_x = t.interactivity.mouse.pos_x, t.interactivity.mouse.click_pos_y = t.interactivity.mouse.pos_y, t.interactivity.mouse.click_time = (/* @__PURE__ */ new Date()).getTime(), t.interactivity.events.onclick.enable)
        switch (t.interactivity.events.onclick.mode) {
          case "push":
            t.particles.move.enable || t.interactivity.modes.push.particles_nb == 1 ? t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb, t.interactivity.mouse) : t.interactivity.modes.push.particles_nb > 1 && t.fn.modes.pushParticles(t.interactivity.modes.push.particles_nb);
            break;
          case "remove":
            t.fn.modes.removeParticles(t.interactivity.modes.remove.particles_nb);
            break;
          case "bubble":
            t.tmp.bubble_clicking = !0;
            break;
          case "repulse":
            t.tmp.repulse_clicking = !0, t.tmp.repulse_count = 0, t.tmp.repulse_finish = !1, setTimeout(function() {
              t.tmp.repulse_clicking = !1;
            }, t.interactivity.modes.repulse.duration * 1e3);
            break;
        }
    });
  }, t.fn.vendors.densityAutoParticles = function() {
    if (t.particles.number.density.enable) {
      var a = t.canvas.el.width * t.canvas.el.height / 1e3;
      t.tmp.retina && (a = a / (t.canvas.pxratio * 2));
      var i = a * t.particles.number.value / t.particles.number.density.value_area, o = t.particles.array.length - i;
      o < 0 ? t.fn.modes.pushParticles(Math.abs(o)) : t.fn.modes.removeParticles(o);
    }
  }, t.fn.vendors.checkOverlap = function(a, i) {
    for (var o = 0; o < t.particles.array.length; o++) {
      var l = t.particles.array[o], c = a.x - l.x, s = a.y - l.y, u = Math.sqrt(c * c + s * s);
      u <= a.radius + l.radius && (a.x = i ? i.x : Math.random() * t.canvas.w, a.y = i ? i.y : Math.random() * t.canvas.h, t.fn.vendors.checkOverlap(a));
    }
  }, t.fn.vendors.createSvgImg = function(a) {
    var i = t.tmp.source_svg, o = /#([0-9A-F]{3,6})/gi, l = i.replace(o, function(f, h, d, x) {
      if (a.color.rgb)
        var v = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + a.opacity + ")";
      else
        var v = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + a.opacity + ")";
      return v;
    }), c = new Blob([l], { type: "image/svg+xml;charset=utf-8" }), s = window.URL || window.webkitURL || window, u = s.createObjectURL(c), m = new Image();
    m.addEventListener("load", function() {
      a.img.obj = m, a.img.loaded = !0, s.revokeObjectURL(u), t.tmp.count_svg++;
    }), m.src = u;
  }, t.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(t.fn.drawAnimFrame), r.remove(), pJSDom = null;
  }, t.fn.vendors.drawShape = function(a, i, o, l, c, s) {
    var u = c * s, m = c / s, f = 180 * (m - 2) / m, h = Math.PI - Math.PI * f / 180;
    a.save(), a.beginPath(), a.translate(i, o), a.moveTo(0, 0);
    for (var d = 0; d < u; d++)
      a.lineTo(l, 0), a.translate(l, 0), a.rotate(h);
    a.fill(), a.restore();
  }, t.fn.vendors.exportImg = function() {
    window.open(t.canvas.el.toDataURL("image/png"), "_blank");
  }, t.fn.vendors.loadImg = function(a) {
    if (t.tmp.img_error = void 0, t.particles.shape.image.src != "")
      if (a == "svg") {
        var i = new XMLHttpRequest();
        i.open("GET", t.particles.shape.image.src), i.onreadystatechange = function(l) {
          i.readyState == 4 && (i.status == 200 ? (t.tmp.source_svg = l.currentTarget.response, t.fn.vendors.checkBeforeDraw()) : t.tmp.img_error = !0);
        }, i.send();
      } else {
        var o = new Image();
        o.addEventListener("load", function() {
          t.tmp.img_obj = o, t.fn.vendors.checkBeforeDraw();
        }), o.src = t.particles.shape.image.src;
      }
    else
      t.tmp.img_error = !0;
  }, t.fn.vendors.draw = function() {
    t.particles.shape.type == "image" ? t.tmp.img_type == "svg" ? t.tmp.count_svg >= t.particles.number.value ? (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame)) : t.tmp.img_error || (t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw)) : t.tmp.img_obj != null ? (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame)) : t.tmp.img_error || (t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw)) : (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame));
  }, t.fn.vendors.checkBeforeDraw = function() {
    t.particles.shape.type == "image" ? t.tmp.img_type == "svg" && t.tmp.source_svg == null ? t.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(t.tmp.checkAnimFrame), t.tmp.img_error || (t.fn.vendors.init(), t.fn.vendors.draw())) : (t.fn.vendors.init(), t.fn.vendors.draw());
  }, t.fn.vendors.init = function() {
    t.fn.retinaInit(), t.fn.canvasInit(), t.fn.canvasSize(), t.fn.canvasPaint(), t.fn.particlesCreate(), t.fn.vendors.densityAutoParticles(), t.particles.line_linked.color_rgb_line = dn(t.particles.line_linked.color);
  }, t.fn.vendors.start = function() {
    ze("image", t.particles.shape.type) ? (t.tmp.img_type = t.particles.shape.image.src.substr(t.particles.shape.image.src.length - 3), t.fn.vendors.loadImg(t.tmp.img_type)) : t.fn.vendors.checkBeforeDraw();
  }, t.fn.vendors.eventsListeners(), t.fn.vendors.start();
};
Object.deepExtend = function e(n, r) {
  for (var t in r)
    r[t] && r[t].constructor && r[t].constructor === Object ? (n[t] = n[t] || {}, e(n[t], r[t])) : n[t] = r[t];
  return n;
};
window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
window.cancelRequestAnimFrame = function() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
function dn(e) {
  var n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(n, function(t, a, i, o) {
    return a + a + i + i + o + o;
  });
  var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return r ? {
    r: parseInt(r[1], 16),
    g: parseInt(r[2], 16),
    b: parseInt(r[3], 16)
  } : null;
}
function zx(e, n, r) {
  return Math.min(Math.max(e, n), r);
}
function ze(e, n) {
  return n.indexOf(e) > -1;
}
window.pJSDom = [];
window.particlesJS = function(e, n) {
  typeof e != "string" && (n = e, e = "particles-js"), e || (e = "particles-js");
  var r = document.getElementById(e), t = "particles-js-canvas-el", a = r.getElementsByClassName(t);
  if (a.length)
    for (; a.length > 0; )
      r.removeChild(a[0]);
  var i = document.createElement("canvas");
  i.className = t, i.style.width = "100%", i.style.height = "100%";
  var o = document.getElementById(e).appendChild(i);
  o != null && pJSDom.push(new Rx(e, n));
};
window.particlesJS.load = function(e, n, r) {
  var t = new XMLHttpRequest();
  t.open("GET", n), t.onreadystatechange = function(a) {
    if (t.readyState == 4)
      if (t.status == 200) {
        var i = JSON.parse(a.currentTarget.response);
        window.particlesJS(e, i), r && r();
      } else
        "" + t.status;
  }, t.send();
};
const Lx = {
  number: {
    value: 60,
    density: {
      enable: !0,
      value_area: 800
    }
  },
  color: {
    value: "#ffffff"
  },
  shape: {
    type: "circle",
    stroke: {
      width: 0,
      color: "#000000"
    },
    polygon: {
      nb_sides: 5
    },
    image: {
      src: "img/github.svg",
      width: 100,
      height: 100
    }
  },
  opacity: {
    value: 0.5,
    random: !1,
    anim: {
      enable: !1,
      speed: 1,
      opacity_min: 0.1,
      sync: !1
    }
  },
  size: {
    value: 3,
    random: !0,
    anim: {
      enable: !1,
      speed: 40,
      size_min: 0.1,
      sync: !1
    }
  },
  line_linked: {
    enable: !0,
    distance: 150,
    color: "#ffffff",
    opacity: 0.4,
    width: 1
  },
  move: {
    enable: !0,
    speed: 4,
    direction: "none",
    random: !1,
    straight: !1,
    out_mode: "out",
    bounce: !1,
    attract: {
      enable: !1,
      rotateX: 100,
      rotateY: 1200
    }
  }
}, $x = {
  detect_on: "Window",
  events: {
    onhover: {
      enable: !0,
      mode: "grab"
    },
    onclick: {
      enable: !0,
      mode: "push"
    },
    resize: !0
  },
  modes: {
    grab: {
      distance: 140,
      line_linked: {
        opacity: 1
      }
    },
    bubble: {
      distance: 400,
      size: 40,
      duration: 2,
      opacity: 8,
      speed: 3
    },
    repulse: {
      distance: 200,
      duration: 0.4
    },
    push: {
      particles_nb: 4
    },
    remove: {
      particles_nb: 2
    }
  }
}, Ox = !0, Hx = {
  particles: Lx,
  interactivity: $x,
  retina_detect: Ox
};
const Nx = {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      particlesJS("particles-js", Hx), document.body.style.overflow = "hidden";
    }
  }
}, Vx = (e) => (Cn("data-v-6254d928"), e = e(), En(), e), qx = { class: "particles-js-box" }, Wx = /* @__PURE__ */ Vx(() => /* @__PURE__ */ Y("div", { id: "particles-js" }, null, -1)), Yx = [
  Wx
];
function Ux(e, n, r, t, a, i) {
  return L(), V("div", qx, Yx);
}
const Yi = /* @__PURE__ */ We(Nx, [["render", Ux], ["__scopeId", "data-v-6254d928"]]), Kx = {
  name: "TextAbbreviation",
  props: {
    // 传入数据
    data: [String],
    // 模式。line：行截断；last：尾截断；
    mode: {
      type: String,
      default: "line"
    },
    // 最大行数，超过则隐藏多余部分，并显示展开按钮。
    max: {
      type: Number,
      default: 3
    },
    // 单位，应用于本组件。可使用rem。
    unit: {
      type: String,
      default: "px"
    },
    // 行高。
    lineHeight: {
      type: Number,
      default: 30
    },
    // 字体大小。
    fontSize: {
      type: Number,
      default: 14
    }
  },
  data() {
    return {
      useMax: -1,
      maxLine: 0
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    expandRetract() {
      this.useMax === this.maxLine ? this.useMax = this.max : this.useMax = this.maxLine;
    },
    init() {
      const e = this.$refs[`textAbbreviation${this.mode}Content`].offsetHeight;
      let n = null;
      this.unit === "rem" ? n = this.remToPx(this.lineHeight) : n = this.lineHeight, this.maxLine = e / n, this.maxLine > this.max && (this.useMax = this.max);
    },
    remToPx(e) {
      const n = document.documentElement.style.fontSize;
      let r = null;
      return this.fieldCheck(n) || (r = n.slice(0, n.length - 2)), e = e * r, e;
    },
    /**
     * 字段判断：判断某个字段，是否为undefined、null、''。
     * @param {any} field 需要判断的字段
     * @returns {Boolean} 该字段是否为undefined || null || ''。
     * @example this.$LJSbase.fieldCheck(this.aaaa)
     */
    fieldCheck(e) {
      return e == null || e === "";
    }
  }
};
const jx = Kx, Gx = {
  key: 0,
  class: "textAbbreviation-line"
}, Xx = {
  key: 1,
  class: "textAbbreviation-last"
};
function Jx(e, n, r, t, a, i) {
  return L(), V("div", {
    class: "textAbbreviation",
    style: ve({
      "line-height": e.lineHeight + e.unit,
      "font-size": e.fontSize + e.unit
    })
  }, [
    e.mode === "line" ? (L(), V("div", Gx, [
      Y("div", {
        ref: "textAbbreviationlineContent",
        class: "textAbbreviation-line-content",
        style: ve({
          height: e.useMax === -1 ? "auto" : `calc(${e.useMax} * ${e.lineHeight}${e.unit})`
        })
      }, le(e.data), 5),
      e.useMax !== -1 ? (L(), V("div", {
        key: 0,
        onClick: n[0] || (n[0] = (...o) => e.expandRetract && e.expandRetract(...o)),
        class: "textAbbreviation-line-more"
      }, le(e.useMax === e.maxLine ? "收起" : "展开"), 1)) : Q("", !0)
    ])) : e.mode === "last" ? (L(), V("div", Xx, [
      Y("div", {
        ref: "textAbbreviationlastContent",
        class: "textAbbreviation-last-content",
        style: ve({
          height: e.useMax === -1 ? "auto" : `calc(${e.useMax} * ${e.lineHeight}${e.unit})`
        })
      }, le(e.data), 5),
      e.useMax !== -1 ? (L(), V("div", {
        key: 0,
        onClick: n[1] || (n[1] = (...o) => e.expandRetract && e.expandRetract(...o)),
        class: "textAbbreviation-last-more",
        style: ve({
          position: e.useMax === e.maxLine ? "relative" : "absolute",
          "padding-left": e.useMax === e.maxLine ? "0" : "20px"
        })
      }, le(e.useMax === e.maxLine ? "收起" : "...展开"), 5)) : Q("", !0)
    ])) : Q("", !0)
  ], 4);
}
const Ui = /* @__PURE__ */ We(jx, [["render", Jx], ["__scopeId", "data-v-8f2fa1ba"]]);
let It = null;
function Zx(e, n = null, r) {
  if ("WebSocket" in window) {
    e = Qx(e);
    const t = re.fieldCheck(n) ? [] : [n];
    return It = new WebSocket(e, t), It.onopen = function() {
      re.colorLog({ content: ["websocket", "已连接，正在接收数据...."] });
    }, It.onmessage = function(a) {
      let i = a.data;
      r(JSON.parse(i));
    }, It.onclose = function() {
      re.colorLog({ content: ["websocket", "已关闭！"] });
    }, It;
  } else
    console.info("您的浏览器不支持 WebSocket!");
  return null;
}
function Qx(e) {
  return location.protocol === "http:" ? e = "ws:" + e : location.protocol === "https:" ? e = "wss:" + e : e = "ws:" + e, e;
}
const Ki = {
  init: Zx
};
var t0 = 0;
const ji = (e = {
  html2Canvas: null,
  // import html2Canvas from 'html2canvas';推荐版本1.4.1
  JsPDF: null
  // import JsPDF from 'jspdf';推荐版本2.5.1
}, n, r, t, a) => {
  if (t) {
    const l = Math.floor(277 * r.scrollWidth / 190) + 20;
    for (let c = 0; c < t.length; c++) {
      const s = Math.ceil((t[c].offsetTop + t[c].offsetHeight) / l);
      if (t1(t, c, s * l)) {
        var i = "";
        t[c].localName !== "tr" ? i = s * l - (t[c].offsetTop + t[c].offsetHeight) : i = s * l - (t[c].offsetTop + t[c].offsetHeight + t0) + 20;
        var o = e1(i);
        const u = t[c].parentNode, m = t[c].nextSibling;
        m ? u.insertBefore(o, m) : u.appendChild(o);
      }
    }
  }
  e.html2Canvas(r, {
    allowTaint: !1,
    taintTest: !1,
    logging: !1,
    useCORS: !0,
    dpi: window.devicePixelRatio * 1,
    scale: 2
    // 按比例增加分辨率
  }).then((l) => {
    for (var c = new e.JsPDF("p", "mm", "a4"), s = l.getContext("2d"), u = a ? 277 : 190, m = a ? 190 : 277, f = Math.floor(m * l.width / u), h = 0; h < l.height; ) {
      var d = document.createElement("canvas");
      d.width = l.width, d.height = Math.min(f, l.height - h), d.getContext("2d").putImageData(s.getImageData(0, h, l.width, Math.min(f, l.height - h)), 0, 0), c.addImage(d.toDataURL("image/jpeg", 1), "JPEG", 10, 10, u, Math.min(m, u * d.height / d.width)), h += f, h < l.height && c.addPage();
    }
    c.save(n + ".pdf");
  });
}, e1 = (e, n = 0) => {
  const r = document.createElement("div");
  return r.style.background = "#ffffff", r.style.width = "calc(100% + 8px)", r.style.marginLeft = "-4px", r.style.marginBottom = "0px", r.classList.add("divRemove"), r.style.height = e + n + "px", r;
}, t1 = (e, n, r) => (e[n].localName !== "tr" && (t0 += e[n].clientHeight), e[n].localName !== "tr" ? e[n].offsetTop + e[n].offsetHeight < r && e[n + 1] && e[n + 1].offsetTop + e[n + 1].offsetHeight > r : e[n].offsetTop + e[n].offsetHeight + t0 < r && e[n + 1] && e[n + 1].offsetTop + e[n + 1].offsetHeight + t0 > r);
class Mt {
  //mqtt公共变量
  /**
   * 构造函数
   * @param {String} subscribe 订阅地址
   * @example this.publicMqtt = new mqttCreateds('/furnace/msg');
   * */
  constructor(n) {
    this.subscribe = n;
  }
  /**
   * 初始化mqtt
   * @param {Object} mqtt Mqtt包的引用
   * @param {String} opts.username 用户名
   * @param {String} opts.password 密码
   * @param {String} url 链接地址，前端可用的真实地址。例如：ws://192.168.1.100:8083/mqtt
   * @example 
   * this.publicMqtt.init({
        username: 'admin',
        password: '123456'
      }, mqttUrl);
   * */
  init(n, r, t) {
    const a = {
      clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
      clean: !0,
      // true: 清除会话, false: 保留会话
      connectTimeout: 4e3,
      // 超时时间
      reconnectPeriod: 5e3
      // 重连时间间隔
    };
    a.username = r.username, a.password = r.password, this.url = t, this.client = n.connect(this.url, a);
  }
  /**
   * 链接
   * @example this.publicMqtt.link();
   * */
  link() {
    this.client.on("connect", (n) => {
      this.client.subscribe(this.subscribe, (r) => {
        console.info(r ? "订阅失败" : "订阅成功");
      });
    });
  }
  /**
   * 取消订阅，返回一个Promise。{msg: '取消订阅成功', path: 订阅地址}
   * @example this.publicMqtt.unsubscribes();
   * */
  unsubscribes() {
    return new Promise((n, r) => {
      this.client.unsubscribe(this.subscribe, (t) => {
        t ? r(t) : n({ msg: "取消订阅成功", path: this.subscribe });
      });
    });
  }
  /**
   * 结束链接
   * @example this.publicMqtt.over();
   * */
  over() {
    this.client.end();
  }
  /**
   * 收到的消息
   * */
  // get() {
  //   this.client.on("message", (topic, message) => {
  //     console.log("收到消息：", message.toString());
  //   });
  // }
  /**
   * 获取真实的地址
   * @param {String} wsUrl mqtt地址。例如：//192.168.1.100:8083/mqtt
   * @param {String} NODE_ENV 模式：开发（development）、测试、生产
   * @param {Boolean} proxy 是否走nginx的代理。开发模式不走代理。默认true。
   * @returns {String} 返回前端可用的Mqtt地址。
   * @example 
   * const mqttUrl = this.publicMqtt.getUrl(({}).VITE_APP_MQTT_URL, "production"); // 返回：ws://192.168.1.100:8083/mqtt
   * */
  getUrl(n, r, t = !0) {
    r !== "development" && t && (n = location.host + n);
    let a = "";
    return location.protocol === "http:" ? a = "ws:" + n : location.protocol === "https:" ? a = "wss:" + n : a = "ws:" + n, a;
  }
}
//创建公共变量
St(Mt, "url"), //mqtt地址
St(Mt, "oldSubscribe"), //取消订阅准备
St(Mt, "subscribe"), //订阅地址
St(Mt, "client");
const n1 = {
  LJSws: Ki,
  // websocket封装
  htmlPdf: ji
  // html转pdf
}, r1 = [
  { type: "function", name: "menu", entity: za },
  { type: "function", name: "base", entity: re },
  { type: "function", name: "num", entity: te },
  { type: "function", name: "date", entity: ue },
  { type: "function", name: "fc", entity: v0 },
  { type: "function", name: "ecDC", entity: $a },
  { type: "function", name: "session", entity: qa },
  { type: "function", name: "cryptoJs", entity: et },
  { type: "function", name: "rgbC", entity: Wa },
  { type: "function", name: "url", entity: Ta },
  { type: "function", name: "license", entity: Ya },
  { type: "function", name: "El", entity: zi },
  { type: "function", name: "Watermark", entity: Vn },
  { type: "function", name: "privacy", entity: Li },
  // {type: 'directive', name: 'directives', entity: directives},
  { type: "component", name: "LJSLoading", entity: $i },
  { type: "component", name: "Pagination", entity: Oi },
  { type: "component", name: "RightMenu", entity: Hi },
  { type: "component", name: "DatetypeChooseDate", entity: Ni },
  { type: "component", name: "DatetypeChooseDateRange", entity: Vi },
  { type: "component", name: "DateRange", entity: qi },
  { type: "component", name: "DictTag", entity: Wi },
  { type: "component", name: "Particles", entity: Yi },
  { type: "component", name: "TextAbbreviation", entity: Ui },
  { type: "other_function", name: "self", entity: n1 }
], o1 = {
  // 全局注入
  install: function(e) {
    r1.map((n) => {
      if (n.type === "directive")
        e.use(n.entity);
      else if (n.type === "component")
        e.component(`${n.name}`, n.entity);
      else if (n.type === "other_function")
        for (let r in n.entity)
          e.config.globalProperties[r] = n.entity[r];
      else {
        const r = `$LJS${n.name}`;
        e.config.globalProperties[r] = n.entity;
      }
    });
  },
  // 局部引入时使用
  // 插件
  LJSLoading: $i,
  Pagination: Oi,
  RightMenu: Hi,
  DatetypeChooseDate: Ni,
  DatetypeChooseDateRange: Vi,
  DateRange: qi,
  DictTag: Wi,
  Particles: Yi,
  TextAbbreviation: Ui,
  LJSprivacy: Li,
  // 方法
  LJSmenu: za,
  LJSbase: re,
  LJSnum: te,
  LJSdate: ue,
  LJSfc: v0,
  LJSecDC: $a,
  LJSsession: qa,
  LJScryptoJs: et,
  LJSrgbC: Wa,
  LJSurl: Ta,
  LJSlicense: Ya,
  LJSEl: zi,
  LJSWatermark: Vn,
  DateRange_spanLimit: Tx,
  // 全局变量
  LJSws: Ki,
  htmlPdf: ji,
  // class，需独立引入
  mqttCreateds: Mt
};
export {
  o1 as default
};
