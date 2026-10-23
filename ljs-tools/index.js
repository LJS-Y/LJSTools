var pl = Object.defineProperty;
var vl = (e, n, r) => n in e ? pl(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r;
var g0 = (e, n, r) => (vl(e, typeof n != "symbol" ? n + "" : n, r), r);
import { getCurrentInstance as ht, inject as Ve, ref as he, computed as j, unref as N, shallowRef as B0, watchEffect as Ga, readonly as ml, getCurrentScope as gl, onScopeDispose as Xa, onMounted as Et, nextTick as Ne, watch as qe, isRef as Za, warn as yl, provide as Wr, defineComponent as me, openBlock as q, createElementBlock as J, mergeProps as F0, renderSlot as Le, createElementVNode as ee, toRef as dn, onUnmounted as bl, useAttrs as Cl, useSlots as Ja, normalizeClass as ne, normalizeStyle as Pe, createCommentVNode as ue, Fragment as ft, createBlock as xe, withCtx as ve, resolveDynamicComponent as Je, withModifiers as E0, createVNode as Ie, toDisplayString as be, onBeforeUnmount as P0, Text as El, reactive as Qa, h as _l, markRaw as xn, toRefs as Bl, resolveComponent as je, Transition as jr, withDirectives as Un, withKeys as j0, createTextVNode as on, vShow as Yn, isVNode as eo, render as to, Teleport as no, renderList as En, pushScopeId as Gr, popScopeId as Xr } from "vue";
const wl = () => {
  ae.colorLog({ content: ["", "******************************************"] }), ae.colorLog({ content: ["Core Dependencies：", "ljs-tools"] }), ae.colorLog({ content: ["Author：", "LJS"] }), ae.colorLog({ content: ["API", "https://ljs-y.github.io/ljs-vue3"], color: [
    "background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;",
    "background: #FFF; border: 1px solid #666666; color: #fff; border-radius: 0 4px 4px 0; padding: 2px 6px;"
  ] }), ae.colorLog({ content: ["", "******************************************"] });
}, sn = 1e-14;
function Dl(e, n = 2, r = "0") {
  if (Zt(e)) {
    e = e.toString();
    const t = e.length, i = n - t;
    let a = "";
    for (let o = 0; o < i; o++)
      a += r;
    return a + e;
  }
  return e;
}
function Fl(e, n = 4, r = ",") {
  if (Zt(e)) {
    e += "";
    var t = e.split("."), i = t[0], a = t.length > 1 ? "." + t[1] : "";
    const o = new RegExp("(\\d+)(\\d{" + n + "})");
    for (; o.test(i); )
      i = i.replace(o, "$1" + r + "$2");
    return i + a;
  }
  return e;
}
function Al(e) {
  if (Zt(e)) {
    e = Math.ceil(e);
    const n = (e + "").length, r = Math.pow(10, n - 1);
    return Math.ceil(e / r) * r;
  }
  return e;
}
function Tl({
  value: e,
  ws: n = 0,
  dws: r = ["", "万", "亿", "万亿"],
  isMerge: t = !0,
  numeralSystem: i = 1e4
}) {
  if (Zt(e)) {
    let a = "";
    const o = Number(e) < 0 ? -1 : 1, l = Math.abs(Number(e));
    let c = 0;
    if (l < i)
      a = o * Number(l.toFixed(n)), c = 0;
    else if (l >= i && l < i * i) {
      let s = l / i + sn;
      s = Number(s.toFixed(n)), s < i ? (a = o * s, c = 1) : (a = o * s / i, c = 2);
    } else if (l >= i * i && l < i * i * i) {
      let s = l / (i * i) + sn;
      s = Number(s.toFixed(n)), s < i ? (a = o * s, c = 2) : (a = o * s / i, c = 3);
    } else
      l >= i * i * i && (a = o * (l / (i * i * i) + sn).toFixed(n), c = 3);
    return t ? a + (ae.fieldCheck(r[c]) ? r[r.length - 1] : r[c]) : {
      num: a,
      unit: ae.fieldCheck(r[c]) ? r[r.length - 1] : r[c]
    };
  }
  return e;
}
function ro(e, n = 2) {
  return Zt(e) && (e = e + "", e.indexOf(".") > -1 && e.split(".")[1].length > n) ? (e = Number(e), (e + sn).toFixed(n)) : e;
}
function Zt(e) {
  const n = typeof e;
  return n === "number" || n === "string" && !isNaN(Number(e, 10));
}
function Sl(e, n = 12, r = 2) {
  e = Number(e);
  const t = (e / n).toFixed(r), i = [];
  for (let a = 0; a < n; a++)
    a < n - 1 ? i.push(t) : i.push(ro(e - t * (n - 1), r));
  return i;
}
const de = {
  numberB0: Dl,
  longNumText: Tl,
  numberCeil: Al,
  moneySplit: Fl,
  numberChangeDecimal: ro,
  averageNum: Sl
};
function Zr(e) {
  if (ae.fieldCheck(e))
    return null;
  const n = {};
  let r = e.split("?");
  if (r.length === 1)
    return [r[0], n];
  const t = r[1].split("&"), i = t.length;
  for (let a = 0; a < i; a++) {
    const o = t[a].split("=");
    n[o[0]] = o[1];
  }
  return [r[0], n];
}
function kl(e, n = location.search) {
  const r = Zr(n);
  if (r === null)
    return null;
  const t = r[1];
  return e in t ? t[e] : null;
}
function Il(e, n = !0) {
  if (ae.fieldCheck(e))
    return null;
  let r = e.lastIndexOf(".");
  return r === -1 ? null : (r = n ? r : r + 1, e.slice(r, e.length));
}
function Pl(e, n = !1) {
  if (ae.fieldCheck(e))
    return null;
  const r = e.lastIndexOf("/"), t = e.lastIndexOf("\\");
  let i = r > t ? r : t;
  return i !== -1 ? i++ : i = 0, n ? e.slice(i, e.length) : e.lastIndexOf(".") > -1 ? e.slice(i, e.lastIndexOf(".")) : e.slice(i, e.length);
}
function io(e) {
  var n = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return n.test(e);
}
function ao(e) {
  var n = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/gm;
  return n.test(e);
}
function Ml(e) {
  return ao(e) || io(e);
}
function oo(e, n = ["sign"]) {
  return Object.entries(e).filter(([i, a]) => /* 排除未定义的值 */ a != null && // 排除 null
  a !== "" && // 排除空字符串
  !n.includes(i)).sort(([i], [a]) => i.localeCompare(a, "en-US")).map(([i, a]) => `${i}=${a}`).join("&");
}
const so = {
  getUrlAllParameter: Zr,
  getUrlParameter: kl,
  getFileType: Il,
  getFileName: Pl,
  isIPV4ValidIP: io,
  isIPV6ValidIP: ao,
  isIPValid: Ml,
  formatParamsByAscii: oo
};
function Lr(e) {
  return e == null || e === "";
}
function lo({ data: e, value: n, key: r = "id", children: t = "children", parents: i = [] }) {
  if (Lr(e))
    return i;
  const a = e.length;
  for (let o = 0; o < a; o++)
    if (e[o][r] === n || !Lr(e[o][t]) && (i = lo({
      data: e[o][t],
      value: n,
      key: r,
      children: t,
      parents: i
    }), i.length > 0 && i[i.length - 1][r] === n))
      return i.unshift(e[o]), i;
  return i;
}
function Hr({ data: e, opts: n = [], disabled: r = !1, fatherInfluenceSon: t = !0 }) {
  if (!e)
    return;
  const i = e.length;
  for (let a = 0; a < i; a++) {
    e[a].disabled = r;
    let o = !1;
    const l = n.length;
    for (let c = 0; c < l; c++) {
      const s = n[c];
      if (e[a][s.key] === s.value) {
        o = !0;
        break;
      }
    }
    o ? (e[a].disabled = !0, e[a].children = Hr({ data: e[a].children, opts: n, disabled: t, fatherInfluenceSon: t })) : e[a].children !== void 0 && (e[a].children = Hr({ data: e[a].children, opts: n, disabled: r, fatherInfluenceSon: t }));
  }
  return e;
}
function Rl(e) {
  let n = [];
  if (!e || !e.length)
    return [];
  for (let r = 0; r < e.length; r++) {
    let t = e[r], i = JSON.parse(JSON.stringify(t));
    i.children = void 0, n.push(i);
    const a = this.handleTreeList(t.children);
    n = n.concat(a);
  }
  return n;
}
function Ol({ data: e, id: n = "id", parentId: r = "parentId", children: t = "children" }) {
  let i = { id: n, parentId: r, childrenList: t };
  var a = {}, o = {}, l = [];
  for (let s of e) {
    let f = s[i.parentId];
    a[f] == null && (a[f] = []), o[s[i.id]] = s, a[f].push(s);
  }
  for (let s of e) {
    let f = s[i.parentId];
    o[f] == null && l.push(s);
  }
  for (let s of l)
    c(s);
  function c(s) {
    if (a[s[i.id]] !== null && (s[i.childrenList] = a[s[i.id]]), s[i.childrenList])
      for (let f of s[i.childrenList])
        c(f);
  }
  return l;
}
function zl(e = 120) {
  var n = document.documentElement, r = n.clientWidth / e;
  n.style.fontSize = r + "px";
}
function co({ data: e, value: n, labelKey: r = "dictLabel", valueKey: t = "dictValue", isTrue: i = !1 }) {
  if (n === void 0)
    return "";
  let a = [];
  return Object.keys(e).some((o, l) => {
    if (e[o][t] == "" + n)
      return r === "$index" ? (a = l, l) : (a.push(e[o][r]), !0);
  }), r === "$index" ? Zt(a) ? a : null : (a.length === 0 && a.push(n), i ? a[0] : a.join(""));
}
function Ll({
  data: e = [],
  valueKey: n = "dictValue",
  del: r = null,
  retain: t = null
}) {
  if (r !== null) {
    const i = A0(e), a = [];
    return r.forEach((o) => {
      const l = co({ data: i, value: o, labelKey: "$index", valueKey: n });
      l !== null && a.push(l);
    }), a.sort(function(o, l) {
      return l - o;
    }), a.forEach((o) => {
      i.splice(o, 1);
    }), i;
  } else if (t !== null) {
    const i = [];
    return e.forEach((a) => {
      t.indexOf(a[n]) > -1 && i.push(a);
    }), i;
  }
  return e;
}
function Hl({ content: e = ["暂无内容"], type: n = "info", color: r = [
  "background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;",
  "background: #1475B2; color: #fff; border-radius: 0 4px 4px 0; padding: 3px 6px;"
] }) {
  let t = "";
  e.forEach((i) => {
    t += `%c${i}`;
  }), console[n](t, r[0], r[1]);
}
function $l({ _this: e, url: n, name: r = (/* @__PURE__ */ new Date()).valueOf(), loadcallback: t = () => {
} }) {
  let i = new Image();
  i.setAttribute("crossOrigin", "anonymous");
  const a = Zr(n);
  n = a[0];
  let o = {};
  a.length === 2 && (o = {
    ...a[1]
  }), o._time = (/* @__PURE__ */ new Date()).valueOf(), i.src = n + "?time=" + oo(o), e.$nextTick(() => {
    i.onload = () => {
      const l = document.createElement("canvas");
      l.width = i.width, l.height = i.height, l.getContext("2d").drawImage(i, 0, 0, i.width, i.height), l.toBlob((s) => {
        const f = URL.createObjectURL(s), v = document.createElement("a");
        v.download = r, v.href = f, v.click(), v.remove(), URL.revokeObjectURL(f);
      }), t();
    };
  });
}
function Nl(e) {
  return e instanceof Blob || e instanceof File ? new Promise((n, r) => {
    const t = new FileReader();
    t.onloadend = () => n(t.result);
    try {
      t.readAsDataURL(e);
    } catch (i) {
      r(i);
    }
  }) : "";
}
function Vl() {
  var e = 0, n = window.screen, r = navigator.userAgent.toLowerCase();
  return window.devicePixelRatio !== void 0 ? e = window.devicePixelRatio : ~r.indexOf("msie") ? n.deviceXDPI && n.logicalXDPI && (e = n.deviceXDPI / n.logicalXDPI) : window.outerWidth !== void 0 && window.innerWidth !== void 0 && (e = window.outerWidth / window.innerWidth), e && (e = Math.round(e * 100)), e;
}
function A0(e) {
  let n = Array.isArray(e) ? [] : {};
  for (let r in e)
    e.hasOwnProperty(r) && (typeof e[r] == "object" && e[r] !== null ? n[r] = A0(e[r]) : n[r] = e[r]);
  return n;
}
function ql(e, n) {
  if (typeof e != "object" || typeof n != "object")
    return n;
  const r = A0(e), t = A0(n);
  for (let i in r)
    t[i] = r[i];
  return t;
}
const ae = {
  fieldCheck: Lr,
  deepCopy: A0,
  getTreeParents: lo,
  editTreeParentIdCheck: Hr,
  handleTreeList: Rl,
  handleListTree: Ol,
  setRemUnit: zl,
  selectDictLabel: co,
  dictDataChange: Ll,
  colorLog: Hl,
  downloadImage: $l,
  imageFileToBase64: Nl,
  getWindowRatio: Vl,
  objectCopy: ql
};
wl();
function Ul(e) {
  const n = e.getters.menuList, r = fo({ menuList: n }), t = uo({ data: n, value: r.url });
  r.address = t, e.commit("SET_menuNowOpen", r), e.commit("SET_menuOpenList", [r]);
}
function uo({ data: e, value: n, key: r = "url" }) {
  const t = ae.getTreeParents({ data: e, value: n, key: r }), i = [];
  return t.forEach((a) => {
    const o = {
      title: a.title,
      // 菜单名称
      url: a.url
      // 菜单路由path
    };
    i.push(o);
  }), i;
}
function fo({ menuList: e }) {
  if (e.length === 0)
    return {};
  let n = {};
  return e.forEach((r, t) => {
    t === 0 && (!ae.fieldCheck(r.children) && r.children.length > 0 ? (r.open = !0, n = fo({ menuList: r.children })) : n = r);
  }), n;
}
function Yl({ store: e, path: n }) {
  const r = e.getters.menuList, t = ae.handleTreeList(r), i = t.length;
  for (let a = 0; a < i; a++) {
    const o = t[a];
    if (o.url === n)
      return o;
  }
}
function Kl({ store: e, run: n, path: r, query: t = {} }) {
  const i = Yl({ store: e, path: r });
  xo({ store: e, run: n, menuObj: i, query: t });
}
function xo({ store: e, run: n, menuObj: r, query: t }) {
  let i = e.getters.menuList;
  if (ae.fieldCheck(r.children) && (r.children = []), r.children.length > 0) {
    if (r.open)
      r.open = !r.open;
    else {
      const a = ae.getTreeParents({
        data: i,
        value: r.menuId,
        key: "menuId"
      });
      Jr({ menuList: i, parents: a });
    }
    e.commit("SET_menuList", i);
  } else {
    if (!ae.fieldCheck(r.isFrame) && r.isFrame === !0) {
      ho(r.url);
      return;
    }
    const a = e.getters.menuNowOpen;
    let o = e.getters.menuOpenList;
    if (a.url === r.url)
      return;
    r.address = uo({ data: e.getters.menuList, value: r.url });
    let l = r;
    if (r.choose = !r.choose, e.commit("SET_menuNowOpen", l), ae.fieldCheck(r.openType) || !ae.fieldCheck(r.openType) && r.openType === "1") {
      const c = o.length;
      let s = !1;
      for (let f = 0; f < c; f++)
        if (o[f].url === r.url) {
          s = !0;
          break;
        }
      s || (o = e.getters.menuOpenList, o.push(l), e.commit("SET_menuOpenList", o));
    }
    n.push({
      path: r.url,
      query: t
    });
  }
}
function Jr({ menuList: e, parents: n, key: r = "menuId" }) {
  return e.forEach((t) => {
    t[r] === n[0][r] ? (t.open = !0, n.length > 1 && n.splice(0, 1)) : t.open = !1, t.children && t.children.length > 0 && (t.children = Jr({ menuList: t.children, parents: n, key: r }));
  }), e;
}
function ho(e, n = "_blank") {
  window.open(e, n);
}
const po = {
  fristOpenMenu: Ul,
  handPush: Kl,
  menuControl: xo,
  updateTreeOpen: Jr,
  goExternalUrl: ho
};
function ye(e, n) {
  if (ae.fieldCheck(e))
    return e;
  const r = new Date(e), t = n || "{y}-{m}-{d} {h}:{i}:{s}", i = {
    y: r.getFullYear(),
    m: de.numberB0(r.getMonth() + 1),
    d: de.numberB0(r.getDate()),
    h: de.numberB0(r.getHours()),
    i: de.numberB0(r.getMinutes()),
    s: de.numberB0(r.getSeconds()),
    MS: r.getMilliseconds()
  };
  return t.replace(/{(y|m|d|h|i|s|MS)+}/g, (a, o) => i[o]);
}
function Wl(e, n, r = 0) {
  if (ae.fieldCheck(e))
    return e;
  if (r === 0) {
    let t = new Date(e).getTime();
    return ye(t, n);
  }
  if (n === "{y}-{m}-{d}") {
    let t = new Date(e).getTime();
    return t = t + 3600 * 1e3 * 24 * r, ye(t, n);
  } else if (n === "{y}-{m}") {
    const t = r / Math.abs(r);
    let i = new Date(e), a = "";
    const o = i.getMonth() + 1;
    let l = 0, c = 0;
    if (t === -1)
      l = i.getFullYear() + Math.floor((o + r) / 12), c = 12 * Math.abs(l - i.getFullYear()) + o + r, (o + r) % 12 === 0 && (l += t, c = 12);
    else if (t === 1)
      if (o + r <= 12)
        l = i.getFullYear(), c = o + r;
      else if ((o + r) % 12 !== 0)
        l = i.getFullYear() + Math.floor((o + r) / 12), c = o + r - Math.abs(l - i.getFullYear()) * 12;
      else {
        const s = (o + r) / 12;
        l = i.getFullYear() + (s > 1 ? s - 1 : s), c = o + r - Math.abs(l - i.getFullYear()) * 12;
      }
    return a = l + "-" + de.numberB0(c), a;
  } else if (n === "{y}")
    return (new Date(e).getFullYear() + r).toString();
}
function jl(e, n = 1) {
  if (e[0] === "" || e[0] === null)
    return e;
  const r = new Date(e[0]), t = new Date(e[1]);
  switch (n === void 0 && (n = 1), n) {
    case 1:
      return [
        r.getFullYear() + "-" + de.numberB0(r.getMonth() + 1) + "-" + de.numberB0(r.getDate()) + " 00:00:00",
        t.getFullYear() + "-" + de.numberB0(t.getMonth() + 1) + "-" + de.numberB0(t.getDate()) + " 23:59:59"
      ];
    case 2:
      return [
        r.getFullYear() + "-" + de.numberB0(r.getMonth() + 1) + "-" + de.numberB0(r.getDate()) + " " + de.numberB0(r.getHours()) + ":00:00",
        t.getFullYear() + "-" + de.numberB0(t.getMonth() + 1) + "-" + de.numberB0(t.getDate()) + " " + de.numberB0(t.getHours()) + ":59:59"
      ];
    case 3:
      return [
        r.getFullYear() + "-" + de.numberB0(r.getMonth() + 1) + "-" + de.numberB0(r.getDate()) + " " + de.numberB0(r.getHours()) + ":" + de.numberB0(r.getMinutes()) + ":00",
        t.getFullYear() + "-" + de.numberB0(t.getMonth() + 1) + "-" + de.numberB0(t.getDate()) + " " + de.numberB0(t.getHours()) + ":" + de.numberB0(t.getMinutes()) + ":59"
      ];
  }
  return e;
}
function Gl({ time: e = 0, showTag: n = ["天", "小时", "分钟", "秒", "毫秒"], showAll: r = !1, onlyTime: t = !1 }) {
  let i = 1;
  e < 0 && (i = -1), e = Math.abs(e);
  const a = 1e3, o = 60 * a, l = 60 * o, c = 24 * l, s = [0, 0, 0, 0, 0];
  if (e >= c) {
    const h = Math.floor(e / c);
    s[0] = i * h, e -= c * h;
  }
  if (e >= l) {
    const h = Math.floor(e / l);
    s[1] = i * h, e -= l * h;
  }
  if (e >= o) {
    const h = Math.floor(e / o);
    s[2] = i * h, e -= o * h;
  }
  if (e >= a) {
    const h = Math.floor(e / a);
    s[3] = i * h, e -= a * h;
  }
  if (s[4] = i * e, t)
    return s;
  let f = r, v = "";
  return s.forEach((h, g) => {
    !f && h !== 0 && (f = !0), f && (v += h + n[g]);
  }), v;
}
function Xl(e = 10, n = !1) {
  let r = "", t = "", i = "{y}-{m}-{d}";
  return n && (i = "{y}-{m}-{d} {h}:{i}:{s}"), r = ye((/* @__PURE__ */ new Date()).getTime() - 3600 * 1e3 * 24 * (e - 1), i), t = ye(/* @__PURE__ */ new Date(), i), [r, t];
}
function Zl(e = /* @__PURE__ */ new Date(), n = "date", r = 0, t = 5) {
  e = new Date(e);
  let i = "", a = "";
  const o = 3600 * 1e3 * 24;
  switch (n) {
    case "datetime":
      i = ye(e, "{y}-{m}-{d} 00:00:00"), a = ye(e, "{y}-{m}-{d} {h}:{i}:{s}");
      break;
    case "date":
      let l = `${ye(e, "{y}")}-${ye(e, "{y}")}`;
      e.getMonth() === 11 ? l = `${Number(ye(e, "{y}")) + 1}-01-01` : l = `${Number(ye(e, "{y}"))}-${Number(ye(e, "{m}")) + 1}-01`;
      const c = new Date(l).getTime() - o;
      i = ye(e, "{y}-{m}-01"), c < Date.now() ? a = ye(c, "{y}-{m}-{d}") : a = ye(e, "{y}-{m}-{d}");
      break;
    case "month":
      let s = `${ye(e, "{y}")}-12`;
      i = ye(e, "{y}-01"), new Date(s).getTime() < Date.now() ? a = ye(s, "{y}-{m}") : a = ye(e, "{y}-{m}");
      break;
    case "year":
      i = e.getFullYear() - t, a = e.getFullYear();
      break;
  }
  return [i, a];
}
const De = {
  formatTime: ye,
  customizedDate: Wl,
  dateQjChange: jl,
  timeRunDistance: Gl,
  initSearchDate: Xl,
  initSearchDateQj: Zl
};
function Jl({ form: e, key: n = "money", zs: r = 10, ws: t = 2, type: i = "Number", fu: a = !1 }) {
  const o = e;
  o[n] = o[n] + "", i === "Number" && (o[n].slice(0, 1) === "0" && (o[n] = o[n].slice(1, 2) !== "." ? "0" : o[n]), o[n].slice(0, 1) === "-" && (o[n] = o[n].slice(1, 2) === "." ? "-" : o[n]), o[n].slice(0, 2) === "-0" && (o[n] = o[n].slice(2, 3) !== "." ? "-0" : o[n])), a ? o[n] = o[n].replace(/[^\d.-]/g, "") : o[n] = o[n].replace(/[^\d.]/g, ""), o[n] = o[n].replace(/^\./g, ""), o[n] = o[n].replace(/\.{2,}/g, "."), o[n] = o[n].slice(0, 1) + o[n].slice(1, o[n].length).replace(/\-/g, "");
  const l = new RegExp("^(\\-)*(\\d+)\\.(\\d{0," + t + "}).*$");
  if (r !== "" && o[n].length > 0) {
    const c = o[n].split(".");
    let s = c[0], f = "";
    const v = s.slice(0, 1) === "-" ? 1 : 0;
    s.length > r + v && (s = s.slice(0, r + v)), c.length > 1 ? (f = c[1], o[n] = s + "." + f) : o[n] = s;
  }
  o[n] = o[n].replace(l, "$1$2.$3");
}
function Ql({ form: e, key: n = "num", type: r = "Number", fu: t = !1 }) {
  r === "Number" && (t ? e[n] = e[n].slice(0, 1) + e[n].slice(1, e[n].length).replace(/\-/g, "") : e[n].slice(0, 1) === "-" && (e[n] = e[n].slice(1, e[n].length))), e[n] = e[n].replace(/[^\d-]/g, ""), r === "Number" && e[n].length > 0 && e[n] !== "-" && (e[n] = Number(e[n]));
}
function ec({ form: e, key: n = "num" }) {
  if (!Zt(e[n])) {
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
function tc(e, n = "username") {
  e[n] = e[n] + "", e[n] = e[n].replace(/[^\w]/g, ""), e[n] = e[n].replace(/\_/g, "");
}
function nc(e, n) {
  const r = document.createElement("a"), t = new Blob([e], {
    type: "application/vnd.ms-excel"
  });
  r.style.display = "none", r.href = URL.createObjectURL(t), r.setAttribute("download", n), document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
function rc(e = {}) {
  const n = {
    dateType: "3",
    direction: 1,
    span: 0,
    dateTypeKeyValue: ["1", "2", "3", "4"]
  };
  for (let o in e)
    n[o] = e[o];
  const r = 3600 * 1e3 * 24;
  let t = null, i = null, a = 0;
  switch (n.dateType) {
    case n.dateTypeKeyValue[3]:
      a += 1e3 * n.span;
      break;
    case n.dateTypeKeyValue[2]:
      a += r * n.span;
      break;
    case n.dateTypeKeyValue[1]:
      t = new Date(a).getFullYear(), i = new Date(a).getMonth() + 1 + n.span, i < 0 ? (t += n.span, i = 12) : i += 1, a = (/* @__PURE__ */ new Date(`${t}-${i}`)).getTime();
      break;
    case n.dateTypeKeyValue[0]:
      t = new Date(a).getFullYear(), t += n.span, a = (/* @__PURE__ */ new Date(`${t}-01`)).getTime();
      break;
  }
  return (o) => {
    if (n.direction === 1)
      return o.getTime() > a + Date.now();
    if (n.direction === -1)
      return o.getTime() < a + Date.now();
  };
}
let r0 = 0;
function ic(e = 30, n) {
  n ? r0 = De.formatTime(n[0], "{y}-{m}-{d}") : r0 = 0;
  const r = 3600 * 1e3 * 24 * e;
  return (t) => {
    if (r0 === 0)
      return t.getTime() > Date.now() || t.getTime() < r0;
    {
      const i = new Date(r0).getTime() + r - 864e5, a = new Date(r0).getTime() - r;
      return i >= Date.now() ? t.getTime() > Date.now() || t.getTime() < a : t.getTime() > i || t.getTime() < a;
    }
  };
}
const _n = {
  numCheck: Ql,
  numBlurCheck: ec,
  numEnCheck: tc,
  numDxsCheck: Jl,
  downloadBlobData: nc,
  pickerOptions: rc,
  pickerOptionsDynamic: ic
};
function ac(e, n = {
  name: "name",
  key: "val"
}) {
  if (e.length === 0)
    return e;
  const r = {
    name: "name",
    key: "val"
  };
  for (let a in n)
    r[a] = n[a];
  let t = 0;
  if (e.forEach((a) => {
    a.proportion = 0, t += Number(a[r.key]);
  }), t > 0) {
    let a = {
      value: 0,
      index: -1
    };
    e.forEach((o, l) => {
      o[r.key] = o[r.key] == 0 ? null : o[r.key];
      const c = de.numberChangeDecimal(Number(o[r.key]) / t * 100), s = Number(c);
      Number(a.value) < s && (a = {
        value: c,
        index: l
      }), o.proportion = s === 0 && Number(o[r.key]) > 0 ? 0.01 : s;
    }), e[a.index].proportion = 100, e.forEach((o, l) => {
      l !== a.index && (e[a.index].proportion = de.numberChangeDecimal(e[a.index].proportion - Number(o.proportion)));
    });
  }
  const i = [];
  return e.forEach((a) => {
    i.push({
      name: a[r.name],
      value: a[r.key],
      proportion: a.proportion + "%"
    });
  }), i;
}
const vo = {
  pieChange: ac
};
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function sc(e) {
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
    var i = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(r, t, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), r;
}
var mo = { exports: {} };
function lc(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Kn = { exports: {} };
const cc = {}, uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cc
}, Symbol.toStringTag, { value: "Module" })), fc = /* @__PURE__ */ sc(uc);
var Ci;
function se() {
  return Ci || (Ci = 1, function(e, n) {
    (function(r, t) {
      e.exports = t();
    })(re, function() {
      var r = r || function(t, i) {
        var a;
        if (typeof window < "u" && window.crypto && (a = window.crypto), typeof self < "u" && self.crypto && (a = self.crypto), typeof globalThis < "u" && globalThis.crypto && (a = globalThis.crypto), !a && typeof window < "u" && window.msCrypto && (a = window.msCrypto), !a && typeof re < "u" && re.crypto && (a = re.crypto), !a && typeof lc == "function")
          try {
            a = fc;
          } catch {
          }
        var o = function() {
          if (a) {
            if (typeof a.getRandomValues == "function")
              try {
                return a.getRandomValues(new Uint32Array(1))[0];
              } catch {
              }
            if (typeof a.randomBytes == "function")
              try {
                return a.randomBytes(4).readInt32LE();
              } catch {
              }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        }, l = Object.create || function() {
          function b() {
          }
          return function(C) {
            var E;
            return b.prototype = C, E = new b(), b.prototype = null, E;
          };
        }(), c = {}, s = c.lib = {}, f = s.Base = function() {
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
            extend: function(b) {
              var C = l(this);
              return b && C.mixIn(b), (!C.hasOwnProperty("init") || this.init === C.init) && (C.init = function() {
                C.$super.init.apply(this, arguments);
              }), C.init.prototype = C, C.$super = this, C;
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
              var b = this.extend();
              return b.init.apply(b, arguments), b;
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
            mixIn: function(b) {
              for (var C in b)
                b.hasOwnProperty(C) && (this[C] = b[C]);
              b.hasOwnProperty("toString") && (this.toString = b.toString);
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
        }(), v = s.WordArray = f.extend({
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
          init: function(b, C) {
            b = this.words = b || [], C != i ? this.sigBytes = C : this.sigBytes = b.length * 4;
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
          toString: function(b) {
            return (b || g).stringify(this);
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
          concat: function(b) {
            var C = this.words, E = b.words, T = this.sigBytes, A = b.sigBytes;
            if (this.clamp(), T % 4)
              for (var S = 0; S < A; S++) {
                var k = E[S >>> 2] >>> 24 - S % 4 * 8 & 255;
                C[T + S >>> 2] |= k << 24 - (T + S) % 4 * 8;
              }
            else
              for (var L = 0; L < A; L += 4)
                C[T + L >>> 2] = E[L >>> 2];
            return this.sigBytes += A, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var b = this.words, C = this.sigBytes;
            b[C >>> 2] &= 4294967295 << 32 - C % 4 * 8, b.length = t.ceil(C / 4);
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
            var b = f.clone.call(this);
            return b.words = this.words.slice(0), b;
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
          random: function(b) {
            for (var C = [], E = 0; E < b; E += 4)
              C.push(o());
            return new v.init(C, b);
          }
        }), h = c.enc = {}, g = h.Hex = {
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
          stringify: function(b) {
            for (var C = b.words, E = b.sigBytes, T = [], A = 0; A < E; A++) {
              var S = C[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              T.push((S >>> 4).toString(16)), T.push((S & 15).toString(16));
            }
            return T.join("");
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
          parse: function(b) {
            for (var C = b.length, E = [], T = 0; T < C; T += 2)
              E[T >>> 3] |= parseInt(b.substr(T, 2), 16) << 24 - T % 8 * 4;
            return new v.init(E, C / 2);
          }
        }, d = h.Latin1 = {
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
          stringify: function(b) {
            for (var C = b.words, E = b.sigBytes, T = [], A = 0; A < E; A++) {
              var S = C[A >>> 2] >>> 24 - A % 4 * 8 & 255;
              T.push(String.fromCharCode(S));
            }
            return T.join("");
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
          parse: function(b) {
            for (var C = b.length, E = [], T = 0; T < C; T++)
              E[T >>> 2] |= (b.charCodeAt(T) & 255) << 24 - T % 4 * 8;
            return new v.init(E, C);
          }
        }, p = h.Utf8 = {
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
          stringify: function(b) {
            try {
              return decodeURIComponent(escape(d.stringify(b)));
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
          parse: function(b) {
            return d.parse(unescape(encodeURIComponent(b)));
          }
        }, y = s.BufferedBlockAlgorithm = f.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new v.init(), this._nDataBytes = 0;
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
          _append: function(b) {
            typeof b == "string" && (b = p.parse(b)), this._data.concat(b), this._nDataBytes += b.sigBytes;
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
          _process: function(b) {
            var C, E = this._data, T = E.words, A = E.sigBytes, S = this.blockSize, k = S * 4, L = A / k;
            b ? L = t.ceil(L) : L = t.max((L | 0) - this._minBufferSize, 0);
            var F = L * S, B = t.min(F * 4, A);
            if (F) {
              for (var I = 0; I < F; I += S)
                this._doProcessBlock(T, I);
              C = T.splice(0, F), E.sigBytes -= B;
            }
            return new v.init(C, B);
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
            var b = f.clone.call(this);
            return b._data = this._data.clone(), b;
          },
          _minBufferSize: 0
        });
        s.Hasher = y.extend({
          /**
           * Configuration options.
           */
          cfg: f.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(b) {
            this.cfg = this.cfg.extend(b), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            y.reset.call(this), this._doReset();
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
          update: function(b) {
            return this._append(b), this._process(), this;
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
          finalize: function(b) {
            b && this._append(b);
            var C = this._doFinalize();
            return C;
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
          _createHelper: function(b) {
            return function(C, E) {
              return new b.init(E).finalize(C);
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
          _createHmacHelper: function(b) {
            return function(C, E) {
              return new _.HMAC.init(b, E).finalize(C);
            };
          }
        });
        var _ = c.algo = {};
        return c;
      }(Math);
      return r;
    });
  }(Kn)), Kn.exports;
}
var Wn = { exports: {} }, Ei;
function Bn() {
  return Ei || (Ei = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      return function(t) {
        var i = r, a = i.lib, o = a.Base, l = a.WordArray, c = i.x64 = {};
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
          init: function(s, f) {
            this.high = s, this.low = f;
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
          init: function(s, f) {
            s = this.words = s || [], f != t ? this.sigBytes = f : this.sigBytes = s.length * 8;
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
            for (var s = this.words, f = s.length, v = [], h = 0; h < f; h++) {
              var g = s[h];
              v.push(g.high), v.push(g.low);
            }
            return l.create(v, this.sigBytes);
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
            for (var s = o.clone.call(this), f = s.words = this.words.slice(0), v = f.length, h = 0; h < v; h++)
              f[h] = f[h].clone();
            return s;
          }
        });
      }(), r;
    });
  }(Wn)), Wn.exports;
}
var jn = { exports: {} }, _i;
function dc() {
  return _i || (_i = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var t = r, i = t.lib, a = i.WordArray, o = a.init, l = a.init = function(c) {
            if (c instanceof ArrayBuffer && (c = new Uint8Array(c)), (c instanceof Int8Array || typeof Uint8ClampedArray < "u" && c instanceof Uint8ClampedArray || c instanceof Int16Array || c instanceof Uint16Array || c instanceof Int32Array || c instanceof Uint32Array || c instanceof Float32Array || c instanceof Float64Array) && (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)), c instanceof Uint8Array) {
              for (var s = c.byteLength, f = [], v = 0; v < s; v++)
                f[v >>> 2] |= c[v] << 24 - v % 4 * 8;
              o.call(this, f, s);
            } else
              o.apply(this, arguments);
          };
          l.prototype = a;
        }
      }(), r.lib.WordArray;
    });
  }(jn)), jn.exports;
}
var Gn = { exports: {} }, Bi;
function xc() {
  return Bi || (Bi = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.WordArray, o = t.enc;
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
            for (var s = c.words, f = c.sigBytes, v = [], h = 0; h < f; h += 2) {
              var g = s[h >>> 2] >>> 16 - h % 4 * 8 & 65535;
              v.push(String.fromCharCode(g));
            }
            return v.join("");
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
            for (var s = c.length, f = [], v = 0; v < s; v++)
              f[v >>> 1] |= c.charCodeAt(v) << 16 - v % 2 * 16;
            return a.create(f, s * 2);
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
            for (var s = c.words, f = c.sigBytes, v = [], h = 0; h < f; h += 2) {
              var g = l(s[h >>> 2] >>> 16 - h % 4 * 8 & 65535);
              v.push(String.fromCharCode(g));
            }
            return v.join("");
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
            for (var s = c.length, f = [], v = 0; v < s; v++)
              f[v >>> 1] |= l(c.charCodeAt(v) << 16 - v % 2 * 16);
            return a.create(f, s * 2);
          }
        };
        function l(c) {
          return c << 8 & 4278255360 | c >>> 8 & 16711935;
        }
      }(), r.enc.Utf16;
    });
  }(Gn)), Gn.exports;
}
var Xn = { exports: {} }, wi;
function Jt() {
  return wi || (wi = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.WordArray, o = t.enc;
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
            var s = c.words, f = c.sigBytes, v = this._map;
            c.clamp();
            for (var h = [], g = 0; g < f; g += 3)
              for (var d = s[g >>> 2] >>> 24 - g % 4 * 8 & 255, p = s[g + 1 >>> 2] >>> 24 - (g + 1) % 4 * 8 & 255, y = s[g + 2 >>> 2] >>> 24 - (g + 2) % 4 * 8 & 255, _ = d << 16 | p << 8 | y, b = 0; b < 4 && g + b * 0.75 < f; b++)
                h.push(v.charAt(_ >>> 6 * (3 - b) & 63));
            var C = v.charAt(64);
            if (C)
              for (; h.length % 4; )
                h.push(C);
            return h.join("");
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
            var s = c.length, f = this._map, v = this._reverseMap;
            if (!v) {
              v = this._reverseMap = [];
              for (var h = 0; h < f.length; h++)
                v[f.charCodeAt(h)] = h;
            }
            var g = f.charAt(64);
            if (g) {
              var d = c.indexOf(g);
              d !== -1 && (s = d);
            }
            return l(c, s, v);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function l(c, s, f) {
          for (var v = [], h = 0, g = 0; g < s; g++)
            if (g % 4) {
              var d = f[c.charCodeAt(g - 1)] << g % 4 * 2, p = f[c.charCodeAt(g)] >>> 6 - g % 4 * 2, y = d | p;
              v[h >>> 2] |= y << 24 - h % 4 * 8, h++;
            }
          return a.create(v, h);
        }
      }(), r.enc.Base64;
    });
  }(Xn)), Xn.exports;
}
var Zn = { exports: {} }, Di;
function hc() {
  return Di || (Di = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.WordArray, o = t.enc;
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
            var f = c.words, v = c.sigBytes, h = s ? this._safe_map : this._map;
            c.clamp();
            for (var g = [], d = 0; d < v; d += 3)
              for (var p = f[d >>> 2] >>> 24 - d % 4 * 8 & 255, y = f[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, _ = f[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, b = p << 16 | y << 8 | _, C = 0; C < 4 && d + C * 0.75 < v; C++)
                g.push(h.charAt(b >>> 6 * (3 - C) & 63));
            var E = h.charAt(64);
            if (E)
              for (; g.length % 4; )
                g.push(E);
            return g.join("");
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
            var f = c.length, v = s ? this._safe_map : this._map, h = this._reverseMap;
            if (!h) {
              h = this._reverseMap = [];
              for (var g = 0; g < v.length; g++)
                h[v.charCodeAt(g)] = g;
            }
            var d = v.charAt(64);
            if (d) {
              var p = c.indexOf(d);
              p !== -1 && (f = p);
            }
            return l(c, f, h);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function l(c, s, f) {
          for (var v = [], h = 0, g = 0; g < s; g++)
            if (g % 4) {
              var d = f[c.charCodeAt(g - 1)] << g % 4 * 2, p = f[c.charCodeAt(g)] >>> 6 - g % 4 * 2, y = d | p;
              v[h >>> 2] |= y << 24 - h % 4 * 8, h++;
            }
          return a.create(v, h);
        }
      }(), r.enc.Base64url;
    });
  }(Zn)), Zn.exports;
}
var Jn = { exports: {} }, Fi;
function Qt() {
  return Fi || (Fi = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      return function(t) {
        var i = r, a = i.lib, o = a.WordArray, l = a.Hasher, c = i.algo, s = [];
        (function() {
          for (var p = 0; p < 64; p++)
            s[p] = t.abs(t.sin(p + 1)) * 4294967296 | 0;
        })();
        var f = c.MD5 = l.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(p, y) {
            for (var _ = 0; _ < 16; _++) {
              var b = y + _, C = p[b];
              p[b] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
            }
            var E = this._hash.words, T = p[y + 0], A = p[y + 1], S = p[y + 2], k = p[y + 3], L = p[y + 4], F = p[y + 5], B = p[y + 6], I = p[y + 7], P = p[y + 8], W = p[y + 9], G = p[y + 10], Y = p[y + 11], X = p[y + 12], Z = p[y + 13], oe = p[y + 14], ie = p[y + 15], M = E[0], O = E[1], $ = E[2], z = E[3];
            M = v(M, O, $, z, T, 7, s[0]), z = v(z, M, O, $, A, 12, s[1]), $ = v($, z, M, O, S, 17, s[2]), O = v(O, $, z, M, k, 22, s[3]), M = v(M, O, $, z, L, 7, s[4]), z = v(z, M, O, $, F, 12, s[5]), $ = v($, z, M, O, B, 17, s[6]), O = v(O, $, z, M, I, 22, s[7]), M = v(M, O, $, z, P, 7, s[8]), z = v(z, M, O, $, W, 12, s[9]), $ = v($, z, M, O, G, 17, s[10]), O = v(O, $, z, M, Y, 22, s[11]), M = v(M, O, $, z, X, 7, s[12]), z = v(z, M, O, $, Z, 12, s[13]), $ = v($, z, M, O, oe, 17, s[14]), O = v(O, $, z, M, ie, 22, s[15]), M = h(M, O, $, z, A, 5, s[16]), z = h(z, M, O, $, B, 9, s[17]), $ = h($, z, M, O, Y, 14, s[18]), O = h(O, $, z, M, T, 20, s[19]), M = h(M, O, $, z, F, 5, s[20]), z = h(z, M, O, $, G, 9, s[21]), $ = h($, z, M, O, ie, 14, s[22]), O = h(O, $, z, M, L, 20, s[23]), M = h(M, O, $, z, W, 5, s[24]), z = h(z, M, O, $, oe, 9, s[25]), $ = h($, z, M, O, k, 14, s[26]), O = h(O, $, z, M, P, 20, s[27]), M = h(M, O, $, z, Z, 5, s[28]), z = h(z, M, O, $, S, 9, s[29]), $ = h($, z, M, O, I, 14, s[30]), O = h(O, $, z, M, X, 20, s[31]), M = g(M, O, $, z, F, 4, s[32]), z = g(z, M, O, $, P, 11, s[33]), $ = g($, z, M, O, Y, 16, s[34]), O = g(O, $, z, M, oe, 23, s[35]), M = g(M, O, $, z, A, 4, s[36]), z = g(z, M, O, $, L, 11, s[37]), $ = g($, z, M, O, I, 16, s[38]), O = g(O, $, z, M, G, 23, s[39]), M = g(M, O, $, z, Z, 4, s[40]), z = g(z, M, O, $, T, 11, s[41]), $ = g($, z, M, O, k, 16, s[42]), O = g(O, $, z, M, B, 23, s[43]), M = g(M, O, $, z, W, 4, s[44]), z = g(z, M, O, $, X, 11, s[45]), $ = g($, z, M, O, ie, 16, s[46]), O = g(O, $, z, M, S, 23, s[47]), M = d(M, O, $, z, T, 6, s[48]), z = d(z, M, O, $, I, 10, s[49]), $ = d($, z, M, O, oe, 15, s[50]), O = d(O, $, z, M, F, 21, s[51]), M = d(M, O, $, z, X, 6, s[52]), z = d(z, M, O, $, k, 10, s[53]), $ = d($, z, M, O, G, 15, s[54]), O = d(O, $, z, M, A, 21, s[55]), M = d(M, O, $, z, P, 6, s[56]), z = d(z, M, O, $, ie, 10, s[57]), $ = d($, z, M, O, B, 15, s[58]), O = d(O, $, z, M, Z, 21, s[59]), M = d(M, O, $, z, L, 6, s[60]), z = d(z, M, O, $, Y, 10, s[61]), $ = d($, z, M, O, S, 15, s[62]), O = d(O, $, z, M, W, 21, s[63]), E[0] = E[0] + M | 0, E[1] = E[1] + O | 0, E[2] = E[2] + $ | 0, E[3] = E[3] + z | 0;
          },
          _doFinalize: function() {
            var p = this._data, y = p.words, _ = this._nDataBytes * 8, b = p.sigBytes * 8;
            y[b >>> 5] |= 128 << 24 - b % 32;
            var C = t.floor(_ / 4294967296), E = _;
            y[(b + 64 >>> 9 << 4) + 15] = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, y[(b + 64 >>> 9 << 4) + 14] = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, p.sigBytes = (y.length + 1) * 4, this._process();
            for (var T = this._hash, A = T.words, S = 0; S < 4; S++) {
              var k = A[S];
              A[S] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360;
            }
            return T;
          },
          clone: function() {
            var p = l.clone.call(this);
            return p._hash = this._hash.clone(), p;
          }
        });
        function v(p, y, _, b, C, E, T) {
          var A = p + (y & _ | ~y & b) + C + T;
          return (A << E | A >>> 32 - E) + y;
        }
        function h(p, y, _, b, C, E, T) {
          var A = p + (y & b | _ & ~b) + C + T;
          return (A << E | A >>> 32 - E) + y;
        }
        function g(p, y, _, b, C, E, T) {
          var A = p + (y ^ _ ^ b) + C + T;
          return (A << E | A >>> 32 - E) + y;
        }
        function d(p, y, _, b, C, E, T) {
          var A = p + (_ ^ (y | ~b)) + C + T;
          return (A << E | A >>> 32 - E) + y;
        }
        i.MD5 = l._createHelper(f), i.HmacMD5 = l._createHmacHelper(f);
      }(Math), r.MD5;
    });
  }(Jn)), Jn.exports;
}
var Qn = { exports: {} }, Ai;
function go() {
  return Ai || (Ai = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.WordArray, o = i.Hasher, l = t.algo, c = [], s = l.SHA1 = o.extend({
          _doReset: function() {
            this._hash = new a.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(f, v) {
            for (var h = this._hash.words, g = h[0], d = h[1], p = h[2], y = h[3], _ = h[4], b = 0; b < 80; b++) {
              if (b < 16)
                c[b] = f[v + b] | 0;
              else {
                var C = c[b - 3] ^ c[b - 8] ^ c[b - 14] ^ c[b - 16];
                c[b] = C << 1 | C >>> 31;
              }
              var E = (g << 5 | g >>> 27) + _ + c[b];
              b < 20 ? E += (d & p | ~d & y) + 1518500249 : b < 40 ? E += (d ^ p ^ y) + 1859775393 : b < 60 ? E += (d & p | d & y | p & y) - 1894007588 : E += (d ^ p ^ y) - 899497514, _ = y, y = p, p = d << 30 | d >>> 2, d = g, g = E;
            }
            h[0] = h[0] + g | 0, h[1] = h[1] + d | 0, h[2] = h[2] + p | 0, h[3] = h[3] + y | 0, h[4] = h[4] + _ | 0;
          },
          _doFinalize: function() {
            var f = this._data, v = f.words, h = this._nDataBytes * 8, g = f.sigBytes * 8;
            return v[g >>> 5] |= 128 << 24 - g % 32, v[(g + 64 >>> 9 << 4) + 14] = Math.floor(h / 4294967296), v[(g + 64 >>> 9 << 4) + 15] = h, f.sigBytes = v.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var f = o.clone.call(this);
            return f._hash = this._hash.clone(), f;
          }
        });
        t.SHA1 = o._createHelper(s), t.HmacSHA1 = o._createHmacHelper(s);
      }(), r.SHA1;
    });
  }(Qn)), Qn.exports;
}
var er = { exports: {} }, Ti;
function Qr() {
  return Ti || (Ti = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      return function(t) {
        var i = r, a = i.lib, o = a.WordArray, l = a.Hasher, c = i.algo, s = [], f = [];
        (function() {
          function g(_) {
            for (var b = t.sqrt(_), C = 2; C <= b; C++)
              if (!(_ % C))
                return !1;
            return !0;
          }
          function d(_) {
            return (_ - (_ | 0)) * 4294967296 | 0;
          }
          for (var p = 2, y = 0; y < 64; )
            g(p) && (y < 8 && (s[y] = d(t.pow(p, 1 / 2))), f[y] = d(t.pow(p, 1 / 3)), y++), p++;
        })();
        var v = [], h = c.SHA256 = l.extend({
          _doReset: function() {
            this._hash = new o.init(s.slice(0));
          },
          _doProcessBlock: function(g, d) {
            for (var p = this._hash.words, y = p[0], _ = p[1], b = p[2], C = p[3], E = p[4], T = p[5], A = p[6], S = p[7], k = 0; k < 64; k++) {
              if (k < 16)
                v[k] = g[d + k] | 0;
              else {
                var L = v[k - 15], F = (L << 25 | L >>> 7) ^ (L << 14 | L >>> 18) ^ L >>> 3, B = v[k - 2], I = (B << 15 | B >>> 17) ^ (B << 13 | B >>> 19) ^ B >>> 10;
                v[k] = F + v[k - 7] + I + v[k - 16];
              }
              var P = E & T ^ ~E & A, W = y & _ ^ y & b ^ _ & b, G = (y << 30 | y >>> 2) ^ (y << 19 | y >>> 13) ^ (y << 10 | y >>> 22), Y = (E << 26 | E >>> 6) ^ (E << 21 | E >>> 11) ^ (E << 7 | E >>> 25), X = S + Y + P + f[k] + v[k], Z = G + W;
              S = A, A = T, T = E, E = C + X | 0, C = b, b = _, _ = y, y = X + Z | 0;
            }
            p[0] = p[0] + y | 0, p[1] = p[1] + _ | 0, p[2] = p[2] + b | 0, p[3] = p[3] + C | 0, p[4] = p[4] + E | 0, p[5] = p[5] + T | 0, p[6] = p[6] + A | 0, p[7] = p[7] + S | 0;
          },
          _doFinalize: function() {
            var g = this._data, d = g.words, p = this._nDataBytes * 8, y = g.sigBytes * 8;
            return d[y >>> 5] |= 128 << 24 - y % 32, d[(y + 64 >>> 9 << 4) + 14] = t.floor(p / 4294967296), d[(y + 64 >>> 9 << 4) + 15] = p, g.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var g = l.clone.call(this);
            return g._hash = this._hash.clone(), g;
          }
        });
        i.SHA256 = l._createHelper(h), i.HmacSHA256 = l._createHmacHelper(h);
      }(Math), r.SHA256;
    });
  }(er)), er.exports;
}
var tr = { exports: {} }, Si;
function pc() {
  return Si || (Si = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Qr());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.WordArray, o = t.algo, l = o.SHA256, c = o.SHA224 = l.extend({
          _doReset: function() {
            this._hash = new a.init([
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
  }(tr)), tr.exports;
}
var nr = { exports: {} }, ki;
function yo() {
  return ki || (ki = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Bn());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.Hasher, o = t.x64, l = o.Word, c = o.WordArray, s = t.algo;
        function f() {
          return l.create.apply(l, arguments);
        }
        var v = [
          f(1116352408, 3609767458),
          f(1899447441, 602891725),
          f(3049323471, 3964484399),
          f(3921009573, 2173295548),
          f(961987163, 4081628472),
          f(1508970993, 3053834265),
          f(2453635748, 2937671579),
          f(2870763221, 3664609560),
          f(3624381080, 2734883394),
          f(310598401, 1164996542),
          f(607225278, 1323610764),
          f(1426881987, 3590304994),
          f(1925078388, 4068182383),
          f(2162078206, 991336113),
          f(2614888103, 633803317),
          f(3248222580, 3479774868),
          f(3835390401, 2666613458),
          f(4022224774, 944711139),
          f(264347078, 2341262773),
          f(604807628, 2007800933),
          f(770255983, 1495990901),
          f(1249150122, 1856431235),
          f(1555081692, 3175218132),
          f(1996064986, 2198950837),
          f(2554220882, 3999719339),
          f(2821834349, 766784016),
          f(2952996808, 2566594879),
          f(3210313671, 3203337956),
          f(3336571891, 1034457026),
          f(3584528711, 2466948901),
          f(113926993, 3758326383),
          f(338241895, 168717936),
          f(666307205, 1188179964),
          f(773529912, 1546045734),
          f(1294757372, 1522805485),
          f(1396182291, 2643833823),
          f(1695183700, 2343527390),
          f(1986661051, 1014477480),
          f(2177026350, 1206759142),
          f(2456956037, 344077627),
          f(2730485921, 1290863460),
          f(2820302411, 3158454273),
          f(3259730800, 3505952657),
          f(3345764771, 106217008),
          f(3516065817, 3606008344),
          f(3600352804, 1432725776),
          f(4094571909, 1467031594),
          f(275423344, 851169720),
          f(430227734, 3100823752),
          f(506948616, 1363258195),
          f(659060556, 3750685593),
          f(883997877, 3785050280),
          f(958139571, 3318307427),
          f(1322822218, 3812723403),
          f(1537002063, 2003034995),
          f(1747873779, 3602036899),
          f(1955562222, 1575990012),
          f(2024104815, 1125592928),
          f(2227730452, 2716904306),
          f(2361852424, 442776044),
          f(2428436474, 593698344),
          f(2756734187, 3733110249),
          f(3204031479, 2999351573),
          f(3329325298, 3815920427),
          f(3391569614, 3928383900),
          f(3515267271, 566280711),
          f(3940187606, 3454069534),
          f(4118630271, 4000239992),
          f(116418474, 1914138554),
          f(174292421, 2731055270),
          f(289380356, 3203993006),
          f(460393269, 320620315),
          f(685471733, 587496836),
          f(852142971, 1086792851),
          f(1017036298, 365543100),
          f(1126000580, 2618297676),
          f(1288033470, 3409855158),
          f(1501505948, 4234509866),
          f(1607167915, 987167468),
          f(1816402316, 1246189591)
        ], h = [];
        (function() {
          for (var d = 0; d < 80; d++)
            h[d] = f();
        })();
        var g = s.SHA512 = a.extend({
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
          _doProcessBlock: function(d, p) {
            for (var y = this._hash.words, _ = y[0], b = y[1], C = y[2], E = y[3], T = y[4], A = y[5], S = y[6], k = y[7], L = _.high, F = _.low, B = b.high, I = b.low, P = C.high, W = C.low, G = E.high, Y = E.low, X = T.high, Z = T.low, oe = A.high, ie = A.low, M = S.high, O = S.low, $ = k.high, z = k.low, fe = L, le = F, we = B, te = I, ge = P, Ge = W, Bt = G, ot = Y, Ae = X, Ce = Z, pt = oe, vt = ie, wt = M, mt = O, Nt = $, gt = z, Te = 0; Te < 80; Te++) {
              var Se, Ue, V = h[Te];
              if (Te < 16)
                Ue = V.high = d[p + Te * 2] | 0, Se = V.low = d[p + Te * 2 + 1] | 0;
              else {
                var ce = h[Te - 15], Me = ce.high, st = ce.low, t0 = (Me >>> 1 | st << 31) ^ (Me >>> 8 | st << 24) ^ Me >>> 7, R0 = (st >>> 1 | Me << 31) ^ (st >>> 8 | Me << 24) ^ (st >>> 7 | Me << 25), O0 = h[Te - 2], Dt = O0.high, Vt = O0.low, Sn = (Dt >>> 19 | Vt << 13) ^ (Dt << 3 | Vt >>> 29) ^ Dt >>> 6, n0 = (Vt >>> 19 | Dt << 13) ^ (Vt << 3 | Dt >>> 29) ^ (Vt >>> 6 | Dt << 26), z0 = h[Te - 7], L0 = z0.high, kn = z0.low, v0 = h[Te - 16], In = v0.high, H0 = v0.low;
                Se = R0 + kn, Ue = t0 + L0 + (Se >>> 0 < R0 >>> 0 ? 1 : 0), Se = Se + n0, Ue = Ue + Sn + (Se >>> 0 < n0 >>> 0 ? 1 : 0), Se = Se + H0, Ue = Ue + In + (Se >>> 0 < H0 >>> 0 ? 1 : 0), V.high = Ue, V.low = Se;
              }
              var Pn = Ae & pt ^ ~Ae & wt, $0 = Ce & vt ^ ~Ce & mt, Mn = fe & we ^ fe & ge ^ we & ge, Rn = le & te ^ le & Ge ^ te & Ge, On = (fe >>> 28 | le << 4) ^ (fe << 30 | le >>> 2) ^ (fe << 25 | le >>> 7), N0 = (le >>> 28 | fe << 4) ^ (le << 30 | fe >>> 2) ^ (le << 25 | fe >>> 7), zn = (Ae >>> 14 | Ce << 18) ^ (Ae >>> 18 | Ce << 14) ^ (Ae << 23 | Ce >>> 9), Ln = (Ce >>> 14 | Ae << 18) ^ (Ce >>> 18 | Ae << 14) ^ (Ce << 23 | Ae >>> 9), V0 = v[Te], Hn = V0.high, q0 = V0.low, Re = gt + Ln, lt = Nt + zn + (Re >>> 0 < gt >>> 0 ? 1 : 0), Re = Re + $0, lt = lt + Pn + (Re >>> 0 < $0 >>> 0 ? 1 : 0), Re = Re + q0, lt = lt + Hn + (Re >>> 0 < q0 >>> 0 ? 1 : 0), Re = Re + Se, lt = lt + Ue + (Re >>> 0 < Se >>> 0 ? 1 : 0), U0 = N0 + Rn, $n = On + Mn + (U0 >>> 0 < N0 >>> 0 ? 1 : 0);
              Nt = wt, gt = mt, wt = pt, mt = vt, pt = Ae, vt = Ce, Ce = ot + Re | 0, Ae = Bt + lt + (Ce >>> 0 < ot >>> 0 ? 1 : 0) | 0, Bt = ge, ot = Ge, ge = we, Ge = te, we = fe, te = le, le = Re + U0 | 0, fe = lt + $n + (le >>> 0 < Re >>> 0 ? 1 : 0) | 0;
            }
            F = _.low = F + le, _.high = L + fe + (F >>> 0 < le >>> 0 ? 1 : 0), I = b.low = I + te, b.high = B + we + (I >>> 0 < te >>> 0 ? 1 : 0), W = C.low = W + Ge, C.high = P + ge + (W >>> 0 < Ge >>> 0 ? 1 : 0), Y = E.low = Y + ot, E.high = G + Bt + (Y >>> 0 < ot >>> 0 ? 1 : 0), Z = T.low = Z + Ce, T.high = X + Ae + (Z >>> 0 < Ce >>> 0 ? 1 : 0), ie = A.low = ie + vt, A.high = oe + pt + (ie >>> 0 < vt >>> 0 ? 1 : 0), O = S.low = O + mt, S.high = M + wt + (O >>> 0 < mt >>> 0 ? 1 : 0), z = k.low = z + gt, k.high = $ + Nt + (z >>> 0 < gt >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var d = this._data, p = d.words, y = this._nDataBytes * 8, _ = d.sigBytes * 8;
            p[_ >>> 5] |= 128 << 24 - _ % 32, p[(_ + 128 >>> 10 << 5) + 30] = Math.floor(y / 4294967296), p[(_ + 128 >>> 10 << 5) + 31] = y, d.sigBytes = p.length * 4, this._process();
            var b = this._hash.toX32();
            return b;
          },
          clone: function() {
            var d = a.clone.call(this);
            return d._hash = this._hash.clone(), d;
          },
          blockSize: 1024 / 32
        });
        t.SHA512 = a._createHelper(g), t.HmacSHA512 = a._createHmacHelper(g);
      }(), r.SHA512;
    });
  }(nr)), nr.exports;
}
var rr = { exports: {} }, Ii;
function vc() {
  return Ii || (Ii = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Bn(), yo());
    })(re, function(r) {
      return function() {
        var t = r, i = t.x64, a = i.Word, o = i.WordArray, l = t.algo, c = l.SHA512, s = l.SHA384 = c.extend({
          _doReset: function() {
            this._hash = new o.init([
              new a.init(3418070365, 3238371032),
              new a.init(1654270250, 914150663),
              new a.init(2438529370, 812702999),
              new a.init(355462360, 4144912697),
              new a.init(1731405415, 4290775857),
              new a.init(2394180231, 1750603025),
              new a.init(3675008525, 1694076839),
              new a.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var f = c._doFinalize.call(this);
            return f.sigBytes -= 16, f;
          }
        });
        t.SHA384 = c._createHelper(s), t.HmacSHA384 = c._createHmacHelper(s);
      }(), r.SHA384;
    });
  }(rr)), rr.exports;
}
var ir = { exports: {} }, Pi;
function mc() {
  return Pi || (Pi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Bn());
    })(re, function(r) {
      return function(t) {
        var i = r, a = i.lib, o = a.WordArray, l = a.Hasher, c = i.x64, s = c.Word, f = i.algo, v = [], h = [], g = [];
        (function() {
          for (var y = 1, _ = 0, b = 0; b < 24; b++) {
            v[y + 5 * _] = (b + 1) * (b + 2) / 2 % 64;
            var C = _ % 5, E = (2 * y + 3 * _) % 5;
            y = C, _ = E;
          }
          for (var y = 0; y < 5; y++)
            for (var _ = 0; _ < 5; _++)
              h[y + 5 * _] = _ + (2 * y + 3 * _) % 5 * 5;
          for (var T = 1, A = 0; A < 24; A++) {
            for (var S = 0, k = 0, L = 0; L < 7; L++) {
              if (T & 1) {
                var F = (1 << L) - 1;
                F < 32 ? k ^= 1 << F : S ^= 1 << F - 32;
              }
              T & 128 ? T = T << 1 ^ 113 : T <<= 1;
            }
            g[A] = s.create(S, k);
          }
        })();
        var d = [];
        (function() {
          for (var y = 0; y < 25; y++)
            d[y] = s.create();
        })();
        var p = f.SHA3 = l.extend({
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
            for (var y = this._state = [], _ = 0; _ < 25; _++)
              y[_] = new s.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(y, _) {
            for (var b = this._state, C = this.blockSize / 2, E = 0; E < C; E++) {
              var T = y[_ + 2 * E], A = y[_ + 2 * E + 1];
              T = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360;
              var S = b[E];
              S.high ^= A, S.low ^= T;
            }
            for (var k = 0; k < 24; k++) {
              for (var L = 0; L < 5; L++) {
                for (var F = 0, B = 0, I = 0; I < 5; I++) {
                  var S = b[L + 5 * I];
                  F ^= S.high, B ^= S.low;
                }
                var P = d[L];
                P.high = F, P.low = B;
              }
              for (var L = 0; L < 5; L++)
                for (var W = d[(L + 4) % 5], G = d[(L + 1) % 5], Y = G.high, X = G.low, F = W.high ^ (Y << 1 | X >>> 31), B = W.low ^ (X << 1 | Y >>> 31), I = 0; I < 5; I++) {
                  var S = b[L + 5 * I];
                  S.high ^= F, S.low ^= B;
                }
              for (var Z = 1; Z < 25; Z++) {
                var F, B, S = b[Z], oe = S.high, ie = S.low, M = v[Z];
                M < 32 ? (F = oe << M | ie >>> 32 - M, B = ie << M | oe >>> 32 - M) : (F = ie << M - 32 | oe >>> 64 - M, B = oe << M - 32 | ie >>> 64 - M);
                var O = d[h[Z]];
                O.high = F, O.low = B;
              }
              var $ = d[0], z = b[0];
              $.high = z.high, $.low = z.low;
              for (var L = 0; L < 5; L++)
                for (var I = 0; I < 5; I++) {
                  var Z = L + 5 * I, S = b[Z], fe = d[Z], le = d[(L + 1) % 5 + 5 * I], we = d[(L + 2) % 5 + 5 * I];
                  S.high = fe.high ^ ~le.high & we.high, S.low = fe.low ^ ~le.low & we.low;
                }
              var S = b[0], te = g[k];
              S.high ^= te.high, S.low ^= te.low;
            }
          },
          _doFinalize: function() {
            var y = this._data, _ = y.words;
            this._nDataBytes * 8;
            var b = y.sigBytes * 8, C = this.blockSize * 32;
            _[b >>> 5] |= 1 << 24 - b % 32, _[(t.ceil((b + 1) / C) * C >>> 5) - 1] |= 128, y.sigBytes = _.length * 4, this._process();
            for (var E = this._state, T = this.cfg.outputLength / 8, A = T / 8, S = [], k = 0; k < A; k++) {
              var L = E[k], F = L.high, B = L.low;
              F = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, B = (B << 8 | B >>> 24) & 16711935 | (B << 24 | B >>> 8) & 4278255360, S.push(B), S.push(F);
            }
            return new o.init(S, T);
          },
          clone: function() {
            for (var y = l.clone.call(this), _ = y._state = this._state.slice(0), b = 0; b < 25; b++)
              _[b] = _[b].clone();
            return y;
          }
        });
        i.SHA3 = l._createHelper(p), i.HmacSHA3 = l._createHmacHelper(p);
      }(Math), r.SHA3;
    });
  }(ir)), ir.exports;
}
var ar = { exports: {} }, Mi;
function gc() {
  return Mi || (Mi = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(t) {
        var i = r, a = i.lib, o = a.WordArray, l = a.Hasher, c = i.algo, s = o.create([
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
        ]), f = o.create([
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
        ]), v = o.create([
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
        ]), h = o.create([
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
        ]), g = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), d = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), p = c.RIPEMD160 = l.extend({
          _doReset: function() {
            this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(A, S) {
            for (var k = 0; k < 16; k++) {
              var L = S + k, F = A[L];
              A[L] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360;
            }
            var B = this._hash.words, I = g.words, P = d.words, W = s.words, G = f.words, Y = v.words, X = h.words, Z, oe, ie, M, O, $, z, fe, le, we;
            $ = Z = B[0], z = oe = B[1], fe = ie = B[2], le = M = B[3], we = O = B[4];
            for (var te, k = 0; k < 80; k += 1)
              te = Z + A[S + W[k]] | 0, k < 16 ? te += y(oe, ie, M) + I[0] : k < 32 ? te += _(oe, ie, M) + I[1] : k < 48 ? te += b(oe, ie, M) + I[2] : k < 64 ? te += C(oe, ie, M) + I[3] : te += E(oe, ie, M) + I[4], te = te | 0, te = T(te, Y[k]), te = te + O | 0, Z = O, O = M, M = T(ie, 10), ie = oe, oe = te, te = $ + A[S + G[k]] | 0, k < 16 ? te += E(z, fe, le) + P[0] : k < 32 ? te += C(z, fe, le) + P[1] : k < 48 ? te += b(z, fe, le) + P[2] : k < 64 ? te += _(z, fe, le) + P[3] : te += y(z, fe, le) + P[4], te = te | 0, te = T(te, X[k]), te = te + we | 0, $ = we, we = le, le = T(fe, 10), fe = z, z = te;
            te = B[1] + ie + le | 0, B[1] = B[2] + M + we | 0, B[2] = B[3] + O + $ | 0, B[3] = B[4] + Z + z | 0, B[4] = B[0] + oe + fe | 0, B[0] = te;
          },
          _doFinalize: function() {
            var A = this._data, S = A.words, k = this._nDataBytes * 8, L = A.sigBytes * 8;
            S[L >>> 5] |= 128 << 24 - L % 32, S[(L + 64 >>> 9 << 4) + 14] = (k << 8 | k >>> 24) & 16711935 | (k << 24 | k >>> 8) & 4278255360, A.sigBytes = (S.length + 1) * 4, this._process();
            for (var F = this._hash, B = F.words, I = 0; I < 5; I++) {
              var P = B[I];
              B[I] = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360;
            }
            return F;
          },
          clone: function() {
            var A = l.clone.call(this);
            return A._hash = this._hash.clone(), A;
          }
        });
        function y(A, S, k) {
          return A ^ S ^ k;
        }
        function _(A, S, k) {
          return A & S | ~A & k;
        }
        function b(A, S, k) {
          return (A | ~S) ^ k;
        }
        function C(A, S, k) {
          return A & k | S & ~k;
        }
        function E(A, S, k) {
          return A ^ (S | ~k);
        }
        function T(A, S) {
          return A << S | A >>> 32 - S;
        }
        i.RIPEMD160 = l._createHelper(p), i.HmacRIPEMD160 = l._createHmacHelper(p);
      }(), r.RIPEMD160;
    });
  }(ar)), ar.exports;
}
var or = { exports: {} }, Ri;
function ei() {
  return Ri || (Ri = 1, function(e, n) {
    (function(r, t) {
      e.exports = t(se());
    })(re, function(r) {
      (function() {
        var t = r, i = t.lib, a = i.Base, o = t.enc, l = o.Utf8, c = t.algo;
        c.HMAC = a.extend({
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
          init: function(s, f) {
            s = this._hasher = new s.init(), typeof f == "string" && (f = l.parse(f));
            var v = s.blockSize, h = v * 4;
            f.sigBytes > h && (f = s.finalize(f)), f.clamp();
            for (var g = this._oKey = f.clone(), d = this._iKey = f.clone(), p = g.words, y = d.words, _ = 0; _ < v; _++)
              p[_] ^= 1549556828, y[_] ^= 909522486;
            g.sigBytes = d.sigBytes = h, this.reset();
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
            var f = this._hasher, v = f.finalize(s);
            f.reset();
            var h = f.finalize(this._oKey.clone().concat(v));
            return h;
          }
        });
      })();
    });
  }(or)), or.exports;
}
var sr = { exports: {} }, Oi;
function yc() {
  return Oi || (Oi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Qr(), ei());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.Base, o = i.WordArray, l = t.algo, c = l.SHA256, s = l.HMAC, f = l.PBKDF2 = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: a.extend({
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
          init: function(v) {
            this.cfg = this.cfg.extend(v);
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
          compute: function(v, h) {
            for (var g = this.cfg, d = s.create(g.hasher, v), p = o.create(), y = o.create([1]), _ = p.words, b = y.words, C = g.keySize, E = g.iterations; _.length < C; ) {
              var T = d.update(h).finalize(y);
              d.reset();
              for (var A = T.words, S = A.length, k = T, L = 1; L < E; L++) {
                k = d.finalize(k), d.reset();
                for (var F = k.words, B = 0; B < S; B++)
                  A[B] ^= F[B];
              }
              p.concat(T), b[0]++;
            }
            return p.sigBytes = C * 4, p;
          }
        });
        t.PBKDF2 = function(v, h, g) {
          return f.create(g).compute(v, h);
        };
      }(), r.PBKDF2;
    });
  }(sr)), sr.exports;
}
var lr = { exports: {} }, zi;
function $t() {
  return zi || (zi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), go(), ei());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.Base, o = i.WordArray, l = t.algo, c = l.MD5, s = l.EvpKDF = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: a.extend({
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
          init: function(f) {
            this.cfg = this.cfg.extend(f);
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
          compute: function(f, v) {
            for (var h, g = this.cfg, d = g.hasher.create(), p = o.create(), y = p.words, _ = g.keySize, b = g.iterations; y.length < _; ) {
              h && d.update(h), h = d.update(f).finalize(v), d.reset();
              for (var C = 1; C < b; C++)
                h = d.finalize(h), d.reset();
              p.concat(h);
            }
            return p.sigBytes = _ * 4, p;
          }
        });
        t.EvpKDF = function(f, v, h) {
          return s.create(h).compute(f, v);
        };
      }(), r.EvpKDF;
    });
  }(lr)), lr.exports;
}
var cr = { exports: {} }, Li;
function Be() {
  return Li || (Li = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), $t());
    })(re, function(r) {
      r.lib.Cipher || function(t) {
        var i = r, a = i.lib, o = a.Base, l = a.WordArray, c = a.BufferedBlockAlgorithm, s = i.enc;
        s.Utf8;
        var f = s.Base64, v = i.algo, h = v.EvpKDF, g = a.Cipher = c.extend({
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
          createEncryptor: function(F, B) {
            return this.create(this._ENC_XFORM_MODE, F, B);
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
          createDecryptor: function(F, B) {
            return this.create(this._DEC_XFORM_MODE, F, B);
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
          init: function(F, B, I) {
            this.cfg = this.cfg.extend(I), this._xformMode = F, this._key = B, this.reset();
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
          process: function(F) {
            return this._append(F), this._process();
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
          finalize: function(F) {
            F && this._append(F);
            var B = this._doFinalize();
            return B;
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
            function F(B) {
              return typeof B == "string" ? L : A;
            }
            return function(B) {
              return {
                encrypt: function(I, P, W) {
                  return F(P).encrypt(B, I, P, W);
                },
                decrypt: function(I, P, W) {
                  return F(P).decrypt(B, I, P, W);
                }
              };
            };
          }()
        });
        a.StreamCipher = g.extend({
          _doFinalize: function() {
            var F = this._process(!0);
            return F;
          },
          blockSize: 1
        });
        var d = i.mode = {}, p = a.BlockCipherMode = o.extend({
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
          createEncryptor: function(F, B) {
            return this.Encryptor.create(F, B);
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
          createDecryptor: function(F, B) {
            return this.Decryptor.create(F, B);
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
          init: function(F, B) {
            this._cipher = F, this._iv = B;
          }
        }), y = d.CBC = function() {
          var F = p.extend();
          F.Encryptor = F.extend({
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
            processBlock: function(I, P) {
              var W = this._cipher, G = W.blockSize;
              B.call(this, I, P, G), W.encryptBlock(I, P), this._prevBlock = I.slice(P, P + G);
            }
          }), F.Decryptor = F.extend({
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
            processBlock: function(I, P) {
              var W = this._cipher, G = W.blockSize, Y = I.slice(P, P + G);
              W.decryptBlock(I, P), B.call(this, I, P, G), this._prevBlock = Y;
            }
          });
          function B(I, P, W) {
            var G, Y = this._iv;
            Y ? (G = Y, this._iv = t) : G = this._prevBlock;
            for (var X = 0; X < W; X++)
              I[P + X] ^= G[X];
          }
          return F;
        }(), _ = i.pad = {}, b = _.Pkcs7 = {
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
          pad: function(F, B) {
            for (var I = B * 4, P = I - F.sigBytes % I, W = P << 24 | P << 16 | P << 8 | P, G = [], Y = 0; Y < P; Y += 4)
              G.push(W);
            var X = l.create(G, P);
            F.concat(X);
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
          unpad: function(F) {
            var B = F.words[F.sigBytes - 1 >>> 2] & 255;
            F.sigBytes -= B;
          }
        };
        a.BlockCipher = g.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: g.cfg.extend({
            mode: y,
            padding: b
          }),
          reset: function() {
            var F;
            g.reset.call(this);
            var B = this.cfg, I = B.iv, P = B.mode;
            this._xformMode == this._ENC_XFORM_MODE ? F = P.createEncryptor : (F = P.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == F ? this._mode.init(this, I && I.words) : (this._mode = F.call(P, this, I && I.words), this._mode.__creator = F);
          },
          _doProcessBlock: function(F, B) {
            this._mode.processBlock(F, B);
          },
          _doFinalize: function() {
            var F, B = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (B.pad(this._data, this.blockSize), F = this._process(!0)) : (F = this._process(!0), B.unpad(F)), F;
          },
          blockSize: 128 / 32
        });
        var C = a.CipherParams = o.extend({
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
          init: function(F) {
            this.mixIn(F);
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
          toString: function(F) {
            return (F || this.formatter).stringify(this);
          }
        }), E = i.format = {}, T = E.OpenSSL = {
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
          stringify: function(F) {
            var B, I = F.ciphertext, P = F.salt;
            return P ? B = l.create([1398893684, 1701076831]).concat(P).concat(I) : B = I, B.toString(f);
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
          parse: function(F) {
            var B, I = f.parse(F), P = I.words;
            return P[0] == 1398893684 && P[1] == 1701076831 && (B = l.create(P.slice(2, 4)), P.splice(0, 4), I.sigBytes -= 16), C.create({ ciphertext: I, salt: B });
          }
        }, A = a.SerializableCipher = o.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: o.extend({
            format: T
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
          encrypt: function(F, B, I, P) {
            P = this.cfg.extend(P);
            var W = F.createEncryptor(I, P), G = W.finalize(B), Y = W.cfg;
            return C.create({
              ciphertext: G,
              key: I,
              iv: Y.iv,
              algorithm: F,
              mode: Y.mode,
              padding: Y.padding,
              blockSize: F.blockSize,
              formatter: P.format
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
          decrypt: function(F, B, I, P) {
            P = this.cfg.extend(P), B = this._parse(B, P.format);
            var W = F.createDecryptor(I, P).finalize(B.ciphertext);
            return W;
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
          _parse: function(F, B) {
            return typeof F == "string" ? B.parse(F, this) : F;
          }
        }), S = i.kdf = {}, k = S.OpenSSL = {
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
          execute: function(F, B, I, P, W) {
            if (P || (P = l.random(64 / 8)), W)
              var G = h.create({ keySize: B + I, hasher: W }).compute(F, P);
            else
              var G = h.create({ keySize: B + I }).compute(F, P);
            var Y = l.create(G.words.slice(B), I * 4);
            return G.sigBytes = B * 4, C.create({ key: G, iv: Y, salt: P });
          }
        }, L = a.PasswordBasedCipher = A.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: A.cfg.extend({
            kdf: k
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
          encrypt: function(F, B, I, P) {
            P = this.cfg.extend(P);
            var W = P.kdf.execute(I, F.keySize, F.ivSize, P.salt, P.hasher);
            P.iv = W.iv;
            var G = A.encrypt.call(this, F, B, W.key, P);
            return G.mixIn(W), G;
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
          decrypt: function(F, B, I, P) {
            P = this.cfg.extend(P), B = this._parse(B, P.format);
            var W = P.kdf.execute(I, F.keySize, F.ivSize, B.salt, P.hasher);
            P.iv = W.iv;
            var G = A.decrypt.call(this, F, B, W.key, P);
            return G;
          }
        });
      }();
    });
  }(cr)), cr.exports;
}
var ur = { exports: {} }, Hi;
function bc() {
  return Hi || (Hi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.mode.CFB = function() {
        var t = r.lib.BlockCipherMode.extend();
        t.Encryptor = t.extend({
          processBlock: function(a, o) {
            var l = this._cipher, c = l.blockSize;
            i.call(this, a, o, c, l), this._prevBlock = a.slice(o, o + c);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(a, o) {
            var l = this._cipher, c = l.blockSize, s = a.slice(o, o + c);
            i.call(this, a, o, c, l), this._prevBlock = s;
          }
        });
        function i(a, o, l, c) {
          var s, f = this._iv;
          f ? (s = f.slice(0), this._iv = void 0) : s = this._prevBlock, c.encryptBlock(s, 0);
          for (var v = 0; v < l; v++)
            a[o + v] ^= s[v];
        }
        return t;
      }(), r.mode.CFB;
    });
  }(ur)), ur.exports;
}
var fr = { exports: {} }, $i;
function Cc() {
  return $i || ($i = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.mode.CTR = function() {
        var t = r.lib.BlockCipherMode.extend(), i = t.Encryptor = t.extend({
          processBlock: function(a, o) {
            var l = this._cipher, c = l.blockSize, s = this._iv, f = this._counter;
            s && (f = this._counter = s.slice(0), this._iv = void 0);
            var v = f.slice(0);
            l.encryptBlock(v, 0), f[c - 1] = f[c - 1] + 1 | 0;
            for (var h = 0; h < c; h++)
              a[o + h] ^= v[h];
          }
        });
        return t.Decryptor = i, t;
      }(), r.mode.CTR;
    });
  }(fr)), fr.exports;
}
var dr = { exports: {} }, Ni;
function Ec() {
  return Ni || (Ni = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return r.mode.CTRGladman = function() {
        var t = r.lib.BlockCipherMode.extend();
        function i(l) {
          if ((l >> 24 & 255) === 255) {
            var c = l >> 16 & 255, s = l >> 8 & 255, f = l & 255;
            c === 255 ? (c = 0, s === 255 ? (s = 0, f === 255 ? f = 0 : ++f) : ++s) : ++c, l = 0, l += c << 16, l += s << 8, l += f;
          } else
            l += 1 << 24;
          return l;
        }
        function a(l) {
          return (l[0] = i(l[0])) === 0 && (l[1] = i(l[1])), l;
        }
        var o = t.Encryptor = t.extend({
          processBlock: function(l, c) {
            var s = this._cipher, f = s.blockSize, v = this._iv, h = this._counter;
            v && (h = this._counter = v.slice(0), this._iv = void 0), a(h);
            var g = h.slice(0);
            s.encryptBlock(g, 0);
            for (var d = 0; d < f; d++)
              l[c + d] ^= g[d];
          }
        });
        return t.Decryptor = o, t;
      }(), r.mode.CTRGladman;
    });
  }(dr)), dr.exports;
}
var xr = { exports: {} }, Vi;
function _c() {
  return Vi || (Vi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.mode.OFB = function() {
        var t = r.lib.BlockCipherMode.extend(), i = t.Encryptor = t.extend({
          processBlock: function(a, o) {
            var l = this._cipher, c = l.blockSize, s = this._iv, f = this._keystream;
            s && (f = this._keystream = s.slice(0), this._iv = void 0), l.encryptBlock(f, 0);
            for (var v = 0; v < c; v++)
              a[o + v] ^= f[v];
          }
        });
        return t.Decryptor = i, t;
      }(), r.mode.OFB;
    });
  }(xr)), xr.exports;
}
var hr = { exports: {} }, qi;
function Bc() {
  return qi || (qi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.mode.ECB = function() {
        var t = r.lib.BlockCipherMode.extend();
        return t.Encryptor = t.extend({
          processBlock: function(i, a) {
            this._cipher.encryptBlock(i, a);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(i, a) {
            this._cipher.decryptBlock(i, a);
          }
        }), t;
      }(), r.mode.ECB;
    });
  }(hr)), hr.exports;
}
var pr = { exports: {} }, Ui;
function wc() {
  return Ui || (Ui = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.pad.AnsiX923 = {
        pad: function(t, i) {
          var a = t.sigBytes, o = i * 4, l = o - a % o, c = a + l - 1;
          t.clamp(), t.words[c >>> 2] |= l << 24 - c % 4 * 8, t.sigBytes += l;
        },
        unpad: function(t) {
          var i = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= i;
        }
      }, r.pad.Ansix923;
    });
  }(pr)), pr.exports;
}
var vr = { exports: {} }, Yi;
function Dc() {
  return Yi || (Yi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.pad.Iso10126 = {
        pad: function(t, i) {
          var a = i * 4, o = a - t.sigBytes % a;
          t.concat(r.lib.WordArray.random(o - 1)).concat(r.lib.WordArray.create([o << 24], 1));
        },
        unpad: function(t) {
          var i = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= i;
        }
      }, r.pad.Iso10126;
    });
  }(vr)), vr.exports;
}
var mr = { exports: {} }, Ki;
function Fc() {
  return Ki || (Ki = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.pad.Iso97971 = {
        pad: function(t, i) {
          t.concat(r.lib.WordArray.create([2147483648], 1)), r.pad.ZeroPadding.pad(t, i);
        },
        unpad: function(t) {
          r.pad.ZeroPadding.unpad(t), t.sigBytes--;
        }
      }, r.pad.Iso97971;
    });
  }(mr)), mr.exports;
}
var gr = { exports: {} }, Wi;
function Ac() {
  return Wi || (Wi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.pad.ZeroPadding = {
        pad: function(t, i) {
          var a = i * 4;
          t.clamp(), t.sigBytes += a - (t.sigBytes % a || a);
        },
        unpad: function(t) {
          for (var i = t.words, a = t.sigBytes - 1, a = t.sigBytes - 1; a >= 0; a--)
            if (i[a >>> 2] >>> 24 - a % 4 * 8 & 255) {
              t.sigBytes = a + 1;
              break;
            }
        }
      }, r.pad.ZeroPadding;
    });
  }(gr)), gr.exports;
}
var yr = { exports: {} }, ji;
function Tc() {
  return ji || (ji = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return r.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, r.pad.NoPadding;
    });
  }(yr)), yr.exports;
}
var br = { exports: {} }, Gi;
function Sc() {
  return Gi || (Gi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Be());
    })(re, function(r) {
      return function(t) {
        var i = r, a = i.lib, o = a.CipherParams, l = i.enc, c = l.Hex, s = i.format;
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
          stringify: function(f) {
            return f.ciphertext.toString(c);
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
          parse: function(f) {
            var v = c.parse(f);
            return o.create({ ciphertext: v });
          }
        };
      }(), r.format.Hex;
    });
  }(br)), br.exports;
}
var Cr = { exports: {} }, Xi;
function kc() {
  return Xi || (Xi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Jt(), Qt(), $t(), Be());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.BlockCipher, o = t.algo, l = [], c = [], s = [], f = [], v = [], h = [], g = [], d = [], p = [], y = [];
        (function() {
          for (var C = [], E = 0; E < 256; E++)
            E < 128 ? C[E] = E << 1 : C[E] = E << 1 ^ 283;
          for (var T = 0, A = 0, E = 0; E < 256; E++) {
            var S = A ^ A << 1 ^ A << 2 ^ A << 3 ^ A << 4;
            S = S >>> 8 ^ S & 255 ^ 99, l[T] = S, c[S] = T;
            var k = C[T], L = C[k], F = C[L], B = C[S] * 257 ^ S * 16843008;
            s[T] = B << 24 | B >>> 8, f[T] = B << 16 | B >>> 16, v[T] = B << 8 | B >>> 24, h[T] = B;
            var B = F * 16843009 ^ L * 65537 ^ k * 257 ^ T * 16843008;
            g[S] = B << 24 | B >>> 8, d[S] = B << 16 | B >>> 16, p[S] = B << 8 | B >>> 24, y[S] = B, T ? (T = k ^ C[C[C[F ^ k]]], A ^= C[C[A]]) : T = A = 1;
          }
        })();
        var _ = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], b = o.AES = a.extend({
          _doReset: function() {
            var C;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var E = this._keyPriorReset = this._key, T = E.words, A = E.sigBytes / 4, S = this._nRounds = A + 6, k = (S + 1) * 4, L = this._keySchedule = [], F = 0; F < k; F++)
                F < A ? L[F] = T[F] : (C = L[F - 1], F % A ? A > 6 && F % A == 4 && (C = l[C >>> 24] << 24 | l[C >>> 16 & 255] << 16 | l[C >>> 8 & 255] << 8 | l[C & 255]) : (C = C << 8 | C >>> 24, C = l[C >>> 24] << 24 | l[C >>> 16 & 255] << 16 | l[C >>> 8 & 255] << 8 | l[C & 255], C ^= _[F / A | 0] << 24), L[F] = L[F - A] ^ C);
              for (var B = this._invKeySchedule = [], I = 0; I < k; I++) {
                var F = k - I;
                if (I % 4)
                  var C = L[F];
                else
                  var C = L[F - 4];
                I < 4 || F <= 4 ? B[I] = C : B[I] = g[l[C >>> 24]] ^ d[l[C >>> 16 & 255]] ^ p[l[C >>> 8 & 255]] ^ y[l[C & 255]];
              }
            }
          },
          encryptBlock: function(C, E) {
            this._doCryptBlock(C, E, this._keySchedule, s, f, v, h, l);
          },
          decryptBlock: function(C, E) {
            var T = C[E + 1];
            C[E + 1] = C[E + 3], C[E + 3] = T, this._doCryptBlock(C, E, this._invKeySchedule, g, d, p, y, c);
            var T = C[E + 1];
            C[E + 1] = C[E + 3], C[E + 3] = T;
          },
          _doCryptBlock: function(C, E, T, A, S, k, L, F) {
            for (var B = this._nRounds, I = C[E] ^ T[0], P = C[E + 1] ^ T[1], W = C[E + 2] ^ T[2], G = C[E + 3] ^ T[3], Y = 4, X = 1; X < B; X++) {
              var Z = A[I >>> 24] ^ S[P >>> 16 & 255] ^ k[W >>> 8 & 255] ^ L[G & 255] ^ T[Y++], oe = A[P >>> 24] ^ S[W >>> 16 & 255] ^ k[G >>> 8 & 255] ^ L[I & 255] ^ T[Y++], ie = A[W >>> 24] ^ S[G >>> 16 & 255] ^ k[I >>> 8 & 255] ^ L[P & 255] ^ T[Y++], M = A[G >>> 24] ^ S[I >>> 16 & 255] ^ k[P >>> 8 & 255] ^ L[W & 255] ^ T[Y++];
              I = Z, P = oe, W = ie, G = M;
            }
            var Z = (F[I >>> 24] << 24 | F[P >>> 16 & 255] << 16 | F[W >>> 8 & 255] << 8 | F[G & 255]) ^ T[Y++], oe = (F[P >>> 24] << 24 | F[W >>> 16 & 255] << 16 | F[G >>> 8 & 255] << 8 | F[I & 255]) ^ T[Y++], ie = (F[W >>> 24] << 24 | F[G >>> 16 & 255] << 16 | F[I >>> 8 & 255] << 8 | F[P & 255]) ^ T[Y++], M = (F[G >>> 24] << 24 | F[I >>> 16 & 255] << 16 | F[P >>> 8 & 255] << 8 | F[W & 255]) ^ T[Y++];
            C[E] = Z, C[E + 1] = oe, C[E + 2] = ie, C[E + 3] = M;
          },
          keySize: 256 / 32
        });
        t.AES = a._createHelper(b);
      }(), r.AES;
    });
  }(Cr)), Cr.exports;
}
var Er = { exports: {} }, Zi;
function Ic() {
  return Zi || (Zi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Jt(), Qt(), $t(), Be());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.WordArray, o = i.BlockCipher, l = t.algo, c = [
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
        ], f = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], v = [
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
        ], h = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], g = l.DES = o.extend({
          _doReset: function() {
            for (var _ = this._key, b = _.words, C = [], E = 0; E < 56; E++) {
              var T = c[E] - 1;
              C[E] = b[T >>> 5] >>> 31 - T % 32 & 1;
            }
            for (var A = this._subKeys = [], S = 0; S < 16; S++) {
              for (var k = A[S] = [], L = f[S], E = 0; E < 24; E++)
                k[E / 6 | 0] |= C[(s[E] - 1 + L) % 28] << 31 - E % 6, k[4 + (E / 6 | 0)] |= C[28 + (s[E + 24] - 1 + L) % 28] << 31 - E % 6;
              k[0] = k[0] << 1 | k[0] >>> 31;
              for (var E = 1; E < 7; E++)
                k[E] = k[E] >>> (E - 1) * 4 + 3;
              k[7] = k[7] << 5 | k[7] >>> 27;
            }
            for (var F = this._invSubKeys = [], E = 0; E < 16; E++)
              F[E] = A[15 - E];
          },
          encryptBlock: function(_, b) {
            this._doCryptBlock(_, b, this._subKeys);
          },
          decryptBlock: function(_, b) {
            this._doCryptBlock(_, b, this._invSubKeys);
          },
          _doCryptBlock: function(_, b, C) {
            this._lBlock = _[b], this._rBlock = _[b + 1], d.call(this, 4, 252645135), d.call(this, 16, 65535), p.call(this, 2, 858993459), p.call(this, 8, 16711935), d.call(this, 1, 1431655765);
            for (var E = 0; E < 16; E++) {
              for (var T = C[E], A = this._lBlock, S = this._rBlock, k = 0, L = 0; L < 8; L++)
                k |= v[L][((S ^ T[L]) & h[L]) >>> 0];
              this._lBlock = S, this._rBlock = A ^ k;
            }
            var F = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = F, d.call(this, 1, 1431655765), p.call(this, 8, 16711935), p.call(this, 2, 858993459), d.call(this, 16, 65535), d.call(this, 4, 252645135), _[b] = this._lBlock, _[b + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function d(_, b) {
          var C = (this._lBlock >>> _ ^ this._rBlock) & b;
          this._rBlock ^= C, this._lBlock ^= C << _;
        }
        function p(_, b) {
          var C = (this._rBlock >>> _ ^ this._lBlock) & b;
          this._lBlock ^= C, this._rBlock ^= C << _;
        }
        t.DES = o._createHelper(g);
        var y = l.TripleDES = o.extend({
          _doReset: function() {
            var _ = this._key, b = _.words;
            if (b.length !== 2 && b.length !== 4 && b.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var C = b.slice(0, 2), E = b.length < 4 ? b.slice(0, 2) : b.slice(2, 4), T = b.length < 6 ? b.slice(0, 2) : b.slice(4, 6);
            this._des1 = g.createEncryptor(a.create(C)), this._des2 = g.createEncryptor(a.create(E)), this._des3 = g.createEncryptor(a.create(T));
          },
          encryptBlock: function(_, b) {
            this._des1.encryptBlock(_, b), this._des2.decryptBlock(_, b), this._des3.encryptBlock(_, b);
          },
          decryptBlock: function(_, b) {
            this._des3.decryptBlock(_, b), this._des2.encryptBlock(_, b), this._des1.decryptBlock(_, b);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        t.TripleDES = o._createHelper(y);
      }(), r.TripleDES;
    });
  }(Er)), Er.exports;
}
var _r = { exports: {} }, Ji;
function Pc() {
  return Ji || (Ji = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Jt(), Qt(), $t(), Be());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.StreamCipher, o = t.algo, l = o.RC4 = a.extend({
          _doReset: function() {
            for (var f = this._key, v = f.words, h = f.sigBytes, g = this._S = [], d = 0; d < 256; d++)
              g[d] = d;
            for (var d = 0, p = 0; d < 256; d++) {
              var y = d % h, _ = v[y >>> 2] >>> 24 - y % 4 * 8 & 255;
              p = (p + g[d] + _) % 256;
              var b = g[d];
              g[d] = g[p], g[p] = b;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(f, v) {
            f[v] ^= c.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function c() {
          for (var f = this._S, v = this._i, h = this._j, g = 0, d = 0; d < 4; d++) {
            v = (v + 1) % 256, h = (h + f[v]) % 256;
            var p = f[v];
            f[v] = f[h], f[h] = p, g |= f[(f[v] + f[h]) % 256] << 24 - d * 8;
          }
          return this._i = v, this._j = h, g;
        }
        t.RC4 = a._createHelper(l);
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
            for (var f = this.cfg.drop; f > 0; f--)
              c.call(this);
          }
        });
        t.RC4Drop = a._createHelper(s);
      }(), r.RC4;
    });
  }(_r)), _r.exports;
}
var Br = { exports: {} }, Qi;
function Mc() {
  return Qi || (Qi = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Jt(), Qt(), $t(), Be());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.StreamCipher, o = t.algo, l = [], c = [], s = [], f = o.Rabbit = a.extend({
          _doReset: function() {
            for (var h = this._key.words, g = this.cfg.iv, d = 0; d < 4; d++)
              h[d] = (h[d] << 8 | h[d] >>> 24) & 16711935 | (h[d] << 24 | h[d] >>> 8) & 4278255360;
            var p = this._X = [
              h[0],
              h[3] << 16 | h[2] >>> 16,
              h[1],
              h[0] << 16 | h[3] >>> 16,
              h[2],
              h[1] << 16 | h[0] >>> 16,
              h[3],
              h[2] << 16 | h[1] >>> 16
            ], y = this._C = [
              h[2] << 16 | h[2] >>> 16,
              h[0] & 4294901760 | h[1] & 65535,
              h[3] << 16 | h[3] >>> 16,
              h[1] & 4294901760 | h[2] & 65535,
              h[0] << 16 | h[0] >>> 16,
              h[2] & 4294901760 | h[3] & 65535,
              h[1] << 16 | h[1] >>> 16,
              h[3] & 4294901760 | h[0] & 65535
            ];
            this._b = 0;
            for (var d = 0; d < 4; d++)
              v.call(this);
            for (var d = 0; d < 8; d++)
              y[d] ^= p[d + 4 & 7];
            if (g) {
              var _ = g.words, b = _[0], C = _[1], E = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, T = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, A = E >>> 16 | T & 4294901760, S = T << 16 | E & 65535;
              y[0] ^= E, y[1] ^= A, y[2] ^= T, y[3] ^= S, y[4] ^= E, y[5] ^= A, y[6] ^= T, y[7] ^= S;
              for (var d = 0; d < 4; d++)
                v.call(this);
            }
          },
          _doProcessBlock: function(h, g) {
            var d = this._X;
            v.call(this), l[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, l[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, l[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, l[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var p = 0; p < 4; p++)
              l[p] = (l[p] << 8 | l[p] >>> 24) & 16711935 | (l[p] << 24 | l[p] >>> 8) & 4278255360, h[g + p] ^= l[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function v() {
          for (var h = this._X, g = this._C, d = 0; d < 8; d++)
            c[d] = g[d];
          g[0] = g[0] + 1295307597 + this._b | 0, g[1] = g[1] + 3545052371 + (g[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, g[2] = g[2] + 886263092 + (g[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, g[3] = g[3] + 1295307597 + (g[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, g[4] = g[4] + 3545052371 + (g[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, g[5] = g[5] + 886263092 + (g[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, g[6] = g[6] + 1295307597 + (g[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, g[7] = g[7] + 3545052371 + (g[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = g[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var p = h[d] + g[d], y = p & 65535, _ = p >>> 16, b = ((y * y >>> 17) + y * _ >>> 15) + _ * _, C = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            s[d] = b ^ C;
          }
          h[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, h[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, h[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, h[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, h[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, h[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, h[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, h[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        t.Rabbit = a._createHelper(f);
      }(), r.Rabbit;
    });
  }(Br)), Br.exports;
}
var wr = { exports: {} }, ea;
function Rc() {
  return ea || (ea = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Jt(), Qt(), $t(), Be());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.StreamCipher, o = t.algo, l = [], c = [], s = [], f = o.RabbitLegacy = a.extend({
          _doReset: function() {
            var h = this._key.words, g = this.cfg.iv, d = this._X = [
              h[0],
              h[3] << 16 | h[2] >>> 16,
              h[1],
              h[0] << 16 | h[3] >>> 16,
              h[2],
              h[1] << 16 | h[0] >>> 16,
              h[3],
              h[2] << 16 | h[1] >>> 16
            ], p = this._C = [
              h[2] << 16 | h[2] >>> 16,
              h[0] & 4294901760 | h[1] & 65535,
              h[3] << 16 | h[3] >>> 16,
              h[1] & 4294901760 | h[2] & 65535,
              h[0] << 16 | h[0] >>> 16,
              h[2] & 4294901760 | h[3] & 65535,
              h[1] << 16 | h[1] >>> 16,
              h[3] & 4294901760 | h[0] & 65535
            ];
            this._b = 0;
            for (var y = 0; y < 4; y++)
              v.call(this);
            for (var y = 0; y < 8; y++)
              p[y] ^= d[y + 4 & 7];
            if (g) {
              var _ = g.words, b = _[0], C = _[1], E = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360, T = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360, A = E >>> 16 | T & 4294901760, S = T << 16 | E & 65535;
              p[0] ^= E, p[1] ^= A, p[2] ^= T, p[3] ^= S, p[4] ^= E, p[5] ^= A, p[6] ^= T, p[7] ^= S;
              for (var y = 0; y < 4; y++)
                v.call(this);
            }
          },
          _doProcessBlock: function(h, g) {
            var d = this._X;
            v.call(this), l[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, l[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, l[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, l[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var p = 0; p < 4; p++)
              l[p] = (l[p] << 8 | l[p] >>> 24) & 16711935 | (l[p] << 24 | l[p] >>> 8) & 4278255360, h[g + p] ^= l[p];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function v() {
          for (var h = this._X, g = this._C, d = 0; d < 8; d++)
            c[d] = g[d];
          g[0] = g[0] + 1295307597 + this._b | 0, g[1] = g[1] + 3545052371 + (g[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, g[2] = g[2] + 886263092 + (g[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, g[3] = g[3] + 1295307597 + (g[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, g[4] = g[4] + 3545052371 + (g[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, g[5] = g[5] + 886263092 + (g[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, g[6] = g[6] + 1295307597 + (g[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, g[7] = g[7] + 3545052371 + (g[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = g[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var p = h[d] + g[d], y = p & 65535, _ = p >>> 16, b = ((y * y >>> 17) + y * _ >>> 15) + _ * _, C = ((p & 4294901760) * p | 0) + ((p & 65535) * p | 0);
            s[d] = b ^ C;
          }
          h[0] = s[0] + (s[7] << 16 | s[7] >>> 16) + (s[6] << 16 | s[6] >>> 16) | 0, h[1] = s[1] + (s[0] << 8 | s[0] >>> 24) + s[7] | 0, h[2] = s[2] + (s[1] << 16 | s[1] >>> 16) + (s[0] << 16 | s[0] >>> 16) | 0, h[3] = s[3] + (s[2] << 8 | s[2] >>> 24) + s[1] | 0, h[4] = s[4] + (s[3] << 16 | s[3] >>> 16) + (s[2] << 16 | s[2] >>> 16) | 0, h[5] = s[5] + (s[4] << 8 | s[4] >>> 24) + s[3] | 0, h[6] = s[6] + (s[5] << 16 | s[5] >>> 16) + (s[4] << 16 | s[4] >>> 16) | 0, h[7] = s[7] + (s[6] << 8 | s[6] >>> 24) + s[5] | 0;
        }
        t.RabbitLegacy = a._createHelper(f);
      }(), r.RabbitLegacy;
    });
  }(wr)), wr.exports;
}
var Dr = { exports: {} }, ta;
function Oc() {
  return ta || (ta = 1, function(e, n) {
    (function(r, t, i) {
      e.exports = t(se(), Jt(), Qt(), $t(), Be());
    })(re, function(r) {
      return function() {
        var t = r, i = t.lib, a = i.BlockCipher, o = t.algo;
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
        var f = {
          pbox: [],
          sbox: []
        };
        function v(y, _) {
          let b = _ >> 24 & 255, C = _ >> 16 & 255, E = _ >> 8 & 255, T = _ & 255, A = y.sbox[0][b] + y.sbox[1][C];
          return A = A ^ y.sbox[2][E], A = A + y.sbox[3][T], A;
        }
        function h(y, _, b) {
          let C = _, E = b, T;
          for (let A = 0; A < l; ++A)
            C = C ^ y.pbox[A], E = v(y, C) ^ E, T = C, C = E, E = T;
          return T = C, C = E, E = T, E = E ^ y.pbox[l], C = C ^ y.pbox[l + 1], { left: C, right: E };
        }
        function g(y, _, b) {
          let C = _, E = b, T;
          for (let A = l + 1; A > 1; --A)
            C = C ^ y.pbox[A], E = v(y, C) ^ E, T = C, C = E, E = T;
          return T = C, C = E, E = T, E = E ^ y.pbox[1], C = C ^ y.pbox[0], { left: C, right: E };
        }
        function d(y, _, b) {
          for (let S = 0; S < 4; S++) {
            y.sbox[S] = [];
            for (let k = 0; k < 256; k++)
              y.sbox[S][k] = s[S][k];
          }
          let C = 0;
          for (let S = 0; S < l + 2; S++)
            y.pbox[S] = c[S] ^ _[C], C++, C >= b && (C = 0);
          let E = 0, T = 0, A = 0;
          for (let S = 0; S < l + 2; S += 2)
            A = h(y, E, T), E = A.left, T = A.right, y.pbox[S] = E, y.pbox[S + 1] = T;
          for (let S = 0; S < 4; S++)
            for (let k = 0; k < 256; k += 2)
              A = h(y, E, T), E = A.left, T = A.right, y.sbox[S][k] = E, y.sbox[S][k + 1] = T;
          return !0;
        }
        var p = o.Blowfish = a.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var y = this._keyPriorReset = this._key, _ = y.words, b = y.sigBytes / 4;
              d(f, _, b);
            }
          },
          encryptBlock: function(y, _) {
            var b = h(f, y[_], y[_ + 1]);
            y[_] = b.left, y[_ + 1] = b.right;
          },
          decryptBlock: function(y, _) {
            var b = g(f, y[_], y[_ + 1]);
            y[_] = b.left, y[_ + 1] = b.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        t.Blowfish = a._createHelper(p);
      }(), r.Blowfish;
    });
  }(Dr)), Dr.exports;
}
(function(e, n) {
  (function(r, t, i) {
    e.exports = t(se(), Bn(), dc(), xc(), Jt(), hc(), Qt(), go(), Qr(), pc(), yo(), vc(), mc(), gc(), ei(), yc(), $t(), Be(), bc(), Cc(), Ec(), _c(), Bc(), wc(), Dc(), Fc(), Ac(), Tc(), Sc(), kc(), Ic(), Pc(), Mc(), Rc(), Oc());
  })(re, function(r) {
    return r;
  });
})(mo);
var zc = mo.exports;
const $e = /* @__PURE__ */ oc(zc);
function Lc(e, n) {
  e = e.toString();
  var r = $e.enc.Utf8.parse(n), t = $e.enc.Utf8.parse(n);
  return $e.DES.encrypt(
    e,
    r,
    {
      iv: t,
      mode: $e.mode.CBC,
      padding: $e.pad.Pkcs7
    }
  ).ciphertext.toString();
}
function Hc(e, n) {
  var r = $e.enc.Utf8.parse(n), t = $e.enc.Utf8.parse(n), i = $e.DES.decrypt({
    ciphertext: $e.enc.Hex.parse(e)
  }, r, {
    iv: t,
    mode: $e.mode.CBC,
    padding: $e.pad.Pkcs7
  });
  return i.toString($e.enc.Utf8);
}
function $c(e) {
  return $e.SHA256(e).toString();
}
function Nc(e) {
  return $e.MD5(e).toString();
}
const Lt = {
  setDES: Lc,
  getDES: Hc,
  setSha256: $c,
  setMD5: Nc
}, hn = "LJS_TIME_KEY_20231227";
function Vc(e) {
  return JSON.parse(sessionStorage.getItem(e));
}
function qc(e, n) {
  sessionStorage.setItem(e, JSON.stringify(n));
}
function Uc(e) {
  sessionStorage.removeItem(e);
}
function Yc() {
  sessionStorage.clear();
}
function Kc(e) {
  const n = JSON.parse(localStorage.getItem(e));
  return n === null ? null : n.time && (n.startTime = Lt.getDES(n.startTime, hn), n.time = Lt.getDES(n.time, hn), (/* @__PURE__ */ new Date()).getTime() - n.startTime > n.time) ? (bo(e), null) : n.value;
}
function Wc(e, n, r = 0) {
  const t = {
    value: n
  };
  r > 0 && (t.startTime = Lt.setDES((/* @__PURE__ */ new Date()).getTime(), hn), t.time = Lt.setDES(r, hn)), localStorage.setItem(e, JSON.stringify(t));
}
function bo(e) {
  localStorage.removeItem(e);
}
function jc() {
  localStorage.clear();
}
function Gc(e, n = () => {
}) {
  e.commit("SET_token", null), e.commit("SET_userinfo", null), e.commit("SET_apiShake", []), e.commit("SET_permissions", []), e.commit("SET_roles", []), e.commit("SET_routerList", []), e.commit("SET_menuList", []), e.commit("SET_menuOpenList", []), e.commit("SET_menuNowOpen", null), e.commit("SET_menuShrink", !1), n();
}
const Co = {
  getSS: Vc,
  setSS: qc,
  delSS: Uc,
  clearSS: Yc,
  getLS: Kc,
  setLS: Wc,
  delLS: bo,
  clearLS: jc,
  clearVuex: Gc
};
var Eo = { exports: {} };
(function(e, n) {
  (function() {
    var r, t = 244837814094590, i = (t & 16777215) == 15715070;
    function a(u, x, m) {
      u != null && (typeof u == "number" ? this.fromNumber(u, x, m) : x == null && typeof u != "string" ? this.fromString(u, 256) : this.fromString(u, x));
    }
    function o() {
      return new a(null);
    }
    function l(u, x, m, w, R, H) {
      for (; --H >= 0; ) {
        var U = x * this[u++] + m[w] + R;
        R = Math.floor(U / 67108864), m[w++] = U & 67108863;
      }
      return R;
    }
    function c(u, x, m, w, R, H) {
      for (var U = x & 32767, K = x >> 15; --H >= 0; ) {
        var pe = this[u] & 32767, _e = this[u++] >> 15, Xe = K * pe + _e * U;
        pe = U * pe + ((Xe & 32767) << 15) + m[w] + (R & 1073741823), R = (pe >>> 30) + (Xe >>> 15) + K * _e + (R >>> 30), m[w++] = pe & 1073741823;
      }
      return R;
    }
    function s(u, x, m, w, R, H) {
      for (var U = x & 16383, K = x >> 14; --H >= 0; ) {
        var pe = this[u] & 16383, _e = this[u++] >> 14, Xe = K * pe + _e * U;
        pe = U * pe + ((Xe & 16383) << 14) + m[w] + R, R = (pe >> 28) + (Xe >> 14) + K * _e, m[w++] = pe & 268435455;
      }
      return R;
    }
    var f = typeof navigator < "u";
    f && i && navigator.appName == "Microsoft Internet Explorer" ? (a.prototype.am = c, r = 30) : f && i && navigator.appName != "Netscape" ? (a.prototype.am = l, r = 26) : (a.prototype.am = s, r = 28), a.prototype.DB = r, a.prototype.DM = (1 << r) - 1, a.prototype.DV = 1 << r;
    var v = 52;
    a.prototype.FV = Math.pow(2, v), a.prototype.F1 = v - r, a.prototype.F2 = 2 * r - v;
    var h = "0123456789abcdefghijklmnopqrstuvwxyz", g = new Array(), d, p;
    for (d = "0".charCodeAt(0), p = 0; p <= 9; ++p)
      g[d++] = p;
    for (d = "a".charCodeAt(0), p = 10; p < 36; ++p)
      g[d++] = p;
    for (d = "A".charCodeAt(0), p = 10; p < 36; ++p)
      g[d++] = p;
    function y(u) {
      return h.charAt(u);
    }
    function _(u, x) {
      var m = g[u.charCodeAt(x)];
      return m ?? -1;
    }
    function b(u) {
      for (var x = this.t - 1; x >= 0; --x)
        u[x] = this[x];
      u.t = this.t, u.s = this.s;
    }
    function C(u) {
      this.t = 1, this.s = u < 0 ? -1 : 0, u > 0 ? this[0] = u : u < -1 ? this[0] = u + this.DV : this.t = 0;
    }
    function E(u) {
      var x = o();
      return x.fromInt(u), x;
    }
    function T(u, x) {
      var m;
      if (x == 16)
        m = 4;
      else if (x == 8)
        m = 3;
      else if (x == 256)
        m = 8;
      else if (x == 2)
        m = 1;
      else if (x == 32)
        m = 5;
      else if (x == 4)
        m = 2;
      else {
        this.fromRadix(u, x);
        return;
      }
      this.t = 0, this.s = 0;
      for (var w = u.length, R = !1, H = 0; --w >= 0; ) {
        var U = m == 8 ? u[w] & 255 : _(u, w);
        if (U < 0) {
          u.charAt(w) == "-" && (R = !0);
          continue;
        }
        R = !1, H == 0 ? this[this.t++] = U : H + m > this.DB ? (this[this.t - 1] |= (U & (1 << this.DB - H) - 1) << H, this[this.t++] = U >> this.DB - H) : this[this.t - 1] |= U << H, H += m, H >= this.DB && (H -= this.DB);
      }
      m == 8 && u[0] & 128 && (this.s = -1, H > 0 && (this[this.t - 1] |= (1 << this.DB - H) - 1 << H)), this.clamp(), R && a.ZERO.subTo(this, this);
    }
    function A() {
      for (var u = this.s & this.DM; this.t > 0 && this[this.t - 1] == u; )
        --this.t;
    }
    function S(u) {
      if (this.s < 0)
        return "-" + this.negate().toString(u);
      var x;
      if (u == 16)
        x = 4;
      else if (u == 8)
        x = 3;
      else if (u == 2)
        x = 1;
      else if (u == 32)
        x = 5;
      else if (u == 4)
        x = 2;
      else
        return this.toRadix(u);
      var m = (1 << x) - 1, w, R = !1, H = "", U = this.t, K = this.DB - U * this.DB % x;
      if (U-- > 0)
        for (K < this.DB && (w = this[U] >> K) > 0 && (R = !0, H = y(w)); U >= 0; )
          K < x ? (w = (this[U] & (1 << K) - 1) << x - K, w |= this[--U] >> (K += this.DB - x)) : (w = this[U] >> (K -= x) & m, K <= 0 && (K += this.DB, --U)), w > 0 && (R = !0), R && (H += y(w));
      return R ? H : "0";
    }
    function k() {
      var u = o();
      return a.ZERO.subTo(this, u), u;
    }
    function L() {
      return this.s < 0 ? this.negate() : this;
    }
    function F(u) {
      var x = this.s - u.s;
      if (x != 0)
        return x;
      var m = this.t;
      if (x = m - u.t, x != 0)
        return this.s < 0 ? -x : x;
      for (; --m >= 0; )
        if ((x = this[m] - u[m]) != 0)
          return x;
      return 0;
    }
    function B(u) {
      var x = 1, m;
      return (m = u >>> 16) != 0 && (u = m, x += 16), (m = u >> 8) != 0 && (u = m, x += 8), (m = u >> 4) != 0 && (u = m, x += 4), (m = u >> 2) != 0 && (u = m, x += 2), (m = u >> 1) != 0 && (u = m, x += 1), x;
    }
    function I() {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + B(this[this.t - 1] ^ this.s & this.DM);
    }
    function P(u, x) {
      var m;
      for (m = this.t - 1; m >= 0; --m)
        x[m + u] = this[m];
      for (m = u - 1; m >= 0; --m)
        x[m] = 0;
      x.t = this.t + u, x.s = this.s;
    }
    function W(u, x) {
      for (var m = u; m < this.t; ++m)
        x[m - u] = this[m];
      x.t = Math.max(this.t - u, 0), x.s = this.s;
    }
    function G(u, x) {
      var m = u % this.DB, w = this.DB - m, R = (1 << w) - 1, H = Math.floor(u / this.DB), U = this.s << m & this.DM, K;
      for (K = this.t - 1; K >= 0; --K)
        x[K + H + 1] = this[K] >> w | U, U = (this[K] & R) << m;
      for (K = H - 1; K >= 0; --K)
        x[K] = 0;
      x[H] = U, x.t = this.t + H + 1, x.s = this.s, x.clamp();
    }
    function Y(u, x) {
      x.s = this.s;
      var m = Math.floor(u / this.DB);
      if (m >= this.t) {
        x.t = 0;
        return;
      }
      var w = u % this.DB, R = this.DB - w, H = (1 << w) - 1;
      x[0] = this[m] >> w;
      for (var U = m + 1; U < this.t; ++U)
        x[U - m - 1] |= (this[U] & H) << R, x[U - m] = this[U] >> w;
      w > 0 && (x[this.t - m - 1] |= (this.s & H) << R), x.t = this.t - m, x.clamp();
    }
    function X(u, x) {
      for (var m = 0, w = 0, R = Math.min(u.t, this.t); m < R; )
        w += this[m] - u[m], x[m++] = w & this.DM, w >>= this.DB;
      if (u.t < this.t) {
        for (w -= u.s; m < this.t; )
          w += this[m], x[m++] = w & this.DM, w >>= this.DB;
        w += this.s;
      } else {
        for (w += this.s; m < u.t; )
          w -= u[m], x[m++] = w & this.DM, w >>= this.DB;
        w -= u.s;
      }
      x.s = w < 0 ? -1 : 0, w < -1 ? x[m++] = this.DV + w : w > 0 && (x[m++] = w), x.t = m, x.clamp();
    }
    function Z(u, x) {
      var m = this.abs(), w = u.abs(), R = m.t;
      for (x.t = R + w.t; --R >= 0; )
        x[R] = 0;
      for (R = 0; R < w.t; ++R)
        x[R + m.t] = m.am(0, w[R], x, R, 0, m.t);
      x.s = 0, x.clamp(), this.s != u.s && a.ZERO.subTo(x, x);
    }
    function oe(u) {
      for (var x = this.abs(), m = u.t = 2 * x.t; --m >= 0; )
        u[m] = 0;
      for (m = 0; m < x.t - 1; ++m) {
        var w = x.am(m, x[m], u, 2 * m, 0, 1);
        (u[m + x.t] += x.am(m + 1, 2 * x[m], u, 2 * m + 1, w, x.t - m - 1)) >= x.DV && (u[m + x.t] -= x.DV, u[m + x.t + 1] = 1);
      }
      u.t > 0 && (u[u.t - 1] += x.am(m, x[m], u, 2 * m, 0, 1)), u.s = 0, u.clamp();
    }
    function ie(u, x, m) {
      var w = u.abs();
      if (!(w.t <= 0)) {
        var R = this.abs();
        if (R.t < w.t) {
          x != null && x.fromInt(0), m != null && this.copyTo(m);
          return;
        }
        m == null && (m = o());
        var H = o(), U = this.s, K = u.s, pe = this.DB - B(w[w.t - 1]);
        pe > 0 ? (w.lShiftTo(pe, H), R.lShiftTo(pe, m)) : (w.copyTo(H), R.copyTo(m));
        var _e = H.t, Xe = H[_e - 1];
        if (Xe != 0) {
          var Ke = Xe * (1 << this.F1) + (_e > 1 ? H[_e - 2] >> this.F2 : 0), yt = this.FV / Ke, K0 = (1 << this.F1) / Ke, tt = 1 << this.F2, nt = m.t, W0 = nt - _e, Ft = x ?? o();
          for (H.dlShiftTo(W0, Ft), m.compareTo(Ft) >= 0 && (m[m.t++] = 1, m.subTo(Ft, m)), a.ONE.dlShiftTo(_e, Ft), Ft.subTo(H, H); H.t < _e; )
            H[H.t++] = 0;
          for (; --W0 >= 0; ) {
            var qn = m[--nt] == Xe ? this.DM : Math.floor(m[nt] * yt + (m[nt - 1] + tt) * K0);
            if ((m[nt] += H.am(0, qn, m, W0, 0, _e)) < qn)
              for (H.dlShiftTo(W0, Ft), m.subTo(Ft, m); m[nt] < --qn; )
                m.subTo(Ft, m);
          }
          x != null && (m.drShiftTo(_e, x), U != K && a.ZERO.subTo(x, x)), m.t = _e, m.clamp(), pe > 0 && m.rShiftTo(pe, m), U < 0 && a.ZERO.subTo(m, m);
        }
      }
    }
    function M(u) {
      var x = o();
      return this.abs().divRemTo(u, null, x), this.s < 0 && x.compareTo(a.ZERO) > 0 && u.subTo(x, x), x;
    }
    function O(u) {
      this.m = u;
    }
    function $(u) {
      return u.s < 0 || u.compareTo(this.m) >= 0 ? u.mod(this.m) : u;
    }
    function z(u) {
      return u;
    }
    function fe(u) {
      u.divRemTo(this.m, null, u);
    }
    function le(u, x, m) {
      u.multiplyTo(x, m), this.reduce(m);
    }
    function we(u, x) {
      u.squareTo(x), this.reduce(x);
    }
    O.prototype.convert = $, O.prototype.revert = z, O.prototype.reduce = fe, O.prototype.mulTo = le, O.prototype.sqrTo = we;
    function te() {
      if (this.t < 1)
        return 0;
      var u = this[0];
      if (!(u & 1))
        return 0;
      var x = u & 3;
      return x = x * (2 - (u & 15) * x) & 15, x = x * (2 - (u & 255) * x) & 255, x = x * (2 - ((u & 65535) * x & 65535)) & 65535, x = x * (2 - u * x % this.DV) % this.DV, x > 0 ? this.DV - x : -x;
    }
    function ge(u) {
      this.m = u, this.mp = u.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << u.DB - 15) - 1, this.mt2 = 2 * u.t;
    }
    function Ge(u) {
      var x = o();
      return u.abs().dlShiftTo(this.m.t, x), x.divRemTo(this.m, null, x), u.s < 0 && x.compareTo(a.ZERO) > 0 && this.m.subTo(x, x), x;
    }
    function Bt(u) {
      var x = o();
      return u.copyTo(x), this.reduce(x), x;
    }
    function ot(u) {
      for (; u.t <= this.mt2; )
        u[u.t++] = 0;
      for (var x = 0; x < this.m.t; ++x) {
        var m = u[x] & 32767, w = m * this.mpl + ((m * this.mph + (u[x] >> 15) * this.mpl & this.um) << 15) & u.DM;
        for (m = x + this.m.t, u[m] += this.m.am(0, w, u, x, 0, this.m.t); u[m] >= u.DV; )
          u[m] -= u.DV, u[++m]++;
      }
      u.clamp(), u.drShiftTo(this.m.t, u), u.compareTo(this.m) >= 0 && u.subTo(this.m, u);
    }
    function Ae(u, x) {
      u.squareTo(x), this.reduce(x);
    }
    function Ce(u, x, m) {
      u.multiplyTo(x, m), this.reduce(m);
    }
    ge.prototype.convert = Ge, ge.prototype.revert = Bt, ge.prototype.reduce = ot, ge.prototype.mulTo = Ce, ge.prototype.sqrTo = Ae;
    function pt() {
      return (this.t > 0 ? this[0] & 1 : this.s) == 0;
    }
    function vt(u, x) {
      if (u > 4294967295 || u < 1)
        return a.ONE;
      var m = o(), w = o(), R = x.convert(this), H = B(u) - 1;
      for (R.copyTo(m); --H >= 0; )
        if (x.sqrTo(m, w), (u & 1 << H) > 0)
          x.mulTo(w, R, m);
        else {
          var U = m;
          m = w, w = U;
        }
      return x.revert(m);
    }
    function wt(u, x) {
      var m;
      return u < 256 || x.isEven() ? m = new O(x) : m = new ge(x), this.exp(u, m);
    }
    a.prototype.copyTo = b, a.prototype.fromInt = C, a.prototype.fromString = T, a.prototype.clamp = A, a.prototype.dlShiftTo = P, a.prototype.drShiftTo = W, a.prototype.lShiftTo = G, a.prototype.rShiftTo = Y, a.prototype.subTo = X, a.prototype.multiplyTo = Z, a.prototype.squareTo = oe, a.prototype.divRemTo = ie, a.prototype.invDigit = te, a.prototype.isEven = pt, a.prototype.exp = vt, a.prototype.toString = S, a.prototype.negate = k, a.prototype.abs = L, a.prototype.compareTo = F, a.prototype.bitLength = I, a.prototype.mod = M, a.prototype.modPowInt = wt, a.ZERO = E(0), a.ONE = E(1);
    function mt() {
      var u = o();
      return this.copyTo(u), u;
    }
    function Nt() {
      if (this.s < 0) {
        if (this.t == 1)
          return this[0] - this.DV;
        if (this.t == 0)
          return -1;
      } else {
        if (this.t == 1)
          return this[0];
        if (this.t == 0)
          return 0;
      }
      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }
    function gt() {
      return this.t == 0 ? this.s : this[0] << 24 >> 24;
    }
    function Te() {
      return this.t == 0 ? this.s : this[0] << 16 >> 16;
    }
    function Se(u) {
      return Math.floor(Math.LN2 * this.DB / Math.log(u));
    }
    function Ue() {
      return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
    }
    function V(u) {
      if (u == null && (u = 10), this.signum() == 0 || u < 2 || u > 36)
        return "0";
      var x = this.chunkSize(u), m = Math.pow(u, x), w = E(m), R = o(), H = o(), U = "";
      for (this.divRemTo(w, R, H); R.signum() > 0; )
        U = (m + H.intValue()).toString(u).substr(1) + U, R.divRemTo(w, R, H);
      return H.intValue().toString(u) + U;
    }
    function ce(u, x) {
      this.fromInt(0), x == null && (x = 10);
      for (var m = this.chunkSize(x), w = Math.pow(x, m), R = !1, H = 0, U = 0, K = 0; K < u.length; ++K) {
        var pe = _(u, K);
        if (pe < 0) {
          u.charAt(K) == "-" && this.signum() == 0 && (R = !0);
          continue;
        }
        U = x * U + pe, ++H >= m && (this.dMultiply(w), this.dAddOffset(U, 0), H = 0, U = 0);
      }
      H > 0 && (this.dMultiply(Math.pow(x, H)), this.dAddOffset(U, 0)), R && a.ZERO.subTo(this, this);
    }
    function Me(u, x, m) {
      if (typeof x == "number")
        if (u < 2)
          this.fromInt(1);
        else
          for (this.fromNumber(u, m), this.testBit(u - 1) || this.bitwiseTo(a.ONE.shiftLeft(u - 1), n0, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(x); )
            this.dAddOffset(2, 0), this.bitLength() > u && this.subTo(a.ONE.shiftLeft(u - 1), this);
      else {
        var w = new Array(), R = u & 7;
        w.length = (u >> 3) + 1, x.nextBytes(w), R > 0 ? w[0] &= (1 << R) - 1 : w[0] = 0, this.fromString(w, 256);
      }
    }
    function st() {
      var u = this.t, x = new Array();
      x[0] = this.s;
      var m = this.DB - u * this.DB % 8, w, R = 0;
      if (u-- > 0)
        for (m < this.DB && (w = this[u] >> m) != (this.s & this.DM) >> m && (x[R++] = w | this.s << this.DB - m); u >= 0; )
          m < 8 ? (w = (this[u] & (1 << m) - 1) << 8 - m, w |= this[--u] >> (m += this.DB - 8)) : (w = this[u] >> (m -= 8) & 255, m <= 0 && (m += this.DB, --u)), w & 128 && (w |= -256), R == 0 && (this.s & 128) != (w & 128) && ++R, (R > 0 || w != this.s) && (x[R++] = w);
      return x;
    }
    function t0(u) {
      return this.compareTo(u) == 0;
    }
    function R0(u) {
      return this.compareTo(u) < 0 ? this : u;
    }
    function O0(u) {
      return this.compareTo(u) > 0 ? this : u;
    }
    function Dt(u, x, m) {
      var w, R, H = Math.min(u.t, this.t);
      for (w = 0; w < H; ++w)
        m[w] = x(this[w], u[w]);
      if (u.t < this.t) {
        for (R = u.s & this.DM, w = H; w < this.t; ++w)
          m[w] = x(this[w], R);
        m.t = this.t;
      } else {
        for (R = this.s & this.DM, w = H; w < u.t; ++w)
          m[w] = x(R, u[w]);
        m.t = u.t;
      }
      m.s = x(this.s, u.s), m.clamp();
    }
    function Vt(u, x) {
      return u & x;
    }
    function Sn(u) {
      var x = o();
      return this.bitwiseTo(u, Vt, x), x;
    }
    function n0(u, x) {
      return u | x;
    }
    function z0(u) {
      var x = o();
      return this.bitwiseTo(u, n0, x), x;
    }
    function L0(u, x) {
      return u ^ x;
    }
    function kn(u) {
      var x = o();
      return this.bitwiseTo(u, L0, x), x;
    }
    function v0(u, x) {
      return u & ~x;
    }
    function In(u) {
      var x = o();
      return this.bitwiseTo(u, v0, x), x;
    }
    function H0() {
      for (var u = o(), x = 0; x < this.t; ++x)
        u[x] = this.DM & ~this[x];
      return u.t = this.t, u.s = ~this.s, u;
    }
    function Pn(u) {
      var x = o();
      return u < 0 ? this.rShiftTo(-u, x) : this.lShiftTo(u, x), x;
    }
    function $0(u) {
      var x = o();
      return u < 0 ? this.lShiftTo(-u, x) : this.rShiftTo(u, x), x;
    }
    function Mn(u) {
      if (u == 0)
        return -1;
      var x = 0;
      return u & 65535 || (u >>= 16, x += 16), u & 255 || (u >>= 8, x += 8), u & 15 || (u >>= 4, x += 4), u & 3 || (u >>= 2, x += 2), u & 1 || ++x, x;
    }
    function Rn() {
      for (var u = 0; u < this.t; ++u)
        if (this[u] != 0)
          return u * this.DB + Mn(this[u]);
      return this.s < 0 ? this.t * this.DB : -1;
    }
    function On(u) {
      for (var x = 0; u != 0; )
        u &= u - 1, ++x;
      return x;
    }
    function N0() {
      for (var u = 0, x = this.s & this.DM, m = 0; m < this.t; ++m)
        u += On(this[m] ^ x);
      return u;
    }
    function zn(u) {
      var x = Math.floor(u / this.DB);
      return x >= this.t ? this.s != 0 : (this[x] & 1 << u % this.DB) != 0;
    }
    function Ln(u, x) {
      var m = a.ONE.shiftLeft(u);
      return this.bitwiseTo(m, x, m), m;
    }
    function V0(u) {
      return this.changeBit(u, n0);
    }
    function Hn(u) {
      return this.changeBit(u, v0);
    }
    function q0(u) {
      return this.changeBit(u, L0);
    }
    function Re(u, x) {
      for (var m = 0, w = 0, R = Math.min(u.t, this.t); m < R; )
        w += this[m] + u[m], x[m++] = w & this.DM, w >>= this.DB;
      if (u.t < this.t) {
        for (w += u.s; m < this.t; )
          w += this[m], x[m++] = w & this.DM, w >>= this.DB;
        w += this.s;
      } else {
        for (w += this.s; m < u.t; )
          w += u[m], x[m++] = w & this.DM, w >>= this.DB;
        w += u.s;
      }
      x.s = w < 0 ? -1 : 0, w > 0 ? x[m++] = w : w < -1 && (x[m++] = this.DV + w), x.t = m, x.clamp();
    }
    function lt(u) {
      var x = o();
      return this.addTo(u, x), x;
    }
    function U0(u) {
      var x = o();
      return this.subTo(u, x), x;
    }
    function $n(u) {
      var x = o();
      return this.multiplyTo(u, x), x;
    }
    function $s() {
      var u = o();
      return this.squareTo(u), u;
    }
    function Ns(u) {
      var x = o();
      return this.divRemTo(u, x, null), x;
    }
    function Vs(u) {
      var x = o();
      return this.divRemTo(u, null, x), x;
    }
    function qs(u) {
      var x = o(), m = o();
      return this.divRemTo(u, x, m), new Array(x, m);
    }
    function Us(u) {
      this[this.t] = this.am(0, u - 1, this, 0, 0, this.t), ++this.t, this.clamp();
    }
    function Ys(u, x) {
      if (u != 0) {
        for (; this.t <= x; )
          this[this.t++] = 0;
        for (this[x] += u; this[x] >= this.DV; )
          this[x] -= this.DV, ++x >= this.t && (this[this.t++] = 0), ++this[x];
      }
    }
    function m0() {
    }
    function vi(u) {
      return u;
    }
    function Ks(u, x, m) {
      u.multiplyTo(x, m);
    }
    function Ws(u, x) {
      u.squareTo(x);
    }
    m0.prototype.convert = vi, m0.prototype.revert = vi, m0.prototype.mulTo = Ks, m0.prototype.sqrTo = Ws;
    function js(u) {
      return this.exp(u, new m0());
    }
    function Gs(u, x, m) {
      var w = Math.min(this.t + u.t, x);
      for (m.s = 0, m.t = w; w > 0; )
        m[--w] = 0;
      var R;
      for (R = m.t - this.t; w < R; ++w)
        m[w + this.t] = this.am(0, u[w], m, w, 0, this.t);
      for (R = Math.min(u.t, x); w < R; ++w)
        this.am(0, u[w], m, w, 0, x - w);
      m.clamp();
    }
    function Xs(u, x, m) {
      --x;
      var w = m.t = this.t + u.t - x;
      for (m.s = 0; --w >= 0; )
        m[w] = 0;
      for (w = Math.max(x - this.t, 0); w < u.t; ++w)
        m[this.t + w - x] = this.am(x - w, u[w], m, 0, 0, this.t + w - x);
      m.clamp(), m.drShiftTo(1, m);
    }
    function qt(u) {
      this.r2 = o(), this.q3 = o(), a.ONE.dlShiftTo(2 * u.t, this.r2), this.mu = this.r2.divide(u), this.m = u;
    }
    function Zs(u) {
      if (u.s < 0 || u.t > 2 * this.m.t)
        return u.mod(this.m);
      if (u.compareTo(this.m) < 0)
        return u;
      var x = o();
      return u.copyTo(x), this.reduce(x), x;
    }
    function Js(u) {
      return u;
    }
    function Qs(u) {
      for (u.drShiftTo(this.m.t - 1, this.r2), u.t > this.m.t + 1 && (u.t = this.m.t + 1, u.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); u.compareTo(this.r2) < 0; )
        u.dAddOffset(1, this.m.t + 1);
      for (u.subTo(this.r2, u); u.compareTo(this.m) >= 0; )
        u.subTo(this.m, u);
    }
    function el(u, x) {
      u.squareTo(x), this.reduce(x);
    }
    function tl(u, x, m) {
      u.multiplyTo(x, m), this.reduce(m);
    }
    qt.prototype.convert = Zs, qt.prototype.revert = Js, qt.prototype.reduce = Qs, qt.prototype.mulTo = tl, qt.prototype.sqrTo = el;
    function nl(u, x) {
      var m = u.bitLength(), w, R = E(1), H;
      if (m <= 0)
        return R;
      m < 18 ? w = 1 : m < 48 ? w = 3 : m < 144 ? w = 4 : m < 768 ? w = 5 : w = 6, m < 8 ? H = new O(x) : x.isEven() ? H = new qt(x) : H = new ge(x);
      var U = new Array(), K = 3, pe = w - 1, _e = (1 << w) - 1;
      if (U[1] = H.convert(this), w > 1) {
        var Xe = o();
        for (H.sqrTo(U[1], Xe); K <= _e; )
          U[K] = o(), H.mulTo(Xe, U[K - 2], U[K]), K += 2;
      }
      var Ke = u.t - 1, yt, K0 = !0, tt = o(), nt;
      for (m = B(u[Ke]) - 1; Ke >= 0; ) {
        for (m >= pe ? yt = u[Ke] >> m - pe & _e : (yt = (u[Ke] & (1 << m + 1) - 1) << pe - m, Ke > 0 && (yt |= u[Ke - 1] >> this.DB + m - pe)), K = w; !(yt & 1); )
          yt >>= 1, --K;
        if ((m -= K) < 0 && (m += this.DB, --Ke), K0)
          U[yt].copyTo(R), K0 = !1;
        else {
          for (; K > 1; )
            H.sqrTo(R, tt), H.sqrTo(tt, R), K -= 2;
          K > 0 ? H.sqrTo(R, tt) : (nt = R, R = tt, tt = nt), H.mulTo(tt, U[yt], R);
        }
        for (; Ke >= 0 && !(u[Ke] & 1 << m); )
          H.sqrTo(R, tt), nt = R, R = tt, tt = nt, --m < 0 && (m = this.DB - 1, --Ke);
      }
      return H.revert(R);
    }
    function rl(u) {
      var x = this.s < 0 ? this.negate() : this.clone(), m = u.s < 0 ? u.negate() : u.clone();
      if (x.compareTo(m) < 0) {
        var w = x;
        x = m, m = w;
      }
      var R = x.getLowestSetBit(), H = m.getLowestSetBit();
      if (H < 0)
        return x;
      for (R < H && (H = R), H > 0 && (x.rShiftTo(H, x), m.rShiftTo(H, m)); x.signum() > 0; )
        (R = x.getLowestSetBit()) > 0 && x.rShiftTo(R, x), (R = m.getLowestSetBit()) > 0 && m.rShiftTo(R, m), x.compareTo(m) >= 0 ? (x.subTo(m, x), x.rShiftTo(1, x)) : (m.subTo(x, m), m.rShiftTo(1, m));
      return H > 0 && m.lShiftTo(H, m), m;
    }
    function il(u) {
      if (u <= 0)
        return 0;
      var x = this.DV % u, m = this.s < 0 ? u - 1 : 0;
      if (this.t > 0)
        if (x == 0)
          m = this[0] % u;
        else
          for (var w = this.t - 1; w >= 0; --w)
            m = (x * m + this[w]) % u;
      return m;
    }
    function al(u) {
      var x = u.isEven();
      if (this.isEven() && x || u.signum() == 0)
        return a.ZERO;
      for (var m = u.clone(), w = this.clone(), R = E(1), H = E(0), U = E(0), K = E(1); m.signum() != 0; ) {
        for (; m.isEven(); )
          m.rShiftTo(1, m), x ? ((!R.isEven() || !H.isEven()) && (R.addTo(this, R), H.subTo(u, H)), R.rShiftTo(1, R)) : H.isEven() || H.subTo(u, H), H.rShiftTo(1, H);
        for (; w.isEven(); )
          w.rShiftTo(1, w), x ? ((!U.isEven() || !K.isEven()) && (U.addTo(this, U), K.subTo(u, K)), U.rShiftTo(1, U)) : K.isEven() || K.subTo(u, K), K.rShiftTo(1, K);
        m.compareTo(w) >= 0 ? (m.subTo(w, m), x && R.subTo(U, R), H.subTo(K, H)) : (w.subTo(m, w), x && U.subTo(R, U), K.subTo(H, K));
      }
      if (w.compareTo(a.ONE) != 0)
        return a.ZERO;
      if (K.compareTo(u) >= 0)
        return K.subtract(u);
      if (K.signum() < 0)
        K.addTo(u, K);
      else
        return K;
      return K.signum() < 0 ? K.add(u) : K;
    }
    var Oe = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], ol = (1 << 26) / Oe[Oe.length - 1];
    function sl(u) {
      var x, m = this.abs();
      if (m.t == 1 && m[0] <= Oe[Oe.length - 1]) {
        for (x = 0; x < Oe.length; ++x)
          if (m[0] == Oe[x])
            return !0;
        return !1;
      }
      if (m.isEven())
        return !1;
      for (x = 1; x < Oe.length; ) {
        for (var w = Oe[x], R = x + 1; R < Oe.length && w < ol; )
          w *= Oe[R++];
        for (w = m.modInt(w); x < R; )
          if (w % Oe[x++] == 0)
            return !1;
      }
      return m.millerRabin(u);
    }
    function ll(u) {
      var x = this.subtract(a.ONE), m = x.getLowestSetBit();
      if (m <= 0)
        return !1;
      var w = x.shiftRight(m);
      u = u + 1 >> 1, u > Oe.length && (u = Oe.length);
      for (var R = o(), H = 0; H < u; ++H) {
        R.fromInt(Oe[Math.floor(Math.random() * Oe.length)]);
        var U = R.modPow(w, this);
        if (U.compareTo(a.ONE) != 0 && U.compareTo(x) != 0) {
          for (var K = 1; K++ < m && U.compareTo(x) != 0; )
            if (U = U.modPowInt(2, this), U.compareTo(a.ONE) == 0)
              return !1;
          if (U.compareTo(x) != 0)
            return !1;
        }
      }
      return !0;
    }
    a.prototype.chunkSize = Se, a.prototype.toRadix = V, a.prototype.fromRadix = ce, a.prototype.fromNumber = Me, a.prototype.bitwiseTo = Dt, a.prototype.changeBit = Ln, a.prototype.addTo = Re, a.prototype.dMultiply = Us, a.prototype.dAddOffset = Ys, a.prototype.multiplyLowerTo = Gs, a.prototype.multiplyUpperTo = Xs, a.prototype.modInt = il, a.prototype.millerRabin = ll, a.prototype.clone = mt, a.prototype.intValue = Nt, a.prototype.byteValue = gt, a.prototype.shortValue = Te, a.prototype.signum = Ue, a.prototype.toByteArray = st, a.prototype.equals = t0, a.prototype.min = R0, a.prototype.max = O0, a.prototype.and = Sn, a.prototype.or = z0, a.prototype.xor = kn, a.prototype.andNot = In, a.prototype.not = H0, a.prototype.shiftLeft = Pn, a.prototype.shiftRight = $0, a.prototype.getLowestSetBit = Rn, a.prototype.bitCount = N0, a.prototype.testBit = zn, a.prototype.setBit = V0, a.prototype.clearBit = Hn, a.prototype.flipBit = q0, a.prototype.add = lt, a.prototype.subtract = U0, a.prototype.multiply = $n, a.prototype.divide = Ns, a.prototype.remainder = Vs, a.prototype.divideAndRemainder = qs, a.prototype.modPow = nl, a.prototype.modInverse = al, a.prototype.pow = js, a.prototype.gcd = rl, a.prototype.isProbablePrime = sl, a.prototype.square = $s, a.prototype.Barrett = qt;
    var Y0, Ye, Ee;
    function cl(u) {
      Ye[Ee++] ^= u & 255, Ye[Ee++] ^= u >> 8 & 255, Ye[Ee++] ^= u >> 16 & 255, Ye[Ee++] ^= u >> 24 & 255, Ee >= Vn && (Ee -= Vn);
    }
    function mi() {
      cl((/* @__PURE__ */ new Date()).getTime());
    }
    if (Ye == null) {
      Ye = new Array(), Ee = 0;
      var et;
      if (typeof window < "u" && window.crypto) {
        if (window.crypto.getRandomValues) {
          var gi = new Uint8Array(32);
          for (window.crypto.getRandomValues(gi), et = 0; et < 32; ++et)
            Ye[Ee++] = gi[et];
        } else if (navigator.appName == "Netscape" && navigator.appVersion < "5") {
          var yi = window.crypto.random(32);
          for (et = 0; et < yi.length; ++et)
            Ye[Ee++] = yi.charCodeAt(et) & 255;
        }
      }
      for (; Ee < Vn; )
        et = Math.floor(65536 * Math.random()), Ye[Ee++] = et >>> 8, Ye[Ee++] = et & 255;
      Ee = 0, mi();
    }
    function ul() {
      if (Y0 == null) {
        for (mi(), Y0 = hl(), Y0.init(Ye), Ee = 0; Ee < Ye.length; ++Ee)
          Ye[Ee] = 0;
        Ee = 0;
      }
      return Y0.next();
    }
    function fl(u) {
      var x;
      for (x = 0; x < u.length; ++x)
        u[x] = ul();
    }
    function bi() {
    }
    bi.prototype.nextBytes = fl;
    function Nn() {
      this.i = 0, this.j = 0, this.S = new Array();
    }
    function dl(u) {
      var x, m, w;
      for (x = 0; x < 256; ++x)
        this.S[x] = x;
      for (m = 0, x = 0; x < 256; ++x)
        m = m + this.S[x] + u[x % u.length] & 255, w = this.S[x], this.S[x] = this.S[m], this.S[m] = w;
      this.i = 0, this.j = 0;
    }
    function xl() {
      var u;
      return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, u = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = u, this.S[u + this.S[this.i] & 255];
    }
    Nn.prototype.init = dl, Nn.prototype.next = xl;
    function hl() {
      return new Nn();
    }
    var Vn = 256;
    e.exports = {
      default: a,
      BigInteger: a,
      SecureRandom: bi
    };
  }).call(re);
})(Eo);
var wn = Eo.exports;
const { BigInteger: l0 } = wn;
function Xc(e) {
  let n = e.toString(16);
  if (n[0] !== "-")
    n.length % 2 === 1 ? n = "0" + n : n.match(/^[0-7]/) || (n = "00" + n);
  else {
    n = n.substr(1);
    let r = n.length;
    r % 2 === 1 ? r += 1 : n.match(/^[0-7]/) || (r += 2);
    let t = "";
    for (let i = 0; i < r; i++)
      t += "f";
    t = new l0(t, 16), n = t.xor(e).add(l0.ONE), n = n.toString(16).replace(/^-/, "");
  }
  return n;
}
class _o {
  constructor() {
    this.tlv = null, this.t = "00", this.l = "00", this.v = "";
  }
  /**
   * 获取 der 编码比特流16进制串
   */
  getEncodedHex() {
    return this.tlv || (this.v = this.getValue(), this.l = this.getLength(), this.tlv = this.t + this.l + this.v), this.tlv;
  }
  getLength() {
    const n = this.v.length / 2;
    let r = n.toString(16);
    return r.length % 2 === 1 && (r = "0" + r), n < 128 ? r : (128 + r.length / 2).toString(16) + r;
  }
  getValue() {
    return "";
  }
}
class na extends _o {
  constructor(n) {
    super(), this.t = "02", n && (this.v = Xc(n));
  }
  getValue() {
    return this.v;
  }
}
class Zc extends _o {
  constructor(n) {
    super(), this.t = "30", this.asn1Array = n;
  }
  getValue() {
    return this.v = this.asn1Array.map((n) => n.getEncodedHex()).join(""), this.v;
  }
}
function Bo(e, n) {
  return +e[n + 2] < 8 ? 1 : +e.substr(n + 2, 2) & 127 + 1;
}
function ra(e, n) {
  const r = Bo(e, n), t = e.substr(n + 2, r * 2);
  return t ? (+t[0] < 8 ? new l0(t, 16) : new l0(t.substr(2), 16)).intValue() : -1;
}
function Fr(e, n) {
  const r = Bo(e, n);
  return n + (r + 1) * 2;
}
var Jc = {
  /**
   * ASN.1 der 编码，针对 sm2 签名
   */
  encodeDer(e, n) {
    const r = new na(e), t = new na(n);
    return new Zc([r, t]).getEncodedHex();
  },
  /**
   * 解析 ASN.1 der，针对 sm2 验签
   */
  decodeDer(e) {
    const n = Fr(e, 0), r = Fr(e, n), t = ra(e, n), i = e.substr(r, t * 2), a = r + i.length, o = Fr(e, a), l = ra(e, a), c = e.substr(o, l * 2), s = new l0(i, 16), f = new l0(c, 16);
    return { r: s, s: f };
  }
};
const { BigInteger: ze } = wn, ia = new ze("2"), aa = new ze("3");
class It {
  constructor(n, r) {
    this.x = r, this.q = n;
  }
  /**
   * 判断相等
   */
  equals(n) {
    return n === this ? !0 : this.q.equals(n.q) && this.x.equals(n.x);
  }
  /**
   * 返回具体数值
   */
  toBigInteger() {
    return this.x;
  }
  /**
   * 取反
   */
  negate() {
    return new It(this.q, this.x.negate().mod(this.q));
  }
  /**
   * 相加
   */
  add(n) {
    return new It(this.q, this.x.add(n.toBigInteger()).mod(this.q));
  }
  /**
   * 相减
   */
  subtract(n) {
    return new It(this.q, this.x.subtract(n.toBigInteger()).mod(this.q));
  }
  /**
   * 相乘
   */
  multiply(n) {
    return new It(this.q, this.x.multiply(n.toBigInteger()).mod(this.q));
  }
  /**
   * 相除
   */
  divide(n) {
    return new It(this.q, this.x.multiply(n.toBigInteger().modInverse(this.q)).mod(this.q));
  }
  /**
   * 平方
   */
  square() {
    return new It(this.q, this.x.square().mod(this.q));
  }
}
class Ot {
  constructor(n, r, t, i) {
    this.curve = n, this.x = r, this.y = t, this.z = i ?? ze.ONE, this.zinv = null;
  }
  getX() {
    return this.zinv === null && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q));
  }
  getY() {
    return this.zinv === null && (this.zinv = this.z.modInverse(this.curve.q)), this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q));
  }
  /**
   * 判断相等
   */
  equals(n) {
    return n === this ? !0 : this.isInfinity() ? n.isInfinity() : n.isInfinity() ? this.isInfinity() : n.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(n.z)).mod(this.curve.q).equals(ze.ZERO) ? n.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(n.z)).mod(this.curve.q).equals(ze.ZERO) : !1;
  }
  /**
   * 是否是无穷远点
   */
  isInfinity() {
    return this.x === null && this.y === null ? !0 : this.z.equals(ze.ZERO) && !this.y.toBigInteger().equals(ze.ZERO);
  }
  /**
   * 取反，x 轴对称点
   */
  negate() {
    return new Ot(this.curve, this.x, this.y.negate(), this.z);
  }
  /**
   * 相加
   *
   * 标准射影坐标系：
   *
   * λ1 = x1 * z2
   * λ2 = x2 * z1
   * λ3 = λ1 − λ2
   * λ4 = y1 * z2
   * λ5 = y2 * z1
   * λ6 = λ4 − λ5
   * λ7 = λ1 + λ2
   * λ8 = z1 * z2
   * λ9 = λ3^2
   * λ10 = λ3 * λ9
   * λ11 = λ8 * λ6^2 − λ7 * λ9
   * x3 = λ3 * λ11
   * y3 = λ6 * (λ9 * λ1 − λ11) − λ4 * λ10
   * z3 = λ10 * λ8
   */
  add(n) {
    if (this.isInfinity())
      return n;
    if (n.isInfinity())
      return this;
    const r = this.x.toBigInteger(), t = this.y.toBigInteger(), i = this.z, a = n.x.toBigInteger(), o = n.y.toBigInteger(), l = n.z, c = this.curve.q, s = r.multiply(l).mod(c), f = a.multiply(i).mod(c), v = s.subtract(f), h = t.multiply(l).mod(c), g = o.multiply(i).mod(c), d = h.subtract(g);
    if (ze.ZERO.equals(v))
      return ze.ZERO.equals(d) ? this.twice() : this.curve.infinity;
    const p = s.add(f), y = i.multiply(l).mod(c), _ = v.square().mod(c), b = v.multiply(_).mod(c), C = y.multiply(d.square()).subtract(p.multiply(_)).mod(c), E = v.multiply(C).mod(c), T = d.multiply(_.multiply(s).subtract(C)).subtract(h.multiply(b)).mod(c), A = b.multiply(y).mod(c);
    return new Ot(this.curve, this.curve.fromBigInteger(E), this.curve.fromBigInteger(T), A);
  }
  /**
   * 自加
   *
   * 标准射影坐标系：
   *
   * λ1 = 3 * x1^2 + a * z1^2
   * λ2 = 2 * y1 * z1
   * λ3 = y1^2
   * λ4 = λ3 * x1 * z1
   * λ5 = λ2^2
   * λ6 = λ1^2 − 8 * λ4
   * x3 = λ2 * λ6
   * y3 = λ1 * (4 * λ4 − λ6) − 2 * λ5 * λ3
   * z3 = λ2 * λ5
   */
  twice() {
    if (this.isInfinity())
      return this;
    if (!this.y.toBigInteger().signum())
      return this.curve.infinity;
    const n = this.x.toBigInteger(), r = this.y.toBigInteger(), t = this.z, i = this.curve.q, a = this.curve.a.toBigInteger(), o = n.square().multiply(aa).add(a.multiply(t.square())).mod(i), l = r.shiftLeft(1).multiply(t).mod(i), c = r.square().mod(i), s = c.multiply(n).multiply(t).mod(i), f = l.square().mod(i), v = o.square().subtract(s.shiftLeft(3)).mod(i), h = l.multiply(v).mod(i), g = o.multiply(s.shiftLeft(2).subtract(v)).subtract(f.shiftLeft(1).multiply(c)).mod(i), d = l.multiply(f).mod(i);
    return new Ot(this.curve, this.curve.fromBigInteger(h), this.curve.fromBigInteger(g), d);
  }
  /**
   * 倍点计算
   */
  multiply(n) {
    if (this.isInfinity())
      return this;
    if (!n.signum())
      return this.curve.infinity;
    const r = n.multiply(aa), t = this.negate();
    let i = this;
    for (let a = r.bitLength() - 2; a > 0; a--) {
      i = i.twice();
      const o = r.testBit(a), l = n.testBit(a);
      o !== l && (i = i.add(o ? this : t));
    }
    return i;
  }
}
let Qc = class {
  constructor(n, r, t) {
    this.q = n, this.a = this.fromBigInteger(r), this.b = this.fromBigInteger(t), this.infinity = new Ot(this, null, null);
  }
  /**
   * 判断两个椭圆曲线是否相等
   */
  equals(n) {
    return n === this ? !0 : this.q.equals(n.q) && this.a.equals(n.a) && this.b.equals(n.b);
  }
  /**
   * 生成椭圆曲线域元素
   */
  fromBigInteger(n) {
    return new It(this.q, n);
  }
  /**
   * 解析 16 进制串为椭圆曲线点
   */
  decodePointHex(n) {
    switch (parseInt(n.substr(0, 2), 16)) {
      case 0:
        return this.infinity;
      case 2:
      case 3:
        const r = this.fromBigInteger(new ze(n.substr(2), 16));
        let t = this.fromBigInteger(r.multiply(r.square()).add(
          r.multiply(this.a)
        ).add(this.b).toBigInteger().modPow(
          this.q.divide(new ze("4")).add(ze.ONE),
          this.q
        ));
        return t.toBigInteger().mod(ia).equals(new ze(n.substr(0, 2), 16).subtract(ia)) || (t = t.negate()), new Ot(this, r, t);
      case 4:
      case 6:
      case 7:
        const i = (n.length - 2) / 2, a = n.substr(2, i), o = n.substr(i + 2, i);
        return new Ot(this, this.fromBigInteger(new ze(a, 16)), this.fromBigInteger(new ze(o, 16)));
      default:
        return null;
    }
  }
};
var eu = {
  ECPointFp: Ot,
  ECCurveFp: Qc
};
const { BigInteger: at, SecureRandom: tu } = wn, { ECCurveFp: nu } = eu, ru = new tu(), { curve: o0, G: iu, n: oa } = wo();
function au() {
  return o0;
}
function wo() {
  const e = new at("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16), n = new at("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16), r = new at("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16), t = new nu(e, n, r), i = "32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7", a = "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0", o = t.decodePointHex("04" + i + a), l = new at("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16);
  return { curve: t, G: o, n: l };
}
function ou(e, n, r) {
  const i = (e ? new at(e, n, r) : new at(oa.bitLength(), ru)).mod(oa.subtract(at.ONE)).add(at.ONE), a = w0(i.toString(16), 64), o = iu.multiply(i), l = w0(o.getX().toBigInteger().toString(16), 64), c = w0(o.getY().toBigInteger().toString(16), 64), s = "04" + l + c;
  return { privateKey: a, publicKey: s };
}
function su(e) {
  if (e.length !== 130)
    throw new Error("Invalid public key to compress");
  const n = (e.length - 2) / 2, r = e.substr(2, n), t = new at(e.substr(n + 2, n), 16);
  let i = "03";
  return t.mod(new at("2")).equals(at.ZERO) && (i = "02"), i + r;
}
function lu(e) {
  e = unescape(encodeURIComponent(e));
  const n = e.length, r = [];
  for (let i = 0; i < n; i++)
    r[i >>> 2] |= (e.charCodeAt(i) & 255) << 24 - i % 4 * 8;
  const t = [];
  for (let i = 0; i < n; i++) {
    const a = r[i >>> 2] >>> 24 - i % 4 * 8 & 255;
    t.push((a >>> 4).toString(16)), t.push((a & 15).toString(16));
  }
  return t.join("");
}
function w0(e, n) {
  return e.length >= n ? e : new Array(n - e.length + 1).join("0") + e;
}
function cu(e) {
  return e.map((n) => (n = n.toString(16), n.length === 1 ? "0" + n : n)).join("");
}
function uu(e) {
  const n = [];
  let r = 0;
  for (let t = 0; t < e.length * 2; t += 2)
    n[t >>> 3] |= parseInt(e[r], 10) << 24 - t % 8 * 4, r++;
  try {
    const t = [];
    for (let i = 0; i < e.length; i++) {
      const a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      t.push(String.fromCharCode(a));
    }
    return decodeURIComponent(escape(t.join("")));
  } catch {
    throw new Error("Malformed UTF-8 data");
  }
}
function fu(e) {
  const n = [];
  let r = e.length;
  r % 2 !== 0 && (e = w0(e, r + 1)), r = e.length;
  for (let t = 0; t < r; t += 2)
    n.push(parseInt(e.substr(t, 2), 16));
  return n;
}
function du(e) {
  const n = o0.decodePointHex(e);
  if (!n)
    return !1;
  const r = n.getX();
  return n.getY().square().equals(r.multiply(r.square()).add(r.multiply(o0.a)).add(o0.b));
}
function xu(e, n) {
  const r = o0.decodePointHex(e);
  if (!r)
    return !1;
  const t = o0.decodePointHex(n);
  return t ? r.equals(t) : !1;
}
var hu = {
  getGlobalCurve: au,
  generateEcparam: wo,
  generateKeyPairHex: ou,
  compressPublicKeyHex: su,
  utf8ToHex: lu,
  leftPad: w0,
  arrayToHex: cu,
  arrayToUtf8: uu,
  hexToArray: fu,
  verifyPublicKey: du,
  comparePublicKeyHex: xu
};
const rt = new Uint32Array(68), Ar = new Uint32Array(64);
function Ze(e, n) {
  const r = n & 31;
  return e << r | e >>> 32 - r;
}
function sa(e, n) {
  const r = [];
  for (let t = e.length - 1; t >= 0; t--)
    r[t] = (e[t] ^ n[t]) & 255;
  return r;
}
function pu(e) {
  return e ^ Ze(e, 9) ^ Ze(e, 17);
}
function vu(e) {
  return e ^ Ze(e, 15) ^ Ze(e, 23);
}
function ln(e) {
  let n = e.length * 8, r = n % 512;
  r = r >= 448 ? 512 - r % 448 - 1 : 448 - r - 1;
  const t = new Array((r - 7) / 8), i = new Array(8);
  for (let f = 0, v = t.length; f < v; f++)
    t[f] = 0;
  for (let f = 0, v = i.length; f < v; f++)
    i[f] = 0;
  n = n.toString(2);
  for (let f = 7; f >= 0; f--)
    if (n.length > 8) {
      const v = n.length - 8;
      i[f] = parseInt(n.substr(v), 2), n = n.substr(0, v);
    } else
      n.length > 0 && (i[f] = parseInt(n, 2), n = "");
  const a = new Uint8Array([...e, 128, ...t, ...i]), o = new DataView(a.buffer, 0), l = a.length / 64, c = new Uint32Array([1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214]);
  for (let f = 0; f < l; f++) {
    rt.fill(0), Ar.fill(0);
    const v = 16 * f;
    for (let B = 0; B < 16; B++)
      rt[B] = o.getUint32((v + B) * 4, !1);
    for (let B = 16; B < 68; B++)
      rt[B] = vu(rt[B - 16] ^ rt[B - 9] ^ Ze(rt[B - 3], 15)) ^ Ze(rt[B - 13], 7) ^ rt[B - 6];
    for (let B = 0; B < 64; B++)
      Ar[B] = rt[B] ^ rt[B + 4];
    const h = 2043430169, g = 2055708042;
    let d = c[0], p = c[1], y = c[2], _ = c[3], b = c[4], C = c[5], E = c[6], T = c[7], A, S, k, L, F;
    for (let B = 0; B < 64; B++)
      F = B >= 0 && B <= 15 ? h : g, A = Ze(Ze(d, 12) + b + Ze(F, B), 7), S = A ^ Ze(d, 12), k = (B >= 0 && B <= 15 ? d ^ p ^ y : d & p | d & y | p & y) + _ + S + Ar[B], L = (B >= 0 && B <= 15 ? b ^ C ^ E : b & C | ~b & E) + T + A + rt[B], _ = y, y = Ze(p, 9), p = d, d = k, T = E, E = Ze(C, 19), C = b, b = pu(L);
    c[0] ^= d, c[1] ^= p, c[2] ^= y, c[3] ^= _, c[4] ^= b, c[5] ^= C, c[6] ^= E, c[7] ^= T;
  }
  const s = [];
  for (let f = 0, v = c.length; f < v; f++) {
    const h = c[f];
    s.push((h & 4278190080) >>> 24, (h & 16711680) >>> 16, (h & 65280) >>> 8, h & 255);
  }
  return s;
}
const T0 = 64, Do = new Uint8Array(T0), Fo = new Uint8Array(T0);
for (let e = 0; e < T0; e++)
  Do[e] = 54, Fo[e] = 92;
function mu(e, n) {
  for (n.length > T0 && (n = ln(n)); n.length < T0; )
    n.push(0);
  const r = sa(n, Do), t = sa(n, Fo), i = ln([...r, ...e]);
  return ln([...t, ...i]);
}
var Ao = {
  sm3: ln,
  hmac: mu
};
const { BigInteger: ke } = wn, { encodeDer: gu, decodeDer: yu } = Jc, Q = hu, c0 = Ao.sm3, { G: Kt, curve: To, n: Wt } = Q.generateEcparam(), So = 0;
function bu(e, n, r = 1) {
  e = typeof e == "string" ? Q.hexToArray(Q.utf8ToHex(e)) : Array.prototype.slice.call(e), n = Q.getGlobalCurve().decodePointHex(n);
  const t = Q.generateKeyPairHex(), i = new ke(t.privateKey, 16);
  let a = t.publicKey;
  a.length > 128 && (a = a.substr(a.length - 128));
  const o = n.multiply(i), l = Q.hexToArray(Q.leftPad(o.getX().toBigInteger().toRadix(16), 64)), c = Q.hexToArray(Q.leftPad(o.getY().toBigInteger().toRadix(16), 64)), s = Q.arrayToHex(c0([].concat(l, e, c)));
  let f = 1, v = 0, h = [];
  const g = [].concat(l, c), d = () => {
    h = c0([...g, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255]), f++, v = 0;
  };
  d();
  for (let y = 0, _ = e.length; y < _; y++)
    v === h.length && d(), e[y] ^= h[v++] & 255;
  const p = Q.arrayToHex(e);
  return r === So ? a + p + s : a + s + p;
}
function Cu(e, n, r = 1, {
  output: t = "string"
} = {}) {
  n = new ke(n, 16);
  let i = e.substr(128, 64), a = e.substr(128 + 64);
  r === So && (i = e.substr(e.length - 64), a = e.substr(128, e.length - 128 - 64));
  const o = Q.hexToArray(a), l = Q.getGlobalCurve().decodePointHex("04" + e.substr(0, 128));
  if (!l || !Q.verifyPublicKey("04" + e.substr(0, 128)))
    return t === "array" ? [] : "";
  const c = l.multiply(n), s = Q.hexToArray(Q.leftPad(c.getX().toBigInteger().toRadix(16), 64)), f = Q.hexToArray(Q.leftPad(c.getY().toBigInteger().toRadix(16), 64));
  let v = 1, h = 0, g = [];
  const d = [].concat(s, f), p = () => {
    g = c0([...d, v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, v & 255]), v++, h = 0;
  };
  p();
  for (let _ = 0, b = o.length; _ < b; _++)
    h === g.length && p(), o[_] ^= g[h++] & 255;
  return Q.arrayToHex(c0([].concat(s, o, f))) === i.toLowerCase() ? t === "array" ? o : Q.arrayToUtf8(o) : t === "array" ? [] : "";
}
function Eu(e, n, {
  pointPool: r,
  der: t,
  hash: i = !0,
  publicKey: a,
  userId: o
} = {}) {
  let l = typeof e == "string" ? Q.utf8ToHex(e) : Q.arrayToHex(e);
  i && (a = a || Io(n), l = ko(l, a, o));
  const c = new ke(n, 16), s = new ke(l, 16);
  let f = null, v = null, h = null;
  do {
    do {
      let g;
      r && r.length ? g = r.pop() : g = Po(), f = g.k, v = s.add(g.x1).mod(Wt);
    } while (v.equals(ke.ZERO) || v.add(f).equals(Wt));
    h = c.add(ke.ONE).modInverse(Wt).multiply(f.subtract(v.multiply(c))).mod(Wt);
  } while (h.equals(ke.ZERO));
  return t ? gu(v, h) : Q.leftPad(v.toString(16), 64) + Q.leftPad(h.toString(16), 64);
}
function _u(e, n, r, { der: t, hash: i = !0, userId: a } = {}) {
  let o = typeof e == "string" ? Q.utf8ToHex(e) : Q.arrayToHex(e);
  i && (o = ko(o, r, a));
  let l, c;
  if (t) {
    const p = yu(n);
    l = p.r, c = p.s;
  } else
    l = new ke(n.substring(0, 64), 16), c = new ke(n.substring(64), 16);
  const s = Wt.subtract(ke.ONE);
  if (l.compareTo(ke.ONE) < 0 || l.compareTo(s) > 0 || c.compareTo(ke.ONE) < 0 || c.compareTo(s) > 0)
    return !1;
  const f = To.decodePointHex(r);
  if (!f || !Q.verifyPublicKey(r))
    return !1;
  const v = new ke(o, 16), h = l.add(c).mod(Wt);
  if (h.equals(ke.ZERO))
    return !1;
  const g = Kt.multiply(c).add(f.multiply(h)), d = v.add(g.getX().toBigInteger()).mod(Wt);
  return l.equals(d);
}
function ko(e, n, r = "1234567812345678") {
  r = Q.utf8ToHex(r);
  const t = Q.leftPad(Kt.curve.a.toBigInteger().toRadix(16), 64), i = Q.leftPad(Kt.curve.b.toBigInteger().toRadix(16), 64), a = Q.leftPad(Kt.getX().toBigInteger().toRadix(16), 64), o = Q.leftPad(Kt.getY().toBigInteger().toRadix(16), 64);
  let l, c;
  if (n.length === 128)
    l = n.substr(0, 64), c = n.substr(64, 64);
  else {
    const h = Kt.curve.decodePointHex(n);
    l = Q.leftPad(h.getX().toBigInteger().toRadix(16), 64), c = Q.leftPad(h.getY().toBigInteger().toRadix(16), 64);
  }
  const s = Q.hexToArray(r + t + i + a + o + l + c), f = r.length * 4;
  s.unshift(f & 255), s.unshift(f >> 8 & 255);
  const v = c0(s);
  return Q.arrayToHex(c0(v.concat(Q.hexToArray(e))));
}
function Io(e) {
  const n = Kt.multiply(new ke(e, 16)), r = Q.leftPad(n.getX().toBigInteger().toString(16), 64), t = Q.leftPad(n.getY().toBigInteger().toString(16), 64);
  return "04" + r + t;
}
function Po() {
  const e = Q.generateKeyPairHex(), n = To.decodePointHex(e.publicKey);
  return e.k = new ke(e.privateKey, 16), e.x1 = n.getX().toBigInteger(), e;
}
var Bu = {
  generateKeyPairHex: Q.generateKeyPairHex,
  compressPublicKeyHex: Q.compressPublicKeyHex,
  comparePublicKeyHex: Q.comparePublicKeyHex,
  doEncrypt: bu,
  doDecrypt: Cu,
  doSignature: Eu,
  doVerifySignature: _u,
  getPublicKeyFromPrivateKey: Io,
  getPoint: Po,
  verifyPublicKey: Q.verifyPublicKey
};
const { sm3: wu, hmac: Du } = Ao;
function Fu(e, n) {
  return e.length >= n ? e : new Array(n - e.length + 1).join("0") + e;
}
function la(e) {
  return e.map((n) => (n = n.toString(16), n.length === 1 ? "0" + n : n)).join("");
}
function Au(e) {
  const n = [];
  let r = e.length;
  r % 2 !== 0 && (e = Fu(e, r + 1)), r = e.length;
  for (let t = 0; t < r; t += 2)
    n.push(parseInt(e.substr(t, 2), 16));
  return n;
}
function Tu(e) {
  const n = [];
  for (let r = 0, t = e.length; r < t; r++) {
    const i = e.codePointAt(r);
    if (i <= 127)
      n.push(i);
    else if (i <= 2047)
      n.push(192 | i >>> 6), n.push(128 | i & 63);
    else if (i <= 55295 || i >= 57344 && i <= 65535)
      n.push(224 | i >>> 12), n.push(128 | i >>> 6 & 63), n.push(128 | i & 63);
    else if (i >= 65536 && i <= 1114111)
      r++, n.push(240 | i >>> 18 & 28), n.push(128 | i >>> 12 & 63), n.push(128 | i >>> 6 & 63), n.push(128 | i & 63);
    else
      throw n.push(i), new Error("input is not supported");
  }
  return n;
}
var Su = function(e, n) {
  if (e = typeof e == "string" ? Tu(e) : Array.prototype.slice.call(e), n) {
    if ((n.mode || "hmac") !== "hmac")
      throw new Error("invalid mode");
    let t = n.key;
    if (!t)
      throw new Error("invalid key");
    return t = typeof t == "string" ? Au(t) : Array.prototype.slice.call(t), la(Du(e, t));
  }
  return la(wu(e));
};
const Tt = 0, ku = 32, Ut = 16, G0 = [
  214,
  144,
  233,
  254,
  204,
  225,
  61,
  183,
  22,
  182,
  20,
  194,
  40,
  251,
  44,
  5,
  43,
  103,
  154,
  118,
  42,
  190,
  4,
  195,
  170,
  68,
  19,
  38,
  73,
  134,
  6,
  153,
  156,
  66,
  80,
  244,
  145,
  239,
  152,
  122,
  51,
  84,
  11,
  67,
  237,
  207,
  172,
  98,
  228,
  179,
  28,
  169,
  201,
  8,
  232,
  149,
  128,
  223,
  148,
  250,
  117,
  143,
  63,
  166,
  71,
  7,
  167,
  252,
  243,
  115,
  23,
  186,
  131,
  89,
  60,
  25,
  230,
  133,
  79,
  168,
  104,
  107,
  129,
  178,
  113,
  100,
  218,
  139,
  248,
  235,
  15,
  75,
  112,
  86,
  157,
  53,
  30,
  36,
  14,
  94,
  99,
  88,
  209,
  162,
  37,
  34,
  124,
  59,
  1,
  33,
  120,
  135,
  212,
  0,
  70,
  87,
  159,
  211,
  39,
  82,
  76,
  54,
  2,
  231,
  160,
  196,
  200,
  158,
  234,
  191,
  138,
  210,
  64,
  199,
  56,
  181,
  163,
  247,
  242,
  206,
  249,
  97,
  21,
  161,
  224,
  174,
  93,
  164,
  155,
  52,
  26,
  85,
  173,
  147,
  50,
  48,
  245,
  140,
  177,
  227,
  29,
  246,
  226,
  46,
  130,
  102,
  202,
  96,
  192,
  41,
  35,
  171,
  13,
  83,
  78,
  111,
  213,
  219,
  55,
  69,
  222,
  253,
  142,
  47,
  3,
  255,
  106,
  114,
  109,
  108,
  91,
  81,
  141,
  27,
  175,
  146,
  187,
  221,
  188,
  127,
  17,
  217,
  92,
  65,
  31,
  16,
  90,
  216,
  10,
  193,
  49,
  136,
  165,
  205,
  123,
  189,
  45,
  116,
  208,
  18,
  184,
  229,
  180,
  176,
  137,
  105,
  151,
  74,
  12,
  150,
  119,
  126,
  101,
  185,
  241,
  9,
  197,
  110,
  198,
  132,
  24,
  240,
  125,
  236,
  58,
  220,
  77,
  32,
  121,
  238,
  95,
  62,
  215,
  203,
  57,
  72
], X0 = [
  462357,
  472066609,
  943670861,
  1415275113,
  1886879365,
  2358483617,
  2830087869,
  3301692121,
  3773296373,
  4228057617,
  404694573,
  876298825,
  1347903077,
  1819507329,
  2291111581,
  2762715833,
  3234320085,
  3705924337,
  4177462797,
  337322537,
  808926789,
  1280531041,
  1752135293,
  2223739545,
  2695343797,
  3166948049,
  3638552301,
  4110090761,
  269950501,
  741554753,
  1213159005,
  1684763257
];
function Tr(e) {
  const n = [];
  for (let r = 0, t = e.length; r < t; r += 2)
    n.push(parseInt(e.substr(r, 2), 16));
  return n;
}
function Iu(e) {
  return e.map((n) => (n = n.toString(16), n.length === 1 ? "0" + n : n)).join("");
}
function Pu(e) {
  const n = [];
  for (let r = 0, t = e.length; r < t; r++) {
    const i = e.codePointAt(r);
    if (i <= 127)
      n.push(i);
    else if (i <= 2047)
      n.push(192 | i >>> 6), n.push(128 | i & 63);
    else if (i <= 55295 || i >= 57344 && i <= 65535)
      n.push(224 | i >>> 12), n.push(128 | i >>> 6 & 63), n.push(128 | i & 63);
    else if (i >= 65536 && i <= 1114111)
      r++, n.push(240 | i >>> 18 & 28), n.push(128 | i >>> 12 & 63), n.push(128 | i >>> 6 & 63), n.push(128 | i & 63);
    else
      throw n.push(i), new Error("input is not supported");
  }
  return n;
}
function Mu(e) {
  const n = [];
  for (let r = 0, t = e.length; r < t; r++)
    e[r] >= 240 && e[r] <= 247 ? (n.push(String.fromCodePoint(((e[r] & 7) << 18) + ((e[r + 1] & 63) << 12) + ((e[r + 2] & 63) << 6) + (e[r + 3] & 63))), r += 3) : e[r] >= 224 && e[r] <= 239 ? (n.push(String.fromCodePoint(((e[r] & 15) << 12) + ((e[r + 1] & 63) << 6) + (e[r + 2] & 63))), r += 2) : e[r] >= 192 && e[r] <= 223 ? (n.push(String.fromCodePoint(((e[r] & 31) << 6) + (e[r + 1] & 63))), r++) : n.push(String.fromCodePoint(e[r]));
  return n.join("");
}
function a0(e, n) {
  const r = n & 31;
  return e << r | e >>> 32 - r;
}
function Mt(e) {
  return (G0[e >>> 24 & 255] & 255) << 24 | (G0[e >>> 16 & 255] & 255) << 16 | (G0[e >>> 8 & 255] & 255) << 8 | G0[e & 255] & 255;
}
function Z0(e) {
  return e ^ a0(e, 2) ^ a0(e, 10) ^ a0(e, 18) ^ a0(e, 24);
}
function J0(e) {
  return e ^ a0(e, 13) ^ a0(e, 23);
}
function Ru(e, n, r) {
  const t = new Array(4), i = new Array(4);
  for (let a = 0; a < 4; a++)
    i[0] = e[4 * a] & 255, i[1] = e[4 * a + 1] & 255, i[2] = e[4 * a + 2] & 255, i[3] = e[4 * a + 3] & 255, t[a] = i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3];
  for (let a = 0, o; a < 32; a += 4)
    o = t[1] ^ t[2] ^ t[3] ^ r[a + 0], t[0] ^= Z0(Mt(o)), o = t[2] ^ t[3] ^ t[0] ^ r[a + 1], t[1] ^= Z0(Mt(o)), o = t[3] ^ t[0] ^ t[1] ^ r[a + 2], t[2] ^= Z0(Mt(o)), o = t[0] ^ t[1] ^ t[2] ^ r[a + 3], t[3] ^= Z0(Mt(o));
  for (let a = 0; a < 16; a += 4)
    n[a] = t[3 - a / 4] >>> 24 & 255, n[a + 1] = t[3 - a / 4] >>> 16 & 255, n[a + 2] = t[3 - a / 4] >>> 8 & 255, n[a + 3] = t[3 - a / 4] & 255;
}
function Ou(e, n, r) {
  const t = new Array(4), i = new Array(4);
  for (let a = 0; a < 4; a++)
    i[0] = e[0 + 4 * a] & 255, i[1] = e[1 + 4 * a] & 255, i[2] = e[2 + 4 * a] & 255, i[3] = e[3 + 4 * a] & 255, t[a] = i[0] << 24 | i[1] << 16 | i[2] << 8 | i[3];
  t[0] ^= 2746333894, t[1] ^= 1453994832, t[2] ^= 1736282519, t[3] ^= 2993693404;
  for (let a = 0, o; a < 32; a += 4)
    o = t[1] ^ t[2] ^ t[3] ^ X0[a + 0], n[a + 0] = t[0] ^= J0(Mt(o)), o = t[2] ^ t[3] ^ t[0] ^ X0[a + 1], n[a + 1] = t[1] ^= J0(Mt(o)), o = t[3] ^ t[0] ^ t[1] ^ X0[a + 2], n[a + 2] = t[2] ^= J0(Mt(o)), o = t[0] ^ t[1] ^ t[2] ^ X0[a + 3], n[a + 3] = t[3] ^= J0(Mt(o));
  if (r === Tt)
    for (let a = 0, o; a < 16; a++)
      o = n[a], n[a] = n[31 - a], n[31 - a] = o;
}
function ca(e, n, r, {
  padding: t = "pkcs#7",
  mode: i,
  iv: a = [],
  output: o = "string"
} = {}) {
  if (i === "cbc" && (typeof a == "string" && (a = Tr(a)), a.length !== 128 / 8))
    throw new Error("iv is invalid");
  if (typeof n == "string" && (n = Tr(n)), n.length !== 128 / 8)
    throw new Error("key is invalid");
  if (typeof e == "string" ? r !== Tt ? e = Pu(e) : e = Tr(e) : e = [...e], (t === "pkcs#5" || t === "pkcs#7") && r !== Tt) {
    const h = Ut - e.length % Ut;
    for (let g = 0; g < h; g++)
      e.push(h);
  }
  const l = new Array(ku);
  Ou(n, l, r);
  const c = [];
  let s = a, f = e.length, v = 0;
  for (; f >= Ut; ) {
    const h = e.slice(v, v + 16), g = new Array(16);
    if (i === "cbc")
      for (let d = 0; d < Ut; d++)
        r !== Tt && (h[d] ^= s[d]);
    Ru(h, g, l);
    for (let d = 0; d < Ut; d++)
      i === "cbc" && r === Tt && (g[d] ^= s[d]), c[v + d] = g[d];
    i === "cbc" && (r !== Tt ? s = g : s = h), f -= Ut, v += Ut;
  }
  if ((t === "pkcs#5" || t === "pkcs#7") && r === Tt) {
    const h = c.length, g = c[h - 1];
    for (let d = 1; d <= g; d++)
      if (c[h - d] !== g)
        throw new Error("padding is invalid");
    c.splice(h - g, g);
  }
  return o !== "array" ? r !== Tt ? Iu(c) : Mu(c) : c;
}
var zu = {
  encrypt(e, n, r) {
    return ca(e, n, 1, r);
  },
  decrypt(e, n, r) {
    return ca(e, n, 0, r);
  }
}, ut = {
  sm2: Bu,
  sm3: Su,
  sm4: zu
};
const Lu = {
  // 生成 sm2 密钥对（公钥+私钥）
  generateKeyPair() {
    return ut.sm2.generateKeyPairHex();
  },
  // 公钥加密； 1 - C1C3C2，0 - C1C2C3，默认为1
  encrypt(e, n, r = 1) {
    return ut.sm2.doEncrypt(e, n, r);
  },
  // 私钥解密
  decrypt(e, n, r = 1) {
    return ut.sm2.doDecrypt(e, n, r);
  },
  // 私钥签名（常用：交易签名、身份认证）
  sign(e, n) {
    return ut.sm2.sign(ut.sm3.digest(e), n, "base64");
  },
  // 公钥验签
  verify(e, n, r) {
    return ut.sm2.verify(ut.sm3.digest(e), n, r, "base64");
  }
}, Hu = {
  // 计算数据摘要（指纹）
  digest(e) {
    return ut.sm3.digest(e, "utf8", "hex");
  }
}, $u = {
  // 生成随机16位密钥（sm4固定128位）
  generateKey() {
    const e = crypto.getRandomValues(new Uint8Array(16));
    return Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
  },
  // 加密（传输/存储用）
  encrypt(e, n) {
    return ut.sm4.encrypt(e, n);
  },
  // 解密
  decrypt(e, n) {
    return ut.sm4.decrypt(e, n);
  }
}, Mo = {
  SM2Util: Lu,
  SM3Util: Hu,
  SM4Util: $u
};
function Nu(e) {
  if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(e))
    return;
  let r = e.toLowerCase().replace(/\#/g, ""), t = r.length;
  if (t == 3) {
    let o = "";
    for (var i = 0; i < t; i++)
      o += r.slice(i, i + 1).concat(r.slice(i, i + 1));
    r = o;
  }
  let a = [];
  for (let o = 0; o < 6; o = o + 2) {
    let l = r.slice(o, o + 2);
    a.push(parseInt("0x" + l));
  }
  return a.join(",");
}
function Vu(e) {
  if (!/^(rgb|RGB)/.test(e))
    return;
  var r = e.slice(4, e.length - 1).split(",");
  let t = "#";
  for (var i = 0; i < r.length; i++) {
    var a = Number(r[i]).toString(16);
    a == "0" && (a = a + "0"), t += a;
  }
  return t;
}
function qu() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
}
const Ro = {
  c16ToRgb: Nu,
  rgbToC16: Vu,
  random16Color: qu
}, Uu = 30 * 1;
function Yu() {
  const e = new Date(Lt.getDES(window.g.SRKJ_APP, "SRKJ_LJS_license_date_2023_07_27")).getTime();
  return ((/* @__PURE__ */ new Date()).getTime() - e) / 1e3 / 60 / 60 / 24 <= Uu;
}
const Oo = {
  licenseDateCheck: Yu
}, zo = Symbol(), cn = "el", Ku = "is-", Yt = (e, n, r, t, i) => {
  let a = `${e}-${n}`;
  return r && (a += `-${r}`), t && (a += `__${t}`), i && (a += `--${i}`), a;
}, Lo = Symbol("namespaceContextKey"), Ho = (e) => {
  const n = e || (ht() ? Ve(Lo, he(cn)) : he(cn));
  return j(() => N(n) || cn);
}, Ct = (e, n) => {
  const r = Ho(n);
  return {
    namespace: r,
    b: (p = "") => Yt(r.value, e, p, "", ""),
    e: (p) => p ? Yt(r.value, e, "", p, "") : "",
    m: (p) => p ? Yt(r.value, e, "", "", p) : "",
    be: (p, y) => p && y ? Yt(r.value, e, p, y, "") : "",
    em: (p, y) => p && y ? Yt(r.value, e, "", p, y) : "",
    bm: (p, y) => p && y ? Yt(r.value, e, p, "", y) : "",
    bem: (p, y, _) => p && y && _ ? Yt(r.value, e, p, y, _) : "",
    is: (p, ...y) => {
      const _ = y.length >= 1 ? y[0] : !0;
      return p && _ ? `${Ku}${p}` : "";
    },
    cssVar: (p) => {
      const y = {};
      for (const _ in p)
        p[_] && (y[`--${r.value}-${_}`] = p[_]);
      return y;
    },
    cssVarName: (p) => `--${r.value}-${p}`,
    cssVarBlock: (p) => {
      const y = {};
      for (const _ in p)
        p[_] && (y[`--${r.value}-${e}-${_}`] = p[_]);
      return y;
    },
    cssVarBlockName: (p) => `--${r.value}-${e}-${p}`
  };
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const D0 = () => {
}, Wu = Object.prototype.hasOwnProperty, pn = (e, n) => Wu.call(e, n), u0 = (e) => typeof e == "function", dt = (e) => typeof e == "string", f0 = (e) => e !== null && typeof e == "object", ju = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (r) => n[r] || (n[r] = e(r));
}, Gu = /-(\w)/g, Xu = ju((e) => e.replace(Gu, (n, r) => r ? r.toUpperCase() : ""));
var Zu = typeof global == "object" && global && global.Object === Object && global;
const Ju = Zu;
var Qu = typeof self == "object" && self && self.Object === Object && self, ef = Ju || Qu || Function("return this")();
const ti = ef;
var tf = ti.Symbol;
const Ht = tf;
var $o = Object.prototype, nf = $o.hasOwnProperty, rf = $o.toString, y0 = Ht ? Ht.toStringTag : void 0;
function af(e) {
  var n = nf.call(e, y0), r = e[y0];
  try {
    e[y0] = void 0;
    var t = !0;
  } catch {
  }
  var i = rf.call(e);
  return t && (n ? e[y0] = r : delete e[y0]), i;
}
var of = Object.prototype, sf = of.toString;
function lf(e) {
  return sf.call(e);
}
var cf = "[object Null]", uf = "[object Undefined]", ua = Ht ? Ht.toStringTag : void 0;
function ni(e) {
  return e == null ? e === void 0 ? uf : cf : ua && ua in Object(e) ? af(e) : lf(e);
}
function ri(e) {
  return e != null && typeof e == "object";
}
var ff = "[object Symbol]";
function ii(e) {
  return typeof e == "symbol" || ri(e) && ni(e) == ff;
}
function df(e, n) {
  for (var r = -1, t = e == null ? 0 : e.length, i = Array(t); ++r < t; )
    i[r] = n(e[r], r, e);
  return i;
}
var xf = Array.isArray;
const M0 = xf;
var hf = 1 / 0, fa = Ht ? Ht.prototype : void 0, da = fa ? fa.toString : void 0;
function No(e) {
  if (typeof e == "string")
    return e;
  if (M0(e))
    return df(e, No) + "";
  if (ii(e))
    return da ? da.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -hf ? "-0" : n;
}
function vn(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function pf(e) {
  return e;
}
var vf = "[object AsyncFunction]", mf = "[object Function]", gf = "[object GeneratorFunction]", yf = "[object Proxy]";
function bf(e) {
  if (!vn(e))
    return !1;
  var n = ni(e);
  return n == mf || n == gf || n == vf || n == yf;
}
var Cf = ti["__core-js_shared__"];
const Sr = Cf;
var xa = function() {
  var e = /[^.]+$/.exec(Sr && Sr.keys && Sr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ef(e) {
  return !!xa && xa in e;
}
var _f = Function.prototype, Bf = _f.toString;
function wf(e) {
  if (e != null) {
    try {
      return Bf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Df = /[\\^$.*+?()[\]{}|]/g, Ff = /^\[object .+?Constructor\]$/, Af = Function.prototype, Tf = Object.prototype, Sf = Af.toString, kf = Tf.hasOwnProperty, If = RegExp(
  "^" + Sf.call(kf).replace(Df, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pf(e) {
  if (!vn(e) || Ef(e))
    return !1;
  var n = bf(e) ? If : Ff;
  return n.test(wf(e));
}
function Mf(e, n) {
  return e == null ? void 0 : e[n];
}
function ai(e, n) {
  var r = Mf(e, n);
  return Pf(r) ? r : void 0;
}
function Rf(e, n, r) {
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
var Of = 800, zf = 16, Lf = Date.now;
function Hf(e) {
  var n = 0, r = 0;
  return function() {
    var t = Lf(), i = zf - (t - r);
    if (r = t, i > 0) {
      if (++n >= Of)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function $f(e) {
  return function() {
    return e;
  };
}
var Nf = function() {
  try {
    var e = ai(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const mn = Nf;
var Vf = mn ? function(e, n) {
  return mn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: $f(n),
    writable: !0
  });
} : pf;
const qf = Vf;
var Uf = Hf(qf);
const Yf = Uf;
var Kf = 9007199254740991, Wf = /^(?:0|[1-9]\d*)$/;
function Vo(e, n) {
  var r = typeof e;
  return n = n ?? Kf, !!n && (r == "number" || r != "symbol" && Wf.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function jf(e, n, r) {
  n == "__proto__" && mn ? mn(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function qo(e, n) {
  return e === n || e !== e && n !== n;
}
var Gf = Object.prototype, Xf = Gf.hasOwnProperty;
function Zf(e, n, r) {
  var t = e[n];
  (!(Xf.call(e, n) && qo(t, r)) || r === void 0 && !(n in e)) && jf(e, n, r);
}
var ha = Math.max;
function Jf(e, n, r) {
  return n = ha(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var t = arguments, i = -1, a = ha(t.length - n, 0), o = Array(a); ++i < a; )
      o[i] = t[n + i];
    i = -1;
    for (var l = Array(n + 1); ++i < n; )
      l[i] = t[i];
    return l[n] = r(o), Rf(e, this, l);
  };
}
var Qf = 9007199254740991;
function ed(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Qf;
}
var td = "[object Arguments]";
function pa(e) {
  return ri(e) && ni(e) == td;
}
var Uo = Object.prototype, nd = Uo.hasOwnProperty, rd = Uo.propertyIsEnumerable, id = pa(function() {
  return arguments;
}()) ? pa : function(e) {
  return ri(e) && nd.call(e, "callee") && !rd.call(e, "callee");
};
const Yo = id;
var ad = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, od = /^\w*$/;
function sd(e, n) {
  if (M0(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ii(e) ? !0 : od.test(e) || !ad.test(e) || n != null && e in Object(n);
}
var ld = ai(Object, "create");
const S0 = ld;
function cd() {
  this.__data__ = S0 ? S0(null) : {}, this.size = 0;
}
function ud(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var fd = "__lodash_hash_undefined__", dd = Object.prototype, xd = dd.hasOwnProperty;
function hd(e) {
  var n = this.__data__;
  if (S0) {
    var r = n[e];
    return r === fd ? void 0 : r;
  }
  return xd.call(n, e) ? n[e] : void 0;
}
var pd = Object.prototype, vd = pd.hasOwnProperty;
function md(e) {
  var n = this.__data__;
  return S0 ? n[e] !== void 0 : vd.call(n, e);
}
var gd = "__lodash_hash_undefined__";
function yd(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = S0 && n === void 0 ? gd : n, this;
}
function Xt(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var t = e[n];
    this.set(t[0], t[1]);
  }
}
Xt.prototype.clear = cd;
Xt.prototype.delete = ud;
Xt.prototype.get = hd;
Xt.prototype.has = md;
Xt.prototype.set = yd;
function bd() {
  this.__data__ = [], this.size = 0;
}
function Dn(e, n) {
  for (var r = e.length; r--; )
    if (qo(e[r][0], n))
      return r;
  return -1;
}
var Cd = Array.prototype, Ed = Cd.splice;
function _d(e) {
  var n = this.__data__, r = Dn(n, e);
  if (r < 0)
    return !1;
  var t = n.length - 1;
  return r == t ? n.pop() : Ed.call(n, r, 1), --this.size, !0;
}
function Bd(e) {
  var n = this.__data__, r = Dn(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function wd(e) {
  return Dn(this.__data__, e) > -1;
}
function Dd(e, n) {
  var r = this.__data__, t = Dn(r, e);
  return t < 0 ? (++this.size, r.push([e, n])) : r[t][1] = n, this;
}
function d0(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var t = e[n];
    this.set(t[0], t[1]);
  }
}
d0.prototype.clear = bd;
d0.prototype.delete = _d;
d0.prototype.get = Bd;
d0.prototype.has = wd;
d0.prototype.set = Dd;
var Fd = ai(ti, "Map");
const Ad = Fd;
function Td() {
  this.size = 0, this.__data__ = {
    hash: new Xt(),
    map: new (Ad || d0)(),
    string: new Xt()
  };
}
function Sd(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Fn(e, n) {
  var r = e.__data__;
  return Sd(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function kd(e) {
  var n = Fn(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Id(e) {
  return Fn(this, e).get(e);
}
function Pd(e) {
  return Fn(this, e).has(e);
}
function Md(e, n) {
  var r = Fn(this, e), t = r.size;
  return r.set(e, n), this.size += r.size == t ? 0 : 1, this;
}
function e0(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var t = e[n];
    this.set(t[0], t[1]);
  }
}
e0.prototype.clear = Td;
e0.prototype.delete = kd;
e0.prototype.get = Id;
e0.prototype.has = Pd;
e0.prototype.set = Md;
var Rd = "Expected a function";
function oi(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(Rd);
  var r = function() {
    var t = arguments, i = n ? n.apply(this, t) : t[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var o = e.apply(this, t);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (oi.Cache || e0)(), r;
}
oi.Cache = e0;
var Od = 500;
function zd(e) {
  var n = oi(e, function(t) {
    return r.size === Od && r.clear(), t;
  }), r = n.cache;
  return n;
}
var Ld = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Hd = /\\(\\)?/g, $d = zd(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(Ld, function(r, t, i, a) {
    n.push(i ? a.replace(Hd, "$1") : t || r);
  }), n;
});
const Nd = $d;
function Vd(e) {
  return e == null ? "" : No(e);
}
function An(e, n) {
  return M0(e) ? e : sd(e, n) ? [e] : Nd(Vd(e));
}
var qd = 1 / 0;
function si(e) {
  if (typeof e == "string" || ii(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -qd ? "-0" : n;
}
function Ko(e, n) {
  n = An(n, e);
  for (var r = 0, t = n.length; e != null && r < t; )
    e = e[si(n[r++])];
  return r && r == t ? e : void 0;
}
function Ud(e, n, r) {
  var t = e == null ? void 0 : Ko(e, n);
  return t === void 0 ? r : t;
}
function Yd(e, n) {
  for (var r = -1, t = n.length, i = e.length; ++r < t; )
    e[i + r] = n[r];
  return e;
}
var va = Ht ? Ht.isConcatSpreadable : void 0;
function Kd(e) {
  return M0(e) || Yo(e) || !!(va && e && e[va]);
}
function Wo(e, n, r, t, i) {
  var a = -1, o = e.length;
  for (r || (r = Kd), i || (i = []); ++a < o; ) {
    var l = e[a];
    n > 0 && r(l) ? n > 1 ? Wo(l, n - 1, r, t, i) : Yd(i, l) : t || (i[i.length] = l);
  }
  return i;
}
function Wd(e) {
  var n = e == null ? 0 : e.length;
  return n ? Wo(e, 1) : [];
}
function jd(e) {
  return Yf(Jf(e, void 0, Wd), e + "");
}
function Gd(e, n) {
  return e != null && n in Object(e);
}
function Xd(e, n, r) {
  n = An(n, e);
  for (var t = -1, i = n.length, a = !1; ++t < i; ) {
    var o = si(n[t]);
    if (!(a = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return a || ++t != i ? a : (i = e == null ? 0 : e.length, !!i && ed(i) && Vo(o, i) && (M0(e) || Yo(e)));
}
function Zd(e, n) {
  return e != null && Xd(e, n, Gd);
}
function jo(e) {
  for (var n = -1, r = e == null ? 0 : e.length, t = {}; ++n < r; ) {
    var i = e[n];
    t[i[0]] = i[1];
  }
  return t;
}
function Go(e) {
  return e == null;
}
function Jd(e, n, r, t) {
  if (!vn(e))
    return e;
  n = An(n, e);
  for (var i = -1, a = n.length, o = a - 1, l = e; l != null && ++i < a; ) {
    var c = si(n[i]), s = r;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (i != o) {
      var f = l[c];
      s = t ? t(f, c, l) : void 0, s === void 0 && (s = vn(f) ? f : Vo(n[i + 1]) ? [] : {});
    }
    Zf(l, c, s), l = l[c];
  }
  return e;
}
function Qd(e, n, r) {
  for (var t = -1, i = n.length, a = {}; ++t < i; ) {
    var o = n[t], l = Ko(e, o);
    r(l, o) && Jd(a, An(o, e), l);
  }
  return a;
}
function ex(e, n) {
  return Qd(e, n, function(r, t) {
    return Zd(e, t);
  });
}
var tx = jd(function(e, n) {
  return e == null ? {} : ex(e, n);
});
const nx = tx, Xo = (e) => e === void 0, gn = (e) => typeof e == "number", k0 = (e) => typeof Element > "u" ? !1 : e instanceof Element, rx = (e) => dt(e) ? !Number.isNaN(Number(e)) : !1;
var ix = Object.defineProperty, ax = Object.defineProperties, ox = Object.getOwnPropertyDescriptors, ma = Object.getOwnPropertySymbols, sx = Object.prototype.hasOwnProperty, lx = Object.prototype.propertyIsEnumerable, ga = (e, n, r) => n in e ? ix(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, cx = (e, n) => {
  for (var r in n || (n = {}))
    sx.call(n, r) && ga(e, r, n[r]);
  if (ma)
    for (var r of ma(n))
      lx.call(n, r) && ga(e, r, n[r]);
  return e;
}, ux = (e, n) => ax(e, ox(n));
function fx(e, n) {
  var r;
  const t = B0();
  return Ga(() => {
    t.value = e();
  }, ux(cx({}, n), {
    flush: (r = n == null ? void 0 : n.flush) != null ? r : "sync"
  })), ml(t);
}
var ya;
const Qe = typeof window < "u", dx = (e) => typeof e == "string", xx = () => {
};
Qe && ((ya = window == null ? void 0 : window.navigator) != null && ya.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Zo(e) {
  return typeof e == "function" ? e() : N(e);
}
function hx(e) {
  return e;
}
function Jo(e) {
  return gl() ? (Xa(e), !0) : !1;
}
function px(e, n = !0) {
  ht() ? Et(e) : n ? e() : Ne(e);
}
function Qo(e) {
  var n;
  const r = Zo(e);
  return (n = r == null ? void 0 : r.$el) != null ? n : r;
}
const es = Qe ? window : void 0;
function b0(...e) {
  let n, r, t, i;
  if (dx(e[0]) || Array.isArray(e[0]) ? ([r, t, i] = e, n = es) : [n, r, t, i] = e, !n)
    return xx;
  Array.isArray(r) || (r = [r]), Array.isArray(t) || (t = [t]);
  const a = [], o = () => {
    a.forEach((f) => f()), a.length = 0;
  }, l = (f, v, h, g) => (f.addEventListener(v, h, g), () => f.removeEventListener(v, h, g)), c = qe(() => [Qo(n), Zo(i)], ([f, v]) => {
    o(), f && a.push(...r.flatMap((h) => t.map((g) => l(f, h, g, v))));
  }, { immediate: !0, flush: "post" }), s = () => {
    c(), o();
  };
  return Jo(s), s;
}
function vx(e, n = !1) {
  const r = he(), t = () => r.value = !!e();
  return t(), px(t, n), r;
}
const ba = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ca = "__vueuse_ssr_handlers__";
ba[Ca] = ba[Ca] || {};
var Ea = Object.getOwnPropertySymbols, mx = Object.prototype.hasOwnProperty, gx = Object.prototype.propertyIsEnumerable, yx = (e, n) => {
  var r = {};
  for (var t in e)
    mx.call(e, t) && n.indexOf(t) < 0 && (r[t] = e[t]);
  if (e != null && Ea)
    for (var t of Ea(e))
      n.indexOf(t) < 0 && gx.call(e, t) && (r[t] = e[t]);
  return r;
};
function bx(e, n, r = {}) {
  const t = r, { window: i = es } = t, a = yx(t, ["window"]);
  let o;
  const l = vx(() => i && "ResizeObserver" in i), c = () => {
    o && (o.disconnect(), o = void 0);
  }, s = qe(() => Qo(e), (v) => {
    c(), l.value && i && v && (o = new ResizeObserver(n), o.observe(v, a));
  }, { immediate: !0, flush: "post" }), f = () => {
    c(), s();
  };
  return Jo(f), {
    isSupported: l,
    stop: f
  };
}
var _a;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(_a || (_a = {}));
var Cx = Object.defineProperty, Ba = Object.getOwnPropertySymbols, Ex = Object.prototype.hasOwnProperty, _x = Object.prototype.propertyIsEnumerable, wa = (e, n, r) => n in e ? Cx(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[n] = r, Bx = (e, n) => {
  for (var r in n || (n = {}))
    Ex.call(n, r) && wa(e, r, n[r]);
  if (Ba)
    for (var r of Ba(n))
      _x.call(n, r) && wa(e, r, n[r]);
  return e;
};
const wx = {
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
Bx({
  linear: hx
}, wx);
class ts extends Error {
  constructor(n) {
    super(n), this.name = "ElementPlusError";
  }
}
function Dx(e, n) {
  throw new ts(`[${e}] ${n}`);
}
function xt(e, n) {
  if (process.env.NODE_ENV !== "production") {
    const r = dt(e) ? new ts(`[${e}] ${n}`) : e;
  }
}
const Da = {
  current: 0
}, Fa = he(0), ns = 2e3, Aa = Symbol("elZIndexContextKey"), rs = Symbol("zIndexContextKey"), Fx = (e) => {
  const n = ht() ? Ve(Aa, Da) : Da, r = e || (ht() ? Ve(rs, void 0) : void 0), t = j(() => {
    const o = N(r);
    return gn(o) ? o : ns;
  }), i = j(() => t.value + Fa.value), a = () => (n.current++, Fa.value = n.current, i.value);
  return !Qe && !Ve(Aa) && xt("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: t,
    currentZIndex: i,
    nextZIndex: a
  };
};
var Ax = {
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
const Tx = (e) => (n, r) => Sx(n, r, N(e)), Sx = (e, n, r) => Ud(r, e, e).replace(/\{(\w+)\}/g, (t, i) => {
  var a;
  return `${(a = n == null ? void 0 : n[i]) != null ? a : `{${i}}`}`;
}), kx = (e) => {
  const n = j(() => N(e).name), r = Za(e) ? e : he(e);
  return {
    lang: n,
    locale: r,
    t: Tx(e)
  };
}, is = Symbol("localeContextKey"), Ix = (e) => {
  const n = e || Ve(is, he());
  return kx(j(() => n.value || Ax));
}, as = "__epPropKey", zt = (e) => e, Px = (e) => f0(e) && !!e[as], os = (e, n) => {
  if (!f0(e) || Px(e))
    return e;
  const { values: r, required: t, default: i, type: a, validator: o } = e, c = {
    type: a,
    required: !!t,
    validator: r || o ? (s) => {
      let f = !1, v = [];
      if (r && (v = Array.from(r), pn(e, "default") && v.push(i), f || (f = v.includes(s))), o && (f || (f = o(s))), !f && v.length > 0) {
        const h = [...new Set(v)].map((g) => JSON.stringify(g)).join(", ");
        yl(`Invalid prop: validation failed${n ? ` for prop "${n}"` : ""}. Expected one of [${h}], got value ${JSON.stringify(s)}.`);
      }
      return f;
    } : void 0,
    [as]: !0
  };
  return pn(e, "default") && (c.default = i), c;
}, x0 = (e) => jo(Object.entries(e).map(([n, r]) => [
  n,
  os(r, n)
])), ss = ["", "default", "small", "large"], ls = os({
  type: String,
  values: ss,
  required: !1
}), cs = Symbol("size"), Mx = () => {
  const e = Ve(cs, {});
  return j(() => N(e.size) || "");
}, Rx = Symbol("emptyValuesContextKey");
x0({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => u0(e) ? !e() : !e
  }
});
const Ta = (e) => Object.keys(e), yn = he();
function li(e, n = void 0) {
  const r = ht() ? Ve(zo, yn) : yn;
  return e ? j(() => {
    var t, i;
    return (i = (t = r.value) == null ? void 0 : t[e]) != null ? i : n;
  }) : r;
}
function Ox(e, n) {
  const r = li(), t = Ct(e, j(() => {
    var l;
    return ((l = r.value) == null ? void 0 : l.namespace) || cn;
  })), i = Ix(j(() => {
    var l;
    return (l = r.value) == null ? void 0 : l.locale;
  })), a = Fx(j(() => {
    var l;
    return ((l = r.value) == null ? void 0 : l.zIndex) || ns;
  })), o = j(() => {
    var l;
    return N(n) || ((l = r.value) == null ? void 0 : l.size) || "";
  });
  return zx(j(() => N(r) || {})), {
    ns: t,
    locale: i,
    zIndex: a,
    size: o
  };
}
const zx = (e, n, r = !1) => {
  var t;
  const i = !!ht(), a = i ? li() : void 0, o = (t = n == null ? void 0 : n.provide) != null ? t : i ? Wr : void 0;
  if (!o) {
    xt("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = j(() => {
    const c = N(e);
    return a != null && a.value ? Lx(a.value, c) : c;
  });
  return o(zo, l), o(is, j(() => l.value.locale)), o(Lo, j(() => l.value.namespace)), o(rs, j(() => l.value.zIndex)), o(cs, {
    size: j(() => l.value.size || "")
  }), o(Rx, j(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (r || !yn.value) && (yn.value = l.value), l;
}, Lx = (e, n) => {
  const r = [.../* @__PURE__ */ new Set([...Ta(e), ...Ta(n)])], t = {};
  for (const i of r)
    t[i] = n[i] !== void 0 ? n[i] : e[i];
  return t;
}, $r = "update:modelValue", Sa = "change", ka = "input";
var h0 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [t, i] of n)
    r[t] = i;
  return r;
};
const Hx = "utils/dom/style", us = (e = "") => e.split(" ").filter((n) => !!n.trim()), Ia = (e, n) => {
  if (!e || !n)
    return !1;
  if (n.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(n);
}, $x = (e, n) => {
  !e || !n.trim() || e.classList.add(...us(n));
}, Nx = (e, n) => {
  !e || !n.trim() || e.classList.remove(...us(n));
}, Vx = (e, n) => {
  var r;
  if (!Qe || !e || !n)
    return "";
  let t = Xu(n);
  t === "float" && (t = "cssFloat");
  try {
    const i = e.style[t];
    if (i)
      return i;
    const a = (r = document.defaultView) == null ? void 0 : r.getComputedStyle(e, "");
    return a ? a[t] : "";
  } catch {
    return e.style[t];
  }
};
function Nr(e, n = "px") {
  if (!e)
    return "";
  if (gn(e) || rx(e))
    return `${e}${n}`;
  if (dt(e))
    return e;
  xt(Hx, "binding value must be a string or number");
}
let Q0;
const qx = (e) => {
  var n;
  if (!Qe)
    return 0;
  if (Q0 !== void 0)
    return Q0;
  const r = document.createElement("div");
  r.className = `${e}-scrollbar__wrap`, r.style.visibility = "hidden", r.style.width = "100px", r.style.position = "absolute", r.style.top = "-9999px", document.body.appendChild(r);
  const t = r.offsetWidth;
  r.style.overflow = "scroll";
  const i = document.createElement("div");
  i.style.width = "100%", r.appendChild(i);
  const a = i.offsetWidth;
  return (n = r.parentNode) == null || n.removeChild(r), Q0 = t - a, Q0;
}, ci = (e, n) => {
  if (e.install = (r) => {
    for (const t of [e, ...Object.values(n ?? {})])
      r.component(t.name, t);
  }, n)
    for (const [r, t] of Object.entries(n))
      e[r] = t;
  return e;
}, Ux = (e) => (e.install = D0, e), Yx = x0({
  size: {
    type: zt([Number, String])
  },
  color: {
    type: String
  }
}), Kx = me({
  name: "ElIcon",
  inheritAttrs: !1
}), Wx = /* @__PURE__ */ me({
  ...Kx,
  props: Yx,
  setup(e) {
    const n = e, r = Ct("icon"), t = j(() => {
      const { size: i, color: a } = n;
      return !i && !a ? {} : {
        fontSize: Xo(i) ? void 0 : Nr(i),
        "--color": a
      };
    });
    return (i, a) => (q(), J("i", F0({
      class: N(r).b(),
      style: N(t)
    }, i.$attrs), [
      Le(i.$slots, "default")
    ], 16));
  }
});
var jx = /* @__PURE__ */ h0(Wx, [["__file", "icon.vue"]]);
const Pt = ci(jx);
/*! Element Plus Icons Vue v2.3.1 */
var Gx = /* @__PURE__ */ me({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      ee("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Xx = Gx, Zx = /* @__PURE__ */ me({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), fs = Zx, Jx = /* @__PURE__ */ me({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      ee("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ds = Jx, Qx = /* @__PURE__ */ me({
  name: "Close",
  __name: "close",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), e1 = Qx, t1 = /* @__PURE__ */ me({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      ee("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), n1 = t1, r1 = /* @__PURE__ */ me({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), xs = r1, i1 = /* @__PURE__ */ me({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), bn = i1, a1 = /* @__PURE__ */ me({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), hs = a1, o1 = /* @__PURE__ */ me({
  name: "View",
  __name: "view",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), s1 = o1, l1 = /* @__PURE__ */ me({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ps = l1, c1 = /* @__PURE__ */ me({
  name: "Warning",
  __name: "warning",
  setup(e) {
    return (n, r) => (q(), J("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), u1 = c1;
const Cn = zt([
  String,
  Object,
  Function
]), f1 = {
  Close: e1,
  SuccessFilled: hs,
  InfoFilled: xs,
  WarningFilled: ps,
  CircleCloseFilled: fs
}, Pa = {
  success: hs,
  warning: ps,
  error: fs,
  info: xs
}, d1 = {
  validating: bn,
  success: Xx,
  error: ds
}, x1 = () => Qe && /firefox/i.test(window.navigator.userAgent);
let He;
const h1 = {
  height: "0",
  visibility: "hidden",
  overflow: x1() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, p1 = [
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
function v1(e) {
  const n = window.getComputedStyle(e), r = n.getPropertyValue("box-sizing"), t = Number.parseFloat(n.getPropertyValue("padding-bottom")) + Number.parseFloat(n.getPropertyValue("padding-top")), i = Number.parseFloat(n.getPropertyValue("border-bottom-width")) + Number.parseFloat(n.getPropertyValue("border-top-width"));
  return { contextStyle: p1.map((o) => [
    o,
    n.getPropertyValue(o)
  ]), paddingSize: t, borderSize: i, boxSizing: r };
}
function Ma(e, n = 1, r) {
  var t;
  He || (He = document.createElement("textarea"), document.body.appendChild(He));
  const { paddingSize: i, borderSize: a, boxSizing: o, contextStyle: l } = v1(e);
  l.forEach(([v, h]) => He == null ? void 0 : He.style.setProperty(v, h)), Object.entries(h1).forEach(([v, h]) => He == null ? void 0 : He.style.setProperty(v, h, "important")), He.value = e.value || e.placeholder || "";
  let c = He.scrollHeight;
  const s = {};
  o === "border-box" ? c = c + a : o === "content-box" && (c = c - i), He.value = "";
  const f = He.scrollHeight - i;
  if (gn(n)) {
    let v = f * n;
    o === "border-box" && (v = v + i + a), c = Math.max(v, c), s.minHeight = `${v}px`;
  }
  if (gn(r)) {
    let v = f * r;
    o === "border-box" && (v = v + i + a), c = Math.min(v, c);
  }
  return s.height = `${c}px`, (t = He.parentNode) == null || t.removeChild(He), He = void 0, s;
}
const m1 = (e) => e, g1 = x0({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), y1 = (e) => nx(g1, e), b1 = x0({
  id: {
    type: String,
    default: void 0
  },
  size: ls,
  disabled: Boolean,
  modelValue: {
    type: zt([
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
    type: zt([Boolean, Object]),
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
    type: Cn
  },
  prefixIcon: {
    type: Cn
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
    type: zt([Object, Array, String]),
    default: () => m1({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...y1(["ariaLabel"])
}), C1 = {
  [$r]: (e) => dt(e),
  input: (e) => dt(e),
  change: (e) => dt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, E1 = ["class", "style"], _1 = /^on[A-Z]/, B1 = (e = {}) => {
  const { excludeListeners: n = !1, excludeKeys: r } = e, t = j(() => ((r == null ? void 0 : r.value) || []).concat(E1)), i = ht();
  return i ? j(() => {
    var a;
    return jo(Object.entries((a = i.proxy) == null ? void 0 : a.$attrs).filter(([o]) => !t.value.includes(o) && !(n && _1.test(o))));
  }) : (xt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), j(() => ({})));
}, ui = Symbol("formContextKey"), vs = Symbol("formItemContextKey"), Vr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, w1 = Symbol("elIdInjection"), D1 = () => ht() ? Ve(w1, Vr) : Vr, qr = (e) => {
  const n = D1();
  !Qe && n === Vr && xt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const r = Ho();
  return fx(() => N(e) || `${r.value}-id-${n.prefix}-${n.current++}`);
}, ms = () => {
  const e = Ve(ui, void 0), n = Ve(vs, void 0);
  return {
    form: e,
    formItem: n
  };
}, F1 = (e, {
  formItemContext: n,
  disableIdGeneration: r,
  disableIdManagement: t
}) => {
  r || (r = he(!1)), t || (t = he(!1));
  const i = he();
  let a;
  const o = j(() => {
    var l;
    return !!(!(e.label || e.ariaLabel) && n && n.inputIds && ((l = n.inputIds) == null ? void 0 : l.length) <= 1);
  });
  return Et(() => {
    a = qe([dn(e, "id"), r], ([l, c]) => {
      const s = l ?? (c ? void 0 : qr().value);
      s !== i.value && (n != null && n.removeInputId && (i.value && n.removeInputId(i.value), !(t != null && t.value) && !c && s && n.addInputId(s)), i.value = s);
    }, { immediate: !0 });
  }), bl(() => {
    a && a(), n != null && n.removeInputId && i.value && n.removeInputId(i.value);
  }), {
    isLabeledByFormItem: o,
    inputId: i
  };
}, gs = (e) => {
  const n = ht();
  return j(() => {
    var r, t;
    return (t = (r = n == null ? void 0 : n.proxy) == null ? void 0 : r.$props) == null ? void 0 : t[e];
  });
}, ys = (e, n = {}) => {
  const r = he(void 0), t = n.prop ? r : gs("size"), i = n.global ? r : Mx(), a = n.form ? { size: void 0 } : Ve(ui, void 0), o = n.formItem ? { size: void 0 } : Ve(vs, void 0);
  return j(() => t.value || N(e) || (o == null ? void 0 : o.size) || (a == null ? void 0 : a.size) || i.value || "");
}, fi = (e) => {
  const n = gs("disabled"), r = Ve(ui, void 0);
  return j(() => n.value || N(e) || (r == null ? void 0 : r.disabled) || !1);
};
function A1(e, {
  beforeFocus: n,
  afterFocus: r,
  beforeBlur: t,
  afterBlur: i
} = {}) {
  const a = ht(), { emit: o } = a, l = B0(), c = he(!1), s = (h) => {
    u0(n) && n(h) || c.value || (c.value = !0, o("focus", h), r == null || r());
  }, f = (h) => {
    var g;
    u0(t) && t(h) || h.relatedTarget && ((g = l.value) != null && g.contains(h.relatedTarget)) || (c.value = !1, o("blur", h), i == null || i());
  }, v = () => {
    var h, g;
    (h = l.value) != null && h.contains(document.activeElement) && l.value !== document.activeElement || (g = e.value) == null || g.focus();
  };
  return qe(l, (h) => {
    h && h.setAttribute("tabindex", "-1");
  }), b0(l, "focus", s, !0), b0(l, "blur", f, !0), b0(l, "click", v, !0), process.env.NODE_ENV === "test" && Et(() => {
    const h = k0(e.value) ? e.value : document.querySelector("input,textarea");
    h && (b0(h, "focus", s, !0), b0(h, "blur", f, !0));
  }), {
    isFocused: c,
    wrapperRef: l,
    handleFocus: s,
    handleBlur: f
  };
}
const T1 = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function S1({
  afterComposition: e,
  emit: n
}) {
  const r = he(!1), t = (l) => {
    n == null || n("compositionstart", l), r.value = !0;
  }, i = (l) => {
    var c;
    n == null || n("compositionupdate", l);
    const s = (c = l.target) == null ? void 0 : c.value, f = s[s.length - 1] || "";
    r.value = !T1(f);
  }, a = (l) => {
    n == null || n("compositionend", l), r.value && (r.value = !1, Ne(() => e(l)));
  };
  return {
    isComposing: r,
    handleComposition: (l) => {
      l.type === "compositionend" ? a(l) : i(l);
    },
    handleCompositionStart: t,
    handleCompositionUpdate: i,
    handleCompositionEnd: a
  };
}
function k1(e) {
  let n;
  function r() {
    if (e.value == null)
      return;
    const { selectionStart: i, selectionEnd: a, value: o } = e.value;
    if (i == null || a == null)
      return;
    const l = o.slice(0, Math.max(0, i)), c = o.slice(Math.max(0, a));
    n = {
      selectionStart: i,
      selectionEnd: a,
      value: o,
      beforeTxt: l,
      afterTxt: c
    };
  }
  function t() {
    if (e.value == null || n == null)
      return;
    const { value: i } = e.value, { beforeTxt: a, afterTxt: o, selectionStart: l } = n;
    if (a == null || o == null || l == null)
      return;
    let c = i.length;
    if (i.endsWith(o))
      c = i.length - o.length;
    else if (i.startsWith(a))
      c = a.length;
    else {
      const s = a[l - 1], f = i.indexOf(s, l - 1);
      f !== -1 && (c = f + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [r, t];
}
const bs = "ElInput", I1 = me({
  name: bs,
  inheritAttrs: !1
}), P1 = /* @__PURE__ */ me({
  ...I1,
  props: b1,
  emits: C1,
  setup(e, { expose: n, emit: r }) {
    const t = e, i = Cl(), a = B1(), o = Ja(), l = j(() => [
      t.type === "textarea" ? p.b() : d.b(),
      d.m(h.value),
      d.is("disabled", g.value),
      d.is("exceed", O.value),
      {
        [d.b("group")]: o.prepend || o.append,
        [d.m("prefix")]: o.prefix || t.prefixIcon,
        [d.m("suffix")]: o.suffix || t.suffixIcon || t.clearable || t.showPassword,
        [d.bm("suffix", "password-clear")]: Z.value && oe.value,
        [d.b("hidden")]: t.type === "hidden"
      },
      i.class
    ]), c = j(() => [
      d.e("wrapper"),
      d.is("focus", k.value)
    ]), { form: s, formItem: f } = ms(), { inputId: v } = F1(t, {
      formItemContext: f
    }), h = ys(), g = fi(), d = Ct("input"), p = Ct("textarea"), y = B0(), _ = B0(), b = he(!1), C = he(!1), E = he(), T = B0(t.inputStyle), A = j(() => y.value || _.value), { wrapperRef: S, isFocused: k, handleFocus: L, handleBlur: F } = A1(A, {
      beforeFocus() {
        return g.value;
      },
      afterBlur() {
        var V;
        t.validateEvent && ((V = f == null ? void 0 : f.validate) == null || V.call(f, "blur").catch((ce) => xt(ce)));
      }
    }), B = j(() => {
      var V;
      return (V = s == null ? void 0 : s.statusIcon) != null ? V : !1;
    }), I = j(() => (f == null ? void 0 : f.validateState) || ""), P = j(() => I.value && d1[I.value]), W = j(() => C.value ? s1 : n1), G = j(() => [
      i.style
    ]), Y = j(() => [
      t.inputStyle,
      T.value,
      { resize: t.resize }
    ]), X = j(() => Go(t.modelValue) ? "" : String(t.modelValue)), Z = j(() => t.clearable && !g.value && !t.readonly && !!X.value && (k.value || b.value)), oe = j(() => t.showPassword && !g.value && !!X.value && (!!X.value || k.value)), ie = j(() => t.showWordLimit && !!t.maxlength && (t.type === "text" || t.type === "textarea") && !g.value && !t.readonly && !t.showPassword), M = j(() => X.value.length), O = j(() => !!ie.value && M.value > Number(t.maxlength)), $ = j(() => !!o.suffix || !!t.suffixIcon || Z.value || t.showPassword || ie.value || !!I.value && B.value), [z, fe] = k1(y);
    bx(_, (V) => {
      if (te(), !ie.value || t.resize !== "both")
        return;
      const ce = V[0], { width: Me } = ce.contentRect;
      E.value = {
        right: `calc(100% - ${Me + 15 + 6}px)`
      };
    });
    const le = () => {
      const { type: V, autosize: ce } = t;
      if (!(!Qe || V !== "textarea" || !_.value))
        if (ce) {
          const Me = f0(ce) ? ce.minRows : void 0, st = f0(ce) ? ce.maxRows : void 0, t0 = Ma(_.value, Me, st);
          T.value = {
            overflowY: "hidden",
            ...t0
          }, Ne(() => {
            _.value.offsetHeight, T.value = t0;
          });
        } else
          T.value = {
            minHeight: Ma(_.value).minHeight
          };
    }, te = ((V) => {
      let ce = !1;
      return () => {
        var Me;
        if (ce || !t.autosize)
          return;
        ((Me = _.value) == null ? void 0 : Me.offsetParent) === null || (V(), ce = !0);
      };
    })(le), ge = () => {
      const V = A.value, ce = t.formatter ? t.formatter(X.value) : X.value;
      !V || V.value === ce || (V.value = ce);
    }, Ge = async (V) => {
      z();
      let { value: ce } = V.target;
      if (t.formatter && t.parser && (ce = t.parser(ce)), !ot.value) {
        if (ce === X.value) {
          ge();
          return;
        }
        r($r, ce), r(ka, ce), await Ne(), ge(), fe();
      }
    }, Bt = (V) => {
      let { value: ce } = V.target;
      t.formatter && t.parser && (ce = t.parser(ce)), r(Sa, ce);
    }, {
      isComposing: ot,
      handleCompositionStart: Ae,
      handleCompositionUpdate: Ce,
      handleCompositionEnd: pt
    } = S1({ emit: r, afterComposition: Ge }), vt = () => {
      z(), C.value = !C.value, setTimeout(fe);
    }, wt = () => {
      var V;
      return (V = A.value) == null ? void 0 : V.focus();
    }, mt = () => {
      var V;
      return (V = A.value) == null ? void 0 : V.blur();
    }, Nt = (V) => {
      b.value = !1, r("mouseleave", V);
    }, gt = (V) => {
      b.value = !0, r("mouseenter", V);
    }, Te = (V) => {
      r("keydown", V);
    }, Se = () => {
      var V;
      (V = A.value) == null || V.select();
    }, Ue = () => {
      r($r, ""), r(Sa, ""), r("clear"), r(ka, "");
    };
    return qe(() => t.modelValue, () => {
      var V;
      Ne(() => le()), t.validateEvent && ((V = f == null ? void 0 : f.validate) == null || V.call(f, "change").catch((ce) => xt(ce)));
    }), qe(X, () => ge()), qe(() => t.type, async () => {
      await Ne(), ge(), le();
    }), Et(() => {
      !t.formatter && t.parser && xt(bs, "If you set the parser, you also need to set the formatter."), ge(), Ne(le);
    }), n({
      input: y,
      textarea: _,
      ref: A,
      textareaStyle: Y,
      autosize: dn(t, "autosize"),
      isComposing: ot,
      focus: wt,
      blur: mt,
      select: Se,
      clear: Ue,
      resizeTextarea: le
    }), (V, ce) => (q(), J("div", {
      class: ne([
        N(l),
        {
          [N(d).bm("group", "append")]: V.$slots.append,
          [N(d).bm("group", "prepend")]: V.$slots.prepend
        }
      ]),
      style: Pe(N(G)),
      onMouseenter: gt,
      onMouseleave: Nt
    }, [
      ue(" input "),
      V.type !== "textarea" ? (q(), J(ft, { key: 0 }, [
        ue(" prepend slot "),
        V.$slots.prepend ? (q(), J("div", {
          key: 0,
          class: ne(N(d).be("group", "prepend"))
        }, [
          Le(V.$slots, "prepend")
        ], 2)) : ue("v-if", !0),
        ee("div", {
          ref_key: "wrapperRef",
          ref: S,
          class: ne(N(c))
        }, [
          ue(" prefix slot "),
          V.$slots.prefix || V.prefixIcon ? (q(), J("span", {
            key: 0,
            class: ne(N(d).e("prefix"))
          }, [
            ee("span", {
              class: ne(N(d).e("prefix-inner"))
            }, [
              Le(V.$slots, "prefix"),
              V.prefixIcon ? (q(), xe(N(Pt), {
                key: 0,
                class: ne(N(d).e("icon"))
              }, {
                default: ve(() => [
                  (q(), xe(Je(V.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : ue("v-if", !0)
            ], 2)
          ], 2)) : ue("v-if", !0),
          ee("input", F0({
            id: N(v),
            ref_key: "input",
            ref: y,
            class: N(d).e("inner")
          }, N(a), {
            minlength: V.minlength,
            maxlength: V.maxlength,
            type: V.showPassword ? C.value ? "text" : "password" : V.type,
            disabled: N(g),
            readonly: V.readonly,
            autocomplete: V.autocomplete,
            tabindex: V.tabindex,
            "aria-label": V.ariaLabel,
            placeholder: V.placeholder,
            style: V.inputStyle,
            form: V.form,
            autofocus: V.autofocus,
            role: V.containerRole,
            onCompositionstart: N(Ae),
            onCompositionupdate: N(Ce),
            onCompositionend: N(pt),
            onInput: Ge,
            onChange: Bt,
            onKeydown: Te
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          ue(" suffix slot "),
          N($) ? (q(), J("span", {
            key: 1,
            class: ne(N(d).e("suffix"))
          }, [
            ee("span", {
              class: ne(N(d).e("suffix-inner"))
            }, [
              !N(Z) || !N(oe) || !N(ie) ? (q(), J(ft, { key: 0 }, [
                Le(V.$slots, "suffix"),
                V.suffixIcon ? (q(), xe(N(Pt), {
                  key: 0,
                  class: ne(N(d).e("icon"))
                }, {
                  default: ve(() => [
                    (q(), xe(Je(V.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : ue("v-if", !0)
              ], 64)) : ue("v-if", !0),
              N(Z) ? (q(), xe(N(Pt), {
                key: 1,
                class: ne([N(d).e("icon"), N(d).e("clear")]),
                onMousedown: E0(N(D0), ["prevent"]),
                onClick: Ue
              }, {
                default: ve(() => [
                  Ie(N(ds))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : ue("v-if", !0),
              N(oe) ? (q(), xe(N(Pt), {
                key: 2,
                class: ne([N(d).e("icon"), N(d).e("password")]),
                onClick: vt
              }, {
                default: ve(() => [
                  (q(), xe(Je(N(W))))
                ]),
                _: 1
              }, 8, ["class"])) : ue("v-if", !0),
              N(ie) ? (q(), J("span", {
                key: 3,
                class: ne(N(d).e("count"))
              }, [
                ee("span", {
                  class: ne(N(d).e("count-inner"))
                }, be(N(M)) + " / " + be(V.maxlength), 3)
              ], 2)) : ue("v-if", !0),
              N(I) && N(P) && N(B) ? (q(), xe(N(Pt), {
                key: 4,
                class: ne([
                  N(d).e("icon"),
                  N(d).e("validateIcon"),
                  N(d).is("loading", N(I) === "validating")
                ])
              }, {
                default: ve(() => [
                  (q(), xe(Je(N(P))))
                ]),
                _: 1
              }, 8, ["class"])) : ue("v-if", !0)
            ], 2)
          ], 2)) : ue("v-if", !0)
        ], 2),
        ue(" append slot "),
        V.$slots.append ? (q(), J("div", {
          key: 1,
          class: ne(N(d).be("group", "append"))
        }, [
          Le(V.$slots, "append")
        ], 2)) : ue("v-if", !0)
      ], 64)) : (q(), J(ft, { key: 1 }, [
        ue(" textarea "),
        ee("textarea", F0({
          id: N(v),
          ref_key: "textarea",
          ref: _,
          class: [N(p).e("inner"), N(d).is("focus", N(k))]
        }, N(a), {
          minlength: V.minlength,
          maxlength: V.maxlength,
          tabindex: V.tabindex,
          disabled: N(g),
          readonly: V.readonly,
          autocomplete: V.autocomplete,
          style: N(Y),
          "aria-label": V.ariaLabel,
          placeholder: V.placeholder,
          form: V.form,
          autofocus: V.autofocus,
          rows: V.rows,
          role: V.containerRole,
          onCompositionstart: N(Ae),
          onCompositionupdate: N(Ce),
          onCompositionend: N(pt),
          onInput: Ge,
          onFocus: N(L),
          onBlur: N(F),
          onChange: Bt,
          onKeydown: Te
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        N(ie) ? (q(), J("span", {
          key: 0,
          style: Pe(E.value),
          class: ne(N(d).e("count"))
        }, be(N(M)) + " / " + be(V.maxlength), 7)) : ue("v-if", !0)
      ], 64))
    ], 38));
  }
});
var M1 = /* @__PURE__ */ h0(P1, [["__file", "input.vue"]]);
const R1 = ci(M1), O1 = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', z1 = (e) => process.env.NODE_ENV === "test" ? !0 : getComputedStyle(e).position === "fixed" ? !1 : e.offsetParent !== null, Ra = (e) => Array.from(e.querySelectorAll(O1)).filter((n) => Cs(n) && z1(n)), Cs = (e) => {
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
}, kr = "focus-trap.focus-after-trapped", Ir = "focus-trap.focus-after-released", L1 = "focus-trap.focusout-prevented", Oa = {
  cancelable: !0,
  bubbles: !1
}, H1 = {
  cancelable: !0,
  bubbles: !1
}, za = "focusAfterTrapped", La = "focusAfterReleased", $1 = Symbol("elFocusTrap"), di = he(), Tn = he(0), xi = he(0);
let en = 0;
const Es = (e) => {
  const n = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (t) => {
      const i = t.tagName === "INPUT" && t.type === "hidden";
      return t.disabled || t.hidden || i ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 || t === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    n.push(r.currentNode);
  return n;
}, Ha = (e, n) => {
  for (const r of e)
    if (!N1(r, n))
      return r;
}, N1 = (e, n) => {
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
}, V1 = (e) => {
  const n = Es(e), r = Ha(n, e), t = Ha(n.reverse(), e);
  return [r, t];
}, q1 = (e) => e instanceof HTMLInputElement && "select" in e, St = (e, n) => {
  if (e && e.focus) {
    const r = document.activeElement;
    let t = !1;
    k0(e) && !Cs(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), t = !0), e.focus({ preventScroll: !0 }), xi.value = window.performance.now(), e !== r && q1(e) && n && e.select(), k0(e) && t && e.removeAttribute("tabindex");
  }
};
function $a(e, n) {
  const r = [...e], t = e.indexOf(n);
  return t !== -1 && r.splice(t, 1), r;
}
const U1 = () => {
  let e = [];
  return {
    push: (t) => {
      const i = e[0];
      i && t !== i && i.pause(), e = $a(e, t), e.unshift(t);
    },
    remove: (t) => {
      var i, a;
      e = $a(e, t), (a = (i = e[0]) == null ? void 0 : i.resume) == null || a.call(i);
    }
  };
}, Y1 = (e, n = !1) => {
  const r = document.activeElement;
  for (const t of e)
    if (St(t, n), document.activeElement !== r)
      return;
}, Na = U1(), K1 = () => Tn.value > xi.value, tn = () => {
  di.value = "pointer", Tn.value = window.performance.now();
}, Va = () => {
  di.value = "keyboard", Tn.value = window.performance.now();
}, W1 = () => (Et(() => {
  en === 0 && (document.addEventListener("mousedown", tn), document.addEventListener("touchstart", tn), document.addEventListener("keydown", Va)), en++;
}), P0(() => {
  en--, en <= 0 && (document.removeEventListener("mousedown", tn), document.removeEventListener("touchstart", tn), document.removeEventListener("keydown", Va));
}), {
  focusReason: di,
  lastUserFocusTimestamp: Tn,
  lastAutomatedFocusTimestamp: xi
}), nn = (e) => new CustomEvent(L1, {
  ...H1,
  detail: e
}), hi = {
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
let i0 = [];
const qa = (e) => {
  e.code === hi.esc && i0.forEach((n) => n(e));
}, j1 = (e) => {
  Et(() => {
    i0.length === 0 && document.addEventListener("keydown", qa), Qe && i0.push(e);
  }), P0(() => {
    i0 = i0.filter((n) => n !== e), i0.length === 0 && Qe && document.removeEventListener("keydown", qa);
  });
}, G1 = me({
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
    za,
    La,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: n }) {
    const r = he();
    let t, i;
    const { focusReason: a } = W1();
    j1((d) => {
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
      const { code: p, altKey: y, ctrlKey: _, metaKey: b, currentTarget: C, shiftKey: E } = d, { loop: T } = e, A = p === hi.tab && !y && !_ && !b, S = document.activeElement;
      if (A && S) {
        const k = C, [L, F] = V1(k);
        if (L && F) {
          if (!E && S === F) {
            const I = nn({
              focusReason: a.value
            });
            n("focusout-prevented", I), I.defaultPrevented || (d.preventDefault(), T && St(L, !0));
          } else if (E && [L, k].includes(S)) {
            const I = nn({
              focusReason: a.value
            });
            n("focusout-prevented", I), I.defaultPrevented || (d.preventDefault(), T && St(F, !0));
          }
        } else if (S === k) {
          const I = nn({
            focusReason: a.value
          });
          n("focusout-prevented", I), I.defaultPrevented || d.preventDefault();
        }
      }
    };
    Wr($1, {
      focusTrapRef: r,
      onKeydown: l
    }), qe(() => e.focusTrapEl, (d) => {
      d && (r.value = d);
    }, { immediate: !0 }), qe([r], ([d], [p]) => {
      d && (d.addEventListener("keydown", l), d.addEventListener("focusin", f), d.addEventListener("focusout", v)), p && (p.removeEventListener("keydown", l), p.removeEventListener("focusin", f), p.removeEventListener("focusout", v));
    });
    const c = (d) => {
      n(za, d);
    }, s = (d) => n(La, d), f = (d) => {
      const p = N(r);
      if (!p)
        return;
      const y = d.target, _ = d.relatedTarget, b = y && p.contains(y);
      e.trapped || _ && p.contains(_) || (t = _), b && n("focusin", d), !o.paused && e.trapped && (b ? i = y : St(i, !0));
    }, v = (d) => {
      const p = N(r);
      if (!(o.paused || !p))
        if (e.trapped) {
          const y = d.relatedTarget;
          !Go(y) && !p.contains(y) && setTimeout(() => {
            if (!o.paused && e.trapped) {
              const _ = nn({
                focusReason: a.value
              });
              n("focusout-prevented", _), _.defaultPrevented || St(i, !0);
            }
          }, 0);
        } else {
          const y = d.target;
          y && p.contains(y) || n("focusout", d);
        }
    };
    async function h() {
      await Ne();
      const d = N(r);
      if (d) {
        Na.push(o);
        const p = d.contains(document.activeElement) ? t : document.activeElement;
        if (t = p, !d.contains(p)) {
          const _ = new Event(kr, Oa);
          d.addEventListener(kr, c), d.dispatchEvent(_), _.defaultPrevented || Ne(() => {
            let b = e.focusStartEl;
            dt(b) || (St(b), document.activeElement !== b && (b = "first")), b === "first" && Y1(Es(d), !0), (document.activeElement === p || b === "container") && St(d);
          });
        }
      }
    }
    function g() {
      const d = N(r);
      if (d) {
        d.removeEventListener(kr, c);
        const p = new CustomEvent(Ir, {
          ...Oa,
          detail: {
            focusReason: a.value
          }
        });
        d.addEventListener(Ir, s), d.dispatchEvent(p), !p.defaultPrevented && (a.value == "keyboard" || !K1() || d.contains(document.activeElement)) && St(t ?? document.body), d.removeEventListener(Ir, s), Na.remove(o);
      }
    }
    return Et(() => {
      e.trapped && h(), qe(() => e.trapped, (d) => {
        d ? h() : g();
      });
    }), P0(() => {
      e.trapped && g(), r.value && (r.value.removeEventListener("keydown", l), r.value.removeEventListener("focusin", f), r.value.removeEventListener("focusout", v), r.value = void 0);
    }), {
      onKeydown: l
    };
  }
});
function X1(e, n, r, t, i, a) {
  return Le(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Z1 = /* @__PURE__ */ h0(G1, [["render", X1], ["__file", "focus-trap.vue"]]);
const _s = Symbol("buttonGroupContextKey"), J1 = ({ from: e, replacement: n, scope: r, version: t, ref: i, type: a = "API" }, o) => {
  qe(() => N(o), (l) => {
    l && xt(r, `[${a}] ${e} is about to be deprecated in version ${t}, please use ${n} instead.
For more detail, please visit: ${i}
`);
  }, {
    immediate: !0
  });
}, Q1 = (e, n) => {
  J1({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, j(() => e.type === "text"));
  const r = Ve(_s, void 0), t = li("button"), { form: i } = ms(), a = ys(j(() => r == null ? void 0 : r.size)), o = fi(), l = he(), c = Ja(), s = j(() => e.type || (r == null ? void 0 : r.type) || ""), f = j(() => {
    var d, p, y;
    return (y = (p = e.autoInsertSpace) != null ? p : (d = t.value) == null ? void 0 : d.autoInsertSpace) != null ? y : !1;
  }), v = j(() => e.tag === "button" ? {
    ariaDisabled: o.value || e.loading,
    disabled: o.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), h = j(() => {
    var d;
    const p = (d = c.default) == null ? void 0 : d.call(c);
    if (f.value && (p == null ? void 0 : p.length) === 1) {
      const y = p[0];
      if ((y == null ? void 0 : y.type) === El) {
        const _ = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(_.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: o,
    _size: a,
    _type: s,
    _ref: l,
    _props: v,
    shouldAddSpace: h,
    handleClick: (d) => {
      if (o.value || e.loading) {
        d.stopPropagation();
        return;
      }
      e.nativeType === "reset" && (i == null || i.resetFields()), n("click", d);
    }
  };
}, eh = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], th = ["button", "submit", "reset"], Ur = x0({
  size: ls,
  disabled: Boolean,
  type: {
    type: String,
    values: eh,
    default: ""
  },
  icon: {
    type: Cn
  },
  nativeType: {
    type: String,
    values: th,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Cn,
    default: () => bn
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
    type: zt([String, Object]),
    default: "button"
  }
}), nh = {
  click: (e) => e instanceof MouseEvent
};
function Fe(e, n) {
  rh(e) && (e = "100%");
  var r = ih(e);
  return e = n === 360 ? e : Math.min(n, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * n), 10) / 100), Math.abs(e - n) < 1e-6 ? 1 : (n === 360 ? e = (e < 0 ? e % n + n : e % n) / parseFloat(String(n)) : e = e % n / parseFloat(String(n)), e);
}
function rn(e) {
  return Math.min(1, Math.max(0, e));
}
function rh(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function ih(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Bs(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function an(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function jt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function ah(e, n, r) {
  return {
    r: Fe(e, 255) * 255,
    g: Fe(n, 255) * 255,
    b: Fe(r, 255) * 255
  };
}
function Ua(e, n, r) {
  e = Fe(e, 255), n = Fe(n, 255), r = Fe(r, 255);
  var t = Math.max(e, n, r), i = Math.min(e, n, r), a = 0, o = 0, l = (t + i) / 2;
  if (t === i)
    o = 0, a = 0;
  else {
    var c = t - i;
    switch (o = l > 0.5 ? c / (2 - t - i) : c / (t + i), t) {
      case e:
        a = (n - r) / c + (n < r ? 6 : 0);
        break;
      case n:
        a = (r - e) / c + 2;
        break;
      case r:
        a = (e - n) / c + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: o, l };
}
function Pr(e, n, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (n - e) * (6 * r) : r < 1 / 2 ? n : r < 2 / 3 ? e + (n - e) * (2 / 3 - r) * 6 : e;
}
function oh(e, n, r) {
  var t, i, a;
  if (e = Fe(e, 360), n = Fe(n, 100), r = Fe(r, 100), n === 0)
    i = r, a = r, t = r;
  else {
    var o = r < 0.5 ? r * (1 + n) : r + n - r * n, l = 2 * r - o;
    t = Pr(l, o, e + 1 / 3), i = Pr(l, o, e), a = Pr(l, o, e - 1 / 3);
  }
  return { r: t * 255, g: i * 255, b: a * 255 };
}
function Ya(e, n, r) {
  e = Fe(e, 255), n = Fe(n, 255), r = Fe(r, 255);
  var t = Math.max(e, n, r), i = Math.min(e, n, r), a = 0, o = t, l = t - i, c = t === 0 ? 0 : l / t;
  if (t === i)
    a = 0;
  else {
    switch (t) {
      case e:
        a = (n - r) / l + (n < r ? 6 : 0);
        break;
      case n:
        a = (r - e) / l + 2;
        break;
      case r:
        a = (e - n) / l + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: c, v: o };
}
function sh(e, n, r) {
  e = Fe(e, 360) * 6, n = Fe(n, 100), r = Fe(r, 100);
  var t = Math.floor(e), i = e - t, a = r * (1 - n), o = r * (1 - i * n), l = r * (1 - (1 - i) * n), c = t % 6, s = [r, o, a, a, l, r][c], f = [l, r, r, o, a, a][c], v = [a, a, l, r, r, o][c];
  return { r: s * 255, g: f * 255, b: v * 255 };
}
function Ka(e, n, r, t) {
  var i = [
    jt(Math.round(e).toString(16)),
    jt(Math.round(n).toString(16)),
    jt(Math.round(r).toString(16))
  ];
  return t && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function lh(e, n, r, t, i) {
  var a = [
    jt(Math.round(e).toString(16)),
    jt(Math.round(n).toString(16)),
    jt(Math.round(r).toString(16)),
    jt(ch(t))
  ];
  return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function ch(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Wa(e) {
  return We(e) / 255;
}
function We(e) {
  return parseInt(e, 16);
}
function uh(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Yr = {
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
function fh(e) {
  var n = { r: 0, g: 0, b: 0 }, r = 1, t = null, i = null, a = null, o = !1, l = !1;
  return typeof e == "string" && (e = hh(e)), typeof e == "object" && (bt(e.r) && bt(e.g) && bt(e.b) ? (n = ah(e.r, e.g, e.b), o = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : bt(e.h) && bt(e.s) && bt(e.v) ? (t = an(e.s), i = an(e.v), n = sh(e.h, t, i), o = !0, l = "hsv") : bt(e.h) && bt(e.s) && bt(e.l) && (t = an(e.s), a = an(e.l), n = oh(e.h, t, a), o = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Bs(r), {
    ok: o,
    format: e.format || l,
    r: Math.min(255, Math.max(n.r, 0)),
    g: Math.min(255, Math.max(n.g, 0)),
    b: Math.min(255, Math.max(n.b, 0)),
    a: r
  };
}
var dh = "[-\\+]?\\d+%?", xh = "[-\\+]?\\d*\\.\\d+%?", Rt = "(?:".concat(xh, ")|(?:").concat(dh, ")"), Mr = "[\\s|\\(]+(".concat(Rt, ")[,|\\s]+(").concat(Rt, ")[,|\\s]+(").concat(Rt, ")\\s*\\)?"), Rr = "[\\s|\\(]+(".concat(Rt, ")[,|\\s]+(").concat(Rt, ")[,|\\s]+(").concat(Rt, ")[,|\\s]+(").concat(Rt, ")\\s*\\)?"), it = {
  CSS_UNIT: new RegExp(Rt),
  rgb: new RegExp("rgb" + Mr),
  rgba: new RegExp("rgba" + Rr),
  hsl: new RegExp("hsl" + Mr),
  hsla: new RegExp("hsla" + Rr),
  hsv: new RegExp("hsv" + Mr),
  hsva: new RegExp("hsva" + Rr),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function hh(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var n = !1;
  if (Yr[e])
    e = Yr[e], n = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = it.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = it.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = it.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = it.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = it.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = it.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = it.hex8.exec(e), r ? {
    r: We(r[1]),
    g: We(r[2]),
    b: We(r[3]),
    a: Wa(r[4]),
    format: n ? "name" : "hex8"
  } : (r = it.hex6.exec(e), r ? {
    r: We(r[1]),
    g: We(r[2]),
    b: We(r[3]),
    format: n ? "name" : "hex"
  } : (r = it.hex4.exec(e), r ? {
    r: We(r[1] + r[1]),
    g: We(r[2] + r[2]),
    b: We(r[3] + r[3]),
    a: Wa(r[4] + r[4]),
    format: n ? "name" : "hex8"
  } : (r = it.hex3.exec(e), r ? {
    r: We(r[1] + r[1]),
    g: We(r[2] + r[2]),
    b: We(r[3] + r[3]),
    format: n ? "name" : "hex"
  } : !1)))))))));
}
function bt(e) {
  return !!it.CSS_UNIT.exec(String(e));
}
var ph = (
  /** @class */
  function() {
    function e(n, r) {
      n === void 0 && (n = ""), r === void 0 && (r = {});
      var t;
      if (n instanceof e)
        return n;
      typeof n == "number" && (n = uh(n)), this.originalInput = n;
      var i = fh(n);
      this.originalInput = n, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (t = r.format) !== null && t !== void 0 ? t : i.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var n = this.toRgb();
      return (n.r * 299 + n.g * 587 + n.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var n = this.toRgb(), r, t, i, a = n.r / 255, o = n.g / 255, l = n.b / 255;
      return a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), o <= 0.03928 ? t = o / 12.92 : t = Math.pow((o + 0.055) / 1.055, 2.4), l <= 0.03928 ? i = l / 12.92 : i = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * t + 0.0722 * i;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(n) {
      return this.a = Bs(n), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var n = this.toHsl().s;
      return n === 0;
    }, e.prototype.toHsv = function() {
      var n = Ya(this.r, this.g, this.b);
      return { h: n.h * 360, s: n.s, v: n.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var n = Ya(this.r, this.g, this.b), r = Math.round(n.h * 360), t = Math.round(n.s * 100), i = Math.round(n.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(t, "%, ").concat(i, "%)") : "hsva(".concat(r, ", ").concat(t, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var n = Ua(this.r, this.g, this.b);
      return { h: n.h * 360, s: n.s, l: n.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var n = Ua(this.r, this.g, this.b), r = Math.round(n.h * 360), t = Math.round(n.s * 100), i = Math.round(n.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(t, "%, ").concat(i, "%)") : "hsla(".concat(r, ", ").concat(t, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(n) {
      return n === void 0 && (n = !1), Ka(this.r, this.g, this.b, n);
    }, e.prototype.toHexString = function(n) {
      return n === void 0 && (n = !1), "#" + this.toHex(n);
    }, e.prototype.toHex8 = function(n) {
      return n === void 0 && (n = !1), lh(this.r, this.g, this.b, this.a, n);
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
        return "".concat(Math.round(Fe(r, 255) * 100), "%");
      };
      return {
        r: n(this.r),
        g: n(this.g),
        b: n(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var n = function(r) {
        return Math.round(Fe(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%)") : "rgba(".concat(n(this.r), "%, ").concat(n(this.g), "%, ").concat(n(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var n = "#" + Ka(this.r, this.g, this.b, !1), r = 0, t = Object.entries(Yr); r < t.length; r++) {
        var i = t[r], a = i[0], o = i[1];
        if (n === o)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(n) {
      var r = !!n;
      n = n ?? this.format;
      var t = !1, i = this.a < 1 && this.a >= 0, a = !r && i && (n.startsWith("hex") || n === "name");
      return a ? n === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (n === "rgb" && (t = this.toRgbString()), n === "prgb" && (t = this.toPercentageRgbString()), (n === "hex" || n === "hex6") && (t = this.toHexString()), n === "hex3" && (t = this.toHexString(!0)), n === "hex4" && (t = this.toHex8String(!0)), n === "hex8" && (t = this.toHex8String()), n === "name" && (t = this.toName()), n === "hsl" && (t = this.toHslString()), n === "hsv" && (t = this.toHsvString()), t || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(n) {
      n === void 0 && (n = 10);
      var r = this.toHsl();
      return r.l += n / 100, r.l = rn(r.l), new e(r);
    }, e.prototype.brighten = function(n) {
      n === void 0 && (n = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100)))), new e(r);
    }, e.prototype.darken = function(n) {
      n === void 0 && (n = 10);
      var r = this.toHsl();
      return r.l -= n / 100, r.l = rn(r.l), new e(r);
    }, e.prototype.tint = function(n) {
      return n === void 0 && (n = 10), this.mix("white", n);
    }, e.prototype.shade = function(n) {
      return n === void 0 && (n = 10), this.mix("black", n);
    }, e.prototype.desaturate = function(n) {
      n === void 0 && (n = 10);
      var r = this.toHsl();
      return r.s -= n / 100, r.s = rn(r.s), new e(r);
    }, e.prototype.saturate = function(n) {
      n === void 0 && (n = 10);
      var r = this.toHsl();
      return r.s += n / 100, r.s = rn(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(n) {
      var r = this.toHsl(), t = (r.h + n) % 360;
      return r.h = t < 0 ? 360 + t : t, new e(r);
    }, e.prototype.mix = function(n, r) {
      r === void 0 && (r = 50);
      var t = this.toRgb(), i = new e(n).toRgb(), a = r / 100, o = {
        r: (i.r - t.r) * a + t.r,
        g: (i.g - t.g) * a + t.g,
        b: (i.b - t.b) * a + t.b,
        a: (i.a - t.a) * a + t.a
      };
      return new e(o);
    }, e.prototype.analogous = function(n, r) {
      n === void 0 && (n = 6), r === void 0 && (r = 30);
      var t = this.toHsl(), i = 360 / r, a = [this];
      for (t.h = (t.h - (i * n >> 1) + 720) % 360; --n; )
        t.h = (t.h + i) % 360, a.push(new e(t));
      return a;
    }, e.prototype.complement = function() {
      var n = this.toHsl();
      return n.h = (n.h + 180) % 360, new e(n);
    }, e.prototype.monochromatic = function(n) {
      n === void 0 && (n = 6);
      for (var r = this.toHsv(), t = r.h, i = r.s, a = r.v, o = [], l = 1 / n; n--; )
        o.push(new e({ h: t, s: i, v: a })), a = (a + l) % 1;
      return o;
    }, e.prototype.splitcomplement = function() {
      var n = this.toHsl(), r = n.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: n.s, l: n.l }),
        new e({ h: (r + 216) % 360, s: n.s, l: n.l })
      ];
    }, e.prototype.onBackground = function(n) {
      var r = this.toRgb(), t = new e(n).toRgb(), i = r.a + t.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + t.r * t.a * (1 - r.a)) / i,
        g: (r.g * r.a + t.g * t.a * (1 - r.a)) / i,
        b: (r.b * r.a + t.b * t.a * (1 - r.a)) / i,
        a: i
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(n) {
      for (var r = this.toHsl(), t = r.h, i = [this], a = 360 / n, o = 1; o < n; o++)
        i.push(new e({ h: (t + o * a) % 360, s: r.s, l: r.l }));
      return i;
    }, e.prototype.equals = function(n) {
      return this.toRgbString() === new e(n).toRgbString();
    }, e;
  }()
);
function At(e, n = 20) {
  return e.mix("#141414", n).toString();
}
function vh(e) {
  const n = fi(), r = Ct("button");
  return j(() => {
    let t = {}, i = e.color;
    if (i) {
      const a = i.match(/var\((.*?)\)/);
      a && (i = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
      const o = new ph(i), l = e.dark ? o.tint(20).toString() : At(o, 20);
      if (e.plain)
        t = r.cssVarBlock({
          "bg-color": e.dark ? At(o, 90) : o.tint(90).toString(),
          "text-color": i,
          "border-color": e.dark ? At(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${r.cssVarName("color-white")})`,
          "hover-bg-color": i,
          "hover-border-color": i,
          "active-bg-color": l,
          "active-text-color": `var(${r.cssVarName("color-white")})`,
          "active-border-color": l
        }), n.value && (t[r.cssVarBlockName("disabled-bg-color")] = e.dark ? At(o, 90) : o.tint(90).toString(), t[r.cssVarBlockName("disabled-text-color")] = e.dark ? At(o, 50) : o.tint(50).toString(), t[r.cssVarBlockName("disabled-border-color")] = e.dark ? At(o, 80) : o.tint(80).toString());
      else {
        const c = e.dark ? At(o, 30) : o.tint(30).toString(), s = o.isDark() ? `var(${r.cssVarName("color-white")})` : `var(${r.cssVarName("color-black")})`;
        if (t = r.cssVarBlock({
          "bg-color": i,
          "text-color": s,
          "border-color": i,
          "hover-bg-color": c,
          "hover-text-color": s,
          "hover-border-color": c,
          "active-bg-color": l,
          "active-border-color": l
        }), n.value) {
          const f = e.dark ? At(o, 50) : o.tint(50).toString();
          t[r.cssVarBlockName("disabled-bg-color")] = f, t[r.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${r.cssVarName("color-white")})`, t[r.cssVarBlockName("disabled-border-color")] = f;
        }
      }
    }
    return t;
  });
}
const mh = me({
  name: "ElButton"
}), gh = /* @__PURE__ */ me({
  ...mh,
  props: Ur,
  emits: nh,
  setup(e, { expose: n, emit: r }) {
    const t = e, i = vh(t), a = Ct("button"), { _ref: o, _size: l, _type: c, _disabled: s, _props: f, shouldAddSpace: v, handleClick: h } = Q1(t, r), g = j(() => [
      a.b(),
      a.m(c.value),
      a.m(l.value),
      a.is("disabled", s.value),
      a.is("loading", t.loading),
      a.is("plain", t.plain),
      a.is("round", t.round),
      a.is("circle", t.circle),
      a.is("text", t.text),
      a.is("link", t.link),
      a.is("has-bg", t.bg)
    ]);
    return n({
      ref: o,
      size: l,
      type: c,
      disabled: s,
      shouldAddSpace: v
    }), (d, p) => (q(), xe(Je(d.tag), F0({
      ref_key: "_ref",
      ref: o
    }, N(f), {
      class: N(g),
      style: N(i),
      onClick: N(h)
    }), {
      default: ve(() => [
        d.loading ? (q(), J(ft, { key: 0 }, [
          d.$slots.loading ? Le(d.$slots, "loading", { key: 0 }) : (q(), xe(N(Pt), {
            key: 1,
            class: ne(N(a).is("loading"))
          }, {
            default: ve(() => [
              (q(), xe(Je(d.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : d.icon || d.$slots.icon ? (q(), xe(N(Pt), { key: 1 }, {
          default: ve(() => [
            d.icon ? (q(), xe(Je(d.icon), { key: 0 })) : Le(d.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : ue("v-if", !0),
        d.$slots.default ? (q(), J("span", {
          key: 2,
          class: ne({ [N(a).em("text", "expand")]: N(v) })
        }, [
          Le(d.$slots, "default")
        ], 2)) : ue("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var yh = /* @__PURE__ */ h0(gh, [["__file", "button.vue"]]);
const bh = {
  size: Ur.size,
  type: Ur.type
}, Ch = me({
  name: "ElButtonGroup"
}), Eh = /* @__PURE__ */ me({
  ...Ch,
  props: bh,
  setup(e) {
    const n = e;
    Wr(_s, Qa({
      size: dn(n, "size"),
      type: dn(n, "type")
    }));
    const r = Ct("button");
    return (t, i) => (q(), J("div", {
      class: ne(N(r).b("group"))
    }, [
      Le(t.$slots, "default")
    ], 2));
  }
});
var ws = /* @__PURE__ */ h0(Eh, [["__file", "button-group.vue"]]);
const _h = ci(yh, {
  ButtonGroup: ws
});
Ux(ws);
var un = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(un || {});
const Ds = (e) => {
  if (!e)
    return { onClick: D0, onMousedown: D0, onMouseup: D0 };
  let n = !1, r = !1;
  return { onClick: (o) => {
    n && r && e(o), n = r = !1;
  }, onMousedown: (o) => {
    n = o.target === o.currentTarget;
  }, onMouseup: (o) => {
    r = o.target === o.currentTarget;
  } };
}, Bh = x0({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: zt([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: zt([String, Number])
  }
}), wh = {
  click: (e) => e instanceof MouseEvent
}, Dh = "overlay";
var Fh = me({
  name: "ElOverlay",
  props: Bh,
  emits: wh,
  setup(e, { slots: n, emit: r }) {
    const t = Ct(Dh), i = (c) => {
      r("click", c);
    }, { onClick: a, onMousedown: o, onMouseup: l } = Ds(e.customMaskEvent ? void 0 : i);
    return () => e.mask ? Ie("div", {
      class: [t.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: o,
      onMouseup: l
    }, [Le(n, "default")], un.STYLE | un.CLASS | un.PROPS, ["onClick", "onMouseup", "onMousedown"]) : _l("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [Le(n, "default")]);
  }
});
const Ah = Fh, Th = (e, n, r, t) => {
  let i = {
    offsetX: 0,
    offsetY: 0
  };
  const a = (s) => {
    const f = s.clientX, v = s.clientY, { offsetX: h, offsetY: g } = i, d = e.value.getBoundingClientRect(), p = d.left, y = d.top, _ = d.width, b = d.height, C = document.documentElement.clientWidth, E = document.documentElement.clientHeight, T = -p + h, A = -y + g, S = C - p - _ + h, k = E - y - b + g, L = (B) => {
      let I = h + B.clientX - f, P = g + B.clientY - v;
      t != null && t.value || (I = Math.min(Math.max(I, T), S), P = Math.min(Math.max(P, A), k)), i = {
        offsetX: I,
        offsetY: P
      }, e.value && (e.value.style.transform = `translate(${Nr(I)}, ${Nr(P)})`);
    }, F = () => {
      document.removeEventListener("mousemove", L), document.removeEventListener("mouseup", F);
    };
    document.addEventListener("mousemove", L), document.addEventListener("mouseup", F);
  }, o = () => {
    n.value && e.value && n.value.addEventListener("mousedown", a);
  }, l = () => {
    n.value && e.value && n.value.removeEventListener("mousedown", a);
  }, c = () => {
    i = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return Et(() => {
    Ga(() => {
      r.value ? o() : l();
    });
  }), P0(() => {
    l();
  }), {
    resetPosition: c
  };
}, Sh = (e, n = {}) => {
  Za(e) || Dx("[useLockscreen]", "You need to pass a ref param to this function");
  const r = n.ns || Ct("popup"), t = j(() => r.bm("parent", "hidden"));
  if (!Qe || Ia(document.body, t.value))
    return;
  let i = 0, a = !1, o = "0";
  const l = () => {
    setTimeout(() => {
      typeof document > "u" || a && document && (document.body.style.width = o, Nx(document.body, t.value));
    }, 200);
  };
  qe(e, (c) => {
    if (!c) {
      l();
      return;
    }
    a = !Ia(document.body, t.value), a && (o = document.body.style.width, $x(document.body, t.value)), i = qx(r.namespace.value);
    const s = document.documentElement.clientHeight < document.body.scrollHeight, f = Vx(document.body, "overflowY");
    i > 0 && (s || f === "scroll") && a && (document.body.style.width = `calc(100% - ${i}px)`);
  }), Xa(() => l());
}, kh = (e) => ["", ...ss].includes(e), Kr = "_trap-focus-children", Gt = [], ja = (e) => {
  var n;
  if (Gt.length === 0)
    return;
  const r = Gt[Gt.length - 1][Kr];
  if (r.length > 0 && e.code === hi.tab) {
    if (r.length === 1) {
      e.preventDefault(), document.activeElement !== r[0] && r[0].focus();
      return;
    }
    const t = e.shiftKey, i = e.target === r[0], a = e.target === r[r.length - 1];
    if (i && t && (e.preventDefault(), r[r.length - 1].focus()), a && !t && (e.preventDefault(), r[0].focus()), process.env.NODE_ENV === "test") {
      const o = r.indexOf(e.target);
      o !== -1 && ((n = r[t ? o - 1 : o + 1]) == null || n.focus());
    }
  }
}, Ih = {
  beforeMount(e) {
    e[Kr] = Ra(e), Gt.push(e), Gt.length <= 1 && document.addEventListener("keydown", ja);
  },
  updated(e) {
    Ne(() => {
      e[Kr] = Ra(e);
    });
  },
  unmounted() {
    Gt.shift(), Gt.length === 0 && document.removeEventListener("keydown", ja);
  }
}, Ph = me({
  name: "ElMessageBox",
  directives: {
    TrapFocus: Ih
  },
  components: {
    ElButton: _h,
    ElFocusTrap: Z1,
    ElInput: R1,
    ElOverlay: Ah,
    ElIcon: Pt,
    ...f1
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: kh
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
      ns: i,
      size: a
    } = Ox("message-box", j(() => e.buttonSize)), { t: o } = r, { nextZIndex: l } = t, c = he(!1), s = Qa({
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
      confirmButtonLoadingIcon: xn(bn),
      cancelButtonLoadingIcon: xn(bn),
      confirmButtonDisabled: !1,
      editorErrorMessage: "",
      validateError: !1,
      zIndex: l()
    }), f = j(() => {
      const Y = s.type;
      return { [i.bm("icon", Y)]: Y && Pa[Y] };
    }), v = qr(), h = qr(), g = j(() => {
      const Y = s.type;
      return s.icon || Y && Pa[Y] || "";
    }), d = j(() => !!s.message), p = he(), y = he(), _ = he(), b = he(), C = he(), E = j(() => s.confirmButtonClass);
    qe(() => s.inputValue, async (Y) => {
      await Ne(), e.boxType === "prompt" && Y && I();
    }, { immediate: !0 }), qe(() => c.value, (Y) => {
      var X, Z;
      Y && (e.boxType !== "prompt" && (s.autofocus ? _.value = (Z = (X = C.value) == null ? void 0 : X.$el) != null ? Z : p.value : _.value = p.value), s.zIndex = l()), e.boxType === "prompt" && (Y ? Ne().then(() => {
        var oe;
        b.value && b.value.$el && (s.autofocus ? _.value = (oe = P()) != null ? oe : p.value : _.value = p.value);
      }) : (s.editorErrorMessage = "", s.validateError = !1));
    });
    const T = j(() => e.draggable), A = j(() => e.overflow);
    Th(p, y, T, A), Et(async () => {
      await Ne(), e.closeOnHashChange && window.addEventListener("hashchange", S);
    }), P0(() => {
      e.closeOnHashChange && window.removeEventListener("hashchange", S);
    });
    function S() {
      c.value && (c.value = !1, Ne(() => {
        s.action && n("action", s.action);
      }));
    }
    const k = () => {
      e.closeOnClickModal && B(s.distinguishCancelAndClose ? "close" : "cancel");
    }, L = Ds(k), F = (Y) => {
      if (s.inputType !== "textarea")
        return Y.preventDefault(), B("confirm");
    }, B = (Y) => {
      var X;
      e.boxType === "prompt" && Y === "confirm" && !I() || (s.action = Y, s.beforeClose ? (X = s.beforeClose) == null || X.call(s, Y, s, S) : S());
    }, I = () => {
      if (e.boxType === "prompt") {
        const Y = s.inputPattern;
        if (Y && !Y.test(s.inputValue || ""))
          return s.editorErrorMessage = s.inputErrorMessage || o("el.messagebox.error"), s.validateError = !0, !1;
        const X = s.inputValidator;
        if (u0(X)) {
          const Z = X(s.inputValue);
          if (Z === !1)
            return s.editorErrorMessage = s.inputErrorMessage || o("el.messagebox.error"), s.validateError = !0, !1;
          if (dt(Z))
            return s.editorErrorMessage = Z, s.validateError = !0, !1;
        }
      }
      return s.editorErrorMessage = "", s.validateError = !1, !0;
    }, P = () => {
      var Y, X;
      const Z = (Y = b.value) == null ? void 0 : Y.$refs;
      return (X = Z == null ? void 0 : Z.input) != null ? X : Z == null ? void 0 : Z.textarea;
    }, W = () => {
      B("close");
    }, G = () => {
      e.closeOnPressEscape && W();
    };
    return e.lockScroll && Sh(c), {
      ...Bl(s),
      ns: i,
      overlayEvent: L,
      visible: c,
      hasMessage: d,
      typeClass: f,
      contentId: v,
      inputId: h,
      btnSize: a,
      iconComponent: g,
      confirmButtonClasses: E,
      rootRef: p,
      focusStartRef: _,
      headerRef: y,
      inputRef: b,
      confirmRef: C,
      doClose: S,
      handleClose: W,
      onCloseRequested: G,
      handleWrapperClick: k,
      handleInputEnter: F,
      handleAction: B,
      t: o
    };
  }
});
function Mh(e, n, r, t, i, a) {
  const o = je("el-icon"), l = je("el-input"), c = je("el-button"), s = je("el-focus-trap"), f = je("el-overlay");
  return q(), xe(jr, {
    name: "fade-in-linear",
    onAfterLeave: (v) => e.$emit("vanish"),
    persisted: ""
  }, {
    default: ve(() => [
      Un(Ie(f, {
        "z-index": e.zIndex,
        "overlay-class": [e.ns.is("message-box"), e.modalClass],
        mask: e.modal
      }, {
        default: ve(() => [
          ee("div", {
            role: "dialog",
            "aria-label": e.title,
            "aria-modal": "true",
            "aria-describedby": e.showInput ? void 0 : e.contentId,
            class: ne(`${e.ns.namespace.value}-overlay-message-box`),
            onClick: e.overlayEvent.onClick,
            onMousedown: e.overlayEvent.onMousedown,
            onMouseup: e.overlayEvent.onMouseup
          }, [
            Ie(s, {
              loop: "",
              trapped: e.visible,
              "focus-trap-el": e.rootRef,
              "focus-start-el": e.focusStartRef,
              onReleaseRequested: e.onCloseRequested
            }, {
              default: ve(() => [
                ee("div", {
                  ref: "rootRef",
                  class: ne([
                    e.ns.b(),
                    e.customClass,
                    e.ns.is("draggable", e.draggable),
                    { [e.ns.m("center")]: e.center }
                  ]),
                  style: Pe(e.customStyle),
                  tabindex: "-1",
                  onClick: E0(() => {
                  }, ["stop"])
                }, [
                  e.title !== null && e.title !== void 0 ? (q(), J("div", {
                    key: 0,
                    ref: "headerRef",
                    class: ne([e.ns.e("header"), { "show-close": e.showClose }])
                  }, [
                    ee("div", {
                      class: ne(e.ns.e("title"))
                    }, [
                      e.iconComponent && e.center ? (q(), xe(o, {
                        key: 0,
                        class: ne([e.ns.e("status"), e.typeClass])
                      }, {
                        default: ve(() => [
                          (q(), xe(Je(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : ue("v-if", !0),
                      ee("span", null, be(e.title), 1)
                    ], 2),
                    e.showClose ? (q(), J("button", {
                      key: 0,
                      type: "button",
                      class: ne(e.ns.e("headerbtn")),
                      "aria-label": e.t("el.messagebox.close"),
                      onClick: (v) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"),
                      onKeydown: j0(E0((v) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
                    }, [
                      Ie(o, {
                        class: ne(e.ns.e("close"))
                      }, {
                        default: ve(() => [
                          (q(), xe(Je(e.closeIcon || "close")))
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, ["aria-label", "onClick", "onKeydown"])) : ue("v-if", !0)
                  ], 2)) : ue("v-if", !0),
                  ee("div", {
                    id: e.contentId,
                    class: ne(e.ns.e("content"))
                  }, [
                    ee("div", {
                      class: ne(e.ns.e("container"))
                    }, [
                      e.iconComponent && !e.center && e.hasMessage ? (q(), xe(o, {
                        key: 0,
                        class: ne([e.ns.e("status"), e.typeClass])
                      }, {
                        default: ve(() => [
                          (q(), xe(Je(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : ue("v-if", !0),
                      e.hasMessage ? (q(), J("div", {
                        key: 1,
                        class: ne(e.ns.e("message"))
                      }, [
                        Le(e.$slots, "default", {}, () => [
                          e.dangerouslyUseHTMLString ? (q(), xe(Je(e.showInput ? "label" : "p"), {
                            key: 1,
                            for: e.showInput ? e.inputId : void 0,
                            innerHTML: e.message
                          }, null, 8, ["for", "innerHTML"])) : (q(), xe(Je(e.showInput ? "label" : "p"), {
                            key: 0,
                            for: e.showInput ? e.inputId : void 0
                          }, {
                            default: ve(() => [
                              on(be(e.dangerouslyUseHTMLString ? "" : e.message), 1)
                            ]),
                            _: 1
                          }, 8, ["for"]))
                        ])
                      ], 2)) : ue("v-if", !0)
                    ], 2),
                    Un(ee("div", {
                      class: ne(e.ns.e("input"))
                    }, [
                      Ie(l, {
                        id: e.inputId,
                        ref: "inputRef",
                        modelValue: e.inputValue,
                        "onUpdate:modelValue": (v) => e.inputValue = v,
                        type: e.inputType,
                        placeholder: e.inputPlaceholder,
                        "aria-invalid": e.validateError,
                        class: ne({ invalid: e.validateError }),
                        onKeydown: j0(e.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      ee("div", {
                        class: ne(e.ns.e("errormsg")),
                        style: Pe({
                          visibility: e.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, be(e.editorErrorMessage), 7)
                    ], 2), [
                      [Yn, e.showInput]
                    ])
                  ], 10, ["id"]),
                  ee("div", {
                    class: ne(e.ns.e("btns"))
                  }, [
                    e.showCancelButton ? (q(), xe(c, {
                      key: 0,
                      loading: e.cancelButtonLoading,
                      "loading-icon": e.cancelButtonLoadingIcon,
                      class: ne([e.cancelButtonClass]),
                      round: e.roundButton,
                      size: e.btnSize,
                      onClick: (v) => e.handleAction("cancel"),
                      onKeydown: j0(E0((v) => e.handleAction("cancel"), ["prevent"]), ["enter"])
                    }, {
                      default: ve(() => [
                        on(be(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : ue("v-if", !0),
                    Un(Ie(c, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: e.confirmButtonLoading,
                      "loading-icon": e.confirmButtonLoadingIcon,
                      class: ne([e.confirmButtonClasses]),
                      round: e.roundButton,
                      disabled: e.confirmButtonDisabled,
                      size: e.btnSize,
                      onClick: (v) => e.handleAction("confirm"),
                      onKeydown: j0(E0((v) => e.handleAction("confirm"), ["prevent"]), ["enter"])
                    }, {
                      default: ve(() => [
                        on(be(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "disabled", "size", "onClick", "onKeydown"]), [
                      [Yn, e.showConfirmButton]
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
        [Yn, e.visible]
      ])
    ]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
var Rh = /* @__PURE__ */ h0(Ph, [["render", Mh], ["__file", "index.vue"]]);
const I0 = /* @__PURE__ */ new Map(), Oh = (e) => {
  let n = document.body;
  return e.appendTo && (dt(e.appendTo) && (n = document.querySelector(e.appendTo)), k0(e.appendTo) && (n = e.appendTo), k0(n) || (xt("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body."), n = document.body)), n;
}, zh = (e, n, r = null) => {
  const t = Ie(Rh, e, u0(e.message) || eo(e.message) ? {
    default: u0(e.message) ? e.message : () => e.message
  } : null);
  return t.appContext = r, to(t, n), Oh(e).appendChild(n.firstElementChild), t.component;
}, Lh = () => document.createElement("div"), Hh = (e, n) => {
  const r = Lh();
  e.onVanish = () => {
    to(null, r), I0.delete(i);
  }, e.onAction = (a) => {
    const o = I0.get(i);
    let l;
    e.showInput ? l = { value: i.inputValue, action: a } : l = a, e.callback ? e.callback(l, t.proxy) : a === "cancel" || a === "close" ? e.distinguishCancelAndClose && a !== "cancel" ? o.reject("close") : o.reject("cancel") : o.resolve(l);
  };
  const t = zh(e, r, n), i = t.proxy;
  for (const a in e)
    pn(e, a) && !pn(i.$props, a) && (a === "closeIcon" && f0(e[a]) ? i[a] = xn(e[a]) : i[a] = e[a]);
  return i.visible = !0, i;
};
function p0(e, n = null) {
  if (!Qe)
    return Promise.reject();
  let r;
  return dt(e) || eo(e) ? e = {
    message: e
  } : r = e.callback, new Promise((t, i) => {
    const a = Hh(e, n ?? p0._context);
    I0.set(a, {
      options: e,
      callback: r,
      resolve: t,
      reject: i
    });
  });
}
const $h = ["alert", "confirm", "prompt"], Nh = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
$h.forEach((e) => {
  p0[e] = Vh(e);
});
function Vh(e) {
  return (n, r, t, i) => {
    let a = "";
    return f0(r) ? (t = r, a = "") : Xo(r) ? a = "" : a = r, p0(Object.assign({
      title: a,
      message: n,
      type: "",
      ...Nh[e]
    }, t, {
      boxType: e
    }), i);
  };
}
p0.close = () => {
  I0.forEach((e, n) => {
    n.doClose();
  }), I0.clear();
};
p0._context = null;
const kt = p0;
kt.install = (e) => {
  kt._context = e._context, e.config.globalProperties.$msgbox = kt, e.config.globalProperties.$messageBox = kt, e.config.globalProperties.$alert = kt.alert, e.config.globalProperties.$confirm = kt.confirm, e.config.globalProperties.$prompt = kt.prompt;
};
const qh = kt;
function Uh({
  type: e = "warning",
  icon: n = "",
  title: r = "系统提示",
  message: t,
  showCancelButton: i = !0,
  confirmButtonText: a = "确定",
  cancelButtonText: o = "取消",
  center: l = !1,
  overflow: c = !1,
  draggable: s = !1,
  appendTo: f,
  customStyle: v = {},
  doSomething: h = () => {
  },
  cancelDoSomething: g = () => {
  }
}) {
  qh({
    icon: n === "" ? xn(u1) : n,
    type: e,
    title: r,
    message: t,
    showCancelButton: i,
    confirmButtonText: a,
    cancelButtonText: o,
    center: l,
    overflow: c,
    draggable: s,
    appendTo: f,
    customStyle: v,
    beforeClose: (d, p, y) => {
      if (d === "confirm") {
        h(), y();
        return;
      }
      g(), y();
    }
  }).catch(() => {
  });
}
const Fs = {
  delMessageBox: Uh
};
let pi = {};
const Yh = "ljs-2024.01.30";
function Or(e, n, r) {
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
  let i = Lt.setDES(e, Yh);
  document.getElementById(i) !== null && document.body.removeChild(document.getElementById(i));
  let a = document.createElement("canvas");
  a.width = t.can_w, a.height = t.can_h;
  let o = a.getContext("2d");
  o.rotate(t.rotate * Math.PI / 180), o.font = t.font, o.fillStyle = t.color, o.textAlign = t.align, o.textBaseline = "Middle", o.fillText(n[0], a.width / 8, a.height / 2), o.fillText(n[1], a.width / 8, a.height * 2 / 3);
  let l = document.createElement("div");
  return l.id = i, l.style.display = "block", l.style.visibility = "visible", l.style.opacity = "1", l.style.pointerEvents = "none", l.style.top = "0px", l.style.left = "0px", l.style.position = "fixed", l.style.zIndex = "100000", l.style.width = document.documentElement.clientWidth + "px", l.style.height = document.documentElement.clientHeight + "px", l.style.background = "url(" + a.toDataURL("image/png") + ") left top repeat", document.body.appendChild(l), i;
}
pi.set = (e, n, r, t = 500) => {
  let i = Or(e, n, r);
  setInterval(() => {
    const a = document.getElementById(i), o = a.style;
    (a === null || o.display !== "block" || o.visibility !== "visible" || o.opacity !== "1" || o.position !== "fixed" || o.top !== "0px" || o.left !== "0px") && (i = Or(e, n, r));
  }, t), window.onresize = () => {
    Or(e, n, r);
  };
};
function Kh(e) {
  if (ae.fieldCheck(e))
    return e;
  const n = e.length;
  if (n === 2)
    return e.slice(0, 1) + "*";
  if (n > 2) {
    const r = e.slice(0, 1), t = e.slice(n - 1, n);
    return r + "*" + t;
  }
  return e;
}
function Wh(e, n = 4) {
  if (ae.fieldCheck(e))
    return e;
  e = e + "";
  const r = e.length;
  if (r === 11) {
    const t = e.slice(0, 3), i = e.slice(3 + n, r);
    let a = "";
    for (let o = 0; o < n; o++)
      a += "*";
    return t + a + i;
  } else if (r === 7 || r === 8) {
    const t = e.slice(0, 2), i = e.slice(2 + n, r);
    let a = "";
    for (let o = 0; o < n; o++)
      a += "*";
    return t + a + i;
  } else {
    const t = e.slice(0, 2), i = e.slice(r - 2, r);
    let a = "";
    for (let o = 0; o < r - 4; o++)
      a += "*";
    return t + a + i;
  }
}
function jh({
  str: e,
  keepStart: n = 3,
  keepEnd: r = 4,
  maskChar: t = "*",
  maskLength: i = 4
}) {
  if (ae.fieldCheck(e))
    return e;
  if (!e || e.length < n + r)
    return e + t.repeat(i);
  const a = e.slice(0, n), o = r !== 0 ? e.slice(-r) : "";
  return a + t.repeat(i) + o;
}
const As = {
  desensitizationName: Kh,
  desensitizationPhone: Wh,
  desensitizationStr: jh
}, Gh = {
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
const _t = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [t, i] of n)
    r[t] = i;
  return r;
}, Xh = Gh, Zh = (e) => (Gr("data-v-474ec553"), e = e(), Xr(), e), Jh = { class: "text" }, Qh = { class: "g-container" }, ep = /* @__PURE__ */ Zh(() => /* @__PURE__ */ ee("div", { class: "g-circle" }, null, -1)), tp = { class: "g-bubbles" };
function np(e, n, r, t, i, a) {
  return q(), xe(no, { to: "body" }, [
    ee("div", {
      class: "ljs-loading",
      id: "ljs-loading",
      ref: "ljsLoading",
      style: Pe({
        "--speed": e.speed,
        "--gaussian": e.gaussian,
        "--bgopacity": e.bgOpacity,
        "--textcolor": e.textColor
      })
    }, [
      ee("div", Jh, [
        Le(e.$slots, "default", {}, void 0, !0)
      ]),
      ee("div", Qh, [
        ep,
        ee("div", tp, [
          (q(), J(ft, null, En(200, (o) => ee("div", {
            class: "g-bubble",
            key: o
          })), 64))
        ])
      ])
    ], 4)
  ]);
}
const Ts = /* @__PURE__ */ _t(Xh, [["render", np], ["__scopeId", "data-v-474ec553"]]);
const rp = {
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
    // 移动端页码按钮的数量端默认值5（惰性默认：组件实例化时按屏宽求值，模块加载不触碰 document）
    pagerCount: {
      type: Number,
      default: () => document.body.clientWidth < 992 ? 5 : 7
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
}, ip = { class: "pagination" }, ap = { class: "note" };
function op(e, n, r, t, i, a) {
  const o = je("el-pagination");
  return q(), J("div", ip, [
    ee("div", ap, be(r.note), 1),
    Ie(o, F0({
      background: r.background,
      "current-page": a.currentPage,
      "onUpdate:currentPage": n[0] || (n[0] = (l) => a.currentPage = l),
      "page-size": a.pageSize,
      "onUpdate:pageSize": n[1] || (n[1] = (l) => a.pageSize = l),
      layout: r.layout,
      "page-sizes": r.pageSizes,
      "pager-count": r.pagerCount,
      total: r.total
    }, e.$attrs, {
      onSizeChange: a.handleSizeChange,
      onCurrentChange: a.handleCurrentChange
    }), null, 16, ["background", "current-page", "page-size", "layout", "page-sizes", "pager-count", "total", "onSizeChange", "onCurrentChange"])
  ]);
}
const Ss = /* @__PURE__ */ _t(rp, [["render", op], ["__scopeId", "data-v-e2278882"]]), sp = {
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
const lp = sp;
function cp(e, n, r, t, i, a) {
  return q(), xe(no, { to: "body" }, [
    e.modelValue ? (q(), J("div", {
      key: 0,
      ref: "rightMenu",
      class: ne(`rightMenu ${e.menuClass} ${e.modelValue ? "show" : ""}`),
      style: Pe({
        top: `${e.position.top}px`,
        left: `${e.position.left}px`
      })
    }, [
      Le(e.$slots, "default", {}, void 0, !0)
    ], 6)) : ue("", !0)
  ]);
}
const ks = /* @__PURE__ */ _t(lp, [["render", cp], ["__scopeId", "data-v-99657e8c"]]);
const up = {
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
      return _n.pickerOptions(this.dateType, this.disabledDateSpan, this.dateTypeKeyValue);
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
          const i = e[t];
          if (n === i.dictValue) {
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
          n += this.disabledDateSpan * 3600 * 1e3 * 24, this.opts.dateType = "date", this.opts.valueFormat = "YYYY-MM-DD", this.dateValue = De.formatTime(n, "{y}-{m}-{d}");
          break;
        case this.dateTypeKeyValue[1]:
          r = new Date(n).getFullYear(), t = new Date(n).getMonth() + this.disabledDateSpan, t < 0 ? (r += this.disabledDateSpan, t = 12) : t += 1, this.opts.dateType = "month", this.opts.valueFormat = "YYYY-MM", this.dateValue = De.formatTime(/* @__PURE__ */ new Date(`${r}-${de.numberB0(t)}`), "{y}-{m}");
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
}, fp = ["onClick"], dp = { class: "frequencyDate" };
function xp(e, n, r, t, i, a) {
  const o = je("el-date-picker"), l = je("el-form-item");
  return q(), xe(l, {
    label: r.formItemLabel,
    prop: "date"
  }, {
    default: ve(() => [
      ee("div", {
        class: "frequency",
        style: Pe({
          "--dateTypeNum": i.date_type.length
        })
      }, [
        (q(!0), J(ft, null, En(i.date_type, (c) => (q(), J("div", {
          class: ne(["one", { active: a.dateType === c.dictValue }]),
          onClick: (s) => a.dateTypeF(c.dictValue),
          key: c.dictValue
        }, be(c.dictLabel), 11, fp))), 128))
      ], 4),
      Ie(jr, { name: "frequencyDate" }, {
        default: ve(() => [
          ee("div", dp, [
            Ie(o, {
              modelValue: a.dateValue,
              "onUpdate:modelValue": n[0] || (n[0] = (c) => a.dateValue = c),
              style: { width: "240px" },
              "value-format": i.opts.valueFormat,
              type: i.opts.dateType,
              placeholder: "请选择",
              editable: !1,
              clearable: !1,
              "disabled-date": a.disabledDate
            }, null, 8, ["modelValue", "value-format", "type", "disabled-date"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["label"]);
}
const Is = /* @__PURE__ */ _t(up, [["render", xp], ["__scopeId", "data-v-5475b4d5"]]), hp = {
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
      LJSfc: _n,
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
          const i = e[t];
          if (n === i.dictValue) {
            e.splice(t, 1);
            break;
          }
        }
      }), this.date_type = e), !ae.fieldCheck(this.date) && this.date.length === 2 && (this.opts.startDate = this.date[0], this.opts.endDate = this.date[1]), this.dateTypeF(this.dateType);
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
      if (!ae.fieldCheck(this.date) && this.date.length === 2) {
        switch (this.dateSwitchRule === 0 ? r = [this.date[0], this.date[1]] : this.dateSwitchRule === 1 && (r = De.initSearchDateQj(this.opts.dateType)), e) {
          case this.dateTypeKeyValue[3]:
            this.opts.startDate = De.formatTime(r[0], "{y}-{m}-{d} {h}:{i}:{s}"), this.opts.endDate = De.formatTime(r[1], "{y}-{m}-{d} {h}:{i}:{s}");
            break;
          case this.dateTypeKeyValue[2]:
            this.opts.startDate = De.formatTime(r[0], "{y}-{m}-{d}"), this.opts.endDate = De.formatTime(r[1], "{y}-{m}-{d}");
            break;
          case this.dateTypeKeyValue[1]:
            this.opts.startDate = De.formatTime(r[0], "{y}-{m}"), this.opts.endDate = De.formatTime(r[1], "{y}-{m}");
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
const pp = hp, vp = ["onClick"], mp = {
  key: 0,
  class: "frequencyDate"
}, gp = { class: "zhi" };
function yp(e, n, r, t, i, a) {
  const o = je("el-date-picker"), l = je("el-form-item");
  return q(), xe(l, {
    label: e.formItemLabel,
    prop: "date"
  }, {
    default: ve(() => [
      ee("div", {
        class: "frequency",
        style: Pe({
          "--dateTypeNum": e.date_type.length
        })
      }, [
        (q(!0), J(ft, null, En(e.date_type, (c) => (q(), J("div", {
          class: ne(["one", { active: e.dateType === c.dictValue }]),
          onClick: (s) => e.dateTypeF(c.dictValue),
          key: c.dictValue
        }, be(c.dictLabel), 11, vp))), 128))
      ], 4),
      Ie(jr, { name: "frequencyDate" }, {
        default: ve(() => [
          e.opts.dateTypeTag ? (q(), J("div", mp, [
            Ie(o, {
              modelValue: e.opts.startDate,
              "onUpdate:modelValue": n[0] || (n[0] = (c) => e.opts.startDate = c),
              style: Pe({
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
            ee("span", gp, be(e.symbol), 1),
            Ie(o, {
              modelValue: e.opts.endDate,
              "onUpdate:modelValue": n[1] || (n[1] = (c) => e.opts.endDate = c),
              style: Pe({
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
          ])) : ue("", !0)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["label"]);
}
const Ps = /* @__PURE__ */ _t(pp, [["render", yp], ["__scopeId", "data-v-1e7c37ee"]]), bp = {
  name: "DateRange",
  props: {
    // 日期区间数据
    modelValue: Array,
    // 日期类型
    dateType: {
      type: String,
      default: "date"
    },
    // el-form-item 的 label 值
    formItemLabel: {
      type: String,
      default: "日期"
    },
    // el-form-item 的 prop 值
    formItemProp: {
      type: String,
      default: "date"
    },
    // el-form-item 的 rules 值
    formItemRules: {
      type: Array,
      default: () => []
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
        !ae.fieldCheck(this.modelValue) && this.modelValue.length >= 1 ? (this.opts.startDate = this.modelValue[0], this.opts.endDate = this.modelValue[1]) : (this.opts.startDate = null, this.opts.endDate = null);
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
          const i = new Date(trendsDisabledDate).getTime() + r - 864e5, a = new Date(trendsDisabledDate).getTime() - r;
          return i >= Date.now() ? t.getTime() > Date.now() || t.getTime() < a : t.getTime() > i || t.getTime() < a;
        }
      };
    }
  }
};
const Cp = bp, Ep = (e) => (Gr("data-v-2adc6833"), e = e(), Xr(), e), _p = /* @__PURE__ */ Ep(() => /* @__PURE__ */ ee("span", { class: "and" }, "~", -1));
function Bp(e, n, r, t, i, a) {
  const o = je("el-date-picker"), l = je("el-form-item");
  return q(), xe(l, {
    label: e.formItemLabel,
    prop: e.formItemProp,
    rules: e.formItemRules
  }, {
    default: ve(() => [
      Ie(o, {
        modelValue: e.opts.startDate,
        "onUpdate:modelValue": n[0] || (n[0] = (c) => e.opts.startDate = c),
        style: Pe({
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
      _p,
      Ie(o, {
        modelValue: e.opts.endDate,
        "onUpdate:modelValue": n[3] || (n[3] = (c) => e.opts.endDate = c),
        style: Pe({
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
  }, 8, ["label", "prop", "rules"]);
}
const Ms = /* @__PURE__ */ _t(Cp, [["render", Bp], ["__scopeId", "data-v-2adc6833"]]), s0 = 3600 * 1e3 * 24;
function wp(e, n = 30, r) {
  r ? e.trendsDisabledDate = De.formatTime(r, "{y}-{m}-{d}") : e.trendsDisabledDate = 0;
  const t = 3600 * 1e3 * 24 * n;
  return (i) => {
    if (e.trendsDisabledDate === 0)
      return i.getTime() > Date.now() || i.getTime() < e.trendsDisabledDate;
    {
      const a = new Date(e.trendsDisabledDate).getTime() + t - 864e5, o = new Date(e.trendsDisabledDate).getTime() - t;
      return a >= Date.now() ? i.getTime() > Date.now() || i.getTime() < o : i.getTime() > a || i.getTime() < o;
    }
  };
}
function Dp(e, n, r, t) {
  if (t)
    n.tempDate = e.date;
  else if (!ae.fieldCheck(e.date) && e.date.length > 0 && !ae.fieldCheck(e.date[0]) && !ae.fieldCheck(e.date[1])) {
    let i = new Date(e.date[0]).getTime(), a = new Date(e.date[1]).getTime();
    Math.abs(i - a) / s0 >= r && (n.tempDate[1] === e.date[1] ? e.date[1] = De.formatTime(i + s0 * (r - 1), "{y}-{m}-{d}") : e.date[0] = De.formatTime(a - s0 * (r - 1), "{y}-{m}-{d}"));
  }
}
function Fp(e, n, r, t) {
  if (t)
    n.tempDate = e.date;
  else if (!ae.fieldCheck(e.date) && e.date.length > 0 && !ae.fieldCheck(e.date[0]) && !ae.fieldCheck(e.date[1])) {
    let i = new Date(e.date[0]).getTime(), a = new Date(e.date[1]).getTime();
    Math.abs(i - a) / s0 >= r && (n.tempDate[0] === e.date[0] ? e.date[0] = De.formatTime(a - s0 * (r - 1), "{y}-{m}-{d}") : e.date[1] = De.formatTime(i + s0 * (r - 1), "{y}-{m}-{d}"));
  }
}
const Ap = {
  pickerOptionsDynamic: wp,
  visibleChange_start: Dp,
  visibleChange_end: Fp
};
const Tp = {
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
      return this.value !== null && typeof this.value < "u" ? Array.isArray(this.value) ? this.value : [this.value] : [];
    }
  }
}, Sp = ["index"];
function kp(e, n, r, t, i, a) {
  const o = je("el-tag");
  return q(), J("div", null, [
    (q(!0), J(ft, null, En(r.options, (l, c) => (q(), J(ft, {
      key: l.dictValue
    }, [
      a.values.includes(l.dictValue) ? (q(), J(ft, { key: 0 }, [
        l.listClass == "default" || l.listClass == "" ? (q(), J("span", {
          key: 0,
          index: c,
          class: ne(l.cssClass)
        }, be(l.dictLabel), 11, Sp)) : (q(), xe(o, {
          key: 1,
          "disable-transitions": !0,
          index: c,
          type: l.listClass === void 0 || l.listClass === null || l.listClass === "" ? "info" : l.listClass,
          class: ne(l.cssClass)
        }, {
          default: ve(() => [
            on(be(l.dictLabel), 1)
          ]),
          _: 2
        }, 1032, ["index", "type", "class"]))
      ], 64)) : ue("", !0)
    ], 64))), 128))
  ]);
}
const Rs = /* @__PURE__ */ _t(Tp, [["render", kp], ["__scopeId", "data-v-1155b7d5"]]);
var Ip = function(e, n) {
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
  }, t.fn.particle = function(i, a, o) {
    if (this.radius = (t.particles.size.random ? Math.random() : 1) * t.particles.size.value, t.particles.size.anim.enable && (this.size_status = !1, this.vs = t.particles.size.anim.speed / 100, t.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = o ? o.x : Math.random() * t.canvas.w, this.y = o ? o.y : Math.random() * t.canvas.h, this.x > t.canvas.w - this.radius * 2 ? this.x = this.x - this.radius : this.x < this.radius * 2 && (this.x = this.x + this.radius), this.y > t.canvas.h - this.radius * 2 ? this.y = this.y - this.radius : this.y < this.radius * 2 && (this.y = this.y + this.radius), t.particles.move.bounce && t.fn.vendors.checkOverlap(this, o), this.color = {}, typeof i.value == "object")
      if (i.value instanceof Array) {
        var l = i.value[Math.floor(Math.random() * t.particles.color.value.length)];
        this.color.rgb = zr(l);
      } else
        i.value.r != null && i.value.g != null && i.value.b != null && (this.color.rgb = {
          r: i.value.r,
          g: i.value.g,
          b: i.value.b
        }), i.value.h != null && i.value.s != null && i.value.l != null && (this.color.hsl = {
          h: i.value.h,
          s: i.value.s,
          l: i.value.l
        });
    else
      i.value == "random" ? this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      } : typeof i.value == "string" && (this.color = i, this.color.rgb = zr(this.color.value));
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
        var f = s[Math.floor(Math.random() * s.length)];
        this.shape = f;
      }
    } else
      this.shape = s;
    if (this.shape == "image") {
      var v = t.particles.shape;
      this.img = {
        src: v.image.src,
        ratio: v.image.width / v.image.height
      }, this.img.ratio || (this.img.ratio = 1), t.tmp.img_type == "svg" && t.tmp.source_svg != null && (t.fn.vendors.createSvgImg(this), t.tmp.pushing && (this.img.loaded = !1));
    }
  }, t.fn.particle.prototype.draw = function() {
    var i = this;
    if (i.radius_bubble != null)
      var a = i.radius_bubble;
    else
      var a = i.radius;
    if (i.opacity_bubble != null)
      var o = i.opacity_bubble;
    else
      var o = i.opacity;
    if (i.color.rgb)
      var l = "rgba(" + i.color.rgb.r + "," + i.color.rgb.g + "," + i.color.rgb.b + "," + o + ")";
    else
      var l = "hsla(" + i.color.hsl.h + "," + i.color.hsl.s + "%," + i.color.hsl.l + "%," + o + ")";
    switch (t.canvas.ctx.fillStyle = l, t.canvas.ctx.beginPath(), i.shape) {
      case "circle":
        t.canvas.ctx.arc(i.x, i.y, a, 0, Math.PI * 2, !1);
        break;
      case "edge":
        t.canvas.ctx.rect(i.x - a, i.y - a, a * 2, a * 2);
        break;
      case "triangle":
        t.fn.vendors.drawShape(t.canvas.ctx, i.x - a, i.y + a / 1.66, a * 2, 3, 2);
        break;
      case "polygon":
        t.fn.vendors.drawShape(
          t.canvas.ctx,
          i.x - a / (t.particles.shape.polygon.nb_sides / 3.5),
          // startX
          i.y - a / (2.66 / 3.5),
          // startY
          a * 2.66 / (t.particles.shape.polygon.nb_sides / 3),
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
          i.x - a * 2 / (t.particles.shape.polygon.nb_sides / 4),
          // startX
          i.y - a / (2 * 2.66 / 3.5),
          // startY
          a * 2 * 2.66 / (t.particles.shape.polygon.nb_sides / 3),
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
            i.x - a,
            i.y - a,
            a * 2,
            a * 2 / i.img.ratio
          );
        };
        if (t.tmp.img_type == "svg")
          var c = i.img.obj;
        else
          var c = t.tmp.img_obj;
        c && s();
        break;
    }
    t.canvas.ctx.closePath(), t.particles.shape.stroke.width > 0 && (t.canvas.ctx.strokeStyle = t.particles.shape.stroke.color, t.canvas.ctx.lineWidth = t.particles.shape.stroke.width, t.canvas.ctx.stroke()), t.canvas.ctx.fill();
  }, t.fn.particlesCreate = function() {
    for (var i = 0; i < t.particles.number.value; i++)
      t.particles.array.push(new t.fn.particle(t.particles.color, t.particles.opacity.value));
  }, t.fn.particlesUpdate = function() {
    for (var i = 0; i < t.particles.array.length; i++) {
      var a = t.particles.array[i];
      if (t.particles.move.enable) {
        var o = t.particles.move.speed / 2;
        a.x += a.vx * o, a.y += a.vy * o;
      }
      if (t.particles.opacity.anim.enable && (a.opacity_status == !0 ? (a.opacity >= t.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= t.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), t.particles.size.anim.enable && (a.size_status == !0 ? (a.radius >= t.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= t.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), t.particles.move.out_mode == "bounce")
        var l = {
          x_left: a.radius,
          x_right: t.canvas.w,
          y_top: a.radius,
          y_bottom: t.canvas.h
        };
      else
        var l = {
          x_left: -a.radius,
          x_right: t.canvas.w + a.radius,
          y_top: -a.radius,
          y_bottom: t.canvas.h + a.radius
        };
      switch (a.x - a.radius > t.canvas.w ? (a.x = l.x_left, a.y = Math.random() * t.canvas.h) : a.x + a.radius < 0 && (a.x = l.x_right, a.y = Math.random() * t.canvas.h), a.y - a.radius > t.canvas.h ? (a.y = l.y_top, a.x = Math.random() * t.canvas.w) : a.y + a.radius < 0 && (a.y = l.y_bottom, a.x = Math.random() * t.canvas.w), t.particles.move.out_mode) {
        case "bounce":
          (a.x + a.radius > t.canvas.w || a.x - a.radius < 0) && (a.vx = -a.vx), (a.y + a.radius > t.canvas.h || a.y - a.radius < 0) && (a.vy = -a.vy);
          break;
      }
      if (ct("grab", t.interactivity.events.onhover.mode) && t.fn.modes.grabParticle(a), (ct("bubble", t.interactivity.events.onhover.mode) || ct("bubble", t.interactivity.events.onclick.mode)) && t.fn.modes.bubbleParticle(a), (ct("repulse", t.interactivity.events.onhover.mode) || ct("repulse", t.interactivity.events.onclick.mode)) && t.fn.modes.repulseParticle(a), t.particles.line_linked.enable || t.particles.move.attract.enable)
        for (var c = i + 1; c < t.particles.array.length; c++) {
          var s = t.particles.array[c];
          t.particles.line_linked.enable && t.fn.interact.linkParticles(a, s), t.particles.move.attract.enable && t.fn.interact.attractParticles(a, s), t.particles.move.bounce && t.fn.interact.bounceParticles(a, s);
        }
    }
  }, t.fn.particlesDraw = function() {
    t.canvas.ctx.clearRect(0, 0, t.canvas.w, t.canvas.h), t.fn.particlesUpdate();
    for (var i = 0; i < t.particles.array.length; i++) {
      var a = t.particles.array[i];
      a.draw();
    }
  }, t.fn.particlesEmpty = function() {
    t.particles.array = [];
  }, t.fn.particlesRefresh = function() {
    cancelRequestAnimFrame(t.fn.checkAnimFrame), cancelRequestAnimFrame(t.fn.drawAnimFrame), t.tmp.source_svg = void 0, t.tmp.img_obj = void 0, t.tmp.count_svg = 0, t.fn.particlesEmpty(), t.fn.canvasClear(), t.fn.vendors.start();
  }, t.fn.interact.linkParticles = function(i, a) {
    var o = i.x - a.x, l = i.y - a.y, c = Math.sqrt(o * o + l * l);
    if (c <= t.particles.line_linked.distance) {
      var s = t.particles.line_linked.opacity - c / (1 / t.particles.line_linked.opacity) / t.particles.line_linked.distance;
      if (s > 0) {
        var f = t.particles.line_linked.color_rgb_line;
        t.canvas.ctx.strokeStyle = "rgba(" + f.r + "," + f.g + "," + f.b + "," + s + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(i.x, i.y), t.canvas.ctx.lineTo(a.x, a.y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
      }
    }
  }, t.fn.interact.attractParticles = function(i, a) {
    var o = i.x - a.x, l = i.y - a.y, c = Math.sqrt(o * o + l * l);
    if (c <= t.particles.line_linked.distance) {
      var s = o / (t.particles.move.attract.rotateX * 1e3), f = l / (t.particles.move.attract.rotateY * 1e3);
      i.vx -= s, i.vy -= f, a.vx += s, a.vy += f;
    }
  }, t.fn.interact.bounceParticles = function(i, a) {
    var o = i.x - a.x, l = i.y - a.y, c = Math.sqrt(o * o + l * l), s = i.radius + a.radius;
    c <= s && (i.vx = -i.vx, i.vy = -i.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, t.fn.modes.pushParticles = function(i, a) {
    t.tmp.pushing = !0;
    for (var o = 0; o < i; o++)
      t.particles.array.push(
        new t.fn.particle(
          t.particles.color,
          t.particles.opacity.value,
          {
            x: a ? a.pos_x : Math.random() * t.canvas.w,
            y: a ? a.pos_y : Math.random() * t.canvas.h
          }
        )
      ), o == i - 1 && (t.particles.move.enable || t.fn.particlesDraw(), t.tmp.pushing = !1);
  }, t.fn.modes.removeParticles = function(i) {
    t.particles.array.splice(0, i), t.particles.move.enable || t.fn.particlesDraw();
  }, t.fn.modes.bubbleParticle = function(i) {
    if (t.interactivity.events.onhover.enable && ct("bubble", t.interactivity.events.onhover.mode)) {
      let g = function() {
        i.opacity_bubble = i.opacity, i.radius_bubble = i.radius;
      };
      var a = i.x - t.interactivity.mouse.pos_x, o = i.y - t.interactivity.mouse.pos_y, l = Math.sqrt(a * a + o * o), c = 1 - l / t.interactivity.modes.bubble.distance;
      if (l <= t.interactivity.modes.bubble.distance) {
        if (c >= 0 && t.interactivity.status == "mousemove") {
          if (t.interactivity.modes.bubble.size != t.particles.size.value)
            if (t.interactivity.modes.bubble.size > t.particles.size.value) {
              var s = i.radius + t.interactivity.modes.bubble.size * c;
              s >= 0 && (i.radius_bubble = s);
            } else {
              var f = i.radius - t.interactivity.modes.bubble.size, s = i.radius - f * c;
              s > 0 ? i.radius_bubble = s : i.radius_bubble = 0;
            }
          if (t.interactivity.modes.bubble.opacity != t.particles.opacity.value)
            if (t.interactivity.modes.bubble.opacity > t.particles.opacity.value) {
              var v = t.interactivity.modes.bubble.opacity * c;
              v > i.opacity && v <= t.interactivity.modes.bubble.opacity && (i.opacity_bubble = v);
            } else {
              var v = i.opacity - (t.particles.opacity.value - t.interactivity.modes.bubble.opacity) * c;
              v < i.opacity && v >= t.interactivity.modes.bubble.opacity && (i.opacity_bubble = v);
            }
        }
      } else
        g();
      t.interactivity.status == "mouseleave" && g();
    } else if (t.interactivity.events.onclick.enable && ct("bubble", t.interactivity.events.onclick.mode)) {
      let g = function(d, p, y, _, b) {
        if (d != p)
          if (t.tmp.bubble_duration_end) {
            if (y != null) {
              var T = _ - h * (_ - d) / t.interactivity.modes.bubble.duration, A = d - T;
              E = d + A, b == "size" && (i.radius_bubble = E), b == "opacity" && (i.opacity_bubble = E);
            }
          } else if (l <= t.interactivity.modes.bubble.distance) {
            if (y != null)
              var C = y;
            else
              var C = _;
            if (C != d) {
              var E = _ - h * (_ - d) / t.interactivity.modes.bubble.duration;
              b == "size" && (i.radius_bubble = E), b == "opacity" && (i.opacity_bubble = E);
            }
          } else
            b == "size" && (i.radius_bubble = void 0), b == "opacity" && (i.opacity_bubble = void 0);
      };
      if (t.tmp.bubble_clicking) {
        var a = i.x - t.interactivity.mouse.click_pos_x, o = i.y - t.interactivity.mouse.click_pos_y, l = Math.sqrt(a * a + o * o), h = ((/* @__PURE__ */ new Date()).getTime() - t.interactivity.mouse.click_time) / 1e3;
        h > t.interactivity.modes.bubble.duration && (t.tmp.bubble_duration_end = !0), h > t.interactivity.modes.bubble.duration * 2 && (t.tmp.bubble_clicking = !1, t.tmp.bubble_duration_end = !1);
      }
      t.tmp.bubble_clicking && (g(t.interactivity.modes.bubble.size, t.particles.size.value, i.radius_bubble, i.radius, "size"), g(t.interactivity.modes.bubble.opacity, t.particles.opacity.value, i.opacity_bubble, i.opacity, "opacity"));
    }
  }, t.fn.modes.repulseParticle = function(i) {
    if (t.interactivity.events.onhover.enable && ct("repulse", t.interactivity.events.onhover.mode) && t.interactivity.status == "mousemove") {
      var a = i.x - t.interactivity.mouse.pos_x, o = i.y - t.interactivity.mouse.pos_y, l = Math.sqrt(a * a + o * o), c = { x: a / l, y: o / l }, s = t.interactivity.modes.repulse.distance, f = 100, v = Pp(1 / s * (-1 * Math.pow(l / s, 2) + 1) * s * f, 0, 50), h = {
        x: i.x + c.x * v,
        y: i.y + c.y * v
      };
      t.particles.move.out_mode == "bounce" ? (h.x - i.radius > 0 && h.x + i.radius < t.canvas.w && (i.x = h.x), h.y - i.radius > 0 && h.y + i.radius < t.canvas.h && (i.y = h.y)) : (i.x = h.x, i.y = h.y);
    } else if (t.interactivity.events.onclick.enable && ct("repulse", t.interactivity.events.onclick.mode))
      if (t.tmp.repulse_finish || (t.tmp.repulse_count++, t.tmp.repulse_count == t.particles.array.length && (t.tmp.repulse_finish = !0)), t.tmp.repulse_clicking) {
        let b = function() {
          var C = Math.atan2(d, g);
          if (i.vx = y * Math.cos(C), i.vy = y * Math.sin(C), t.particles.move.out_mode == "bounce") {
            var E = {
              x: i.x + i.vx,
              y: i.y + i.vy
            };
            (E.x + i.radius > t.canvas.w || E.x - i.radius < 0) && (i.vx = -i.vx), (E.y + i.radius > t.canvas.h || E.y - i.radius < 0) && (i.vy = -i.vy);
          }
        };
        var s = Math.pow(t.interactivity.modes.repulse.distance / 6, 3), g = t.interactivity.mouse.click_pos_x - i.x, d = t.interactivity.mouse.click_pos_y - i.y, p = g * g + d * d, y = -s / p * 1;
        p <= s && b();
      } else
        t.tmp.repulse_clicking == !1 && (i.vx = i.vx_i, i.vy = i.vy_i);
  }, t.fn.modes.grabParticle = function(i) {
    if (t.interactivity.events.onhover.enable && t.interactivity.status == "mousemove") {
      var a = i.x - t.interactivity.mouse.pos_x, o = i.y - t.interactivity.mouse.pos_y, l = Math.sqrt(a * a + o * o);
      if (l <= t.interactivity.modes.grab.distance) {
        var c = t.interactivity.modes.grab.line_linked.opacity - l / (1 / t.interactivity.modes.grab.line_linked.opacity) / t.interactivity.modes.grab.distance;
        if (c > 0) {
          var s = t.particles.line_linked.color_rgb_line;
          t.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + c + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(i.x, i.y), t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x, t.interactivity.mouse.pos_y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
        }
      }
    }
  }, t.fn.vendors.eventsListeners = function() {
    t.interactivity.detect_on == "window" ? t.interactivity.el = window : t.interactivity.el = t.canvas.el, (t.interactivity.events.onhover.enable || t.interactivity.events.onclick.enable) && (t.interactivity.el.addEventListener("mousemove", function(i) {
      if (t.interactivity.el == window)
        var a = i.clientX, o = i.clientY;
      else
        var a = i.offsetX || i.clientX, o = i.offsetY || i.clientY;
      t.interactivity.mouse.pos_x = a, t.interactivity.mouse.pos_y = o, t.tmp.retina && (t.interactivity.mouse.pos_x *= t.canvas.pxratio, t.interactivity.mouse.pos_y *= t.canvas.pxratio), t.interactivity.status = "mousemove";
    }), t.interactivity.el.addEventListener("mouseleave", function(i) {
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
      var i = t.canvas.el.width * t.canvas.el.height / 1e3;
      t.tmp.retina && (i = i / (t.canvas.pxratio * 2));
      var a = i * t.particles.number.value / t.particles.number.density.value_area, o = t.particles.array.length - a;
      o < 0 ? t.fn.modes.pushParticles(Math.abs(o)) : t.fn.modes.removeParticles(o);
    }
  }, t.fn.vendors.checkOverlap = function(i, a) {
    for (var o = 0; o < t.particles.array.length; o++) {
      var l = t.particles.array[o], c = i.x - l.x, s = i.y - l.y, f = Math.sqrt(c * c + s * s);
      f <= i.radius + l.radius && (i.x = a ? a.x : Math.random() * t.canvas.w, i.y = a ? a.y : Math.random() * t.canvas.h, t.fn.vendors.checkOverlap(i));
    }
  }, t.fn.vendors.createSvgImg = function(i) {
    var a = t.tmp.source_svg, o = /#([0-9A-F]{3,6})/gi, l = a.replace(o, function(h, g, d, p) {
      if (i.color.rgb)
        var y = "rgba(" + i.color.rgb.r + "," + i.color.rgb.g + "," + i.color.rgb.b + "," + i.opacity + ")";
      else
        var y = "hsla(" + i.color.hsl.h + "," + i.color.hsl.s + "%," + i.color.hsl.l + "%," + i.opacity + ")";
      return y;
    }), c = new Blob([l], { type: "image/svg+xml;charset=utf-8" }), s = window.URL || window.webkitURL || window, f = s.createObjectURL(c), v = new Image();
    v.addEventListener("load", function() {
      i.img.obj = v, i.img.loaded = !0, s.revokeObjectURL(f), t.tmp.count_svg++;
    }), v.src = f;
  }, t.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(t.fn.drawAnimFrame), r.remove(), pJSDom = null;
  }, t.fn.vendors.drawShape = function(i, a, o, l, c, s) {
    var f = c * s, v = c / s, h = 180 * (v - 2) / v, g = Math.PI - Math.PI * h / 180;
    i.save(), i.beginPath(), i.translate(a, o), i.moveTo(0, 0);
    for (var d = 0; d < f; d++)
      i.lineTo(l, 0), i.translate(l, 0), i.rotate(g);
    i.fill(), i.restore();
  }, t.fn.vendors.exportImg = function() {
    window.open(t.canvas.el.toDataURL("image/png"), "_blank");
  }, t.fn.vendors.loadImg = function(i) {
    if (t.tmp.img_error = void 0, t.particles.shape.image.src != "")
      if (i == "svg") {
        var a = new XMLHttpRequest();
        a.open("GET", t.particles.shape.image.src), a.onreadystatechange = function(l) {
          a.readyState == 4 && (a.status == 200 ? (t.tmp.source_svg = l.currentTarget.response, t.fn.vendors.checkBeforeDraw()) : t.tmp.img_error = !0);
        }, a.send();
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
    t.fn.retinaInit(), t.fn.canvasInit(), t.fn.canvasSize(), t.fn.canvasPaint(), t.fn.particlesCreate(), t.fn.vendors.densityAutoParticles(), t.particles.line_linked.color_rgb_line = zr(t.particles.line_linked.color);
  }, t.fn.vendors.start = function() {
    ct("image", t.particles.shape.type) ? (t.tmp.img_type = t.particles.shape.image.src.substr(t.particles.shape.image.src.length - 3), t.fn.vendors.loadImg(t.tmp.img_type)) : t.fn.vendors.checkBeforeDraw();
  }, t.fn.vendors.eventsListeners(), t.fn.vendors.start();
};
Object.deepExtend = function e(n, r) {
  for (var t in r)
    r[t] && r[t].constructor && r[t].constructor === Object ? (n[t] = n[t] || {}, e(n[t], r[t])) : n[t] = r[t];
  return n;
};
typeof window < "u" && (window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}());
function zr(e) {
  var n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(n, function(t, i, a, o) {
    return i + i + a + a + o + o;
  });
  var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return r ? {
    r: parseInt(r[1], 16),
    g: parseInt(r[2], 16),
    b: parseInt(r[3], 16)
  } : null;
}
function Pp(e, n, r) {
  return Math.min(Math.max(e, n), r);
}
function ct(e, n) {
  return n.indexOf(e) > -1;
}
typeof window < "u" && (window.pJSDom = [], window.particlesJS = function(e, n) {
  typeof e != "string" && (n = e, e = "particles-js"), e || (e = "particles-js");
  var r = document.getElementById(e), t = "particles-js-canvas-el", i = r.getElementsByClassName(t);
  if (i.length)
    for (; i.length > 0; )
      r.removeChild(i[0]);
  var a = document.createElement("canvas");
  a.className = t, a.style.width = "100%", a.style.height = "100%";
  var o = document.getElementById(e).appendChild(a);
  o != null && pJSDom.push(new Ip(e, n));
}, window.particlesJS.load = function(e, n, r) {
  var t = new XMLHttpRequest();
  t.open("GET", n), t.onreadystatechange = function(i) {
    if (t.readyState == 4)
      if (t.status == 200) {
        var a = JSON.parse(i.currentTarget.response);
        window.particlesJS(e, a), r && r();
      } else
        "" + t.status;
  }, t.send();
});
const Mp = {
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
}, Rp = {
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
}, Op = !0, zp = {
  particles: Mp,
  interactivity: Rp,
  retina_detect: Op
};
const Lp = {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      particlesJS("particles-js", zp), document.body.style.overflow = "hidden";
    }
  }
}, Hp = (e) => (Gr("data-v-6254d928"), e = e(), Xr(), e), $p = { class: "particles-js-box" }, Np = /* @__PURE__ */ Hp(() => /* @__PURE__ */ ee("div", { id: "particles-js" }, null, -1)), Vp = [
  Np
];
function qp(e, n, r, t, i, a) {
  return q(), J("div", $p, Vp);
}
const Os = /* @__PURE__ */ _t(Lp, [["render", qp], ["__scopeId", "data-v-6254d928"]]), Up = {
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
const Yp = Up, Kp = {
  key: 0,
  class: "textAbbreviation-line"
}, Wp = {
  key: 1,
  class: "textAbbreviation-last"
};
function jp(e, n, r, t, i, a) {
  return q(), J("div", {
    class: "textAbbreviation",
    style: Pe({
      "line-height": e.lineHeight + e.unit,
      "font-size": e.fontSize + e.unit
    })
  }, [
    e.mode === "line" ? (q(), J("div", Kp, [
      ee("div", {
        ref: "textAbbreviationlineContent",
        class: "textAbbreviation-line-content",
        style: Pe({
          height: e.useMax === -1 ? "auto" : `calc(${e.useMax} * ${e.lineHeight}${e.unit})`
        })
      }, be(e.data), 5),
      e.useMax !== -1 ? (q(), J("div", {
        key: 0,
        onClick: n[0] || (n[0] = (...o) => e.expandRetract && e.expandRetract(...o)),
        class: "textAbbreviation-line-more"
      }, be(e.useMax === e.maxLine ? "收起" : "展开"), 1)) : ue("", !0)
    ])) : e.mode === "last" ? (q(), J("div", Wp, [
      ee("div", {
        ref: "textAbbreviationlastContent",
        class: "textAbbreviation-last-content",
        style: Pe({
          height: e.useMax === -1 ? "auto" : `calc(${e.useMax} * ${e.lineHeight}${e.unit})`
        })
      }, be(e.data), 5),
      e.useMax !== -1 ? (q(), J("div", {
        key: 0,
        onClick: n[1] || (n[1] = (...o) => e.expandRetract && e.expandRetract(...o)),
        class: "textAbbreviation-last-more",
        style: Pe({
          position: e.useMax === e.maxLine ? "relative" : "absolute",
          "padding-left": e.useMax === e.maxLine ? "0" : "20px"
        })
      }, be(e.useMax === e.maxLine ? "收起" : "...展开"), 5)) : ue("", !0)
    ])) : ue("", !0)
  ], 4);
}
const zs = /* @__PURE__ */ _t(Yp, [["render", jp], ["__scopeId", "data-v-8f2fa1ba"]]);
let C0 = null;
function Gp(e, n = null, r) {
  if ("WebSocket" in window) {
    e = Xp(e);
    const t = ae.fieldCheck(n) ? [] : [n];
    return C0 = new WebSocket(e, t), C0.onopen = function() {
      ae.colorLog({ content: ["websocket", "已连接，正在接收数据...."] });
    }, C0.onmessage = function(i) {
      let a = i.data;
      r(JSON.parse(a));
    }, C0.onclose = function() {
      ae.colorLog({ content: ["websocket", "已关闭！"] });
    }, C0;
  } else
    console.info("您的浏览器不支持 WebSocket!");
  return null;
}
function Xp(e) {
  return location.protocol === "http:" ? e = "ws:" + e : location.protocol === "https:" ? e = "wss:" + e : e = "ws:" + e, e;
}
const Ls = {
  init: Gp
};
var fn = 0;
const Hs = (e = {
  html2Canvas: null,
  // import html2Canvas from 'html2canvas';推荐版本1.4.1
  JsPDF: null
  // import JsPDF from 'jspdf';推荐版本2.5.1
}, n, r, t, i = !1, a = () => {
}) => {
  try {
    if (t) {
      const c = Math.floor(277 * r.scrollWidth / 190) + 20;
      for (let s = 0; s < t.length; s++) {
        const f = Math.ceil((t[s].offsetTop + t[s].offsetHeight) / c);
        if (Jp(t, s, f * c)) {
          var o = "";
          t[s].localName !== "tr" ? o = f * c - (t[s].offsetTop + t[s].offsetHeight) : o = f * c - (t[s].offsetTop + t[s].offsetHeight + fn) + 20;
          var l = Zp(o);
          const v = t[s].parentNode, h = t[s].nextSibling;
          h ? v.insertBefore(l, h) : v.appendChild(l);
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
    }).then((c) => {
      for (var s = new e.JsPDF("p", "mm", "a4"), f = c.getContext("2d"), v = i ? 277 : 190, h = i ? 190 : 277, g = Math.floor(h * c.width / v), d = 0; d < c.height; ) {
        var p = document.createElement("canvas");
        p.width = c.width, p.height = Math.min(g, c.height - d), p.getContext("2d").putImageData(f.getImageData(0, d, c.width, Math.min(g, c.height - d)), 0, 0), s.addImage(p.toDataURL("image/jpeg", 1), "JPEG", 10, 10, v, Math.min(h, v * p.height / p.width)), d += g, d < c.height && s.addPage();
      }
      s.save(n + ".pdf"), a("htmlPdfFinish");
    }).catch((c) => {
      a(c);
    });
  } catch (c) {
    a(c);
  }
}, Zp = (e, n = 0) => {
  const r = document.createElement("div");
  return r.style.background = "#ffffff", r.style.width = "calc(100% + 8px)", r.style.marginLeft = "-4px", r.style.marginBottom = "0px", r.classList.add("divRemove"), r.style.height = e + n + "px", r;
}, Jp = (e, n, r) => (e[n].localName !== "tr" && (fn += e[n].clientHeight), e[n].localName !== "tr" ? e[n].offsetTop + e[n].offsetHeight < r && e[n + 1] && e[n + 1].offsetTop + e[n + 1].offsetHeight > r : e[n].offsetTop + e[n].offsetHeight + fn < r && e[n + 1] && e[n + 1].offsetTop + e[n + 1].offsetHeight + fn > r);
class _0 {
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
    const i = {
      clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
      clean: !0,
      // true: 清除会话, false: 保留会话
      connectTimeout: 4e3,
      // 超时时间
      reconnectPeriod: 5e3
      // 重连时间间隔
    };
    i.username = r.username, i.password = r.password, this.url = t, this.client = n.connect(this.url, i);
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
    let i = "";
    return location.protocol === "http:" ? i = "ws:" + n : location.protocol === "https:" ? i = "wss:" + n : i = "ws:" + n, i;
  }
}
//创建公共变量
g0(_0, "url"), //mqtt地址
g0(_0, "oldSubscribe"), //取消订阅准备
g0(_0, "subscribe"), //订阅地址
g0(_0, "client");
const Qp = {
  LJSws: Ls,
  // websocket封装
  htmlPdf: Hs
  // html转pdf
}, ev = [
  { type: "function", name: "menu", entity: po },
  { type: "function", name: "base", entity: ae },
  { type: "function", name: "num", entity: de },
  { type: "function", name: "date", entity: De },
  { type: "function", name: "fc", entity: _n },
  { type: "function", name: "ecDC", entity: vo },
  { type: "function", name: "session", entity: Co },
  { type: "function", name: "cryptoJs", entity: Lt },
  { type: "function", name: "sm", entity: Mo },
  { type: "function", name: "rgbC", entity: Ro },
  { type: "function", name: "url", entity: so },
  { type: "function", name: "license", entity: Oo },
  { type: "function", name: "El", entity: Fs },
  { type: "function", name: "Watermark", entity: pi },
  { type: "function", name: "privacy", entity: As },
  // {type: 'directive', name: 'directives', entity: directives},
  { type: "component", name: "LJSLoading", entity: Ts },
  { type: "component", name: "Pagination", entity: Ss },
  { type: "component", name: "RightMenu", entity: ks },
  { type: "component", name: "DatetypeChooseDate", entity: Is },
  { type: "component", name: "DatetypeChooseDateRange", entity: Ps },
  { type: "component", name: "DateRange", entity: Ms },
  { type: "component", name: "DictTag", entity: Rs },
  { type: "component", name: "Particles", entity: Os },
  { type: "component", name: "TextAbbreviation", entity: zs },
  { type: "other_function", name: "self", entity: Qp }
], iv = {
  // 全局注入
  install: function(e) {
    ev.map((n) => {
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
  LJSLoading: Ts,
  Pagination: Ss,
  RightMenu: ks,
  DatetypeChooseDate: Is,
  DatetypeChooseDateRange: Ps,
  DateRange: Ms,
  DictTag: Rs,
  Particles: Os,
  TextAbbreviation: zs,
  LJSprivacy: As,
  // 方法
  LJSmenu: po,
  LJSbase: ae,
  LJSnum: de,
  LJSdate: De,
  LJSfc: _n,
  LJSecDC: vo,
  LJSsession: Co,
  LJScryptoJs: Lt,
  LJSsm: Mo,
  LJSrgbC: Ro,
  LJSurl: so,
  LJSlicense: Oo,
  LJSEl: Fs,
  LJSWatermark: pi,
  DateRange_spanLimit: Ap,
  // 全局变量
  LJSws: Ls,
  htmlPdf: Hs,
  // class，需独立引入
  mqttCreateds: _0
};
export {
  iv as default
};
