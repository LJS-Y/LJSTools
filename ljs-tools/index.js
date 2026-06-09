var rl = Object.defineProperty;
var nl = (e, r, n) => r in e ? rl(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n;
var vr = (e, r, n) => (nl(e, typeof r != "symbol" ? r + "" : r, n), n);
import { getCurrentInstance as Mt, inject as ct, ref as Ne, computed as ce, unref as re, shallowRef as wr, watchEffect as Ha, readonly as il, getCurrentScope as al, onScopeDispose as qa, onMounted as Ot, nextTick as ut, watch as ft, isRef as Va, warn as ol, provide as $0, defineComponent as qe, openBlock as ne, createElementBlock as xe, mergeProps as Fr, renderSlot as at, createElementVNode as me, toRef as sn, onUnmounted as sl, useAttrs as ll, useSlots as Ya, normalizeClass as ge, normalizeStyle as tt, createCommentVNode as Te, Fragment as It, createBlock as Me, withCtx as Ue, resolveDynamicComponent as bt, withModifiers as Br, createVNode as et, toDisplayString as Ye, onBeforeUnmount as Tr, Text as ul, reactive as Wa, h as cl, markRaw as ln, toRefs as fl, resolveComponent as mt, Transition as U0, withDirectives as zn, withKeys as Hr, createTextVNode as tn, vShow as $n, isVNode as Ka, render as ja, Teleport as Ga, renderList as gn, pushScopeId as H0, popScopeId as q0 } from "vue";
const dl = () => {
  Fe.colorLog({ content: ["", "******************************************"] }), Fe.colorLog({ content: ["Core Dependencies：", "ljs-tools"] }), Fe.colorLog({ content: ["Author：", "LJS"] }), Fe.colorLog({ content: ["API", "https://ljs-y.github.io/ljs-vue3"], color: [
    "background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;",
    "background: #FFF; border: 1px solid #666666; color: #fff; border-radius: 0 4px 4px 0; padding: 2px 6px;"
  ] }), Fe.colorLog({ content: ["", "******************************************"] });
};
function V0(e) {
  if (Fe.fieldCheck(e))
    return null;
  const r = {};
  let n = e.split("?");
  if (n.length === 1)
    return [n[0], r];
  const t = n[1].split("&"), i = t.length;
  for (let a = 0; a < i; a++) {
    const s = t[a].split("=");
    r[s[0]] = s[1];
  }
  return [n[0], r];
}
function hl(e, r = location.search) {
  const n = V0(r);
  if (n === null)
    return null;
  const t = n[1];
  return e in t ? t[e] : null;
}
function pl(e, r = !0) {
  if (Fe.fieldCheck(e))
    return null;
  let n = e.lastIndexOf(".");
  return n === -1 ? null : (n = r ? n : n + 1, e.slice(n, e.length));
}
function xl(e, r = !1) {
  if (Fe.fieldCheck(e))
    return null;
  const n = e.lastIndexOf("/"), t = e.lastIndexOf("\\");
  let i = n > t ? n : t;
  return i !== -1 ? i++ : i = 0, r ? e.slice(i, e.length) : e.lastIndexOf(".") > -1 ? e.slice(i, e.lastIndexOf(".")) : e.slice(i, e.length);
}
function Xa(e) {
  var r = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return r.test(e);
}
function Za(e) {
  var r = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/gm;
  return r.test(e);
}
function vl(e) {
  return Za(e) || Xa(e);
}
function Ja(e, r = ["sign"]) {
  return Object.entries(e).filter(([i, a]) => /* 排除未定义的值 */ a != null && // 排除 null
  a !== "" && // 排除空字符串
  !r.includes(i)).sort(([i], [a]) => i.localeCompare(a, "en-US")).map(([i, a]) => `${i}=${a}`).join("&");
}
const Qa = {
  getUrlAllParameter: V0,
  getUrlParameter: hl,
  getFileType: pl,
  getFileName: xl,
  isIPV4ValidIP: Xa,
  isIPV6ValidIP: Za,
  isIPValid: vl,
  formatParamsByAscii: Ja
};
function ml(e) {
  return e == null || e === "";
}
function eo({ data: e, value: r, key: n = "id", children: t = "children", parents: i = [] }) {
  const a = e.length;
  for (let s = 0; s < a; s++)
    if (e[s][n] === r || e[s][t] !== void 0 && (i = eo({
      data: e[s][t],
      value: r,
      key: n,
      children: t,
      parents: i
    }), i.length > 0 && i[i.length - 1][n] === r))
      return i.unshift(e[s]), i;
  return i;
}
function I0({ data: e, opts: r = [], disabled: n = !1 }) {
  if (!e)
    return;
  const t = e.length;
  for (let i = 0; i < t; i++) {
    e[i].disabled = n;
    let a = !1;
    const s = r.length;
    for (let o = 0; o < s; o++) {
      const h = r[o];
      if (e[i][h.key] === h.value) {
        a = !0;
        break;
      }
    }
    a ? (e[i].disabled = !0, e[i].children = I0({ data: e[i].children, opts: r, disabled: !0 })) : e[i].children !== void 0 && (e[i].children = I0({ data: e[i].children, opts: r, disabled: n }));
  }
  return e;
}
function yl(e) {
  let r = [];
  if (!e || !e.length)
    return [];
  for (let n = 0; n < e.length; n++) {
    let t = e[n], i = JSON.parse(JSON.stringify(t));
    i.children = void 0, r.push(i);
    const a = this.handleTreeList(t.children);
    r = r.concat(a);
  }
  return r;
}
function gl({ data: e, id: r = "id", parentId: n = "parentId", children: t = "children" }) {
  let i = { id: r, parentId: n, childrenList: t };
  var a = {}, s = {}, o = [];
  for (let c of e) {
    let x = c[i.parentId];
    a[x] == null && (a[x] = []), s[c[i.id]] = c, a[x].push(c);
  }
  for (let c of e) {
    let x = c[i.parentId];
    s[x] == null && o.push(c);
  }
  for (let c of o)
    h(c);
  function h(c) {
    if (a[c[i.id]] !== null && (c[i.childrenList] = a[c[i.id]]), c[i.childrenList])
      for (let x of c[i.childrenList])
        h(x);
  }
  return o;
}
function bl(e = 120) {
  var r = document.documentElement, n = r.clientWidth / e;
  r.style.fontSize = n + "px";
}
function Bl({ data: e, value: r, labelKey: n = "dictLabel", valueKey: t = "dictValue", isTrue: i = !1 }) {
  if (r === void 0)
    return "";
  let a = [];
  return Object.keys(e).some((s, o) => {
    if (e[s][t] == "" + r)
      return n === "$index" ? (a = o, o) : (a.push(e[s][n]), !0);
  }), n === "$index" ? a : (a.length === 0 && a.push(r), i ? a[0] : a.join(""));
}
function El({ content: e = ["暂无内容"], type: r = "info", color: n = [
  "background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;",
  "background: #1475B2; color: #fff; border-radius: 0 4px 4px 0; padding: 3px 6px;"
] }) {
  let t = "";
  e.forEach((i) => {
    t += `%c${i}`;
  }), console[r](t, n[0], n[1]);
}
function wl({ _this: e, url: r, name: n = (/* @__PURE__ */ new Date()).valueOf() }) {
  let t = new Image();
  t.setAttribute("crossOrigin", "anonymous");
  const i = V0(r);
  r = i[0];
  let a = {};
  i.length === 2 && (a = {
    ...i[1]
  }), a._time = (/* @__PURE__ */ new Date()).valueOf(), t.src = r + "?time=" + Ja(a), e.$nextTick(() => {
    t.onload = () => {
      const s = document.createElement("canvas");
      s.width = t.width, s.height = t.height, s.getContext("2d").drawImage(t, 0, 0, t.width, t.height), s.toBlob((h) => {
        const c = URL.createObjectURL(h), x = document.createElement("a");
        x.download = n, x.href = c, x.click(), x.remove(), URL.revokeObjectURL(c);
      });
    };
  });
}
function Cl(e) {
  return e instanceof Blob || e instanceof File ? new Promise((r, n) => {
    const t = new FileReader();
    t.onloadend = () => r(t.result);
    try {
      t.readAsDataURL(e);
    } catch (i) {
      n(i);
    }
  }) : "";
}
function Fl() {
  var e = 0, r = window.screen, n = navigator.userAgent.toLowerCase();
  return window.devicePixelRatio !== void 0 ? e = window.devicePixelRatio : ~n.indexOf("msie") ? r.deviceXDPI && r.logicalXDPI && (e = r.deviceXDPI / r.logicalXDPI) : window.outerWidth !== void 0 && window.innerWidth !== void 0 && (e = window.outerWidth / window.innerWidth), e && (e = Math.round(e * 100)), e;
}
function un(e) {
  let r = Array.isArray(e) ? [] : {};
  for (let n in e)
    e.hasOwnProperty(n) && (typeof e[n] == "object" && e[n] !== null ? r[n] = un(e[n]) : r[n] = e[n]);
  return r;
}
function _l(e, r) {
  if (typeof e != "object" || typeof r != "object")
    return r;
  const n = un(e), t = un(r);
  for (let i in n)
    t[i] = n[i];
  return t;
}
const Fe = {
  fieldCheck: ml,
  deepCopy: un,
  getTreeParents: eo,
  editTreeParentIdCheck: I0,
  handleTreeList: yl,
  handleListTree: gl,
  setRemUnit: bl,
  selectDictLabel: Bl,
  colorLog: El,
  downloadImage: wl,
  imageFileToBase64: Cl,
  getWindowRatio: Fl,
  objectCopy: _l
};
dl();
function Al(e) {
  const r = e.getters.menuList, n = ro({ menuList: r }), t = to({ data: r, value: n.url });
  n.address = t, e.commit("SET_menuNowOpen", n), e.commit("SET_menuOpenList", [n]);
}
function to({ data: e, value: r, key: n = "url" }) {
  const t = Fe.getTreeParents({ data: e, value: r, key: n }), i = [];
  return t.forEach((a) => {
    const s = {
      title: a.title,
      // 菜单名称
      url: a.url
      // 菜单路由path
    };
    i.push(s);
  }), i;
}
function ro({ menuList: e }) {
  if (e.length === 0)
    return {};
  let r = {};
  return e.forEach((n, t) => {
    t === 0 && (!Fe.fieldCheck(n.children) && n.children.length > 0 ? (n.open = !0, r = ro({ menuList: n.children })) : r = n);
  }), r;
}
function Dl({ store: e, path: r }) {
  const n = e.getters.menuList, t = Fe.handleTreeList(n), i = t.length;
  for (let a = 0; a < i; a++) {
    const s = t[a];
    if (s.url === r)
      return s;
  }
}
function Sl({ store: e, run: r, path: n, query: t = {} }) {
  const i = Dl({ store: e, path: n });
  no({ store: e, run: r, menuObj: i, query: t });
}
function no({ store: e, run: r, menuObj: n, query: t }) {
  let i = e.getters.menuList;
  if (Fe.fieldCheck(n.children) && (n.children = []), n.children.length > 0) {
    if (n.open)
      n.open = !n.open;
    else {
      const a = Fe.getTreeParents({
        data: i,
        value: n.menuId,
        key: "menuId"
      });
      Y0({ menuList: i, parents: a });
    }
    e.commit("SET_menuList", i);
  } else {
    if (!Fe.fieldCheck(n.isFrame) && n.isFrame === !0) {
      io(n.url);
      return;
    }
    const a = e.getters.menuNowOpen;
    let s = e.getters.menuOpenList;
    if (a.url === n.url)
      return;
    n.address = to({ data: e.getters.menuList, value: n.url });
    let o = n;
    if (n.choose = !n.choose, e.commit("SET_menuNowOpen", o), Fe.fieldCheck(n.openType) || !Fe.fieldCheck(n.openType) && n.openType === "1") {
      const h = s.length;
      let c = !1;
      for (let x = 0; x < h; x++)
        if (s[x].url === n.url) {
          c = !0;
          break;
        }
      c || (s = e.getters.menuOpenList, s.push(o), e.commit("SET_menuOpenList", s));
    }
    r.push({
      path: n.url,
      query: t
    });
  }
}
function Y0({ menuList: e, parents: r, key: n = "menuId" }) {
  return e.forEach((t) => {
    t[n] === r[0][n] ? (t.open = !0, r.length > 1 && r.splice(0, 1)) : t.open = !1, t.children && t.children.length > 0 && (t.children = Y0({ menuList: t.children, parents: r, key: n }));
  }), e;
}
function io(e, r = "_blank") {
  window.open(e, r);
}
const ao = {
  fristOpenMenu: Al,
  handPush: Sl,
  menuControl: no,
  updateTreeOpen: Y0,
  goExternalUrl: io
}, rn = 1e-14;
function Tl(e, r = 2, n = "0") {
  if (cr(e)) {
    e = e.toString();
    const t = e.length, i = r - t;
    let a = "";
    for (let s = 0; s < i; s++)
      a += n;
    return a + e;
  }
  return e;
}
function Il(e, r = 4, n = ",") {
  if (cr(e)) {
    e += "";
    var t = e.split("."), i = t[0], a = t.length > 1 ? "." + t[1] : "";
    const s = new RegExp("(\\d+)(\\d{" + r + "})");
    for (; s.test(i); )
      i = i.replace(s, "$1" + n + "$2");
    return i + a;
  }
  return e;
}
function kl(e) {
  if (cr(e)) {
    e = Math.ceil(e);
    const r = (e + "").length, n = Math.pow(10, r - 1);
    return Math.ceil(e / n) * n;
  }
  return e;
}
function Rl({
  value: e,
  ws: r = 0,
  units: n = ["", "万", "亿万", "万亿"],
  isMerge: t = !0
}) {
  if (cr(e)) {
    let i = "";
    const a = Number(e) < 0 ? -1 : 1, s = Math.abs(Number(e));
    let o = 0;
    if (s < 1e4)
      i = a * s, o = 0;
    else if (s >= 1e4 && s < 1e4 * 1e4) {
      let h = s / 1e4 + rn;
      h = Number(h.toFixed(r)), h < 1e4 ? (i = a * h, o = 1) : (i = a * h / 1e4, o = 2);
    } else if (s >= 1e4 * 1e4 && s < 1e4 * 1e4 * 1e4) {
      let h = s / 1e8 + rn;
      h = Number(h.toFixed(r)), h < 1e4 ? (i = a * h, o = 2) : (i = a * h / 1e4, o = 3);
    } else
      s >= 1e4 * 1e4 * 1e4 && (i = a * (s / (1e4 * 1e4 * 1e4) + rn).toFixed(r), o = 3);
    return t ? i + n[o] : {
      num: i,
      unit: n[o]
    };
  }
  return e;
}
function oo(e, r = 2) {
  return cr(e) && (e = e + "", e.indexOf(".") > -1 && e.split(".")[1].length > r) ? (e = Number(e), (e + rn).toFixed(r)) : e;
}
function cr(e) {
  const r = typeof e;
  return r === "number" || r === "string" && !isNaN(Number(e, 10));
}
function Ml(e, r = 12, n = 2) {
  e = Number(e);
  const t = (e / r).toFixed(n), i = [];
  for (let a = 0; a < r; a++)
    a < r - 1 ? i.push(t) : i.push(oo(e - t * (r - 1), n));
  return i;
}
const Re = {
  numberB0: Tl,
  longNumText: Rl,
  numberCeil: kl,
  moneySplit: Il,
  numberChangeDecimal: oo,
  averageNum: Ml
};
function Ve(e, r) {
  if (Fe.fieldCheck(e))
    return e;
  const n = new Date(e), t = r || "{y}-{m}-{d} {h}:{i}:{s}", i = {
    y: n.getFullYear(),
    m: Re.numberB0(n.getMonth() + 1),
    d: Re.numberB0(n.getDate()),
    h: Re.numberB0(n.getHours()),
    i: Re.numberB0(n.getMinutes()),
    s: Re.numberB0(n.getSeconds()),
    MS: n.getMilliseconds()
  };
  return t.replace(/{(y|m|d|h|i|s|MS)+}/g, (a, s) => i[s]);
}
function Ll(e, r, n = 0) {
  if (Fe.fieldCheck(e))
    return e;
  if (n === 0) {
    let t = new Date(e).getTime();
    return Ve(t, r);
  }
  if (r === "{y}-{m}-{d}") {
    let t = new Date(e).getTime();
    return t = t + 3600 * 1e3 * 24 * n, Ve(t, r);
  } else if (r === "{y}-{m}") {
    const t = n / Math.abs(n);
    let i = new Date(e), a = "";
    const s = i.getMonth() + 1;
    let o = 0, h = 0;
    if (t === -1)
      o = i.getFullYear() + Math.floor((s + n) / 12), h = 12 * Math.abs(o - i.getFullYear()) + s + n, (s + n) % 12 === 0 && (o += t, h = 12);
    else if (t === 1)
      if (s + n <= 12)
        o = i.getFullYear(), h = s + n;
      else if ((s + n) % 12 !== 0)
        o = i.getFullYear() + Math.floor((s + n) / 12), h = s + n - Math.abs(o - i.getFullYear()) * 12;
      else {
        const c = (s + n) / 12;
        o = i.getFullYear() + (c > 1 ? c - 1 : c), h = s + n - Math.abs(o - i.getFullYear()) * 12;
      }
    return a = o + "-" + Re.numberB0(h), a;
  } else if (r === "{y}")
    return (new Date(e).getFullYear() + n).toString();
}
function Pl(e, r = 1) {
  if (e[0] === "" || e[0] === null)
    return e;
  const n = new Date(e[0]), t = new Date(e[1]);
  switch (r === void 0 && (r = 1), r) {
    case 1:
      return [
        n.getFullYear() + "-" + Re.numberB0(n.getMonth() + 1) + "-" + Re.numberB0(n.getDate()) + " 00:00:00",
        t.getFullYear() + "-" + Re.numberB0(t.getMonth() + 1) + "-" + Re.numberB0(t.getDate()) + " 23:59:59"
      ];
    case 2:
      return [
        n.getFullYear() + "-" + Re.numberB0(n.getMonth() + 1) + "-" + Re.numberB0(n.getDate()) + " " + Re.numberB0(n.getHours()) + ":00:00",
        t.getFullYear() + "-" + Re.numberB0(t.getMonth() + 1) + "-" + Re.numberB0(t.getDate()) + " " + Re.numberB0(t.getHours()) + ":59:59"
      ];
    case 3:
      return [
        n.getFullYear() + "-" + Re.numberB0(n.getMonth() + 1) + "-" + Re.numberB0(n.getDate()) + " " + Re.numberB0(n.getHours()) + ":" + Re.numberB0(n.getMinutes()) + ":00",
        t.getFullYear() + "-" + Re.numberB0(t.getMonth() + 1) + "-" + Re.numberB0(t.getDate()) + " " + Re.numberB0(t.getHours()) + ":" + Re.numberB0(t.getMinutes()) + ":59"
      ];
  }
  return e;
}
function Nl({ time: e = 0, showTag: r = ["天", "小时", "分钟", "秒", "毫秒"], showAll: n = !1, onlyTime: t = !1 }) {
  let i = 1;
  e < 0 && (i = -1), e = Math.abs(e);
  const a = 1e3, s = 60 * a, o = 60 * s, h = 24 * o, c = [0, 0, 0, 0, 0];
  if (e >= h) {
    const g = Math.floor(e / h);
    c[0] = i * g, e -= h * g;
  }
  if (e >= o) {
    const g = Math.floor(e / o);
    c[1] = i * g, e -= o * g;
  }
  if (e >= s) {
    const g = Math.floor(e / s);
    c[2] = i * g, e -= s * g;
  }
  if (e >= a) {
    const g = Math.floor(e / a);
    c[3] = i * g, e -= a * g;
  }
  if (c[4] = i * e, t)
    return c;
  let x = n, E = "";
  return c.forEach((g, B) => {
    !x && g !== 0 && (x = !0), x && (E += g + r[B]);
  }), E;
}
function Ol(e = 10, r = !1) {
  let n = "", t = "", i = "{y}-{m}-{d}";
  return r && (i = "{y}-{m}-{d} {h}:{i}:{s}"), n = Ve((/* @__PURE__ */ new Date()).getTime() - 3600 * 1e3 * 24 * (e - 1), i), t = Ve(/* @__PURE__ */ new Date(), i), [n, t];
}
function zl(e = /* @__PURE__ */ new Date(), r = "date", n = 0, t = 5) {
  e = new Date(e);
  let i = "", a = "";
  const s = 3600 * 1e3 * 24;
  switch (r) {
    case "datetime":
      i = Ve(e, "{y}-{m}-{d} 00:00:00"), a = Ve(e, "{y}-{m}-{d} {h}:{i}:{s}");
      break;
    case "date":
      let o = `${Ve(e, "{y}")}-${Ve(e, "{y}")}`;
      e.getMonth() === 11 ? o = `${Number(Ve(e, "{y}")) + 1}-01-01` : o = `${Number(Ve(e, "{y}"))}-${Number(Ve(e, "{m}")) + 1}-01`;
      const h = new Date(o).getTime() - s;
      i = Ve(e, "{y}-{m}-01"), h < Date.now() ? a = Ve(h, "{y}-{m}-{d}") : a = Ve(e, "{y}-{m}-{d}");
      break;
    case "month":
      let c = `${Ve(e, "{y}")}-12`;
      i = Ve(e, "{y}-01"), new Date(c).getTime() < Date.now() ? a = Ve(c, "{y}-{m}") : a = Ve(e, "{y}-{m}");
      break;
    case "year":
      i = e.getFullYear() - t, a = e.getFullYear();
      break;
  }
  return [i, a];
}
const Je = {
  formatTime: Ve,
  customizedDate: Ll,
  dateQjChange: Pl,
  timeRunDistance: Nl,
  initSearchDate: Ol,
  initSearchDateQj: zl
};
function $l({ form: e, key: r = "money", zs: n = 10, ws: t = 2, type: i = "Number", fu: a = !1 }) {
  const s = e;
  s[r] = s[r] + "", i === "Number" && (s[r].slice(0, 1) === "0" && (s[r] = s[r].slice(1, 2) !== "." ? "0" : s[r]), s[r].slice(0, 1) === "-" && (s[r] = s[r].slice(1, 2) === "." ? "-" : s[r]), s[r].slice(0, 2) === "-0" && (s[r] = s[r].slice(2, 3) !== "." ? "-0" : s[r])), a ? s[r] = s[r].replace(/[^\d.-]/g, "") : s[r] = s[r].replace(/[^\d.]/g, ""), s[r] = s[r].replace(/^\./g, ""), s[r] = s[r].replace(/\.{2,}/g, "."), s[r] = s[r].slice(0, 1) + s[r].slice(1, s[r].length).replace(/\-/g, "");
  const o = new RegExp("^(\\-)*(\\d+)\\.(\\d{0," + t + "}).*$");
  if (n !== "" && s[r].length > 0) {
    const h = s[r].split(".");
    let c = h[0], x = "";
    const E = c.slice(0, 1) === "-" ? 1 : 0;
    c.length > n + E && (c = c.slice(0, n + E)), h.length > 1 ? (x = h[1], s[r] = c + "." + x) : s[r] = c;
  }
  s[r] = s[r].replace(o, "$1$2.$3");
}
function Ul({ form: e, key: r = "num", type: n = "Number", fu: t = !1 }) {
  n === "Number" && (t ? e[r] = e[r].slice(0, 1) + e[r].slice(1, e[r].length).replace(/\-/g, "") : e[r].slice(0, 1) === "-" && (e[r] = e[r].slice(1, e[r].length))), e[r] = e[r].replace(/[^\d-]/g, ""), n === "Number" && e[r].length > 0 && e[r] !== "-" && (e[r] = Number(e[r]));
}
function Hl({ form: e, key: r = "num" }) {
  if (!cr(e[r])) {
    e[r] = "";
    return;
  }
  if (e[r] === "0." || e[r] === "-0.") {
    e[r] = "";
    return;
  }
  if (e[r] === "-0") {
    e[r] = "0";
    return;
  }
}
function ql(e, r = "username") {
  e[r] = e[r] + "", e[r] = e[r].replace(/[^\w]/g, ""), e[r] = e[r].replace(/\_/g, "");
}
function Vl(e, r) {
  const n = document.createElement("a"), t = new Blob([e], {
    type: "application/vnd.ms-excel"
  });
  n.style.display = "none", n.href = URL.createObjectURL(t), n.setAttribute("download", r), document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function Yl(e = {}) {
  const r = {
    dateType: "3",
    direction: 1,
    span: 0,
    dateTypeKeyValue: ["1", "2", "3", "4"]
  };
  for (let s in e)
    r[s] = e[s];
  const n = 3600 * 1e3 * 24;
  let t = null, i = null, a = 0;
  switch (r.dateType) {
    case r.dateTypeKeyValue[3]:
      a += 1e3 * r.span;
      break;
    case r.dateTypeKeyValue[2]:
      a += n * r.span;
      break;
    case r.dateTypeKeyValue[1]:
      t = new Date(a).getFullYear(), i = new Date(a).getMonth() + 1 + r.span, i < 0 ? (t += r.span, i = 12) : i += 1, a = (/* @__PURE__ */ new Date(`${t}-${i}`)).getTime();
      break;
    case r.dateTypeKeyValue[0]:
      t = new Date(a).getFullYear(), t += r.span, a = (/* @__PURE__ */ new Date(`${t}-01`)).getTime();
      break;
  }
  return (s) => {
    if (r.direction === 1)
      return s.getTime() > a + Date.now();
    if (r.direction === -1)
      return s.getTime() < a + Date.now();
  };
}
let ir = 0;
function Wl(e = 30, r) {
  r ? ir = Je.formatTime(r[0], "{y}-{m}-{d}") : ir = 0;
  const n = 3600 * 1e3 * 24 * e;
  return (t) => {
    if (ir === 0)
      return t.getTime() > Date.now() || t.getTime() < ir;
    {
      const i = new Date(ir).getTime() + n - 864e5, a = new Date(ir).getTime() - n;
      return i >= Date.now() ? t.getTime() > Date.now() || t.getTime() < a : t.getTime() > i || t.getTime() < a;
    }
  };
}
const bn = {
  numCheck: Ul,
  numBlurCheck: Hl,
  numEnCheck: ql,
  numDxsCheck: $l,
  downloadBlobData: Vl,
  pickerOptions: Yl,
  pickerOptionsDynamic: Wl
};
function Kl(e, r = {
  name: "name",
  key: "val"
}) {
  if (e.length === 0)
    return e;
  const n = {
    name: "name",
    key: "val"
  };
  for (let a in r)
    n[a] = r[a];
  let t = 0;
  if (e.forEach((a) => {
    a.proportion = 0, t += Number(a[n.key]);
  }), t > 0) {
    let a = {
      value: 0,
      index: -1
    };
    e.forEach((s, o) => {
      s[n.key] = s[n.key] == 0 ? null : s[n.key];
      const h = Re.numberChangeDecimal(Number(s[n.key]) / t * 100), c = Number(h);
      Number(a.value) < c && (a = {
        value: h,
        index: o
      }), s.proportion = c === 0 && Number(s[n.key]) > 0 ? 0.01 : c;
    }), e[a.index].proportion = 100, e.forEach((s, o) => {
      o !== a.index && (e[a.index].proportion = Re.numberChangeDecimal(e[a.index].proportion - Number(s.proportion)));
    });
  }
  const i = [];
  return e.forEach((a) => {
    i.push({
      name: a[n.name],
      value: a[n.key],
      proportion: a.proportion + "%"
    });
  }), i;
}
const so = {
  pieChange: Kl
};
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function jl(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var n = function t() {
      return this instanceof t ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    n.prototype = r.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(t) {
    var i = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(n, t, i.get ? i : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), n;
}
var uo = { exports: {} };
function Gl(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Un = { exports: {} };
const Xl = {}, Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xl
}, Symbol.toStringTag, { value: "Module" })), Jl = /* @__PURE__ */ jl(Zl);
var xi;
function _e() {
  return xi || (xi = 1, function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(Be, function() {
      var n = n || function(t, i) {
        var a;
        if (typeof window < "u" && window.crypto && (a = window.crypto), typeof self < "u" && self.crypto && (a = self.crypto), typeof globalThis < "u" && globalThis.crypto && (a = globalThis.crypto), !a && typeof window < "u" && window.msCrypto && (a = window.msCrypto), !a && typeof Be < "u" && Be.crypto && (a = Be.crypto), !a && typeof Gl == "function")
          try {
            a = Jl;
          } catch {
          }
        var s = function() {
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
        }, o = Object.create || function() {
          function A() {
          }
          return function(S) {
            var T;
            return A.prototype = S, T = new A(), A.prototype = null, T;
          };
        }(), h = {}, c = h.lib = {}, x = c.Base = function() {
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
            extend: function(A) {
              var S = o(this);
              return A && S.mixIn(A), (!S.hasOwnProperty("init") || this.init === S.init) && (S.init = function() {
                S.$super.init.apply(this, arguments);
              }), S.init.prototype = S, S.$super = this, S;
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
              var A = this.extend();
              return A.init.apply(A, arguments), A;
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
            mixIn: function(A) {
              for (var S in A)
                A.hasOwnProperty(S) && (this[S] = A[S]);
              A.hasOwnProperty("toString") && (this.toString = A.toString);
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
        }(), E = c.WordArray = x.extend({
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
          init: function(A, S) {
            A = this.words = A || [], S != i ? this.sigBytes = S : this.sigBytes = A.length * 4;
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
          toString: function(A) {
            return (A || B).stringify(this);
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
          concat: function(A) {
            var S = this.words, T = A.words, M = this.sigBytes, P = A.sigBytes;
            if (this.clamp(), M % 4)
              for (var z = 0; z < P; z++) {
                var q = T[z >>> 2] >>> 24 - z % 4 * 8 & 255;
                S[M + z >>> 2] |= q << 24 - (M + z) % 4 * 8;
              }
            else
              for (var ee = 0; ee < P; ee += 4)
                S[M + ee >>> 2] = T[ee >>> 2];
            return this.sigBytes += P, this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var A = this.words, S = this.sigBytes;
            A[S >>> 2] &= 4294967295 << 32 - S % 4 * 8, A.length = t.ceil(S / 4);
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
            var A = x.clone.call(this);
            return A.words = this.words.slice(0), A;
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
          random: function(A) {
            for (var S = [], T = 0; T < A; T += 4)
              S.push(s());
            return new E.init(S, A);
          }
        }), g = h.enc = {}, B = g.Hex = {
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
          stringify: function(A) {
            for (var S = A.words, T = A.sigBytes, M = [], P = 0; P < T; P++) {
              var z = S[P >>> 2] >>> 24 - P % 4 * 8 & 255;
              M.push((z >>> 4).toString(16)), M.push((z & 15).toString(16));
            }
            return M.join("");
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
          parse: function(A) {
            for (var S = A.length, T = [], M = 0; M < S; M += 2)
              T[M >>> 3] |= parseInt(A.substr(M, 2), 16) << 24 - M % 8 * 4;
            return new E.init(T, S / 2);
          }
        }, v = g.Latin1 = {
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
          stringify: function(A) {
            for (var S = A.words, T = A.sigBytes, M = [], P = 0; P < T; P++) {
              var z = S[P >>> 2] >>> 24 - P % 4 * 8 & 255;
              M.push(String.fromCharCode(z));
            }
            return M.join("");
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
          parse: function(A) {
            for (var S = A.length, T = [], M = 0; M < S; M++)
              T[M >>> 2] |= (A.charCodeAt(M) & 255) << 24 - M % 4 * 8;
            return new E.init(T, S);
          }
        }, b = g.Utf8 = {
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
          stringify: function(A) {
            try {
              return decodeURIComponent(escape(v.stringify(A)));
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
          parse: function(A) {
            return v.parse(unescape(encodeURIComponent(A)));
          }
        }, C = c.BufferedBlockAlgorithm = x.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new E.init(), this._nDataBytes = 0;
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
          _append: function(A) {
            typeof A == "string" && (A = b.parse(A)), this._data.concat(A), this._nDataBytes += A.sigBytes;
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
          _process: function(A) {
            var S, T = this._data, M = T.words, P = T.sigBytes, z = this.blockSize, q = z * 4, ee = P / q;
            A ? ee = t.ceil(ee) : ee = t.max((ee | 0) - this._minBufferSize, 0);
            var N = ee * z, $ = t.min(N * 4, P);
            if (N) {
              for (var Y = 0; Y < N; Y += z)
                this._doProcessBlock(M, Y);
              S = M.splice(0, N), T.sigBytes -= $;
            }
            return new E.init(S, $);
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
            var A = x.clone.call(this);
            return A._data = this._data.clone(), A;
          },
          _minBufferSize: 0
        });
        c.Hasher = C.extend({
          /**
           * Configuration options.
           */
          cfg: x.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(A) {
            this.cfg = this.cfg.extend(A), this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            C.reset.call(this), this._doReset();
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
          update: function(A) {
            return this._append(A), this._process(), this;
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
          finalize: function(A) {
            A && this._append(A);
            var S = this._doFinalize();
            return S;
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
          _createHelper: function(A) {
            return function(S, T) {
              return new A.init(T).finalize(S);
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
          _createHmacHelper: function(A) {
            return function(S, T) {
              return new k.HMAC.init(A, T).finalize(S);
            };
          }
        });
        var k = h.algo = {};
        return h;
      }(Math);
      return n;
    });
  }(Un)), Un.exports;
}
var Hn = { exports: {} }, vi;
function Bn() {
  return vi || (vi = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      return function(t) {
        var i = n, a = i.lib, s = a.Base, o = a.WordArray, h = i.x64 = {};
        h.Word = s.extend({
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
          init: function(c, x) {
            this.high = c, this.low = x;
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
        }), h.WordArray = s.extend({
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
          init: function(c, x) {
            c = this.words = c || [], x != t ? this.sigBytes = x : this.sigBytes = c.length * 8;
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
            for (var c = this.words, x = c.length, E = [], g = 0; g < x; g++) {
              var B = c[g];
              E.push(B.high), E.push(B.low);
            }
            return o.create(E, this.sigBytes);
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
            for (var c = s.clone.call(this), x = c.words = this.words.slice(0), E = x.length, g = 0; g < E; g++)
              x[g] = x[g].clone();
            return c;
          }
        });
      }(), n;
    });
  }(Hn)), Hn.exports;
}
var qn = { exports: {} }, mi;
function Ql() {
  return mi || (mi = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var t = n, i = t.lib, a = i.WordArray, s = a.init, o = a.init = function(h) {
            if (h instanceof ArrayBuffer && (h = new Uint8Array(h)), (h instanceof Int8Array || typeof Uint8ClampedArray < "u" && h instanceof Uint8ClampedArray || h instanceof Int16Array || h instanceof Uint16Array || h instanceof Int32Array || h instanceof Uint32Array || h instanceof Float32Array || h instanceof Float64Array) && (h = new Uint8Array(h.buffer, h.byteOffset, h.byteLength)), h instanceof Uint8Array) {
              for (var c = h.byteLength, x = [], E = 0; E < c; E++)
                x[E >>> 2] |= h[E] << 24 - E % 4 * 8;
              s.call(this, x, c);
            } else
              s.apply(this, arguments);
          };
          o.prototype = a;
        }
      }(), n.lib.WordArray;
    });
  }(qn)), qn.exports;
}
var Vn = { exports: {} }, yi;
function eu() {
  return yi || (yi = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.WordArray, s = t.enc;
        s.Utf16 = s.Utf16BE = {
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
          stringify: function(h) {
            for (var c = h.words, x = h.sigBytes, E = [], g = 0; g < x; g += 2) {
              var B = c[g >>> 2] >>> 16 - g % 4 * 8 & 65535;
              E.push(String.fromCharCode(B));
            }
            return E.join("");
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
          parse: function(h) {
            for (var c = h.length, x = [], E = 0; E < c; E++)
              x[E >>> 1] |= h.charCodeAt(E) << 16 - E % 2 * 16;
            return a.create(x, c * 2);
          }
        }, s.Utf16LE = {
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
          stringify: function(h) {
            for (var c = h.words, x = h.sigBytes, E = [], g = 0; g < x; g += 2) {
              var B = o(c[g >>> 2] >>> 16 - g % 4 * 8 & 65535);
              E.push(String.fromCharCode(B));
            }
            return E.join("");
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
          parse: function(h) {
            for (var c = h.length, x = [], E = 0; E < c; E++)
              x[E >>> 1] |= o(h.charCodeAt(E) << 16 - E % 2 * 16);
            return a.create(x, c * 2);
          }
        };
        function o(h) {
          return h << 8 & 4278255360 | h >>> 8 & 16711935;
        }
      }(), n.enc.Utf16;
    });
  }(Vn)), Vn.exports;
}
var Yn = { exports: {} }, gi;
function tr() {
  return gi || (gi = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.WordArray, s = t.enc;
        s.Base64 = {
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
          stringify: function(h) {
            var c = h.words, x = h.sigBytes, E = this._map;
            h.clamp();
            for (var g = [], B = 0; B < x; B += 3)
              for (var v = c[B >>> 2] >>> 24 - B % 4 * 8 & 255, b = c[B + 1 >>> 2] >>> 24 - (B + 1) % 4 * 8 & 255, C = c[B + 2 >>> 2] >>> 24 - (B + 2) % 4 * 8 & 255, k = v << 16 | b << 8 | C, A = 0; A < 4 && B + A * 0.75 < x; A++)
                g.push(E.charAt(k >>> 6 * (3 - A) & 63));
            var S = E.charAt(64);
            if (S)
              for (; g.length % 4; )
                g.push(S);
            return g.join("");
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
          parse: function(h) {
            var c = h.length, x = this._map, E = this._reverseMap;
            if (!E) {
              E = this._reverseMap = [];
              for (var g = 0; g < x.length; g++)
                E[x.charCodeAt(g)] = g;
            }
            var B = x.charAt(64);
            if (B) {
              var v = h.indexOf(B);
              v !== -1 && (c = v);
            }
            return o(h, c, E);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function o(h, c, x) {
          for (var E = [], g = 0, B = 0; B < c; B++)
            if (B % 4) {
              var v = x[h.charCodeAt(B - 1)] << B % 4 * 2, b = x[h.charCodeAt(B)] >>> 6 - B % 4 * 2, C = v | b;
              E[g >>> 2] |= C << 24 - g % 4 * 8, g++;
            }
          return a.create(E, g);
        }
      }(), n.enc.Base64;
    });
  }(Yn)), Yn.exports;
}
var Wn = { exports: {} }, bi;
function tu() {
  return bi || (bi = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.WordArray, s = t.enc;
        s.Base64url = {
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
          stringify: function(h, c) {
            c === void 0 && (c = !0);
            var x = h.words, E = h.sigBytes, g = c ? this._safe_map : this._map;
            h.clamp();
            for (var B = [], v = 0; v < E; v += 3)
              for (var b = x[v >>> 2] >>> 24 - v % 4 * 8 & 255, C = x[v + 1 >>> 2] >>> 24 - (v + 1) % 4 * 8 & 255, k = x[v + 2 >>> 2] >>> 24 - (v + 2) % 4 * 8 & 255, A = b << 16 | C << 8 | k, S = 0; S < 4 && v + S * 0.75 < E; S++)
                B.push(g.charAt(A >>> 6 * (3 - S) & 63));
            var T = g.charAt(64);
            if (T)
              for (; B.length % 4; )
                B.push(T);
            return B.join("");
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
          parse: function(h, c) {
            c === void 0 && (c = !0);
            var x = h.length, E = c ? this._safe_map : this._map, g = this._reverseMap;
            if (!g) {
              g = this._reverseMap = [];
              for (var B = 0; B < E.length; B++)
                g[E.charCodeAt(B)] = B;
            }
            var v = E.charAt(64);
            if (v) {
              var b = h.indexOf(v);
              b !== -1 && (x = b);
            }
            return o(h, x, g);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function o(h, c, x) {
          for (var E = [], g = 0, B = 0; B < c; B++)
            if (B % 4) {
              var v = x[h.charCodeAt(B - 1)] << B % 4 * 2, b = x[h.charCodeAt(B)] >>> 6 - B % 4 * 2, C = v | b;
              E[g >>> 2] |= C << 24 - g % 4 * 8, g++;
            }
          return a.create(E, g);
        }
      }(), n.enc.Base64url;
    });
  }(Wn)), Wn.exports;
}
var Kn = { exports: {} }, Bi;
function rr() {
  return Bi || (Bi = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      return function(t) {
        var i = n, a = i.lib, s = a.WordArray, o = a.Hasher, h = i.algo, c = [];
        (function() {
          for (var b = 0; b < 64; b++)
            c[b] = t.abs(t.sin(b + 1)) * 4294967296 | 0;
        })();
        var x = h.MD5 = o.extend({
          _doReset: function() {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(b, C) {
            for (var k = 0; k < 16; k++) {
              var A = C + k, S = b[A];
              b[A] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            var T = this._hash.words, M = b[C + 0], P = b[C + 1], z = b[C + 2], q = b[C + 3], ee = b[C + 4], N = b[C + 5], $ = b[C + 6], Y = b[C + 7], j = b[C + 8], oe = b[C + 9], ue = b[C + 10], ae = b[C + 11], de = b[C + 12], he = b[C + 13], Ee = b[C + 14], ye = b[C + 15], U = T[0], V = T[1], Q = T[2], Z = T[3];
            U = E(U, V, Q, Z, M, 7, c[0]), Z = E(Z, U, V, Q, P, 12, c[1]), Q = E(Q, Z, U, V, z, 17, c[2]), V = E(V, Q, Z, U, q, 22, c[3]), U = E(U, V, Q, Z, ee, 7, c[4]), Z = E(Z, U, V, Q, N, 12, c[5]), Q = E(Q, Z, U, V, $, 17, c[6]), V = E(V, Q, Z, U, Y, 22, c[7]), U = E(U, V, Q, Z, j, 7, c[8]), Z = E(Z, U, V, Q, oe, 12, c[9]), Q = E(Q, Z, U, V, ue, 17, c[10]), V = E(V, Q, Z, U, ae, 22, c[11]), U = E(U, V, Q, Z, de, 7, c[12]), Z = E(Z, U, V, Q, he, 12, c[13]), Q = E(Q, Z, U, V, Ee, 17, c[14]), V = E(V, Q, Z, U, ye, 22, c[15]), U = g(U, V, Q, Z, P, 5, c[16]), Z = g(Z, U, V, Q, $, 9, c[17]), Q = g(Q, Z, U, V, ae, 14, c[18]), V = g(V, Q, Z, U, M, 20, c[19]), U = g(U, V, Q, Z, N, 5, c[20]), Z = g(Z, U, V, Q, ue, 9, c[21]), Q = g(Q, Z, U, V, ye, 14, c[22]), V = g(V, Q, Z, U, ee, 20, c[23]), U = g(U, V, Q, Z, oe, 5, c[24]), Z = g(Z, U, V, Q, Ee, 9, c[25]), Q = g(Q, Z, U, V, q, 14, c[26]), V = g(V, Q, Z, U, j, 20, c[27]), U = g(U, V, Q, Z, he, 5, c[28]), Z = g(Z, U, V, Q, z, 9, c[29]), Q = g(Q, Z, U, V, Y, 14, c[30]), V = g(V, Q, Z, U, de, 20, c[31]), U = B(U, V, Q, Z, N, 4, c[32]), Z = B(Z, U, V, Q, j, 11, c[33]), Q = B(Q, Z, U, V, ae, 16, c[34]), V = B(V, Q, Z, U, Ee, 23, c[35]), U = B(U, V, Q, Z, P, 4, c[36]), Z = B(Z, U, V, Q, ee, 11, c[37]), Q = B(Q, Z, U, V, Y, 16, c[38]), V = B(V, Q, Z, U, ue, 23, c[39]), U = B(U, V, Q, Z, he, 4, c[40]), Z = B(Z, U, V, Q, M, 11, c[41]), Q = B(Q, Z, U, V, q, 16, c[42]), V = B(V, Q, Z, U, $, 23, c[43]), U = B(U, V, Q, Z, oe, 4, c[44]), Z = B(Z, U, V, Q, de, 11, c[45]), Q = B(Q, Z, U, V, ye, 16, c[46]), V = B(V, Q, Z, U, z, 23, c[47]), U = v(U, V, Q, Z, M, 6, c[48]), Z = v(Z, U, V, Q, Y, 10, c[49]), Q = v(Q, Z, U, V, Ee, 15, c[50]), V = v(V, Q, Z, U, N, 21, c[51]), U = v(U, V, Q, Z, de, 6, c[52]), Z = v(Z, U, V, Q, q, 10, c[53]), Q = v(Q, Z, U, V, ue, 15, c[54]), V = v(V, Q, Z, U, P, 21, c[55]), U = v(U, V, Q, Z, j, 6, c[56]), Z = v(Z, U, V, Q, ye, 10, c[57]), Q = v(Q, Z, U, V, $, 15, c[58]), V = v(V, Q, Z, U, he, 21, c[59]), U = v(U, V, Q, Z, ee, 6, c[60]), Z = v(Z, U, V, Q, ae, 10, c[61]), Q = v(Q, Z, U, V, z, 15, c[62]), V = v(V, Q, Z, U, oe, 21, c[63]), T[0] = T[0] + U | 0, T[1] = T[1] + V | 0, T[2] = T[2] + Q | 0, T[3] = T[3] + Z | 0;
          },
          _doFinalize: function() {
            var b = this._data, C = b.words, k = this._nDataBytes * 8, A = b.sigBytes * 8;
            C[A >>> 5] |= 128 << 24 - A % 32;
            var S = t.floor(k / 4294967296), T = k;
            C[(A + 64 >>> 9 << 4) + 15] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, C[(A + 64 >>> 9 << 4) + 14] = (T << 8 | T >>> 24) & 16711935 | (T << 24 | T >>> 8) & 4278255360, b.sigBytes = (C.length + 1) * 4, this._process();
            for (var M = this._hash, P = M.words, z = 0; z < 4; z++) {
              var q = P[z];
              P[z] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360;
            }
            return M;
          },
          clone: function() {
            var b = o.clone.call(this);
            return b._hash = this._hash.clone(), b;
          }
        });
        function E(b, C, k, A, S, T, M) {
          var P = b + (C & k | ~C & A) + S + M;
          return (P << T | P >>> 32 - T) + C;
        }
        function g(b, C, k, A, S, T, M) {
          var P = b + (C & A | k & ~A) + S + M;
          return (P << T | P >>> 32 - T) + C;
        }
        function B(b, C, k, A, S, T, M) {
          var P = b + (C ^ k ^ A) + S + M;
          return (P << T | P >>> 32 - T) + C;
        }
        function v(b, C, k, A, S, T, M) {
          var P = b + (k ^ (C | ~A)) + S + M;
          return (P << T | P >>> 32 - T) + C;
        }
        i.MD5 = o._createHelper(x), i.HmacMD5 = o._createHmacHelper(x);
      }(Math), n.MD5;
    });
  }(Kn)), Kn.exports;
}
var jn = { exports: {} }, Ei;
function co() {
  return Ei || (Ei = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.WordArray, s = i.Hasher, o = t.algo, h = [], c = o.SHA1 = s.extend({
          _doReset: function() {
            this._hash = new a.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(x, E) {
            for (var g = this._hash.words, B = g[0], v = g[1], b = g[2], C = g[3], k = g[4], A = 0; A < 80; A++) {
              if (A < 16)
                h[A] = x[E + A] | 0;
              else {
                var S = h[A - 3] ^ h[A - 8] ^ h[A - 14] ^ h[A - 16];
                h[A] = S << 1 | S >>> 31;
              }
              var T = (B << 5 | B >>> 27) + k + h[A];
              A < 20 ? T += (v & b | ~v & C) + 1518500249 : A < 40 ? T += (v ^ b ^ C) + 1859775393 : A < 60 ? T += (v & b | v & C | b & C) - 1894007588 : T += (v ^ b ^ C) - 899497514, k = C, C = b, b = v << 30 | v >>> 2, v = B, B = T;
            }
            g[0] = g[0] + B | 0, g[1] = g[1] + v | 0, g[2] = g[2] + b | 0, g[3] = g[3] + C | 0, g[4] = g[4] + k | 0;
          },
          _doFinalize: function() {
            var x = this._data, E = x.words, g = this._nDataBytes * 8, B = x.sigBytes * 8;
            return E[B >>> 5] |= 128 << 24 - B % 32, E[(B + 64 >>> 9 << 4) + 14] = Math.floor(g / 4294967296), E[(B + 64 >>> 9 << 4) + 15] = g, x.sigBytes = E.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var x = s.clone.call(this);
            return x._hash = this._hash.clone(), x;
          }
        });
        t.SHA1 = s._createHelper(c), t.HmacSHA1 = s._createHmacHelper(c);
      }(), n.SHA1;
    });
  }(jn)), jn.exports;
}
var Gn = { exports: {} }, wi;
function W0() {
  return wi || (wi = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      return function(t) {
        var i = n, a = i.lib, s = a.WordArray, o = a.Hasher, h = i.algo, c = [], x = [];
        (function() {
          function B(k) {
            for (var A = t.sqrt(k), S = 2; S <= A; S++)
              if (!(k % S))
                return !1;
            return !0;
          }
          function v(k) {
            return (k - (k | 0)) * 4294967296 | 0;
          }
          for (var b = 2, C = 0; C < 64; )
            B(b) && (C < 8 && (c[C] = v(t.pow(b, 1 / 2))), x[C] = v(t.pow(b, 1 / 3)), C++), b++;
        })();
        var E = [], g = h.SHA256 = o.extend({
          _doReset: function() {
            this._hash = new s.init(c.slice(0));
          },
          _doProcessBlock: function(B, v) {
            for (var b = this._hash.words, C = b[0], k = b[1], A = b[2], S = b[3], T = b[4], M = b[5], P = b[6], z = b[7], q = 0; q < 64; q++) {
              if (q < 16)
                E[q] = B[v + q] | 0;
              else {
                var ee = E[q - 15], N = (ee << 25 | ee >>> 7) ^ (ee << 14 | ee >>> 18) ^ ee >>> 3, $ = E[q - 2], Y = ($ << 15 | $ >>> 17) ^ ($ << 13 | $ >>> 19) ^ $ >>> 10;
                E[q] = N + E[q - 7] + Y + E[q - 16];
              }
              var j = T & M ^ ~T & P, oe = C & k ^ C & A ^ k & A, ue = (C << 30 | C >>> 2) ^ (C << 19 | C >>> 13) ^ (C << 10 | C >>> 22), ae = (T << 26 | T >>> 6) ^ (T << 21 | T >>> 11) ^ (T << 7 | T >>> 25), de = z + ae + j + x[q] + E[q], he = ue + oe;
              z = P, P = M, M = T, T = S + de | 0, S = A, A = k, k = C, C = de + he | 0;
            }
            b[0] = b[0] + C | 0, b[1] = b[1] + k | 0, b[2] = b[2] + A | 0, b[3] = b[3] + S | 0, b[4] = b[4] + T | 0, b[5] = b[5] + M | 0, b[6] = b[6] + P | 0, b[7] = b[7] + z | 0;
          },
          _doFinalize: function() {
            var B = this._data, v = B.words, b = this._nDataBytes * 8, C = B.sigBytes * 8;
            return v[C >>> 5] |= 128 << 24 - C % 32, v[(C + 64 >>> 9 << 4) + 14] = t.floor(b / 4294967296), v[(C + 64 >>> 9 << 4) + 15] = b, B.sigBytes = v.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var B = o.clone.call(this);
            return B._hash = this._hash.clone(), B;
          }
        });
        i.SHA256 = o._createHelper(g), i.HmacSHA256 = o._createHmacHelper(g);
      }(Math), n.SHA256;
    });
  }(Gn)), Gn.exports;
}
var Xn = { exports: {} }, Ci;
function ru() {
  return Ci || (Ci = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), W0());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.WordArray, s = t.algo, o = s.SHA256, h = s.SHA224 = o.extend({
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
            var c = o._doFinalize.call(this);
            return c.sigBytes -= 4, c;
          }
        });
        t.SHA224 = o._createHelper(h), t.HmacSHA224 = o._createHmacHelper(h);
      }(), n.SHA224;
    });
  }(Xn)), Xn.exports;
}
var Zn = { exports: {} }, Fi;
function fo() {
  return Fi || (Fi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Bn());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.Hasher, s = t.x64, o = s.Word, h = s.WordArray, c = t.algo;
        function x() {
          return o.create.apply(o, arguments);
        }
        var E = [
          x(1116352408, 3609767458),
          x(1899447441, 602891725),
          x(3049323471, 3964484399),
          x(3921009573, 2173295548),
          x(961987163, 4081628472),
          x(1508970993, 3053834265),
          x(2453635748, 2937671579),
          x(2870763221, 3664609560),
          x(3624381080, 2734883394),
          x(310598401, 1164996542),
          x(607225278, 1323610764),
          x(1426881987, 3590304994),
          x(1925078388, 4068182383),
          x(2162078206, 991336113),
          x(2614888103, 633803317),
          x(3248222580, 3479774868),
          x(3835390401, 2666613458),
          x(4022224774, 944711139),
          x(264347078, 2341262773),
          x(604807628, 2007800933),
          x(770255983, 1495990901),
          x(1249150122, 1856431235),
          x(1555081692, 3175218132),
          x(1996064986, 2198950837),
          x(2554220882, 3999719339),
          x(2821834349, 766784016),
          x(2952996808, 2566594879),
          x(3210313671, 3203337956),
          x(3336571891, 1034457026),
          x(3584528711, 2466948901),
          x(113926993, 3758326383),
          x(338241895, 168717936),
          x(666307205, 1188179964),
          x(773529912, 1546045734),
          x(1294757372, 1522805485),
          x(1396182291, 2643833823),
          x(1695183700, 2343527390),
          x(1986661051, 1014477480),
          x(2177026350, 1206759142),
          x(2456956037, 344077627),
          x(2730485921, 1290863460),
          x(2820302411, 3158454273),
          x(3259730800, 3505952657),
          x(3345764771, 106217008),
          x(3516065817, 3606008344),
          x(3600352804, 1432725776),
          x(4094571909, 1467031594),
          x(275423344, 851169720),
          x(430227734, 3100823752),
          x(506948616, 1363258195),
          x(659060556, 3750685593),
          x(883997877, 3785050280),
          x(958139571, 3318307427),
          x(1322822218, 3812723403),
          x(1537002063, 2003034995),
          x(1747873779, 3602036899),
          x(1955562222, 1575990012),
          x(2024104815, 1125592928),
          x(2227730452, 2716904306),
          x(2361852424, 442776044),
          x(2428436474, 593698344),
          x(2756734187, 3733110249),
          x(3204031479, 2999351573),
          x(3329325298, 3815920427),
          x(3391569614, 3928383900),
          x(3515267271, 566280711),
          x(3940187606, 3454069534),
          x(4118630271, 4000239992),
          x(116418474, 1914138554),
          x(174292421, 2731055270),
          x(289380356, 3203993006),
          x(460393269, 320620315),
          x(685471733, 587496836),
          x(852142971, 1086792851),
          x(1017036298, 365543100),
          x(1126000580, 2618297676),
          x(1288033470, 3409855158),
          x(1501505948, 4234509866),
          x(1607167915, 987167468),
          x(1816402316, 1246189591)
        ], g = [];
        (function() {
          for (var v = 0; v < 80; v++)
            g[v] = x();
        })();
        var B = c.SHA512 = a.extend({
          _doReset: function() {
            this._hash = new h.init([
              new o.init(1779033703, 4089235720),
              new o.init(3144134277, 2227873595),
              new o.init(1013904242, 4271175723),
              new o.init(2773480762, 1595750129),
              new o.init(1359893119, 2917565137),
              new o.init(2600822924, 725511199),
              new o.init(528734635, 4215389547),
              new o.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(v, b) {
            for (var C = this._hash.words, k = C[0], A = C[1], S = C[2], T = C[3], M = C[4], P = C[5], z = C[6], q = C[7], ee = k.high, N = k.low, $ = A.high, Y = A.low, j = S.high, oe = S.low, ue = T.high, ae = T.low, de = M.high, he = M.low, Ee = P.high, ye = P.low, U = z.high, V = z.low, Q = q.high, Z = q.low, Ce = ee, we = N, He = $, fe = Y, ze = j, Ze = oe, dt = ue, We = ae, Ae = de, Le = he, ht = Ee, F = ye, f = U, d = V, I = Q, O = Z, W = 0; W < 80; W++) {
              var G, pe, X = g[W];
              if (W < 16)
                pe = X.high = v[b + W * 2] | 0, G = X.low = v[b + W * 2 + 1] | 0;
              else {
                var le = g[W - 15], De = le.high, y = le.low, l = (De >>> 1 | y << 31) ^ (De >>> 8 | y << 24) ^ De >>> 7, u = (y >>> 1 | De << 31) ^ (y >>> 8 | De << 24) ^ (y >>> 7 | De << 25), _ = g[W - 2], R = _.high, H = _.low, K = (R >>> 19 | H << 13) ^ (R << 3 | H >>> 29) ^ R >>> 6, ve = (H >>> 19 | R << 13) ^ (H << 3 | R >>> 29) ^ (H >>> 6 | R << 26), Pe = g[W - 7], ke = Pe.high, Oe = Pe.low, Se = g[W - 16], An = Se.high, Rr = Se.low;
                G = u + Oe, pe = l + ke + (G >>> 0 < u >>> 0 ? 1 : 0), G = G + ve, pe = pe + K + (G >>> 0 < ve >>> 0 ? 1 : 0), G = G + Rr, pe = pe + An + (G >>> 0 < Rr >>> 0 ? 1 : 0), X.high = pe, X.low = G;
              }
              var Dn = Ae & ht ^ ~Ae & f, Mr = Le & F ^ ~Le & d, Sn = Ce & He ^ Ce & ze ^ He & ze, Tn = we & fe ^ we & Ze ^ fe & Ze, In = (Ce >>> 28 | we << 4) ^ (Ce << 30 | we >>> 2) ^ (Ce << 25 | we >>> 7), Lr = (we >>> 28 | Ce << 4) ^ (we << 30 | Ce >>> 2) ^ (we << 25 | Ce >>> 7), kn = (Ae >>> 14 | Le << 18) ^ (Ae >>> 18 | Le << 14) ^ (Ae << 23 | Le >>> 9), Rn = (Le >>> 14 | Ae << 18) ^ (Le >>> 18 | Ae << 14) ^ (Le << 23 | Ae >>> 9), Pr = E[W], Mn = Pr.high, Nr = Pr.low, rt = O + Rn, _t = I + kn + (rt >>> 0 < O >>> 0 ? 1 : 0), rt = rt + Mr, _t = _t + Dn + (rt >>> 0 < Mr >>> 0 ? 1 : 0), rt = rt + Nr, _t = _t + Mn + (rt >>> 0 < Nr >>> 0 ? 1 : 0), rt = rt + G, _t = _t + pe + (rt >>> 0 < G >>> 0 ? 1 : 0), Or = Lr + Tn, Ln = In + Sn + (Or >>> 0 < Lr >>> 0 ? 1 : 0);
              I = f, O = d, f = ht, d = F, ht = Ae, F = Le, Le = We + rt | 0, Ae = dt + _t + (Le >>> 0 < We >>> 0 ? 1 : 0) | 0, dt = ze, We = Ze, ze = He, Ze = fe, He = Ce, fe = we, we = rt + Or | 0, Ce = _t + Ln + (we >>> 0 < rt >>> 0 ? 1 : 0) | 0;
            }
            N = k.low = N + we, k.high = ee + Ce + (N >>> 0 < we >>> 0 ? 1 : 0), Y = A.low = Y + fe, A.high = $ + He + (Y >>> 0 < fe >>> 0 ? 1 : 0), oe = S.low = oe + Ze, S.high = j + ze + (oe >>> 0 < Ze >>> 0 ? 1 : 0), ae = T.low = ae + We, T.high = ue + dt + (ae >>> 0 < We >>> 0 ? 1 : 0), he = M.low = he + Le, M.high = de + Ae + (he >>> 0 < Le >>> 0 ? 1 : 0), ye = P.low = ye + F, P.high = Ee + ht + (ye >>> 0 < F >>> 0 ? 1 : 0), V = z.low = V + d, z.high = U + f + (V >>> 0 < d >>> 0 ? 1 : 0), Z = q.low = Z + O, q.high = Q + I + (Z >>> 0 < O >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var v = this._data, b = v.words, C = this._nDataBytes * 8, k = v.sigBytes * 8;
            b[k >>> 5] |= 128 << 24 - k % 32, b[(k + 128 >>> 10 << 5) + 30] = Math.floor(C / 4294967296), b[(k + 128 >>> 10 << 5) + 31] = C, v.sigBytes = b.length * 4, this._process();
            var A = this._hash.toX32();
            return A;
          },
          clone: function() {
            var v = a.clone.call(this);
            return v._hash = this._hash.clone(), v;
          },
          blockSize: 1024 / 32
        });
        t.SHA512 = a._createHelper(B), t.HmacSHA512 = a._createHmacHelper(B);
      }(), n.SHA512;
    });
  }(Zn)), Zn.exports;
}
var Jn = { exports: {} }, _i;
function nu() {
  return _i || (_i = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Bn(), fo());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.x64, a = i.Word, s = i.WordArray, o = t.algo, h = o.SHA512, c = o.SHA384 = h.extend({
          _doReset: function() {
            this._hash = new s.init([
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
            var x = h._doFinalize.call(this);
            return x.sigBytes -= 16, x;
          }
        });
        t.SHA384 = h._createHelper(c), t.HmacSHA384 = h._createHmacHelper(c);
      }(), n.SHA384;
    });
  }(Jn)), Jn.exports;
}
var Qn = { exports: {} }, Ai;
function iu() {
  return Ai || (Ai = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Bn());
    })(Be, function(n) {
      return function(t) {
        var i = n, a = i.lib, s = a.WordArray, o = a.Hasher, h = i.x64, c = h.Word, x = i.algo, E = [], g = [], B = [];
        (function() {
          for (var C = 1, k = 0, A = 0; A < 24; A++) {
            E[C + 5 * k] = (A + 1) * (A + 2) / 2 % 64;
            var S = k % 5, T = (2 * C + 3 * k) % 5;
            C = S, k = T;
          }
          for (var C = 0; C < 5; C++)
            for (var k = 0; k < 5; k++)
              g[C + 5 * k] = k + (2 * C + 3 * k) % 5 * 5;
          for (var M = 1, P = 0; P < 24; P++) {
            for (var z = 0, q = 0, ee = 0; ee < 7; ee++) {
              if (M & 1) {
                var N = (1 << ee) - 1;
                N < 32 ? q ^= 1 << N : z ^= 1 << N - 32;
              }
              M & 128 ? M = M << 1 ^ 113 : M <<= 1;
            }
            B[P] = c.create(z, q);
          }
        })();
        var v = [];
        (function() {
          for (var C = 0; C < 25; C++)
            v[C] = c.create();
        })();
        var b = x.SHA3 = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: o.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var C = this._state = [], k = 0; k < 25; k++)
              C[k] = new c.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(C, k) {
            for (var A = this._state, S = this.blockSize / 2, T = 0; T < S; T++) {
              var M = C[k + 2 * T], P = C[k + 2 * T + 1];
              M = (M << 8 | M >>> 24) & 16711935 | (M << 24 | M >>> 8) & 4278255360, P = (P << 8 | P >>> 24) & 16711935 | (P << 24 | P >>> 8) & 4278255360;
              var z = A[T];
              z.high ^= P, z.low ^= M;
            }
            for (var q = 0; q < 24; q++) {
              for (var ee = 0; ee < 5; ee++) {
                for (var N = 0, $ = 0, Y = 0; Y < 5; Y++) {
                  var z = A[ee + 5 * Y];
                  N ^= z.high, $ ^= z.low;
                }
                var j = v[ee];
                j.high = N, j.low = $;
              }
              for (var ee = 0; ee < 5; ee++)
                for (var oe = v[(ee + 4) % 5], ue = v[(ee + 1) % 5], ae = ue.high, de = ue.low, N = oe.high ^ (ae << 1 | de >>> 31), $ = oe.low ^ (de << 1 | ae >>> 31), Y = 0; Y < 5; Y++) {
                  var z = A[ee + 5 * Y];
                  z.high ^= N, z.low ^= $;
                }
              for (var he = 1; he < 25; he++) {
                var N, $, z = A[he], Ee = z.high, ye = z.low, U = E[he];
                U < 32 ? (N = Ee << U | ye >>> 32 - U, $ = ye << U | Ee >>> 32 - U) : (N = ye << U - 32 | Ee >>> 64 - U, $ = Ee << U - 32 | ye >>> 64 - U);
                var V = v[g[he]];
                V.high = N, V.low = $;
              }
              var Q = v[0], Z = A[0];
              Q.high = Z.high, Q.low = Z.low;
              for (var ee = 0; ee < 5; ee++)
                for (var Y = 0; Y < 5; Y++) {
                  var he = ee + 5 * Y, z = A[he], Ce = v[he], we = v[(ee + 1) % 5 + 5 * Y], He = v[(ee + 2) % 5 + 5 * Y];
                  z.high = Ce.high ^ ~we.high & He.high, z.low = Ce.low ^ ~we.low & He.low;
                }
              var z = A[0], fe = B[q];
              z.high ^= fe.high, z.low ^= fe.low;
            }
          },
          _doFinalize: function() {
            var C = this._data, k = C.words;
            this._nDataBytes * 8;
            var A = C.sigBytes * 8, S = this.blockSize * 32;
            k[A >>> 5] |= 1 << 24 - A % 32, k[(t.ceil((A + 1) / S) * S >>> 5) - 1] |= 128, C.sigBytes = k.length * 4, this._process();
            for (var T = this._state, M = this.cfg.outputLength / 8, P = M / 8, z = [], q = 0; q < P; q++) {
              var ee = T[q], N = ee.high, $ = ee.low;
              N = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360, $ = ($ << 8 | $ >>> 24) & 16711935 | ($ << 24 | $ >>> 8) & 4278255360, z.push($), z.push(N);
            }
            return new s.init(z, M);
          },
          clone: function() {
            for (var C = o.clone.call(this), k = C._state = this._state.slice(0), A = 0; A < 25; A++)
              k[A] = k[A].clone();
            return C;
          }
        });
        i.SHA3 = o._createHelper(b), i.HmacSHA3 = o._createHmacHelper(b);
      }(Math), n.SHA3;
    });
  }(Qn)), Qn.exports;
}
var e0 = { exports: {} }, Di;
function au() {
  return Di || (Di = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(t) {
        var i = n, a = i.lib, s = a.WordArray, o = a.Hasher, h = i.algo, c = s.create([
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
        ]), x = s.create([
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
        ]), E = s.create([
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
        ]), g = s.create([
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
        ]), B = s.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), v = s.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), b = h.RIPEMD160 = o.extend({
          _doReset: function() {
            this._hash = s.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(P, z) {
            for (var q = 0; q < 16; q++) {
              var ee = z + q, N = P[ee];
              P[ee] = (N << 8 | N >>> 24) & 16711935 | (N << 24 | N >>> 8) & 4278255360;
            }
            var $ = this._hash.words, Y = B.words, j = v.words, oe = c.words, ue = x.words, ae = E.words, de = g.words, he, Ee, ye, U, V, Q, Z, Ce, we, He;
            Q = he = $[0], Z = Ee = $[1], Ce = ye = $[2], we = U = $[3], He = V = $[4];
            for (var fe, q = 0; q < 80; q += 1)
              fe = he + P[z + oe[q]] | 0, q < 16 ? fe += C(Ee, ye, U) + Y[0] : q < 32 ? fe += k(Ee, ye, U) + Y[1] : q < 48 ? fe += A(Ee, ye, U) + Y[2] : q < 64 ? fe += S(Ee, ye, U) + Y[3] : fe += T(Ee, ye, U) + Y[4], fe = fe | 0, fe = M(fe, ae[q]), fe = fe + V | 0, he = V, V = U, U = M(ye, 10), ye = Ee, Ee = fe, fe = Q + P[z + ue[q]] | 0, q < 16 ? fe += T(Z, Ce, we) + j[0] : q < 32 ? fe += S(Z, Ce, we) + j[1] : q < 48 ? fe += A(Z, Ce, we) + j[2] : q < 64 ? fe += k(Z, Ce, we) + j[3] : fe += C(Z, Ce, we) + j[4], fe = fe | 0, fe = M(fe, de[q]), fe = fe + He | 0, Q = He, He = we, we = M(Ce, 10), Ce = Z, Z = fe;
            fe = $[1] + ye + we | 0, $[1] = $[2] + U + He | 0, $[2] = $[3] + V + Q | 0, $[3] = $[4] + he + Z | 0, $[4] = $[0] + Ee + Ce | 0, $[0] = fe;
          },
          _doFinalize: function() {
            var P = this._data, z = P.words, q = this._nDataBytes * 8, ee = P.sigBytes * 8;
            z[ee >>> 5] |= 128 << 24 - ee % 32, z[(ee + 64 >>> 9 << 4) + 14] = (q << 8 | q >>> 24) & 16711935 | (q << 24 | q >>> 8) & 4278255360, P.sigBytes = (z.length + 1) * 4, this._process();
            for (var N = this._hash, $ = N.words, Y = 0; Y < 5; Y++) {
              var j = $[Y];
              $[Y] = (j << 8 | j >>> 24) & 16711935 | (j << 24 | j >>> 8) & 4278255360;
            }
            return N;
          },
          clone: function() {
            var P = o.clone.call(this);
            return P._hash = this._hash.clone(), P;
          }
        });
        function C(P, z, q) {
          return P ^ z ^ q;
        }
        function k(P, z, q) {
          return P & z | ~P & q;
        }
        function A(P, z, q) {
          return (P | ~z) ^ q;
        }
        function S(P, z, q) {
          return P & q | z & ~q;
        }
        function T(P, z, q) {
          return P ^ (z | ~q);
        }
        function M(P, z) {
          return P << z | P >>> 32 - z;
        }
        i.RIPEMD160 = o._createHelper(b), i.HmacRIPEMD160 = o._createHmacHelper(b);
      }(), n.RIPEMD160;
    });
  }(e0)), e0.exports;
}
var t0 = { exports: {} }, Si;
function K0() {
  return Si || (Si = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(_e());
    })(Be, function(n) {
      (function() {
        var t = n, i = t.lib, a = i.Base, s = t.enc, o = s.Utf8, h = t.algo;
        h.HMAC = a.extend({
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
          init: function(c, x) {
            c = this._hasher = new c.init(), typeof x == "string" && (x = o.parse(x));
            var E = c.blockSize, g = E * 4;
            x.sigBytes > g && (x = c.finalize(x)), x.clamp();
            for (var B = this._oKey = x.clone(), v = this._iKey = x.clone(), b = B.words, C = v.words, k = 0; k < E; k++)
              b[k] ^= 1549556828, C[k] ^= 909522486;
            B.sigBytes = v.sigBytes = g, this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var c = this._hasher;
            c.reset(), c.update(this._iKey);
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
          update: function(c) {
            return this._hasher.update(c), this;
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
          finalize: function(c) {
            var x = this._hasher, E = x.finalize(c);
            x.reset();
            var g = x.finalize(this._oKey.clone().concat(E));
            return g;
          }
        });
      })();
    });
  }(t0)), t0.exports;
}
var r0 = { exports: {} }, Ti;
function ou() {
  return Ti || (Ti = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), W0(), K0());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.Base, s = i.WordArray, o = t.algo, h = o.SHA256, c = o.HMAC, x = o.PBKDF2 = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: a.extend({
            keySize: 128 / 32,
            hasher: h,
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
          init: function(E) {
            this.cfg = this.cfg.extend(E);
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
          compute: function(E, g) {
            for (var B = this.cfg, v = c.create(B.hasher, E), b = s.create(), C = s.create([1]), k = b.words, A = C.words, S = B.keySize, T = B.iterations; k.length < S; ) {
              var M = v.update(g).finalize(C);
              v.reset();
              for (var P = M.words, z = P.length, q = M, ee = 1; ee < T; ee++) {
                q = v.finalize(q), v.reset();
                for (var N = q.words, $ = 0; $ < z; $++)
                  P[$] ^= N[$];
              }
              b.concat(M), A[0]++;
            }
            return b.sigBytes = S * 4, b;
          }
        });
        t.PBKDF2 = function(E, g, B) {
          return x.create(B).compute(E, g);
        };
      }(), n.PBKDF2;
    });
  }(r0)), r0.exports;
}
var n0 = { exports: {} }, Ii;
function Gt() {
  return Ii || (Ii = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), co(), K0());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.Base, s = i.WordArray, o = t.algo, h = o.MD5, c = o.EvpKDF = a.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: a.extend({
            keySize: 128 / 32,
            hasher: h,
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
          init: function(x) {
            this.cfg = this.cfg.extend(x);
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
          compute: function(x, E) {
            for (var g, B = this.cfg, v = B.hasher.create(), b = s.create(), C = b.words, k = B.keySize, A = B.iterations; C.length < k; ) {
              g && v.update(g), g = v.update(x).finalize(E), v.reset();
              for (var S = 1; S < A; S++)
                g = v.finalize(g), v.reset();
              b.concat(g);
            }
            return b.sigBytes = k * 4, b;
          }
        });
        t.EvpKDF = function(x, E, g) {
          return c.create(g).compute(x, E);
        };
      }(), n.EvpKDF;
    });
  }(n0)), n0.exports;
}
var i0 = { exports: {} }, ki;
function Xe() {
  return ki || (ki = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Gt());
    })(Be, function(n) {
      n.lib.Cipher || function(t) {
        var i = n, a = i.lib, s = a.Base, o = a.WordArray, h = a.BufferedBlockAlgorithm, c = i.enc;
        c.Utf8;
        var x = c.Base64, E = i.algo, g = E.EvpKDF, B = a.Cipher = h.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: s.extend(),
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
          createEncryptor: function(N, $) {
            return this.create(this._ENC_XFORM_MODE, N, $);
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
          createDecryptor: function(N, $) {
            return this.create(this._DEC_XFORM_MODE, N, $);
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
          init: function(N, $, Y) {
            this.cfg = this.cfg.extend(Y), this._xformMode = N, this._key = $, this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            h.reset.call(this), this._doReset();
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
          process: function(N) {
            return this._append(N), this._process();
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
          finalize: function(N) {
            N && this._append(N);
            var $ = this._doFinalize();
            return $;
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
            function N($) {
              return typeof $ == "string" ? ee : P;
            }
            return function($) {
              return {
                encrypt: function(Y, j, oe) {
                  return N(j).encrypt($, Y, j, oe);
                },
                decrypt: function(Y, j, oe) {
                  return N(j).decrypt($, Y, j, oe);
                }
              };
            };
          }()
        });
        a.StreamCipher = B.extend({
          _doFinalize: function() {
            var N = this._process(!0);
            return N;
          },
          blockSize: 1
        });
        var v = i.mode = {}, b = a.BlockCipherMode = s.extend({
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
          createEncryptor: function(N, $) {
            return this.Encryptor.create(N, $);
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
          createDecryptor: function(N, $) {
            return this.Decryptor.create(N, $);
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
          init: function(N, $) {
            this._cipher = N, this._iv = $;
          }
        }), C = v.CBC = function() {
          var N = b.extend();
          N.Encryptor = N.extend({
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
            processBlock: function(Y, j) {
              var oe = this._cipher, ue = oe.blockSize;
              $.call(this, Y, j, ue), oe.encryptBlock(Y, j), this._prevBlock = Y.slice(j, j + ue);
            }
          }), N.Decryptor = N.extend({
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
            processBlock: function(Y, j) {
              var oe = this._cipher, ue = oe.blockSize, ae = Y.slice(j, j + ue);
              oe.decryptBlock(Y, j), $.call(this, Y, j, ue), this._prevBlock = ae;
            }
          });
          function $(Y, j, oe) {
            var ue, ae = this._iv;
            ae ? (ue = ae, this._iv = t) : ue = this._prevBlock;
            for (var de = 0; de < oe; de++)
              Y[j + de] ^= ue[de];
          }
          return N;
        }(), k = i.pad = {}, A = k.Pkcs7 = {
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
          pad: function(N, $) {
            for (var Y = $ * 4, j = Y - N.sigBytes % Y, oe = j << 24 | j << 16 | j << 8 | j, ue = [], ae = 0; ae < j; ae += 4)
              ue.push(oe);
            var de = o.create(ue, j);
            N.concat(de);
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
          unpad: function(N) {
            var $ = N.words[N.sigBytes - 1 >>> 2] & 255;
            N.sigBytes -= $;
          }
        };
        a.BlockCipher = B.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: B.cfg.extend({
            mode: C,
            padding: A
          }),
          reset: function() {
            var N;
            B.reset.call(this);
            var $ = this.cfg, Y = $.iv, j = $.mode;
            this._xformMode == this._ENC_XFORM_MODE ? N = j.createEncryptor : (N = j.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == N ? this._mode.init(this, Y && Y.words) : (this._mode = N.call(j, this, Y && Y.words), this._mode.__creator = N);
          },
          _doProcessBlock: function(N, $) {
            this._mode.processBlock(N, $);
          },
          _doFinalize: function() {
            var N, $ = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? ($.pad(this._data, this.blockSize), N = this._process(!0)) : (N = this._process(!0), $.unpad(N)), N;
          },
          blockSize: 128 / 32
        });
        var S = a.CipherParams = s.extend({
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
          init: function(N) {
            this.mixIn(N);
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
          toString: function(N) {
            return (N || this.formatter).stringify(this);
          }
        }), T = i.format = {}, M = T.OpenSSL = {
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
          stringify: function(N) {
            var $, Y = N.ciphertext, j = N.salt;
            return j ? $ = o.create([1398893684, 1701076831]).concat(j).concat(Y) : $ = Y, $.toString(x);
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
          parse: function(N) {
            var $, Y = x.parse(N), j = Y.words;
            return j[0] == 1398893684 && j[1] == 1701076831 && ($ = o.create(j.slice(2, 4)), j.splice(0, 4), Y.sigBytes -= 16), S.create({ ciphertext: Y, salt: $ });
          }
        }, P = a.SerializableCipher = s.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: s.extend({
            format: M
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
          encrypt: function(N, $, Y, j) {
            j = this.cfg.extend(j);
            var oe = N.createEncryptor(Y, j), ue = oe.finalize($), ae = oe.cfg;
            return S.create({
              ciphertext: ue,
              key: Y,
              iv: ae.iv,
              algorithm: N,
              mode: ae.mode,
              padding: ae.padding,
              blockSize: N.blockSize,
              formatter: j.format
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
          decrypt: function(N, $, Y, j) {
            j = this.cfg.extend(j), $ = this._parse($, j.format);
            var oe = N.createDecryptor(Y, j).finalize($.ciphertext);
            return oe;
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
          _parse: function(N, $) {
            return typeof N == "string" ? $.parse(N, this) : N;
          }
        }), z = i.kdf = {}, q = z.OpenSSL = {
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
          execute: function(N, $, Y, j, oe) {
            if (j || (j = o.random(64 / 8)), oe)
              var ue = g.create({ keySize: $ + Y, hasher: oe }).compute(N, j);
            else
              var ue = g.create({ keySize: $ + Y }).compute(N, j);
            var ae = o.create(ue.words.slice($), Y * 4);
            return ue.sigBytes = $ * 4, S.create({ key: ue, iv: ae, salt: j });
          }
        }, ee = a.PasswordBasedCipher = P.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: P.cfg.extend({
            kdf: q
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
          encrypt: function(N, $, Y, j) {
            j = this.cfg.extend(j);
            var oe = j.kdf.execute(Y, N.keySize, N.ivSize, j.salt, j.hasher);
            j.iv = oe.iv;
            var ue = P.encrypt.call(this, N, $, oe.key, j);
            return ue.mixIn(oe), ue;
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
          decrypt: function(N, $, Y, j) {
            j = this.cfg.extend(j), $ = this._parse($, j.format);
            var oe = j.kdf.execute(Y, N.keySize, N.ivSize, $.salt, j.hasher);
            j.iv = oe.iv;
            var ue = P.decrypt.call(this, N, $, oe.key, j);
            return ue;
          }
        });
      }();
    });
  }(i0)), i0.exports;
}
var a0 = { exports: {} }, Ri;
function su() {
  return Ri || (Ri = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.mode.CFB = function() {
        var t = n.lib.BlockCipherMode.extend();
        t.Encryptor = t.extend({
          processBlock: function(a, s) {
            var o = this._cipher, h = o.blockSize;
            i.call(this, a, s, h, o), this._prevBlock = a.slice(s, s + h);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(a, s) {
            var o = this._cipher, h = o.blockSize, c = a.slice(s, s + h);
            i.call(this, a, s, h, o), this._prevBlock = c;
          }
        });
        function i(a, s, o, h) {
          var c, x = this._iv;
          x ? (c = x.slice(0), this._iv = void 0) : c = this._prevBlock, h.encryptBlock(c, 0);
          for (var E = 0; E < o; E++)
            a[s + E] ^= c[E];
        }
        return t;
      }(), n.mode.CFB;
    });
  }(a0)), a0.exports;
}
var o0 = { exports: {} }, Mi;
function lu() {
  return Mi || (Mi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.mode.CTR = function() {
        var t = n.lib.BlockCipherMode.extend(), i = t.Encryptor = t.extend({
          processBlock: function(a, s) {
            var o = this._cipher, h = o.blockSize, c = this._iv, x = this._counter;
            c && (x = this._counter = c.slice(0), this._iv = void 0);
            var E = x.slice(0);
            o.encryptBlock(E, 0), x[h - 1] = x[h - 1] + 1 | 0;
            for (var g = 0; g < h; g++)
              a[s + g] ^= E[g];
          }
        });
        return t.Decryptor = i, t;
      }(), n.mode.CTR;
    });
  }(o0)), o0.exports;
}
var s0 = { exports: {} }, Li;
function uu() {
  return Li || (Li = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var t = n.lib.BlockCipherMode.extend();
        function i(o) {
          if ((o >> 24 & 255) === 255) {
            var h = o >> 16 & 255, c = o >> 8 & 255, x = o & 255;
            h === 255 ? (h = 0, c === 255 ? (c = 0, x === 255 ? x = 0 : ++x) : ++c) : ++h, o = 0, o += h << 16, o += c << 8, o += x;
          } else
            o += 1 << 24;
          return o;
        }
        function a(o) {
          return (o[0] = i(o[0])) === 0 && (o[1] = i(o[1])), o;
        }
        var s = t.Encryptor = t.extend({
          processBlock: function(o, h) {
            var c = this._cipher, x = c.blockSize, E = this._iv, g = this._counter;
            E && (g = this._counter = E.slice(0), this._iv = void 0), a(g);
            var B = g.slice(0);
            c.encryptBlock(B, 0);
            for (var v = 0; v < x; v++)
              o[h + v] ^= B[v];
          }
        });
        return t.Decryptor = s, t;
      }(), n.mode.CTRGladman;
    });
  }(s0)), s0.exports;
}
var l0 = { exports: {} }, Pi;
function cu() {
  return Pi || (Pi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.mode.OFB = function() {
        var t = n.lib.BlockCipherMode.extend(), i = t.Encryptor = t.extend({
          processBlock: function(a, s) {
            var o = this._cipher, h = o.blockSize, c = this._iv, x = this._keystream;
            c && (x = this._keystream = c.slice(0), this._iv = void 0), o.encryptBlock(x, 0);
            for (var E = 0; E < h; E++)
              a[s + E] ^= x[E];
          }
        });
        return t.Decryptor = i, t;
      }(), n.mode.OFB;
    });
  }(l0)), l0.exports;
}
var u0 = { exports: {} }, Ni;
function fu() {
  return Ni || (Ni = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.mode.ECB = function() {
        var t = n.lib.BlockCipherMode.extend();
        return t.Encryptor = t.extend({
          processBlock: function(i, a) {
            this._cipher.encryptBlock(i, a);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(i, a) {
            this._cipher.decryptBlock(i, a);
          }
        }), t;
      }(), n.mode.ECB;
    });
  }(u0)), u0.exports;
}
var c0 = { exports: {} }, Oi;
function du() {
  return Oi || (Oi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(t, i) {
          var a = t.sigBytes, s = i * 4, o = s - a % s, h = a + o - 1;
          t.clamp(), t.words[h >>> 2] |= o << 24 - h % 4 * 8, t.sigBytes += o;
        },
        unpad: function(t) {
          var i = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= i;
        }
      }, n.pad.Ansix923;
    });
  }(c0)), c0.exports;
}
var f0 = { exports: {} }, zi;
function hu() {
  return zi || (zi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.pad.Iso10126 = {
        pad: function(t, i) {
          var a = i * 4, s = a - t.sigBytes % a;
          t.concat(n.lib.WordArray.random(s - 1)).concat(n.lib.WordArray.create([s << 24], 1));
        },
        unpad: function(t) {
          var i = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= i;
        }
      }, n.pad.Iso10126;
    });
  }(f0)), f0.exports;
}
var d0 = { exports: {} }, $i;
function pu() {
  return $i || ($i = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.pad.Iso97971 = {
        pad: function(t, i) {
          t.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(t, i);
        },
        unpad: function(t) {
          n.pad.ZeroPadding.unpad(t), t.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(d0)), d0.exports;
}
var h0 = { exports: {} }, Ui;
function xu() {
  return Ui || (Ui = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.pad.ZeroPadding = {
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
      }, n.pad.ZeroPadding;
    });
  }(h0)), h0.exports;
}
var p0 = { exports: {} }, Hi;
function vu() {
  return Hi || (Hi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(p0)), p0.exports;
}
var x0 = { exports: {} }, qi;
function mu() {
  return qi || (qi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), Xe());
    })(Be, function(n) {
      return function(t) {
        var i = n, a = i.lib, s = a.CipherParams, o = i.enc, h = o.Hex, c = i.format;
        c.Hex = {
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
          stringify: function(x) {
            return x.ciphertext.toString(h);
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
          parse: function(x) {
            var E = h.parse(x);
            return s.create({ ciphertext: E });
          }
        };
      }(), n.format.Hex;
    });
  }(x0)), x0.exports;
}
var v0 = { exports: {} }, Vi;
function yu() {
  return Vi || (Vi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), tr(), rr(), Gt(), Xe());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.BlockCipher, s = t.algo, o = [], h = [], c = [], x = [], E = [], g = [], B = [], v = [], b = [], C = [];
        (function() {
          for (var S = [], T = 0; T < 256; T++)
            T < 128 ? S[T] = T << 1 : S[T] = T << 1 ^ 283;
          for (var M = 0, P = 0, T = 0; T < 256; T++) {
            var z = P ^ P << 1 ^ P << 2 ^ P << 3 ^ P << 4;
            z = z >>> 8 ^ z & 255 ^ 99, o[M] = z, h[z] = M;
            var q = S[M], ee = S[q], N = S[ee], $ = S[z] * 257 ^ z * 16843008;
            c[M] = $ << 24 | $ >>> 8, x[M] = $ << 16 | $ >>> 16, E[M] = $ << 8 | $ >>> 24, g[M] = $;
            var $ = N * 16843009 ^ ee * 65537 ^ q * 257 ^ M * 16843008;
            B[z] = $ << 24 | $ >>> 8, v[z] = $ << 16 | $ >>> 16, b[z] = $ << 8 | $ >>> 24, C[z] = $, M ? (M = q ^ S[S[S[N ^ q]]], P ^= S[S[P]]) : M = P = 1;
          }
        })();
        var k = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], A = s.AES = a.extend({
          _doReset: function() {
            var S;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var T = this._keyPriorReset = this._key, M = T.words, P = T.sigBytes / 4, z = this._nRounds = P + 6, q = (z + 1) * 4, ee = this._keySchedule = [], N = 0; N < q; N++)
                N < P ? ee[N] = M[N] : (S = ee[N - 1], N % P ? P > 6 && N % P == 4 && (S = o[S >>> 24] << 24 | o[S >>> 16 & 255] << 16 | o[S >>> 8 & 255] << 8 | o[S & 255]) : (S = S << 8 | S >>> 24, S = o[S >>> 24] << 24 | o[S >>> 16 & 255] << 16 | o[S >>> 8 & 255] << 8 | o[S & 255], S ^= k[N / P | 0] << 24), ee[N] = ee[N - P] ^ S);
              for (var $ = this._invKeySchedule = [], Y = 0; Y < q; Y++) {
                var N = q - Y;
                if (Y % 4)
                  var S = ee[N];
                else
                  var S = ee[N - 4];
                Y < 4 || N <= 4 ? $[Y] = S : $[Y] = B[o[S >>> 24]] ^ v[o[S >>> 16 & 255]] ^ b[o[S >>> 8 & 255]] ^ C[o[S & 255]];
              }
            }
          },
          encryptBlock: function(S, T) {
            this._doCryptBlock(S, T, this._keySchedule, c, x, E, g, o);
          },
          decryptBlock: function(S, T) {
            var M = S[T + 1];
            S[T + 1] = S[T + 3], S[T + 3] = M, this._doCryptBlock(S, T, this._invKeySchedule, B, v, b, C, h);
            var M = S[T + 1];
            S[T + 1] = S[T + 3], S[T + 3] = M;
          },
          _doCryptBlock: function(S, T, M, P, z, q, ee, N) {
            for (var $ = this._nRounds, Y = S[T] ^ M[0], j = S[T + 1] ^ M[1], oe = S[T + 2] ^ M[2], ue = S[T + 3] ^ M[3], ae = 4, de = 1; de < $; de++) {
              var he = P[Y >>> 24] ^ z[j >>> 16 & 255] ^ q[oe >>> 8 & 255] ^ ee[ue & 255] ^ M[ae++], Ee = P[j >>> 24] ^ z[oe >>> 16 & 255] ^ q[ue >>> 8 & 255] ^ ee[Y & 255] ^ M[ae++], ye = P[oe >>> 24] ^ z[ue >>> 16 & 255] ^ q[Y >>> 8 & 255] ^ ee[j & 255] ^ M[ae++], U = P[ue >>> 24] ^ z[Y >>> 16 & 255] ^ q[j >>> 8 & 255] ^ ee[oe & 255] ^ M[ae++];
              Y = he, j = Ee, oe = ye, ue = U;
            }
            var he = (N[Y >>> 24] << 24 | N[j >>> 16 & 255] << 16 | N[oe >>> 8 & 255] << 8 | N[ue & 255]) ^ M[ae++], Ee = (N[j >>> 24] << 24 | N[oe >>> 16 & 255] << 16 | N[ue >>> 8 & 255] << 8 | N[Y & 255]) ^ M[ae++], ye = (N[oe >>> 24] << 24 | N[ue >>> 16 & 255] << 16 | N[Y >>> 8 & 255] << 8 | N[j & 255]) ^ M[ae++], U = (N[ue >>> 24] << 24 | N[Y >>> 16 & 255] << 16 | N[j >>> 8 & 255] << 8 | N[oe & 255]) ^ M[ae++];
            S[T] = he, S[T + 1] = Ee, S[T + 2] = ye, S[T + 3] = U;
          },
          keySize: 256 / 32
        });
        t.AES = a._createHelper(A);
      }(), n.AES;
    });
  }(v0)), v0.exports;
}
var m0 = { exports: {} }, Yi;
function gu() {
  return Yi || (Yi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), tr(), rr(), Gt(), Xe());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.WordArray, s = i.BlockCipher, o = t.algo, h = [
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
        ], c = [
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
        ], x = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], E = [
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
        ], g = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], B = o.DES = s.extend({
          _doReset: function() {
            for (var k = this._key, A = k.words, S = [], T = 0; T < 56; T++) {
              var M = h[T] - 1;
              S[T] = A[M >>> 5] >>> 31 - M % 32 & 1;
            }
            for (var P = this._subKeys = [], z = 0; z < 16; z++) {
              for (var q = P[z] = [], ee = x[z], T = 0; T < 24; T++)
                q[T / 6 | 0] |= S[(c[T] - 1 + ee) % 28] << 31 - T % 6, q[4 + (T / 6 | 0)] |= S[28 + (c[T + 24] - 1 + ee) % 28] << 31 - T % 6;
              q[0] = q[0] << 1 | q[0] >>> 31;
              for (var T = 1; T < 7; T++)
                q[T] = q[T] >>> (T - 1) * 4 + 3;
              q[7] = q[7] << 5 | q[7] >>> 27;
            }
            for (var N = this._invSubKeys = [], T = 0; T < 16; T++)
              N[T] = P[15 - T];
          },
          encryptBlock: function(k, A) {
            this._doCryptBlock(k, A, this._subKeys);
          },
          decryptBlock: function(k, A) {
            this._doCryptBlock(k, A, this._invSubKeys);
          },
          _doCryptBlock: function(k, A, S) {
            this._lBlock = k[A], this._rBlock = k[A + 1], v.call(this, 4, 252645135), v.call(this, 16, 65535), b.call(this, 2, 858993459), b.call(this, 8, 16711935), v.call(this, 1, 1431655765);
            for (var T = 0; T < 16; T++) {
              for (var M = S[T], P = this._lBlock, z = this._rBlock, q = 0, ee = 0; ee < 8; ee++)
                q |= E[ee][((z ^ M[ee]) & g[ee]) >>> 0];
              this._lBlock = z, this._rBlock = P ^ q;
            }
            var N = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = N, v.call(this, 1, 1431655765), b.call(this, 8, 16711935), b.call(this, 2, 858993459), v.call(this, 16, 65535), v.call(this, 4, 252645135), k[A] = this._lBlock, k[A + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function v(k, A) {
          var S = (this._lBlock >>> k ^ this._rBlock) & A;
          this._rBlock ^= S, this._lBlock ^= S << k;
        }
        function b(k, A) {
          var S = (this._rBlock >>> k ^ this._lBlock) & A;
          this._lBlock ^= S, this._rBlock ^= S << k;
        }
        t.DES = s._createHelper(B);
        var C = o.TripleDES = s.extend({
          _doReset: function() {
            var k = this._key, A = k.words;
            if (A.length !== 2 && A.length !== 4 && A.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var S = A.slice(0, 2), T = A.length < 4 ? A.slice(0, 2) : A.slice(2, 4), M = A.length < 6 ? A.slice(0, 2) : A.slice(4, 6);
            this._des1 = B.createEncryptor(a.create(S)), this._des2 = B.createEncryptor(a.create(T)), this._des3 = B.createEncryptor(a.create(M));
          },
          encryptBlock: function(k, A) {
            this._des1.encryptBlock(k, A), this._des2.decryptBlock(k, A), this._des3.encryptBlock(k, A);
          },
          decryptBlock: function(k, A) {
            this._des3.decryptBlock(k, A), this._des2.encryptBlock(k, A), this._des1.decryptBlock(k, A);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        t.TripleDES = s._createHelper(C);
      }(), n.TripleDES;
    });
  }(m0)), m0.exports;
}
var y0 = { exports: {} }, Wi;
function bu() {
  return Wi || (Wi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), tr(), rr(), Gt(), Xe());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.StreamCipher, s = t.algo, o = s.RC4 = a.extend({
          _doReset: function() {
            for (var x = this._key, E = x.words, g = x.sigBytes, B = this._S = [], v = 0; v < 256; v++)
              B[v] = v;
            for (var v = 0, b = 0; v < 256; v++) {
              var C = v % g, k = E[C >>> 2] >>> 24 - C % 4 * 8 & 255;
              b = (b + B[v] + k) % 256;
              var A = B[v];
              B[v] = B[b], B[b] = A;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(x, E) {
            x[E] ^= h.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function h() {
          for (var x = this._S, E = this._i, g = this._j, B = 0, v = 0; v < 4; v++) {
            E = (E + 1) % 256, g = (g + x[E]) % 256;
            var b = x[E];
            x[E] = x[g], x[g] = b, B |= x[(x[E] + x[g]) % 256] << 24 - v * 8;
          }
          return this._i = E, this._j = g, B;
        }
        t.RC4 = a._createHelper(o);
        var c = s.RC4Drop = o.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: o.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            o._doReset.call(this);
            for (var x = this.cfg.drop; x > 0; x--)
              h.call(this);
          }
        });
        t.RC4Drop = a._createHelper(c);
      }(), n.RC4;
    });
  }(y0)), y0.exports;
}
var g0 = { exports: {} }, Ki;
function Bu() {
  return Ki || (Ki = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), tr(), rr(), Gt(), Xe());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.StreamCipher, s = t.algo, o = [], h = [], c = [], x = s.Rabbit = a.extend({
          _doReset: function() {
            for (var g = this._key.words, B = this.cfg.iv, v = 0; v < 4; v++)
              g[v] = (g[v] << 8 | g[v] >>> 24) & 16711935 | (g[v] << 24 | g[v] >>> 8) & 4278255360;
            var b = this._X = [
              g[0],
              g[3] << 16 | g[2] >>> 16,
              g[1],
              g[0] << 16 | g[3] >>> 16,
              g[2],
              g[1] << 16 | g[0] >>> 16,
              g[3],
              g[2] << 16 | g[1] >>> 16
            ], C = this._C = [
              g[2] << 16 | g[2] >>> 16,
              g[0] & 4294901760 | g[1] & 65535,
              g[3] << 16 | g[3] >>> 16,
              g[1] & 4294901760 | g[2] & 65535,
              g[0] << 16 | g[0] >>> 16,
              g[2] & 4294901760 | g[3] & 65535,
              g[1] << 16 | g[1] >>> 16,
              g[3] & 4294901760 | g[0] & 65535
            ];
            this._b = 0;
            for (var v = 0; v < 4; v++)
              E.call(this);
            for (var v = 0; v < 8; v++)
              C[v] ^= b[v + 4 & 7];
            if (B) {
              var k = B.words, A = k[0], S = k[1], T = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, M = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, P = T >>> 16 | M & 4294901760, z = M << 16 | T & 65535;
              C[0] ^= T, C[1] ^= P, C[2] ^= M, C[3] ^= z, C[4] ^= T, C[5] ^= P, C[6] ^= M, C[7] ^= z;
              for (var v = 0; v < 4; v++)
                E.call(this);
            }
          },
          _doProcessBlock: function(g, B) {
            var v = this._X;
            E.call(this), o[0] = v[0] ^ v[5] >>> 16 ^ v[3] << 16, o[1] = v[2] ^ v[7] >>> 16 ^ v[5] << 16, o[2] = v[4] ^ v[1] >>> 16 ^ v[7] << 16, o[3] = v[6] ^ v[3] >>> 16 ^ v[1] << 16;
            for (var b = 0; b < 4; b++)
              o[b] = (o[b] << 8 | o[b] >>> 24) & 16711935 | (o[b] << 24 | o[b] >>> 8) & 4278255360, g[B + b] ^= o[b];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function E() {
          for (var g = this._X, B = this._C, v = 0; v < 8; v++)
            h[v] = B[v];
          B[0] = B[0] + 1295307597 + this._b | 0, B[1] = B[1] + 3545052371 + (B[0] >>> 0 < h[0] >>> 0 ? 1 : 0) | 0, B[2] = B[2] + 886263092 + (B[1] >>> 0 < h[1] >>> 0 ? 1 : 0) | 0, B[3] = B[3] + 1295307597 + (B[2] >>> 0 < h[2] >>> 0 ? 1 : 0) | 0, B[4] = B[4] + 3545052371 + (B[3] >>> 0 < h[3] >>> 0 ? 1 : 0) | 0, B[5] = B[5] + 886263092 + (B[4] >>> 0 < h[4] >>> 0 ? 1 : 0) | 0, B[6] = B[6] + 1295307597 + (B[5] >>> 0 < h[5] >>> 0 ? 1 : 0) | 0, B[7] = B[7] + 3545052371 + (B[6] >>> 0 < h[6] >>> 0 ? 1 : 0) | 0, this._b = B[7] >>> 0 < h[7] >>> 0 ? 1 : 0;
          for (var v = 0; v < 8; v++) {
            var b = g[v] + B[v], C = b & 65535, k = b >>> 16, A = ((C * C >>> 17) + C * k >>> 15) + k * k, S = ((b & 4294901760) * b | 0) + ((b & 65535) * b | 0);
            c[v] = A ^ S;
          }
          g[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, g[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, g[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, g[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, g[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, g[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, g[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, g[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        t.Rabbit = a._createHelper(x);
      }(), n.Rabbit;
    });
  }(g0)), g0.exports;
}
var b0 = { exports: {} }, ji;
function Eu() {
  return ji || (ji = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), tr(), rr(), Gt(), Xe());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.StreamCipher, s = t.algo, o = [], h = [], c = [], x = s.RabbitLegacy = a.extend({
          _doReset: function() {
            var g = this._key.words, B = this.cfg.iv, v = this._X = [
              g[0],
              g[3] << 16 | g[2] >>> 16,
              g[1],
              g[0] << 16 | g[3] >>> 16,
              g[2],
              g[1] << 16 | g[0] >>> 16,
              g[3],
              g[2] << 16 | g[1] >>> 16
            ], b = this._C = [
              g[2] << 16 | g[2] >>> 16,
              g[0] & 4294901760 | g[1] & 65535,
              g[3] << 16 | g[3] >>> 16,
              g[1] & 4294901760 | g[2] & 65535,
              g[0] << 16 | g[0] >>> 16,
              g[2] & 4294901760 | g[3] & 65535,
              g[1] << 16 | g[1] >>> 16,
              g[3] & 4294901760 | g[0] & 65535
            ];
            this._b = 0;
            for (var C = 0; C < 4; C++)
              E.call(this);
            for (var C = 0; C < 8; C++)
              b[C] ^= v[C + 4 & 7];
            if (B) {
              var k = B.words, A = k[0], S = k[1], T = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, M = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360, P = T >>> 16 | M & 4294901760, z = M << 16 | T & 65535;
              b[0] ^= T, b[1] ^= P, b[2] ^= M, b[3] ^= z, b[4] ^= T, b[5] ^= P, b[6] ^= M, b[7] ^= z;
              for (var C = 0; C < 4; C++)
                E.call(this);
            }
          },
          _doProcessBlock: function(g, B) {
            var v = this._X;
            E.call(this), o[0] = v[0] ^ v[5] >>> 16 ^ v[3] << 16, o[1] = v[2] ^ v[7] >>> 16 ^ v[5] << 16, o[2] = v[4] ^ v[1] >>> 16 ^ v[7] << 16, o[3] = v[6] ^ v[3] >>> 16 ^ v[1] << 16;
            for (var b = 0; b < 4; b++)
              o[b] = (o[b] << 8 | o[b] >>> 24) & 16711935 | (o[b] << 24 | o[b] >>> 8) & 4278255360, g[B + b] ^= o[b];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function E() {
          for (var g = this._X, B = this._C, v = 0; v < 8; v++)
            h[v] = B[v];
          B[0] = B[0] + 1295307597 + this._b | 0, B[1] = B[1] + 3545052371 + (B[0] >>> 0 < h[0] >>> 0 ? 1 : 0) | 0, B[2] = B[2] + 886263092 + (B[1] >>> 0 < h[1] >>> 0 ? 1 : 0) | 0, B[3] = B[3] + 1295307597 + (B[2] >>> 0 < h[2] >>> 0 ? 1 : 0) | 0, B[4] = B[4] + 3545052371 + (B[3] >>> 0 < h[3] >>> 0 ? 1 : 0) | 0, B[5] = B[5] + 886263092 + (B[4] >>> 0 < h[4] >>> 0 ? 1 : 0) | 0, B[6] = B[6] + 1295307597 + (B[5] >>> 0 < h[5] >>> 0 ? 1 : 0) | 0, B[7] = B[7] + 3545052371 + (B[6] >>> 0 < h[6] >>> 0 ? 1 : 0) | 0, this._b = B[7] >>> 0 < h[7] >>> 0 ? 1 : 0;
          for (var v = 0; v < 8; v++) {
            var b = g[v] + B[v], C = b & 65535, k = b >>> 16, A = ((C * C >>> 17) + C * k >>> 15) + k * k, S = ((b & 4294901760) * b | 0) + ((b & 65535) * b | 0);
            c[v] = A ^ S;
          }
          g[0] = c[0] + (c[7] << 16 | c[7] >>> 16) + (c[6] << 16 | c[6] >>> 16) | 0, g[1] = c[1] + (c[0] << 8 | c[0] >>> 24) + c[7] | 0, g[2] = c[2] + (c[1] << 16 | c[1] >>> 16) + (c[0] << 16 | c[0] >>> 16) | 0, g[3] = c[3] + (c[2] << 8 | c[2] >>> 24) + c[1] | 0, g[4] = c[4] + (c[3] << 16 | c[3] >>> 16) + (c[2] << 16 | c[2] >>> 16) | 0, g[5] = c[5] + (c[4] << 8 | c[4] >>> 24) + c[3] | 0, g[6] = c[6] + (c[5] << 16 | c[5] >>> 16) + (c[4] << 16 | c[4] >>> 16) | 0, g[7] = c[7] + (c[6] << 8 | c[6] >>> 24) + c[5] | 0;
        }
        t.RabbitLegacy = a._createHelper(x);
      }(), n.RabbitLegacy;
    });
  }(b0)), b0.exports;
}
var B0 = { exports: {} }, Gi;
function wu() {
  return Gi || (Gi = 1, function(e, r) {
    (function(n, t, i) {
      e.exports = t(_e(), tr(), rr(), Gt(), Xe());
    })(Be, function(n) {
      return function() {
        var t = n, i = t.lib, a = i.BlockCipher, s = t.algo;
        const o = 16, h = [
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
        ], c = [
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
        var x = {
          pbox: [],
          sbox: []
        };
        function E(C, k) {
          let A = k >> 24 & 255, S = k >> 16 & 255, T = k >> 8 & 255, M = k & 255, P = C.sbox[0][A] + C.sbox[1][S];
          return P = P ^ C.sbox[2][T], P = P + C.sbox[3][M], P;
        }
        function g(C, k, A) {
          let S = k, T = A, M;
          for (let P = 0; P < o; ++P)
            S = S ^ C.pbox[P], T = E(C, S) ^ T, M = S, S = T, T = M;
          return M = S, S = T, T = M, T = T ^ C.pbox[o], S = S ^ C.pbox[o + 1], { left: S, right: T };
        }
        function B(C, k, A) {
          let S = k, T = A, M;
          for (let P = o + 1; P > 1; --P)
            S = S ^ C.pbox[P], T = E(C, S) ^ T, M = S, S = T, T = M;
          return M = S, S = T, T = M, T = T ^ C.pbox[1], S = S ^ C.pbox[0], { left: S, right: T };
        }
        function v(C, k, A) {
          for (let z = 0; z < 4; z++) {
            C.sbox[z] = [];
            for (let q = 0; q < 256; q++)
              C.sbox[z][q] = c[z][q];
          }
          let S = 0;
          for (let z = 0; z < o + 2; z++)
            C.pbox[z] = h[z] ^ k[S], S++, S >= A && (S = 0);
          let T = 0, M = 0, P = 0;
          for (let z = 0; z < o + 2; z += 2)
            P = g(C, T, M), T = P.left, M = P.right, C.pbox[z] = T, C.pbox[z + 1] = M;
          for (let z = 0; z < 4; z++)
            for (let q = 0; q < 256; q += 2)
              P = g(C, T, M), T = P.left, M = P.right, C.sbox[z][q] = T, C.sbox[z][q + 1] = M;
          return !0;
        }
        var b = s.Blowfish = a.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var C = this._keyPriorReset = this._key, k = C.words, A = C.sigBytes / 4;
              v(x, k, A);
            }
          },
          encryptBlock: function(C, k) {
            var A = g(x, C[k], C[k + 1]);
            C[k] = A.left, C[k + 1] = A.right;
          },
          decryptBlock: function(C, k) {
            var A = B(x, C[k], C[k + 1]);
            C[k] = A.left, C[k + 1] = A.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        t.Blowfish = a._createHelper(b);
      }(), n.Blowfish;
    });
  }(B0)), B0.exports;
}
(function(e, r) {
  (function(n, t, i) {
    e.exports = t(_e(), Bn(), Ql(), eu(), tr(), tu(), rr(), co(), W0(), ru(), fo(), nu(), iu(), au(), K0(), ou(), Gt(), Xe(), su(), lu(), uu(), cu(), fu(), du(), hu(), pu(), xu(), vu(), mu(), yu(), gu(), bu(), Bu(), Eu(), wu());
  })(Be, function(n) {
    return n;
  });
})(uo);
var Cu = uo.exports;
const lt = /* @__PURE__ */ lo(Cu);
function Fu(e, r) {
  e = e.toString();
  var n = lt.enc.Utf8.parse(r), t = lt.enc.Utf8.parse(r);
  return lt.DES.encrypt(
    e,
    n,
    {
      iv: t,
      mode: lt.mode.CBC,
      padding: lt.pad.Pkcs7
    }
  ).ciphertext.toString();
}
function _u(e, r) {
  var n = lt.enc.Utf8.parse(r), t = lt.enc.Utf8.parse(r), i = lt.DES.decrypt({
    ciphertext: lt.enc.Hex.parse(e)
  }, n, {
    iv: t,
    mode: lt.mode.CBC,
    padding: lt.pad.Pkcs7
  });
  return i.toString(lt.enc.Utf8);
}
function Au(e) {
  return lt.SHA256(e).toString();
}
function Du(e) {
  return lt.MD5(e).toString();
}
const Kt = {
  setDES: Fu,
  getDES: _u,
  setSha256: Au,
  setMD5: Du
}, cn = "LJS_TIME_KEY_20231227";
function Su(e) {
  return JSON.parse(sessionStorage.getItem(e));
}
function Tu(e, r) {
  sessionStorage.setItem(e, JSON.stringify(r));
}
function Iu(e) {
  sessionStorage.removeItem(e);
}
function ku() {
  sessionStorage.clear();
}
function Ru(e) {
  const r = JSON.parse(localStorage.getItem(e));
  return r === null ? null : r.time && (r.startTime = Kt.getDES(r.startTime, cn), r.time = Kt.getDES(r.time, cn), (/* @__PURE__ */ new Date()).getTime() - r.startTime > r.time) ? (ho(e), null) : r.value;
}
function Mu(e, r, n = 0) {
  const t = {
    value: r
  };
  n > 0 && (t.startTime = Kt.setDES((/* @__PURE__ */ new Date()).getTime(), cn), t.time = Kt.setDES(n, cn)), localStorage.setItem(e, JSON.stringify(t));
}
function ho(e) {
  localStorage.removeItem(e);
}
function Lu() {
  localStorage.clear();
}
function Pu(e, r = () => {
}) {
  e.commit("SET_token", null), e.commit("SET_userinfo", null), e.commit("SET_apiShake", []), e.commit("SET_permissions", []), e.commit("SET_roles", []), e.commit("SET_routerList", []), e.commit("SET_menuList", []), e.commit("SET_menuOpenList", []), e.commit("SET_menuNowOpen", null), e.commit("SET_menuShrink", !1), r();
}
const po = {
  getSS: Su,
  setSS: Tu,
  delSS: Iu,
  clearSS: ku,
  getLS: Ru,
  setLS: Mu,
  delLS: ho,
  clearLS: Lu,
  clearVuex: Pu
};
var xo = {}, Ir = {};
Ir.byteLength = zu;
Ir.toByteArray = Uu;
Ir.fromByteArray = Vu;
var Tt = [], gt = [], Nu = typeof Uint8Array < "u" ? Uint8Array : Array, E0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var ar = 0, Ou = E0.length; ar < Ou; ++ar)
  Tt[ar] = E0[ar], gt[E0.charCodeAt(ar)] = ar;
gt["-".charCodeAt(0)] = 62;
gt["_".charCodeAt(0)] = 63;
function vo(e) {
  var r = e.length;
  if (r % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var n = e.indexOf("=");
  n === -1 && (n = r);
  var t = n === r ? 0 : 4 - n % 4;
  return [n, t];
}
function zu(e) {
  var r = vo(e), n = r[0], t = r[1];
  return (n + t) * 3 / 4 - t;
}
function $u(e, r, n) {
  return (r + n) * 3 / 4 - n;
}
function Uu(e) {
  var r, n = vo(e), t = n[0], i = n[1], a = new Nu($u(e, t, i)), s = 0, o = i > 0 ? t - 4 : t, h;
  for (h = 0; h < o; h += 4)
    r = gt[e.charCodeAt(h)] << 18 | gt[e.charCodeAt(h + 1)] << 12 | gt[e.charCodeAt(h + 2)] << 6 | gt[e.charCodeAt(h + 3)], a[s++] = r >> 16 & 255, a[s++] = r >> 8 & 255, a[s++] = r & 255;
  return i === 2 && (r = gt[e.charCodeAt(h)] << 2 | gt[e.charCodeAt(h + 1)] >> 4, a[s++] = r & 255), i === 1 && (r = gt[e.charCodeAt(h)] << 10 | gt[e.charCodeAt(h + 1)] << 4 | gt[e.charCodeAt(h + 2)] >> 2, a[s++] = r >> 8 & 255, a[s++] = r & 255), a;
}
function Hu(e) {
  return Tt[e >> 18 & 63] + Tt[e >> 12 & 63] + Tt[e >> 6 & 63] + Tt[e & 63];
}
function qu(e, r, n) {
  for (var t, i = [], a = r; a < n; a += 3)
    t = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(Hu(t));
  return i.join("");
}
function Vu(e) {
  for (var r, n = e.length, t = n % 3, i = [], a = 16383, s = 0, o = n - t; s < o; s += a)
    i.push(qu(e, s, s + a > o ? o : s + a));
  return t === 1 ? (r = e[n - 1], i.push(
    Tt[r >> 2] + Tt[r << 4 & 63] + "=="
  )) : t === 2 && (r = (e[n - 2] << 8) + e[n - 1], i.push(
    Tt[r >> 10] + Tt[r >> 4 & 63] + Tt[r << 2 & 63] + "="
  )), i.join("");
}
var En = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
En.read = function(e, r, n, t, i) {
  var a, s, o = i * 8 - t - 1, h = (1 << o) - 1, c = h >> 1, x = -7, E = n ? i - 1 : 0, g = n ? -1 : 1, B = e[r + E];
  for (E += g, a = B & (1 << -x) - 1, B >>= -x, x += o; x > 0; a = a * 256 + e[r + E], E += g, x -= 8)
    ;
  for (s = a & (1 << -x) - 1, a >>= -x, x += t; x > 0; s = s * 256 + e[r + E], E += g, x -= 8)
    ;
  if (a === 0)
    a = 1 - c;
  else {
    if (a === h)
      return s ? NaN : (B ? -1 : 1) * (1 / 0);
    s = s + Math.pow(2, t), a = a - c;
  }
  return (B ? -1 : 1) * s * Math.pow(2, a - t);
};
En.write = function(e, r, n, t, i, a) {
  var s, o, h, c = a * 8 - i - 1, x = (1 << c) - 1, E = x >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, B = t ? 0 : a - 1, v = t ? 1 : -1, b = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (o = isNaN(r) ? 1 : 0, s = x) : (s = Math.floor(Math.log(r) / Math.LN2), r * (h = Math.pow(2, -s)) < 1 && (s--, h *= 2), s + E >= 1 ? r += g / h : r += g * Math.pow(2, 1 - E), r * h >= 2 && (s++, h /= 2), s + E >= x ? (o = 0, s = x) : s + E >= 1 ? (o = (r * h - 1) * Math.pow(2, i), s = s + E) : (o = r * Math.pow(2, E - 1) * Math.pow(2, i), s = 0)); i >= 8; e[n + B] = o & 255, B += v, o /= 256, i -= 8)
    ;
  for (s = s << i | o, c += i; c > 0; e[n + B] = s & 255, B += v, s /= 256, c -= 8)
    ;
  e[n + B - v] |= b * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const r = Ir, n = En, t = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = o, e.SlowBuffer = A, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i, o.TYPED_ARRAY_SUPPORT = a(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function a() {
    try {
      const y = new Uint8Array(1), l = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(y, l), y.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(o.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.byteOffset;
    }
  });
  function s(y) {
    if (y > i)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
    const l = new Uint8Array(y);
    return Object.setPrototypeOf(l, o.prototype), l;
  }
  function o(y, l, u) {
    if (typeof y == "number") {
      if (typeof l == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return E(y);
    }
    return h(y, l, u);
  }
  o.poolSize = 8192;
  function h(y, l, u) {
    if (typeof y == "string")
      return g(y, l);
    if (ArrayBuffer.isView(y))
      return v(y);
    if (y == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
      );
    if (G(y, ArrayBuffer) || y && G(y.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (G(y, SharedArrayBuffer) || y && G(y.buffer, SharedArrayBuffer)))
      return b(y, l, u);
    if (typeof y == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const _ = y.valueOf && y.valueOf();
    if (_ != null && _ !== y)
      return o.from(_, l, u);
    const R = C(y);
    if (R)
      return R;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof y[Symbol.toPrimitive] == "function")
      return o.from(y[Symbol.toPrimitive]("string"), l, u);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof y
    );
  }
  o.from = function(y, l, u) {
    return h(y, l, u);
  }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
  function c(y) {
    if (typeof y != "number")
      throw new TypeError('"size" argument must be of type number');
    if (y < 0)
      throw new RangeError('The value "' + y + '" is invalid for option "size"');
  }
  function x(y, l, u) {
    return c(y), y <= 0 ? s(y) : l !== void 0 ? typeof u == "string" ? s(y).fill(l, u) : s(y).fill(l) : s(y);
  }
  o.alloc = function(y, l, u) {
    return x(y, l, u);
  };
  function E(y) {
    return c(y), s(y < 0 ? 0 : k(y) | 0);
  }
  o.allocUnsafe = function(y) {
    return E(y);
  }, o.allocUnsafeSlow = function(y) {
    return E(y);
  };
  function g(y, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !o.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    const u = S(y, l) | 0;
    let _ = s(u);
    const R = _.write(y, l);
    return R !== u && (_ = _.slice(0, R)), _;
  }
  function B(y) {
    const l = y.length < 0 ? 0 : k(y.length) | 0, u = s(l);
    for (let _ = 0; _ < l; _ += 1)
      u[_] = y[_] & 255;
    return u;
  }
  function v(y) {
    if (G(y, Uint8Array)) {
      const l = new Uint8Array(y);
      return b(l.buffer, l.byteOffset, l.byteLength);
    }
    return B(y);
  }
  function b(y, l, u) {
    if (l < 0 || y.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (y.byteLength < l + (u || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let _;
    return l === void 0 && u === void 0 ? _ = new Uint8Array(y) : u === void 0 ? _ = new Uint8Array(y, l) : _ = new Uint8Array(y, l, u), Object.setPrototypeOf(_, o.prototype), _;
  }
  function C(y) {
    if (o.isBuffer(y)) {
      const l = k(y.length) | 0, u = s(l);
      return u.length === 0 || y.copy(u, 0, 0, l), u;
    }
    if (y.length !== void 0)
      return typeof y.length != "number" || pe(y.length) ? s(0) : B(y);
    if (y.type === "Buffer" && Array.isArray(y.data))
      return B(y.data);
  }
  function k(y) {
    if (y >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return y | 0;
  }
  function A(y) {
    return +y != y && (y = 0), o.alloc(+y);
  }
  o.isBuffer = function(l) {
    return l != null && l._isBuffer === !0 && l !== o.prototype;
  }, o.compare = function(l, u) {
    if (G(l, Uint8Array) && (l = o.from(l, l.offset, l.byteLength)), G(u, Uint8Array) && (u = o.from(u, u.offset, u.byteLength)), !o.isBuffer(l) || !o.isBuffer(u))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (l === u)
      return 0;
    let _ = l.length, R = u.length;
    for (let H = 0, K = Math.min(_, R); H < K; ++H)
      if (l[H] !== u[H]) {
        _ = l[H], R = u[H];
        break;
      }
    return _ < R ? -1 : R < _ ? 1 : 0;
  }, o.isEncoding = function(l) {
    switch (String(l).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, o.concat = function(l, u) {
    if (!Array.isArray(l))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (l.length === 0)
      return o.alloc(0);
    let _;
    if (u === void 0)
      for (u = 0, _ = 0; _ < l.length; ++_)
        u += l[_].length;
    const R = o.allocUnsafe(u);
    let H = 0;
    for (_ = 0; _ < l.length; ++_) {
      let K = l[_];
      if (G(K, Uint8Array))
        H + K.length > R.length ? (o.isBuffer(K) || (K = o.from(K)), K.copy(R, H)) : Uint8Array.prototype.set.call(
          R,
          K,
          H
        );
      else if (o.isBuffer(K))
        K.copy(R, H);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      H += K.length;
    }
    return R;
  };
  function S(y, l) {
    if (o.isBuffer(y))
      return y.length;
    if (ArrayBuffer.isView(y) || G(y, ArrayBuffer))
      return y.byteLength;
    if (typeof y != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof y
      );
    const u = y.length, _ = arguments.length > 2 && arguments[2] === !0;
    if (!_ && u === 0)
      return 0;
    let R = !1;
    for (; ; )
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return u;
        case "utf8":
        case "utf-8":
          return f(y).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return u * 2;
        case "hex":
          return u >>> 1;
        case "base64":
          return O(y).length;
        default:
          if (R)
            return _ ? -1 : f(y).length;
          l = ("" + l).toLowerCase(), R = !0;
      }
  }
  o.byteLength = S;
  function T(y, l, u) {
    let _ = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((u === void 0 || u > this.length) && (u = this.length), u <= 0) || (u >>>= 0, l >>>= 0, u <= l))
      return "";
    for (y || (y = "utf8"); ; )
      switch (y) {
        case "hex":
          return Ee(this, l, u);
        case "utf8":
        case "utf-8":
          return oe(this, l, u);
        case "ascii":
          return de(this, l, u);
        case "latin1":
        case "binary":
          return he(this, l, u);
        case "base64":
          return j(this, l, u);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ye(this, l, u);
        default:
          if (_)
            throw new TypeError("Unknown encoding: " + y);
          y = (y + "").toLowerCase(), _ = !0;
      }
  }
  o.prototype._isBuffer = !0;
  function M(y, l, u) {
    const _ = y[l];
    y[l] = y[u], y[u] = _;
  }
  o.prototype.swap16 = function() {
    const l = this.length;
    if (l % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let u = 0; u < l; u += 2)
      M(this, u, u + 1);
    return this;
  }, o.prototype.swap32 = function() {
    const l = this.length;
    if (l % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let u = 0; u < l; u += 4)
      M(this, u, u + 3), M(this, u + 1, u + 2);
    return this;
  }, o.prototype.swap64 = function() {
    const l = this.length;
    if (l % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let u = 0; u < l; u += 8)
      M(this, u, u + 7), M(this, u + 1, u + 6), M(this, u + 2, u + 5), M(this, u + 3, u + 4);
    return this;
  }, o.prototype.toString = function() {
    const l = this.length;
    return l === 0 ? "" : arguments.length === 0 ? oe(this, 0, l) : T.apply(this, arguments);
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(l) {
    if (!o.isBuffer(l))
      throw new TypeError("Argument must be a Buffer");
    return this === l ? !0 : o.compare(this, l) === 0;
  }, o.prototype.inspect = function() {
    let l = "";
    const u = e.INSPECT_MAX_BYTES;
    return l = this.toString("hex", 0, u).replace(/(.{2})/g, "$1 ").trim(), this.length > u && (l += " ... "), "<Buffer " + l + ">";
  }, t && (o.prototype[t] = o.prototype.inspect), o.prototype.compare = function(l, u, _, R, H) {
    if (G(l, Uint8Array) && (l = o.from(l, l.offset, l.byteLength)), !o.isBuffer(l))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l
      );
    if (u === void 0 && (u = 0), _ === void 0 && (_ = l ? l.length : 0), R === void 0 && (R = 0), H === void 0 && (H = this.length), u < 0 || _ > l.length || R < 0 || H > this.length)
      throw new RangeError("out of range index");
    if (R >= H && u >= _)
      return 0;
    if (R >= H)
      return -1;
    if (u >= _)
      return 1;
    if (u >>>= 0, _ >>>= 0, R >>>= 0, H >>>= 0, this === l)
      return 0;
    let K = H - R, ve = _ - u;
    const Pe = Math.min(K, ve), ke = this.slice(R, H), Oe = l.slice(u, _);
    for (let Se = 0; Se < Pe; ++Se)
      if (ke[Se] !== Oe[Se]) {
        K = ke[Se], ve = Oe[Se];
        break;
      }
    return K < ve ? -1 : ve < K ? 1 : 0;
  };
  function P(y, l, u, _, R) {
    if (y.length === 0)
      return -1;
    if (typeof u == "string" ? (_ = u, u = 0) : u > 2147483647 ? u = 2147483647 : u < -2147483648 && (u = -2147483648), u = +u, pe(u) && (u = R ? 0 : y.length - 1), u < 0 && (u = y.length + u), u >= y.length) {
      if (R)
        return -1;
      u = y.length - 1;
    } else if (u < 0)
      if (R)
        u = 0;
      else
        return -1;
    if (typeof l == "string" && (l = o.from(l, _)), o.isBuffer(l))
      return l.length === 0 ? -1 : z(y, l, u, _, R);
    if (typeof l == "number")
      return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? R ? Uint8Array.prototype.indexOf.call(y, l, u) : Uint8Array.prototype.lastIndexOf.call(y, l, u) : z(y, [l], u, _, R);
    throw new TypeError("val must be string, number or Buffer");
  }
  function z(y, l, u, _, R) {
    let H = 1, K = y.length, ve = l.length;
    if (_ !== void 0 && (_ = String(_).toLowerCase(), _ === "ucs2" || _ === "ucs-2" || _ === "utf16le" || _ === "utf-16le")) {
      if (y.length < 2 || l.length < 2)
        return -1;
      H = 2, K /= 2, ve /= 2, u /= 2;
    }
    function Pe(Oe, Se) {
      return H === 1 ? Oe[Se] : Oe.readUInt16BE(Se * H);
    }
    let ke;
    if (R) {
      let Oe = -1;
      for (ke = u; ke < K; ke++)
        if (Pe(y, ke) === Pe(l, Oe === -1 ? 0 : ke - Oe)) {
          if (Oe === -1 && (Oe = ke), ke - Oe + 1 === ve)
            return Oe * H;
        } else
          Oe !== -1 && (ke -= ke - Oe), Oe = -1;
    } else
      for (u + ve > K && (u = K - ve), ke = u; ke >= 0; ke--) {
        let Oe = !0;
        for (let Se = 0; Se < ve; Se++)
          if (Pe(y, ke + Se) !== Pe(l, Se)) {
            Oe = !1;
            break;
          }
        if (Oe)
          return ke;
      }
    return -1;
  }
  o.prototype.includes = function(l, u, _) {
    return this.indexOf(l, u, _) !== -1;
  }, o.prototype.indexOf = function(l, u, _) {
    return P(this, l, u, _, !0);
  }, o.prototype.lastIndexOf = function(l, u, _) {
    return P(this, l, u, _, !1);
  };
  function q(y, l, u, _) {
    u = Number(u) || 0;
    const R = y.length - u;
    _ ? (_ = Number(_), _ > R && (_ = R)) : _ = R;
    const H = l.length;
    _ > H / 2 && (_ = H / 2);
    let K;
    for (K = 0; K < _; ++K) {
      const ve = parseInt(l.substr(K * 2, 2), 16);
      if (pe(ve))
        return K;
      y[u + K] = ve;
    }
    return K;
  }
  function ee(y, l, u, _) {
    return W(f(l, y.length - u), y, u, _);
  }
  function N(y, l, u, _) {
    return W(d(l), y, u, _);
  }
  function $(y, l, u, _) {
    return W(O(l), y, u, _);
  }
  function Y(y, l, u, _) {
    return W(I(l, y.length - u), y, u, _);
  }
  o.prototype.write = function(l, u, _, R) {
    if (u === void 0)
      R = "utf8", _ = this.length, u = 0;
    else if (_ === void 0 && typeof u == "string")
      R = u, _ = this.length, u = 0;
    else if (isFinite(u))
      u = u >>> 0, isFinite(_) ? (_ = _ >>> 0, R === void 0 && (R = "utf8")) : (R = _, _ = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const H = this.length - u;
    if ((_ === void 0 || _ > H) && (_ = H), l.length > 0 && (_ < 0 || u < 0) || u > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    R || (R = "utf8");
    let K = !1;
    for (; ; )
      switch (R) {
        case "hex":
          return q(this, l, u, _);
        case "utf8":
        case "utf-8":
          return ee(this, l, u, _);
        case "ascii":
        case "latin1":
        case "binary":
          return N(this, l, u, _);
        case "base64":
          return $(this, l, u, _);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, l, u, _);
        default:
          if (K)
            throw new TypeError("Unknown encoding: " + R);
          R = ("" + R).toLowerCase(), K = !0;
      }
  }, o.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function j(y, l, u) {
    return l === 0 && u === y.length ? r.fromByteArray(y) : r.fromByteArray(y.slice(l, u));
  }
  function oe(y, l, u) {
    u = Math.min(y.length, u);
    const _ = [];
    let R = l;
    for (; R < u; ) {
      const H = y[R];
      let K = null, ve = H > 239 ? 4 : H > 223 ? 3 : H > 191 ? 2 : 1;
      if (R + ve <= u) {
        let Pe, ke, Oe, Se;
        switch (ve) {
          case 1:
            H < 128 && (K = H);
            break;
          case 2:
            Pe = y[R + 1], (Pe & 192) === 128 && (Se = (H & 31) << 6 | Pe & 63, Se > 127 && (K = Se));
            break;
          case 3:
            Pe = y[R + 1], ke = y[R + 2], (Pe & 192) === 128 && (ke & 192) === 128 && (Se = (H & 15) << 12 | (Pe & 63) << 6 | ke & 63, Se > 2047 && (Se < 55296 || Se > 57343) && (K = Se));
            break;
          case 4:
            Pe = y[R + 1], ke = y[R + 2], Oe = y[R + 3], (Pe & 192) === 128 && (ke & 192) === 128 && (Oe & 192) === 128 && (Se = (H & 15) << 18 | (Pe & 63) << 12 | (ke & 63) << 6 | Oe & 63, Se > 65535 && Se < 1114112 && (K = Se));
        }
      }
      K === null ? (K = 65533, ve = 1) : K > 65535 && (K -= 65536, _.push(K >>> 10 & 1023 | 55296), K = 56320 | K & 1023), _.push(K), R += ve;
    }
    return ae(_);
  }
  const ue = 4096;
  function ae(y) {
    const l = y.length;
    if (l <= ue)
      return String.fromCharCode.apply(String, y);
    let u = "", _ = 0;
    for (; _ < l; )
      u += String.fromCharCode.apply(
        String,
        y.slice(_, _ += ue)
      );
    return u;
  }
  function de(y, l, u) {
    let _ = "";
    u = Math.min(y.length, u);
    for (let R = l; R < u; ++R)
      _ += String.fromCharCode(y[R] & 127);
    return _;
  }
  function he(y, l, u) {
    let _ = "";
    u = Math.min(y.length, u);
    for (let R = l; R < u; ++R)
      _ += String.fromCharCode(y[R]);
    return _;
  }
  function Ee(y, l, u) {
    const _ = y.length;
    (!l || l < 0) && (l = 0), (!u || u < 0 || u > _) && (u = _);
    let R = "";
    for (let H = l; H < u; ++H)
      R += X[y[H]];
    return R;
  }
  function ye(y, l, u) {
    const _ = y.slice(l, u);
    let R = "";
    for (let H = 0; H < _.length - 1; H += 2)
      R += String.fromCharCode(_[H] + _[H + 1] * 256);
    return R;
  }
  o.prototype.slice = function(l, u) {
    const _ = this.length;
    l = ~~l, u = u === void 0 ? _ : ~~u, l < 0 ? (l += _, l < 0 && (l = 0)) : l > _ && (l = _), u < 0 ? (u += _, u < 0 && (u = 0)) : u > _ && (u = _), u < l && (u = l);
    const R = this.subarray(l, u);
    return Object.setPrototypeOf(R, o.prototype), R;
  };
  function U(y, l, u) {
    if (y % 1 !== 0 || y < 0)
      throw new RangeError("offset is not uint");
    if (y + l > u)
      throw new RangeError("Trying to access beyond buffer length");
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(l, u, _) {
    l = l >>> 0, u = u >>> 0, _ || U(l, u, this.length);
    let R = this[l], H = 1, K = 0;
    for (; ++K < u && (H *= 256); )
      R += this[l + K] * H;
    return R;
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(l, u, _) {
    l = l >>> 0, u = u >>> 0, _ || U(l, u, this.length);
    let R = this[l + --u], H = 1;
    for (; u > 0 && (H *= 256); )
      R += this[l + --u] * H;
    return R;
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(l, u) {
    return l = l >>> 0, u || U(l, 1, this.length), this[l];
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(l, u) {
    return l = l >>> 0, u || U(l, 2, this.length), this[l] | this[l + 1] << 8;
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(l, u) {
    return l = l >>> 0, u || U(l, 2, this.length), this[l] << 8 | this[l + 1];
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(l, u) {
    return l = l >>> 0, u || U(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(l, u) {
    return l = l >>> 0, u || U(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
  }, o.prototype.readBigUInt64LE = le(function(l) {
    l = l >>> 0, Ae(l, "offset");
    const u = this[l], _ = this[l + 7];
    (u === void 0 || _ === void 0) && Le(l, this.length - 8);
    const R = u + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24, H = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + _ * 2 ** 24;
    return BigInt(R) + (BigInt(H) << BigInt(32));
  }), o.prototype.readBigUInt64BE = le(function(l) {
    l = l >>> 0, Ae(l, "offset");
    const u = this[l], _ = this[l + 7];
    (u === void 0 || _ === void 0) && Le(l, this.length - 8);
    const R = u * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l], H = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + _;
    return (BigInt(R) << BigInt(32)) + BigInt(H);
  }), o.prototype.readIntLE = function(l, u, _) {
    l = l >>> 0, u = u >>> 0, _ || U(l, u, this.length);
    let R = this[l], H = 1, K = 0;
    for (; ++K < u && (H *= 256); )
      R += this[l + K] * H;
    return H *= 128, R >= H && (R -= Math.pow(2, 8 * u)), R;
  }, o.prototype.readIntBE = function(l, u, _) {
    l = l >>> 0, u = u >>> 0, _ || U(l, u, this.length);
    let R = u, H = 1, K = this[l + --R];
    for (; R > 0 && (H *= 256); )
      K += this[l + --R] * H;
    return H *= 128, K >= H && (K -= Math.pow(2, 8 * u)), K;
  }, o.prototype.readInt8 = function(l, u) {
    return l = l >>> 0, u || U(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
  }, o.prototype.readInt16LE = function(l, u) {
    l = l >>> 0, u || U(l, 2, this.length);
    const _ = this[l] | this[l + 1] << 8;
    return _ & 32768 ? _ | 4294901760 : _;
  }, o.prototype.readInt16BE = function(l, u) {
    l = l >>> 0, u || U(l, 2, this.length);
    const _ = this[l + 1] | this[l] << 8;
    return _ & 32768 ? _ | 4294901760 : _;
  }, o.prototype.readInt32LE = function(l, u) {
    return l = l >>> 0, u || U(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  }, o.prototype.readInt32BE = function(l, u) {
    return l = l >>> 0, u || U(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  }, o.prototype.readBigInt64LE = le(function(l) {
    l = l >>> 0, Ae(l, "offset");
    const u = this[l], _ = this[l + 7];
    (u === void 0 || _ === void 0) && Le(l, this.length - 8);
    const R = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (_ << 24);
    return (BigInt(R) << BigInt(32)) + BigInt(u + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24);
  }), o.prototype.readBigInt64BE = le(function(l) {
    l = l >>> 0, Ae(l, "offset");
    const u = this[l], _ = this[l + 7];
    (u === void 0 || _ === void 0) && Le(l, this.length - 8);
    const R = (u << 24) + // Overflow
    this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
    return (BigInt(R) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + _);
  }), o.prototype.readFloatLE = function(l, u) {
    return l = l >>> 0, u || U(l, 4, this.length), n.read(this, l, !0, 23, 4);
  }, o.prototype.readFloatBE = function(l, u) {
    return l = l >>> 0, u || U(l, 4, this.length), n.read(this, l, !1, 23, 4);
  }, o.prototype.readDoubleLE = function(l, u) {
    return l = l >>> 0, u || U(l, 8, this.length), n.read(this, l, !0, 52, 8);
  }, o.prototype.readDoubleBE = function(l, u) {
    return l = l >>> 0, u || U(l, 8, this.length), n.read(this, l, !1, 52, 8);
  };
  function V(y, l, u, _, R, H) {
    if (!o.isBuffer(y))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > R || l < H)
      throw new RangeError('"value" argument is out of bounds');
    if (u + _ > y.length)
      throw new RangeError("Index out of range");
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(l, u, _, R) {
    if (l = +l, u = u >>> 0, _ = _ >>> 0, !R) {
      const ve = Math.pow(2, 8 * _) - 1;
      V(this, l, u, _, ve, 0);
    }
    let H = 1, K = 0;
    for (this[u] = l & 255; ++K < _ && (H *= 256); )
      this[u + K] = l / H & 255;
    return u + _;
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(l, u, _, R) {
    if (l = +l, u = u >>> 0, _ = _ >>> 0, !R) {
      const ve = Math.pow(2, 8 * _) - 1;
      V(this, l, u, _, ve, 0);
    }
    let H = _ - 1, K = 1;
    for (this[u + H] = l & 255; --H >= 0 && (K *= 256); )
      this[u + H] = l / K & 255;
    return u + _;
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 1, 255, 0), this[u] = l & 255, u + 1;
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 2, 65535, 0), this[u] = l & 255, this[u + 1] = l >>> 8, u + 2;
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 2, 65535, 0), this[u] = l >>> 8, this[u + 1] = l & 255, u + 2;
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 4, 4294967295, 0), this[u + 3] = l >>> 24, this[u + 2] = l >>> 16, this[u + 1] = l >>> 8, this[u] = l & 255, u + 4;
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 4, 4294967295, 0), this[u] = l >>> 24, this[u + 1] = l >>> 16, this[u + 2] = l >>> 8, this[u + 3] = l & 255, u + 4;
  };
  function Q(y, l, u, _, R) {
    We(l, _, R, y, u, 7);
    let H = Number(l & BigInt(4294967295));
    y[u++] = H, H = H >> 8, y[u++] = H, H = H >> 8, y[u++] = H, H = H >> 8, y[u++] = H;
    let K = Number(l >> BigInt(32) & BigInt(4294967295));
    return y[u++] = K, K = K >> 8, y[u++] = K, K = K >> 8, y[u++] = K, K = K >> 8, y[u++] = K, u;
  }
  function Z(y, l, u, _, R) {
    We(l, _, R, y, u, 7);
    let H = Number(l & BigInt(4294967295));
    y[u + 7] = H, H = H >> 8, y[u + 6] = H, H = H >> 8, y[u + 5] = H, H = H >> 8, y[u + 4] = H;
    let K = Number(l >> BigInt(32) & BigInt(4294967295));
    return y[u + 3] = K, K = K >> 8, y[u + 2] = K, K = K >> 8, y[u + 1] = K, K = K >> 8, y[u] = K, u + 8;
  }
  o.prototype.writeBigUInt64LE = le(function(l, u = 0) {
    return Q(this, l, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeBigUInt64BE = le(function(l, u = 0) {
    return Z(this, l, u, BigInt(0), BigInt("0xffffffffffffffff"));
  }), o.prototype.writeIntLE = function(l, u, _, R) {
    if (l = +l, u = u >>> 0, !R) {
      const Pe = Math.pow(2, 8 * _ - 1);
      V(this, l, u, _, Pe - 1, -Pe);
    }
    let H = 0, K = 1, ve = 0;
    for (this[u] = l & 255; ++H < _ && (K *= 256); )
      l < 0 && ve === 0 && this[u + H - 1] !== 0 && (ve = 1), this[u + H] = (l / K >> 0) - ve & 255;
    return u + _;
  }, o.prototype.writeIntBE = function(l, u, _, R) {
    if (l = +l, u = u >>> 0, !R) {
      const Pe = Math.pow(2, 8 * _ - 1);
      V(this, l, u, _, Pe - 1, -Pe);
    }
    let H = _ - 1, K = 1, ve = 0;
    for (this[u + H] = l & 255; --H >= 0 && (K *= 256); )
      l < 0 && ve === 0 && this[u + H + 1] !== 0 && (ve = 1), this[u + H] = (l / K >> 0) - ve & 255;
    return u + _;
  }, o.prototype.writeInt8 = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[u] = l & 255, u + 1;
  }, o.prototype.writeInt16LE = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 2, 32767, -32768), this[u] = l & 255, this[u + 1] = l >>> 8, u + 2;
  }, o.prototype.writeInt16BE = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 2, 32767, -32768), this[u] = l >>> 8, this[u + 1] = l & 255, u + 2;
  }, o.prototype.writeInt32LE = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 4, 2147483647, -2147483648), this[u] = l & 255, this[u + 1] = l >>> 8, this[u + 2] = l >>> 16, this[u + 3] = l >>> 24, u + 4;
  }, o.prototype.writeInt32BE = function(l, u, _) {
    return l = +l, u = u >>> 0, _ || V(this, l, u, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[u] = l >>> 24, this[u + 1] = l >>> 16, this[u + 2] = l >>> 8, this[u + 3] = l & 255, u + 4;
  }, o.prototype.writeBigInt64LE = le(function(l, u = 0) {
    return Q(this, l, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), o.prototype.writeBigInt64BE = le(function(l, u = 0) {
    return Z(this, l, u, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function Ce(y, l, u, _, R, H) {
    if (u + _ > y.length)
      throw new RangeError("Index out of range");
    if (u < 0)
      throw new RangeError("Index out of range");
  }
  function we(y, l, u, _, R) {
    return l = +l, u = u >>> 0, R || Ce(y, l, u, 4), n.write(y, l, u, _, 23, 4), u + 4;
  }
  o.prototype.writeFloatLE = function(l, u, _) {
    return we(this, l, u, !0, _);
  }, o.prototype.writeFloatBE = function(l, u, _) {
    return we(this, l, u, !1, _);
  };
  function He(y, l, u, _, R) {
    return l = +l, u = u >>> 0, R || Ce(y, l, u, 8), n.write(y, l, u, _, 52, 8), u + 8;
  }
  o.prototype.writeDoubleLE = function(l, u, _) {
    return He(this, l, u, !0, _);
  }, o.prototype.writeDoubleBE = function(l, u, _) {
    return He(this, l, u, !1, _);
  }, o.prototype.copy = function(l, u, _, R) {
    if (!o.isBuffer(l))
      throw new TypeError("argument should be a Buffer");
    if (_ || (_ = 0), !R && R !== 0 && (R = this.length), u >= l.length && (u = l.length), u || (u = 0), R > 0 && R < _ && (R = _), R === _ || l.length === 0 || this.length === 0)
      return 0;
    if (u < 0)
      throw new RangeError("targetStart out of bounds");
    if (_ < 0 || _ >= this.length)
      throw new RangeError("Index out of range");
    if (R < 0)
      throw new RangeError("sourceEnd out of bounds");
    R > this.length && (R = this.length), l.length - u < R - _ && (R = l.length - u + _);
    const H = R - _;
    return this === l && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(u, _, R) : Uint8Array.prototype.set.call(
      l,
      this.subarray(_, R),
      u
    ), H;
  }, o.prototype.fill = function(l, u, _, R) {
    if (typeof l == "string") {
      if (typeof u == "string" ? (R = u, u = 0, _ = this.length) : typeof _ == "string" && (R = _, _ = this.length), R !== void 0 && typeof R != "string")
        throw new TypeError("encoding must be a string");
      if (typeof R == "string" && !o.isEncoding(R))
        throw new TypeError("Unknown encoding: " + R);
      if (l.length === 1) {
        const K = l.charCodeAt(0);
        (R === "utf8" && K < 128 || R === "latin1") && (l = K);
      }
    } else
      typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
    if (u < 0 || this.length < u || this.length < _)
      throw new RangeError("Out of range index");
    if (_ <= u)
      return this;
    u = u >>> 0, _ = _ === void 0 ? this.length : _ >>> 0, l || (l = 0);
    let H;
    if (typeof l == "number")
      for (H = u; H < _; ++H)
        this[H] = l;
    else {
      const K = o.isBuffer(l) ? l : o.from(l, R), ve = K.length;
      if (ve === 0)
        throw new TypeError('The value "' + l + '" is invalid for argument "value"');
      for (H = 0; H < _ - u; ++H)
        this[H + u] = K[H % ve];
    }
    return this;
  };
  const fe = {};
  function ze(y, l, u) {
    fe[y] = class extends u {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: l.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${y}]`, this.stack, delete this.name;
      }
      get code() {
        return y;
      }
      set code(R) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: R,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${y}]: ${this.message}`;
      }
    };
  }
  ze(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(y) {
      return y ? `${y} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), ze(
    "ERR_INVALID_ARG_TYPE",
    function(y, l) {
      return `The "${y}" argument must be of type number. Received type ${typeof l}`;
    },
    TypeError
  ), ze(
    "ERR_OUT_OF_RANGE",
    function(y, l, u) {
      let _ = `The value of "${y}" is out of range.`, R = u;
      return Number.isInteger(u) && Math.abs(u) > 2 ** 32 ? R = Ze(String(u)) : typeof u == "bigint" && (R = String(u), (u > BigInt(2) ** BigInt(32) || u < -(BigInt(2) ** BigInt(32))) && (R = Ze(R)), R += "n"), _ += ` It must be ${l}. Received ${R}`, _;
    },
    RangeError
  );
  function Ze(y) {
    let l = "", u = y.length;
    const _ = y[0] === "-" ? 1 : 0;
    for (; u >= _ + 4; u -= 3)
      l = `_${y.slice(u - 3, u)}${l}`;
    return `${y.slice(0, u)}${l}`;
  }
  function dt(y, l, u) {
    Ae(l, "offset"), (y[l] === void 0 || y[l + u] === void 0) && Le(l, y.length - (u + 1));
  }
  function We(y, l, u, _, R, H) {
    if (y > u || y < l) {
      const K = typeof l == "bigint" ? "n" : "";
      let ve;
      throw H > 3 ? l === 0 || l === BigInt(0) ? ve = `>= 0${K} and < 2${K} ** ${(H + 1) * 8}${K}` : ve = `>= -(2${K} ** ${(H + 1) * 8 - 1}${K}) and < 2 ** ${(H + 1) * 8 - 1}${K}` : ve = `>= ${l}${K} and <= ${u}${K}`, new fe.ERR_OUT_OF_RANGE("value", ve, y);
    }
    dt(_, R, H);
  }
  function Ae(y, l) {
    if (typeof y != "number")
      throw new fe.ERR_INVALID_ARG_TYPE(l, "number", y);
  }
  function Le(y, l, u) {
    throw Math.floor(y) !== y ? (Ae(y, u), new fe.ERR_OUT_OF_RANGE(u || "offset", "an integer", y)) : l < 0 ? new fe.ERR_BUFFER_OUT_OF_BOUNDS() : new fe.ERR_OUT_OF_RANGE(
      u || "offset",
      `>= ${u ? 1 : 0} and <= ${l}`,
      y
    );
  }
  const ht = /[^+/0-9A-Za-z-_]/g;
  function F(y) {
    if (y = y.split("=")[0], y = y.trim().replace(ht, ""), y.length < 2)
      return "";
    for (; y.length % 4 !== 0; )
      y = y + "=";
    return y;
  }
  function f(y, l) {
    l = l || 1 / 0;
    let u;
    const _ = y.length;
    let R = null;
    const H = [];
    for (let K = 0; K < _; ++K) {
      if (u = y.charCodeAt(K), u > 55295 && u < 57344) {
        if (!R) {
          if (u > 56319) {
            (l -= 3) > -1 && H.push(239, 191, 189);
            continue;
          } else if (K + 1 === _) {
            (l -= 3) > -1 && H.push(239, 191, 189);
            continue;
          }
          R = u;
          continue;
        }
        if (u < 56320) {
          (l -= 3) > -1 && H.push(239, 191, 189), R = u;
          continue;
        }
        u = (R - 55296 << 10 | u - 56320) + 65536;
      } else
        R && (l -= 3) > -1 && H.push(239, 191, 189);
      if (R = null, u < 128) {
        if ((l -= 1) < 0)
          break;
        H.push(u);
      } else if (u < 2048) {
        if ((l -= 2) < 0)
          break;
        H.push(
          u >> 6 | 192,
          u & 63 | 128
        );
      } else if (u < 65536) {
        if ((l -= 3) < 0)
          break;
        H.push(
          u >> 12 | 224,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else if (u < 1114112) {
        if ((l -= 4) < 0)
          break;
        H.push(
          u >> 18 | 240,
          u >> 12 & 63 | 128,
          u >> 6 & 63 | 128,
          u & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return H;
  }
  function d(y) {
    const l = [];
    for (let u = 0; u < y.length; ++u)
      l.push(y.charCodeAt(u) & 255);
    return l;
  }
  function I(y, l) {
    let u, _, R;
    const H = [];
    for (let K = 0; K < y.length && !((l -= 2) < 0); ++K)
      u = y.charCodeAt(K), _ = u >> 8, R = u % 256, H.push(R), H.push(_);
    return H;
  }
  function O(y) {
    return r.toByteArray(F(y));
  }
  function W(y, l, u, _) {
    let R;
    for (R = 0; R < _ && !(R + u >= l.length || R >= y.length); ++R)
      l[R + u] = y[R];
    return R;
  }
  function G(y, l) {
    return y instanceof l || y != null && y.constructor != null && y.constructor.name != null && y.constructor.name === l.name;
  }
  function pe(y) {
    return y !== y;
  }
  const X = function() {
    const y = "0123456789abcdef", l = new Array(256);
    for (let u = 0; u < 16; ++u) {
      const _ = u * 16;
      for (let R = 0; R < 16; ++R)
        l[_ + R] = y[u] + y[R];
    }
    return l;
  }();
  function le(y) {
    return typeof BigInt > "u" ? De : y;
  }
  function De() {
    throw new Error("BigInt not supported");
  }
})(xo);
var Yu = xo.Buffer, Wu = function(e) {
  if (e instanceof Uint8Array) {
    if (e.byteOffset === 0 && e.byteLength === e.buffer.byteLength)
      return e.buffer;
    if (typeof e.buffer.slice == "function")
      return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
  }
  if (Yu.isBuffer(e)) {
    for (var r = new Uint8Array(e.length), n = e.length, t = 0; t < n; t++)
      r[t] = e[t];
    return r.buffer;
  } else
    throw new Error("Argument must be a Buffer");
};
const _r = /* @__PURE__ */ lo(Wu);
var be = {};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  var r = Ir, n = En, t = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = o, e.SlowBuffer = A, e.INSPECT_MAX_BYTES = 50;
  var i = 2147483647;
  e.kMaxLength = i, o.TYPED_ARRAY_SUPPORT = a(), !o.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function a() {
    try {
      var F = new Uint8Array(1), f = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(f, Uint8Array.prototype), Object.setPrototypeOf(F, f), F.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(o.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(o.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (o.isBuffer(this))
        return this.byteOffset;
    }
  });
  function s(F) {
    if (F > i)
      throw new RangeError('The value "' + F + '" is invalid for option "size"');
    var f = new Uint8Array(F);
    return Object.setPrototypeOf(f, o.prototype), f;
  }
  function o(F, f, d) {
    if (typeof F == "number") {
      if (typeof f == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return E(F);
    }
    return h(F, f, d);
  }
  o.poolSize = 8192;
  function h(F, f, d) {
    if (typeof F == "string")
      return g(F, f);
    if (ArrayBuffer.isView(F))
      return v(F);
    if (F == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof F
      );
    if (Ae(F, ArrayBuffer) || F && Ae(F.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Ae(F, SharedArrayBuffer) || F && Ae(F.buffer, SharedArrayBuffer)))
      return b(F, f, d);
    if (typeof F == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    var I = F.valueOf && F.valueOf();
    if (I != null && I !== F)
      return o.from(I, f, d);
    var O = C(F);
    if (O)
      return O;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof F[Symbol.toPrimitive] == "function")
      return o.from(
        F[Symbol.toPrimitive]("string"),
        f,
        d
      );
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof F
    );
  }
  o.from = function(F, f, d) {
    return h(F, f, d);
  }, Object.setPrototypeOf(o.prototype, Uint8Array.prototype), Object.setPrototypeOf(o, Uint8Array);
  function c(F) {
    if (typeof F != "number")
      throw new TypeError('"size" argument must be of type number');
    if (F < 0)
      throw new RangeError('The value "' + F + '" is invalid for option "size"');
  }
  function x(F, f, d) {
    return c(F), F <= 0 ? s(F) : f !== void 0 ? typeof d == "string" ? s(F).fill(f, d) : s(F).fill(f) : s(F);
  }
  o.alloc = function(F, f, d) {
    return x(F, f, d);
  };
  function E(F) {
    return c(F), s(F < 0 ? 0 : k(F) | 0);
  }
  o.allocUnsafe = function(F) {
    return E(F);
  }, o.allocUnsafeSlow = function(F) {
    return E(F);
  };
  function g(F, f) {
    if ((typeof f != "string" || f === "") && (f = "utf8"), !o.isEncoding(f))
      throw new TypeError("Unknown encoding: " + f);
    var d = S(F, f) | 0, I = s(d), O = I.write(F, f);
    return O !== d && (I = I.slice(0, O)), I;
  }
  function B(F) {
    for (var f = F.length < 0 ? 0 : k(F.length) | 0, d = s(f), I = 0; I < f; I += 1)
      d[I] = F[I] & 255;
    return d;
  }
  function v(F) {
    if (Ae(F, Uint8Array)) {
      var f = new Uint8Array(F);
      return b(f.buffer, f.byteOffset, f.byteLength);
    }
    return B(F);
  }
  function b(F, f, d) {
    if (f < 0 || F.byteLength < f)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (F.byteLength < f + (d || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    var I;
    return f === void 0 && d === void 0 ? I = new Uint8Array(F) : d === void 0 ? I = new Uint8Array(F, f) : I = new Uint8Array(F, f, d), Object.setPrototypeOf(I, o.prototype), I;
  }
  function C(F) {
    if (o.isBuffer(F)) {
      var f = k(F.length) | 0, d = s(f);
      return d.length === 0 || F.copy(d, 0, 0, f), d;
    }
    if (F.length !== void 0)
      return typeof F.length != "number" || Le(F.length) ? s(0) : B(F);
    if (F.type === "Buffer" && Array.isArray(F.data))
      return B(F.data);
  }
  function k(F) {
    if (F >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return F | 0;
  }
  function A(F) {
    return +F != F && (F = 0), o.alloc(+F);
  }
  o.isBuffer = function(f) {
    return f != null && f._isBuffer === !0 && f !== o.prototype;
  }, o.compare = function(f, d) {
    if (Ae(f, Uint8Array) && (f = o.from(f, f.offset, f.byteLength)), Ae(d, Uint8Array) && (d = o.from(d, d.offset, d.byteLength)), !o.isBuffer(f) || !o.isBuffer(d))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (f === d)
      return 0;
    for (var I = f.length, O = d.length, W = 0, G = Math.min(I, O); W < G; ++W)
      if (f[W] !== d[W]) {
        I = f[W], O = d[W];
        break;
      }
    return I < O ? -1 : O < I ? 1 : 0;
  }, o.isEncoding = function(f) {
    switch (String(f).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, o.concat = function(f, d) {
    if (!Array.isArray(f))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (f.length === 0)
      return o.alloc(0);
    var I;
    if (d === void 0)
      for (d = 0, I = 0; I < f.length; ++I)
        d += f[I].length;
    var O = o.allocUnsafe(d), W = 0;
    for (I = 0; I < f.length; ++I) {
      var G = f[I];
      if (Ae(G, Uint8Array))
        W + G.length > O.length ? o.from(G).copy(O, W) : Uint8Array.prototype.set.call(
          O,
          G,
          W
        );
      else if (o.isBuffer(G))
        G.copy(O, W);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      W += G.length;
    }
    return O;
  };
  function S(F, f) {
    if (o.isBuffer(F))
      return F.length;
    if (ArrayBuffer.isView(F) || Ae(F, ArrayBuffer))
      return F.byteLength;
    if (typeof F != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof F
      );
    var d = F.length, I = arguments.length > 2 && arguments[2] === !0;
    if (!I && d === 0)
      return 0;
    for (var O = !1; ; )
      switch (f) {
        case "ascii":
        case "latin1":
        case "binary":
          return d;
        case "utf8":
        case "utf-8":
          return fe(F).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return d * 2;
        case "hex":
          return d >>> 1;
        case "base64":
          return dt(F).length;
        default:
          if (O)
            return I ? -1 : fe(F).length;
          f = ("" + f).toLowerCase(), O = !0;
      }
  }
  o.byteLength = S;
  function T(F, f, d) {
    var I = !1;
    if ((f === void 0 || f < 0) && (f = 0), f > this.length || ((d === void 0 || d > this.length) && (d = this.length), d <= 0) || (d >>>= 0, f >>>= 0, d <= f))
      return "";
    for (F || (F = "utf8"); ; )
      switch (F) {
        case "hex":
          return Ee(this, f, d);
        case "utf8":
        case "utf-8":
          return oe(this, f, d);
        case "ascii":
          return de(this, f, d);
        case "latin1":
        case "binary":
          return he(this, f, d);
        case "base64":
          return j(this, f, d);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ye(this, f, d);
        default:
          if (I)
            throw new TypeError("Unknown encoding: " + F);
          F = (F + "").toLowerCase(), I = !0;
      }
  }
  o.prototype._isBuffer = !0;
  function M(F, f, d) {
    var I = F[f];
    F[f] = F[d], F[d] = I;
  }
  o.prototype.swap16 = function() {
    var f = this.length;
    if (f % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var d = 0; d < f; d += 2)
      M(this, d, d + 1);
    return this;
  }, o.prototype.swap32 = function() {
    var f = this.length;
    if (f % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var d = 0; d < f; d += 4)
      M(this, d, d + 3), M(this, d + 1, d + 2);
    return this;
  }, o.prototype.swap64 = function() {
    var f = this.length;
    if (f % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var d = 0; d < f; d += 8)
      M(this, d, d + 7), M(this, d + 1, d + 6), M(this, d + 2, d + 5), M(this, d + 3, d + 4);
    return this;
  }, o.prototype.toString = function() {
    var f = this.length;
    return f === 0 ? "" : arguments.length === 0 ? oe(this, 0, f) : T.apply(this, arguments);
  }, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(f) {
    if (!o.isBuffer(f))
      throw new TypeError("Argument must be a Buffer");
    return this === f ? !0 : o.compare(this, f) === 0;
  }, o.prototype.inspect = function() {
    var f = "", d = e.INSPECT_MAX_BYTES;
    return f = this.toString("hex", 0, d).replace(/(.{2})/g, "$1 ").trim(), this.length > d && (f += " ... "), "<Buffer " + f + ">";
  }, t && (o.prototype[t] = o.prototype.inspect), o.prototype.compare = function(f, d, I, O, W) {
    if (Ae(f, Uint8Array) && (f = o.from(f, f.offset, f.byteLength)), !o.isBuffer(f))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof f
      );
    if (d === void 0 && (d = 0), I === void 0 && (I = f ? f.length : 0), O === void 0 && (O = 0), W === void 0 && (W = this.length), d < 0 || I > f.length || O < 0 || W > this.length)
      throw new RangeError("out of range index");
    if (O >= W && d >= I)
      return 0;
    if (O >= W)
      return -1;
    if (d >= I)
      return 1;
    if (d >>>= 0, I >>>= 0, O >>>= 0, W >>>= 0, this === f)
      return 0;
    for (var G = W - O, pe = I - d, X = Math.min(G, pe), le = this.slice(O, W), De = f.slice(d, I), y = 0; y < X; ++y)
      if (le[y] !== De[y]) {
        G = le[y], pe = De[y];
        break;
      }
    return G < pe ? -1 : pe < G ? 1 : 0;
  };
  function P(F, f, d, I, O) {
    if (F.length === 0)
      return -1;
    if (typeof d == "string" ? (I = d, d = 0) : d > 2147483647 ? d = 2147483647 : d < -2147483648 && (d = -2147483648), d = +d, Le(d) && (d = O ? 0 : F.length - 1), d < 0 && (d = F.length + d), d >= F.length) {
      if (O)
        return -1;
      d = F.length - 1;
    } else if (d < 0)
      if (O)
        d = 0;
      else
        return -1;
    if (typeof f == "string" && (f = o.from(f, I)), o.isBuffer(f))
      return f.length === 0 ? -1 : z(F, f, d, I, O);
    if (typeof f == "number")
      return f = f & 255, typeof Uint8Array.prototype.indexOf == "function" ? O ? Uint8Array.prototype.indexOf.call(F, f, d) : Uint8Array.prototype.lastIndexOf.call(F, f, d) : z(F, [f], d, I, O);
    throw new TypeError("val must be string, number or Buffer");
  }
  function z(F, f, d, I, O) {
    var W = 1, G = F.length, pe = f.length;
    if (I !== void 0 && (I = String(I).toLowerCase(), I === "ucs2" || I === "ucs-2" || I === "utf16le" || I === "utf-16le")) {
      if (F.length < 2 || f.length < 2)
        return -1;
      W = 2, G /= 2, pe /= 2, d /= 2;
    }
    function X(u, _) {
      return W === 1 ? u[_] : u.readUInt16BE(_ * W);
    }
    var le;
    if (O) {
      var De = -1;
      for (le = d; le < G; le++)
        if (X(F, le) === X(f, De === -1 ? 0 : le - De)) {
          if (De === -1 && (De = le), le - De + 1 === pe)
            return De * W;
        } else
          De !== -1 && (le -= le - De), De = -1;
    } else
      for (d + pe > G && (d = G - pe), le = d; le >= 0; le--) {
        for (var y = !0, l = 0; l < pe; l++)
          if (X(F, le + l) !== X(f, l)) {
            y = !1;
            break;
          }
        if (y)
          return le;
      }
    return -1;
  }
  o.prototype.includes = function(f, d, I) {
    return this.indexOf(f, d, I) !== -1;
  }, o.prototype.indexOf = function(f, d, I) {
    return P(this, f, d, I, !0);
  }, o.prototype.lastIndexOf = function(f, d, I) {
    return P(this, f, d, I, !1);
  };
  function q(F, f, d, I) {
    d = Number(d) || 0;
    var O = F.length - d;
    I ? (I = Number(I), I > O && (I = O)) : I = O;
    var W = f.length;
    I > W / 2 && (I = W / 2);
    for (var G = 0; G < I; ++G) {
      var pe = parseInt(f.substr(G * 2, 2), 16);
      if (Le(pe))
        return G;
      F[d + G] = pe;
    }
    return G;
  }
  function ee(F, f, d, I) {
    return We(fe(f, F.length - d), F, d, I);
  }
  function N(F, f, d, I) {
    return We(ze(f), F, d, I);
  }
  function $(F, f, d, I) {
    return We(dt(f), F, d, I);
  }
  function Y(F, f, d, I) {
    return We(Ze(f, F.length - d), F, d, I);
  }
  o.prototype.write = function(f, d, I, O) {
    if (d === void 0)
      O = "utf8", I = this.length, d = 0;
    else if (I === void 0 && typeof d == "string")
      O = d, I = this.length, d = 0;
    else if (isFinite(d))
      d = d >>> 0, isFinite(I) ? (I = I >>> 0, O === void 0 && (O = "utf8")) : (O = I, I = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    var W = this.length - d;
    if ((I === void 0 || I > W) && (I = W), f.length > 0 && (I < 0 || d < 0) || d > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    O || (O = "utf8");
    for (var G = !1; ; )
      switch (O) {
        case "hex":
          return q(this, f, d, I);
        case "utf8":
        case "utf-8":
          return ee(this, f, d, I);
        case "ascii":
        case "latin1":
        case "binary":
          return N(this, f, d, I);
        case "base64":
          return $(this, f, d, I);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Y(this, f, d, I);
        default:
          if (G)
            throw new TypeError("Unknown encoding: " + O);
          O = ("" + O).toLowerCase(), G = !0;
      }
  }, o.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function j(F, f, d) {
    return f === 0 && d === F.length ? r.fromByteArray(F) : r.fromByteArray(F.slice(f, d));
  }
  function oe(F, f, d) {
    d = Math.min(F.length, d);
    for (var I = [], O = f; O < d; ) {
      var W = F[O], G = null, pe = W > 239 ? 4 : W > 223 ? 3 : W > 191 ? 2 : 1;
      if (O + pe <= d) {
        var X, le, De, y;
        switch (pe) {
          case 1:
            W < 128 && (G = W);
            break;
          case 2:
            X = F[O + 1], (X & 192) === 128 && (y = (W & 31) << 6 | X & 63, y > 127 && (G = y));
            break;
          case 3:
            X = F[O + 1], le = F[O + 2], (X & 192) === 128 && (le & 192) === 128 && (y = (W & 15) << 12 | (X & 63) << 6 | le & 63, y > 2047 && (y < 55296 || y > 57343) && (G = y));
            break;
          case 4:
            X = F[O + 1], le = F[O + 2], De = F[O + 3], (X & 192) === 128 && (le & 192) === 128 && (De & 192) === 128 && (y = (W & 15) << 18 | (X & 63) << 12 | (le & 63) << 6 | De & 63, y > 65535 && y < 1114112 && (G = y));
        }
      }
      G === null ? (G = 65533, pe = 1) : G > 65535 && (G -= 65536, I.push(G >>> 10 & 1023 | 55296), G = 56320 | G & 1023), I.push(G), O += pe;
    }
    return ae(I);
  }
  var ue = 4096;
  function ae(F) {
    var f = F.length;
    if (f <= ue)
      return String.fromCharCode.apply(String, F);
    for (var d = "", I = 0; I < f; )
      d += String.fromCharCode.apply(
        String,
        F.slice(I, I += ue)
      );
    return d;
  }
  function de(F, f, d) {
    var I = "";
    d = Math.min(F.length, d);
    for (var O = f; O < d; ++O)
      I += String.fromCharCode(F[O] & 127);
    return I;
  }
  function he(F, f, d) {
    var I = "";
    d = Math.min(F.length, d);
    for (var O = f; O < d; ++O)
      I += String.fromCharCode(F[O]);
    return I;
  }
  function Ee(F, f, d) {
    var I = F.length;
    (!f || f < 0) && (f = 0), (!d || d < 0 || d > I) && (d = I);
    for (var O = "", W = f; W < d; ++W)
      O += ht[F[W]];
    return O;
  }
  function ye(F, f, d) {
    for (var I = F.slice(f, d), O = "", W = 0; W < I.length - 1; W += 2)
      O += String.fromCharCode(I[W] + I[W + 1] * 256);
    return O;
  }
  o.prototype.slice = function(f, d) {
    var I = this.length;
    f = ~~f, d = d === void 0 ? I : ~~d, f < 0 ? (f += I, f < 0 && (f = 0)) : f > I && (f = I), d < 0 ? (d += I, d < 0 && (d = 0)) : d > I && (d = I), d < f && (d = f);
    var O = this.subarray(f, d);
    return Object.setPrototypeOf(O, o.prototype), O;
  };
  function U(F, f, d) {
    if (F % 1 !== 0 || F < 0)
      throw new RangeError("offset is not uint");
    if (F + f > d)
      throw new RangeError("Trying to access beyond buffer length");
  }
  o.prototype.readUintLE = o.prototype.readUIntLE = function(f, d, I) {
    f = f >>> 0, d = d >>> 0, I || U(f, d, this.length);
    for (var O = this[f], W = 1, G = 0; ++G < d && (W *= 256); )
      O += this[f + G] * W;
    return O;
  }, o.prototype.readUintBE = o.prototype.readUIntBE = function(f, d, I) {
    f = f >>> 0, d = d >>> 0, I || U(f, d, this.length);
    for (var O = this[f + --d], W = 1; d > 0 && (W *= 256); )
      O += this[f + --d] * W;
    return O;
  }, o.prototype.readUint8 = o.prototype.readUInt8 = function(f, d) {
    return f = f >>> 0, d || U(f, 1, this.length), this[f];
  }, o.prototype.readUint16LE = o.prototype.readUInt16LE = function(f, d) {
    return f = f >>> 0, d || U(f, 2, this.length), this[f] | this[f + 1] << 8;
  }, o.prototype.readUint16BE = o.prototype.readUInt16BE = function(f, d) {
    return f = f >>> 0, d || U(f, 2, this.length), this[f] << 8 | this[f + 1];
  }, o.prototype.readUint32LE = o.prototype.readUInt32LE = function(f, d) {
    return f = f >>> 0, d || U(f, 4, this.length), (this[f] | this[f + 1] << 8 | this[f + 2] << 16) + this[f + 3] * 16777216;
  }, o.prototype.readUint32BE = o.prototype.readUInt32BE = function(f, d) {
    return f = f >>> 0, d || U(f, 4, this.length), this[f] * 16777216 + (this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3]);
  }, o.prototype.readIntLE = function(f, d, I) {
    f = f >>> 0, d = d >>> 0, I || U(f, d, this.length);
    for (var O = this[f], W = 1, G = 0; ++G < d && (W *= 256); )
      O += this[f + G] * W;
    return W *= 128, O >= W && (O -= Math.pow(2, 8 * d)), O;
  }, o.prototype.readIntBE = function(f, d, I) {
    f = f >>> 0, d = d >>> 0, I || U(f, d, this.length);
    for (var O = d, W = 1, G = this[f + --O]; O > 0 && (W *= 256); )
      G += this[f + --O] * W;
    return W *= 128, G >= W && (G -= Math.pow(2, 8 * d)), G;
  }, o.prototype.readInt8 = function(f, d) {
    return f = f >>> 0, d || U(f, 1, this.length), this[f] & 128 ? (255 - this[f] + 1) * -1 : this[f];
  }, o.prototype.readInt16LE = function(f, d) {
    f = f >>> 0, d || U(f, 2, this.length);
    var I = this[f] | this[f + 1] << 8;
    return I & 32768 ? I | 4294901760 : I;
  }, o.prototype.readInt16BE = function(f, d) {
    f = f >>> 0, d || U(f, 2, this.length);
    var I = this[f + 1] | this[f] << 8;
    return I & 32768 ? I | 4294901760 : I;
  }, o.prototype.readInt32LE = function(f, d) {
    return f = f >>> 0, d || U(f, 4, this.length), this[f] | this[f + 1] << 8 | this[f + 2] << 16 | this[f + 3] << 24;
  }, o.prototype.readInt32BE = function(f, d) {
    return f = f >>> 0, d || U(f, 4, this.length), this[f] << 24 | this[f + 1] << 16 | this[f + 2] << 8 | this[f + 3];
  }, o.prototype.readFloatLE = function(f, d) {
    return f = f >>> 0, d || U(f, 4, this.length), n.read(this, f, !0, 23, 4);
  }, o.prototype.readFloatBE = function(f, d) {
    return f = f >>> 0, d || U(f, 4, this.length), n.read(this, f, !1, 23, 4);
  }, o.prototype.readDoubleLE = function(f, d) {
    return f = f >>> 0, d || U(f, 8, this.length), n.read(this, f, !0, 52, 8);
  }, o.prototype.readDoubleBE = function(f, d) {
    return f = f >>> 0, d || U(f, 8, this.length), n.read(this, f, !1, 52, 8);
  };
  function V(F, f, d, I, O, W) {
    if (!o.isBuffer(F))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (f > O || f < W)
      throw new RangeError('"value" argument is out of bounds');
    if (d + I > F.length)
      throw new RangeError("Index out of range");
  }
  o.prototype.writeUintLE = o.prototype.writeUIntLE = function(f, d, I, O) {
    if (f = +f, d = d >>> 0, I = I >>> 0, !O) {
      var W = Math.pow(2, 8 * I) - 1;
      V(this, f, d, I, W, 0);
    }
    var G = 1, pe = 0;
    for (this[d] = f & 255; ++pe < I && (G *= 256); )
      this[d + pe] = f / G & 255;
    return d + I;
  }, o.prototype.writeUintBE = o.prototype.writeUIntBE = function(f, d, I, O) {
    if (f = +f, d = d >>> 0, I = I >>> 0, !O) {
      var W = Math.pow(2, 8 * I) - 1;
      V(this, f, d, I, W, 0);
    }
    var G = I - 1, pe = 1;
    for (this[d + G] = f & 255; --G >= 0 && (pe *= 256); )
      this[d + G] = f / pe & 255;
    return d + I;
  }, o.prototype.writeUint8 = o.prototype.writeUInt8 = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 1, 255, 0), this[d] = f & 255, d + 1;
  }, o.prototype.writeUint16LE = o.prototype.writeUInt16LE = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 2, 65535, 0), this[d] = f & 255, this[d + 1] = f >>> 8, d + 2;
  }, o.prototype.writeUint16BE = o.prototype.writeUInt16BE = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 2, 65535, 0), this[d] = f >>> 8, this[d + 1] = f & 255, d + 2;
  }, o.prototype.writeUint32LE = o.prototype.writeUInt32LE = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 4, 4294967295, 0), this[d + 3] = f >>> 24, this[d + 2] = f >>> 16, this[d + 1] = f >>> 8, this[d] = f & 255, d + 4;
  }, o.prototype.writeUint32BE = o.prototype.writeUInt32BE = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 4, 4294967295, 0), this[d] = f >>> 24, this[d + 1] = f >>> 16, this[d + 2] = f >>> 8, this[d + 3] = f & 255, d + 4;
  }, o.prototype.writeIntLE = function(f, d, I, O) {
    if (f = +f, d = d >>> 0, !O) {
      var W = Math.pow(2, 8 * I - 1);
      V(this, f, d, I, W - 1, -W);
    }
    var G = 0, pe = 1, X = 0;
    for (this[d] = f & 255; ++G < I && (pe *= 256); )
      f < 0 && X === 0 && this[d + G - 1] !== 0 && (X = 1), this[d + G] = (f / pe >> 0) - X & 255;
    return d + I;
  }, o.prototype.writeIntBE = function(f, d, I, O) {
    if (f = +f, d = d >>> 0, !O) {
      var W = Math.pow(2, 8 * I - 1);
      V(this, f, d, I, W - 1, -W);
    }
    var G = I - 1, pe = 1, X = 0;
    for (this[d + G] = f & 255; --G >= 0 && (pe *= 256); )
      f < 0 && X === 0 && this[d + G + 1] !== 0 && (X = 1), this[d + G] = (f / pe >> 0) - X & 255;
    return d + I;
  }, o.prototype.writeInt8 = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 1, 127, -128), f < 0 && (f = 255 + f + 1), this[d] = f & 255, d + 1;
  }, o.prototype.writeInt16LE = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 2, 32767, -32768), this[d] = f & 255, this[d + 1] = f >>> 8, d + 2;
  }, o.prototype.writeInt16BE = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 2, 32767, -32768), this[d] = f >>> 8, this[d + 1] = f & 255, d + 2;
  }, o.prototype.writeInt32LE = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 4, 2147483647, -2147483648), this[d] = f & 255, this[d + 1] = f >>> 8, this[d + 2] = f >>> 16, this[d + 3] = f >>> 24, d + 4;
  }, o.prototype.writeInt32BE = function(f, d, I) {
    return f = +f, d = d >>> 0, I || V(this, f, d, 4, 2147483647, -2147483648), f < 0 && (f = 4294967295 + f + 1), this[d] = f >>> 24, this[d + 1] = f >>> 16, this[d + 2] = f >>> 8, this[d + 3] = f & 255, d + 4;
  };
  function Q(F, f, d, I, O, W) {
    if (d + I > F.length)
      throw new RangeError("Index out of range");
    if (d < 0)
      throw new RangeError("Index out of range");
  }
  function Z(F, f, d, I, O) {
    return f = +f, d = d >>> 0, O || Q(F, f, d, 4), n.write(F, f, d, I, 23, 4), d + 4;
  }
  o.prototype.writeFloatLE = function(f, d, I) {
    return Z(this, f, d, !0, I);
  }, o.prototype.writeFloatBE = function(f, d, I) {
    return Z(this, f, d, !1, I);
  };
  function Ce(F, f, d, I, O) {
    return f = +f, d = d >>> 0, O || Q(F, f, d, 8), n.write(F, f, d, I, 52, 8), d + 8;
  }
  o.prototype.writeDoubleLE = function(f, d, I) {
    return Ce(this, f, d, !0, I);
  }, o.prototype.writeDoubleBE = function(f, d, I) {
    return Ce(this, f, d, !1, I);
  }, o.prototype.copy = function(f, d, I, O) {
    if (!o.isBuffer(f))
      throw new TypeError("argument should be a Buffer");
    if (I || (I = 0), !O && O !== 0 && (O = this.length), d >= f.length && (d = f.length), d || (d = 0), O > 0 && O < I && (O = I), O === I || f.length === 0 || this.length === 0)
      return 0;
    if (d < 0)
      throw new RangeError("targetStart out of bounds");
    if (I < 0 || I >= this.length)
      throw new RangeError("Index out of range");
    if (O < 0)
      throw new RangeError("sourceEnd out of bounds");
    O > this.length && (O = this.length), f.length - d < O - I && (O = f.length - d + I);
    var W = O - I;
    return this === f && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(d, I, O) : Uint8Array.prototype.set.call(
      f,
      this.subarray(I, O),
      d
    ), W;
  }, o.prototype.fill = function(f, d, I, O) {
    if (typeof f == "string") {
      if (typeof d == "string" ? (O = d, d = 0, I = this.length) : typeof I == "string" && (O = I, I = this.length), O !== void 0 && typeof O != "string")
        throw new TypeError("encoding must be a string");
      if (typeof O == "string" && !o.isEncoding(O))
        throw new TypeError("Unknown encoding: " + O);
      if (f.length === 1) {
        var W = f.charCodeAt(0);
        (O === "utf8" && W < 128 || O === "latin1") && (f = W);
      }
    } else
      typeof f == "number" ? f = f & 255 : typeof f == "boolean" && (f = Number(f));
    if (d < 0 || this.length < d || this.length < I)
      throw new RangeError("Out of range index");
    if (I <= d)
      return this;
    d = d >>> 0, I = I === void 0 ? this.length : I >>> 0, f || (f = 0);
    var G;
    if (typeof f == "number")
      for (G = d; G < I; ++G)
        this[G] = f;
    else {
      var pe = o.isBuffer(f) ? f : o.from(f, O), X = pe.length;
      if (X === 0)
        throw new TypeError('The value "' + f + '" is invalid for argument "value"');
      for (G = 0; G < I - d; ++G)
        this[G + d] = pe[G % X];
    }
    return this;
  };
  var we = /[^+/0-9A-Za-z-_]/g;
  function He(F) {
    if (F = F.split("=")[0], F = F.trim().replace(we, ""), F.length < 2)
      return "";
    for (; F.length % 4 !== 0; )
      F = F + "=";
    return F;
  }
  function fe(F, f) {
    f = f || 1 / 0;
    for (var d, I = F.length, O = null, W = [], G = 0; G < I; ++G) {
      if (d = F.charCodeAt(G), d > 55295 && d < 57344) {
        if (!O) {
          if (d > 56319) {
            (f -= 3) > -1 && W.push(239, 191, 189);
            continue;
          } else if (G + 1 === I) {
            (f -= 3) > -1 && W.push(239, 191, 189);
            continue;
          }
          O = d;
          continue;
        }
        if (d < 56320) {
          (f -= 3) > -1 && W.push(239, 191, 189), O = d;
          continue;
        }
        d = (O - 55296 << 10 | d - 56320) + 65536;
      } else
        O && (f -= 3) > -1 && W.push(239, 191, 189);
      if (O = null, d < 128) {
        if ((f -= 1) < 0)
          break;
        W.push(d);
      } else if (d < 2048) {
        if ((f -= 2) < 0)
          break;
        W.push(
          d >> 6 | 192,
          d & 63 | 128
        );
      } else if (d < 65536) {
        if ((f -= 3) < 0)
          break;
        W.push(
          d >> 12 | 224,
          d >> 6 & 63 | 128,
          d & 63 | 128
        );
      } else if (d < 1114112) {
        if ((f -= 4) < 0)
          break;
        W.push(
          d >> 18 | 240,
          d >> 12 & 63 | 128,
          d >> 6 & 63 | 128,
          d & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return W;
  }
  function ze(F) {
    for (var f = [], d = 0; d < F.length; ++d)
      f.push(F.charCodeAt(d) & 255);
    return f;
  }
  function Ze(F, f) {
    for (var d, I, O, W = [], G = 0; G < F.length && !((f -= 2) < 0); ++G)
      d = F.charCodeAt(G), I = d >> 8, O = d % 256, W.push(O), W.push(I);
    return W;
  }
  function dt(F) {
    return r.toByteArray(He(F));
  }
  function We(F, f, d, I) {
    for (var O = 0; O < I && !(O + d >= f.length || O >= F.length); ++O)
      f[O + d] = F[O];
    return O;
  }
  function Ae(F, f) {
    return F instanceof f || F != null && F.constructor != null && F.constructor.name != null && F.constructor.name === f.name;
  }
  function Le(F) {
    return F !== F;
  }
  var ht = function() {
    for (var F = "0123456789abcdef", f = new Array(256), d = 0; d < 16; ++d)
      for (var I = d * 16, O = 0; O < 16; ++O)
        f[I + O] = F[d] + F[O];
    return f;
  }();
})(be);
var mo = { exports: {} };
(function(e, r) {
  (function() {
    var n, t = 244837814094590, i = (t & 16777215) == 15715070;
    function a(p, m, w) {
      p != null && (typeof p == "number" ? this.fromNumber(p, m, w) : m == null && typeof p != "string" ? this.fromString(p, 256) : this.fromString(p, m));
    }
    function s() {
      return new a(null);
    }
    function o(p, m, w, L, J, te) {
      for (; --te >= 0; ) {
        var ie = m * this[p++] + w[L] + J;
        J = Math.floor(ie / 67108864), w[L++] = ie & 67108863;
      }
      return J;
    }
    function h(p, m, w, L, J, te) {
      for (var ie = m & 32767, se = m >> 15; --te >= 0; ) {
        var $e = this[p] & 32767, je = this[p++] >> 15, yt = se * $e + je * ie;
        $e = ie * $e + ((yt & 32767) << 15) + w[L] + (J & 1073741823), J = ($e >>> 30) + (yt >>> 15) + se * je + (J >>> 30), w[L++] = $e & 1073741823;
      }
      return J;
    }
    function c(p, m, w, L, J, te) {
      for (var ie = m & 16383, se = m >> 14; --te >= 0; ) {
        var $e = this[p] & 16383, je = this[p++] >> 14, yt = se * $e + je * ie;
        $e = ie * $e + ((yt & 16383) << 14) + w[L] + J, J = ($e >> 28) + (yt >> 14) + se * je, w[L++] = $e & 268435455;
      }
      return J;
    }
    var x = typeof navigator < "u";
    x && i && navigator.appName == "Microsoft Internet Explorer" ? (a.prototype.am = h, n = 30) : x && i && navigator.appName != "Netscape" ? (a.prototype.am = o, n = 26) : (a.prototype.am = c, n = 28), a.prototype.DB = n, a.prototype.DM = (1 << n) - 1, a.prototype.DV = 1 << n;
    var E = 52;
    a.prototype.FV = Math.pow(2, E), a.prototype.F1 = E - n, a.prototype.F2 = 2 * n - E;
    var g = "0123456789abcdefghijklmnopqrstuvwxyz", B = new Array(), v, b;
    for (v = "0".charCodeAt(0), b = 0; b <= 9; ++b)
      B[v++] = b;
    for (v = "a".charCodeAt(0), b = 10; b < 36; ++b)
      B[v++] = b;
    for (v = "A".charCodeAt(0), b = 10; b < 36; ++b)
      B[v++] = b;
    function C(p) {
      return g.charAt(p);
    }
    function k(p, m) {
      var w = B[p.charCodeAt(m)];
      return w ?? -1;
    }
    function A(p) {
      for (var m = this.t - 1; m >= 0; --m)
        p[m] = this[m];
      p.t = this.t, p.s = this.s;
    }
    function S(p) {
      this.t = 1, this.s = p < 0 ? -1 : 0, p > 0 ? this[0] = p : p < -1 ? this[0] = p + this.DV : this.t = 0;
    }
    function T(p) {
      var m = s();
      return m.fromInt(p), m;
    }
    function M(p, m) {
      var w;
      if (m == 16)
        w = 4;
      else if (m == 8)
        w = 3;
      else if (m == 256)
        w = 8;
      else if (m == 2)
        w = 1;
      else if (m == 32)
        w = 5;
      else if (m == 4)
        w = 2;
      else {
        this.fromRadix(p, m);
        return;
      }
      this.t = 0, this.s = 0;
      for (var L = p.length, J = !1, te = 0; --L >= 0; ) {
        var ie = w == 8 ? p[L] & 255 : k(p, L);
        if (ie < 0) {
          p.charAt(L) == "-" && (J = !0);
          continue;
        }
        J = !1, te == 0 ? this[this.t++] = ie : te + w > this.DB ? (this[this.t - 1] |= (ie & (1 << this.DB - te) - 1) << te, this[this.t++] = ie >> this.DB - te) : this[this.t - 1] |= ie << te, te += w, te >= this.DB && (te -= this.DB);
      }
      w == 8 && p[0] & 128 && (this.s = -1, te > 0 && (this[this.t - 1] |= (1 << this.DB - te) - 1 << te)), this.clamp(), J && a.ZERO.subTo(this, this);
    }
    function P() {
      for (var p = this.s & this.DM; this.t > 0 && this[this.t - 1] == p; )
        --this.t;
    }
    function z(p) {
      if (this.s < 0)
        return "-" + this.negate().toString(p);
      var m;
      if (p == 16)
        m = 4;
      else if (p == 8)
        m = 3;
      else if (p == 2)
        m = 1;
      else if (p == 32)
        m = 5;
      else if (p == 4)
        m = 2;
      else
        return this.toRadix(p);
      var w = (1 << m) - 1, L, J = !1, te = "", ie = this.t, se = this.DB - ie * this.DB % m;
      if (ie-- > 0)
        for (se < this.DB && (L = this[ie] >> se) > 0 && (J = !0, te = C(L)); ie >= 0; )
          se < m ? (L = (this[ie] & (1 << se) - 1) << m - se, L |= this[--ie] >> (se += this.DB - m)) : (L = this[ie] >> (se -= m) & w, se <= 0 && (se += this.DB, --ie)), L > 0 && (J = !0), J && (te += C(L));
      return J ? te : "0";
    }
    function q() {
      var p = s();
      return a.ZERO.subTo(this, p), p;
    }
    function ee() {
      return this.s < 0 ? this.negate() : this;
    }
    function N(p) {
      var m = this.s - p.s;
      if (m != 0)
        return m;
      var w = this.t;
      if (m = w - p.t, m != 0)
        return this.s < 0 ? -m : m;
      for (; --w >= 0; )
        if ((m = this[w] - p[w]) != 0)
          return m;
      return 0;
    }
    function $(p) {
      var m = 1, w;
      return (w = p >>> 16) != 0 && (p = w, m += 16), (w = p >> 8) != 0 && (p = w, m += 8), (w = p >> 4) != 0 && (p = w, m += 4), (w = p >> 2) != 0 && (p = w, m += 2), (w = p >> 1) != 0 && (p = w, m += 1), m;
    }
    function Y() {
      return this.t <= 0 ? 0 : this.DB * (this.t - 1) + $(this[this.t - 1] ^ this.s & this.DM);
    }
    function j(p, m) {
      var w;
      for (w = this.t - 1; w >= 0; --w)
        m[w + p] = this[w];
      for (w = p - 1; w >= 0; --w)
        m[w] = 0;
      m.t = this.t + p, m.s = this.s;
    }
    function oe(p, m) {
      for (var w = p; w < this.t; ++w)
        m[w - p] = this[w];
      m.t = Math.max(this.t - p, 0), m.s = this.s;
    }
    function ue(p, m) {
      var w = p % this.DB, L = this.DB - w, J = (1 << L) - 1, te = Math.floor(p / this.DB), ie = this.s << w & this.DM, se;
      for (se = this.t - 1; se >= 0; --se)
        m[se + te + 1] = this[se] >> L | ie, ie = (this[se] & J) << w;
      for (se = te - 1; se >= 0; --se)
        m[se] = 0;
      m[te] = ie, m.t = this.t + te + 1, m.s = this.s, m.clamp();
    }
    function ae(p, m) {
      m.s = this.s;
      var w = Math.floor(p / this.DB);
      if (w >= this.t) {
        m.t = 0;
        return;
      }
      var L = p % this.DB, J = this.DB - L, te = (1 << L) - 1;
      m[0] = this[w] >> L;
      for (var ie = w + 1; ie < this.t; ++ie)
        m[ie - w - 1] |= (this[ie] & te) << J, m[ie - w] = this[ie] >> L;
      L > 0 && (m[this.t - w - 1] |= (this.s & te) << J), m.t = this.t - w, m.clamp();
    }
    function de(p, m) {
      for (var w = 0, L = 0, J = Math.min(p.t, this.t); w < J; )
        L += this[w] - p[w], m[w++] = L & this.DM, L >>= this.DB;
      if (p.t < this.t) {
        for (L -= p.s; w < this.t; )
          L += this[w], m[w++] = L & this.DM, L >>= this.DB;
        L += this.s;
      } else {
        for (L += this.s; w < p.t; )
          L -= p[w], m[w++] = L & this.DM, L >>= this.DB;
        L -= p.s;
      }
      m.s = L < 0 ? -1 : 0, L < -1 ? m[w++] = this.DV + L : L > 0 && (m[w++] = L), m.t = w, m.clamp();
    }
    function he(p, m) {
      var w = this.abs(), L = p.abs(), J = w.t;
      for (m.t = J + L.t; --J >= 0; )
        m[J] = 0;
      for (J = 0; J < L.t; ++J)
        m[J + w.t] = w.am(0, L[J], m, J, 0, w.t);
      m.s = 0, m.clamp(), this.s != p.s && a.ZERO.subTo(m, m);
    }
    function Ee(p) {
      for (var m = this.abs(), w = p.t = 2 * m.t; --w >= 0; )
        p[w] = 0;
      for (w = 0; w < m.t - 1; ++w) {
        var L = m.am(w, m[w], p, 2 * w, 0, 1);
        (p[w + m.t] += m.am(w + 1, 2 * m[w], p, 2 * w + 1, L, m.t - w - 1)) >= m.DV && (p[w + m.t] -= m.DV, p[w + m.t + 1] = 1);
      }
      p.t > 0 && (p[p.t - 1] += m.am(w, m[w], p, 2 * w, 0, 1)), p.s = 0, p.clamp();
    }
    function ye(p, m, w) {
      var L = p.abs();
      if (!(L.t <= 0)) {
        var J = this.abs();
        if (J.t < L.t) {
          m != null && m.fromInt(0), w != null && this.copyTo(w);
          return;
        }
        w == null && (w = s());
        var te = s(), ie = this.s, se = p.s, $e = this.DB - $(L[L.t - 1]);
        $e > 0 ? (L.lShiftTo($e, te), J.lShiftTo($e, w)) : (L.copyTo(te), J.copyTo(w));
        var je = te.t, yt = te[je - 1];
        if (yt != 0) {
          var xt = yt * (1 << this.F1) + (je > 1 ? te[je - 2] >> this.F2 : 0), Lt = this.FV / xt, $r = (1 << this.F1) / xt, wt = 1 << this.F2, Ct = w.t, Ur = Ct - je, $t = m ?? s();
          for (te.dlShiftTo(Ur, $t), w.compareTo($t) >= 0 && (w[w.t++] = 1, w.subTo($t, w)), a.ONE.dlShiftTo(je, $t), $t.subTo(te, te); te.t < je; )
            te[te.t++] = 0;
          for (; --Ur >= 0; ) {
            var On = w[--Ct] == yt ? this.DM : Math.floor(w[Ct] * Lt + (w[Ct - 1] + wt) * $r);
            if ((w[Ct] += te.am(0, On, w, Ur, 0, je)) < On)
              for (te.dlShiftTo(Ur, $t), w.subTo($t, w); w[Ct] < --On; )
                w.subTo($t, w);
          }
          m != null && (w.drShiftTo(je, m), ie != se && a.ZERO.subTo(m, m)), w.t = je, w.clamp(), $e > 0 && w.rShiftTo($e, w), ie < 0 && a.ZERO.subTo(w, w);
        }
      }
    }
    function U(p) {
      var m = s();
      return this.abs().divRemTo(p, null, m), this.s < 0 && m.compareTo(a.ZERO) > 0 && p.subTo(m, m), m;
    }
    function V(p) {
      this.m = p;
    }
    function Q(p) {
      return p.s < 0 || p.compareTo(this.m) >= 0 ? p.mod(this.m) : p;
    }
    function Z(p) {
      return p;
    }
    function Ce(p) {
      p.divRemTo(this.m, null, p);
    }
    function we(p, m, w) {
      p.multiplyTo(m, w), this.reduce(w);
    }
    function He(p, m) {
      p.squareTo(m), this.reduce(m);
    }
    V.prototype.convert = Q, V.prototype.revert = Z, V.prototype.reduce = Ce, V.prototype.mulTo = we, V.prototype.sqrTo = He;
    function fe() {
      if (this.t < 1)
        return 0;
      var p = this[0];
      if (!(p & 1))
        return 0;
      var m = p & 3;
      return m = m * (2 - (p & 15) * m) & 15, m = m * (2 - (p & 255) * m) & 255, m = m * (2 - ((p & 65535) * m & 65535)) & 65535, m = m * (2 - p * m % this.DV) % this.DV, m > 0 ? this.DV - m : -m;
    }
    function ze(p) {
      this.m = p, this.mp = p.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << p.DB - 15) - 1, this.mt2 = 2 * p.t;
    }
    function Ze(p) {
      var m = s();
      return p.abs().dlShiftTo(this.m.t, m), m.divRemTo(this.m, null, m), p.s < 0 && m.compareTo(a.ZERO) > 0 && this.m.subTo(m, m), m;
    }
    function dt(p) {
      var m = s();
      return p.copyTo(m), this.reduce(m), m;
    }
    function We(p) {
      for (; p.t <= this.mt2; )
        p[p.t++] = 0;
      for (var m = 0; m < this.m.t; ++m) {
        var w = p[m] & 32767, L = w * this.mpl + ((w * this.mph + (p[m] >> 15) * this.mpl & this.um) << 15) & p.DM;
        for (w = m + this.m.t, p[w] += this.m.am(0, L, p, m, 0, this.m.t); p[w] >= p.DV; )
          p[w] -= p.DV, p[++w]++;
      }
      p.clamp(), p.drShiftTo(this.m.t, p), p.compareTo(this.m) >= 0 && p.subTo(this.m, p);
    }
    function Ae(p, m) {
      p.squareTo(m), this.reduce(m);
    }
    function Le(p, m, w) {
      p.multiplyTo(m, w), this.reduce(w);
    }
    ze.prototype.convert = Ze, ze.prototype.revert = dt, ze.prototype.reduce = We, ze.prototype.mulTo = Le, ze.prototype.sqrTo = Ae;
    function ht() {
      return (this.t > 0 ? this[0] & 1 : this.s) == 0;
    }
    function F(p, m) {
      if (p > 4294967295 || p < 1)
        return a.ONE;
      var w = s(), L = s(), J = m.convert(this), te = $(p) - 1;
      for (J.copyTo(w); --te >= 0; )
        if (m.sqrTo(w, L), (p & 1 << te) > 0)
          m.mulTo(L, J, w);
        else {
          var ie = w;
          w = L, L = ie;
        }
      return m.revert(w);
    }
    function f(p, m) {
      var w;
      return p < 256 || m.isEven() ? w = new V(m) : w = new ze(m), this.exp(p, w);
    }
    a.prototype.copyTo = A, a.prototype.fromInt = S, a.prototype.fromString = M, a.prototype.clamp = P, a.prototype.dlShiftTo = j, a.prototype.drShiftTo = oe, a.prototype.lShiftTo = ue, a.prototype.rShiftTo = ae, a.prototype.subTo = de, a.prototype.multiplyTo = he, a.prototype.squareTo = Ee, a.prototype.divRemTo = ye, a.prototype.invDigit = fe, a.prototype.isEven = ht, a.prototype.exp = F, a.prototype.toString = z, a.prototype.negate = q, a.prototype.abs = ee, a.prototype.compareTo = N, a.prototype.bitLength = Y, a.prototype.mod = U, a.prototype.modPowInt = f, a.ZERO = T(0), a.ONE = T(1);
    function d() {
      var p = s();
      return this.copyTo(p), p;
    }
    function I() {
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
    function O() {
      return this.t == 0 ? this.s : this[0] << 24 >> 24;
    }
    function W() {
      return this.t == 0 ? this.s : this[0] << 16 >> 16;
    }
    function G(p) {
      return Math.floor(Math.LN2 * this.DB / Math.log(p));
    }
    function pe() {
      return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1;
    }
    function X(p) {
      if (p == null && (p = 10), this.signum() == 0 || p < 2 || p > 36)
        return "0";
      var m = this.chunkSize(p), w = Math.pow(p, m), L = T(w), J = s(), te = s(), ie = "";
      for (this.divRemTo(L, J, te); J.signum() > 0; )
        ie = (w + te.intValue()).toString(p).substr(1) + ie, J.divRemTo(L, J, te);
      return te.intValue().toString(p) + ie;
    }
    function le(p, m) {
      this.fromInt(0), m == null && (m = 10);
      for (var w = this.chunkSize(m), L = Math.pow(m, w), J = !1, te = 0, ie = 0, se = 0; se < p.length; ++se) {
        var $e = k(p, se);
        if ($e < 0) {
          p.charAt(se) == "-" && this.signum() == 0 && (J = !0);
          continue;
        }
        ie = m * ie + $e, ++te >= w && (this.dMultiply(L), this.dAddOffset(ie, 0), te = 0, ie = 0);
      }
      te > 0 && (this.dMultiply(Math.pow(m, te)), this.dAddOffset(ie, 0)), J && a.ZERO.subTo(this, this);
    }
    function De(p, m, w) {
      if (typeof m == "number")
        if (p < 2)
          this.fromInt(1);
        else
          for (this.fromNumber(p, w), this.testBit(p - 1) || this.bitwiseTo(a.ONE.shiftLeft(p - 1), ve, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(m); )
            this.dAddOffset(2, 0), this.bitLength() > p && this.subTo(a.ONE.shiftLeft(p - 1), this);
      else {
        var L = new Array(), J = p & 7;
        L.length = (p >> 3) + 1, m.nextBytes(L), J > 0 ? L[0] &= (1 << J) - 1 : L[0] = 0, this.fromString(L, 256);
      }
    }
    function y() {
      var p = this.t, m = new Array();
      m[0] = this.s;
      var w = this.DB - p * this.DB % 8, L, J = 0;
      if (p-- > 0)
        for (w < this.DB && (L = this[p] >> w) != (this.s & this.DM) >> w && (m[J++] = L | this.s << this.DB - w); p >= 0; )
          w < 8 ? (L = (this[p] & (1 << w) - 1) << 8 - w, L |= this[--p] >> (w += this.DB - 8)) : (L = this[p] >> (w -= 8) & 255, w <= 0 && (w += this.DB, --p)), L & 128 && (L |= -256), J == 0 && (this.s & 128) != (L & 128) && ++J, (J > 0 || L != this.s) && (m[J++] = L);
      return m;
    }
    function l(p) {
      return this.compareTo(p) == 0;
    }
    function u(p) {
      return this.compareTo(p) < 0 ? this : p;
    }
    function _(p) {
      return this.compareTo(p) > 0 ? this : p;
    }
    function R(p, m, w) {
      var L, J, te = Math.min(p.t, this.t);
      for (L = 0; L < te; ++L)
        w[L] = m(this[L], p[L]);
      if (p.t < this.t) {
        for (J = p.s & this.DM, L = te; L < this.t; ++L)
          w[L] = m(this[L], J);
        w.t = this.t;
      } else {
        for (J = this.s & this.DM, L = te; L < p.t; ++L)
          w[L] = m(J, p[L]);
        w.t = p.t;
      }
      w.s = m(this.s, p.s), w.clamp();
    }
    function H(p, m) {
      return p & m;
    }
    function K(p) {
      var m = s();
      return this.bitwiseTo(p, H, m), m;
    }
    function ve(p, m) {
      return p | m;
    }
    function Pe(p) {
      var m = s();
      return this.bitwiseTo(p, ve, m), m;
    }
    function ke(p, m) {
      return p ^ m;
    }
    function Oe(p) {
      var m = s();
      return this.bitwiseTo(p, ke, m), m;
    }
    function Se(p, m) {
      return p & ~m;
    }
    function An(p) {
      var m = s();
      return this.bitwiseTo(p, Se, m), m;
    }
    function Rr() {
      for (var p = s(), m = 0; m < this.t; ++m)
        p[m] = this.DM & ~this[m];
      return p.t = this.t, p.s = ~this.s, p;
    }
    function Dn(p) {
      var m = s();
      return p < 0 ? this.rShiftTo(-p, m) : this.lShiftTo(p, m), m;
    }
    function Mr(p) {
      var m = s();
      return p < 0 ? this.lShiftTo(-p, m) : this.rShiftTo(p, m), m;
    }
    function Sn(p) {
      if (p == 0)
        return -1;
      var m = 0;
      return p & 65535 || (p >>= 16, m += 16), p & 255 || (p >>= 8, m += 8), p & 15 || (p >>= 4, m += 4), p & 3 || (p >>= 2, m += 2), p & 1 || ++m, m;
    }
    function Tn() {
      for (var p = 0; p < this.t; ++p)
        if (this[p] != 0)
          return p * this.DB + Sn(this[p]);
      return this.s < 0 ? this.t * this.DB : -1;
    }
    function In(p) {
      for (var m = 0; p != 0; )
        p &= p - 1, ++m;
      return m;
    }
    function Lr() {
      for (var p = 0, m = this.s & this.DM, w = 0; w < this.t; ++w)
        p += In(this[w] ^ m);
      return p;
    }
    function kn(p) {
      var m = Math.floor(p / this.DB);
      return m >= this.t ? this.s != 0 : (this[m] & 1 << p % this.DB) != 0;
    }
    function Rn(p, m) {
      var w = a.ONE.shiftLeft(p);
      return this.bitwiseTo(w, m, w), w;
    }
    function Pr(p) {
      return this.changeBit(p, ve);
    }
    function Mn(p) {
      return this.changeBit(p, Se);
    }
    function Nr(p) {
      return this.changeBit(p, ke);
    }
    function rt(p, m) {
      for (var w = 0, L = 0, J = Math.min(p.t, this.t); w < J; )
        L += this[w] + p[w], m[w++] = L & this.DM, L >>= this.DB;
      if (p.t < this.t) {
        for (L += p.s; w < this.t; )
          L += this[w], m[w++] = L & this.DM, L >>= this.DB;
        L += this.s;
      } else {
        for (L += this.s; w < p.t; )
          L += p[w], m[w++] = L & this.DM, L >>= this.DB;
        L += p.s;
      }
      m.s = L < 0 ? -1 : 0, L > 0 ? m[w++] = L : L < -1 && (m[w++] = this.DV + L), m.t = w, m.clamp();
    }
    function _t(p) {
      var m = s();
      return this.addTo(p, m), m;
    }
    function Or(p) {
      var m = s();
      return this.subTo(p, m), m;
    }
    function Ln(p) {
      var m = s();
      return this.multiplyTo(p, m), m;
    }
    function As() {
      var p = s();
      return this.squareTo(p), p;
    }
    function Ds(p) {
      var m = s();
      return this.divRemTo(p, m, null), m;
    }
    function Ss(p) {
      var m = s();
      return this.divRemTo(p, null, m), m;
    }
    function Ts(p) {
      var m = s(), w = s();
      return this.divRemTo(p, m, w), new Array(m, w);
    }
    function Is(p) {
      this[this.t] = this.am(0, p - 1, this, 0, 0, this.t), ++this.t, this.clamp();
    }
    function ks(p, m) {
      if (p != 0) {
        for (; this.t <= m; )
          this[this.t++] = 0;
        for (this[m] += p; this[m] >= this.DV; )
          this[m] -= this.DV, ++m >= this.t && (this[this.t++] = 0), ++this[m];
      }
    }
    function xr() {
    }
    function ci(p) {
      return p;
    }
    function Rs(p, m, w) {
      p.multiplyTo(m, w);
    }
    function Ms(p, m) {
      p.squareTo(m);
    }
    xr.prototype.convert = ci, xr.prototype.revert = ci, xr.prototype.mulTo = Rs, xr.prototype.sqrTo = Ms;
    function Ls(p) {
      return this.exp(p, new xr());
    }
    function Ps(p, m, w) {
      var L = Math.min(this.t + p.t, m);
      for (w.s = 0, w.t = L; L > 0; )
        w[--L] = 0;
      var J;
      for (J = w.t - this.t; L < J; ++L)
        w[L + this.t] = this.am(0, p[L], w, L, 0, this.t);
      for (J = Math.min(p.t, m); L < J; ++L)
        this.am(0, p[L], w, L, 0, m - L);
      w.clamp();
    }
    function Ns(p, m, w) {
      --m;
      var L = w.t = this.t + p.t - m;
      for (w.s = 0; --L >= 0; )
        w[L] = 0;
      for (L = Math.max(m - this.t, 0); L < p.t; ++L)
        w[this.t + L - m] = this.am(m - L, p[L], w, 0, 0, this.t + L - m);
      w.clamp(), w.drShiftTo(1, w);
    }
    function Xt(p) {
      this.r2 = s(), this.q3 = s(), a.ONE.dlShiftTo(2 * p.t, this.r2), this.mu = this.r2.divide(p), this.m = p;
    }
    function Os(p) {
      if (p.s < 0 || p.t > 2 * this.m.t)
        return p.mod(this.m);
      if (p.compareTo(this.m) < 0)
        return p;
      var m = s();
      return p.copyTo(m), this.reduce(m), m;
    }
    function zs(p) {
      return p;
    }
    function $s(p) {
      for (p.drShiftTo(this.m.t - 1, this.r2), p.t > this.m.t + 1 && (p.t = this.m.t + 1, p.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); p.compareTo(this.r2) < 0; )
        p.dAddOffset(1, this.m.t + 1);
      for (p.subTo(this.r2, p); p.compareTo(this.m) >= 0; )
        p.subTo(this.m, p);
    }
    function Us(p, m) {
      p.squareTo(m), this.reduce(m);
    }
    function Hs(p, m, w) {
      p.multiplyTo(m, w), this.reduce(w);
    }
    Xt.prototype.convert = Os, Xt.prototype.revert = zs, Xt.prototype.reduce = $s, Xt.prototype.mulTo = Hs, Xt.prototype.sqrTo = Us;
    function qs(p, m) {
      var w = p.bitLength(), L, J = T(1), te;
      if (w <= 0)
        return J;
      w < 18 ? L = 1 : w < 48 ? L = 3 : w < 144 ? L = 4 : w < 768 ? L = 5 : L = 6, w < 8 ? te = new V(m) : m.isEven() ? te = new Xt(m) : te = new ze(m);
      var ie = new Array(), se = 3, $e = L - 1, je = (1 << L) - 1;
      if (ie[1] = te.convert(this), L > 1) {
        var yt = s();
        for (te.sqrTo(ie[1], yt); se <= je; )
          ie[se] = s(), te.mulTo(yt, ie[se - 2], ie[se]), se += 2;
      }
      var xt = p.t - 1, Lt, $r = !0, wt = s(), Ct;
      for (w = $(p[xt]) - 1; xt >= 0; ) {
        for (w >= $e ? Lt = p[xt] >> w - $e & je : (Lt = (p[xt] & (1 << w + 1) - 1) << $e - w, xt > 0 && (Lt |= p[xt - 1] >> this.DB + w - $e)), se = L; !(Lt & 1); )
          Lt >>= 1, --se;
        if ((w -= se) < 0 && (w += this.DB, --xt), $r)
          ie[Lt].copyTo(J), $r = !1;
        else {
          for (; se > 1; )
            te.sqrTo(J, wt), te.sqrTo(wt, J), se -= 2;
          se > 0 ? te.sqrTo(J, wt) : (Ct = J, J = wt, wt = Ct), te.mulTo(wt, ie[Lt], J);
        }
        for (; xt >= 0 && !(p[xt] & 1 << w); )
          te.sqrTo(J, wt), Ct = J, J = wt, wt = Ct, --w < 0 && (w = this.DB - 1, --xt);
      }
      return te.revert(J);
    }
    function Vs(p) {
      var m = this.s < 0 ? this.negate() : this.clone(), w = p.s < 0 ? p.negate() : p.clone();
      if (m.compareTo(w) < 0) {
        var L = m;
        m = w, w = L;
      }
      var J = m.getLowestSetBit(), te = w.getLowestSetBit();
      if (te < 0)
        return m;
      for (J < te && (te = J), te > 0 && (m.rShiftTo(te, m), w.rShiftTo(te, w)); m.signum() > 0; )
        (J = m.getLowestSetBit()) > 0 && m.rShiftTo(J, m), (J = w.getLowestSetBit()) > 0 && w.rShiftTo(J, w), m.compareTo(w) >= 0 ? (m.subTo(w, m), m.rShiftTo(1, m)) : (w.subTo(m, w), w.rShiftTo(1, w));
      return te > 0 && w.lShiftTo(te, w), w;
    }
    function Ys(p) {
      if (p <= 0)
        return 0;
      var m = this.DV % p, w = this.s < 0 ? p - 1 : 0;
      if (this.t > 0)
        if (m == 0)
          w = this[0] % p;
        else
          for (var L = this.t - 1; L >= 0; --L)
            w = (m * w + this[L]) % p;
      return w;
    }
    function Ws(p) {
      var m = p.isEven();
      if (this.isEven() && m || p.signum() == 0)
        return a.ZERO;
      for (var w = p.clone(), L = this.clone(), J = T(1), te = T(0), ie = T(0), se = T(1); w.signum() != 0; ) {
        for (; w.isEven(); )
          w.rShiftTo(1, w), m ? ((!J.isEven() || !te.isEven()) && (J.addTo(this, J), te.subTo(p, te)), J.rShiftTo(1, J)) : te.isEven() || te.subTo(p, te), te.rShiftTo(1, te);
        for (; L.isEven(); )
          L.rShiftTo(1, L), m ? ((!ie.isEven() || !se.isEven()) && (ie.addTo(this, ie), se.subTo(p, se)), ie.rShiftTo(1, ie)) : se.isEven() || se.subTo(p, se), se.rShiftTo(1, se);
        w.compareTo(L) >= 0 ? (w.subTo(L, w), m && J.subTo(ie, J), te.subTo(se, te)) : (L.subTo(w, L), m && ie.subTo(J, ie), se.subTo(te, se));
      }
      if (L.compareTo(a.ONE) != 0)
        return a.ZERO;
      if (se.compareTo(p) >= 0)
        return se.subtract(p);
      if (se.signum() < 0)
        se.addTo(p, se);
      else
        return se;
      return se.signum() < 0 ? se.add(p) : se;
    }
    var nt = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997], Ks = (1 << 26) / nt[nt.length - 1];
    function js(p) {
      var m, w = this.abs();
      if (w.t == 1 && w[0] <= nt[nt.length - 1]) {
        for (m = 0; m < nt.length; ++m)
          if (w[0] == nt[m])
            return !0;
        return !1;
      }
      if (w.isEven())
        return !1;
      for (m = 1; m < nt.length; ) {
        for (var L = nt[m], J = m + 1; J < nt.length && L < Ks; )
          L *= nt[J++];
        for (L = w.modInt(L); m < J; )
          if (L % nt[m++] == 0)
            return !1;
      }
      return w.millerRabin(p);
    }
    function Gs(p) {
      var m = this.subtract(a.ONE), w = m.getLowestSetBit();
      if (w <= 0)
        return !1;
      var L = m.shiftRight(w);
      p = p + 1 >> 1, p > nt.length && (p = nt.length);
      for (var J = s(), te = 0; te < p; ++te) {
        J.fromInt(nt[Math.floor(Math.random() * nt.length)]);
        var ie = J.modPow(L, this);
        if (ie.compareTo(a.ONE) != 0 && ie.compareTo(m) != 0) {
          for (var se = 1; se++ < w && ie.compareTo(m) != 0; )
            if (ie = ie.modPowInt(2, this), ie.compareTo(a.ONE) == 0)
              return !1;
          if (ie.compareTo(m) != 0)
            return !1;
        }
      }
      return !0;
    }
    a.prototype.chunkSize = G, a.prototype.toRadix = X, a.prototype.fromRadix = le, a.prototype.fromNumber = De, a.prototype.bitwiseTo = R, a.prototype.changeBit = Rn, a.prototype.addTo = rt, a.prototype.dMultiply = Is, a.prototype.dAddOffset = ks, a.prototype.multiplyLowerTo = Ps, a.prototype.multiplyUpperTo = Ns, a.prototype.modInt = Ys, a.prototype.millerRabin = Gs, a.prototype.clone = d, a.prototype.intValue = I, a.prototype.byteValue = O, a.prototype.shortValue = W, a.prototype.signum = pe, a.prototype.toByteArray = y, a.prototype.equals = l, a.prototype.min = u, a.prototype.max = _, a.prototype.and = K, a.prototype.or = Pe, a.prototype.xor = Oe, a.prototype.andNot = An, a.prototype.not = Rr, a.prototype.shiftLeft = Dn, a.prototype.shiftRight = Mr, a.prototype.getLowestSetBit = Tn, a.prototype.bitCount = Lr, a.prototype.testBit = kn, a.prototype.setBit = Pr, a.prototype.clearBit = Mn, a.prototype.flipBit = Nr, a.prototype.add = _t, a.prototype.subtract = Or, a.prototype.multiply = Ln, a.prototype.divide = Ds, a.prototype.remainder = Ss, a.prototype.divideAndRemainder = Ts, a.prototype.modPow = qs, a.prototype.modInverse = Ws, a.prototype.pow = Ls, a.prototype.gcd = Vs, a.prototype.isProbablePrime = js, a.prototype.square = As, a.prototype.Barrett = Xt;
    var zr, pt, Ke;
    function Xs(p) {
      pt[Ke++] ^= p & 255, pt[Ke++] ^= p >> 8 & 255, pt[Ke++] ^= p >> 16 & 255, pt[Ke++] ^= p >> 24 & 255, Ke >= Nn && (Ke -= Nn);
    }
    function fi() {
      Xs((/* @__PURE__ */ new Date()).getTime());
    }
    if (pt == null) {
      pt = new Array(), Ke = 0;
      var Et;
      if (typeof window < "u" && window.crypto) {
        if (window.crypto.getRandomValues) {
          var di = new Uint8Array(32);
          for (window.crypto.getRandomValues(di), Et = 0; Et < 32; ++Et)
            pt[Ke++] = di[Et];
        } else if (navigator.appName == "Netscape" && navigator.appVersion < "5") {
          var hi = window.crypto.random(32);
          for (Et = 0; Et < hi.length; ++Et)
            pt[Ke++] = hi.charCodeAt(Et) & 255;
        }
      }
      for (; Ke < Nn; )
        Et = Math.floor(65536 * Math.random()), pt[Ke++] = Et >>> 8, pt[Ke++] = Et & 255;
      Ke = 0, fi();
    }
    function Zs() {
      if (zr == null) {
        for (fi(), zr = tl(), zr.init(pt), Ke = 0; Ke < pt.length; ++Ke)
          pt[Ke] = 0;
        Ke = 0;
      }
      return zr.next();
    }
    function Js(p) {
      var m;
      for (m = 0; m < p.length; ++m)
        p[m] = Zs();
    }
    function pi() {
    }
    pi.prototype.nextBytes = Js;
    function Pn() {
      this.i = 0, this.j = 0, this.S = new Array();
    }
    function Qs(p) {
      var m, w, L;
      for (m = 0; m < 256; ++m)
        this.S[m] = m;
      for (w = 0, m = 0; m < 256; ++m)
        w = w + this.S[m] + p[m % p.length] & 255, L = this.S[m], this.S[m] = this.S[w], this.S[w] = L;
      this.i = 0, this.j = 0;
    }
    function el() {
      var p;
      return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, p = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = p, this.S[p + this.S[this.i] & 255];
    }
    Pn.prototype.init = Qs, Pn.prototype.next = el;
    function tl() {
      return new Pn();
    }
    var Nn = 256;
    e.exports = {
      default: a,
      BigInteger: a,
      SecureRandom: pi
    };
  }).call(Be);
})(mo);
var Ie = mo.exports, Ku = Ie.BigInteger.prototype.Barrett;
function it(e, r) {
  this.x = r, this.q = e;
}
function st(e, r, n, t) {
  this.curve = e, this.x = r, this.y = n, this.z = t ?? Ie.BigInteger.ONE, this.zinv = null;
}
function St(e, r, n) {
  this.q = e, this.a = this.fromBigInteger(r), this.b = this.fromBigInteger(n), this.infinity = new st(this, null, null), this.reducer = new Ku(this.q);
}
it.prototype.equals = function(e) {
  return e == this || this.q.equals(e.q) && this.x.equals(e.x);
}, it.prototype.toBigInteger = function() {
  return this.x;
}, it.prototype.negate = function() {
  return new it(this.q, this.x.negate().mod(this.q));
}, it.prototype.add = function(e) {
  return new it(this.q, this.x.add(e.toBigInteger()).mod(this.q));
}, it.prototype.subtract = function(e) {
  return new it(this.q, this.x.subtract(e.toBigInteger()).mod(this.q));
}, it.prototype.multiply = function(e) {
  return new it(this.q, this.x.multiply(e.toBigInteger()).mod(this.q));
}, it.prototype.square = function() {
  return new it(this.q, this.x.square().mod(this.q));
}, it.prototype.divide = function(e) {
  return new it(this.q, this.x.multiply(e.toBigInteger().modInverse(this.q)).mod(this.q));
}, st.prototype.getX = function() {
  this.zinv == null && (this.zinv = this.z.modInverse(this.curve.q));
  var e = this.x.toBigInteger().multiply(this.zinv);
  return this.curve.reduce(e), this.curve.fromBigInteger(e);
}, st.prototype.getY = function() {
  this.zinv == null && (this.zinv = this.z.modInverse(this.curve.q));
  var e = this.y.toBigInteger().multiply(this.zinv);
  return this.curve.reduce(e), this.curve.fromBigInteger(e);
}, st.prototype.equals = function(e) {
  return e == this || (this.isInfinity() ? e.isInfinity() : e.isInfinity() ? this.isInfinity() : !!e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(Ie.BigInteger.ZERO) && e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q).equals(Ie.BigInteger.ZERO));
}, st.prototype.isInfinity = function() {
  return this.x == null && this.y == null || this.z.equals(Ie.BigInteger.ZERO) && !this.y.toBigInteger().equals(Ie.BigInteger.ZERO);
}, st.prototype.negate = function() {
  return new st(this.curve, this.x, this.y.negate(), this.z);
}, st.prototype.add = function(e) {
  if (this.isInfinity())
    return e;
  if (e.isInfinity())
    return this;
  var r = e.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(e.z)).mod(this.curve.q), n = e.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(e.z)).mod(this.curve.q);
  if (Ie.BigInteger.ZERO.equals(n))
    return Ie.BigInteger.ZERO.equals(r) ? this.twice() : this.curve.getInfinity();
  var t = new Ie.BigInteger("3"), i = this.x.toBigInteger(), a = this.y.toBigInteger(), s = (e.x.toBigInteger(), e.y.toBigInteger(), n.square()), o = s.multiply(n), h = i.multiply(s), c = r.square().multiply(this.z), x = c.subtract(h.shiftLeft(1)).multiply(e.z).subtract(o).multiply(n).mod(this.curve.q), E = h.multiply(t).multiply(r).subtract(a.multiply(o)).subtract(c.multiply(r)).multiply(e.z).add(r.multiply(o)).mod(this.curve.q), g = o.multiply(this.z).multiply(e.z).mod(this.curve.q);
  return new st(this.curve, this.curve.fromBigInteger(x), this.curve.fromBigInteger(E), g);
}, st.prototype.twice = function() {
  if (this.isInfinity())
    return this;
  if (this.y.toBigInteger().signum() == 0)
    return this.curve.getInfinity();
  var e = new Ie.BigInteger("3"), r = this.x.toBigInteger(), n = this.y.toBigInteger(), t = n.multiply(this.z), i = t.multiply(n).mod(this.curve.q), a = this.curve.a.toBigInteger(), s = r.square().multiply(e);
  Ie.BigInteger.ZERO.equals(a) || (s = s.add(this.z.square().multiply(a)));
  var o = (s = s.mod(this.curve.q)).square().subtract(r.shiftLeft(3).multiply(i)).shiftLeft(1).multiply(t).mod(this.curve.q), h = s.multiply(e).multiply(r).subtract(i.shiftLeft(1)).shiftLeft(2).multiply(i).subtract(s.square().multiply(s)).mod(this.curve.q), c = t.square().multiply(t).shiftLeft(3).mod(this.curve.q);
  return new st(this.curve, this.curve.fromBigInteger(o), this.curve.fromBigInteger(h), c);
}, st.prototype.multiply = function(e) {
  if (this.isInfinity())
    return this;
  if (e.signum() == 0)
    return this.curve.getInfinity();
  var r, n = e, t = n.multiply(new Ie.BigInteger("3")), i = this.negate(), a = this;
  for (r = t.bitLength() - 2; r > 0; --r) {
    a = a.twice();
    var s = t.testBit(r);
    s != n.testBit(r) && (a = a.add(s ? this : i));
  }
  return a;
}, st.prototype.multiplyTwo = function(e, r, n) {
  var t;
  t = e.bitLength() > n.bitLength() ? e.bitLength() - 1 : n.bitLength() - 1;
  for (var i = this.curve.getInfinity(), a = this.add(r); t >= 0; )
    i = i.twice(), e.testBit(t) ? i = n.testBit(t) ? i.add(a) : i.add(this) : n.testBit(t) && (i = i.add(r)), --t;
  return i;
}, St.prototype.getQ = function() {
  return this.q;
}, St.prototype.getA = function() {
  return this.a;
}, St.prototype.getB = function() {
  return this.b;
}, St.prototype.equals = function(e) {
  return e == this || this.q.equals(e.q) && this.a.equals(e.a) && this.b.equals(e.b);
}, St.prototype.getInfinity = function() {
  return this.infinity;
}, St.prototype.fromBigInteger = function(e) {
  return new it(this.q, e);
}, St.prototype.reduce = function(e) {
  this.reducer.reduce(e);
}, St.prototype.decodePointHex = function(e) {
  switch (parseInt(e.substr(0, 2), 16)) {
    case 0:
      return this.infinity;
    case 2:
    case 3:
      return null;
    case 4:
    case 6:
    case 7:
      var r = (e.length - 2) / 2, n = e.substr(2, r), t = e.substr(r + 2, r);
      return new st(this, this.fromBigInteger(new Ie.BigInteger(n, 16)), this.fromBigInteger(new Ie.BigInteger(t, 16)));
    default:
      return null;
  }
}, St.prototype.encodePointHex = function(e) {
  if (e.isInfinity())
    return "00";
  var r = e.getX().toBigInteger().toString(16), n = e.getY().toBigInteger().toString(16), t = this.getQ().toString(16).length;
  for (t % 2 != 0 && t++; r.length < t; )
    r = "0" + r;
  for (; n.length < t; )
    n = "0" + n;
  return "04" + r + n;
};
var Ge = function(e, r) {
  return e << (r %= 32) | e >>> 32 - r;
}, At = function(e, r) {
  var n = r - e.length;
  return (n > 0 ? "0".repeat(n) : "") + e;
}, ju = function(e) {
  return e < 16 ? 2043430169 : 2055708042;
}, Gu = function(e, r, n, t) {
  return t < 16 ? e ^ r ^ n : e & r | e & n | r & n;
}, Xu = function(e, r, n, t) {
  return t < 16 ? e ^ r ^ n : e & r | ~e & n;
}, Zu = function(e, r, n) {
  for (var t, i, a, s, o, h = function(A) {
    var S, T = new Array(132);
    A.forEach(function(z, q) {
      T[q] = z;
    });
    for (var M = 16; M < 68; M++)
      T[M] = (S = T[M - 16] ^ T[M - 9] ^ Ge(T[M - 3], 15)) ^ Ge(S, 15) ^ Ge(S, 23) ^ Ge(T[M - 13], 7) ^ T[M - 6];
    for (var P = 0; P < 64; P++)
      T[P + 68] = T[P] ^ T[P + 4];
    return T;
  }(r), c = e[0], x = e[1], E = e[2], g = e[3], B = e[4], v = e[5], b = e[6], C = e[7], k = 0; k < 64; k++)
    i = (t = Ge(Ge(c, 12) + B + Ge(ju(k), k), 7)) ^ Ge(c, 12), a = Gu(c, x, E, k) + g + i + h[k + 68], s = Xu(B, v, b, k) + C + t + h[k], g = E, E = Ge(x, 9), x = c, c = a, C = b, b = Ge(v, 19), v = B, B = (o = s) ^ Ge(o, 9) ^ Ge(o, 17);
  return [c ^ e[0], x ^ e[1], E ^ e[2], g ^ e[3], B ^ e[4], v ^ e[5], b ^ e[6], C ^ e[7]];
}, fn = function(e, r, n) {
  if (typeof e == "string" ? e = be.Buffer.from(e, r || "utf8") : e instanceof ArrayBuffer && (e = be.Buffer.from(e)), !be.Buffer.isBuffer(e))
    throw new TypeError('Expected "string" | "Buffer" | "ArrayBuffer" but received "' + Object.prototype.toString.call(e) + '"');
  var t, i, a, s, o, h;
  t = e, i = be.Buffer.alloc(1, 128), s = be.Buffer.alloc(a = (a = t.length % 64) >= 56 ? 64 - a % 56 - 1 : 56 - a - 1, 0), o = be.Buffer.alloc(8), h = 8 * t.length, o.writeUInt32BE(Math.floor(h / Math.pow(2, 32)), 0), o.writeUInt32BE(h % Math.pow(2, 32), 4);
  for (var c = (e = be.Buffer.concat([t, i, s, o], t.length + 1 + a + 8)).length / 64, x = new Array(c), E = 0; E < c; E++) {
    x[E] = new Array(16);
    for (var g = 0; g < 16; g++)
      x[E][g] = e.readUInt32BE(64 * E + 4 * g);
  }
  var B = new Array(c);
  B[0] = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214];
  for (var v = 0; v < c; v++)
    B[v + 1] = Zu(B[v], x[v]);
  var b = be.Buffer.alloc(32);
  return B[c].forEach(function(C, k) {
    return b.writeInt32BE(C, 4 * k);
  }), n ? b.toString(n) : _r(b);
}, k0 = { __proto__: null, digest: fn }, Xi = new Ie.SecureRandom(), j0 = function() {
  var e = new St(new Ie.BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF", 16), new Ie.BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC", 16), new Ie.BigInteger("28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93", 16)), r = e.decodePointHex("0432C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0");
  return { curve: e, G: r, n: new Ie.BigInteger("FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", 16) };
}(), Zi = j0.curve, Ji = j0.G, qr = j0.n;
function Qi(e, r) {
  for (var n = [], t = Math.ceil(r / 32), i = r % 32, a = 1; a <= t; a++) {
    var s = be.Buffer.allocUnsafe(4);
    s.writeUInt32BE(a);
    var o = fn(be.Buffer.concat([e, s]));
    n.push(a === t && i ? be.Buffer.from(o).slice(0, i) : be.Buffer.from(o));
  }
  return be.Buffer.concat(n, r);
}
var mr = { __proto__: null, constants: { C1C2C3: 0, C1C3C2: 1, PC: "04" }, generateKeyPair: function() {
  var e = new Ie.BigInteger(qr.bitLength(), Xi).mod(qr.subtract(new Ie.BigInteger("2"))).add(Ie.BigInteger.ONE), r = At(e.toString(16), 64), n = Ji.multiply(e);
  return { privateKey: r, publicKey: "04" + At(n.getX().toBigInteger().toString(16), 64) + At(n.getY().toBigInteger().toString(16), 64) };
}, encrypt: function(e, r, n) {
  var t = n || {}, i = t.mode, a = i === void 0 ? 1 : i, s = t.outputEncoding, o = t.pc;
  if (typeof e == "string" ? e = be.Buffer.from(e, t.inputEncoding || "utf8") : e instanceof ArrayBuffer && (e = be.Buffer.from(e)), !be.Buffer.isBuffer(e))
    throw new TypeError('Expected "string" | "Buffer" | "ArrayBuffer" but received "' + Object.prototype.toString.call(e) + '"');
  var h = new Ie.BigInteger(qr.bitLength(), Xi).mod(qr.subtract(Ie.BigInteger.ONE)).add(Ie.BigInteger.ONE), c = Ji.multiply(h), x = At(c.getX().toBigInteger().toString(16), 64) + At(c.getY().toBigInteger().toString(16), 64), E = Zi.decodePointHex(r).multiply(h), g = At(E.getX().toBigInteger().toString(16), 64), B = At(E.getY().toBigInteger().toString(16), 64), v = Qi(be.Buffer.from(g + B, "hex"), e.length), b = At(new Ie.BigInteger(e.toString("hex"), 16).xor(new Ie.BigInteger(v.toString("hex"), 16)).toString(16), 2 * e.length), C = fn(g + e.toString("hex") + B, "hex", "hex"), k = be.Buffer.from((o ? "04" : "") + (a === 0 ? x + b + C : x + C + b), "hex");
  return s ? k.toString(s) : _r(k);
}, decrypt: function(e, r, n) {
  var t = n || {}, i = t.mode, a = i === void 0 ? 1 : i, s = t.outputEncoding, o = t.pc;
  if (typeof e == "string" ? e = be.Buffer.from(e, t.inputEncoding) : e instanceof ArrayBuffer && (e = be.Buffer.from(e)), !be.Buffer.isBuffer(e))
    throw new TypeError('Expected "string" | "Buffer" | "ArrayBuffer" but received "' + Object.prototype.toString.call(e) + '"');
  var h = (e = o ? e.slice(1) : e).slice(0, 32).toString("hex"), c = e.slice(32, 64).toString("hex"), x = Zi.decodePointHex("04" + h + c).multiply(new Ie.BigInteger(r, 16)), E = At(x.getX().toBigInteger().toString(16), 64), g = At(x.getY().toBigInteger().toString(16), 64), B = e.slice(64, 96), v = e.slice(96);
  a === 0 && (B = e.slice(e.length - 32), v = e.slice(64, e.length - 32));
  var b = Qi(be.Buffer.from(E + g, "hex"), v.length), C = new Ie.BigInteger(v.toString("hex"), 16).xor(new Ie.BigInteger(b.toString("hex"), 16)).toString(16), k = fn(E + C + g, "hex", "hex") === B.toString("hex") ? be.Buffer.from(C, "hex") : be.Buffer.alloc(0);
  return s ? k.toString(s) : _r(k);
} }, Vr = [[214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5], [43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153], [156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98], [228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166], [71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168], [104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53], [30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135], [212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158], [234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161], [224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227], [29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111], [213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81], [141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216], [10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176], [137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132], [24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]], Yr = [2746333894, 1453994832, 1736282519, 2993693404], Ju = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373, 4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337, 4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301, 4110090761, 269950501, 741554753, 1213159005, 1684763257], Wr = /^[0-9a-f]{32}$/i, yo = function(e) {
  return Vr[(4026531840 & e) >>> 28][(251658240 & e) >>> 24] << 24 | Vr[(15728640 & e) >>> 20][(983040 & e) >>> 16] << 16 | Vr[(61440 & e) >>> 12][(3840 & e) >>> 8] << 8 | Vr[(240 & e) >>> 4][(15 & e) >>> 0] << 0;
}, go = function(e) {
  return (r = yo(e)) ^ Ge(r, 2) ^ Ge(r, 10) ^ Ge(r, 18) ^ Ge(r, 24);
  var r;
}, bo = function(e) {
  var r, n = new Array(36);
  n[0] = e[0] ^ Yr[0], n[1] = e[1] ^ Yr[1], n[2] = e[2] ^ Yr[2], n[3] = e[3] ^ Yr[3];
  for (var t = new Array(32), i = 0; i < 32; i++)
    n[i + 4] = n[i] ^ (r = yo(n[i + 1] ^ n[i + 2] ^ n[i + 3] ^ Ju[i])) ^ Ge(r, 13) ^ Ge(r, 23), t[i] = n[i + 4];
  return t;
}, ea = function(e, r) {
  for (var n = bo(r), t = 0; t < 32; t++)
    e[t + 4] = e[t] ^ go(e[t + 1] ^ e[t + 2] ^ e[t + 3] ^ n[t]);
  return [e[35], e[34], e[33], e[32]];
}, ta = function(e, r) {
  for (var n = bo(r).reverse(), t = 0; t < 32; t++)
    e[t + 4] = e[t] ^ go(e[t + 1] ^ e[t + 2] ^ e[t + 3] ^ n[t]);
  return [e[35], e[34], e[33], e[32]];
}, Kr = function(e) {
  return [e.readInt32BE(0), e.readInt32BE(4), e.readInt32BE(8), e.readInt32BE(12)];
}, jr = function(e) {
  for (var r = be.Buffer.alloc(16), n = 0; n < 4; n++)
    r.writeInt32BE(e[n], 4 * n);
  return r;
}, ra = { __proto__: null, constants: { ECB: 1, CBC: 2 }, encrypt: function(e, r, n) {
  var t = n || {}, i = t.mode, a = t.iv, s = t.outputEncoding;
  if (typeof e == "string" ? e = be.Buffer.from(e, t.inputEncoding || "utf8") : e instanceof ArrayBuffer && (e = be.Buffer.from(e)), !be.Buffer.isBuffer(e))
    throw new TypeError('Expected "string" | "Buffer" | "ArrayBuffer" but received "' + Object.prototype.toString.call(e) + '"');
  if (!Wr.test(r))
    throw new TypeError("Invalid value of cipher `key`");
  if (r = be.Buffer.from(r, "hex"), i === 2 && !Wr.test(a))
    throw new TypeError("Invalid value of `iv` option");
  return function(o, h, c, x) {
    c && (c = Kr(c)), h = Kr(h);
    for (var E = [], g = (o = function(M) {
      var P = 16 - M.length % 16, z = be.Buffer.alloc(P, P);
      return be.Buffer.concat([M, z], M.length + P);
    }(o)).length / 16, B = 0; B < g; B++)
      if (c) {
        var v = 16 * B, b = [c[0] ^ o.readInt32BE(v), c[1] ^ o.readInt32BE(v + 4), c[2] ^ o.readInt32BE(v + 8), c[3] ^ o.readInt32BE(v + 12)], C = ea(b, h);
        E.push(jr(C)), c = C.slice(0);
      } else {
        var k = 16 * B, A = [o.readInt32BE(k), o.readInt32BE(k + 4), o.readInt32BE(k + 8), o.readInt32BE(k + 12)], S = ea(A, h);
        E.push(jr(S));
      }
    var T = be.Buffer.concat(E, o.length);
    return x ? T.toString(x) : _r(T);
  }(e, r, a = i === 2 ? be.Buffer.from(a, "hex") : null, s);
}, decrypt: function(e, r, n) {
  var t = n || {}, i = t.mode, a = t.iv, s = t.outputEncoding;
  if (typeof e == "string" ? e = be.Buffer.from(e, t.inputEncoding) : e instanceof ArrayBuffer && (e = be.Buffer.from(e)), !be.Buffer.isBuffer(e))
    throw new TypeError('Expected "string" | "Buffer" | "ArrayBuffer" but received "' + Object.prototype.toString.call(e) + '"');
  if (!Wr.test(r))
    throw new TypeError("Invalid value of cipher `key`");
  if (r = be.Buffer.from(r, "hex"), i === 2 && !Wr.test(a))
    throw new TypeError("Invalid value of `iv` option");
  return function(o, h, c, x) {
    c && (c = Kr(c)), h = Kr(h);
    var E = [], g = o.length / 16;
    if (c)
      for (var B = g - 1; B >= 0; B--) {
        var v, b = 16 * B;
        v = B > 0 ? [o.readInt32BE(b - 16), o.readInt32BE(b - 16 + 4), o.readInt32BE(b - 16 + 8), o.readInt32BE(b - 16 + 12)] : c;
        var C = [o.readInt32BE(b), o.readInt32BE(b + 4), o.readInt32BE(b + 8), o.readInt32BE(b + 12)], k = ta(C, h);
        E.unshift(jr([k[0] ^ v[0], k[1] ^ v[1], k[2] ^ v[2], k[3] ^ v[3]]));
      }
    else
      for (var A = 0; A < g; A++) {
        var S = 16 * A, T = [o.readInt32BE(S), o.readInt32BE(S + 4), o.readInt32BE(S + 8), o.readInt32BE(S + 12)], M = ta(T, h);
        E.push(jr(M));
      }
    var P = be.Buffer.concat(E, o.length - E[E.length - 1][15]);
    return x ? P.toString(x) : _r(P);
  }(e, r, a = i === 2 ? be.Buffer.from(a, "hex") : null, s);
} };
const Qu = {
  // 生成 SM2 密钥对（公钥+私钥）
  generateKeyPair() {
    return mr.generateKeyPair();
  },
  // 公钥加密
  encrypt(e, r) {
    return mr.encrypt(e, r, {
      inputEncoding: "utf8",
      outputEncoding: "base64"
    });
  },
  // 私钥解密
  decrypt(e, r) {
    return mr.decrypt(e, r, {
      inputEncoding: "base64",
      outputEncoding: "utf8"
    });
  },
  // 私钥签名（常用：交易签名、身份认证）
  sign(e, r) {
    return mr.sign(k0.digest(e), r, "base64");
  },
  // 公钥验签
  verify(e, r, n) {
    return mr.verify(k0.digest(e), r, n, "base64");
  }
}, ec = {
  // 计算数据摘要（指纹）
  digest(e) {
    return k0.digest(e, "utf8", "hex");
  }
}, tc = {
  // 生成随机16位密钥（SM4固定128位）
  generateKey() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let r = "";
    for (let n = 0; n < 16; n++)
      r += e.charAt(Math.floor(Math.random() * e.length));
    return r;
  },
  // 加密（传输/存储用）
  encrypt(e, r) {
    return ra.encrypt(e, r, {
      inputEncoding: "utf8",
      outputEncoding: "base64"
    });
  },
  // 解密
  decrypt(e, r) {
    return ra.decrypt(e, r, {
      inputEncoding: "base64",
      outputEncoding: "utf8"
    });
  }
}, Bo = {
  SM2Util: Qu,
  SM3Util: ec,
  SM4Util: tc
};
function rc(e) {
  if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(e))
    return;
  let n = e.toLowerCase().replace(/\#/g, ""), t = n.length;
  if (t == 3) {
    let s = "";
    for (var i = 0; i < t; i++)
      s += n.slice(i, i + 1).concat(n.slice(i, i + 1));
    n = s;
  }
  let a = [];
  for (let s = 0; s < 6; s = s + 2) {
    let o = n.slice(s, s + 2);
    a.push(parseInt("0x" + o));
  }
  return a.join(",");
}
function nc(e) {
  if (!/^(rgb|RGB)/.test(e))
    return;
  var n = e.slice(4, e.length - 1).split(",");
  let t = "#";
  for (var i = 0; i < n.length; i++) {
    var a = Number(n[i]).toString(16);
    a == "0" && (a = a + "0"), t += a;
  }
  return t;
}
function ic() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
}
const Eo = {
  c16ToRgb: rc,
  rgbToC16: nc,
  random16Color: ic
}, ac = 30 * 1;
function oc() {
  const e = new Date(Kt.getDES(window.g.SRKJ_APP, "SRKJ_LJS_license_date_2023_07_27")).getTime();
  return ((/* @__PURE__ */ new Date()).getTime() - e) / 1e3 / 60 / 60 / 24 <= ac;
}
const wo = {
  licenseDateCheck: oc
}, Co = Symbol(), nn = "el", sc = "is-", Zt = (e, r, n, t, i) => {
  let a = `${e}-${r}`;
  return n && (a += `-${n}`), t && (a += `__${t}`), i && (a += `--${i}`), a;
}, Fo = Symbol("namespaceContextKey"), _o = (e) => {
  const r = e || (Mt() ? ct(Fo, Ne(nn)) : Ne(nn));
  return ce(() => re(r) || nn);
}, Nt = (e, r) => {
  const n = _o(r);
  return {
    namespace: n,
    b: (b = "") => Zt(n.value, e, b, "", ""),
    e: (b) => b ? Zt(n.value, e, "", b, "") : "",
    m: (b) => b ? Zt(n.value, e, "", "", b) : "",
    be: (b, C) => b && C ? Zt(n.value, e, b, C, "") : "",
    em: (b, C) => b && C ? Zt(n.value, e, "", b, C) : "",
    bm: (b, C) => b && C ? Zt(n.value, e, b, "", C) : "",
    bem: (b, C, k) => b && C && k ? Zt(n.value, e, b, C, k) : "",
    is: (b, ...C) => {
      const k = C.length >= 1 ? C[0] : !0;
      return b && k ? `${sc}${b}` : "";
    },
    cssVar: (b) => {
      const C = {};
      for (const k in b)
        b[k] && (C[`--${n.value}-${k}`] = b[k]);
      return C;
    },
    cssVarName: (b) => `--${n.value}-${b}`,
    cssVarBlock: (b) => {
      const C = {};
      for (const k in b)
        b[k] && (C[`--${n.value}-${e}-${k}`] = b[k]);
      return C;
    },
    cssVarBlockName: (b) => `--${n.value}-${e}-${b}`
  };
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Cr = () => {
}, lc = Object.prototype.hasOwnProperty, dn = (e, r) => lc.call(e, r), lr = (e) => typeof e == "function", kt = (e) => typeof e == "string", ur = (e) => e !== null && typeof e == "object", uc = (e) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (n) => r[n] || (r[n] = e(n));
}, cc = /-(\w)/g, fc = uc((e) => e.replace(cc, (r, n) => n ? n.toUpperCase() : ""));
var dc = typeof global == "object" && global && global.Object === Object && global;
const hc = dc;
var pc = typeof self == "object" && self && self.Object === Object && self, xc = hc || pc || Function("return this")();
const G0 = xc;
var vc = G0.Symbol;
const jt = vc;
var Ao = Object.prototype, mc = Ao.hasOwnProperty, yc = Ao.toString, yr = jt ? jt.toStringTag : void 0;
function gc(e) {
  var r = mc.call(e, yr), n = e[yr];
  try {
    e[yr] = void 0;
    var t = !0;
  } catch {
  }
  var i = yc.call(e);
  return t && (r ? e[yr] = n : delete e[yr]), i;
}
var bc = Object.prototype, Bc = bc.toString;
function Ec(e) {
  return Bc.call(e);
}
var wc = "[object Null]", Cc = "[object Undefined]", na = jt ? jt.toStringTag : void 0;
function X0(e) {
  return e == null ? e === void 0 ? Cc : wc : na && na in Object(e) ? gc(e) : Ec(e);
}
function Z0(e) {
  return e != null && typeof e == "object";
}
var Fc = "[object Symbol]";
function J0(e) {
  return typeof e == "symbol" || Z0(e) && X0(e) == Fc;
}
function _c(e, r) {
  for (var n = -1, t = e == null ? 0 : e.length, i = Array(t); ++n < t; )
    i[n] = r(e[n], n, e);
  return i;
}
var Ac = Array.isArray;
const kr = Ac;
var Dc = 1 / 0, ia = jt ? jt.prototype : void 0, aa = ia ? ia.toString : void 0;
function Do(e) {
  if (typeof e == "string")
    return e;
  if (kr(e))
    return _c(e, Do) + "";
  if (J0(e))
    return aa ? aa.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -Dc ? "-0" : r;
}
function hn(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
function Sc(e) {
  return e;
}
var Tc = "[object AsyncFunction]", Ic = "[object Function]", kc = "[object GeneratorFunction]", Rc = "[object Proxy]";
function Mc(e) {
  if (!hn(e))
    return !1;
  var r = X0(e);
  return r == Ic || r == kc || r == Tc || r == Rc;
}
var Lc = G0["__core-js_shared__"];
const w0 = Lc;
var oa = function() {
  var e = /[^.]+$/.exec(w0 && w0.keys && w0.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Pc(e) {
  return !!oa && oa in e;
}
var Nc = Function.prototype, Oc = Nc.toString;
function zc(e) {
  if (e != null) {
    try {
      return Oc.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var $c = /[\\^$.*+?()[\]{}|]/g, Uc = /^\[object .+?Constructor\]$/, Hc = Function.prototype, qc = Object.prototype, Vc = Hc.toString, Yc = qc.hasOwnProperty, Wc = RegExp(
  "^" + Vc.call(Yc).replace($c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Kc(e) {
  if (!hn(e) || Pc(e))
    return !1;
  var r = Mc(e) ? Wc : Uc;
  return r.test(zc(e));
}
function jc(e, r) {
  return e == null ? void 0 : e[r];
}
function Q0(e, r) {
  var n = jc(e, r);
  return Kc(n) ? n : void 0;
}
function Gc(e, r, n) {
  switch (n.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, n[0]);
    case 2:
      return e.call(r, n[0], n[1]);
    case 3:
      return e.call(r, n[0], n[1], n[2]);
  }
  return e.apply(r, n);
}
var Xc = 800, Zc = 16, Jc = Date.now;
function Qc(e) {
  var r = 0, n = 0;
  return function() {
    var t = Jc(), i = Zc - (t - n);
    if (n = t, i > 0) {
      if (++r >= Xc)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
function ef(e) {
  return function() {
    return e;
  };
}
var tf = function() {
  try {
    var e = Q0(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const pn = tf;
var rf = pn ? function(e, r) {
  return pn(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ef(r),
    writable: !0
  });
} : Sc;
const nf = rf;
var af = Qc(nf);
const of = af;
var sf = 9007199254740991, lf = /^(?:0|[1-9]\d*)$/;
function So(e, r) {
  var n = typeof e;
  return r = r ?? sf, !!r && (n == "number" || n != "symbol" && lf.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function uf(e, r, n) {
  r == "__proto__" && pn ? pn(e, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[r] = n;
}
function To(e, r) {
  return e === r || e !== e && r !== r;
}
var cf = Object.prototype, ff = cf.hasOwnProperty;
function df(e, r, n) {
  var t = e[r];
  (!(ff.call(e, r) && To(t, n)) || n === void 0 && !(r in e)) && uf(e, r, n);
}
var sa = Math.max;
function hf(e, r, n) {
  return r = sa(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var t = arguments, i = -1, a = sa(t.length - r, 0), s = Array(a); ++i < a; )
      s[i] = t[r + i];
    i = -1;
    for (var o = Array(r + 1); ++i < r; )
      o[i] = t[i];
    return o[r] = n(s), Gc(e, this, o);
  };
}
var pf = 9007199254740991;
function xf(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pf;
}
var vf = "[object Arguments]";
function la(e) {
  return Z0(e) && X0(e) == vf;
}
var Io = Object.prototype, mf = Io.hasOwnProperty, yf = Io.propertyIsEnumerable, gf = la(function() {
  return arguments;
}()) ? la : function(e) {
  return Z0(e) && mf.call(e, "callee") && !yf.call(e, "callee");
};
const ko = gf;
var bf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Bf = /^\w*$/;
function Ef(e, r) {
  if (kr(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || J0(e) ? !0 : Bf.test(e) || !bf.test(e) || r != null && e in Object(r);
}
var wf = Q0(Object, "create");
const Ar = wf;
function Cf() {
  this.__data__ = Ar ? Ar(null) : {}, this.size = 0;
}
function Ff(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var _f = "__lodash_hash_undefined__", Af = Object.prototype, Df = Af.hasOwnProperty;
function Sf(e) {
  var r = this.__data__;
  if (Ar) {
    var n = r[e];
    return n === _f ? void 0 : n;
  }
  return Df.call(r, e) ? r[e] : void 0;
}
var Tf = Object.prototype, If = Tf.hasOwnProperty;
function kf(e) {
  var r = this.__data__;
  return Ar ? r[e] !== void 0 : If.call(r, e);
}
var Rf = "__lodash_hash_undefined__";
function Mf(e, r) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ar && r === void 0 ? Rf : r, this;
}
function er(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var t = e[r];
    this.set(t[0], t[1]);
  }
}
er.prototype.clear = Cf;
er.prototype.delete = Ff;
er.prototype.get = Sf;
er.prototype.has = kf;
er.prototype.set = Mf;
function Lf() {
  this.__data__ = [], this.size = 0;
}
function wn(e, r) {
  for (var n = e.length; n--; )
    if (To(e[n][0], r))
      return n;
  return -1;
}
var Pf = Array.prototype, Nf = Pf.splice;
function Of(e) {
  var r = this.__data__, n = wn(r, e);
  if (n < 0)
    return !1;
  var t = r.length - 1;
  return n == t ? r.pop() : Nf.call(r, n, 1), --this.size, !0;
}
function zf(e) {
  var r = this.__data__, n = wn(r, e);
  return n < 0 ? void 0 : r[n][1];
}
function $f(e) {
  return wn(this.__data__, e) > -1;
}
function Uf(e, r) {
  var n = this.__data__, t = wn(n, e);
  return t < 0 ? (++this.size, n.push([e, r])) : n[t][1] = r, this;
}
function fr(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var t = e[r];
    this.set(t[0], t[1]);
  }
}
fr.prototype.clear = Lf;
fr.prototype.delete = Of;
fr.prototype.get = zf;
fr.prototype.has = $f;
fr.prototype.set = Uf;
var Hf = Q0(G0, "Map");
const qf = Hf;
function Vf() {
  this.size = 0, this.__data__ = {
    hash: new er(),
    map: new (qf || fr)(),
    string: new er()
  };
}
function Yf(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function Cn(e, r) {
  var n = e.__data__;
  return Yf(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
function Wf(e) {
  var r = Cn(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function Kf(e) {
  return Cn(this, e).get(e);
}
function jf(e) {
  return Cn(this, e).has(e);
}
function Gf(e, r) {
  var n = Cn(this, e), t = n.size;
  return n.set(e, r), this.size += n.size == t ? 0 : 1, this;
}
function nr(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var t = e[r];
    this.set(t[0], t[1]);
  }
}
nr.prototype.clear = Vf;
nr.prototype.delete = Wf;
nr.prototype.get = Kf;
nr.prototype.has = jf;
nr.prototype.set = Gf;
var Xf = "Expected a function";
function ei(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Xf);
  var n = function() {
    var t = arguments, i = r ? r.apply(this, t) : t[0], a = n.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, t);
    return n.cache = a.set(i, s) || a, s;
  };
  return n.cache = new (ei.Cache || nr)(), n;
}
ei.Cache = nr;
var Zf = 500;
function Jf(e) {
  var r = ei(e, function(t) {
    return n.size === Zf && n.clear(), t;
  }), n = r.cache;
  return r;
}
var Qf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ed = /\\(\\)?/g, td = Jf(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Qf, function(n, t, i, a) {
    r.push(i ? a.replace(ed, "$1") : t || n);
  }), r;
});
const rd = td;
function nd(e) {
  return e == null ? "" : Do(e);
}
function Fn(e, r) {
  return kr(e) ? e : Ef(e, r) ? [e] : rd(nd(e));
}
var id = 1 / 0;
function ti(e) {
  if (typeof e == "string" || J0(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -id ? "-0" : r;
}
function Ro(e, r) {
  r = Fn(r, e);
  for (var n = 0, t = r.length; e != null && n < t; )
    e = e[ti(r[n++])];
  return n && n == t ? e : void 0;
}
function ad(e, r, n) {
  var t = e == null ? void 0 : Ro(e, r);
  return t === void 0 ? n : t;
}
function od(e, r) {
  for (var n = -1, t = r.length, i = e.length; ++n < t; )
    e[i + n] = r[n];
  return e;
}
var ua = jt ? jt.isConcatSpreadable : void 0;
function sd(e) {
  return kr(e) || ko(e) || !!(ua && e && e[ua]);
}
function Mo(e, r, n, t, i) {
  var a = -1, s = e.length;
  for (n || (n = sd), i || (i = []); ++a < s; ) {
    var o = e[a];
    r > 0 && n(o) ? r > 1 ? Mo(o, r - 1, n, t, i) : od(i, o) : t || (i[i.length] = o);
  }
  return i;
}
function ld(e) {
  var r = e == null ? 0 : e.length;
  return r ? Mo(e, 1) : [];
}
function ud(e) {
  return of(hf(e, void 0, ld), e + "");
}
function cd(e, r) {
  return e != null && r in Object(e);
}
function fd(e, r, n) {
  r = Fn(r, e);
  for (var t = -1, i = r.length, a = !1; ++t < i; ) {
    var s = ti(r[t]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++t != i ? a : (i = e == null ? 0 : e.length, !!i && xf(i) && So(s, i) && (kr(e) || ko(e)));
}
function dd(e, r) {
  return e != null && fd(e, r, cd);
}
function Lo(e) {
  for (var r = -1, n = e == null ? 0 : e.length, t = {}; ++r < n; ) {
    var i = e[r];
    t[i[0]] = i[1];
  }
  return t;
}
function Po(e) {
  return e == null;
}
function hd(e, r, n, t) {
  if (!hn(e))
    return e;
  r = Fn(r, e);
  for (var i = -1, a = r.length, s = a - 1, o = e; o != null && ++i < a; ) {
    var h = ti(r[i]), c = n;
    if (h === "__proto__" || h === "constructor" || h === "prototype")
      return e;
    if (i != s) {
      var x = o[h];
      c = t ? t(x, h, o) : void 0, c === void 0 && (c = hn(x) ? x : So(r[i + 1]) ? [] : {});
    }
    df(o, h, c), o = o[h];
  }
  return e;
}
function pd(e, r, n) {
  for (var t = -1, i = r.length, a = {}; ++t < i; ) {
    var s = r[t], o = Ro(e, s);
    n(o, s) && hd(a, Fn(s, e), o);
  }
  return a;
}
function xd(e, r) {
  return pd(e, r, function(n, t) {
    return dd(e, t);
  });
}
var vd = ud(function(e, r) {
  return e == null ? {} : xd(e, r);
});
const md = vd, No = (e) => e === void 0, xn = (e) => typeof e == "number", Dr = (e) => typeof Element > "u" ? !1 : e instanceof Element, yd = (e) => kt(e) ? !Number.isNaN(Number(e)) : !1;
var gd = Object.defineProperty, bd = Object.defineProperties, Bd = Object.getOwnPropertyDescriptors, ca = Object.getOwnPropertySymbols, Ed = Object.prototype.hasOwnProperty, wd = Object.prototype.propertyIsEnumerable, fa = (e, r, n) => r in e ? gd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n, Cd = (e, r) => {
  for (var n in r || (r = {}))
    Ed.call(r, n) && fa(e, n, r[n]);
  if (ca)
    for (var n of ca(r))
      wd.call(r, n) && fa(e, n, r[n]);
  return e;
}, Fd = (e, r) => bd(e, Bd(r));
function _d(e, r) {
  var n;
  const t = wr();
  return Ha(() => {
    t.value = e();
  }, Fd(Cd({}, r), {
    flush: (n = r == null ? void 0 : r.flush) != null ? n : "sync"
  })), il(t);
}
var da;
const Bt = typeof window < "u", Ad = (e) => typeof e == "string", Dd = () => {
};
Bt && ((da = window == null ? void 0 : window.navigator) != null && da.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Oo(e) {
  return typeof e == "function" ? e() : re(e);
}
function Sd(e) {
  return e;
}
function zo(e) {
  return al() ? (qa(e), !0) : !1;
}
function Td(e, r = !0) {
  Mt() ? Ot(e) : r ? e() : ut(e);
}
function $o(e) {
  var r;
  const n = Oo(e);
  return (r = n == null ? void 0 : n.$el) != null ? r : n;
}
const Uo = Bt ? window : void 0;
function gr(...e) {
  let r, n, t, i;
  if (Ad(e[0]) || Array.isArray(e[0]) ? ([n, t, i] = e, r = Uo) : [r, n, t, i] = e, !r)
    return Dd;
  Array.isArray(n) || (n = [n]), Array.isArray(t) || (t = [t]);
  const a = [], s = () => {
    a.forEach((x) => x()), a.length = 0;
  }, o = (x, E, g, B) => (x.addEventListener(E, g, B), () => x.removeEventListener(E, g, B)), h = ft(() => [$o(r), Oo(i)], ([x, E]) => {
    s(), x && a.push(...n.flatMap((g) => t.map((B) => o(x, g, B, E))));
  }, { immediate: !0, flush: "post" }), c = () => {
    h(), s();
  };
  return zo(c), c;
}
function Id(e, r = !1) {
  const n = Ne(), t = () => n.value = !!e();
  return t(), Td(t, r), n;
}
const ha = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, pa = "__vueuse_ssr_handlers__";
ha[pa] = ha[pa] || {};
var xa = Object.getOwnPropertySymbols, kd = Object.prototype.hasOwnProperty, Rd = Object.prototype.propertyIsEnumerable, Md = (e, r) => {
  var n = {};
  for (var t in e)
    kd.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && xa)
    for (var t of xa(e))
      r.indexOf(t) < 0 && Rd.call(e, t) && (n[t] = e[t]);
  return n;
};
function Ld(e, r, n = {}) {
  const t = n, { window: i = Uo } = t, a = Md(t, ["window"]);
  let s;
  const o = Id(() => i && "ResizeObserver" in i), h = () => {
    s && (s.disconnect(), s = void 0);
  }, c = ft(() => $o(e), (E) => {
    h(), o.value && i && E && (s = new ResizeObserver(r), s.observe(E, a));
  }, { immediate: !0, flush: "post" }), x = () => {
    h(), c();
  };
  return zo(x), {
    isSupported: o,
    stop: x
  };
}
var va;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(va || (va = {}));
var Pd = Object.defineProperty, ma = Object.getOwnPropertySymbols, Nd = Object.prototype.hasOwnProperty, Od = Object.prototype.propertyIsEnumerable, ya = (e, r, n) => r in e ? Pd(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n, zd = (e, r) => {
  for (var n in r || (r = {}))
    Nd.call(r, n) && ya(e, n, r[n]);
  if (ma)
    for (var n of ma(r))
      Od.call(r, n) && ya(e, n, r[n]);
  return e;
};
const $d = {
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
zd({
  linear: Sd
}, $d);
class Ho extends Error {
  constructor(r) {
    super(r), this.name = "ElementPlusError";
  }
}
function Ud(e, r) {
  throw new Ho(`[${e}] ${r}`);
}
function Rt(e, r) {
  if (process.env.NODE_ENV !== "production") {
    const n = kt(e) ? new Ho(`[${e}] ${r}`) : e;
  }
}
const ga = {
  current: 0
}, ba = Ne(0), qo = 2e3, Ba = Symbol("elZIndexContextKey"), Vo = Symbol("zIndexContextKey"), Hd = (e) => {
  const r = Mt() ? ct(Ba, ga) : ga, n = e || (Mt() ? ct(Vo, void 0) : void 0), t = ce(() => {
    const s = re(n);
    return xn(s) ? s : qo;
  }), i = ce(() => t.value + ba.value), a = () => (r.current++, ba.value = r.current, i.value);
  return !Bt && !ct(Ba) && Rt("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: t,
    currentZIndex: i,
    nextZIndex: a
  };
};
var qd = {
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
const Vd = (e) => (r, n) => Yd(r, n, re(e)), Yd = (e, r, n) => ad(n, e, e).replace(/\{(\w+)\}/g, (t, i) => {
  var a;
  return `${(a = r == null ? void 0 : r[i]) != null ? a : `{${i}}`}`;
}), Wd = (e) => {
  const r = ce(() => re(e).name), n = Va(e) ? e : Ne(e);
  return {
    lang: r,
    locale: n,
    t: Vd(e)
  };
}, Yo = Symbol("localeContextKey"), Kd = (e) => {
  const r = e || ct(Yo, Ne());
  return Wd(ce(() => r.value || qd));
}, Wo = "__epPropKey", Wt = (e) => e, jd = (e) => ur(e) && !!e[Wo], Ko = (e, r) => {
  if (!ur(e) || jd(e))
    return e;
  const { values: n, required: t, default: i, type: a, validator: s } = e, h = {
    type: a,
    required: !!t,
    validator: n || s ? (c) => {
      let x = !1, E = [];
      if (n && (E = Array.from(n), dn(e, "default") && E.push(i), x || (x = E.includes(c))), s && (x || (x = s(c))), !x && E.length > 0) {
        const g = [...new Set(E)].map((B) => JSON.stringify(B)).join(", ");
        ol(`Invalid prop: validation failed${r ? ` for prop "${r}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(c)}.`);
      }
      return x;
    } : void 0,
    [Wo]: !0
  };
  return dn(e, "default") && (h.default = i), h;
}, dr = (e) => Lo(Object.entries(e).map(([r, n]) => [
  r,
  Ko(n, r)
])), jo = ["", "default", "small", "large"], Go = Ko({
  type: String,
  values: jo,
  required: !1
}), Xo = Symbol("size"), Gd = () => {
  const e = ct(Xo, {});
  return ce(() => re(e.size) || "");
}, Xd = Symbol("emptyValuesContextKey");
dr({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => lr(e) ? !e() : !e
  }
});
const Ea = (e) => Object.keys(e), vn = Ne();
function ri(e, r = void 0) {
  const n = Mt() ? ct(Co, vn) : vn;
  return e ? ce(() => {
    var t, i;
    return (i = (t = n.value) == null ? void 0 : t[e]) != null ? i : r;
  }) : n;
}
function Zd(e, r) {
  const n = ri(), t = Nt(e, ce(() => {
    var o;
    return ((o = n.value) == null ? void 0 : o.namespace) || nn;
  })), i = Kd(ce(() => {
    var o;
    return (o = n.value) == null ? void 0 : o.locale;
  })), a = Hd(ce(() => {
    var o;
    return ((o = n.value) == null ? void 0 : o.zIndex) || qo;
  })), s = ce(() => {
    var o;
    return re(r) || ((o = n.value) == null ? void 0 : o.size) || "";
  });
  return Jd(ce(() => re(n) || {})), {
    ns: t,
    locale: i,
    zIndex: a,
    size: s
  };
}
const Jd = (e, r, n = !1) => {
  var t;
  const i = !!Mt(), a = i ? ri() : void 0, s = (t = r == null ? void 0 : r.provide) != null ? t : i ? $0 : void 0;
  if (!s) {
    Rt("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const o = ce(() => {
    const h = re(e);
    return a != null && a.value ? Qd(a.value, h) : h;
  });
  return s(Co, o), s(Yo, ce(() => o.value.locale)), s(Fo, ce(() => o.value.namespace)), s(Vo, ce(() => o.value.zIndex)), s(Xo, {
    size: ce(() => o.value.size || "")
  }), s(Xd, ce(() => ({
    emptyValues: o.value.emptyValues,
    valueOnClear: o.value.valueOnClear
  }))), (n || !vn.value) && (vn.value = o.value), o;
}, Qd = (e, r) => {
  const n = [.../* @__PURE__ */ new Set([...Ea(e), ...Ea(r)])], t = {};
  for (const i of n)
    t[i] = r[i] !== void 0 ? r[i] : e[i];
  return t;
}, R0 = "update:modelValue", wa = "change", Ca = "input";
var hr = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [t, i] of r)
    n[t] = i;
  return n;
};
const eh = "utils/dom/style", Zo = (e = "") => e.split(" ").filter((r) => !!r.trim()), Fa = (e, r) => {
  if (!e || !r)
    return !1;
  if (r.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(r);
}, th = (e, r) => {
  !e || !r.trim() || e.classList.add(...Zo(r));
}, rh = (e, r) => {
  !e || !r.trim() || e.classList.remove(...Zo(r));
}, nh = (e, r) => {
  var n;
  if (!Bt || !e || !r)
    return "";
  let t = fc(r);
  t === "float" && (t = "cssFloat");
  try {
    const i = e.style[t];
    if (i)
      return i;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[t] : "";
  } catch {
    return e.style[t];
  }
};
function M0(e, r = "px") {
  if (!e)
    return "";
  if (xn(e) || yd(e))
    return `${e}${r}`;
  if (kt(e))
    return e;
  Rt(eh, "binding value must be a string or number");
}
let Gr;
const ih = (e) => {
  var r;
  if (!Bt)
    return 0;
  if (Gr !== void 0)
    return Gr;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const t = n.offsetWidth;
  n.style.overflow = "scroll";
  const i = document.createElement("div");
  i.style.width = "100%", n.appendChild(i);
  const a = i.offsetWidth;
  return (r = n.parentNode) == null || r.removeChild(n), Gr = t - a, Gr;
}, ni = (e, r) => {
  if (e.install = (n) => {
    for (const t of [e, ...Object.values(r ?? {})])
      n.component(t.name, t);
  }, r)
    for (const [n, t] of Object.entries(r))
      e[n] = t;
  return e;
}, ah = (e) => (e.install = Cr, e), oh = dr({
  size: {
    type: Wt([Number, String])
  },
  color: {
    type: String
  }
}), sh = qe({
  name: "ElIcon",
  inheritAttrs: !1
}), lh = /* @__PURE__ */ qe({
  ...sh,
  props: oh,
  setup(e) {
    const r = e, n = Nt("icon"), t = ce(() => {
      const { size: i, color: a } = r;
      return !i && !a ? {} : {
        fontSize: No(i) ? void 0 : M0(i),
        "--color": a
      };
    });
    return (i, a) => (ne(), xe("i", Fr({
      class: re(n).b(),
      style: re(t)
    }, i.$attrs), [
      at(i.$slots, "default")
    ], 16));
  }
});
var uh = /* @__PURE__ */ hr(lh, [["__file", "icon.vue"]]);
const Vt = ni(uh);
/*! Element Plus Icons Vue v2.3.1 */
var ch = /* @__PURE__ */ qe({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      me("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), fh = ch, dh = /* @__PURE__ */ qe({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), Jo = dh, hh = /* @__PURE__ */ qe({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      me("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Qo = hh, ph = /* @__PURE__ */ qe({
  name: "Close",
  __name: "close",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), xh = ph, vh = /* @__PURE__ */ qe({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      me("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), mh = vh, yh = /* @__PURE__ */ qe({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), es = yh, gh = /* @__PURE__ */ qe({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), mn = gh, bh = /* @__PURE__ */ qe({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ts = bh, Bh = /* @__PURE__ */ qe({
  name: "View",
  __name: "view",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Eh = Bh, wh = /* @__PURE__ */ qe({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), rs = wh, Ch = /* @__PURE__ */ qe({
  name: "Warning",
  __name: "warning",
  setup(e) {
    return (r, n) => (ne(), xe("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      me("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), Fh = Ch;
const yn = Wt([
  String,
  Object,
  Function
]), _h = {
  Close: xh,
  SuccessFilled: ts,
  InfoFilled: es,
  WarningFilled: rs,
  CircleCloseFilled: Jo
}, _a = {
  success: ts,
  warning: rs,
  error: Jo,
  info: es
}, Ah = {
  validating: mn,
  success: fh,
  error: Qo
}, Dh = () => Bt && /firefox/i.test(window.navigator.userAgent);
let ot;
const Sh = {
  height: "0",
  visibility: "hidden",
  overflow: Dh() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Th = [
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
function Ih(e) {
  const r = window.getComputedStyle(e), n = r.getPropertyValue("box-sizing"), t = Number.parseFloat(r.getPropertyValue("padding-bottom")) + Number.parseFloat(r.getPropertyValue("padding-top")), i = Number.parseFloat(r.getPropertyValue("border-bottom-width")) + Number.parseFloat(r.getPropertyValue("border-top-width"));
  return { contextStyle: Th.map((s) => [
    s,
    r.getPropertyValue(s)
  ]), paddingSize: t, borderSize: i, boxSizing: n };
}
function Aa(e, r = 1, n) {
  var t;
  ot || (ot = document.createElement("textarea"), document.body.appendChild(ot));
  const { paddingSize: i, borderSize: a, boxSizing: s, contextStyle: o } = Ih(e);
  o.forEach(([E, g]) => ot == null ? void 0 : ot.style.setProperty(E, g)), Object.entries(Sh).forEach(([E, g]) => ot == null ? void 0 : ot.style.setProperty(E, g, "important")), ot.value = e.value || e.placeholder || "";
  let h = ot.scrollHeight;
  const c = {};
  s === "border-box" ? h = h + a : s === "content-box" && (h = h - i), ot.value = "";
  const x = ot.scrollHeight - i;
  if (xn(r)) {
    let E = x * r;
    s === "border-box" && (E = E + i + a), h = Math.max(E, h), c.minHeight = `${E}px`;
  }
  if (xn(n)) {
    let E = x * n;
    s === "border-box" && (E = E + i + a), h = Math.min(E, h);
  }
  return c.height = `${h}px`, (t = ot.parentNode) == null || t.removeChild(ot), ot = void 0, c;
}
const kh = (e) => e, Rh = dr({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Mh = (e) => md(Rh, e), Lh = dr({
  id: {
    type: String,
    default: void 0
  },
  size: Go,
  disabled: Boolean,
  modelValue: {
    type: Wt([
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
    type: Wt([Boolean, Object]),
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
    type: yn
  },
  prefixIcon: {
    type: yn
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
    type: Wt([Object, Array, String]),
    default: () => kh({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Mh(["ariaLabel"])
}), Ph = {
  [R0]: (e) => kt(e),
  input: (e) => kt(e),
  change: (e) => kt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Nh = ["class", "style"], Oh = /^on[A-Z]/, zh = (e = {}) => {
  const { excludeListeners: r = !1, excludeKeys: n } = e, t = ce(() => ((n == null ? void 0 : n.value) || []).concat(Nh)), i = Mt();
  return i ? ce(() => {
    var a;
    return Lo(Object.entries((a = i.proxy) == null ? void 0 : a.$attrs).filter(([s]) => !t.value.includes(s) && !(r && Oh.test(s))));
  }) : (Rt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), ce(() => ({})));
}, ii = Symbol("formContextKey"), ns = Symbol("formItemContextKey"), L0 = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, $h = Symbol("elIdInjection"), Uh = () => Mt() ? ct($h, L0) : L0, P0 = (e) => {
  const r = Uh();
  !Bt && r === L0 && Rt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = _o();
  return _d(() => re(e) || `${n.value}-id-${r.prefix}-${r.current++}`);
}, is = () => {
  const e = ct(ii, void 0), r = ct(ns, void 0);
  return {
    form: e,
    formItem: r
  };
}, Hh = (e, {
  formItemContext: r,
  disableIdGeneration: n,
  disableIdManagement: t
}) => {
  n || (n = Ne(!1)), t || (t = Ne(!1));
  const i = Ne();
  let a;
  const s = ce(() => {
    var o;
    return !!(!(e.label || e.ariaLabel) && r && r.inputIds && ((o = r.inputIds) == null ? void 0 : o.length) <= 1);
  });
  return Ot(() => {
    a = ft([sn(e, "id"), n], ([o, h]) => {
      const c = o ?? (h ? void 0 : P0().value);
      c !== i.value && (r != null && r.removeInputId && (i.value && r.removeInputId(i.value), !(t != null && t.value) && !h && c && r.addInputId(c)), i.value = c);
    }, { immediate: !0 });
  }), sl(() => {
    a && a(), r != null && r.removeInputId && i.value && r.removeInputId(i.value);
  }), {
    isLabeledByFormItem: s,
    inputId: i
  };
}, as = (e) => {
  const r = Mt();
  return ce(() => {
    var n, t;
    return (t = (n = r == null ? void 0 : r.proxy) == null ? void 0 : n.$props) == null ? void 0 : t[e];
  });
}, os = (e, r = {}) => {
  const n = Ne(void 0), t = r.prop ? n : as("size"), i = r.global ? n : Gd(), a = r.form ? { size: void 0 } : ct(ii, void 0), s = r.formItem ? { size: void 0 } : ct(ns, void 0);
  return ce(() => t.value || re(e) || (s == null ? void 0 : s.size) || (a == null ? void 0 : a.size) || i.value || "");
}, ai = (e) => {
  const r = as("disabled"), n = ct(ii, void 0);
  return ce(() => r.value || re(e) || (n == null ? void 0 : n.disabled) || !1);
};
function qh(e, {
  beforeFocus: r,
  afterFocus: n,
  beforeBlur: t,
  afterBlur: i
} = {}) {
  const a = Mt(), { emit: s } = a, o = wr(), h = Ne(!1), c = (g) => {
    lr(r) && r(g) || h.value || (h.value = !0, s("focus", g), n == null || n());
  }, x = (g) => {
    var B;
    lr(t) && t(g) || g.relatedTarget && ((B = o.value) != null && B.contains(g.relatedTarget)) || (h.value = !1, s("blur", g), i == null || i());
  }, E = () => {
    var g, B;
    (g = o.value) != null && g.contains(document.activeElement) && o.value !== document.activeElement || (B = e.value) == null || B.focus();
  };
  return ft(o, (g) => {
    g && g.setAttribute("tabindex", "-1");
  }), gr(o, "focus", c, !0), gr(o, "blur", x, !0), gr(o, "click", E, !0), process.env.NODE_ENV === "test" && Ot(() => {
    const g = Dr(e.value) ? e.value : document.querySelector("input,textarea");
    g && (gr(g, "focus", c, !0), gr(g, "blur", x, !0));
  }), {
    isFocused: h,
    wrapperRef: o,
    handleFocus: c,
    handleBlur: x
  };
}
const Vh = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function Yh({
  afterComposition: e,
  emit: r
}) {
  const n = Ne(!1), t = (o) => {
    r == null || r("compositionstart", o), n.value = !0;
  }, i = (o) => {
    var h;
    r == null || r("compositionupdate", o);
    const c = (h = o.target) == null ? void 0 : h.value, x = c[c.length - 1] || "";
    n.value = !Vh(x);
  }, a = (o) => {
    r == null || r("compositionend", o), n.value && (n.value = !1, ut(() => e(o)));
  };
  return {
    isComposing: n,
    handleComposition: (o) => {
      o.type === "compositionend" ? a(o) : i(o);
    },
    handleCompositionStart: t,
    handleCompositionUpdate: i,
    handleCompositionEnd: a
  };
}
function Wh(e) {
  let r;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: i, selectionEnd: a, value: s } = e.value;
    if (i == null || a == null)
      return;
    const o = s.slice(0, Math.max(0, i)), h = s.slice(Math.max(0, a));
    r = {
      selectionStart: i,
      selectionEnd: a,
      value: s,
      beforeTxt: o,
      afterTxt: h
    };
  }
  function t() {
    if (e.value == null || r == null)
      return;
    const { value: i } = e.value, { beforeTxt: a, afterTxt: s, selectionStart: o } = r;
    if (a == null || s == null || o == null)
      return;
    let h = i.length;
    if (i.endsWith(s))
      h = i.length - s.length;
    else if (i.startsWith(a))
      h = a.length;
    else {
      const c = a[o - 1], x = i.indexOf(c, o - 1);
      x !== -1 && (h = x + 1);
    }
    e.value.setSelectionRange(h, h);
  }
  return [n, t];
}
const ss = "ElInput", Kh = qe({
  name: ss,
  inheritAttrs: !1
}), jh = /* @__PURE__ */ qe({
  ...Kh,
  props: Lh,
  emits: Ph,
  setup(e, { expose: r, emit: n }) {
    const t = e, i = ll(), a = zh(), s = Ya(), o = ce(() => [
      t.type === "textarea" ? b.b() : v.b(),
      v.m(g.value),
      v.is("disabled", B.value),
      v.is("exceed", V.value),
      {
        [v.b("group")]: s.prepend || s.append,
        [v.m("prefix")]: s.prefix || t.prefixIcon,
        [v.m("suffix")]: s.suffix || t.suffixIcon || t.clearable || t.showPassword,
        [v.bm("suffix", "password-clear")]: he.value && Ee.value,
        [v.b("hidden")]: t.type === "hidden"
      },
      i.class
    ]), h = ce(() => [
      v.e("wrapper"),
      v.is("focus", q.value)
    ]), { form: c, formItem: x } = is(), { inputId: E } = Hh(t, {
      formItemContext: x
    }), g = os(), B = ai(), v = Nt("input"), b = Nt("textarea"), C = wr(), k = wr(), A = Ne(!1), S = Ne(!1), T = Ne(), M = wr(t.inputStyle), P = ce(() => C.value || k.value), { wrapperRef: z, isFocused: q, handleFocus: ee, handleBlur: N } = qh(P, {
      beforeFocus() {
        return B.value;
      },
      afterBlur() {
        var X;
        t.validateEvent && ((X = x == null ? void 0 : x.validate) == null || X.call(x, "blur").catch((le) => Rt(le)));
      }
    }), $ = ce(() => {
      var X;
      return (X = c == null ? void 0 : c.statusIcon) != null ? X : !1;
    }), Y = ce(() => (x == null ? void 0 : x.validateState) || ""), j = ce(() => Y.value && Ah[Y.value]), oe = ce(() => S.value ? Eh : mh), ue = ce(() => [
      i.style
    ]), ae = ce(() => [
      t.inputStyle,
      M.value,
      { resize: t.resize }
    ]), de = ce(() => Po(t.modelValue) ? "" : String(t.modelValue)), he = ce(() => t.clearable && !B.value && !t.readonly && !!de.value && (q.value || A.value)), Ee = ce(() => t.showPassword && !B.value && !!de.value && (!!de.value || q.value)), ye = ce(() => t.showWordLimit && !!t.maxlength && (t.type === "text" || t.type === "textarea") && !B.value && !t.readonly && !t.showPassword), U = ce(() => de.value.length), V = ce(() => !!ye.value && U.value > Number(t.maxlength)), Q = ce(() => !!s.suffix || !!t.suffixIcon || he.value || t.showPassword || ye.value || !!Y.value && $.value), [Z, Ce] = Wh(C);
    Ld(k, (X) => {
      if (fe(), !ye.value || t.resize !== "both")
        return;
      const le = X[0], { width: De } = le.contentRect;
      T.value = {
        right: `calc(100% - ${De + 15 + 6}px)`
      };
    });
    const we = () => {
      const { type: X, autosize: le } = t;
      if (!(!Bt || X !== "textarea" || !k.value))
        if (le) {
          const De = ur(le) ? le.minRows : void 0, y = ur(le) ? le.maxRows : void 0, l = Aa(k.value, De, y);
          M.value = {
            overflowY: "hidden",
            ...l
          }, ut(() => {
            k.value.offsetHeight, M.value = l;
          });
        } else
          M.value = {
            minHeight: Aa(k.value).minHeight
          };
    }, fe = ((X) => {
      let le = !1;
      return () => {
        var De;
        if (le || !t.autosize)
          return;
        ((De = k.value) == null ? void 0 : De.offsetParent) === null || (X(), le = !0);
      };
    })(we), ze = () => {
      const X = P.value, le = t.formatter ? t.formatter(de.value) : de.value;
      !X || X.value === le || (X.value = le);
    }, Ze = async (X) => {
      Z();
      let { value: le } = X.target;
      if (t.formatter && t.parser && (le = t.parser(le)), !We.value) {
        if (le === de.value) {
          ze();
          return;
        }
        n(R0, le), n(Ca, le), await ut(), ze(), Ce();
      }
    }, dt = (X) => {
      let { value: le } = X.target;
      t.formatter && t.parser && (le = t.parser(le)), n(wa, le);
    }, {
      isComposing: We,
      handleCompositionStart: Ae,
      handleCompositionUpdate: Le,
      handleCompositionEnd: ht
    } = Yh({ emit: n, afterComposition: Ze }), F = () => {
      Z(), S.value = !S.value, setTimeout(Ce);
    }, f = () => {
      var X;
      return (X = P.value) == null ? void 0 : X.focus();
    }, d = () => {
      var X;
      return (X = P.value) == null ? void 0 : X.blur();
    }, I = (X) => {
      A.value = !1, n("mouseleave", X);
    }, O = (X) => {
      A.value = !0, n("mouseenter", X);
    }, W = (X) => {
      n("keydown", X);
    }, G = () => {
      var X;
      (X = P.value) == null || X.select();
    }, pe = () => {
      n(R0, ""), n(wa, ""), n("clear"), n(Ca, "");
    };
    return ft(() => t.modelValue, () => {
      var X;
      ut(() => we()), t.validateEvent && ((X = x == null ? void 0 : x.validate) == null || X.call(x, "change").catch((le) => Rt(le)));
    }), ft(de, () => ze()), ft(() => t.type, async () => {
      await ut(), ze(), we();
    }), Ot(() => {
      !t.formatter && t.parser && Rt(ss, "If you set the parser, you also need to set the formatter."), ze(), ut(we);
    }), r({
      input: C,
      textarea: k,
      ref: P,
      textareaStyle: ae,
      autosize: sn(t, "autosize"),
      isComposing: We,
      focus: f,
      blur: d,
      select: G,
      clear: pe,
      resizeTextarea: we
    }), (X, le) => (ne(), xe("div", {
      class: ge([
        re(o),
        {
          [re(v).bm("group", "append")]: X.$slots.append,
          [re(v).bm("group", "prepend")]: X.$slots.prepend
        }
      ]),
      style: tt(re(ue)),
      onMouseenter: O,
      onMouseleave: I
    }, [
      Te(" input "),
      X.type !== "textarea" ? (ne(), xe(It, { key: 0 }, [
        Te(" prepend slot "),
        X.$slots.prepend ? (ne(), xe("div", {
          key: 0,
          class: ge(re(v).be("group", "prepend"))
        }, [
          at(X.$slots, "prepend")
        ], 2)) : Te("v-if", !0),
        me("div", {
          ref_key: "wrapperRef",
          ref: z,
          class: ge(re(h))
        }, [
          Te(" prefix slot "),
          X.$slots.prefix || X.prefixIcon ? (ne(), xe("span", {
            key: 0,
            class: ge(re(v).e("prefix"))
          }, [
            me("span", {
              class: ge(re(v).e("prefix-inner"))
            }, [
              at(X.$slots, "prefix"),
              X.prefixIcon ? (ne(), Me(re(Vt), {
                key: 0,
                class: ge(re(v).e("icon"))
              }, {
                default: Ue(() => [
                  (ne(), Me(bt(X.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Te("v-if", !0)
            ], 2)
          ], 2)) : Te("v-if", !0),
          me("input", Fr({
            id: re(E),
            ref_key: "input",
            ref: C,
            class: re(v).e("inner")
          }, re(a), {
            minlength: X.minlength,
            maxlength: X.maxlength,
            type: X.showPassword ? S.value ? "text" : "password" : X.type,
            disabled: re(B),
            readonly: X.readonly,
            autocomplete: X.autocomplete,
            tabindex: X.tabindex,
            "aria-label": X.ariaLabel,
            placeholder: X.placeholder,
            style: X.inputStyle,
            form: X.form,
            autofocus: X.autofocus,
            role: X.containerRole,
            onCompositionstart: re(Ae),
            onCompositionupdate: re(Le),
            onCompositionend: re(ht),
            onInput: Ze,
            onChange: dt,
            onKeydown: W
          }), null, 16, ["id", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          Te(" suffix slot "),
          re(Q) ? (ne(), xe("span", {
            key: 1,
            class: ge(re(v).e("suffix"))
          }, [
            me("span", {
              class: ge(re(v).e("suffix-inner"))
            }, [
              !re(he) || !re(Ee) || !re(ye) ? (ne(), xe(It, { key: 0 }, [
                at(X.$slots, "suffix"),
                X.suffixIcon ? (ne(), Me(re(Vt), {
                  key: 0,
                  class: ge(re(v).e("icon"))
                }, {
                  default: Ue(() => [
                    (ne(), Me(bt(X.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Te("v-if", !0)
              ], 64)) : Te("v-if", !0),
              re(he) ? (ne(), Me(re(Vt), {
                key: 1,
                class: ge([re(v).e("icon"), re(v).e("clear")]),
                onMousedown: Br(re(Cr), ["prevent"]),
                onClick: pe
              }, {
                default: Ue(() => [
                  et(re(Qo))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Te("v-if", !0),
              re(Ee) ? (ne(), Me(re(Vt), {
                key: 2,
                class: ge([re(v).e("icon"), re(v).e("password")]),
                onClick: F
              }, {
                default: Ue(() => [
                  (ne(), Me(bt(re(oe))))
                ]),
                _: 1
              }, 8, ["class"])) : Te("v-if", !0),
              re(ye) ? (ne(), xe("span", {
                key: 3,
                class: ge(re(v).e("count"))
              }, [
                me("span", {
                  class: ge(re(v).e("count-inner"))
                }, Ye(re(U)) + " / " + Ye(X.maxlength), 3)
              ], 2)) : Te("v-if", !0),
              re(Y) && re(j) && re($) ? (ne(), Me(re(Vt), {
                key: 4,
                class: ge([
                  re(v).e("icon"),
                  re(v).e("validateIcon"),
                  re(v).is("loading", re(Y) === "validating")
                ])
              }, {
                default: Ue(() => [
                  (ne(), Me(bt(re(j))))
                ]),
                _: 1
              }, 8, ["class"])) : Te("v-if", !0)
            ], 2)
          ], 2)) : Te("v-if", !0)
        ], 2),
        Te(" append slot "),
        X.$slots.append ? (ne(), xe("div", {
          key: 1,
          class: ge(re(v).be("group", "append"))
        }, [
          at(X.$slots, "append")
        ], 2)) : Te("v-if", !0)
      ], 64)) : (ne(), xe(It, { key: 1 }, [
        Te(" textarea "),
        me("textarea", Fr({
          id: re(E),
          ref_key: "textarea",
          ref: k,
          class: [re(b).e("inner"), re(v).is("focus", re(q))]
        }, re(a), {
          minlength: X.minlength,
          maxlength: X.maxlength,
          tabindex: X.tabindex,
          disabled: re(B),
          readonly: X.readonly,
          autocomplete: X.autocomplete,
          style: re(ae),
          "aria-label": X.ariaLabel,
          placeholder: X.placeholder,
          form: X.form,
          autofocus: X.autofocus,
          rows: X.rows,
          role: X.containerRole,
          onCompositionstart: re(Ae),
          onCompositionupdate: re(Le),
          onCompositionend: re(ht),
          onInput: Ze,
          onFocus: re(ee),
          onBlur: re(N),
          onChange: dt,
          onKeydown: W
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        re(ye) ? (ne(), xe("span", {
          key: 0,
          style: tt(T.value),
          class: ge(re(v).e("count"))
        }, Ye(re(U)) + " / " + Ye(X.maxlength), 7)) : Te("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Gh = /* @__PURE__ */ hr(jh, [["__file", "input.vue"]]);
const Xh = ni(Gh), Zh = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', Jh = (e) => process.env.NODE_ENV === "test" ? !0 : getComputedStyle(e).position === "fixed" ? !1 : e.offsetParent !== null, Da = (e) => Array.from(e.querySelectorAll(Zh)).filter((r) => ls(r) && Jh(r)), ls = (e) => {
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
}, C0 = "focus-trap.focus-after-trapped", F0 = "focus-trap.focus-after-released", Qh = "focus-trap.focusout-prevented", Sa = {
  cancelable: !0,
  bubbles: !1
}, e1 = {
  cancelable: !0,
  bubbles: !1
}, Ta = "focusAfterTrapped", Ia = "focusAfterReleased", t1 = Symbol("elFocusTrap"), oi = Ne(), _n = Ne(0), si = Ne(0);
let Xr = 0;
const us = (e) => {
  const r = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (t) => {
      const i = t.tagName === "INPUT" && t.type === "hidden";
      return t.disabled || t.hidden || i ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 || t === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    r.push(n.currentNode);
  return r;
}, ka = (e, r) => {
  for (const n of e)
    if (!r1(n, r))
      return n;
}, r1 = (e, r) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (r && e === r)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, n1 = (e) => {
  const r = us(e), n = ka(r, e), t = ka(r.reverse(), e);
  return [n, t];
}, i1 = (e) => e instanceof HTMLInputElement && "select" in e, Ht = (e, r) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let t = !1;
    Dr(e) && !ls(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), t = !0), e.focus({ preventScroll: !0 }), si.value = window.performance.now(), e !== n && i1(e) && r && e.select(), Dr(e) && t && e.removeAttribute("tabindex");
  }
};
function Ra(e, r) {
  const n = [...e], t = e.indexOf(r);
  return t !== -1 && n.splice(t, 1), n;
}
const a1 = () => {
  let e = [];
  return {
    push: (t) => {
      const i = e[0];
      i && t !== i && i.pause(), e = Ra(e, t), e.unshift(t);
    },
    remove: (t) => {
      var i, a;
      e = Ra(e, t), (a = (i = e[0]) == null ? void 0 : i.resume) == null || a.call(i);
    }
  };
}, o1 = (e, r = !1) => {
  const n = document.activeElement;
  for (const t of e)
    if (Ht(t, r), document.activeElement !== n)
      return;
}, Ma = a1(), s1 = () => _n.value > si.value, Zr = () => {
  oi.value = "pointer", _n.value = window.performance.now();
}, La = () => {
  oi.value = "keyboard", _n.value = window.performance.now();
}, l1 = () => (Ot(() => {
  Xr === 0 && (document.addEventListener("mousedown", Zr), document.addEventListener("touchstart", Zr), document.addEventListener("keydown", La)), Xr++;
}), Tr(() => {
  Xr--, Xr <= 0 && (document.removeEventListener("mousedown", Zr), document.removeEventListener("touchstart", Zr), document.removeEventListener("keydown", La));
}), {
  focusReason: oi,
  lastUserFocusTimestamp: _n,
  lastAutomatedFocusTimestamp: si
}), Jr = (e) => new CustomEvent(Qh, {
  ...e1,
  detail: e
}), li = {
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
let or = [];
const Pa = (e) => {
  e.code === li.esc && or.forEach((r) => r(e));
}, u1 = (e) => {
  Ot(() => {
    or.length === 0 && document.addEventListener("keydown", Pa), Bt && or.push(e);
  }), Tr(() => {
    or = or.filter((r) => r !== e), or.length === 0 && Bt && document.removeEventListener("keydown", Pa);
  });
}, c1 = qe({
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
    Ta,
    Ia,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: r }) {
    const n = Ne();
    let t, i;
    const { focusReason: a } = l1();
    u1((v) => {
      e.trapped && !s.paused && r("release-requested", v);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, o = (v) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { code: b, altKey: C, ctrlKey: k, metaKey: A, currentTarget: S, shiftKey: T } = v, { loop: M } = e, P = b === li.tab && !C && !k && !A, z = document.activeElement;
      if (P && z) {
        const q = S, [ee, N] = n1(q);
        if (ee && N) {
          if (!T && z === N) {
            const Y = Jr({
              focusReason: a.value
            });
            r("focusout-prevented", Y), Y.defaultPrevented || (v.preventDefault(), M && Ht(ee, !0));
          } else if (T && [ee, q].includes(z)) {
            const Y = Jr({
              focusReason: a.value
            });
            r("focusout-prevented", Y), Y.defaultPrevented || (v.preventDefault(), M && Ht(N, !0));
          }
        } else if (z === q) {
          const Y = Jr({
            focusReason: a.value
          });
          r("focusout-prevented", Y), Y.defaultPrevented || v.preventDefault();
        }
      }
    };
    $0(t1, {
      focusTrapRef: n,
      onKeydown: o
    }), ft(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), ft([n], ([v], [b]) => {
      v && (v.addEventListener("keydown", o), v.addEventListener("focusin", x), v.addEventListener("focusout", E)), b && (b.removeEventListener("keydown", o), b.removeEventListener("focusin", x), b.removeEventListener("focusout", E));
    });
    const h = (v) => {
      r(Ta, v);
    }, c = (v) => r(Ia, v), x = (v) => {
      const b = re(n);
      if (!b)
        return;
      const C = v.target, k = v.relatedTarget, A = C && b.contains(C);
      e.trapped || k && b.contains(k) || (t = k), A && r("focusin", v), !s.paused && e.trapped && (A ? i = C : Ht(i, !0));
    }, E = (v) => {
      const b = re(n);
      if (!(s.paused || !b))
        if (e.trapped) {
          const C = v.relatedTarget;
          !Po(C) && !b.contains(C) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const k = Jr({
                focusReason: a.value
              });
              r("focusout-prevented", k), k.defaultPrevented || Ht(i, !0);
            }
          }, 0);
        } else {
          const C = v.target;
          C && b.contains(C) || r("focusout", v);
        }
    };
    async function g() {
      await ut();
      const v = re(n);
      if (v) {
        Ma.push(s);
        const b = v.contains(document.activeElement) ? t : document.activeElement;
        if (t = b, !v.contains(b)) {
          const k = new Event(C0, Sa);
          v.addEventListener(C0, h), v.dispatchEvent(k), k.defaultPrevented || ut(() => {
            let A = e.focusStartEl;
            kt(A) || (Ht(A), document.activeElement !== A && (A = "first")), A === "first" && o1(us(v), !0), (document.activeElement === b || A === "container") && Ht(v);
          });
        }
      }
    }
    function B() {
      const v = re(n);
      if (v) {
        v.removeEventListener(C0, h);
        const b = new CustomEvent(F0, {
          ...Sa,
          detail: {
            focusReason: a.value
          }
        });
        v.addEventListener(F0, c), v.dispatchEvent(b), !b.defaultPrevented && (a.value == "keyboard" || !s1() || v.contains(document.activeElement)) && Ht(t ?? document.body), v.removeEventListener(F0, c), Ma.remove(s);
      }
    }
    return Ot(() => {
      e.trapped && g(), ft(() => e.trapped, (v) => {
        v ? g() : B();
      });
    }), Tr(() => {
      e.trapped && B(), n.value && (n.value.removeEventListener("keydown", o), n.value.removeEventListener("focusin", x), n.value.removeEventListener("focusout", E), n.value = void 0);
    }), {
      onKeydown: o
    };
  }
});
function f1(e, r, n, t, i, a) {
  return at(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var d1 = /* @__PURE__ */ hr(c1, [["render", f1], ["__file", "focus-trap.vue"]]);
const cs = Symbol("buttonGroupContextKey"), h1 = ({ from: e, replacement: r, scope: n, version: t, ref: i, type: a = "API" }, s) => {
  ft(() => re(s), (o) => {
    o && Rt(n, `[${a}] ${e} is about to be deprecated in version ${t}, please use ${r} instead.
For more detail, please visit: ${i}
`);
  }, {
    immediate: !0
  });
}, p1 = (e, r) => {
  h1({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, ce(() => e.type === "text"));
  const n = ct(cs, void 0), t = ri("button"), { form: i } = is(), a = os(ce(() => n == null ? void 0 : n.size)), s = ai(), o = Ne(), h = Ya(), c = ce(() => e.type || (n == null ? void 0 : n.type) || ""), x = ce(() => {
    var v, b, C;
    return (C = (b = e.autoInsertSpace) != null ? b : (v = t.value) == null ? void 0 : v.autoInsertSpace) != null ? C : !1;
  }), E = ce(() => e.tag === "button" ? {
    ariaDisabled: s.value || e.loading,
    disabled: s.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), g = ce(() => {
    var v;
    const b = (v = h.default) == null ? void 0 : v.call(h);
    if (x.value && (b == null ? void 0 : b.length) === 1) {
      const C = b[0];
      if ((C == null ? void 0 : C.type) === ul) {
        const k = C.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(k.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: s,
    _size: a,
    _type: c,
    _ref: o,
    _props: E,
    shouldAddSpace: g,
    handleClick: (v) => {
      if (s.value || e.loading) {
        v.stopPropagation();
        return;
      }
      e.nativeType === "reset" && (i == null || i.resetFields()), r("click", v);
    }
  };
}, x1 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], v1 = ["button", "submit", "reset"], N0 = dr({
  size: Go,
  disabled: Boolean,
  type: {
    type: String,
    values: x1,
    default: ""
  },
  icon: {
    type: yn
  },
  nativeType: {
    type: String,
    values: v1,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: yn,
    default: () => mn
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
    type: Wt([String, Object]),
    default: "button"
  }
}), m1 = {
  click: (e) => e instanceof MouseEvent
};
function Qe(e, r) {
  y1(e) && (e = "100%");
  var n = g1(e);
  return e = r === 360 ? e : Math.min(r, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * r), 10) / 100), Math.abs(e - r) < 1e-6 ? 1 : (r === 360 ? e = (e < 0 ? e % r + r : e % r) / parseFloat(String(r)) : e = e % r / parseFloat(String(r)), e);
}
function Qr(e) {
  return Math.min(1, Math.max(0, e));
}
function y1(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function g1(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function fs(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function en(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Jt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function b1(e, r, n) {
  return {
    r: Qe(e, 255) * 255,
    g: Qe(r, 255) * 255,
    b: Qe(n, 255) * 255
  };
}
function Na(e, r, n) {
  e = Qe(e, 255), r = Qe(r, 255), n = Qe(n, 255);
  var t = Math.max(e, r, n), i = Math.min(e, r, n), a = 0, s = 0, o = (t + i) / 2;
  if (t === i)
    s = 0, a = 0;
  else {
    var h = t - i;
    switch (s = o > 0.5 ? h / (2 - t - i) : h / (t + i), t) {
      case e:
        a = (r - n) / h + (r < n ? 6 : 0);
        break;
      case r:
        a = (n - e) / h + 2;
        break;
      case n:
        a = (e - r) / h + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, l: o };
}
function _0(e, r, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (r - e) * (6 * n) : n < 1 / 2 ? r : n < 2 / 3 ? e + (r - e) * (2 / 3 - n) * 6 : e;
}
function B1(e, r, n) {
  var t, i, a;
  if (e = Qe(e, 360), r = Qe(r, 100), n = Qe(n, 100), r === 0)
    i = n, a = n, t = n;
  else {
    var s = n < 0.5 ? n * (1 + r) : n + r - n * r, o = 2 * n - s;
    t = _0(o, s, e + 1 / 3), i = _0(o, s, e), a = _0(o, s, e - 1 / 3);
  }
  return { r: t * 255, g: i * 255, b: a * 255 };
}
function Oa(e, r, n) {
  e = Qe(e, 255), r = Qe(r, 255), n = Qe(n, 255);
  var t = Math.max(e, r, n), i = Math.min(e, r, n), a = 0, s = t, o = t - i, h = t === 0 ? 0 : o / t;
  if (t === i)
    a = 0;
  else {
    switch (t) {
      case e:
        a = (r - n) / o + (r < n ? 6 : 0);
        break;
      case r:
        a = (n - e) / o + 2;
        break;
      case n:
        a = (e - r) / o + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s: h, v: s };
}
function E1(e, r, n) {
  e = Qe(e, 360) * 6, r = Qe(r, 100), n = Qe(n, 100);
  var t = Math.floor(e), i = e - t, a = n * (1 - r), s = n * (1 - i * r), o = n * (1 - (1 - i) * r), h = t % 6, c = [n, s, a, a, o, n][h], x = [o, n, n, s, a, a][h], E = [a, a, o, n, n, s][h];
  return { r: c * 255, g: x * 255, b: E * 255 };
}
function za(e, r, n, t) {
  var i = [
    Jt(Math.round(e).toString(16)),
    Jt(Math.round(r).toString(16)),
    Jt(Math.round(n).toString(16))
  ];
  return t && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
}
function w1(e, r, n, t, i) {
  var a = [
    Jt(Math.round(e).toString(16)),
    Jt(Math.round(r).toString(16)),
    Jt(Math.round(n).toString(16)),
    Jt(C1(t))
  ];
  return i && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) && a[3].startsWith(a[3].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("");
}
function C1(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function $a(e) {
  return vt(e) / 255;
}
function vt(e) {
  return parseInt(e, 16);
}
function F1(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var O0 = {
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
function _1(e) {
  var r = { r: 0, g: 0, b: 0 }, n = 1, t = null, i = null, a = null, s = !1, o = !1;
  return typeof e == "string" && (e = S1(e)), typeof e == "object" && (Pt(e.r) && Pt(e.g) && Pt(e.b) ? (r = b1(e.r, e.g, e.b), s = !0, o = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Pt(e.h) && Pt(e.s) && Pt(e.v) ? (t = en(e.s), i = en(e.v), r = E1(e.h, t, i), s = !0, o = "hsv") : Pt(e.h) && Pt(e.s) && Pt(e.l) && (t = en(e.s), a = en(e.l), r = B1(e.h, t, a), s = !0, o = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = fs(n), {
    ok: s,
    format: e.format || o,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: n
  };
}
var A1 = "[-\\+]?\\d+%?", D1 = "[-\\+]?\\d*\\.\\d+%?", Yt = "(?:".concat(D1, ")|(?:").concat(A1, ")"), A0 = "[\\s|\\(]+(".concat(Yt, ")[,|\\s]+(").concat(Yt, ")[,|\\s]+(").concat(Yt, ")\\s*\\)?"), D0 = "[\\s|\\(]+(".concat(Yt, ")[,|\\s]+(").concat(Yt, ")[,|\\s]+(").concat(Yt, ")[,|\\s]+(").concat(Yt, ")\\s*\\)?"), Ft = {
  CSS_UNIT: new RegExp(Yt),
  rgb: new RegExp("rgb" + A0),
  rgba: new RegExp("rgba" + D0),
  hsl: new RegExp("hsl" + A0),
  hsla: new RegExp("hsla" + D0),
  hsv: new RegExp("hsv" + A0),
  hsva: new RegExp("hsva" + D0),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function S1(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var r = !1;
  if (O0[e])
    e = O0[e], r = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Ft.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Ft.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Ft.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Ft.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Ft.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Ft.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Ft.hex8.exec(e), n ? {
    r: vt(n[1]),
    g: vt(n[2]),
    b: vt(n[3]),
    a: $a(n[4]),
    format: r ? "name" : "hex8"
  } : (n = Ft.hex6.exec(e), n ? {
    r: vt(n[1]),
    g: vt(n[2]),
    b: vt(n[3]),
    format: r ? "name" : "hex"
  } : (n = Ft.hex4.exec(e), n ? {
    r: vt(n[1] + n[1]),
    g: vt(n[2] + n[2]),
    b: vt(n[3] + n[3]),
    a: $a(n[4] + n[4]),
    format: r ? "name" : "hex8"
  } : (n = Ft.hex3.exec(e), n ? {
    r: vt(n[1] + n[1]),
    g: vt(n[2] + n[2]),
    b: vt(n[3] + n[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function Pt(e) {
  return !!Ft.CSS_UNIT.exec(String(e));
}
var T1 = (
  /** @class */
  function() {
    function e(r, n) {
      r === void 0 && (r = ""), n === void 0 && (n = {});
      var t;
      if (r instanceof e)
        return r;
      typeof r == "number" && (r = F1(r)), this.originalInput = r;
      var i = _1(r);
      this.originalInput = r, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (t = n.format) !== null && t !== void 0 ? t : i.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var r = this.toRgb();
      return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var r = this.toRgb(), n, t, i, a = r.r / 255, s = r.g / 255, o = r.b / 255;
      return a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), s <= 0.03928 ? t = s / 12.92 : t = Math.pow((s + 0.055) / 1.055, 2.4), o <= 0.03928 ? i = o / 12.92 : i = Math.pow((o + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * t + 0.0722 * i;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(r) {
      return this.a = fs(r), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var r = this.toHsl().s;
      return r === 0;
    }, e.prototype.toHsv = function() {
      var r = Oa(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, v: r.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var r = Oa(this.r, this.g, this.b), n = Math.round(r.h * 360), t = Math.round(r.s * 100), i = Math.round(r.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(t, "%, ").concat(i, "%)") : "hsva(".concat(n, ", ").concat(t, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var r = Na(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, l: r.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var r = Na(this.r, this.g, this.b), n = Math.round(r.h * 360), t = Math.round(r.s * 100), i = Math.round(r.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(t, "%, ").concat(i, "%)") : "hsla(".concat(n, ", ").concat(t, "%, ").concat(i, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(r) {
      return r === void 0 && (r = !1), za(this.r, this.g, this.b, r);
    }, e.prototype.toHexString = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex(r);
    }, e.prototype.toHex8 = function(r) {
      return r === void 0 && (r = !1), w1(this.r, this.g, this.b, this.a, r);
    }, e.prototype.toHex8String = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex8(r);
    }, e.prototype.toHexShortString = function(r) {
      return r === void 0 && (r = !1), this.a === 1 ? this.toHexString(r) : this.toHex8String(r);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var r = Math.round(this.r), n = Math.round(this.g), t = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(r, ", ").concat(n, ", ").concat(t, ")") : "rgba(".concat(r, ", ").concat(n, ", ").concat(t, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var r = function(n) {
        return "".concat(Math.round(Qe(n, 255) * 100), "%");
      };
      return {
        r: r(this.r),
        g: r(this.g),
        b: r(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var r = function(n) {
        return Math.round(Qe(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%)") : "rgba(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var r = "#" + za(this.r, this.g, this.b, !1), n = 0, t = Object.entries(O0); n < t.length; n++) {
        var i = t[n], a = i[0], s = i[1];
        if (r === s)
          return a;
      }
      return !1;
    }, e.prototype.toString = function(r) {
      var n = !!r;
      r = r ?? this.format;
      var t = !1, i = this.a < 1 && this.a >= 0, a = !n && i && (r.startsWith("hex") || r === "name");
      return a ? r === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (r === "rgb" && (t = this.toRgbString()), r === "prgb" && (t = this.toPercentageRgbString()), (r === "hex" || r === "hex6") && (t = this.toHexString()), r === "hex3" && (t = this.toHexString(!0)), r === "hex4" && (t = this.toHex8String(!0)), r === "hex8" && (t = this.toHex8String()), r === "name" && (t = this.toName()), r === "hsl" && (t = this.toHslString()), r === "hsv" && (t = this.toHsvString()), t || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(r) {
      r === void 0 && (r = 10);
      var n = this.toHsl();
      return n.l += r / 100, n.l = Qr(n.l), new e(n);
    }, e.prototype.brighten = function(r) {
      r === void 0 && (r = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(r / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(r / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(r / 100)))), new e(n);
    }, e.prototype.darken = function(r) {
      r === void 0 && (r = 10);
      var n = this.toHsl();
      return n.l -= r / 100, n.l = Qr(n.l), new e(n);
    }, e.prototype.tint = function(r) {
      return r === void 0 && (r = 10), this.mix("white", r);
    }, e.prototype.shade = function(r) {
      return r === void 0 && (r = 10), this.mix("black", r);
    }, e.prototype.desaturate = function(r) {
      r === void 0 && (r = 10);
      var n = this.toHsl();
      return n.s -= r / 100, n.s = Qr(n.s), new e(n);
    }, e.prototype.saturate = function(r) {
      r === void 0 && (r = 10);
      var n = this.toHsl();
      return n.s += r / 100, n.s = Qr(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(r) {
      var n = this.toHsl(), t = (n.h + r) % 360;
      return n.h = t < 0 ? 360 + t : t, new e(n);
    }, e.prototype.mix = function(r, n) {
      n === void 0 && (n = 50);
      var t = this.toRgb(), i = new e(r).toRgb(), a = n / 100, s = {
        r: (i.r - t.r) * a + t.r,
        g: (i.g - t.g) * a + t.g,
        b: (i.b - t.b) * a + t.b,
        a: (i.a - t.a) * a + t.a
      };
      return new e(s);
    }, e.prototype.analogous = function(r, n) {
      r === void 0 && (r = 6), n === void 0 && (n = 30);
      var t = this.toHsl(), i = 360 / n, a = [this];
      for (t.h = (t.h - (i * r >> 1) + 720) % 360; --r; )
        t.h = (t.h + i) % 360, a.push(new e(t));
      return a;
    }, e.prototype.complement = function() {
      var r = this.toHsl();
      return r.h = (r.h + 180) % 360, new e(r);
    }, e.prototype.monochromatic = function(r) {
      r === void 0 && (r = 6);
      for (var n = this.toHsv(), t = n.h, i = n.s, a = n.v, s = [], o = 1 / r; r--; )
        s.push(new e({ h: t, s: i, v: a })), a = (a + o) % 1;
      return s;
    }, e.prototype.splitcomplement = function() {
      var r = this.toHsl(), n = r.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: r.s, l: r.l }),
        new e({ h: (n + 216) % 360, s: r.s, l: r.l })
      ];
    }, e.prototype.onBackground = function(r) {
      var n = this.toRgb(), t = new e(r).toRgb(), i = n.a + t.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + t.r * t.a * (1 - n.a)) / i,
        g: (n.g * n.a + t.g * t.a * (1 - n.a)) / i,
        b: (n.b * n.a + t.b * t.a * (1 - n.a)) / i,
        a: i
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(r) {
      for (var n = this.toHsl(), t = n.h, i = [this], a = 360 / r, s = 1; s < r; s++)
        i.push(new e({ h: (t + s * a) % 360, s: n.s, l: n.l }));
      return i;
    }, e.prototype.equals = function(r) {
      return this.toRgbString() === new e(r).toRgbString();
    }, e;
  }()
);
function Ut(e, r = 20) {
  return e.mix("#141414", r).toString();
}
function I1(e) {
  const r = ai(), n = Nt("button");
  return ce(() => {
    let t = {}, i = e.color;
    if (i) {
      const a = i.match(/var\((.*?)\)/);
      a && (i = window.getComputedStyle(window.document.documentElement).getPropertyValue(a[1]));
      const s = new T1(i), o = e.dark ? s.tint(20).toString() : Ut(s, 20);
      if (e.plain)
        t = n.cssVarBlock({
          "bg-color": e.dark ? Ut(s, 90) : s.tint(90).toString(),
          "text-color": i,
          "border-color": e.dark ? Ut(s, 50) : s.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": i,
          "hover-border-color": i,
          "active-bg-color": o,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": o
        }), r.value && (t[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Ut(s, 90) : s.tint(90).toString(), t[n.cssVarBlockName("disabled-text-color")] = e.dark ? Ut(s, 50) : s.tint(50).toString(), t[n.cssVarBlockName("disabled-border-color")] = e.dark ? Ut(s, 80) : s.tint(80).toString());
      else {
        const h = e.dark ? Ut(s, 30) : s.tint(30).toString(), c = s.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (t = n.cssVarBlock({
          "bg-color": i,
          "text-color": c,
          "border-color": i,
          "hover-bg-color": h,
          "hover-text-color": c,
          "hover-border-color": h,
          "active-bg-color": o,
          "active-border-color": o
        }), r.value) {
          const x = e.dark ? Ut(s, 50) : s.tint(50).toString();
          t[n.cssVarBlockName("disabled-bg-color")] = x, t[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, t[n.cssVarBlockName("disabled-border-color")] = x;
        }
      }
    }
    return t;
  });
}
const k1 = qe({
  name: "ElButton"
}), R1 = /* @__PURE__ */ qe({
  ...k1,
  props: N0,
  emits: m1,
  setup(e, { expose: r, emit: n }) {
    const t = e, i = I1(t), a = Nt("button"), { _ref: s, _size: o, _type: h, _disabled: c, _props: x, shouldAddSpace: E, handleClick: g } = p1(t, n), B = ce(() => [
      a.b(),
      a.m(h.value),
      a.m(o.value),
      a.is("disabled", c.value),
      a.is("loading", t.loading),
      a.is("plain", t.plain),
      a.is("round", t.round),
      a.is("circle", t.circle),
      a.is("text", t.text),
      a.is("link", t.link),
      a.is("has-bg", t.bg)
    ]);
    return r({
      ref: s,
      size: o,
      type: h,
      disabled: c,
      shouldAddSpace: E
    }), (v, b) => (ne(), Me(bt(v.tag), Fr({
      ref_key: "_ref",
      ref: s
    }, re(x), {
      class: re(B),
      style: re(i),
      onClick: re(g)
    }), {
      default: Ue(() => [
        v.loading ? (ne(), xe(It, { key: 0 }, [
          v.$slots.loading ? at(v.$slots, "loading", { key: 0 }) : (ne(), Me(re(Vt), {
            key: 1,
            class: ge(re(a).is("loading"))
          }, {
            default: Ue(() => [
              (ne(), Me(bt(v.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : v.icon || v.$slots.icon ? (ne(), Me(re(Vt), { key: 1 }, {
          default: Ue(() => [
            v.icon ? (ne(), Me(bt(v.icon), { key: 0 })) : at(v.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : Te("v-if", !0),
        v.$slots.default ? (ne(), xe("span", {
          key: 2,
          class: ge({ [re(a).em("text", "expand")]: re(E) })
        }, [
          at(v.$slots, "default")
        ], 2)) : Te("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var M1 = /* @__PURE__ */ hr(R1, [["__file", "button.vue"]]);
const L1 = {
  size: N0.size,
  type: N0.type
}, P1 = qe({
  name: "ElButtonGroup"
}), N1 = /* @__PURE__ */ qe({
  ...P1,
  props: L1,
  setup(e) {
    const r = e;
    $0(cs, Wa({
      size: sn(r, "size"),
      type: sn(r, "type")
    }));
    const n = Nt("button");
    return (t, i) => (ne(), xe("div", {
      class: ge(re(n).b("group"))
    }, [
      at(t.$slots, "default")
    ], 2));
  }
});
var ds = /* @__PURE__ */ hr(N1, [["__file", "button-group.vue"]]);
const O1 = ni(M1, {
  ButtonGroup: ds
});
ah(ds);
var an = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(an || {});
const hs = (e) => {
  if (!e)
    return { onClick: Cr, onMousedown: Cr, onMouseup: Cr };
  let r = !1, n = !1;
  return { onClick: (s) => {
    r && n && e(s), r = n = !1;
  }, onMousedown: (s) => {
    r = s.target === s.currentTarget;
  }, onMouseup: (s) => {
    n = s.target === s.currentTarget;
  } };
}, z1 = dr({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: Wt([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: Wt([String, Number])
  }
}), $1 = {
  click: (e) => e instanceof MouseEvent
}, U1 = "overlay";
var H1 = qe({
  name: "ElOverlay",
  props: z1,
  emits: $1,
  setup(e, { slots: r, emit: n }) {
    const t = Nt(U1), i = (h) => {
      n("click", h);
    }, { onClick: a, onMousedown: s, onMouseup: o } = hs(e.customMaskEvent ? void 0 : i);
    return () => e.mask ? et("div", {
      class: [t.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: a,
      onMousedown: s,
      onMouseup: o
    }, [at(r, "default")], an.STYLE | an.CLASS | an.PROPS, ["onClick", "onMouseup", "onMousedown"]) : cl("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [at(r, "default")]);
  }
});
const q1 = H1, V1 = (e, r, n, t) => {
  let i = {
    offsetX: 0,
    offsetY: 0
  };
  const a = (c) => {
    const x = c.clientX, E = c.clientY, { offsetX: g, offsetY: B } = i, v = e.value.getBoundingClientRect(), b = v.left, C = v.top, k = v.width, A = v.height, S = document.documentElement.clientWidth, T = document.documentElement.clientHeight, M = -b + g, P = -C + B, z = S - b - k + g, q = T - C - A + B, ee = ($) => {
      let Y = g + $.clientX - x, j = B + $.clientY - E;
      t != null && t.value || (Y = Math.min(Math.max(Y, M), z), j = Math.min(Math.max(j, P), q)), i = {
        offsetX: Y,
        offsetY: j
      }, e.value && (e.value.style.transform = `translate(${M0(Y)}, ${M0(j)})`);
    }, N = () => {
      document.removeEventListener("mousemove", ee), document.removeEventListener("mouseup", N);
    };
    document.addEventListener("mousemove", ee), document.addEventListener("mouseup", N);
  }, s = () => {
    r.value && e.value && r.value.addEventListener("mousedown", a);
  }, o = () => {
    r.value && e.value && r.value.removeEventListener("mousedown", a);
  }, h = () => {
    i = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return Ot(() => {
    Ha(() => {
      n.value ? s() : o();
    });
  }), Tr(() => {
    o();
  }), {
    resetPosition: h
  };
}, Y1 = (e, r = {}) => {
  Va(e) || Ud("[useLockscreen]", "You need to pass a ref param to this function");
  const n = r.ns || Nt("popup"), t = ce(() => n.bm("parent", "hidden"));
  if (!Bt || Fa(document.body, t.value))
    return;
  let i = 0, a = !1, s = "0";
  const o = () => {
    setTimeout(() => {
      typeof document > "u" || a && document && (document.body.style.width = s, rh(document.body, t.value));
    }, 200);
  };
  ft(e, (h) => {
    if (!h) {
      o();
      return;
    }
    a = !Fa(document.body, t.value), a && (s = document.body.style.width, th(document.body, t.value)), i = ih(n.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, x = nh(document.body, "overflowY");
    i > 0 && (c || x === "scroll") && a && (document.body.style.width = `calc(100% - ${i}px)`);
  }), qa(() => o());
}, W1 = (e) => ["", ...jo].includes(e), z0 = "_trap-focus-children", Qt = [], Ua = (e) => {
  var r;
  if (Qt.length === 0)
    return;
  const n = Qt[Qt.length - 1][z0];
  if (n.length > 0 && e.code === li.tab) {
    if (n.length === 1) {
      e.preventDefault(), document.activeElement !== n[0] && n[0].focus();
      return;
    }
    const t = e.shiftKey, i = e.target === n[0], a = e.target === n[n.length - 1];
    if (i && t && (e.preventDefault(), n[n.length - 1].focus()), a && !t && (e.preventDefault(), n[0].focus()), process.env.NODE_ENV === "test") {
      const s = n.indexOf(e.target);
      s !== -1 && ((r = n[t ? s - 1 : s + 1]) == null || r.focus());
    }
  }
}, K1 = {
  beforeMount(e) {
    e[z0] = Da(e), Qt.push(e), Qt.length <= 1 && document.addEventListener("keydown", Ua);
  },
  updated(e) {
    ut(() => {
      e[z0] = Da(e);
    });
  },
  unmounted() {
    Qt.shift(), Qt.length === 0 && document.removeEventListener("keydown", Ua);
  }
}, j1 = qe({
  name: "ElMessageBox",
  directives: {
    TrapFocus: K1
  },
  components: {
    ElButton: O1,
    ElFocusTrap: d1,
    ElInput: Xh,
    ElOverlay: q1,
    ElIcon: Vt,
    ..._h
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: W1
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
  setup(e, { emit: r }) {
    const {
      locale: n,
      zIndex: t,
      ns: i,
      size: a
    } = Zd("message-box", ce(() => e.buttonSize)), { t: s } = n, { nextZIndex: o } = t, h = Ne(!1), c = Wa({
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
      confirmButtonLoadingIcon: ln(mn),
      cancelButtonLoadingIcon: ln(mn),
      confirmButtonDisabled: !1,
      editorErrorMessage: "",
      validateError: !1,
      zIndex: o()
    }), x = ce(() => {
      const ae = c.type;
      return { [i.bm("icon", ae)]: ae && _a[ae] };
    }), E = P0(), g = P0(), B = ce(() => {
      const ae = c.type;
      return c.icon || ae && _a[ae] || "";
    }), v = ce(() => !!c.message), b = Ne(), C = Ne(), k = Ne(), A = Ne(), S = Ne(), T = ce(() => c.confirmButtonClass);
    ft(() => c.inputValue, async (ae) => {
      await ut(), e.boxType === "prompt" && ae && Y();
    }, { immediate: !0 }), ft(() => h.value, (ae) => {
      var de, he;
      ae && (e.boxType !== "prompt" && (c.autofocus ? k.value = (he = (de = S.value) == null ? void 0 : de.$el) != null ? he : b.value : k.value = b.value), c.zIndex = o()), e.boxType === "prompt" && (ae ? ut().then(() => {
        var Ee;
        A.value && A.value.$el && (c.autofocus ? k.value = (Ee = j()) != null ? Ee : b.value : k.value = b.value);
      }) : (c.editorErrorMessage = "", c.validateError = !1));
    });
    const M = ce(() => e.draggable), P = ce(() => e.overflow);
    V1(b, C, M, P), Ot(async () => {
      await ut(), e.closeOnHashChange && window.addEventListener("hashchange", z);
    }), Tr(() => {
      e.closeOnHashChange && window.removeEventListener("hashchange", z);
    });
    function z() {
      h.value && (h.value = !1, ut(() => {
        c.action && r("action", c.action);
      }));
    }
    const q = () => {
      e.closeOnClickModal && $(c.distinguishCancelAndClose ? "close" : "cancel");
    }, ee = hs(q), N = (ae) => {
      if (c.inputType !== "textarea")
        return ae.preventDefault(), $("confirm");
    }, $ = (ae) => {
      var de;
      e.boxType === "prompt" && ae === "confirm" && !Y() || (c.action = ae, c.beforeClose ? (de = c.beforeClose) == null || de.call(c, ae, c, z) : z());
    }, Y = () => {
      if (e.boxType === "prompt") {
        const ae = c.inputPattern;
        if (ae && !ae.test(c.inputValue || ""))
          return c.editorErrorMessage = c.inputErrorMessage || s("el.messagebox.error"), c.validateError = !0, !1;
        const de = c.inputValidator;
        if (lr(de)) {
          const he = de(c.inputValue);
          if (he === !1)
            return c.editorErrorMessage = c.inputErrorMessage || s("el.messagebox.error"), c.validateError = !0, !1;
          if (kt(he))
            return c.editorErrorMessage = he, c.validateError = !0, !1;
        }
      }
      return c.editorErrorMessage = "", c.validateError = !1, !0;
    }, j = () => {
      var ae, de;
      const he = (ae = A.value) == null ? void 0 : ae.$refs;
      return (de = he == null ? void 0 : he.input) != null ? de : he == null ? void 0 : he.textarea;
    }, oe = () => {
      $("close");
    }, ue = () => {
      e.closeOnPressEscape && oe();
    };
    return e.lockScroll && Y1(h), {
      ...fl(c),
      ns: i,
      overlayEvent: ee,
      visible: h,
      hasMessage: v,
      typeClass: x,
      contentId: E,
      inputId: g,
      btnSize: a,
      iconComponent: B,
      confirmButtonClasses: T,
      rootRef: b,
      focusStartRef: k,
      headerRef: C,
      inputRef: A,
      confirmRef: S,
      doClose: z,
      handleClose: oe,
      onCloseRequested: ue,
      handleWrapperClick: q,
      handleInputEnter: N,
      handleAction: $,
      t: s
    };
  }
});
function G1(e, r, n, t, i, a) {
  const s = mt("el-icon"), o = mt("el-input"), h = mt("el-button"), c = mt("el-focus-trap"), x = mt("el-overlay");
  return ne(), Me(U0, {
    name: "fade-in-linear",
    onAfterLeave: (E) => e.$emit("vanish"),
    persisted: ""
  }, {
    default: Ue(() => [
      zn(et(x, {
        "z-index": e.zIndex,
        "overlay-class": [e.ns.is("message-box"), e.modalClass],
        mask: e.modal
      }, {
        default: Ue(() => [
          me("div", {
            role: "dialog",
            "aria-label": e.title,
            "aria-modal": "true",
            "aria-describedby": e.showInput ? void 0 : e.contentId,
            class: ge(`${e.ns.namespace.value}-overlay-message-box`),
            onClick: e.overlayEvent.onClick,
            onMousedown: e.overlayEvent.onMousedown,
            onMouseup: e.overlayEvent.onMouseup
          }, [
            et(c, {
              loop: "",
              trapped: e.visible,
              "focus-trap-el": e.rootRef,
              "focus-start-el": e.focusStartRef,
              onReleaseRequested: e.onCloseRequested
            }, {
              default: Ue(() => [
                me("div", {
                  ref: "rootRef",
                  class: ge([
                    e.ns.b(),
                    e.customClass,
                    e.ns.is("draggable", e.draggable),
                    { [e.ns.m("center")]: e.center }
                  ]),
                  style: tt(e.customStyle),
                  tabindex: "-1",
                  onClick: Br(() => {
                  }, ["stop"])
                }, [
                  e.title !== null && e.title !== void 0 ? (ne(), xe("div", {
                    key: 0,
                    ref: "headerRef",
                    class: ge([e.ns.e("header"), { "show-close": e.showClose }])
                  }, [
                    me("div", {
                      class: ge(e.ns.e("title"))
                    }, [
                      e.iconComponent && e.center ? (ne(), Me(s, {
                        key: 0,
                        class: ge([e.ns.e("status"), e.typeClass])
                      }, {
                        default: Ue(() => [
                          (ne(), Me(bt(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : Te("v-if", !0),
                      me("span", null, Ye(e.title), 1)
                    ], 2),
                    e.showClose ? (ne(), xe("button", {
                      key: 0,
                      type: "button",
                      class: ge(e.ns.e("headerbtn")),
                      "aria-label": e.t("el.messagebox.close"),
                      onClick: (E) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"),
                      onKeydown: Hr(Br((E) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
                    }, [
                      et(s, {
                        class: ge(e.ns.e("close"))
                      }, {
                        default: Ue(() => [
                          (ne(), Me(bt(e.closeIcon || "close")))
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, ["aria-label", "onClick", "onKeydown"])) : Te("v-if", !0)
                  ], 2)) : Te("v-if", !0),
                  me("div", {
                    id: e.contentId,
                    class: ge(e.ns.e("content"))
                  }, [
                    me("div", {
                      class: ge(e.ns.e("container"))
                    }, [
                      e.iconComponent && !e.center && e.hasMessage ? (ne(), Me(s, {
                        key: 0,
                        class: ge([e.ns.e("status"), e.typeClass])
                      }, {
                        default: Ue(() => [
                          (ne(), Me(bt(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : Te("v-if", !0),
                      e.hasMessage ? (ne(), xe("div", {
                        key: 1,
                        class: ge(e.ns.e("message"))
                      }, [
                        at(e.$slots, "default", {}, () => [
                          e.dangerouslyUseHTMLString ? (ne(), Me(bt(e.showInput ? "label" : "p"), {
                            key: 1,
                            for: e.showInput ? e.inputId : void 0,
                            innerHTML: e.message
                          }, null, 8, ["for", "innerHTML"])) : (ne(), Me(bt(e.showInput ? "label" : "p"), {
                            key: 0,
                            for: e.showInput ? e.inputId : void 0
                          }, {
                            default: Ue(() => [
                              tn(Ye(e.dangerouslyUseHTMLString ? "" : e.message), 1)
                            ]),
                            _: 1
                          }, 8, ["for"]))
                        ])
                      ], 2)) : Te("v-if", !0)
                    ], 2),
                    zn(me("div", {
                      class: ge(e.ns.e("input"))
                    }, [
                      et(o, {
                        id: e.inputId,
                        ref: "inputRef",
                        modelValue: e.inputValue,
                        "onUpdate:modelValue": (E) => e.inputValue = E,
                        type: e.inputType,
                        placeholder: e.inputPlaceholder,
                        "aria-invalid": e.validateError,
                        class: ge({ invalid: e.validateError }),
                        onKeydown: Hr(e.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      me("div", {
                        class: ge(e.ns.e("errormsg")),
                        style: tt({
                          visibility: e.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, Ye(e.editorErrorMessage), 7)
                    ], 2), [
                      [$n, e.showInput]
                    ])
                  ], 10, ["id"]),
                  me("div", {
                    class: ge(e.ns.e("btns"))
                  }, [
                    e.showCancelButton ? (ne(), Me(h, {
                      key: 0,
                      loading: e.cancelButtonLoading,
                      "loading-icon": e.cancelButtonLoadingIcon,
                      class: ge([e.cancelButtonClass]),
                      round: e.roundButton,
                      size: e.btnSize,
                      onClick: (E) => e.handleAction("cancel"),
                      onKeydown: Hr(Br((E) => e.handleAction("cancel"), ["prevent"]), ["enter"])
                    }, {
                      default: Ue(() => [
                        tn(Ye(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : Te("v-if", !0),
                    zn(et(h, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: e.confirmButtonLoading,
                      "loading-icon": e.confirmButtonLoadingIcon,
                      class: ge([e.confirmButtonClasses]),
                      round: e.roundButton,
                      disabled: e.confirmButtonDisabled,
                      size: e.btnSize,
                      onClick: (E) => e.handleAction("confirm"),
                      onKeydown: Hr(Br((E) => e.handleAction("confirm"), ["prevent"]), ["enter"])
                    }, {
                      default: Ue(() => [
                        tn(Ye(e.confirmButtonText || e.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "disabled", "size", "onClick", "onKeydown"]), [
                      [$n, e.showConfirmButton]
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
        [$n, e.visible]
      ])
    ]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
var X1 = /* @__PURE__ */ hr(j1, [["render", G1], ["__file", "index.vue"]]);
const Sr = /* @__PURE__ */ new Map(), Z1 = (e) => {
  let r = document.body;
  return e.appendTo && (kt(e.appendTo) && (r = document.querySelector(e.appendTo)), Dr(e.appendTo) && (r = e.appendTo), Dr(r) || (Rt("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body)), r;
}, J1 = (e, r, n = null) => {
  const t = et(X1, e, lr(e.message) || Ka(e.message) ? {
    default: lr(e.message) ? e.message : () => e.message
  } : null);
  return t.appContext = n, ja(t, r), Z1(e).appendChild(r.firstElementChild), t.component;
}, Q1 = () => document.createElement("div"), ep = (e, r) => {
  const n = Q1();
  e.onVanish = () => {
    ja(null, n), Sr.delete(i);
  }, e.onAction = (a) => {
    const s = Sr.get(i);
    let o;
    e.showInput ? o = { value: i.inputValue, action: a } : o = a, e.callback ? e.callback(o, t.proxy) : a === "cancel" || a === "close" ? e.distinguishCancelAndClose && a !== "cancel" ? s.reject("close") : s.reject("cancel") : s.resolve(o);
  };
  const t = J1(e, n, r), i = t.proxy;
  for (const a in e)
    dn(e, a) && !dn(i.$props, a) && (a === "closeIcon" && ur(e[a]) ? i[a] = ln(e[a]) : i[a] = e[a]);
  return i.visible = !0, i;
};
function pr(e, r = null) {
  if (!Bt)
    return Promise.reject();
  let n;
  return kt(e) || Ka(e) ? e = {
    message: e
  } : n = e.callback, new Promise((t, i) => {
    const a = ep(e, r ?? pr._context);
    Sr.set(a, {
      options: e,
      callback: n,
      resolve: t,
      reject: i
    });
  });
}
const tp = ["alert", "confirm", "prompt"], rp = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
tp.forEach((e) => {
  pr[e] = np(e);
});
function np(e) {
  return (r, n, t, i) => {
    let a = "";
    return ur(n) ? (t = n, a = "") : No(n) ? a = "" : a = n, pr(Object.assign({
      title: a,
      message: r,
      type: "",
      ...rp[e]
    }, t, {
      boxType: e
    }), i);
  };
}
pr.close = () => {
  Sr.forEach((e, r) => {
    r.doClose();
  }), Sr.clear();
};
pr._context = null;
const qt = pr;
qt.install = (e) => {
  qt._context = e._context, e.config.globalProperties.$msgbox = qt, e.config.globalProperties.$messageBox = qt, e.config.globalProperties.$alert = qt.alert, e.config.globalProperties.$confirm = qt.confirm, e.config.globalProperties.$prompt = qt.prompt;
};
const ip = qt;
function ap({
  type: e = "warning",
  icon: r = "",
  title: n = "系统提示",
  message: t,
  showCancelButton: i = !0,
  confirmButtonText: a = "确定",
  cancelButtonText: s = "取消",
  center: o = !1,
  overflow: h = !1,
  draggable: c = !1,
  appendTo: x,
  customStyle: E = {},
  doSomething: g = () => {
  },
  cancelDoSomething: B = () => {
  }
}) {
  ip({
    icon: r === "" ? ln(Fh) : r,
    type: e,
    title: n,
    message: t,
    showCancelButton: i,
    confirmButtonText: a,
    cancelButtonText: s,
    center: o,
    overflow: h,
    draggable: c,
    appendTo: x,
    customStyle: E,
    beforeClose: (v, b, C) => {
      if (v === "confirm") {
        g(), C();
        return;
      }
      B(), C();
    }
  }).catch(() => {
  });
}
const ps = {
  delMessageBox: ap
};
let ui = {};
const op = "ljs-2024.01.30";
function S0(e, r, n) {
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
  for (let h in n)
    t[h] = n[h];
  let i = Kt.setDES(e, op);
  document.getElementById(i) !== null && document.body.removeChild(document.getElementById(i));
  let a = document.createElement("canvas");
  a.width = t.can_w, a.height = t.can_h;
  let s = a.getContext("2d");
  s.rotate(t.rotate * Math.PI / 180), s.font = t.font, s.fillStyle = t.color, s.textAlign = t.align, s.textBaseline = "Middle", s.fillText(r[0], a.width / 8, a.height / 2), s.fillText(r[1], a.width / 8, a.height * 2 / 3);
  let o = document.createElement("div");
  return o.id = i, o.style.display = "block", o.style.visibility = "visible", o.style.opacity = "1", o.style.pointerEvents = "none", o.style.top = "0px", o.style.left = "0px", o.style.position = "fixed", o.style.zIndex = "100000", o.style.width = document.documentElement.clientWidth + "px", o.style.height = document.documentElement.clientHeight + "px", o.style.background = "url(" + a.toDataURL("image/png") + ") left top repeat", document.body.appendChild(o), i;
}
ui.set = (e, r, n, t = 500) => {
  let i = S0(e, r, n);
  setInterval(() => {
    const a = document.getElementById(i), s = a.style;
    (a === null || s.display !== "block" || s.visibility !== "visible" || s.opacity !== "1" || s.position !== "fixed" || s.top !== "0px" || s.left !== "0px") && (i = S0(e, r, n));
  }, t), window.onresize = () => {
    S0(e, r, n);
  };
};
function sp(e) {
  if (Fe.fieldCheck(e))
    return e;
  const r = e.length;
  if (r === 2)
    return e.slice(0, 1) + "*";
  if (r > 2) {
    const n = e.slice(0, 1), t = e.slice(r - 1, r);
    return n + "*" + t;
  }
  return e;
}
function lp(e, r = 4) {
  if (Fe.fieldCheck(e))
    return e;
  e = e + "";
  const n = e.length;
  if (n === 11) {
    const t = e.slice(0, 3), i = e.slice(3 + r, n);
    let a = "";
    for (let s = 0; s < r; s++)
      a += "*";
    return t + a + i;
  } else if (n === 7 || n === 8) {
    const t = e.slice(0, 2), i = e.slice(2 + r, n);
    let a = "";
    for (let s = 0; s < r; s++)
      a += "*";
    return t + a + i;
  } else {
    const t = e.slice(0, 2), i = e.slice(n - 2, n);
    let a = "";
    for (let s = 0; s < n - 4; s++)
      a += "*";
    return t + a + i;
  }
}
function up({
  str: e,
  keepStart: r = 3,
  keepEnd: n = 4,
  maskChar: t = "*",
  maskLength: i = 4
}) {
  if (Fe.fieldCheck(e))
    return e;
  if (!e || e.length < r + n)
    return e + t.repeat(i);
  const a = e.slice(0, r), s = n !== 0 ? e.slice(-n) : "";
  return a + t.repeat(i) + s;
}
const xs = {
  desensitizationName: sp,
  desensitizationPhone: lp,
  desensitizationStr: up
}, cp = {
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
const zt = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [t, i] of r)
    n[t] = i;
  return n;
}, fp = cp, dp = (e) => (H0("data-v-474ec553"), e = e(), q0(), e), hp = { class: "text" }, pp = { class: "g-container" }, xp = /* @__PURE__ */ dp(() => /* @__PURE__ */ me("div", { class: "g-circle" }, null, -1)), vp = { class: "g-bubbles" };
function mp(e, r, n, t, i, a) {
  return ne(), Me(Ga, { to: "body" }, [
    me("div", {
      class: "ljs-loading",
      id: "ljs-loading",
      ref: "ljsLoading",
      style: tt({
        "--speed": e.speed,
        "--gaussian": e.gaussian,
        "--bgopacity": e.bgOpacity,
        "--textcolor": e.textColor
      })
    }, [
      me("div", hp, [
        at(e.$slots, "default", {}, void 0, !0)
      ]),
      me("div", pp, [
        xp,
        me("div", vp, [
          (ne(), xe(It, null, gn(200, (s) => me("div", {
            class: "g-bubble",
            key: s
          })), 64))
        ])
      ])
    ], 4)
  ]);
}
const vs = /* @__PURE__ */ zt(fp, [["render", mp], ["__scopeId", "data-v-474ec553"]]);
const yp = {
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
}, gp = { class: "pagination" }, bp = { class: "note" };
function Bp(e, r, n, t, i, a) {
  const s = mt("el-pagination");
  return ne(), xe("div", gp, [
    me("div", bp, Ye(n.note), 1),
    et(s, Fr({
      background: n.background,
      "current-page": a.currentPage,
      "onUpdate:currentPage": r[0] || (r[0] = (o) => a.currentPage = o),
      "page-size": a.pageSize,
      "onUpdate:pageSize": r[1] || (r[1] = (o) => a.pageSize = o),
      layout: n.layout,
      "page-sizes": n.pageSizes,
      "pager-count": n.pagerCount,
      total: n.total
    }, e.$attrs, {
      onSizeChange: a.handleSizeChange,
      onCurrentChange: a.handleCurrentChange
    }), null, 16, ["background", "current-page", "page-size", "layout", "page-sizes", "pager-count", "total", "onSizeChange", "onCurrentChange"])
  ]);
}
const ms = /* @__PURE__ */ zt(yp, [["render", Bp], ["__scopeId", "data-v-83c57e11"]]), Ep = {
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
        const e = this.$refs.rightMenu.offsetWidth, r = this.$refs.rightMenu.offsetHeight, n = e + this.opts.left;
        r + this.opts.top > this.opts.height ? this.position.top = this.opts.height - r : this.position.top = this.opts.top, n > this.opts.width ? this.position.left = this.opts.width - e : this.position.left = this.opts.left;
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
const wp = Ep;
function Cp(e, r, n, t, i, a) {
  return ne(), Me(Ga, { to: "body" }, [
    e.modelValue ? (ne(), xe("div", {
      key: 0,
      ref: "rightMenu",
      class: ge(`rightMenu ${e.menuClass} ${e.modelValue ? "show" : ""}`),
      style: tt({
        top: `${e.position.top}px`,
        left: `${e.position.left}px`
      })
    }, [
      at(e.$slots, "default", {}, void 0, !0)
    ], 6)) : Te("", !0)
  ]);
}
const ys = /* @__PURE__ */ zt(wp, [["render", Cp], ["__scopeId", "data-v-99657e8c"]]);
const Fp = {
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
      return bn.pickerOptions(this.dateType, this.disabledDateSpan, this.dateTypeKeyValue);
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
      e && (this.noType.forEach((r) => {
        const n = e.length;
        for (let t = 0; t < n; t++) {
          const i = e[t];
          if (r === i.dictValue) {
            e.splice(t, 1);
            break;
          }
        }
      }), this.date_type = e), this.dateTypeF(this.dateType);
    },
    // 日期类型切换
    dateTypeF(e) {
      this.opts.dateTypeTag = !1;
      let r = Date.now();
      this.dateType = e;
      let n = null, t = null;
      switch (e) {
        case this.dateTypeKeyValue[3]:
        case this.dateTypeKeyValue[2]:
          r += this.disabledDateSpan * 3600 * 1e3 * 24, this.opts.dateType = "date", this.opts.valueFormat = "YYYY-MM-DD", this.dateValue = Je.formatTime(r, "{y}-{m}-{d}");
          break;
        case this.dateTypeKeyValue[1]:
          n = new Date(r).getFullYear(), t = new Date(r).getMonth() + this.disabledDateSpan, t < 0 ? (n += this.disabledDateSpan, t = 12) : t += 1, this.opts.dateType = "month", this.opts.valueFormat = "YYYY-MM", this.dateValue = Je.formatTime(/* @__PURE__ */ new Date(`${n}-${Re.numberB0(t)}`), "{y}-{m}");
          break;
        case this.dateTypeKeyValue[0]:
          n = new Date(r).getFullYear(), n += this.disabledDateSpan, this.opts.dateType = "year", this.opts.valueFormat = "YYYY", this.dateValue = n.toString();
          break;
      }
      setTimeout(() => {
        this.opts.dateTypeTag = !0;
      }, 0);
    }
  }
}, _p = ["onClick"], Ap = { class: "frequencyDate" };
function Dp(e, r, n, t, i, a) {
  const s = mt("el-date-picker"), o = mt("el-form-item");
  return ne(), Me(o, {
    label: n.formItemLabel,
    prop: "date"
  }, {
    default: Ue(() => [
      me("div", {
        class: "frequency",
        style: tt({
          "--dateTypeNum": i.date_type.length
        })
      }, [
        (ne(!0), xe(It, null, gn(i.date_type, (h) => (ne(), xe("div", {
          class: ge(["one", { active: a.dateType === h.dictValue }]),
          onClick: (c) => a.dateTypeF(h.dictValue),
          key: h.dictValue
        }, Ye(h.dictLabel), 11, _p))), 128))
      ], 4),
      et(U0, { name: "frequencyDate" }, {
        default: Ue(() => [
          me("div", Ap, [
            et(s, {
              modelValue: a.dateValue,
              "onUpdate:modelValue": r[0] || (r[0] = (h) => a.dateValue = h),
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
const gs = /* @__PURE__ */ zt(Fp, [["render", Dp], ["__scopeId", "data-v-5475b4d5"]]), Sp = {
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
      LJSfc: bn,
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
      let e = this.opts.startDate, r = this.opts.startDate;
      if (this.dateType !== "year" && (e = new Date(this.opts.startDate).getTime(), r = new Date(this.opts.endDate).getTime()), Number(e) > Number(r)) {
        const n = this.opts.startDate;
        this.opts.startDate = this.opts.endDate, this.opts.endDate = n;
      }
      this.$emit("update:date", [this.opts.startDate, this.opts.endDate]);
    },
    init() {
      this.initData();
    },
    // 初始化数据
    async initData() {
      const e = this.datetypeData;
      e && (this.noType.forEach((r) => {
        const n = e.length;
        for (let t = 0; t < n; t++) {
          const i = e[t];
          if (r === i.dictValue) {
            e.splice(t, 1);
            break;
          }
        }
      }), this.date_type = e), !Fe.fieldCheck(this.date) && this.date.length === 2 && (this.opts.startDate = this.date[0], this.opts.endDate = this.date[1]), this.dateTypeF(this.dateType);
    },
    // 日期类型切换
    dateTypeF(e) {
      this.opts.dateTypeTag = !1, this.dateType = e;
      let r = [], n = null;
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
      if (!Fe.fieldCheck(this.date) && this.date.length === 2) {
        switch (this.dateSwitchRule === 0 ? n = [this.date[0], this.date[1]] : this.dateSwitchRule === 1 && (n = Je.initSearchDateQj(this.opts.dateType)), e) {
          case this.dateTypeKeyValue[3]:
            this.opts.startDate = Je.formatTime(n[0], "{y}-{m}-{d} {h}:{i}:{s}"), this.opts.endDate = Je.formatTime(n[1], "{y}-{m}-{d} {h}:{i}:{s}");
            break;
          case this.dateTypeKeyValue[2]:
            this.opts.startDate = Je.formatTime(n[0], "{y}-{m}-{d}"), this.opts.endDate = Je.formatTime(n[1], "{y}-{m}-{d}");
            break;
          case this.dateTypeKeyValue[1]:
            this.opts.startDate = Je.formatTime(n[0], "{y}-{m}"), this.opts.endDate = Je.formatTime(n[1], "{y}-{m}");
            break;
          case this.dateTypeKeyValue[0]:
            this.opts.startDate = n[0].toString(), this.opts.endDate = n[1].toString();
            break;
        }
        this.dateValue = r;
      }
      this.$emit("update:date", [this.opts.startDate, this.opts.endDate]), setTimeout(() => {
        this.opts.dateTypeTag = !0;
      }, 0);
    }
  }
};
const Tp = Sp, Ip = ["onClick"], kp = {
  key: 0,
  class: "frequencyDate"
}, Rp = { class: "zhi" };
function Mp(e, r, n, t, i, a) {
  const s = mt("el-date-picker"), o = mt("el-form-item");
  return ne(), Me(o, {
    label: e.formItemLabel,
    prop: "date"
  }, {
    default: Ue(() => [
      me("div", {
        class: "frequency",
        style: tt({
          "--dateTypeNum": e.date_type.length
        })
      }, [
        (ne(!0), xe(It, null, gn(e.date_type, (h) => (ne(), xe("div", {
          class: ge(["one", { active: e.dateType === h.dictValue }]),
          onClick: (c) => e.dateTypeF(h.dictValue),
          key: h.dictValue
        }, Ye(h.dictLabel), 11, Ip))), 128))
      ], 4),
      et(U0, { name: "frequencyDate" }, {
        default: Ue(() => [
          e.opts.dateTypeTag ? (ne(), xe("div", kp, [
            et(s, {
              modelValue: e.opts.startDate,
              "onUpdate:modelValue": r[0] || (r[0] = (h) => e.opts.startDate = h),
              style: tt({
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
            me("span", Rp, Ye(e.symbol), 1),
            et(s, {
              modelValue: e.opts.endDate,
              "onUpdate:modelValue": r[1] || (r[1] = (h) => e.opts.endDate = h),
              style: tt({
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
          ])) : Te("", !0)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["label"]);
}
const bs = /* @__PURE__ */ zt(Tp, [["render", Mp], ["__scopeId", "data-v-1e7c37ee"]]), Lp = {
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
        !Fe.fieldCheck(this.modelValue) && this.modelValue.length >= 1 ? (this.opts.startDate = this.modelValue[0], this.opts.endDate = this.modelValue[1]) : (this.opts.startDate = null, this.opts.endDate = null);
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
      let e = this.opts.startDate, r = this.opts.startDate;
      if (this.dateType !== "year" && (e = new Date(this.opts.startDate).getTime(), r = new Date(this.opts.endDate).getTime()), Number(e) > Number(r)) {
        const n = this.opts.startDate;
        this.opts.startDate = this.opts.endDate, this.opts.endDate = n;
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
    pickerOptionsDynamic(e = 30, r) {
      r ? trendsDisabledDate = D.formatTime(r[0], "{y}-{m}-{d}") : trendsDisabledDate = 0;
      const n = 3600 * 1e3 * 24 * e;
      return (t) => {
        if (trendsDisabledDate === 0)
          return t.getTime() > Date.now() || t.getTime() < trendsDisabledDate;
        {
          const i = new Date(trendsDisabledDate).getTime() + n - 864e5, a = new Date(trendsDisabledDate).getTime() - n;
          return i >= Date.now() ? t.getTime() > Date.now() || t.getTime() < a : t.getTime() > i || t.getTime() < a;
        }
      };
    }
  }
};
const Pp = Lp, Np = (e) => (H0("data-v-2adc6833"), e = e(), q0(), e), Op = /* @__PURE__ */ Np(() => /* @__PURE__ */ me("span", { class: "and" }, "~", -1));
function zp(e, r, n, t, i, a) {
  const s = mt("el-date-picker"), o = mt("el-form-item");
  return ne(), Me(o, {
    label: e.formItemLabel,
    prop: e.formItemProp,
    rules: e.formItemRules
  }, {
    default: Ue(() => [
      et(s, {
        modelValue: e.opts.startDate,
        "onUpdate:modelValue": r[0] || (r[0] = (h) => e.opts.startDate = h),
        style: tt({
          width: `${e.dateType === "year" ? 100 : e.dateType === "month" ? 120 : e.dateType === "date" ? 140 : (e.dateType === "datetime", 200)}px !important`
        }),
        "value-format": e.opts.valueFormat,
        type: e.dateType,
        placeholder: "开始日期",
        editable: !1,
        clearable: e.clearable,
        "disabled-date": e.disabledDate_start,
        onChange: r[1] || (r[1] = (h) => (e.dateChange(), e.change_start(h))),
        onVisibleChange: r[2] || (r[2] = (h) => e.visibleChange_start(h))
      }, null, 8, ["modelValue", "style", "value-format", "type", "clearable", "disabled-date"]),
      Op,
      et(s, {
        modelValue: e.opts.endDate,
        "onUpdate:modelValue": r[3] || (r[3] = (h) => e.opts.endDate = h),
        style: tt({
          width: `${e.dateType === "year" ? 100 : e.dateType === "month" ? 120 : e.dateType === "date" ? 140 : (e.dateType === "datetime", 200)}px !important`
        }),
        "value-format": e.opts.valueFormat,
        type: e.dateType,
        placeholder: "结束日期",
        editable: !1,
        clearable: e.clearable,
        "disabled-date": e.disabledDate_end,
        onChange: r[4] || (r[4] = (h) => (e.dateChange(), e.change_end(h))),
        onVisibleChange: r[5] || (r[5] = (h) => e.visibleChange_end(h))
      }, null, 8, ["modelValue", "style", "value-format", "type", "clearable", "disabled-date"])
    ]),
    _: 1
  }, 8, ["label", "prop", "rules"]);
}
const Bs = /* @__PURE__ */ zt(Pp, [["render", zp], ["__scopeId", "data-v-2adc6833"]]), sr = 3600 * 1e3 * 24;
function $p(e, r = 30, n) {
  n ? e.trendsDisabledDate = Je.formatTime(n, "{y}-{m}-{d}") : e.trendsDisabledDate = 0;
  const t = 3600 * 1e3 * 24 * r;
  return (i) => {
    if (e.trendsDisabledDate === 0)
      return i.getTime() > Date.now() || i.getTime() < e.trendsDisabledDate;
    {
      const a = new Date(e.trendsDisabledDate).getTime() + t - 864e5, s = new Date(e.trendsDisabledDate).getTime() - t;
      return a >= Date.now() ? i.getTime() > Date.now() || i.getTime() < s : i.getTime() > a || i.getTime() < s;
    }
  };
}
function Up(e, r, n, t) {
  if (t)
    r.tempDate = e.date;
  else if (!Fe.fieldCheck(e.date) && e.date.length > 0 && !Fe.fieldCheck(e.date[0]) && !Fe.fieldCheck(e.date[1])) {
    let i = new Date(e.date[0]).getTime(), a = new Date(e.date[1]).getTime();
    Math.abs(i - a) / sr >= n && (r.tempDate[1] === e.date[1] ? e.date[1] = Je.formatTime(i + sr * (n - 1), "{y}-{m}-{d}") : e.date[0] = Je.formatTime(a - sr * (n - 1), "{y}-{m}-{d}"));
  }
}
function Hp(e, r, n, t) {
  if (t)
    r.tempDate = e.date;
  else if (!Fe.fieldCheck(e.date) && e.date.length > 0 && !Fe.fieldCheck(e.date[0]) && !Fe.fieldCheck(e.date[1])) {
    let i = new Date(e.date[0]).getTime(), a = new Date(e.date[1]).getTime();
    Math.abs(i - a) / sr >= n && (r.tempDate[0] === e.date[0] ? e.date[0] = Je.formatTime(a - sr * (n - 1), "{y}-{m}-{d}") : e.date[1] = Je.formatTime(i + sr * (n - 1), "{y}-{m}-{d}"));
  }
}
const qp = {
  pickerOptionsDynamic: $p,
  visibleChange_start: Up,
  visibleChange_end: Hp
};
const Vp = {
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
}, Yp = ["index"];
function Wp(e, r, n, t, i, a) {
  const s = mt("el-tag");
  return ne(), xe("div", null, [
    (ne(!0), xe(It, null, gn(n.options, (o, h) => (ne(), xe(It, {
      key: o.dictValue
    }, [
      a.values.includes(o.dictValue) ? (ne(), xe(It, { key: 0 }, [
        o.listClass == "default" || o.listClass == "" ? (ne(), xe("span", {
          key: 0,
          index: h,
          class: ge(o.cssClass)
        }, Ye(o.dictLabel), 11, Yp)) : (ne(), Me(s, {
          key: 1,
          "disable-transitions": !0,
          index: h,
          type: o.listClass === void 0 || o.listClass === null || o.listClass === "" ? "info" : o.listClass,
          class: ge(o.cssClass)
        }, {
          default: Ue(() => [
            tn(Ye(o.dictLabel), 1)
          ]),
          _: 2
        }, 1032, ["index", "type", "class"]))
      ], 64)) : Te("", !0)
    ], 64))), 128))
  ]);
}
const Es = /* @__PURE__ */ zt(Vp, [["render", Wp], ["__scopeId", "data-v-339f3229"]]);
var Kp = function(e, r) {
  var n = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: n,
      w: n.offsetWidth,
      h: n.offsetHeight
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
  r && Object.deepExtend(t, r), t.tmp.obj = {
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
  }, t.fn.particle = function(i, a, s) {
    if (this.radius = (t.particles.size.random ? Math.random() : 1) * t.particles.size.value, t.particles.size.anim.enable && (this.size_status = !1, this.vs = t.particles.size.anim.speed / 100, t.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = s ? s.x : Math.random() * t.canvas.w, this.y = s ? s.y : Math.random() * t.canvas.h, this.x > t.canvas.w - this.radius * 2 ? this.x = this.x - this.radius : this.x < this.radius * 2 && (this.x = this.x + this.radius), this.y > t.canvas.h - this.radius * 2 ? this.y = this.y - this.radius : this.y < this.radius * 2 && (this.y = this.y + this.radius), t.particles.move.bounce && t.fn.vendors.checkOverlap(this, s), this.color = {}, typeof i.value == "object")
      if (i.value instanceof Array) {
        var o = i.value[Math.floor(Math.random() * t.particles.color.value.length)];
        this.color.rgb = T0(o);
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
      } : typeof i.value == "string" && (this.color = i, this.color.rgb = T0(this.color.value));
    this.opacity = (t.particles.opacity.random ? Math.random() : 1) * t.particles.opacity.value, t.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = t.particles.opacity.anim.speed / 100, t.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var h = {};
    switch (t.particles.move.direction) {
      case "top":
        h = { x: 0, y: -1 };
        break;
      case "top-right":
        h = { x: 0.5, y: -0.5 };
        break;
      case "right":
        h = { x: 1, y: -0 };
        break;
      case "bottom-right":
        h = { x: 0.5, y: 0.5 };
        break;
      case "bottom":
        h = { x: 0, y: 1 };
        break;
      case "bottom-left":
        h = { x: -0.5, y: 1 };
        break;
      case "left":
        h = { x: -1, y: 0 };
        break;
      case "top-left":
        h = { x: -0.5, y: -0.5 };
        break;
      default:
        h = { x: 0, y: 0 };
        break;
    }
    t.particles.move.straight ? (this.vx = h.x, this.vy = h.y, t.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = h.x + Math.random() - 0.5, this.vy = h.y + Math.random() - 0.5), this.vx_i = this.vx, this.vy_i = this.vy;
    var c = t.particles.shape.type;
    if (typeof c == "object") {
      if (c instanceof Array) {
        var x = c[Math.floor(Math.random() * c.length)];
        this.shape = x;
      }
    } else
      this.shape = c;
    if (this.shape == "image") {
      var E = t.particles.shape;
      this.img = {
        src: E.image.src,
        ratio: E.image.width / E.image.height
      }, this.img.ratio || (this.img.ratio = 1), t.tmp.img_type == "svg" && t.tmp.source_svg != null && (t.fn.vendors.createSvgImg(this), t.tmp.pushing && (this.img.loaded = !1));
    }
  }, t.fn.particle.prototype.draw = function() {
    var i = this;
    if (i.radius_bubble != null)
      var a = i.radius_bubble;
    else
      var a = i.radius;
    if (i.opacity_bubble != null)
      var s = i.opacity_bubble;
    else
      var s = i.opacity;
    if (i.color.rgb)
      var o = "rgba(" + i.color.rgb.r + "," + i.color.rgb.g + "," + i.color.rgb.b + "," + s + ")";
    else
      var o = "hsla(" + i.color.hsl.h + "," + i.color.hsl.s + "%," + i.color.hsl.l + "%," + s + ")";
    switch (t.canvas.ctx.fillStyle = o, t.canvas.ctx.beginPath(), i.shape) {
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
        let c = function() {
          t.canvas.ctx.drawImage(
            h,
            i.x - a,
            i.y - a,
            a * 2,
            a * 2 / i.img.ratio
          );
        };
        if (t.tmp.img_type == "svg")
          var h = i.img.obj;
        else
          var h = t.tmp.img_obj;
        h && c();
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
        var s = t.particles.move.speed / 2;
        a.x += a.vx * s, a.y += a.vy * s;
      }
      if (t.particles.opacity.anim.enable && (a.opacity_status == !0 ? (a.opacity >= t.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= t.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), t.particles.size.anim.enable && (a.size_status == !0 ? (a.radius >= t.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= t.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), t.particles.move.out_mode == "bounce")
        var o = {
          x_left: a.radius,
          x_right: t.canvas.w,
          y_top: a.radius,
          y_bottom: t.canvas.h
        };
      else
        var o = {
          x_left: -a.radius,
          x_right: t.canvas.w + a.radius,
          y_top: -a.radius,
          y_bottom: t.canvas.h + a.radius
        };
      switch (a.x - a.radius > t.canvas.w ? (a.x = o.x_left, a.y = Math.random() * t.canvas.h) : a.x + a.radius < 0 && (a.x = o.x_right, a.y = Math.random() * t.canvas.h), a.y - a.radius > t.canvas.h ? (a.y = o.y_top, a.x = Math.random() * t.canvas.w) : a.y + a.radius < 0 && (a.y = o.y_bottom, a.x = Math.random() * t.canvas.w), t.particles.move.out_mode) {
        case "bounce":
          (a.x + a.radius > t.canvas.w || a.x - a.radius < 0) && (a.vx = -a.vx), (a.y + a.radius > t.canvas.h || a.y - a.radius < 0) && (a.vy = -a.vy);
          break;
      }
      if (Dt("grab", t.interactivity.events.onhover.mode) && t.fn.modes.grabParticle(a), (Dt("bubble", t.interactivity.events.onhover.mode) || Dt("bubble", t.interactivity.events.onclick.mode)) && t.fn.modes.bubbleParticle(a), (Dt("repulse", t.interactivity.events.onhover.mode) || Dt("repulse", t.interactivity.events.onclick.mode)) && t.fn.modes.repulseParticle(a), t.particles.line_linked.enable || t.particles.move.attract.enable)
        for (var h = i + 1; h < t.particles.array.length; h++) {
          var c = t.particles.array[h];
          t.particles.line_linked.enable && t.fn.interact.linkParticles(a, c), t.particles.move.attract.enable && t.fn.interact.attractParticles(a, c), t.particles.move.bounce && t.fn.interact.bounceParticles(a, c);
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
    var s = i.x - a.x, o = i.y - a.y, h = Math.sqrt(s * s + o * o);
    if (h <= t.particles.line_linked.distance) {
      var c = t.particles.line_linked.opacity - h / (1 / t.particles.line_linked.opacity) / t.particles.line_linked.distance;
      if (c > 0) {
        var x = t.particles.line_linked.color_rgb_line;
        t.canvas.ctx.strokeStyle = "rgba(" + x.r + "," + x.g + "," + x.b + "," + c + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(i.x, i.y), t.canvas.ctx.lineTo(a.x, a.y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
      }
    }
  }, t.fn.interact.attractParticles = function(i, a) {
    var s = i.x - a.x, o = i.y - a.y, h = Math.sqrt(s * s + o * o);
    if (h <= t.particles.line_linked.distance) {
      var c = s / (t.particles.move.attract.rotateX * 1e3), x = o / (t.particles.move.attract.rotateY * 1e3);
      i.vx -= c, i.vy -= x, a.vx += c, a.vy += x;
    }
  }, t.fn.interact.bounceParticles = function(i, a) {
    var s = i.x - a.x, o = i.y - a.y, h = Math.sqrt(s * s + o * o), c = i.radius + a.radius;
    h <= c && (i.vx = -i.vx, i.vy = -i.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, t.fn.modes.pushParticles = function(i, a) {
    t.tmp.pushing = !0;
    for (var s = 0; s < i; s++)
      t.particles.array.push(
        new t.fn.particle(
          t.particles.color,
          t.particles.opacity.value,
          {
            x: a ? a.pos_x : Math.random() * t.canvas.w,
            y: a ? a.pos_y : Math.random() * t.canvas.h
          }
        )
      ), s == i - 1 && (t.particles.move.enable || t.fn.particlesDraw(), t.tmp.pushing = !1);
  }, t.fn.modes.removeParticles = function(i) {
    t.particles.array.splice(0, i), t.particles.move.enable || t.fn.particlesDraw();
  }, t.fn.modes.bubbleParticle = function(i) {
    if (t.interactivity.events.onhover.enable && Dt("bubble", t.interactivity.events.onhover.mode)) {
      let B = function() {
        i.opacity_bubble = i.opacity, i.radius_bubble = i.radius;
      };
      var a = i.x - t.interactivity.mouse.pos_x, s = i.y - t.interactivity.mouse.pos_y, o = Math.sqrt(a * a + s * s), h = 1 - o / t.interactivity.modes.bubble.distance;
      if (o <= t.interactivity.modes.bubble.distance) {
        if (h >= 0 && t.interactivity.status == "mousemove") {
          if (t.interactivity.modes.bubble.size != t.particles.size.value)
            if (t.interactivity.modes.bubble.size > t.particles.size.value) {
              var c = i.radius + t.interactivity.modes.bubble.size * h;
              c >= 0 && (i.radius_bubble = c);
            } else {
              var x = i.radius - t.interactivity.modes.bubble.size, c = i.radius - x * h;
              c > 0 ? i.radius_bubble = c : i.radius_bubble = 0;
            }
          if (t.interactivity.modes.bubble.opacity != t.particles.opacity.value)
            if (t.interactivity.modes.bubble.opacity > t.particles.opacity.value) {
              var E = t.interactivity.modes.bubble.opacity * h;
              E > i.opacity && E <= t.interactivity.modes.bubble.opacity && (i.opacity_bubble = E);
            } else {
              var E = i.opacity - (t.particles.opacity.value - t.interactivity.modes.bubble.opacity) * h;
              E < i.opacity && E >= t.interactivity.modes.bubble.opacity && (i.opacity_bubble = E);
            }
        }
      } else
        B();
      t.interactivity.status == "mouseleave" && B();
    } else if (t.interactivity.events.onclick.enable && Dt("bubble", t.interactivity.events.onclick.mode)) {
      let B = function(v, b, C, k, A) {
        if (v != b)
          if (t.tmp.bubble_duration_end) {
            if (C != null) {
              var M = k - g * (k - v) / t.interactivity.modes.bubble.duration, P = v - M;
              T = v + P, A == "size" && (i.radius_bubble = T), A == "opacity" && (i.opacity_bubble = T);
            }
          } else if (o <= t.interactivity.modes.bubble.distance) {
            if (C != null)
              var S = C;
            else
              var S = k;
            if (S != v) {
              var T = k - g * (k - v) / t.interactivity.modes.bubble.duration;
              A == "size" && (i.radius_bubble = T), A == "opacity" && (i.opacity_bubble = T);
            }
          } else
            A == "size" && (i.radius_bubble = void 0), A == "opacity" && (i.opacity_bubble = void 0);
      };
      if (t.tmp.bubble_clicking) {
        var a = i.x - t.interactivity.mouse.click_pos_x, s = i.y - t.interactivity.mouse.click_pos_y, o = Math.sqrt(a * a + s * s), g = ((/* @__PURE__ */ new Date()).getTime() - t.interactivity.mouse.click_time) / 1e3;
        g > t.interactivity.modes.bubble.duration && (t.tmp.bubble_duration_end = !0), g > t.interactivity.modes.bubble.duration * 2 && (t.tmp.bubble_clicking = !1, t.tmp.bubble_duration_end = !1);
      }
      t.tmp.bubble_clicking && (B(t.interactivity.modes.bubble.size, t.particles.size.value, i.radius_bubble, i.radius, "size"), B(t.interactivity.modes.bubble.opacity, t.particles.opacity.value, i.opacity_bubble, i.opacity, "opacity"));
    }
  }, t.fn.modes.repulseParticle = function(i) {
    if (t.interactivity.events.onhover.enable && Dt("repulse", t.interactivity.events.onhover.mode) && t.interactivity.status == "mousemove") {
      var a = i.x - t.interactivity.mouse.pos_x, s = i.y - t.interactivity.mouse.pos_y, o = Math.sqrt(a * a + s * s), h = { x: a / o, y: s / o }, c = t.interactivity.modes.repulse.distance, x = 100, E = jp(1 / c * (-1 * Math.pow(o / c, 2) + 1) * c * x, 0, 50), g = {
        x: i.x + h.x * E,
        y: i.y + h.y * E
      };
      t.particles.move.out_mode == "bounce" ? (g.x - i.radius > 0 && g.x + i.radius < t.canvas.w && (i.x = g.x), g.y - i.radius > 0 && g.y + i.radius < t.canvas.h && (i.y = g.y)) : (i.x = g.x, i.y = g.y);
    } else if (t.interactivity.events.onclick.enable && Dt("repulse", t.interactivity.events.onclick.mode))
      if (t.tmp.repulse_finish || (t.tmp.repulse_count++, t.tmp.repulse_count == t.particles.array.length && (t.tmp.repulse_finish = !0)), t.tmp.repulse_clicking) {
        let A = function() {
          var S = Math.atan2(v, B);
          if (i.vx = C * Math.cos(S), i.vy = C * Math.sin(S), t.particles.move.out_mode == "bounce") {
            var T = {
              x: i.x + i.vx,
              y: i.y + i.vy
            };
            (T.x + i.radius > t.canvas.w || T.x - i.radius < 0) && (i.vx = -i.vx), (T.y + i.radius > t.canvas.h || T.y - i.radius < 0) && (i.vy = -i.vy);
          }
        };
        var c = Math.pow(t.interactivity.modes.repulse.distance / 6, 3), B = t.interactivity.mouse.click_pos_x - i.x, v = t.interactivity.mouse.click_pos_y - i.y, b = B * B + v * v, C = -c / b * 1;
        b <= c && A();
      } else
        t.tmp.repulse_clicking == !1 && (i.vx = i.vx_i, i.vy = i.vy_i);
  }, t.fn.modes.grabParticle = function(i) {
    if (t.interactivity.events.onhover.enable && t.interactivity.status == "mousemove") {
      var a = i.x - t.interactivity.mouse.pos_x, s = i.y - t.interactivity.mouse.pos_y, o = Math.sqrt(a * a + s * s);
      if (o <= t.interactivity.modes.grab.distance) {
        var h = t.interactivity.modes.grab.line_linked.opacity - o / (1 / t.interactivity.modes.grab.line_linked.opacity) / t.interactivity.modes.grab.distance;
        if (h > 0) {
          var c = t.particles.line_linked.color_rgb_line;
          t.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + h + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(i.x, i.y), t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x, t.interactivity.mouse.pos_y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
        }
      }
    }
  }, t.fn.vendors.eventsListeners = function() {
    t.interactivity.detect_on == "window" ? t.interactivity.el = window : t.interactivity.el = t.canvas.el, (t.interactivity.events.onhover.enable || t.interactivity.events.onclick.enable) && (t.interactivity.el.addEventListener("mousemove", function(i) {
      if (t.interactivity.el == window)
        var a = i.clientX, s = i.clientY;
      else
        var a = i.offsetX || i.clientX, s = i.offsetY || i.clientY;
      t.interactivity.mouse.pos_x = a, t.interactivity.mouse.pos_y = s, t.tmp.retina && (t.interactivity.mouse.pos_x *= t.canvas.pxratio, t.interactivity.mouse.pos_y *= t.canvas.pxratio), t.interactivity.status = "mousemove";
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
      var a = i * t.particles.number.value / t.particles.number.density.value_area, s = t.particles.array.length - a;
      s < 0 ? t.fn.modes.pushParticles(Math.abs(s)) : t.fn.modes.removeParticles(s);
    }
  }, t.fn.vendors.checkOverlap = function(i, a) {
    for (var s = 0; s < t.particles.array.length; s++) {
      var o = t.particles.array[s], h = i.x - o.x, c = i.y - o.y, x = Math.sqrt(h * h + c * c);
      x <= i.radius + o.radius && (i.x = a ? a.x : Math.random() * t.canvas.w, i.y = a ? a.y : Math.random() * t.canvas.h, t.fn.vendors.checkOverlap(i));
    }
  }, t.fn.vendors.createSvgImg = function(i) {
    var a = t.tmp.source_svg, s = /#([0-9A-F]{3,6})/gi, o = a.replace(s, function(g, B, v, b) {
      if (i.color.rgb)
        var C = "rgba(" + i.color.rgb.r + "," + i.color.rgb.g + "," + i.color.rgb.b + "," + i.opacity + ")";
      else
        var C = "hsla(" + i.color.hsl.h + "," + i.color.hsl.s + "%," + i.color.hsl.l + "%," + i.opacity + ")";
      return C;
    }), h = new Blob([o], { type: "image/svg+xml;charset=utf-8" }), c = window.URL || window.webkitURL || window, x = c.createObjectURL(h), E = new Image();
    E.addEventListener("load", function() {
      i.img.obj = E, i.img.loaded = !0, c.revokeObjectURL(x), t.tmp.count_svg++;
    }), E.src = x;
  }, t.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(t.fn.drawAnimFrame), n.remove(), pJSDom = null;
  }, t.fn.vendors.drawShape = function(i, a, s, o, h, c) {
    var x = h * c, E = h / c, g = 180 * (E - 2) / E, B = Math.PI - Math.PI * g / 180;
    i.save(), i.beginPath(), i.translate(a, s), i.moveTo(0, 0);
    for (var v = 0; v < x; v++)
      i.lineTo(o, 0), i.translate(o, 0), i.rotate(B);
    i.fill(), i.restore();
  }, t.fn.vendors.exportImg = function() {
    window.open(t.canvas.el.toDataURL("image/png"), "_blank");
  }, t.fn.vendors.loadImg = function(i) {
    if (t.tmp.img_error = void 0, t.particles.shape.image.src != "")
      if (i == "svg") {
        var a = new XMLHttpRequest();
        a.open("GET", t.particles.shape.image.src), a.onreadystatechange = function(o) {
          a.readyState == 4 && (a.status == 200 ? (t.tmp.source_svg = o.currentTarget.response, t.fn.vendors.checkBeforeDraw()) : t.tmp.img_error = !0);
        }, a.send();
      } else {
        var s = new Image();
        s.addEventListener("load", function() {
          t.tmp.img_obj = s, t.fn.vendors.checkBeforeDraw();
        }), s.src = t.particles.shape.image.src;
      }
    else
      t.tmp.img_error = !0;
  }, t.fn.vendors.draw = function() {
    t.particles.shape.type == "image" ? t.tmp.img_type == "svg" ? t.tmp.count_svg >= t.particles.number.value ? (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame)) : t.tmp.img_error || (t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw)) : t.tmp.img_obj != null ? (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame)) : t.tmp.img_error || (t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw)) : (t.fn.particlesDraw(), t.particles.move.enable ? t.fn.drawAnimFrame = requestAnimFrame(t.fn.vendors.draw) : cancelRequestAnimFrame(t.fn.drawAnimFrame));
  }, t.fn.vendors.checkBeforeDraw = function() {
    t.particles.shape.type == "image" ? t.tmp.img_type == "svg" && t.tmp.source_svg == null ? t.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(t.tmp.checkAnimFrame), t.tmp.img_error || (t.fn.vendors.init(), t.fn.vendors.draw())) : (t.fn.vendors.init(), t.fn.vendors.draw());
  }, t.fn.vendors.init = function() {
    t.fn.retinaInit(), t.fn.canvasInit(), t.fn.canvasSize(), t.fn.canvasPaint(), t.fn.particlesCreate(), t.fn.vendors.densityAutoParticles(), t.particles.line_linked.color_rgb_line = T0(t.particles.line_linked.color);
  }, t.fn.vendors.start = function() {
    Dt("image", t.particles.shape.type) ? (t.tmp.img_type = t.particles.shape.image.src.substr(t.particles.shape.image.src.length - 3), t.fn.vendors.loadImg(t.tmp.img_type)) : t.fn.vendors.checkBeforeDraw();
  }, t.fn.vendors.eventsListeners(), t.fn.vendors.start();
};
Object.deepExtend = function e(r, n) {
  for (var t in n)
    n[t] && n[t].constructor && n[t].constructor === Object ? (r[t] = r[t] || {}, e(r[t], n[t])) : r[t] = n[t];
  return r;
};
window.requestAnimFrame = function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60);
  };
}();
window.cancelRequestAnimFrame = function() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}();
function T0(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(r, function(t, i, a, s) {
    return i + i + a + a + s + s;
  });
  var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return n ? {
    r: parseInt(n[1], 16),
    g: parseInt(n[2], 16),
    b: parseInt(n[3], 16)
  } : null;
}
function jp(e, r, n) {
  return Math.min(Math.max(e, r), n);
}
function Dt(e, r) {
  return r.indexOf(e) > -1;
}
window.pJSDom = [];
window.particlesJS = function(e, r) {
  typeof e != "string" && (r = e, e = "particles-js"), e || (e = "particles-js");
  var n = document.getElementById(e), t = "particles-js-canvas-el", i = n.getElementsByClassName(t);
  if (i.length)
    for (; i.length > 0; )
      n.removeChild(i[0]);
  var a = document.createElement("canvas");
  a.className = t, a.style.width = "100%", a.style.height = "100%";
  var s = document.getElementById(e).appendChild(a);
  s != null && pJSDom.push(new Kp(e, r));
};
window.particlesJS.load = function(e, r, n) {
  var t = new XMLHttpRequest();
  t.open("GET", r), t.onreadystatechange = function(i) {
    if (t.readyState == 4)
      if (t.status == 200) {
        var a = JSON.parse(i.currentTarget.response);
        window.particlesJS(e, a), n && n();
      } else
        "" + t.status;
  }, t.send();
};
const Gp = {
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
}, Xp = {
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
}, Zp = !0, Jp = {
  particles: Gp,
  interactivity: Xp,
  retina_detect: Zp
};
const Qp = {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      particlesJS("particles-js", Jp), document.body.style.overflow = "hidden";
    }
  }
}, ex = (e) => (H0("data-v-6254d928"), e = e(), q0(), e), tx = { class: "particles-js-box" }, rx = /* @__PURE__ */ ex(() => /* @__PURE__ */ me("div", { id: "particles-js" }, null, -1)), nx = [
  rx
];
function ix(e, r, n, t, i, a) {
  return ne(), xe("div", tx, nx);
}
const ws = /* @__PURE__ */ zt(Qp, [["render", ix], ["__scopeId", "data-v-6254d928"]]), ax = {
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
      let r = null;
      this.unit === "rem" ? r = this.remToPx(this.lineHeight) : r = this.lineHeight, this.maxLine = e / r, this.maxLine > this.max && (this.useMax = this.max);
    },
    remToPx(e) {
      const r = document.documentElement.style.fontSize;
      let n = null;
      return this.fieldCheck(r) || (n = r.slice(0, r.length - 2)), e = e * n, e;
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
const ox = ax, sx = {
  key: 0,
  class: "textAbbreviation-line"
}, lx = {
  key: 1,
  class: "textAbbreviation-last"
};
function ux(e, r, n, t, i, a) {
  return ne(), xe("div", {
    class: "textAbbreviation",
    style: tt({
      "line-height": e.lineHeight + e.unit,
      "font-size": e.fontSize + e.unit
    })
  }, [
    e.mode === "line" ? (ne(), xe("div", sx, [
      me("div", {
        ref: "textAbbreviationlineContent",
        class: "textAbbreviation-line-content",
        style: tt({
          height: e.useMax === -1 ? "auto" : `calc(${e.useMax} * ${e.lineHeight}${e.unit})`
        })
      }, Ye(e.data), 5),
      e.useMax !== -1 ? (ne(), xe("div", {
        key: 0,
        onClick: r[0] || (r[0] = (...s) => e.expandRetract && e.expandRetract(...s)),
        class: "textAbbreviation-line-more"
      }, Ye(e.useMax === e.maxLine ? "收起" : "展开"), 1)) : Te("", !0)
    ])) : e.mode === "last" ? (ne(), xe("div", lx, [
      me("div", {
        ref: "textAbbreviationlastContent",
        class: "textAbbreviation-last-content",
        style: tt({
          height: e.useMax === -1 ? "auto" : `calc(${e.useMax} * ${e.lineHeight}${e.unit})`
        })
      }, Ye(e.data), 5),
      e.useMax !== -1 ? (ne(), xe("div", {
        key: 0,
        onClick: r[1] || (r[1] = (...s) => e.expandRetract && e.expandRetract(...s)),
        class: "textAbbreviation-last-more",
        style: tt({
          position: e.useMax === e.maxLine ? "relative" : "absolute",
          "padding-left": e.useMax === e.maxLine ? "0" : "20px"
        })
      }, Ye(e.useMax === e.maxLine ? "收起" : "...展开"), 5)) : Te("", !0)
    ])) : Te("", !0)
  ], 4);
}
const Cs = /* @__PURE__ */ zt(ox, [["render", ux], ["__scopeId", "data-v-8f2fa1ba"]]);
let br = null;
function cx(e, r = null, n) {
  if ("WebSocket" in window) {
    e = fx(e);
    const t = Fe.fieldCheck(r) ? [] : [r];
    return br = new WebSocket(e, t), br.onopen = function() {
      Fe.colorLog({ content: ["websocket", "已连接，正在接收数据...."] });
    }, br.onmessage = function(i) {
      let a = i.data;
      n(JSON.parse(a));
    }, br.onclose = function() {
      Fe.colorLog({ content: ["websocket", "已关闭！"] });
    }, br;
  } else
    console.info("您的浏览器不支持 WebSocket!");
  return null;
}
function fx(e) {
  return location.protocol === "http:" ? e = "ws:" + e : location.protocol === "https:" ? e = "wss:" + e : e = "ws:" + e, e;
}
const Fs = {
  init: cx
};
var on = 0;
const _s = (e = {
  html2Canvas: null,
  // import html2Canvas from 'html2canvas';推荐版本1.4.1
  JsPDF: null
  // import JsPDF from 'jspdf';推荐版本2.5.1
}, r, n, t, i) => {
  if (t) {
    const o = Math.floor(277 * n.scrollWidth / 190) + 20;
    for (let h = 0; h < t.length; h++) {
      const c = Math.ceil((t[h].offsetTop + t[h].offsetHeight) / o);
      if (hx(t, h, c * o)) {
        var a = "";
        t[h].localName !== "tr" ? a = c * o - (t[h].offsetTop + t[h].offsetHeight) : a = c * o - (t[h].offsetTop + t[h].offsetHeight + on) + 20;
        var s = dx(a);
        const x = t[h].parentNode, E = t[h].nextSibling;
        E ? x.insertBefore(s, E) : x.appendChild(s);
      }
    }
  }
  e.html2Canvas(n, {
    allowTaint: !1,
    taintTest: !1,
    logging: !1,
    useCORS: !0,
    dpi: window.devicePixelRatio * 1,
    scale: 2
    // 按比例增加分辨率
  }).then((o) => {
    for (var h = new e.JsPDF("p", "mm", "a4"), c = o.getContext("2d"), x = i ? 277 : 190, E = i ? 190 : 277, g = Math.floor(E * o.width / x), B = 0; B < o.height; ) {
      var v = document.createElement("canvas");
      v.width = o.width, v.height = Math.min(g, o.height - B), v.getContext("2d").putImageData(c.getImageData(0, B, o.width, Math.min(g, o.height - B)), 0, 0), h.addImage(v.toDataURL("image/jpeg", 1), "JPEG", 10, 10, x, Math.min(E, x * v.height / v.width)), B += g, B < o.height && h.addPage();
    }
    h.save(r + ".pdf");
  });
}, dx = (e, r = 0) => {
  const n = document.createElement("div");
  return n.style.background = "#ffffff", n.style.width = "calc(100% + 8px)", n.style.marginLeft = "-4px", n.style.marginBottom = "0px", n.classList.add("divRemove"), n.style.height = e + r + "px", n;
}, hx = (e, r, n) => (e[r].localName !== "tr" && (on += e[r].clientHeight), e[r].localName !== "tr" ? e[r].offsetTop + e[r].offsetHeight < n && e[r + 1] && e[r + 1].offsetTop + e[r + 1].offsetHeight > n : e[r].offsetTop + e[r].offsetHeight + on < n && e[r + 1] && e[r + 1].offsetTop + e[r + 1].offsetHeight + on > n);
class Er {
  //mqtt公共变量
  /**
   * 构造函数
   * @param {String} subscribe 订阅地址
   * @example this.publicMqtt = new mqttCreateds('/furnace/msg');
   * */
  constructor(r) {
    this.subscribe = r;
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
  init(r, n, t) {
    const i = {
      clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
      clean: !0,
      // true: 清除会话, false: 保留会话
      connectTimeout: 4e3,
      // 超时时间
      reconnectPeriod: 5e3
      // 重连时间间隔
    };
    i.username = n.username, i.password = n.password, this.url = t, this.client = r.connect(this.url, i);
  }
  /**
   * 链接
   * @example this.publicMqtt.link();
   * */
  link() {
    this.client.on("connect", (r) => {
      this.client.subscribe(this.subscribe, (n) => {
        console.info(n ? "订阅失败" : "订阅成功");
      });
    });
  }
  /**
   * 取消订阅，返回一个Promise。{msg: '取消订阅成功', path: 订阅地址}
   * @example this.publicMqtt.unsubscribes();
   * */
  unsubscribes() {
    return new Promise((r, n) => {
      this.client.unsubscribe(this.subscribe, (t) => {
        t ? n(t) : r({ msg: "取消订阅成功", path: this.subscribe });
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
  getUrl(r, n, t = !0) {
    n !== "development" && t && (r = location.host + r);
    let i = "";
    return location.protocol === "http:" ? i = "ws:" + r : location.protocol === "https:" ? i = "wss:" + r : i = "ws:" + r, i;
  }
}
//创建公共变量
vr(Er, "url"), //mqtt地址
vr(Er, "oldSubscribe"), //取消订阅准备
vr(Er, "subscribe"), //订阅地址
vr(Er, "client");
const px = {
  LJSws: Fs,
  // websocket封装
  htmlPdf: _s
  // html转pdf
}, xx = [
  { type: "function", name: "menu", entity: ao },
  { type: "function", name: "base", entity: Fe },
  { type: "function", name: "num", entity: Re },
  { type: "function", name: "date", entity: Je },
  { type: "function", name: "fc", entity: bn },
  { type: "function", name: "ecDC", entity: so },
  { type: "function", name: "session", entity: po },
  { type: "function", name: "cryptoJs", entity: Kt },
  { type: "function", name: "sm", entity: Bo },
  { type: "function", name: "rgbC", entity: Eo },
  { type: "function", name: "url", entity: Qa },
  { type: "function", name: "license", entity: wo },
  { type: "function", name: "El", entity: ps },
  { type: "function", name: "Watermark", entity: ui },
  { type: "function", name: "privacy", entity: xs },
  // {type: 'directive', name: 'directives', entity: directives},
  { type: "component", name: "LJSLoading", entity: vs },
  { type: "component", name: "Pagination", entity: ms },
  { type: "component", name: "RightMenu", entity: ys },
  { type: "component", name: "DatetypeChooseDate", entity: gs },
  { type: "component", name: "DatetypeChooseDateRange", entity: bs },
  { type: "component", name: "DateRange", entity: Bs },
  { type: "component", name: "DictTag", entity: Es },
  { type: "component", name: "Particles", entity: ws },
  { type: "component", name: "TextAbbreviation", entity: Cs },
  { type: "other_function", name: "self", entity: px }
], gx = {
  // 全局注入
  install: function(e) {
    xx.map((r) => {
      if (r.type === "directive")
        e.use(r.entity);
      else if (r.type === "component")
        e.component(`${r.name}`, r.entity);
      else if (r.type === "other_function")
        for (let n in r.entity)
          e.config.globalProperties[n] = r.entity[n];
      else {
        const n = `$LJS${r.name}`;
        e.config.globalProperties[n] = r.entity;
      }
    });
  },
  // 局部引入时使用
  // 插件
  LJSLoading: vs,
  Pagination: ms,
  RightMenu: ys,
  DatetypeChooseDate: gs,
  DatetypeChooseDateRange: bs,
  DateRange: Bs,
  DictTag: Es,
  Particles: ws,
  TextAbbreviation: Cs,
  LJSprivacy: xs,
  // 方法
  LJSmenu: ao,
  LJSbase: Fe,
  LJSnum: Re,
  LJSdate: Je,
  LJSfc: bn,
  LJSecDC: so,
  LJSsession: po,
  LJScryptoJs: Kt,
  LJSsm: Bo,
  LJSrgbC: Eo,
  LJSurl: Qa,
  LJSlicense: wo,
  LJSEl: ps,
  LJSWatermark: ui,
  DateRange_spanLimit: qp,
  // 全局变量
  LJSws: Fs,
  htmlPdf: _s,
  // class，需独立引入
  mqttCreateds: Er
};
export {
  gx as default
};
