var ao = Object.defineProperty;
var io = (e, r, n) => r in e ? ao(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n;
var wt = (e, r, n) => (io(e, typeof r != "symbol" ? r + "" : r, n), n);
import { getCurrentInstance as He, inject as Ee, ref as ae, computed as H, unref as R, shallowRef as Mt, watchEffect as ya, readonly as oo, getCurrentScope as so, onScopeDispose as ba, onMounted as qe, nextTick as Ce, watch as Be, isRef as _a, warn as lo, provide as bn, defineComponent as se, openBlock as L, createElementBlock as V, mergeProps as zt, renderSlot as he, createElementVNode as Y, toRef as n0, onUnmounted as co, useAttrs as uo, useSlots as Ca, normalizeClass as K, normalizeStyle as ve, createCommentVNode as Q, Fragment as Le, createBlock as ne, withCtx as oe, resolveDynamicComponent as Se, withModifiers as It, createVNode as xe, toDisplayString as le, onBeforeUnmount as Ht, Text as fo, reactive as Ea, h as xo, markRaw as r0, toRefs as vo, resolveComponent as we, Transition as _n, withDirectives as b0, withKeys as Wt, createTextVNode as Jt, vShow as _0, isVNode as Ba, render as Da, Teleport as Aa, renderList as x0, pushScopeId as Cn, popScopeId as En } from "vue";
const po = () => {
  ie.colorLog({ content: ["", "******************************************"] }), ie.colorLog({ content: ["Core Dependencies：", "ljs-tools"] }), ie.colorLog({ content: ["Author：", "LJS"] }), ie.colorLog({ content: ["API", "https://ljs-y.github.io/ljs-vue3"], color: [
    "background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;",
    "background: #FFF; border: 1px solid #666666; color: #fff; border-radius: 0 4px 4px 0; padding: 2px 6px;"
  ] }), ie.colorLog({ content: ["", "******************************************"] });
};
function ho(e) {
  return e == null || e === "";
}
function Fa({ data: e, value: r, key: n = "id", children: t = "children", parents: a = [] }) {
  const i = e.length;
  for (let o = 0; o < i; o++)
    if (e[o][n] === r || e[o][t] !== void 0 && (a = Fa({
      data: e[o][t],
      value: r,
      key: n,
      children: t,
      parents: a
    }), a.length > 0 && a[a.length - 1][n] === r))
      return a.unshift(e[o]), a;
  return a;
}
function fn({ data: e, opts: r = [], disabled: n = !1 }) {
  if (!e)
    return;
  const t = e.length;
  for (let a = 0; a < t; a++) {
    e[a].disabled = n;
    let i = !1;
    const o = r.length;
    for (let s = 0; s < o; s++) {
      const c = r[s];
      if (e[a][c.key] === c.value) {
        i = !0;
        break;
      }
    }
    i ? (e[a].disabled = !0, e[a].children = fn({ data: e[a].children, opts: r, disabled: !0 })) : e[a].children !== void 0 && (e[a].children = fn({ data: e[a].children, opts: r, disabled: n }));
  }
  return e;
}
function mo(e) {
  let r = [];
  if (!e || !e.length)
    return [];
  for (let n = 0; n < e.length; n++) {
    let t = e[n], a = JSON.parse(JSON.stringify(t));
    a.children = void 0, r.push(a);
    const i = this.handleTreeList(t.children);
    r = r.concat(i);
  }
  return r;
}
function go({ data: e, id: r = "id", parentId: n = "parentId", children: t = "children" }) {
  let a = { id: r, parentId: n, childrenList: t };
  var i = {}, o = {}, s = [];
  for (let l of e) {
    let u = l[a.parentId];
    i[u] == null && (i[u] = []), o[l[a.id]] = l, i[u].push(l);
  }
  for (let l of e) {
    let u = l[a.parentId];
    o[u] == null && s.push(l);
  }
  for (let l of s)
    c(l);
  function c(l) {
    if (i[l[a.id]] !== null && (l[a.childrenList] = i[l[a.id]]), l[a.childrenList])
      for (let u of l[a.childrenList])
        c(u);
  }
  return s;
}
function yo(e = 120) {
  var r = document.documentElement, n = r.clientWidth / e;
  r.style.fontSize = n + "px";
}
function bo({ data: e, value: r, labelKey: n = "distLabel", valueKey: t = "distValue", isTrue: a = !1 }) {
  if (r === void 0)
    return "";
  let i = [];
  return Object.keys(e).some((o, s) => {
    if (e[o][t] == "" + r)
      return n === "$index" ? (i = s, s) : (i.push(e[o][n]), !0);
  }), n === "$index" ? i : (i.length === 0 && i.push(r), a ? i[0] : i.join(""));
}
function _o({ content: e = ["暂无内容"], type: r = "info", color: n = [
  "background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;",
  "background: #1475B2; color: #fff; border-radius: 0 4px 4px 0; padding: 3px 6px;"
] }) {
  let t = "";
  e.forEach((a) => {
    t += `%c${a}`;
  }), console[r](t, n[0], n[1]);
}
function Co({ _this: e, url: r, name: n = (/* @__PURE__ */ new Date()).valueOf() }) {
  let t = new Image();
  t.setAttribute("crossOrigin", "anonymous"), t.src = r + "?time=" + (/* @__PURE__ */ new Date()).valueOf(), e.$nextTick(() => {
    t.onload = () => {
      const a = document.createElement("canvas");
      a.width = t.width, a.height = t.height, a.getContext("2d").drawImage(t, 0, 0, t.width, t.height), a.toBlob((o) => {
        const s = URL.createObjectURL(o), c = document.createElement("a");
        c.download = n, c.href = s, c.click(), c.remove(), URL.revokeObjectURL(s);
      });
    };
  });
}
function Eo(e) {
  return e instanceof Blob || e instanceof File ? new Promise((r, n) => {
    const t = new FileReader();
    t.onloadend = () => r(t.result);
    try {
      t.readAsDataURL(e);
    } catch (a) {
      n(a);
    }
  }) : "";
}
function Bo() {
  var e = 0, r = window.screen, n = navigator.userAgent.toLowerCase();
  return window.devicePixelRatio !== void 0 ? e = window.devicePixelRatio : ~n.indexOf("msie") ? r.deviceXDPI && r.logicalXDPI && (e = r.deviceXDPI / r.logicalXDPI) : window.outerWidth !== void 0 && window.innerWidth !== void 0 && (e = window.outerWidth / window.innerWidth), e && (e = Math.round(e * 100)), e;
}
function a0(e) {
  let r = Array.isArray(e) ? [] : {};
  for (let n in e)
    e.hasOwnProperty(n) && (typeof e[n] == "object" && e[n] !== null ? r[n] = a0(e[n]) : r[n] = e[n]);
  return r;
}
function Do(e, r) {
  if (typeof e != "object" || typeof r != "object")
    return r;
  const n = a0(e), t = a0(r);
  for (let a in n)
    t[a] = n[a];
  return t;
}
const ie = {
  fieldCheck: ho,
  deepCopy: a0,
  getTreeParents: Fa,
  editTreeParentIdCheck: fn,
  handleTreeList: mo,
  handleListTree: go,
  setRemUnit: yo,
  selectDictLabel: bo,
  colorLog: _o,
  downloadImage: Co,
  imageFileToBase64: Eo,
  getWindowRatio: Bo,
  objectCopy: Do
};
po();
function Ao(e) {
  const r = e.getters.menuList, n = Sa({ menuList: r }), t = wa({ data: r, value: n.url });
  n.address = t, e.commit("SET_menuNowOpen", n), e.commit("SET_menuOpenList", [n]);
}
function wa({ data: e, value: r, key: n = "url" }) {
  const t = ie.getTreeParents({ data: e, value: r, key: n }), a = [];
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
function Sa({ menuList: e }) {
  if (e.length === 0)
    return {};
  let r = {};
  return e.forEach((n, t) => {
    t === 0 && (!ie.fieldCheck(n.children) && n.children.length > 0 ? (n.open = !0, r = Sa({ menuList: n.children })) : r = n);
  }), r;
}
function Fo({ store: e, path: r }) {
  const n = e.getters.menuList, t = ie.handleTreeList(n), a = t.length;
  for (let i = 0; i < a; i++) {
    const o = t[i];
    if (o.url === r)
      return o;
  }
}
function wo({ store: e, run: r, path: n, query: t = {} }) {
  const a = Fo({ store: e, path: n });
  ka({ store: e, run: r, menuObj: a, query: t });
}
function ka({ store: e, run: r, menuObj: n, query: t }) {
  let a = e.getters.menuList;
  if (ie.fieldCheck(n.children) && (n.children = []), n.children.length > 0) {
    if (n.open)
      n.open = !n.open;
    else {
      const i = ie.getTreeParents({
        data: a,
        value: n.menuId,
        key: "menuId"
      });
      Bn({ menuList: a, parents: i });
    }
    e.commit("SET_menuList", a);
  } else {
    const i = e.getters.menuNowOpen;
    let o = e.getters.menuOpenList;
    if (i.url === n.url)
      return;
    n.address = wa({ data: e.getters.menuList, value: n.url });
    let s = n;
    n.choose = !n.choose, e.commit("SET_menuNowOpen", s);
    const c = o.length;
    let l = !1;
    for (let u = 0; u < c; u++)
      if (o[u].url === n.url) {
        l = !0;
        break;
      }
    l || (o = e.getters.menuOpenList, o.push(s), e.commit("SET_menuOpenList", o)), r.push({
      path: n.url,
      query: t
    });
  }
}
function Bn({ menuList: e, parents: r, key: n = "menuId" }) {
  return e.forEach((t) => {
    t[n] === r[0][n] ? (t.open = !0, r.length > 1 && r.splice(0, 1)) : t.open = !1, t.children && t.children.length > 0 && (t.children = Bn({ menuList: t.children, parents: r, key: n }));
  }), e;
}
const Ta = {
  fristOpenMenu: Ao,
  handPush: wo,
  menuControl: ka,
  updateTreeOpen: Bn
}, Zt = 1e-14;
function So(e, r = 2, n = "0") {
  if (Nt(e)) {
    e = e.toString();
    const t = e.length, a = r - t;
    let i = "";
    for (let o = 0; o < a; o++)
      i += n;
    return i + e;
  }
  return e;
}
function ko(e, r = 4, n = ",") {
  if (Nt(e)) {
    e += "";
    var t = e.split("."), a = t[0], i = t.length > 1 ? "." + t[1] : "";
    const o = new RegExp("(\\d+)(\\d{" + r + "})");
    for (; o.test(a); )
      a = a.replace(o, "$1" + n + "$2");
    return a + i;
  }
  return e;
}
function To(e) {
  if (Nt(e)) {
    e = Math.ceil(e);
    const r = (e + "").length, n = Math.pow(10, r - 1);
    return Math.ceil(e / n) * n;
  }
  return e;
}
function Io({
  value: e,
  ws: r = 0,
  units: n = ["", "万", "亿万", "万亿"],
  isMerge: t = !0
}) {
  if (Nt(e)) {
    let a = "";
    const i = Number(e) < 0 ? -1 : 1, o = Math.abs(Number(e));
    let s = 0;
    return o < 1e4 ? (a = i * o, s = 0) : o >= 1e4 && o < 1e4 * 1e4 ? (a = i * (o / 1e4 + Zt).toFixed(r), s = 1) : o >= 1e4 * 1e4 && o < 1e4 * 1e4 * 1e4 ? (a = i * (o / (1e4 * 1e4) + Zt).toFixed(r), s = 2) : o >= 1e4 * 1e4 * 1e4 && (a = i * (o / (1e4 * 1e4 * 1e4) + Zt).toFixed(r), s = 3), t ? a + n[s] : {
      num: a,
      unit: n[s]
    };
  }
  return e;
}
function Ia(e, r = 2) {
  return Nt(e) && (e = e + "", e.indexOf(".") > -1 && e.split(".")[1].length > r) ? (e = Number(e), (e + Zt).toFixed(r)) : e;
}
function Nt(e) {
  const r = typeof e;
  return r === "number" || r === "string" && !isNaN(Number(e, 10));
}
function Po(e, r = 12, n = 2) {
  e = Number(e);
  const t = (e / r).toFixed(n), a = [];
  for (let i = 0; i < r; i++)
    i < r - 1 ? a.push(t) : a.push(Ia(e - t * (r - 1), n));
  return a;
}
const te = {
  numberB0: So,
  longNumText: Io,
  numberCeil: To,
  moneySplit: ko,
  numberChangeDecimal: Ia,
  averageNum: Po
};
function Me(e, r) {
  const n = new Date(e), t = r || "{y}-{m}-{d} {h}:{i}:{s}", a = {
    y: n.getFullYear(),
    m: te.numberB0(n.getMonth() + 1),
    d: te.numberB0(n.getDate()),
    h: te.numberB0(n.getHours()),
    i: te.numberB0(n.getMinutes()),
    s: te.numberB0(n.getSeconds()),
    MS: n.getMilliseconds()
  };
  return t.replace(/{(y|m|d|h|i|s|MS)+}/g, (i, o) => a[o]);
}
function Mo(e, r, n = 0) {
  if (n === 0) {
    let t = new Date(e).getTime();
    return Me(t, r);
  }
  if (r === "{y}-{m}-{d}") {
    let t = new Date(e).getTime();
    return t = t + 3600 * 1e3 * 24 * n, Me(t, r);
  } else if (r === "{y}-{m}") {
    const t = n / Math.abs(n);
    let a = new Date(e), i = "";
    const o = a.getMonth() + 1;
    let s = 0, c = 0;
    if (t === -1)
      s = a.getFullYear() + Math.floor((o + n) / 12), c = 12 * Math.abs(s - a.getFullYear()) + o + n, (o + n) % 12 === 0 && (s += t, c = 12);
    else if (t === 1)
      if (o + n <= 12)
        s = a.getFullYear(), c = o + n;
      else if ((o + n) % 12 !== 0)
        s = a.getFullYear() + Math.floor((o + n) / 12), c = o + n - Math.abs(s - a.getFullYear()) * 12;
      else {
        const l = (o + n) / 12;
        s = a.getFullYear() + (l > 1 ? l - 1 : l), c = o + n - Math.abs(s - a.getFullYear()) * 12;
      }
    return i = s + "-" + te.numberB0(c), i;
  } else if (r === "{y}")
    return (new Date(e).getFullYear() + n).toString();
}
function Ro(e, r = 1) {
  if (e[0] === "" || e[0] === null)
    return e;
  const n = new Date(e[0]), t = new Date(e[1]);
  switch (r === void 0 && (r = 1), r) {
    case 1:
      return [
        n.getFullYear() + "-" + te.numberB0(n.getMonth() + 1) + "-" + te.numberB0(n.getDate()) + " 00:00:00",
        t.getFullYear() + "-" + te.numberB0(t.getMonth() + 1) + "-" + te.numberB0(t.getDate()) + " 23:59:59"
      ];
    case 2:
      return [
        n.getFullYear() + "-" + te.numberB0(n.getMonth() + 1) + "-" + te.numberB0(n.getDate()) + " " + te.numberB0(n.getHours()) + ":00:00",
        t.getFullYear() + "-" + te.numberB0(t.getMonth() + 1) + "-" + te.numberB0(t.getDate()) + " " + te.numberB0(t.getHours()) + ":59:59"
      ];
    case 3:
      return [
        n.getFullYear() + "-" + te.numberB0(n.getMonth() + 1) + "-" + te.numberB0(n.getDate()) + " " + te.numberB0(n.getHours()) + ":" + te.numberB0(n.getMinutes()) + ":00",
        t.getFullYear() + "-" + te.numberB0(t.getMonth() + 1) + "-" + te.numberB0(t.getDate()) + " " + te.numberB0(t.getHours()) + ":" + te.numberB0(t.getMinutes()) + ":59"
      ];
  }
  return e;
}
function zo({ time: e = 0, showTag: r = ["天", "小时", "分钟", "秒", "毫秒"], showAll: n = !1, onlyTime: t = !1 }) {
  let a = 1;
  e < 0 && (a = -1), e = Math.abs(e);
  const i = 1e3, o = 60 * i, s = 60 * o, c = 24 * s, l = [0, 0, 0, 0, 0];
  if (e >= c) {
    const f = Math.floor(e / c);
    l[0] = a * f, e -= c * f;
  }
  if (e >= s) {
    const f = Math.floor(e / s);
    l[1] = a * f, e -= s * f;
  }
  if (e >= o) {
    const f = Math.floor(e / o);
    l[2] = a * f, e -= o * f;
  }
  if (e >= i) {
    const f = Math.floor(e / i);
    l[3] = a * f, e -= i * f;
  }
  if (l[4] = a * e, t)
    return l;
  let u = n, m = "";
  return l.forEach((f, h) => {
    !u && f !== 0 && (u = !0), u && (m += f + r[h]);
  }), m;
}
function Lo(e = 10, r = !1) {
  let n = "", t = "", a = "{y}-{m}-{d}";
  return r && (a = "{y}-{m}-{d} {h}:{i}:{s}"), n = Me((/* @__PURE__ */ new Date()).getTime() - 3600 * 1e3 * 24 * (e - 1), a), t = Me(/* @__PURE__ */ new Date(), a), [n, t];
}
function $o(e = "date", r = 0) {
  const n = /* @__PURE__ */ new Date();
  let t = "", a = "";
  switch (e) {
    case "datetime":
      t = Me(n, "{y}-{m}-{d} 00:00:00"), a = Me(n, "{y}-{m}-{d} {h}:{i}:{s}");
      break;
    case "date":
      t = Me(n, "{y}-{m}-01"), a = Me(n, "{y}-{m}-{d}");
      break;
    case "month":
      t = Me(n, "{y}-01"), a = Me(n, "{y}-{m}");
      break;
    case "year":
      t = n.getFullYear() - (r + 1) * 5, a = n.getFullYear();
      break;
  }
  return [t, a];
}
const ue = {
  formatTime: Me,
  customizedDate: Mo,
  dateQjChange: Ro,
  timeRunDistance: zo,
  initSearchDate: Lo,
  initSearchDateQj: $o
};
function Oo({ form: e, key: r = "money", zs: n = 10, ws: t = 2, type: a = "Number", fu: i = !1 }) {
  const o = e;
  o[r] = o[r] + "", a === "Number" && (o[r].slice(0, 1) === "0" && (o[r] = o[r].slice(1, 2) !== "." ? "0" : o[r]), o[r].slice(0, 1) === "-" && (o[r] = o[r].slice(1, 2) === "." ? "-" : o[r]), o[r].slice(0, 2) === "-0" && (o[r] = o[r].slice(2, 3) !== "." ? "-0" : o[r])), i ? o[r] = o[r].replace(/[^\d.-]/g, "") : o[r] = o[r].replace(/[^\d.]/g, ""), o[r] = o[r].replace(/^\./g, ""), o[r] = o[r].replace(/\.{2,}/g, "."), o[r] = o[r].slice(0, 1) + o[r].slice(1, o[r].length).replace(/\-/g, "");
  const s = new RegExp("^(\\-)*(\\d+)\\.(\\d{0," + t + "}).*$");
  if (n !== "" && o[r].length > 0) {
    const c = o[r].split(".");
    let l = c[0], u = "";
    const m = l.slice(0, 1) === "-" ? 1 : 0;
    l.length > n + m && (l = l.slice(0, n + m)), c.length > 1 ? (u = c[1], o[r] = l + "." + u) : o[r] = l;
  }
  o[r] = o[r].replace(s, "$1$2.$3");
}
function Ho({ form: e, key: r = "num", type: n = "Number", numberFristIs0: t = !0 }) {
  n === "Number" && !t && (e[r] = e[r].slice(0, 1) === "0" ? "" : e[r]), e[r] = e[r].replace(/[^\d]/g, ""), n === "Number" && e[r].length > 0 && (e[r] = Number(e[r]));
}
function No(e, r = "username") {
  e[r] = e[r] + "", e[r] = e[r].replace(/[^\w]/g, ""), e[r] = e[r].replace(/\_/g, "");
}
function Vo(e, r) {
  const n = document.createElement("a"), t = new Blob([e], {
    type: "application/vnd.ms-excel"
  });
  n.style.display = "none", n.href = URL.createObjectURL(t), n.setAttribute("download", r), document.body.appendChild(n), n.click(), document.body.removeChild(n);
}
function qo(e = {}) {
  const r = {
    dateType: "3",
    direction: 1,
    span: 0,
    dateTypeKeyValue: ["1", "2", "3", "4"]
  };
  for (let o in e)
    r[o] = e[o];
  const n = 3600 * 1e3 * 24;
  let t = null, a = null, i = 0;
  switch (r.dateType) {
    case r.dateTypeKeyValue[3]:
      i += 1e3 * r.span;
      break;
    case r.dateTypeKeyValue[2]:
      i += n * r.span;
      break;
    case r.dateTypeKeyValue[1]:
      t = new Date(i).getFullYear(), a = new Date(i).getMonth() + 1 + r.span, a < 0 ? (t += r.span, a = 12) : a += 1, i = (/* @__PURE__ */ new Date(`${t}-${a}`)).getTime();
      break;
    case r.dateTypeKeyValue[0]:
      t = new Date(i).getFullYear(), t += r.span, i = (/* @__PURE__ */ new Date(`${t}-01`)).getTime();
      break;
  }
  return (o) => {
    if (r.direction === 1)
      return o.getTime() > i + Date.now();
    if (r.direction === -1)
      return o.getTime() < i + Date.now();
  };
}
let mt = 0;
function Wo(e = 30, r) {
  r ? mt = ue.formatTime(r[0], "{y}-{m}-{d}") : mt = 0;
  const n = 3600 * 1e3 * 24 * e;
  return (t) => {
    if (mt === 0)
      return t.getTime() > Date.now() || t.getTime() < mt;
    {
      const a = new Date(mt).getTime() + n - 864e5, i = new Date(mt).getTime() - n;
      return a >= Date.now() ? t.getTime() > Date.now() || t.getTime() < i : t.getTime() > a || t.getTime() < i;
    }
  };
}
const v0 = {
  numCheck: Ho,
  numEnCheck: No,
  numDxsCheck: Oo,
  downloadBlobData: Vo,
  pickerOptions: qo,
  pickerOptionsDynamic: Wo
};
function Yo(e, r = {
  name: "name",
  key: "val"
}) {
  if (e.length === 0)
    return e;
  const n = {
    name: "name",
    key: "val"
  };
  for (let i in r)
    n[i] = r[i];
  let t = 0;
  if (e.forEach((i) => {
    i.proportion = 0, t += Number(i[n.key]);
  }), t > 0) {
    let i = {
      value: 0,
      index: -1
    };
    e.forEach((o, s) => {
      o[n.key] = o[n.key] == 0 ? null : o[n.key];
      const c = te.numberChangeDecimal(Number(o[n.key]) / t * 100), l = Number(c);
      Number(i.value) < l && (i = {
        value: c,
        index: s
      }), o.proportion = l === 0 && Number(o[n.key]) > 0 ? 0.01 : l;
    }), e[i.index].proportion = 100, e.forEach((o, s) => {
      s !== i.index && (e[i.index].proportion = te.numberChangeDecimal(e[i.index].proportion - Number(o.proportion)));
    });
  }
  const a = [];
  return e.forEach((i) => {
    a.push({
      name: i[n.name],
      value: i[n.key],
      proportion: i.proportion + "%"
    });
  }), a;
}
const Pa = {
  pieChange: Yo
};
var j = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ko(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Uo(e) {
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
    var a = Object.getOwnPropertyDescriptor(e, t);
    Object.defineProperty(n, t, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[t];
      }
    });
  }), n;
}
var Ma = { exports: {} };
function jo(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var C0 = { exports: {} };
const Go = {}, Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Go
}, Symbol.toStringTag, { value: "Module" })), Jo = /* @__PURE__ */ Uo(Xo);
var Qn;
function X() {
  return Qn || (Qn = 1, function(e, r) {
    (function(n, t) {
      e.exports = t();
    })(j, function() {
      var n = n || function(t, a) {
        var i;
        if (typeof window < "u" && window.crypto && (i = window.crypto), typeof self < "u" && self.crypto && (i = self.crypto), typeof globalThis < "u" && globalThis.crypto && (i = globalThis.crypto), !i && typeof window < "u" && window.msCrypto && (i = window.msCrypto), !i && typeof j < "u" && j.crypto && (i = j.crypto), !i && typeof jo == "function")
          try {
            i = Jo;
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
        }, s = Object.create || function() {
          function p() {
          }
          return function(g) {
            var y;
            return p.prototype = g, y = new p(), p.prototype = null, y;
          };
        }(), c = {}, l = c.lib = {}, u = l.Base = function() {
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
              var g = s(this);
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
        }(), m = l.WordArray = u.extend({
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
            var g = this.words, y = p.words, E = this.sigBytes, C = p.sigBytes;
            if (this.clamp(), E % 4)
              for (var B = 0; B < C; B++) {
                var F = y[B >>> 2] >>> 24 - B % 4 * 8 & 255;
                g[E + B >>> 2] |= F << 24 - (E + B) % 4 * 8;
              }
            else
              for (var P = 0; P < C; P += 4)
                g[E + P >>> 2] = y[P >>> 2];
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
            for (var g = [], y = 0; y < p; y += 4)
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
            for (var g = p.words, y = p.sigBytes, E = [], C = 0; C < y; C++) {
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
            for (var g = p.length, y = [], E = 0; E < g; E += 2)
              y[E >>> 3] |= parseInt(p.substr(E, 2), 16) << 24 - E % 8 * 4;
            return new m.init(y, g / 2);
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
            for (var g = p.words, y = p.sigBytes, E = [], C = 0; C < y; C++) {
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
            for (var g = p.length, y = [], E = 0; E < g; E++)
              y[E >>> 2] |= (p.charCodeAt(E) & 255) << 24 - E % 4 * 8;
            return new m.init(y, g);
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
        }, v = l.BufferedBlockAlgorithm = u.extend({
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
            var g, y = this._data, E = y.words, C = y.sigBytes, B = this.blockSize, F = B * 4, P = C / F;
            p ? P = t.ceil(P) : P = t.max((P | 0) - this._minBufferSize, 0);
            var _ = P * B, A = t.min(_ * 4, C);
            if (_) {
              for (var w = 0; w < _; w += B)
                this._doProcessBlock(E, w);
              g = E.splice(0, _), y.sigBytes -= A;
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
        l.Hasher = v.extend({
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
            return function(g, y) {
              return new p.init(y).finalize(g);
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
            return function(g, y) {
              return new b.HMAC.init(p, y).finalize(g);
            };
          }
        });
        var b = c.algo = {};
        return c;
      }(Math);
      return n;
    });
  }(C0)), C0.exports;
}
var E0 = { exports: {} }, er;
function p0() {
  return er || (er = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      return function(t) {
        var a = n, i = a.lib, o = i.Base, s = i.WordArray, c = a.x64 = {};
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
          init: function(l, u) {
            this.high = l, this.low = u;
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
          init: function(l, u) {
            l = this.words = l || [], u != t ? this.sigBytes = u : this.sigBytes = l.length * 8;
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
            for (var l = this.words, u = l.length, m = [], f = 0; f < u; f++) {
              var h = l[f];
              m.push(h.high), m.push(h.low);
            }
            return s.create(m, this.sigBytes);
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
            for (var l = o.clone.call(this), u = l.words = this.words.slice(0), m = u.length, f = 0; f < m; f++)
              u[f] = u[f].clone();
            return l;
          }
        });
      }(), n;
    });
  }(E0)), E0.exports;
}
var B0 = { exports: {} }, tr;
function Zo() {
  return tr || (tr = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      return function() {
        if (typeof ArrayBuffer == "function") {
          var t = n, a = t.lib, i = a.WordArray, o = i.init, s = i.init = function(c) {
            if (c instanceof ArrayBuffer && (c = new Uint8Array(c)), (c instanceof Int8Array || typeof Uint8ClampedArray < "u" && c instanceof Uint8ClampedArray || c instanceof Int16Array || c instanceof Uint16Array || c instanceof Int32Array || c instanceof Uint32Array || c instanceof Float32Array || c instanceof Float64Array) && (c = new Uint8Array(c.buffer, c.byteOffset, c.byteLength)), c instanceof Uint8Array) {
              for (var l = c.byteLength, u = [], m = 0; m < l; m++)
                u[m >>> 2] |= c[m] << 24 - m % 4 * 8;
              o.call(this, u, l);
            } else
              o.apply(this, arguments);
          };
          s.prototype = i;
        }
      }(), n.lib.WordArray;
    });
  }(B0)), B0.exports;
}
var D0 = { exports: {} }, nr;
function Qo() {
  return nr || (nr = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.WordArray, o = t.enc;
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
            for (var l = c.words, u = c.sigBytes, m = [], f = 0; f < u; f += 2) {
              var h = l[f >>> 2] >>> 16 - f % 4 * 8 & 65535;
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
            for (var l = c.length, u = [], m = 0; m < l; m++)
              u[m >>> 1] |= c.charCodeAt(m) << 16 - m % 2 * 16;
            return i.create(u, l * 2);
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
            for (var l = c.words, u = c.sigBytes, m = [], f = 0; f < u; f += 2) {
              var h = s(l[f >>> 2] >>> 16 - f % 4 * 8 & 65535);
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
            for (var l = c.length, u = [], m = 0; m < l; m++)
              u[m >>> 1] |= s(c.charCodeAt(m) << 16 - m % 2 * 16);
            return i.create(u, l * 2);
          }
        };
        function s(c) {
          return c << 8 & 4278255360 | c >>> 8 & 16711935;
        }
      }(), n.enc.Utf16;
    });
  }(D0)), D0.exports;
}
var A0 = { exports: {} }, rr;
function dt() {
  return rr || (rr = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.WordArray, o = t.enc;
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
            var l = c.words, u = c.sigBytes, m = this._map;
            c.clamp();
            for (var f = [], h = 0; h < u; h += 3)
              for (var d = l[h >>> 2] >>> 24 - h % 4 * 8 & 255, x = l[h + 1 >>> 2] >>> 24 - (h + 1) % 4 * 8 & 255, v = l[h + 2 >>> 2] >>> 24 - (h + 2) % 4 * 8 & 255, b = d << 16 | x << 8 | v, p = 0; p < 4 && h + p * 0.75 < u; p++)
                f.push(m.charAt(b >>> 6 * (3 - p) & 63));
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
            var l = c.length, u = this._map, m = this._reverseMap;
            if (!m) {
              m = this._reverseMap = [];
              for (var f = 0; f < u.length; f++)
                m[u.charCodeAt(f)] = f;
            }
            var h = u.charAt(64);
            if (h) {
              var d = c.indexOf(h);
              d !== -1 && (l = d);
            }
            return s(c, l, m);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function s(c, l, u) {
          for (var m = [], f = 0, h = 0; h < l; h++)
            if (h % 4) {
              var d = u[c.charCodeAt(h - 1)] << h % 4 * 2, x = u[c.charCodeAt(h)] >>> 6 - h % 4 * 2, v = d | x;
              m[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return i.create(m, f);
        }
      }(), n.enc.Base64;
    });
  }(A0)), A0.exports;
}
var F0 = { exports: {} }, ar;
function es() {
  return ar || (ar = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.WordArray, o = t.enc;
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
          stringify: function(c, l) {
            l === void 0 && (l = !0);
            var u = c.words, m = c.sigBytes, f = l ? this._safe_map : this._map;
            c.clamp();
            for (var h = [], d = 0; d < m; d += 3)
              for (var x = u[d >>> 2] >>> 24 - d % 4 * 8 & 255, v = u[d + 1 >>> 2] >>> 24 - (d + 1) % 4 * 8 & 255, b = u[d + 2 >>> 2] >>> 24 - (d + 2) % 4 * 8 & 255, p = x << 16 | v << 8 | b, g = 0; g < 4 && d + g * 0.75 < m; g++)
                h.push(f.charAt(p >>> 6 * (3 - g) & 63));
            var y = f.charAt(64);
            if (y)
              for (; h.length % 4; )
                h.push(y);
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
          parse: function(c, l) {
            l === void 0 && (l = !0);
            var u = c.length, m = l ? this._safe_map : this._map, f = this._reverseMap;
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
            return s(c, u, f);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function s(c, l, u) {
          for (var m = [], f = 0, h = 0; h < l; h++)
            if (h % 4) {
              var d = u[c.charCodeAt(h - 1)] << h % 4 * 2, x = u[c.charCodeAt(h)] >>> 6 - h % 4 * 2, v = d | x;
              m[f >>> 2] |= v << 24 - f % 4 * 8, f++;
            }
          return i.create(m, f);
        }
      }(), n.enc.Base64url;
    });
  }(F0)), F0.exports;
}
var w0 = { exports: {} }, ir;
function ft() {
  return ir || (ir = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      return function(t) {
        var a = n, i = a.lib, o = i.WordArray, s = i.Hasher, c = a.algo, l = [];
        (function() {
          for (var x = 0; x < 64; x++)
            l[x] = t.abs(t.sin(x + 1)) * 4294967296 | 0;
        })();
        var u = c.MD5 = s.extend({
          _doReset: function() {
            this._hash = new o.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(x, v) {
            for (var b = 0; b < 16; b++) {
              var p = v + b, g = x[p];
              x[p] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360;
            }
            var y = this._hash.words, E = x[v + 0], C = x[v + 1], B = x[v + 2], F = x[v + 3], P = x[v + 4], _ = x[v + 5], A = x[v + 6], w = x[v + 7], S = x[v + 8], O = x[v + 9], N = x[v + 10], $ = x[v + 11], q = x[v + 12], W = x[v + 13], J = x[v + 14], G = x[v + 15], k = y[0], I = y[1], M = y[2], T = y[3];
            k = m(k, I, M, T, E, 7, l[0]), T = m(T, k, I, M, C, 12, l[1]), M = m(M, T, k, I, B, 17, l[2]), I = m(I, M, T, k, F, 22, l[3]), k = m(k, I, M, T, P, 7, l[4]), T = m(T, k, I, M, _, 12, l[5]), M = m(M, T, k, I, A, 17, l[6]), I = m(I, M, T, k, w, 22, l[7]), k = m(k, I, M, T, S, 7, l[8]), T = m(T, k, I, M, O, 12, l[9]), M = m(M, T, k, I, N, 17, l[10]), I = m(I, M, T, k, $, 22, l[11]), k = m(k, I, M, T, q, 7, l[12]), T = m(T, k, I, M, W, 12, l[13]), M = m(M, T, k, I, J, 17, l[14]), I = m(I, M, T, k, G, 22, l[15]), k = f(k, I, M, T, C, 5, l[16]), T = f(T, k, I, M, A, 9, l[17]), M = f(M, T, k, I, $, 14, l[18]), I = f(I, M, T, k, E, 20, l[19]), k = f(k, I, M, T, _, 5, l[20]), T = f(T, k, I, M, N, 9, l[21]), M = f(M, T, k, I, G, 14, l[22]), I = f(I, M, T, k, P, 20, l[23]), k = f(k, I, M, T, O, 5, l[24]), T = f(T, k, I, M, J, 9, l[25]), M = f(M, T, k, I, F, 14, l[26]), I = f(I, M, T, k, S, 20, l[27]), k = f(k, I, M, T, W, 5, l[28]), T = f(T, k, I, M, B, 9, l[29]), M = f(M, T, k, I, w, 14, l[30]), I = f(I, M, T, k, q, 20, l[31]), k = h(k, I, M, T, _, 4, l[32]), T = h(T, k, I, M, S, 11, l[33]), M = h(M, T, k, I, $, 16, l[34]), I = h(I, M, T, k, J, 23, l[35]), k = h(k, I, M, T, C, 4, l[36]), T = h(T, k, I, M, P, 11, l[37]), M = h(M, T, k, I, w, 16, l[38]), I = h(I, M, T, k, N, 23, l[39]), k = h(k, I, M, T, W, 4, l[40]), T = h(T, k, I, M, E, 11, l[41]), M = h(M, T, k, I, F, 16, l[42]), I = h(I, M, T, k, A, 23, l[43]), k = h(k, I, M, T, O, 4, l[44]), T = h(T, k, I, M, q, 11, l[45]), M = h(M, T, k, I, G, 16, l[46]), I = h(I, M, T, k, B, 23, l[47]), k = d(k, I, M, T, E, 6, l[48]), T = d(T, k, I, M, w, 10, l[49]), M = d(M, T, k, I, J, 15, l[50]), I = d(I, M, T, k, _, 21, l[51]), k = d(k, I, M, T, q, 6, l[52]), T = d(T, k, I, M, F, 10, l[53]), M = d(M, T, k, I, N, 15, l[54]), I = d(I, M, T, k, C, 21, l[55]), k = d(k, I, M, T, S, 6, l[56]), T = d(T, k, I, M, G, 10, l[57]), M = d(M, T, k, I, A, 15, l[58]), I = d(I, M, T, k, W, 21, l[59]), k = d(k, I, M, T, P, 6, l[60]), T = d(T, k, I, M, $, 10, l[61]), M = d(M, T, k, I, B, 15, l[62]), I = d(I, M, T, k, O, 21, l[63]), y[0] = y[0] + k | 0, y[1] = y[1] + I | 0, y[2] = y[2] + M | 0, y[3] = y[3] + T | 0;
          },
          _doFinalize: function() {
            var x = this._data, v = x.words, b = this._nDataBytes * 8, p = x.sigBytes * 8;
            v[p >>> 5] |= 128 << 24 - p % 32;
            var g = t.floor(b / 4294967296), y = b;
            v[(p + 64 >>> 9 << 4) + 15] = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, v[(p + 64 >>> 9 << 4) + 14] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, x.sigBytes = (v.length + 1) * 4, this._process();
            for (var E = this._hash, C = E.words, B = 0; B < 4; B++) {
              var F = C[B];
              C[B] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360;
            }
            return E;
          },
          clone: function() {
            var x = s.clone.call(this);
            return x._hash = this._hash.clone(), x;
          }
        });
        function m(x, v, b, p, g, y, E) {
          var C = x + (v & b | ~v & p) + g + E;
          return (C << y | C >>> 32 - y) + v;
        }
        function f(x, v, b, p, g, y, E) {
          var C = x + (v & p | b & ~p) + g + E;
          return (C << y | C >>> 32 - y) + v;
        }
        function h(x, v, b, p, g, y, E) {
          var C = x + (v ^ b ^ p) + g + E;
          return (C << y | C >>> 32 - y) + v;
        }
        function d(x, v, b, p, g, y, E) {
          var C = x + (b ^ (v | ~p)) + g + E;
          return (C << y | C >>> 32 - y) + v;
        }
        a.MD5 = s._createHelper(u), a.HmacMD5 = s._createHmacHelper(u);
      }(Math), n.MD5;
    });
  }(w0)), w0.exports;
}
var S0 = { exports: {} }, or;
function Ra() {
  return or || (or = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.WordArray, o = a.Hasher, s = t.algo, c = [], l = s.SHA1 = o.extend({
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
            for (var f = this._hash.words, h = f[0], d = f[1], x = f[2], v = f[3], b = f[4], p = 0; p < 80; p++) {
              if (p < 16)
                c[p] = u[m + p] | 0;
              else {
                var g = c[p - 3] ^ c[p - 8] ^ c[p - 14] ^ c[p - 16];
                c[p] = g << 1 | g >>> 31;
              }
              var y = (h << 5 | h >>> 27) + b + c[p];
              p < 20 ? y += (d & x | ~d & v) + 1518500249 : p < 40 ? y += (d ^ x ^ v) + 1859775393 : p < 60 ? y += (d & x | d & v | x & v) - 1894007588 : y += (d ^ x ^ v) - 899497514, b = v, v = x, x = d << 30 | d >>> 2, d = h, h = y;
            }
            f[0] = f[0] + h | 0, f[1] = f[1] + d | 0, f[2] = f[2] + x | 0, f[3] = f[3] + v | 0, f[4] = f[4] + b | 0;
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
        t.SHA1 = o._createHelper(l), t.HmacSHA1 = o._createHmacHelper(l);
      }(), n.SHA1;
    });
  }(S0)), S0.exports;
}
var k0 = { exports: {} }, sr;
function Dn() {
  return sr || (sr = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      return function(t) {
        var a = n, i = a.lib, o = i.WordArray, s = i.Hasher, c = a.algo, l = [], u = [];
        (function() {
          function h(b) {
            for (var p = t.sqrt(b), g = 2; g <= p; g++)
              if (!(b % g))
                return !1;
            return !0;
          }
          function d(b) {
            return (b - (b | 0)) * 4294967296 | 0;
          }
          for (var x = 2, v = 0; v < 64; )
            h(x) && (v < 8 && (l[v] = d(t.pow(x, 1 / 2))), u[v] = d(t.pow(x, 1 / 3)), v++), x++;
        })();
        var m = [], f = c.SHA256 = s.extend({
          _doReset: function() {
            this._hash = new o.init(l.slice(0));
          },
          _doProcessBlock: function(h, d) {
            for (var x = this._hash.words, v = x[0], b = x[1], p = x[2], g = x[3], y = x[4], E = x[5], C = x[6], B = x[7], F = 0; F < 64; F++) {
              if (F < 16)
                m[F] = h[d + F] | 0;
              else {
                var P = m[F - 15], _ = (P << 25 | P >>> 7) ^ (P << 14 | P >>> 18) ^ P >>> 3, A = m[F - 2], w = (A << 15 | A >>> 17) ^ (A << 13 | A >>> 19) ^ A >>> 10;
                m[F] = _ + m[F - 7] + w + m[F - 16];
              }
              var S = y & E ^ ~y & C, O = v & b ^ v & p ^ b & p, N = (v << 30 | v >>> 2) ^ (v << 19 | v >>> 13) ^ (v << 10 | v >>> 22), $ = (y << 26 | y >>> 6) ^ (y << 21 | y >>> 11) ^ (y << 7 | y >>> 25), q = B + $ + S + u[F] + m[F], W = N + O;
              B = C, C = E, E = y, y = g + q | 0, g = p, p = b, b = v, v = q + W | 0;
            }
            x[0] = x[0] + v | 0, x[1] = x[1] + b | 0, x[2] = x[2] + p | 0, x[3] = x[3] + g | 0, x[4] = x[4] + y | 0, x[5] = x[5] + E | 0, x[6] = x[6] + C | 0, x[7] = x[7] + B | 0;
          },
          _doFinalize: function() {
            var h = this._data, d = h.words, x = this._nDataBytes * 8, v = h.sigBytes * 8;
            return d[v >>> 5] |= 128 << 24 - v % 32, d[(v + 64 >>> 9 << 4) + 14] = t.floor(x / 4294967296), d[(v + 64 >>> 9 << 4) + 15] = x, h.sigBytes = d.length * 4, this._process(), this._hash;
          },
          clone: function() {
            var h = s.clone.call(this);
            return h._hash = this._hash.clone(), h;
          }
        });
        a.SHA256 = s._createHelper(f), a.HmacSHA256 = s._createHmacHelper(f);
      }(Math), n.SHA256;
    });
  }(k0)), k0.exports;
}
var T0 = { exports: {} }, lr;
function ts() {
  return lr || (lr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), Dn());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.WordArray, o = t.algo, s = o.SHA256, c = o.SHA224 = s.extend({
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
            var l = s._doFinalize.call(this);
            return l.sigBytes -= 4, l;
          }
        });
        t.SHA224 = s._createHelper(c), t.HmacSHA224 = s._createHmacHelper(c);
      }(), n.SHA224;
    });
  }(T0)), T0.exports;
}
var I0 = { exports: {} }, cr;
function za() {
  return cr || (cr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), p0());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.Hasher, o = t.x64, s = o.Word, c = o.WordArray, l = t.algo;
        function u() {
          return s.create.apply(s, arguments);
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
        var h = l.SHA512 = i.extend({
          _doReset: function() {
            this._hash = new c.init([
              new s.init(1779033703, 4089235720),
              new s.init(3144134277, 2227873595),
              new s.init(1013904242, 4271175723),
              new s.init(2773480762, 1595750129),
              new s.init(1359893119, 2917565137),
              new s.init(2600822924, 725511199),
              new s.init(528734635, 4215389547),
              new s.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(d, x) {
            for (var v = this._hash.words, b = v[0], p = v[1], g = v[2], y = v[3], E = v[4], C = v[5], B = v[6], F = v[7], P = b.high, _ = b.low, A = p.high, w = p.low, S = g.high, O = g.low, N = y.high, $ = y.low, q = E.high, W = E.low, J = C.high, G = C.low, k = B.high, I = B.low, M = F.high, T = F.low, re = P, Z = _, pe = A, U = w, Te = S, Re = O, vt = N, Ye = $, me = q, fe = W, rt = J, at = G, pt = k, it = I, At = M, ot = T, ge = 0; ge < 80; ge++) {
              var ye, Ie, z = f[ge];
              if (ge < 16)
                Ie = z.high = d[x + ge * 2] | 0, ye = z.low = d[x + ge * 2 + 1] | 0;
              else {
                var ee = f[ge - 15], De = ee.high, Ke = ee.low, qt = (De >>> 1 | Ke << 31) ^ (De >>> 8 | Ke << 24) ^ De >>> 7, Vn = (Ke >>> 1 | De << 31) ^ (Ke >>> 8 | De << 24) ^ (Ke >>> 7 | De << 25), qn = f[ge - 2], ht = qn.high, Ft = qn.low, Ki = (ht >>> 19 | Ft << 13) ^ (ht << 3 | Ft >>> 29) ^ ht >>> 6, Wn = (Ft >>> 19 | ht << 13) ^ (Ft << 3 | ht >>> 29) ^ (Ft >>> 6 | ht << 26), Yn = f[ge - 7], Ui = Yn.high, ji = Yn.low, Kn = f[ge - 16], Gi = Kn.high, Un = Kn.low;
                ye = Vn + ji, Ie = qt + Ui + (ye >>> 0 < Vn >>> 0 ? 1 : 0), ye = ye + Wn, Ie = Ie + Ki + (ye >>> 0 < Wn >>> 0 ? 1 : 0), ye = ye + Un, Ie = Ie + Gi + (ye >>> 0 < Un >>> 0 ? 1 : 0), z.high = Ie, z.low = ye;
              }
              var Xi = me & rt ^ ~me & pt, jn = fe & at ^ ~fe & it, Ji = re & pe ^ re & Te ^ pe & Te, Zi = Z & U ^ Z & Re ^ U & Re, Qi = (re >>> 28 | Z << 4) ^ (re << 30 | Z >>> 2) ^ (re << 25 | Z >>> 7), Gn = (Z >>> 28 | re << 4) ^ (Z << 30 | re >>> 2) ^ (Z << 25 | re >>> 7), eo = (me >>> 14 | fe << 18) ^ (me >>> 18 | fe << 14) ^ (me << 23 | fe >>> 9), to = (fe >>> 14 | me << 18) ^ (fe >>> 18 | me << 14) ^ (fe << 23 | me >>> 9), Xn = m[ge], no = Xn.high, Jn = Xn.low, Ae = ot + to, Ue = At + eo + (Ae >>> 0 < ot >>> 0 ? 1 : 0), Ae = Ae + jn, Ue = Ue + Xi + (Ae >>> 0 < jn >>> 0 ? 1 : 0), Ae = Ae + Jn, Ue = Ue + no + (Ae >>> 0 < Jn >>> 0 ? 1 : 0), Ae = Ae + ye, Ue = Ue + Ie + (Ae >>> 0 < ye >>> 0 ? 1 : 0), Zn = Gn + Zi, ro = Qi + Ji + (Zn >>> 0 < Gn >>> 0 ? 1 : 0);
              At = pt, ot = it, pt = rt, it = at, rt = me, at = fe, fe = Ye + Ae | 0, me = vt + Ue + (fe >>> 0 < Ye >>> 0 ? 1 : 0) | 0, vt = Te, Ye = Re, Te = pe, Re = U, pe = re, U = Z, Z = Ae + Zn | 0, re = Ue + ro + (Z >>> 0 < Ae >>> 0 ? 1 : 0) | 0;
            }
            _ = b.low = _ + Z, b.high = P + re + (_ >>> 0 < Z >>> 0 ? 1 : 0), w = p.low = w + U, p.high = A + pe + (w >>> 0 < U >>> 0 ? 1 : 0), O = g.low = O + Re, g.high = S + Te + (O >>> 0 < Re >>> 0 ? 1 : 0), $ = y.low = $ + Ye, y.high = N + vt + ($ >>> 0 < Ye >>> 0 ? 1 : 0), W = E.low = W + fe, E.high = q + me + (W >>> 0 < fe >>> 0 ? 1 : 0), G = C.low = G + at, C.high = J + rt + (G >>> 0 < at >>> 0 ? 1 : 0), I = B.low = I + it, B.high = k + pt + (I >>> 0 < it >>> 0 ? 1 : 0), T = F.low = T + ot, F.high = M + At + (T >>> 0 < ot >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var d = this._data, x = d.words, v = this._nDataBytes * 8, b = d.sigBytes * 8;
            x[b >>> 5] |= 128 << 24 - b % 32, x[(b + 128 >>> 10 << 5) + 30] = Math.floor(v / 4294967296), x[(b + 128 >>> 10 << 5) + 31] = v, d.sigBytes = x.length * 4, this._process();
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
      }(), n.SHA512;
    });
  }(I0)), I0.exports;
}
var P0 = { exports: {} }, ur;
function ns() {
  return ur || (ur = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), p0(), za());
    })(j, function(n) {
      return function() {
        var t = n, a = t.x64, i = a.Word, o = a.WordArray, s = t.algo, c = s.SHA512, l = s.SHA384 = c.extend({
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
        t.SHA384 = c._createHelper(l), t.HmacSHA384 = c._createHmacHelper(l);
      }(), n.SHA384;
    });
  }(P0)), P0.exports;
}
var M0 = { exports: {} }, dr;
function rs() {
  return dr || (dr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), p0());
    })(j, function(n) {
      return function(t) {
        var a = n, i = a.lib, o = i.WordArray, s = i.Hasher, c = a.x64, l = c.Word, u = a.algo, m = [], f = [], h = [];
        (function() {
          for (var v = 1, b = 0, p = 0; p < 24; p++) {
            m[v + 5 * b] = (p + 1) * (p + 2) / 2 % 64;
            var g = b % 5, y = (2 * v + 3 * b) % 5;
            v = g, b = y;
          }
          for (var v = 0; v < 5; v++)
            for (var b = 0; b < 5; b++)
              f[v + 5 * b] = b + (2 * v + 3 * b) % 5 * 5;
          for (var E = 1, C = 0; C < 24; C++) {
            for (var B = 0, F = 0, P = 0; P < 7; P++) {
              if (E & 1) {
                var _ = (1 << P) - 1;
                _ < 32 ? F ^= 1 << _ : B ^= 1 << _ - 32;
              }
              E & 128 ? E = E << 1 ^ 113 : E <<= 1;
            }
            h[C] = l.create(B, F);
          }
        })();
        var d = [];
        (function() {
          for (var v = 0; v < 25; v++)
            d[v] = l.create();
        })();
        var x = u.SHA3 = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: s.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            for (var v = this._state = [], b = 0; b < 25; b++)
              v[b] = new l.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(v, b) {
            for (var p = this._state, g = this.blockSize / 2, y = 0; y < g; y++) {
              var E = v[b + 2 * y], C = v[b + 2 * y + 1];
              E = (E << 8 | E >>> 24) & 16711935 | (E << 24 | E >>> 8) & 4278255360, C = (C << 8 | C >>> 24) & 16711935 | (C << 24 | C >>> 8) & 4278255360;
              var B = p[y];
              B.high ^= C, B.low ^= E;
            }
            for (var F = 0; F < 24; F++) {
              for (var P = 0; P < 5; P++) {
                for (var _ = 0, A = 0, w = 0; w < 5; w++) {
                  var B = p[P + 5 * w];
                  _ ^= B.high, A ^= B.low;
                }
                var S = d[P];
                S.high = _, S.low = A;
              }
              for (var P = 0; P < 5; P++)
                for (var O = d[(P + 4) % 5], N = d[(P + 1) % 5], $ = N.high, q = N.low, _ = O.high ^ ($ << 1 | q >>> 31), A = O.low ^ (q << 1 | $ >>> 31), w = 0; w < 5; w++) {
                  var B = p[P + 5 * w];
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
                for (var w = 0; w < 5; w++) {
                  var W = P + 5 * w, B = p[W], re = d[W], Z = d[(P + 1) % 5 + 5 * w], pe = d[(P + 2) % 5 + 5 * w];
                  B.high = re.high ^ ~Z.high & pe.high, B.low = re.low ^ ~Z.low & pe.low;
                }
              var B = p[0], U = h[F];
              B.high ^= U.high, B.low ^= U.low;
            }
          },
          _doFinalize: function() {
            var v = this._data, b = v.words;
            this._nDataBytes * 8;
            var p = v.sigBytes * 8, g = this.blockSize * 32;
            b[p >>> 5] |= 1 << 24 - p % 32, b[(t.ceil((p + 1) / g) * g >>> 5) - 1] |= 128, v.sigBytes = b.length * 4, this._process();
            for (var y = this._state, E = this.cfg.outputLength / 8, C = E / 8, B = [], F = 0; F < C; F++) {
              var P = y[F], _ = P.high, A = P.low;
              _ = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360, A = (A << 8 | A >>> 24) & 16711935 | (A << 24 | A >>> 8) & 4278255360, B.push(A), B.push(_);
            }
            return new o.init(B, E);
          },
          clone: function() {
            for (var v = s.clone.call(this), b = v._state = this._state.slice(0), p = 0; p < 25; p++)
              b[p] = b[p].clone();
            return v;
          }
        });
        a.SHA3 = s._createHelper(x), a.HmacSHA3 = s._createHmacHelper(x);
      }(Math), n.SHA3;
    });
  }(M0)), M0.exports;
}
var R0 = { exports: {} }, fr;
function as() {
  return fr || (fr = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      return function(t) {
        var a = n, i = a.lib, o = i.WordArray, s = i.Hasher, c = a.algo, l = o.create([
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
        ]), h = o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), d = o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), x = c.RIPEMD160 = s.extend({
          _doReset: function() {
            this._hash = o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(C, B) {
            for (var F = 0; F < 16; F++) {
              var P = B + F, _ = C[P];
              C[P] = (_ << 8 | _ >>> 24) & 16711935 | (_ << 24 | _ >>> 8) & 4278255360;
            }
            var A = this._hash.words, w = h.words, S = d.words, O = l.words, N = u.words, $ = m.words, q = f.words, W, J, G, k, I, M, T, re, Z, pe;
            M = W = A[0], T = J = A[1], re = G = A[2], Z = k = A[3], pe = I = A[4];
            for (var U, F = 0; F < 80; F += 1)
              U = W + C[B + O[F]] | 0, F < 16 ? U += v(J, G, k) + w[0] : F < 32 ? U += b(J, G, k) + w[1] : F < 48 ? U += p(J, G, k) + w[2] : F < 64 ? U += g(J, G, k) + w[3] : U += y(J, G, k) + w[4], U = U | 0, U = E(U, $[F]), U = U + I | 0, W = I, I = k, k = E(G, 10), G = J, J = U, U = M + C[B + N[F]] | 0, F < 16 ? U += y(T, re, Z) + S[0] : F < 32 ? U += g(T, re, Z) + S[1] : F < 48 ? U += p(T, re, Z) + S[2] : F < 64 ? U += b(T, re, Z) + S[3] : U += v(T, re, Z) + S[4], U = U | 0, U = E(U, q[F]), U = U + pe | 0, M = pe, pe = Z, Z = E(re, 10), re = T, T = U;
            U = A[1] + G + Z | 0, A[1] = A[2] + k + pe | 0, A[2] = A[3] + I + M | 0, A[3] = A[4] + W + T | 0, A[4] = A[0] + J + re | 0, A[0] = U;
          },
          _doFinalize: function() {
            var C = this._data, B = C.words, F = this._nDataBytes * 8, P = C.sigBytes * 8;
            B[P >>> 5] |= 128 << 24 - P % 32, B[(P + 64 >>> 9 << 4) + 14] = (F << 8 | F >>> 24) & 16711935 | (F << 24 | F >>> 8) & 4278255360, C.sigBytes = (B.length + 1) * 4, this._process();
            for (var _ = this._hash, A = _.words, w = 0; w < 5; w++) {
              var S = A[w];
              A[w] = (S << 8 | S >>> 24) & 16711935 | (S << 24 | S >>> 8) & 4278255360;
            }
            return _;
          },
          clone: function() {
            var C = s.clone.call(this);
            return C._hash = this._hash.clone(), C;
          }
        });
        function v(C, B, F) {
          return C ^ B ^ F;
        }
        function b(C, B, F) {
          return C & B | ~C & F;
        }
        function p(C, B, F) {
          return (C | ~B) ^ F;
        }
        function g(C, B, F) {
          return C & F | B & ~F;
        }
        function y(C, B, F) {
          return C ^ (B | ~F);
        }
        function E(C, B) {
          return C << B | C >>> 32 - B;
        }
        a.RIPEMD160 = s._createHelper(x), a.HmacRIPEMD160 = s._createHmacHelper(x);
      }(), n.RIPEMD160;
    });
  }(R0)), R0.exports;
}
var z0 = { exports: {} }, xr;
function An() {
  return xr || (xr = 1, function(e, r) {
    (function(n, t) {
      e.exports = t(X());
    })(j, function(n) {
      (function() {
        var t = n, a = t.lib, i = a.Base, o = t.enc, s = o.Utf8, c = t.algo;
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
          init: function(l, u) {
            l = this._hasher = new l.init(), typeof u == "string" && (u = s.parse(u));
            var m = l.blockSize, f = m * 4;
            u.sigBytes > f && (u = l.finalize(u)), u.clamp();
            for (var h = this._oKey = u.clone(), d = this._iKey = u.clone(), x = h.words, v = d.words, b = 0; b < m; b++)
              x[b] ^= 1549556828, v[b] ^= 909522486;
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
            var l = this._hasher;
            l.reset(), l.update(this._iKey);
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
          update: function(l) {
            return this._hasher.update(l), this;
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
          finalize: function(l) {
            var u = this._hasher, m = u.finalize(l);
            u.reset();
            var f = u.finalize(this._oKey.clone().concat(m));
            return f;
          }
        });
      })();
    });
  }(z0)), z0.exports;
}
var L0 = { exports: {} }, vr;
function is() {
  return vr || (vr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), Dn(), An());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.Base, o = a.WordArray, s = t.algo, c = s.SHA256, l = s.HMAC, u = s.PBKDF2 = i.extend({
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
            for (var h = this.cfg, d = l.create(h.hasher, m), x = o.create(), v = o.create([1]), b = x.words, p = v.words, g = h.keySize, y = h.iterations; b.length < g; ) {
              var E = d.update(f).finalize(v);
              d.reset();
              for (var C = E.words, B = C.length, F = E, P = 1; P < y; P++) {
                F = d.finalize(F), d.reset();
                for (var _ = F.words, A = 0; A < B; A++)
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
      }(), n.PBKDF2;
    });
  }(L0)), L0.exports;
}
var $0 = { exports: {} }, pr;
function nt() {
  return pr || (pr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), Ra(), An());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.Base, o = a.WordArray, s = t.algo, c = s.MD5, l = s.EvpKDF = i.extend({
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
            for (var f, h = this.cfg, d = h.hasher.create(), x = o.create(), v = x.words, b = h.keySize, p = h.iterations; v.length < b; ) {
              f && d.update(f), f = d.update(u).finalize(m), d.reset();
              for (var g = 1; g < p; g++)
                f = d.finalize(f), d.reset();
              x.concat(f);
            }
            return x.sigBytes = b * 4, x;
          }
        });
        t.EvpKDF = function(u, m, f) {
          return l.create(f).compute(u, m);
        };
      }(), n.EvpKDF;
    });
  }($0)), $0.exports;
}
var O0 = { exports: {} }, hr;
function ce() {
  return hr || (hr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), nt());
    })(j, function(n) {
      n.lib.Cipher || function(t) {
        var a = n, i = a.lib, o = i.Base, s = i.WordArray, c = i.BufferedBlockAlgorithm, l = a.enc;
        l.Utf8;
        var u = l.Base64, m = a.algo, f = m.EvpKDF, h = i.Cipher = c.extend({
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
          init: function(_, A, w) {
            this.cfg = this.cfg.extend(w), this._xformMode = _, this._key = A, this.reset();
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
                encrypt: function(w, S, O) {
                  return _(S).encrypt(A, w, S, O);
                },
                decrypt: function(w, S, O) {
                  return _(S).decrypt(A, w, S, O);
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
            processBlock: function(w, S) {
              var O = this._cipher, N = O.blockSize;
              A.call(this, w, S, N), O.encryptBlock(w, S), this._prevBlock = w.slice(S, S + N);
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
            processBlock: function(w, S) {
              var O = this._cipher, N = O.blockSize, $ = w.slice(S, S + N);
              O.decryptBlock(w, S), A.call(this, w, S, N), this._prevBlock = $;
            }
          });
          function A(w, S, O) {
            var N, $ = this._iv;
            $ ? (N = $, this._iv = t) : N = this._prevBlock;
            for (var q = 0; q < O; q++)
              w[S + q] ^= N[q];
          }
          return _;
        }(), b = a.pad = {}, p = b.Pkcs7 = {
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
            for (var w = A * 4, S = w - _.sigBytes % w, O = S << 24 | S << 16 | S << 8 | S, N = [], $ = 0; $ < S; $ += 4)
              N.push(O);
            var q = s.create(N, S);
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
            var A = this.cfg, w = A.iv, S = A.mode;
            this._xformMode == this._ENC_XFORM_MODE ? _ = S.createEncryptor : (_ = S.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == _ ? this._mode.init(this, w && w.words) : (this._mode = _.call(S, this, w && w.words), this._mode.__creator = _);
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
        }), y = a.format = {}, E = y.OpenSSL = {
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
            var A, w = _.ciphertext, S = _.salt;
            return S ? A = s.create([1398893684, 1701076831]).concat(S).concat(w) : A = w, A.toString(u);
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
            var A, w = u.parse(_), S = w.words;
            return S[0] == 1398893684 && S[1] == 1701076831 && (A = s.create(S.slice(2, 4)), S.splice(0, 4), w.sigBytes -= 16), g.create({ ciphertext: w, salt: A });
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
          encrypt: function(_, A, w, S) {
            S = this.cfg.extend(S);
            var O = _.createEncryptor(w, S), N = O.finalize(A), $ = O.cfg;
            return g.create({
              ciphertext: N,
              key: w,
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
          decrypt: function(_, A, w, S) {
            S = this.cfg.extend(S), A = this._parse(A, S.format);
            var O = _.createDecryptor(w, S).finalize(A.ciphertext);
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
        }), B = a.kdf = {}, F = B.OpenSSL = {
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
          execute: function(_, A, w, S, O) {
            if (S || (S = s.random(64 / 8)), O)
              var N = f.create({ keySize: A + w, hasher: O }).compute(_, S);
            else
              var N = f.create({ keySize: A + w }).compute(_, S);
            var $ = s.create(N.words.slice(A), w * 4);
            return N.sigBytes = A * 4, g.create({ key: N, iv: $, salt: S });
          }
        }, P = i.PasswordBasedCipher = C.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: C.cfg.extend({
            kdf: F
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
          encrypt: function(_, A, w, S) {
            S = this.cfg.extend(S);
            var O = S.kdf.execute(w, _.keySize, _.ivSize, S.salt, S.hasher);
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
          decrypt: function(_, A, w, S) {
            S = this.cfg.extend(S), A = this._parse(A, S.format);
            var O = S.kdf.execute(w, _.keySize, _.ivSize, A.salt, S.hasher);
            S.iv = O.iv;
            var N = C.decrypt.call(this, _, A, O.key, S);
            return N;
          }
        });
      }();
    });
  }(O0)), O0.exports;
}
var H0 = { exports: {} }, mr;
function os() {
  return mr || (mr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.mode.CFB = function() {
        var t = n.lib.BlockCipherMode.extend();
        t.Encryptor = t.extend({
          processBlock: function(i, o) {
            var s = this._cipher, c = s.blockSize;
            a.call(this, i, o, c, s), this._prevBlock = i.slice(o, o + c);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(i, o) {
            var s = this._cipher, c = s.blockSize, l = i.slice(o, o + c);
            a.call(this, i, o, c, s), this._prevBlock = l;
          }
        });
        function a(i, o, s, c) {
          var l, u = this._iv;
          u ? (l = u.slice(0), this._iv = void 0) : l = this._prevBlock, c.encryptBlock(l, 0);
          for (var m = 0; m < s; m++)
            i[o + m] ^= l[m];
        }
        return t;
      }(), n.mode.CFB;
    });
  }(H0)), H0.exports;
}
var N0 = { exports: {} }, gr;
function ss() {
  return gr || (gr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.mode.CTR = function() {
        var t = n.lib.BlockCipherMode.extend(), a = t.Encryptor = t.extend({
          processBlock: function(i, o) {
            var s = this._cipher, c = s.blockSize, l = this._iv, u = this._counter;
            l && (u = this._counter = l.slice(0), this._iv = void 0);
            var m = u.slice(0);
            s.encryptBlock(m, 0), u[c - 1] = u[c - 1] + 1 | 0;
            for (var f = 0; f < c; f++)
              i[o + f] ^= m[f];
          }
        });
        return t.Decryptor = a, t;
      }(), n.mode.CTR;
    });
  }(N0)), N0.exports;
}
var V0 = { exports: {} }, yr;
function ls() {
  return yr || (yr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      return n.mode.CTRGladman = function() {
        var t = n.lib.BlockCipherMode.extend();
        function a(s) {
          if ((s >> 24 & 255) === 255) {
            var c = s >> 16 & 255, l = s >> 8 & 255, u = s & 255;
            c === 255 ? (c = 0, l === 255 ? (l = 0, u === 255 ? u = 0 : ++u) : ++l) : ++c, s = 0, s += c << 16, s += l << 8, s += u;
          } else
            s += 1 << 24;
          return s;
        }
        function i(s) {
          return (s[0] = a(s[0])) === 0 && (s[1] = a(s[1])), s;
        }
        var o = t.Encryptor = t.extend({
          processBlock: function(s, c) {
            var l = this._cipher, u = l.blockSize, m = this._iv, f = this._counter;
            m && (f = this._counter = m.slice(0), this._iv = void 0), i(f);
            var h = f.slice(0);
            l.encryptBlock(h, 0);
            for (var d = 0; d < u; d++)
              s[c + d] ^= h[d];
          }
        });
        return t.Decryptor = o, t;
      }(), n.mode.CTRGladman;
    });
  }(V0)), V0.exports;
}
var q0 = { exports: {} }, br;
function cs() {
  return br || (br = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.mode.OFB = function() {
        var t = n.lib.BlockCipherMode.extend(), a = t.Encryptor = t.extend({
          processBlock: function(i, o) {
            var s = this._cipher, c = s.blockSize, l = this._iv, u = this._keystream;
            l && (u = this._keystream = l.slice(0), this._iv = void 0), s.encryptBlock(u, 0);
            for (var m = 0; m < c; m++)
              i[o + m] ^= u[m];
          }
        });
        return t.Decryptor = a, t;
      }(), n.mode.OFB;
    });
  }(q0)), q0.exports;
}
var W0 = { exports: {} }, _r;
function us() {
  return _r || (_r = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.mode.ECB = function() {
        var t = n.lib.BlockCipherMode.extend();
        return t.Encryptor = t.extend({
          processBlock: function(a, i) {
            this._cipher.encryptBlock(a, i);
          }
        }), t.Decryptor = t.extend({
          processBlock: function(a, i) {
            this._cipher.decryptBlock(a, i);
          }
        }), t;
      }(), n.mode.ECB;
    });
  }(W0)), W0.exports;
}
var Y0 = { exports: {} }, Cr;
function ds() {
  return Cr || (Cr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.pad.AnsiX923 = {
        pad: function(t, a) {
          var i = t.sigBytes, o = a * 4, s = o - i % o, c = i + s - 1;
          t.clamp(), t.words[c >>> 2] |= s << 24 - c % 4 * 8, t.sigBytes += s;
        },
        unpad: function(t) {
          var a = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= a;
        }
      }, n.pad.Ansix923;
    });
  }(Y0)), Y0.exports;
}
var K0 = { exports: {} }, Er;
function fs() {
  return Er || (Er = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.pad.Iso10126 = {
        pad: function(t, a) {
          var i = a * 4, o = i - t.sigBytes % i;
          t.concat(n.lib.WordArray.random(o - 1)).concat(n.lib.WordArray.create([o << 24], 1));
        },
        unpad: function(t) {
          var a = t.words[t.sigBytes - 1 >>> 2] & 255;
          t.sigBytes -= a;
        }
      }, n.pad.Iso10126;
    });
  }(K0)), K0.exports;
}
var U0 = { exports: {} }, Br;
function xs() {
  return Br || (Br = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.pad.Iso97971 = {
        pad: function(t, a) {
          t.concat(n.lib.WordArray.create([2147483648], 1)), n.pad.ZeroPadding.pad(t, a);
        },
        unpad: function(t) {
          n.pad.ZeroPadding.unpad(t), t.sigBytes--;
        }
      }, n.pad.Iso97971;
    });
  }(U0)), U0.exports;
}
var j0 = { exports: {} }, Dr;
function vs() {
  return Dr || (Dr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.pad.ZeroPadding = {
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
      }, n.pad.ZeroPadding;
    });
  }(j0)), j0.exports;
}
var G0 = { exports: {} }, Ar;
function ps() {
  return Ar || (Ar = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return n.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      }, n.pad.NoPadding;
    });
  }(G0)), G0.exports;
}
var X0 = { exports: {} }, Fr;
function hs() {
  return Fr || (Fr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), ce());
    })(j, function(n) {
      return function(t) {
        var a = n, i = a.lib, o = i.CipherParams, s = a.enc, c = s.Hex, l = a.format;
        l.Hex = {
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
      }(), n.format.Hex;
    });
  }(X0)), X0.exports;
}
var J0 = { exports: {} }, wr;
function ms() {
  return wr || (wr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.BlockCipher, o = t.algo, s = [], c = [], l = [], u = [], m = [], f = [], h = [], d = [], x = [], v = [];
        (function() {
          for (var g = [], y = 0; y < 256; y++)
            y < 128 ? g[y] = y << 1 : g[y] = y << 1 ^ 283;
          for (var E = 0, C = 0, y = 0; y < 256; y++) {
            var B = C ^ C << 1 ^ C << 2 ^ C << 3 ^ C << 4;
            B = B >>> 8 ^ B & 255 ^ 99, s[E] = B, c[B] = E;
            var F = g[E], P = g[F], _ = g[P], A = g[B] * 257 ^ B * 16843008;
            l[E] = A << 24 | A >>> 8, u[E] = A << 16 | A >>> 16, m[E] = A << 8 | A >>> 24, f[E] = A;
            var A = _ * 16843009 ^ P * 65537 ^ F * 257 ^ E * 16843008;
            h[B] = A << 24 | A >>> 8, d[B] = A << 16 | A >>> 16, x[B] = A << 8 | A >>> 24, v[B] = A, E ? (E = F ^ g[g[g[_ ^ F]]], C ^= g[g[C]]) : E = C = 1;
          }
        })();
        var b = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], p = o.AES = i.extend({
          _doReset: function() {
            var g;
            if (!(this._nRounds && this._keyPriorReset === this._key)) {
              for (var y = this._keyPriorReset = this._key, E = y.words, C = y.sigBytes / 4, B = this._nRounds = C + 6, F = (B + 1) * 4, P = this._keySchedule = [], _ = 0; _ < F; _++)
                _ < C ? P[_] = E[_] : (g = P[_ - 1], _ % C ? C > 6 && _ % C == 4 && (g = s[g >>> 24] << 24 | s[g >>> 16 & 255] << 16 | s[g >>> 8 & 255] << 8 | s[g & 255]) : (g = g << 8 | g >>> 24, g = s[g >>> 24] << 24 | s[g >>> 16 & 255] << 16 | s[g >>> 8 & 255] << 8 | s[g & 255], g ^= b[_ / C | 0] << 24), P[_] = P[_ - C] ^ g);
              for (var A = this._invKeySchedule = [], w = 0; w < F; w++) {
                var _ = F - w;
                if (w % 4)
                  var g = P[_];
                else
                  var g = P[_ - 4];
                w < 4 || _ <= 4 ? A[w] = g : A[w] = h[s[g >>> 24]] ^ d[s[g >>> 16 & 255]] ^ x[s[g >>> 8 & 255]] ^ v[s[g & 255]];
              }
            }
          },
          encryptBlock: function(g, y) {
            this._doCryptBlock(g, y, this._keySchedule, l, u, m, f, s);
          },
          decryptBlock: function(g, y) {
            var E = g[y + 1];
            g[y + 1] = g[y + 3], g[y + 3] = E, this._doCryptBlock(g, y, this._invKeySchedule, h, d, x, v, c);
            var E = g[y + 1];
            g[y + 1] = g[y + 3], g[y + 3] = E;
          },
          _doCryptBlock: function(g, y, E, C, B, F, P, _) {
            for (var A = this._nRounds, w = g[y] ^ E[0], S = g[y + 1] ^ E[1], O = g[y + 2] ^ E[2], N = g[y + 3] ^ E[3], $ = 4, q = 1; q < A; q++) {
              var W = C[w >>> 24] ^ B[S >>> 16 & 255] ^ F[O >>> 8 & 255] ^ P[N & 255] ^ E[$++], J = C[S >>> 24] ^ B[O >>> 16 & 255] ^ F[N >>> 8 & 255] ^ P[w & 255] ^ E[$++], G = C[O >>> 24] ^ B[N >>> 16 & 255] ^ F[w >>> 8 & 255] ^ P[S & 255] ^ E[$++], k = C[N >>> 24] ^ B[w >>> 16 & 255] ^ F[S >>> 8 & 255] ^ P[O & 255] ^ E[$++];
              w = W, S = J, O = G, N = k;
            }
            var W = (_[w >>> 24] << 24 | _[S >>> 16 & 255] << 16 | _[O >>> 8 & 255] << 8 | _[N & 255]) ^ E[$++], J = (_[S >>> 24] << 24 | _[O >>> 16 & 255] << 16 | _[N >>> 8 & 255] << 8 | _[w & 255]) ^ E[$++], G = (_[O >>> 24] << 24 | _[N >>> 16 & 255] << 16 | _[w >>> 8 & 255] << 8 | _[S & 255]) ^ E[$++], k = (_[N >>> 24] << 24 | _[w >>> 16 & 255] << 16 | _[S >>> 8 & 255] << 8 | _[O & 255]) ^ E[$++];
            g[y] = W, g[y + 1] = J, g[y + 2] = G, g[y + 3] = k;
          },
          keySize: 256 / 32
        });
        t.AES = i._createHelper(p);
      }(), n.AES;
    });
  }(J0)), J0.exports;
}
var Z0 = { exports: {} }, Sr;
function gs() {
  return Sr || (Sr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.WordArray, o = a.BlockCipher, s = t.algo, c = [
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
        ], l = [
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
        ], h = s.DES = o.extend({
          _doReset: function() {
            for (var b = this._key, p = b.words, g = [], y = 0; y < 56; y++) {
              var E = c[y] - 1;
              g[y] = p[E >>> 5] >>> 31 - E % 32 & 1;
            }
            for (var C = this._subKeys = [], B = 0; B < 16; B++) {
              for (var F = C[B] = [], P = u[B], y = 0; y < 24; y++)
                F[y / 6 | 0] |= g[(l[y] - 1 + P) % 28] << 31 - y % 6, F[4 + (y / 6 | 0)] |= g[28 + (l[y + 24] - 1 + P) % 28] << 31 - y % 6;
              F[0] = F[0] << 1 | F[0] >>> 31;
              for (var y = 1; y < 7; y++)
                F[y] = F[y] >>> (y - 1) * 4 + 3;
              F[7] = F[7] << 5 | F[7] >>> 27;
            }
            for (var _ = this._invSubKeys = [], y = 0; y < 16; y++)
              _[y] = C[15 - y];
          },
          encryptBlock: function(b, p) {
            this._doCryptBlock(b, p, this._subKeys);
          },
          decryptBlock: function(b, p) {
            this._doCryptBlock(b, p, this._invSubKeys);
          },
          _doCryptBlock: function(b, p, g) {
            this._lBlock = b[p], this._rBlock = b[p + 1], d.call(this, 4, 252645135), d.call(this, 16, 65535), x.call(this, 2, 858993459), x.call(this, 8, 16711935), d.call(this, 1, 1431655765);
            for (var y = 0; y < 16; y++) {
              for (var E = g[y], C = this._lBlock, B = this._rBlock, F = 0, P = 0; P < 8; P++)
                F |= m[P][((B ^ E[P]) & f[P]) >>> 0];
              this._lBlock = B, this._rBlock = C ^ F;
            }
            var _ = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = _, d.call(this, 1, 1431655765), x.call(this, 8, 16711935), x.call(this, 2, 858993459), d.call(this, 16, 65535), d.call(this, 4, 252645135), b[p] = this._lBlock, b[p + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function d(b, p) {
          var g = (this._lBlock >>> b ^ this._rBlock) & p;
          this._rBlock ^= g, this._lBlock ^= g << b;
        }
        function x(b, p) {
          var g = (this._rBlock >>> b ^ this._lBlock) & p;
          this._lBlock ^= g, this._rBlock ^= g << b;
        }
        t.DES = o._createHelper(h);
        var v = s.TripleDES = o.extend({
          _doReset: function() {
            var b = this._key, p = b.words;
            if (p.length !== 2 && p.length !== 4 && p.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var g = p.slice(0, 2), y = p.length < 4 ? p.slice(0, 2) : p.slice(2, 4), E = p.length < 6 ? p.slice(0, 2) : p.slice(4, 6);
            this._des1 = h.createEncryptor(i.create(g)), this._des2 = h.createEncryptor(i.create(y)), this._des3 = h.createEncryptor(i.create(E));
          },
          encryptBlock: function(b, p) {
            this._des1.encryptBlock(b, p), this._des2.decryptBlock(b, p), this._des3.encryptBlock(b, p);
          },
          decryptBlock: function(b, p) {
            this._des3.decryptBlock(b, p), this._des2.encryptBlock(b, p), this._des1.decryptBlock(b, p);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        t.TripleDES = o._createHelper(v);
      }(), n.TripleDES;
    });
  }(Z0)), Z0.exports;
}
var Q0 = { exports: {} }, kr;
function ys() {
  return kr || (kr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.StreamCipher, o = t.algo, s = o.RC4 = i.extend({
          _doReset: function() {
            for (var u = this._key, m = u.words, f = u.sigBytes, h = this._S = [], d = 0; d < 256; d++)
              h[d] = d;
            for (var d = 0, x = 0; d < 256; d++) {
              var v = d % f, b = m[v >>> 2] >>> 24 - v % 4 * 8 & 255;
              x = (x + h[d] + b) % 256;
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
        t.RC4 = i._createHelper(s);
        var l = o.RC4Drop = s.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: s.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            s._doReset.call(this);
            for (var u = this.cfg.drop; u > 0; u--)
              c.call(this);
          }
        });
        t.RC4Drop = i._createHelper(l);
      }(), n.RC4;
    });
  }(Q0)), Q0.exports;
}
var en = { exports: {} }, Tr;
function bs() {
  return Tr || (Tr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.StreamCipher, o = t.algo, s = [], c = [], l = [], u = o.Rabbit = i.extend({
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
              var b = h.words, p = b[0], g = b[1], y = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, E = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, C = y >>> 16 | E & 4294901760, B = E << 16 | y & 65535;
              v[0] ^= y, v[1] ^= C, v[2] ^= E, v[3] ^= B, v[4] ^= y, v[5] ^= C, v[6] ^= E, v[7] ^= B;
              for (var d = 0; d < 4; d++)
                m.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var d = this._X;
            m.call(this), s[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, s[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, s[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, s[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var x = 0; x < 4; x++)
              s[x] = (s[x] << 8 | s[x] >>> 24) & 16711935 | (s[x] << 24 | s[x] >>> 8) & 4278255360, f[h + x] ^= s[x];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function m() {
          for (var f = this._X, h = this._C, d = 0; d < 8; d++)
            c[d] = h[d];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var x = f[d] + h[d], v = x & 65535, b = x >>> 16, p = ((v * v >>> 17) + v * b >>> 15) + b * b, g = ((x & 4294901760) * x | 0) + ((x & 65535) * x | 0);
            l[d] = p ^ g;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        t.Rabbit = i._createHelper(u);
      }(), n.Rabbit;
    });
  }(en)), en.exports;
}
var tn = { exports: {} }, Ir;
function _s() {
  return Ir || (Ir = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.StreamCipher, o = t.algo, s = [], c = [], l = [], u = o.RabbitLegacy = i.extend({
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
              var b = h.words, p = b[0], g = b[1], y = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360, E = (g << 8 | g >>> 24) & 16711935 | (g << 24 | g >>> 8) & 4278255360, C = y >>> 16 | E & 4294901760, B = E << 16 | y & 65535;
              x[0] ^= y, x[1] ^= C, x[2] ^= E, x[3] ^= B, x[4] ^= y, x[5] ^= C, x[6] ^= E, x[7] ^= B;
              for (var v = 0; v < 4; v++)
                m.call(this);
            }
          },
          _doProcessBlock: function(f, h) {
            var d = this._X;
            m.call(this), s[0] = d[0] ^ d[5] >>> 16 ^ d[3] << 16, s[1] = d[2] ^ d[7] >>> 16 ^ d[5] << 16, s[2] = d[4] ^ d[1] >>> 16 ^ d[7] << 16, s[3] = d[6] ^ d[3] >>> 16 ^ d[1] << 16;
            for (var x = 0; x < 4; x++)
              s[x] = (s[x] << 8 | s[x] >>> 24) & 16711935 | (s[x] << 24 | s[x] >>> 8) & 4278255360, f[h + x] ^= s[x];
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function m() {
          for (var f = this._X, h = this._C, d = 0; d < 8; d++)
            c[d] = h[d];
          h[0] = h[0] + 1295307597 + this._b | 0, h[1] = h[1] + 3545052371 + (h[0] >>> 0 < c[0] >>> 0 ? 1 : 0) | 0, h[2] = h[2] + 886263092 + (h[1] >>> 0 < c[1] >>> 0 ? 1 : 0) | 0, h[3] = h[3] + 1295307597 + (h[2] >>> 0 < c[2] >>> 0 ? 1 : 0) | 0, h[4] = h[4] + 3545052371 + (h[3] >>> 0 < c[3] >>> 0 ? 1 : 0) | 0, h[5] = h[5] + 886263092 + (h[4] >>> 0 < c[4] >>> 0 ? 1 : 0) | 0, h[6] = h[6] + 1295307597 + (h[5] >>> 0 < c[5] >>> 0 ? 1 : 0) | 0, h[7] = h[7] + 3545052371 + (h[6] >>> 0 < c[6] >>> 0 ? 1 : 0) | 0, this._b = h[7] >>> 0 < c[7] >>> 0 ? 1 : 0;
          for (var d = 0; d < 8; d++) {
            var x = f[d] + h[d], v = x & 65535, b = x >>> 16, p = ((v * v >>> 17) + v * b >>> 15) + b * b, g = ((x & 4294901760) * x | 0) + ((x & 65535) * x | 0);
            l[d] = p ^ g;
          }
          f[0] = l[0] + (l[7] << 16 | l[7] >>> 16) + (l[6] << 16 | l[6] >>> 16) | 0, f[1] = l[1] + (l[0] << 8 | l[0] >>> 24) + l[7] | 0, f[2] = l[2] + (l[1] << 16 | l[1] >>> 16) + (l[0] << 16 | l[0] >>> 16) | 0, f[3] = l[3] + (l[2] << 8 | l[2] >>> 24) + l[1] | 0, f[4] = l[4] + (l[3] << 16 | l[3] >>> 16) + (l[2] << 16 | l[2] >>> 16) | 0, f[5] = l[5] + (l[4] << 8 | l[4] >>> 24) + l[3] | 0, f[6] = l[6] + (l[5] << 16 | l[5] >>> 16) + (l[4] << 16 | l[4] >>> 16) | 0, f[7] = l[7] + (l[6] << 8 | l[6] >>> 24) + l[5] | 0;
        }
        t.RabbitLegacy = i._createHelper(u);
      }(), n.RabbitLegacy;
    });
  }(tn)), tn.exports;
}
var nn = { exports: {} }, Pr;
function Cs() {
  return Pr || (Pr = 1, function(e, r) {
    (function(n, t, a) {
      e.exports = t(X(), dt(), ft(), nt(), ce());
    })(j, function(n) {
      return function() {
        var t = n, a = t.lib, i = a.BlockCipher, o = t.algo;
        const s = 16, c = [
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
        ], l = [
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
        function m(v, b) {
          let p = b >> 24 & 255, g = b >> 16 & 255, y = b >> 8 & 255, E = b & 255, C = v.sbox[0][p] + v.sbox[1][g];
          return C = C ^ v.sbox[2][y], C = C + v.sbox[3][E], C;
        }
        function f(v, b, p) {
          let g = b, y = p, E;
          for (let C = 0; C < s; ++C)
            g = g ^ v.pbox[C], y = m(v, g) ^ y, E = g, g = y, y = E;
          return E = g, g = y, y = E, y = y ^ v.pbox[s], g = g ^ v.pbox[s + 1], { left: g, right: y };
        }
        function h(v, b, p) {
          let g = b, y = p, E;
          for (let C = s + 1; C > 1; --C)
            g = g ^ v.pbox[C], y = m(v, g) ^ y, E = g, g = y, y = E;
          return E = g, g = y, y = E, y = y ^ v.pbox[1], g = g ^ v.pbox[0], { left: g, right: y };
        }
        function d(v, b, p) {
          for (let B = 0; B < 4; B++) {
            v.sbox[B] = [];
            for (let F = 0; F < 256; F++)
              v.sbox[B][F] = l[B][F];
          }
          let g = 0;
          for (let B = 0; B < s + 2; B++)
            v.pbox[B] = c[B] ^ b[g], g++, g >= p && (g = 0);
          let y = 0, E = 0, C = 0;
          for (let B = 0; B < s + 2; B += 2)
            C = f(v, y, E), y = C.left, E = C.right, v.pbox[B] = y, v.pbox[B + 1] = E;
          for (let B = 0; B < 4; B++)
            for (let F = 0; F < 256; F += 2)
              C = f(v, y, E), y = C.left, E = C.right, v.sbox[B][F] = y, v.sbox[B][F + 1] = E;
          return !0;
        }
        var x = o.Blowfish = i.extend({
          _doReset: function() {
            if (this._keyPriorReset !== this._key) {
              var v = this._keyPriorReset = this._key, b = v.words, p = v.sigBytes / 4;
              d(u, b, p);
            }
          },
          encryptBlock: function(v, b) {
            var p = f(u, v[b], v[b + 1]);
            v[b] = p.left, v[b + 1] = p.right;
          },
          decryptBlock: function(v, b) {
            var p = h(u, v[b], v[b + 1]);
            v[b] = p.left, v[b + 1] = p.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        t.Blowfish = i._createHelper(x);
      }(), n.Blowfish;
    });
  }(nn)), nn.exports;
}
(function(e, r) {
  (function(n, t, a) {
    e.exports = t(X(), p0(), Zo(), Qo(), dt(), es(), ft(), Ra(), Dn(), ts(), za(), ns(), rs(), as(), An(), is(), nt(), ce(), os(), ss(), ls(), cs(), us(), ds(), fs(), xs(), vs(), ps(), hs(), ms(), gs(), ys(), bs(), _s(), Cs());
  })(j, function(n) {
    return n;
  });
})(Ma);
var Es = Ma.exports;
const _e = /* @__PURE__ */ Ko(Es);
function Bs(e, r) {
  e = e.toString();
  var n = _e.enc.Utf8.parse(r), t = _e.enc.Utf8.parse(r);
  return _e.DES.encrypt(
    e,
    n,
    {
      iv: t,
      mode: _e.mode.CBC,
      padding: _e.pad.Pkcs7
    }
  ).ciphertext.toString();
}
function Ds(e, r) {
  var n = _e.enc.Utf8.parse(r), t = _e.enc.Utf8.parse(r), a = _e.DES.decrypt({
    ciphertext: _e.enc.Hex.parse(e)
  }, n, {
    iv: t,
    mode: _e.mode.CBC,
    padding: _e.pad.Pkcs7
  });
  return a.toString(_e.enc.Utf8);
}
function As(e) {
  return _e.SHA256(e).toString();
}
function Fs(e) {
  return _e.MD5(e).toString();
}
const et = {
  setDES: Bs,
  getDES: Ds,
  setSha256: As,
  setMD5: Fs
}, i0 = "LJS_TIME_KEY_20231227";
function ws(e) {
  return JSON.parse(sessionStorage.getItem(e));
}
function Ss(e, r) {
  sessionStorage.setItem(e, JSON.stringify(r));
}
function ks(e) {
  sessionStorage.removeItem(e);
}
function Ts() {
  sessionStorage.clear();
}
function Is(e) {
  const r = JSON.parse(localStorage.getItem(e));
  return r === null ? null : r.time && (r.startTime = et.getDES(r.startTime, i0), r.time = et.getDES(r.time, i0), (/* @__PURE__ */ new Date()).getTime() - r.startTime > r.time) ? (La(e), null) : r.value;
}
function Ps(e, r, n = 0) {
  const t = {
    value: r
  };
  n > 0 && (t.startTime = et.setDES((/* @__PURE__ */ new Date()).getTime(), i0), t.time = et.setDES(n, i0)), localStorage.setItem(e, JSON.stringify(t));
}
function La(e) {
  localStorage.removeItem(e);
}
function Ms() {
  localStorage.clear();
}
function Rs(e, r = () => {
}) {
  e.commit("SET_token", null), e.commit("SET_userinfo", null), e.commit("SET_apiShake", []), e.commit("SET_permissions", []), e.commit("SET_roles", []), e.commit("SET_routerList", []), e.commit("SET_menuList", []), e.commit("SET_menuOpenList", []), e.commit("SET_menuNowOpen", null), e.commit("SET_menuShrink", !1), r();
}
const $a = {
  getSS: ws,
  setSS: Ss,
  delSS: ks,
  clearSS: Ts,
  getLS: Is,
  setLS: Ps,
  delLS: La,
  clearLS: Ms,
  clearVuex: Rs
};
function zs(e) {
  if (!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(e))
    return;
  let n = e.toLowerCase().replace(/\#/g, ""), t = n.length;
  if (t == 3) {
    let o = "";
    for (var a = 0; a < t; a++)
      o += n.slice(a, a + 1).concat(n.slice(a, a + 1));
    n = o;
  }
  let i = [];
  for (let o = 0; o < 6; o = o + 2) {
    let s = n.slice(o, o + 2);
    i.push(parseInt("0x" + s));
  }
  return i.join(",");
}
function Ls(e) {
  if (!/^(rgb|RGB)/.test(e))
    return;
  var n = e.slice(4, e.length - 1).split(",");
  let t = "#";
  for (var a = 0; a < n.length; a++) {
    var i = Number(n[a]).toString(16);
    i == "0" && (i = i + "0"), t += i;
  }
  return t;
}
function $s() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
}
const Oa = {
  c16ToRgb: zs,
  rgbToC16: Ls,
  random16Color: $s
};
function Os(e) {
  let r = location.search;
  if (r === "" || r.length === 0)
    return null;
  r = r.slice(1, r.length);
  const n = r.split("&"), t = n.length;
  for (let a = 0; a < t; a++) {
    const i = n[a].split("=");
    if (i[0] === e) {
      if (i.length === 2)
        return i[1];
      break;
    }
  }
  return null;
}
function Hs(e, r = !0) {
  if (ie.fieldCheck(e))
    return null;
  let n = e.lastIndexOf(".");
  return n === -1 ? null : (n = r ? n : n + 1, e.slice(n, e.length));
}
function Ns(e, r = !1) {
  if (ie.fieldCheck(e))
    return null;
  const n = e.lastIndexOf("/"), t = e.lastIndexOf("\\");
  let a = n > t ? n : t;
  return a !== -1 ? a++ : a = 0, r ? e.slice(a, e.length) : e.lastIndexOf(".") > -1 ? e.slice(a, e.lastIndexOf(".")) : e.slice(a, e.length);
}
function Ha(e) {
  var r = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  return r.test(e);
}
function Na(e) {
  var r = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/gm;
  return r.test(e);
}
function Vs(e) {
  return Na(e) || Ha(e);
}
const Va = {
  getUrlParameter: Os,
  getFileType: Hs,
  getFileName: Ns,
  isIPV4ValidIP: Ha,
  isIPV6ValidIP: Na,
  isIPValid: Vs
}, qs = 30 * 1;
function Ws() {
  const e = new Date(et.getDES(window.g.SRKJ_APP, "SRKJ_LJS_license_date_2023_07_27")).getTime();
  return ((/* @__PURE__ */ new Date()).getTime() - e) / 1e3 / 60 / 60 / 24 <= qs;
}
const qa = {
  licenseDateCheck: Ws
}, Wa = Symbol(), Qt = "el", Ys = "is-", st = (e, r, n, t, a) => {
  let i = `${e}-${r}`;
  return n && (i += `-${n}`), t && (i += `__${t}`), a && (i += `--${a}`), i;
}, Ya = Symbol("namespaceContextKey"), Ka = (e) => {
  const r = e || (He() ? Ee(Ya, ae(Qt)) : ae(Qt));
  return H(() => R(r) || Qt);
}, Ve = (e, r) => {
  const n = Ka(r);
  return {
    namespace: n,
    b: (x = "") => st(n.value, e, x, "", ""),
    e: (x) => x ? st(n.value, e, "", x, "") : "",
    m: (x) => x ? st(n.value, e, "", "", x) : "",
    be: (x, v) => x && v ? st(n.value, e, x, v, "") : "",
    em: (x, v) => x && v ? st(n.value, e, "", x, v) : "",
    bm: (x, v) => x && v ? st(n.value, e, x, "", v) : "",
    bem: (x, v, b) => x && v && b ? st(n.value, e, x, v, b) : "",
    is: (x, ...v) => {
      const b = v.length >= 1 ? v[0] : !0;
      return x && b ? `${Ys}${x}` : "";
    },
    cssVar: (x) => {
      const v = {};
      for (const b in x)
        x[b] && (v[`--${n.value}-${b}`] = x[b]);
      return v;
    },
    cssVarName: (x) => `--${n.value}-${x}`,
    cssVarBlock: (x) => {
      const v = {};
      for (const b in x)
        x[b] && (v[`--${n.value}-${e}-${b}`] = x[b]);
      return v;
    },
    cssVarBlockName: (x) => `--${n.value}-${e}-${x}`
  };
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Rt = () => {
}, Ks = Object.prototype.hasOwnProperty, o0 = (e, r) => Ks.call(e, r), bt = (e) => typeof e == "function", $e = (e) => typeof e == "string", _t = (e) => e !== null && typeof e == "object", Us = (e) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (n) => r[n] || (r[n] = e(n));
}, js = /-(\w)/g, Gs = Us((e) => e.replace(js, (r, n) => n ? n.toUpperCase() : ""));
var Xs = typeof global == "object" && global && global.Object === Object && global;
const Js = Xs;
var Zs = typeof self == "object" && self && self.Object === Object && self, Qs = Js || Zs || Function("return this")();
const Fn = Qs;
var el = Fn.Symbol;
const tt = el;
var Ua = Object.prototype, tl = Ua.hasOwnProperty, nl = Ua.toString, St = tt ? tt.toStringTag : void 0;
function rl(e) {
  var r = tl.call(e, St), n = e[St];
  try {
    e[St] = void 0;
    var t = !0;
  } catch {
  }
  var a = nl.call(e);
  return t && (r ? e[St] = n : delete e[St]), a;
}
var al = Object.prototype, il = al.toString;
function ol(e) {
  return il.call(e);
}
var sl = "[object Null]", ll = "[object Undefined]", Mr = tt ? tt.toStringTag : void 0;
function wn(e) {
  return e == null ? e === void 0 ? ll : sl : Mr && Mr in Object(e) ? rl(e) : ol(e);
}
function Sn(e) {
  return e != null && typeof e == "object";
}
var cl = "[object Symbol]";
function kn(e) {
  return typeof e == "symbol" || Sn(e) && wn(e) == cl;
}
function ul(e, r) {
  for (var n = -1, t = e == null ? 0 : e.length, a = Array(t); ++n < t; )
    a[n] = r(e[n], n, e);
  return a;
}
var dl = Array.isArray;
const Vt = dl;
var fl = 1 / 0, Rr = tt ? tt.prototype : void 0, zr = Rr ? Rr.toString : void 0;
function ja(e) {
  if (typeof e == "string")
    return e;
  if (Vt(e))
    return ul(e, ja) + "";
  if (kn(e))
    return zr ? zr.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -fl ? "-0" : r;
}
function s0(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
function xl(e) {
  return e;
}
var vl = "[object AsyncFunction]", pl = "[object Function]", hl = "[object GeneratorFunction]", ml = "[object Proxy]";
function gl(e) {
  if (!s0(e))
    return !1;
  var r = wn(e);
  return r == pl || r == hl || r == vl || r == ml;
}
var yl = Fn["__core-js_shared__"];
const rn = yl;
var Lr = function() {
  var e = /[^.]+$/.exec(rn && rn.keys && rn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function bl(e) {
  return !!Lr && Lr in e;
}
var _l = Function.prototype, Cl = _l.toString;
function El(e) {
  if (e != null) {
    try {
      return Cl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Bl = /[\\^$.*+?()[\]{}|]/g, Dl = /^\[object .+?Constructor\]$/, Al = Function.prototype, Fl = Object.prototype, wl = Al.toString, Sl = Fl.hasOwnProperty, kl = RegExp(
  "^" + wl.call(Sl).replace(Bl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Tl(e) {
  if (!s0(e) || bl(e))
    return !1;
  var r = gl(e) ? kl : Dl;
  return r.test(El(e));
}
function Il(e, r) {
  return e == null ? void 0 : e[r];
}
function Tn(e, r) {
  var n = Il(e, r);
  return Tl(n) ? n : void 0;
}
function Pl(e, r, n) {
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
var Ml = 800, Rl = 16, zl = Date.now;
function Ll(e) {
  var r = 0, n = 0;
  return function() {
    var t = zl(), a = Rl - (t - n);
    if (n = t, a > 0) {
      if (++r >= Ml)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
function $l(e) {
  return function() {
    return e;
  };
}
var Ol = function() {
  try {
    var e = Tn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const l0 = Ol;
var Hl = l0 ? function(e, r) {
  return l0(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: $l(r),
    writable: !0
  });
} : xl;
const Nl = Hl;
var Vl = Ll(Nl);
const ql = Vl;
var Wl = 9007199254740991, Yl = /^(?:0|[1-9]\d*)$/;
function Ga(e, r) {
  var n = typeof e;
  return r = r ?? Wl, !!r && (n == "number" || n != "symbol" && Yl.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function Kl(e, r, n) {
  r == "__proto__" && l0 ? l0(e, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[r] = n;
}
function Xa(e, r) {
  return e === r || e !== e && r !== r;
}
var Ul = Object.prototype, jl = Ul.hasOwnProperty;
function Gl(e, r, n) {
  var t = e[r];
  (!(jl.call(e, r) && Xa(t, n)) || n === void 0 && !(r in e)) && Kl(e, r, n);
}
var $r = Math.max;
function Xl(e, r, n) {
  return r = $r(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var t = arguments, a = -1, i = $r(t.length - r, 0), o = Array(i); ++a < i; )
      o[a] = t[r + a];
    a = -1;
    for (var s = Array(r + 1); ++a < r; )
      s[a] = t[a];
    return s[r] = n(o), Pl(e, this, s);
  };
}
var Jl = 9007199254740991;
function Zl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Jl;
}
var Ql = "[object Arguments]";
function Or(e) {
  return Sn(e) && wn(e) == Ql;
}
var Ja = Object.prototype, ec = Ja.hasOwnProperty, tc = Ja.propertyIsEnumerable, nc = Or(function() {
  return arguments;
}()) ? Or : function(e) {
  return Sn(e) && ec.call(e, "callee") && !tc.call(e, "callee");
};
const Za = nc;
var rc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ac = /^\w*$/;
function ic(e, r) {
  if (Vt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || kn(e) ? !0 : ac.test(e) || !rc.test(e) || r != null && e in Object(r);
}
var oc = Tn(Object, "create");
const Lt = oc;
function sc() {
  this.__data__ = Lt ? Lt(null) : {}, this.size = 0;
}
function lc(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var cc = "__lodash_hash_undefined__", uc = Object.prototype, dc = uc.hasOwnProperty;
function fc(e) {
  var r = this.__data__;
  if (Lt) {
    var n = r[e];
    return n === cc ? void 0 : n;
  }
  return dc.call(r, e) ? r[e] : void 0;
}
var xc = Object.prototype, vc = xc.hasOwnProperty;
function pc(e) {
  var r = this.__data__;
  return Lt ? r[e] !== void 0 : vc.call(r, e);
}
var hc = "__lodash_hash_undefined__";
function mc(e, r) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Lt && r === void 0 ? hc : r, this;
}
function ut(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var t = e[r];
    this.set(t[0], t[1]);
  }
}
ut.prototype.clear = sc;
ut.prototype.delete = lc;
ut.prototype.get = fc;
ut.prototype.has = pc;
ut.prototype.set = mc;
function gc() {
  this.__data__ = [], this.size = 0;
}
function h0(e, r) {
  for (var n = e.length; n--; )
    if (Xa(e[n][0], r))
      return n;
  return -1;
}
var yc = Array.prototype, bc = yc.splice;
function _c(e) {
  var r = this.__data__, n = h0(r, e);
  if (n < 0)
    return !1;
  var t = r.length - 1;
  return n == t ? r.pop() : bc.call(r, n, 1), --this.size, !0;
}
function Cc(e) {
  var r = this.__data__, n = h0(r, e);
  return n < 0 ? void 0 : r[n][1];
}
function Ec(e) {
  return h0(this.__data__, e) > -1;
}
function Bc(e, r) {
  var n = this.__data__, t = h0(n, e);
  return t < 0 ? (++this.size, n.push([e, r])) : n[t][1] = r, this;
}
function Ct(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var t = e[r];
    this.set(t[0], t[1]);
  }
}
Ct.prototype.clear = gc;
Ct.prototype.delete = _c;
Ct.prototype.get = Cc;
Ct.prototype.has = Ec;
Ct.prototype.set = Bc;
var Dc = Tn(Fn, "Map");
const Ac = Dc;
function Fc() {
  this.size = 0, this.__data__ = {
    hash: new ut(),
    map: new (Ac || Ct)(),
    string: new ut()
  };
}
function wc(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function m0(e, r) {
  var n = e.__data__;
  return wc(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
function Sc(e) {
  var r = m0(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function kc(e) {
  return m0(this, e).get(e);
}
function Tc(e) {
  return m0(this, e).has(e);
}
function Ic(e, r) {
  var n = m0(this, e), t = n.size;
  return n.set(e, r), this.size += n.size == t ? 0 : 1, this;
}
function xt(e) {
  var r = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++r < n; ) {
    var t = e[r];
    this.set(t[0], t[1]);
  }
}
xt.prototype.clear = Fc;
xt.prototype.delete = Sc;
xt.prototype.get = kc;
xt.prototype.has = Tc;
xt.prototype.set = Ic;
var Pc = "Expected a function";
function In(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Pc);
  var n = function() {
    var t = arguments, a = r ? r.apply(this, t) : t[0], i = n.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, t);
    return n.cache = i.set(a, o) || i, o;
  };
  return n.cache = new (In.Cache || xt)(), n;
}
In.Cache = xt;
var Mc = 500;
function Rc(e) {
  var r = In(e, function(t) {
    return n.size === Mc && n.clear(), t;
  }), n = r.cache;
  return r;
}
var zc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lc = /\\(\\)?/g, $c = Rc(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(zc, function(n, t, a, i) {
    r.push(a ? i.replace(Lc, "$1") : t || n);
  }), r;
});
const Oc = $c;
function Hc(e) {
  return e == null ? "" : ja(e);
}
function g0(e, r) {
  return Vt(e) ? e : ic(e, r) ? [e] : Oc(Hc(e));
}
var Nc = 1 / 0;
function Pn(e) {
  if (typeof e == "string" || kn(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -Nc ? "-0" : r;
}
function Qa(e, r) {
  r = g0(r, e);
  for (var n = 0, t = r.length; e != null && n < t; )
    e = e[Pn(r[n++])];
  return n && n == t ? e : void 0;
}
function Vc(e, r, n) {
  var t = e == null ? void 0 : Qa(e, r);
  return t === void 0 ? n : t;
}
function qc(e, r) {
  for (var n = -1, t = r.length, a = e.length; ++n < t; )
    e[a + n] = r[n];
  return e;
}
var Hr = tt ? tt.isConcatSpreadable : void 0;
function Wc(e) {
  return Vt(e) || Za(e) || !!(Hr && e && e[Hr]);
}
function ei(e, r, n, t, a) {
  var i = -1, o = e.length;
  for (n || (n = Wc), a || (a = []); ++i < o; ) {
    var s = e[i];
    r > 0 && n(s) ? r > 1 ? ei(s, r - 1, n, t, a) : qc(a, s) : t || (a[a.length] = s);
  }
  return a;
}
function Yc(e) {
  var r = e == null ? 0 : e.length;
  return r ? ei(e, 1) : [];
}
function Kc(e) {
  return ql(Xl(e, void 0, Yc), e + "");
}
function Uc(e, r) {
  return e != null && r in Object(e);
}
function jc(e, r, n) {
  r = g0(r, e);
  for (var t = -1, a = r.length, i = !1; ++t < a; ) {
    var o = Pn(r[t]);
    if (!(i = e != null && n(e, o)))
      break;
    e = e[o];
  }
  return i || ++t != a ? i : (a = e == null ? 0 : e.length, !!a && Zl(a) && Ga(o, a) && (Vt(e) || Za(e)));
}
function Gc(e, r) {
  return e != null && jc(e, r, Uc);
}
function ti(e) {
  for (var r = -1, n = e == null ? 0 : e.length, t = {}; ++r < n; ) {
    var a = e[r];
    t[a[0]] = a[1];
  }
  return t;
}
function ni(e) {
  return e == null;
}
function Xc(e, r, n, t) {
  if (!s0(e))
    return e;
  r = g0(r, e);
  for (var a = -1, i = r.length, o = i - 1, s = e; s != null && ++a < i; ) {
    var c = Pn(r[a]), l = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return e;
    if (a != o) {
      var u = s[c];
      l = t ? t(u, c, s) : void 0, l === void 0 && (l = s0(u) ? u : Ga(r[a + 1]) ? [] : {});
    }
    Gl(s, c, l), s = s[c];
  }
  return e;
}
function Jc(e, r, n) {
  for (var t = -1, a = r.length, i = {}; ++t < a; ) {
    var o = r[t], s = Qa(e, o);
    n(s, o) && Xc(i, g0(o, e), s);
  }
  return i;
}
function Zc(e, r) {
  return Jc(e, r, function(n, t) {
    return Gc(e, t);
  });
}
var Qc = Kc(function(e, r) {
  return e == null ? {} : Zc(e, r);
});
const eu = Qc, ri = (e) => e === void 0, c0 = (e) => typeof e == "number", $t = (e) => typeof Element > "u" ? !1 : e instanceof Element, tu = (e) => $e(e) ? !Number.isNaN(Number(e)) : !1;
var nu = Object.defineProperty, ru = Object.defineProperties, au = Object.getOwnPropertyDescriptors, Nr = Object.getOwnPropertySymbols, iu = Object.prototype.hasOwnProperty, ou = Object.prototype.propertyIsEnumerable, Vr = (e, r, n) => r in e ? nu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n, su = (e, r) => {
  for (var n in r || (r = {}))
    iu.call(r, n) && Vr(e, n, r[n]);
  if (Nr)
    for (var n of Nr(r))
      ou.call(r, n) && Vr(e, n, r[n]);
  return e;
}, lu = (e, r) => ru(e, au(r));
function cu(e, r) {
  var n;
  const t = Mt();
  return ya(() => {
    t.value = e();
  }, lu(su({}, r), {
    flush: (n = r == null ? void 0 : r.flush) != null ? n : "sync"
  })), oo(t);
}
var qr;
const ke = typeof window < "u", uu = (e) => typeof e == "string", du = () => {
};
ke && ((qr = window == null ? void 0 : window.navigator) != null && qr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ai(e) {
  return typeof e == "function" ? e() : R(e);
}
function fu(e) {
  return e;
}
function ii(e) {
  return so() ? (ba(e), !0) : !1;
}
function xu(e, r = !0) {
  He() ? qe(e) : r ? e() : Ce(e);
}
function oi(e) {
  var r;
  const n = ai(e);
  return (r = n == null ? void 0 : n.$el) != null ? r : n;
}
const si = ke ? window : void 0;
function kt(...e) {
  let r, n, t, a;
  if (uu(e[0]) || Array.isArray(e[0]) ? ([n, t, a] = e, r = si) : [r, n, t, a] = e, !r)
    return du;
  Array.isArray(n) || (n = [n]), Array.isArray(t) || (t = [t]);
  const i = [], o = () => {
    i.forEach((u) => u()), i.length = 0;
  }, s = (u, m, f, h) => (u.addEventListener(m, f, h), () => u.removeEventListener(m, f, h)), c = Be(() => [oi(r), ai(a)], ([u, m]) => {
    o(), u && i.push(...n.flatMap((f) => t.map((h) => s(u, f, h, m))));
  }, { immediate: !0, flush: "post" }), l = () => {
    c(), o();
  };
  return ii(l), l;
}
function vu(e, r = !1) {
  const n = ae(), t = () => n.value = !!e();
  return t(), xu(t, r), n;
}
const Wr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Yr = "__vueuse_ssr_handlers__";
Wr[Yr] = Wr[Yr] || {};
var Kr = Object.getOwnPropertySymbols, pu = Object.prototype.hasOwnProperty, hu = Object.prototype.propertyIsEnumerable, mu = (e, r) => {
  var n = {};
  for (var t in e)
    pu.call(e, t) && r.indexOf(t) < 0 && (n[t] = e[t]);
  if (e != null && Kr)
    for (var t of Kr(e))
      r.indexOf(t) < 0 && hu.call(e, t) && (n[t] = e[t]);
  return n;
};
function gu(e, r, n = {}) {
  const t = n, { window: a = si } = t, i = mu(t, ["window"]);
  let o;
  const s = vu(() => a && "ResizeObserver" in a), c = () => {
    o && (o.disconnect(), o = void 0);
  }, l = Be(() => oi(e), (m) => {
    c(), s.value && a && m && (o = new ResizeObserver(r), o.observe(m, i));
  }, { immediate: !0, flush: "post" }), u = () => {
    c(), l();
  };
  return ii(u), {
    isSupported: s,
    stop: u
  };
}
var Ur;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(Ur || (Ur = {}));
var yu = Object.defineProperty, jr = Object.getOwnPropertySymbols, bu = Object.prototype.hasOwnProperty, _u = Object.prototype.propertyIsEnumerable, Gr = (e, r, n) => r in e ? yu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n, Cu = (e, r) => {
  for (var n in r || (r = {}))
    bu.call(r, n) && Gr(e, n, r[n]);
  if (jr)
    for (var n of jr(r))
      _u.call(r, n) && Gr(e, n, r[n]);
  return e;
};
const Eu = {
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
Cu({
  linear: fu
}, Eu);
class li extends Error {
  constructor(r) {
    super(r), this.name = "ElementPlusError";
  }
}
function Bu(e, r) {
  throw new li(`[${e}] ${r}`);
}
function Oe(e, r) {
  if (process.env.NODE_ENV !== "production") {
    const n = $e(e) ? new li(`[${e}] ${r}`) : e;
  }
}
const Xr = {
  current: 0
}, Jr = ae(0), ci = 2e3, Zr = Symbol("elZIndexContextKey"), ui = Symbol("zIndexContextKey"), Du = (e) => {
  const r = He() ? Ee(Zr, Xr) : Xr, n = e || (He() ? Ee(ui, void 0) : void 0), t = H(() => {
    const o = R(n);
    return c0(o) ? o : ci;
  }), a = H(() => t.value + Jr.value), i = () => (r.current++, Jr.value = r.current, a.value);
  return !ke && !Ee(Zr) && Oe("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: t,
    currentZIndex: a,
    nextZIndex: i
  };
};
var Au = {
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
const Fu = (e) => (r, n) => wu(r, n, R(e)), wu = (e, r, n) => Vc(n, e, e).replace(/\{(\w+)\}/g, (t, a) => {
  var i;
  return `${(i = r == null ? void 0 : r[a]) != null ? i : `{${a}}`}`;
}), Su = (e) => {
  const r = H(() => R(e).name), n = _a(e) ? e : ae(e);
  return {
    lang: r,
    locale: n,
    t: Fu(e)
  };
}, di = Symbol("localeContextKey"), ku = (e) => {
  const r = e || Ee(di, ae());
  return Su(H(() => r.value || Au));
}, fi = "__epPropKey", Qe = (e) => e, Tu = (e) => _t(e) && !!e[fi], xi = (e, r) => {
  if (!_t(e) || Tu(e))
    return e;
  const { values: n, required: t, default: a, type: i, validator: o } = e, c = {
    type: i,
    required: !!t,
    validator: n || o ? (l) => {
      let u = !1, m = [];
      if (n && (m = Array.from(n), o0(e, "default") && m.push(a), u || (u = m.includes(l))), o && (u || (u = o(l))), !u && m.length > 0) {
        const f = [...new Set(m)].map((h) => JSON.stringify(h)).join(", ");
        lo(`Invalid prop: validation failed${r ? ` for prop "${r}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(l)}.`);
      }
      return u;
    } : void 0,
    [fi]: !0
  };
  return o0(e, "default") && (c.default = a), c;
}, Et = (e) => ti(Object.entries(e).map(([r, n]) => [
  r,
  xi(n, r)
])), vi = ["", "default", "small", "large"], pi = xi({
  type: String,
  values: vi,
  required: !1
}), hi = Symbol("size"), Iu = () => {
  const e = Ee(hi, {});
  return H(() => R(e.size) || "");
}, Pu = Symbol("emptyValuesContextKey");
Et({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => bt(e) ? !e() : !e
  }
});
const Qr = (e) => Object.keys(e), u0 = ae();
function Mn(e, r = void 0) {
  const n = He() ? Ee(Wa, u0) : u0;
  return e ? H(() => {
    var t, a;
    return (a = (t = n.value) == null ? void 0 : t[e]) != null ? a : r;
  }) : n;
}
function Mu(e, r) {
  const n = Mn(), t = Ve(e, H(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.namespace) || Qt;
  })), a = ku(H(() => {
    var s;
    return (s = n.value) == null ? void 0 : s.locale;
  })), i = Du(H(() => {
    var s;
    return ((s = n.value) == null ? void 0 : s.zIndex) || ci;
  })), o = H(() => {
    var s;
    return R(r) || ((s = n.value) == null ? void 0 : s.size) || "";
  });
  return Ru(H(() => R(n) || {})), {
    ns: t,
    locale: a,
    zIndex: i,
    size: o
  };
}
const Ru = (e, r, n = !1) => {
  var t;
  const a = !!He(), i = a ? Mn() : void 0, o = (t = r == null ? void 0 : r.provide) != null ? t : a ? bn : void 0;
  if (!o) {
    Oe("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const s = H(() => {
    const c = R(e);
    return i != null && i.value ? zu(i.value, c) : c;
  });
  return o(Wa, s), o(di, H(() => s.value.locale)), o(Ya, H(() => s.value.namespace)), o(ui, H(() => s.value.zIndex)), o(hi, {
    size: H(() => s.value.size || "")
  }), o(Pu, H(() => ({
    emptyValues: s.value.emptyValues,
    valueOnClear: s.value.valueOnClear
  }))), (n || !u0.value) && (u0.value = s.value), s;
}, zu = (e, r) => {
  const n = [.../* @__PURE__ */ new Set([...Qr(e), ...Qr(r)])], t = {};
  for (const a of n)
    t[a] = r[a] !== void 0 ? r[a] : e[a];
  return t;
}, xn = "update:modelValue", ea = "change", ta = "input";
var Bt = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of r)
    n[t] = a;
  return n;
};
const Lu = "utils/dom/style", mi = (e = "") => e.split(" ").filter((r) => !!r.trim()), na = (e, r) => {
  if (!e || !r)
    return !1;
  if (r.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(r);
}, $u = (e, r) => {
  !e || !r.trim() || e.classList.add(...mi(r));
}, Ou = (e, r) => {
  !e || !r.trim() || e.classList.remove(...mi(r));
}, Hu = (e, r) => {
  var n;
  if (!ke || !e || !r)
    return "";
  let t = Gs(r);
  t === "float" && (t = "cssFloat");
  try {
    const a = e.style[t];
    if (a)
      return a;
    const i = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return i ? i[t] : "";
  } catch {
    return e.style[t];
  }
};
function vn(e, r = "px") {
  if (!e)
    return "";
  if (c0(e) || tu(e))
    return `${e}${r}`;
  if ($e(e))
    return e;
  Oe(Lu, "binding value must be a string or number");
}
let Yt;
const Nu = (e) => {
  var r;
  if (!ke)
    return 0;
  if (Yt !== void 0)
    return Yt;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const t = n.offsetWidth;
  n.style.overflow = "scroll";
  const a = document.createElement("div");
  a.style.width = "100%", n.appendChild(a);
  const i = a.offsetWidth;
  return (r = n.parentNode) == null || r.removeChild(n), Yt = t - i, Yt;
}, Rn = (e, r) => {
  if (e.install = (n) => {
    for (const t of [e, ...Object.values(r ?? {})])
      n.component(t.name, t);
  }, r)
    for (const [n, t] of Object.entries(r))
      e[n] = t;
  return e;
}, Vu = (e) => (e.install = Rt, e), qu = Et({
  size: {
    type: Qe([Number, String])
  },
  color: {
    type: String
  }
}), Wu = se({
  name: "ElIcon",
  inheritAttrs: !1
}), Yu = /* @__PURE__ */ se({
  ...Wu,
  props: qu,
  setup(e) {
    const r = e, n = Ve("icon"), t = H(() => {
      const { size: a, color: i } = r;
      return !a && !i ? {} : {
        fontSize: ri(a) ? void 0 : vn(a),
        "--color": i
      };
    });
    return (a, i) => (L(), V("i", zt({
      class: R(n).b(),
      style: R(t)
    }, a.$attrs), [
      he(a.$slots, "default")
    ], 16));
  }
});
var Ku = /* @__PURE__ */ Bt(Yu, [["__file", "icon.vue"]]);
const Je = Rn(Ku);
/*! Element Plus Icons Vue v2.3.1 */
var Uu = /* @__PURE__ */ se({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (r, n) => (L(), V("svg", {
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
}), ju = Uu, Gu = /* @__PURE__ */ se({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(e) {
    return (r, n) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), gi = Gu, Xu = /* @__PURE__ */ se({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (r, n) => (L(), V("svg", {
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
}), yi = Xu, Ju = /* @__PURE__ */ se({
  name: "Close",
  __name: "close",
  setup(e) {
    return (r, n) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Zu = Ju, Qu = /* @__PURE__ */ se({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (r, n) => (L(), V("svg", {
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
}), ed = Qu, td = /* @__PURE__ */ se({
  name: "InfoFilled",
  __name: "info-filled",
  setup(e) {
    return (r, n) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), bi = td, nd = /* @__PURE__ */ se({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (r, n) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), d0 = nd, rd = /* @__PURE__ */ se({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(e) {
    return (r, n) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), _i = rd, ad = /* @__PURE__ */ se({
  name: "View",
  __name: "view",
  setup(e) {
    return (r, n) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), id = ad, od = /* @__PURE__ */ se({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(e) {
    return (r, n) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), Ci = od, sd = /* @__PURE__ */ se({
  name: "Warning",
  __name: "warning",
  setup(e) {
    return (r, n) => (L(), V("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      Y("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), ld = sd;
const f0 = Qe([
  String,
  Object,
  Function
]), cd = {
  Close: Zu,
  SuccessFilled: _i,
  InfoFilled: bi,
  WarningFilled: Ci,
  CircleCloseFilled: gi
}, ra = {
  success: _i,
  warning: Ci,
  error: gi,
  info: bi
}, ud = {
  validating: d0,
  success: ju,
  error: yi
}, dd = () => ke && /firefox/i.test(window.navigator.userAgent);
let be;
const fd = {
  height: "0",
  visibility: "hidden",
  overflow: dd() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, xd = [
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
function vd(e) {
  const r = window.getComputedStyle(e), n = r.getPropertyValue("box-sizing"), t = Number.parseFloat(r.getPropertyValue("padding-bottom")) + Number.parseFloat(r.getPropertyValue("padding-top")), a = Number.parseFloat(r.getPropertyValue("border-bottom-width")) + Number.parseFloat(r.getPropertyValue("border-top-width"));
  return { contextStyle: xd.map((o) => [
    o,
    r.getPropertyValue(o)
  ]), paddingSize: t, borderSize: a, boxSizing: n };
}
function aa(e, r = 1, n) {
  var t;
  be || (be = document.createElement("textarea"), document.body.appendChild(be));
  const { paddingSize: a, borderSize: i, boxSizing: o, contextStyle: s } = vd(e);
  s.forEach(([m, f]) => be == null ? void 0 : be.style.setProperty(m, f)), Object.entries(fd).forEach(([m, f]) => be == null ? void 0 : be.style.setProperty(m, f, "important")), be.value = e.value || e.placeholder || "";
  let c = be.scrollHeight;
  const l = {};
  o === "border-box" ? c = c + i : o === "content-box" && (c = c - a), be.value = "";
  const u = be.scrollHeight - a;
  if (c0(r)) {
    let m = u * r;
    o === "border-box" && (m = m + a + i), c = Math.max(m, c), l.minHeight = `${m}px`;
  }
  if (c0(n)) {
    let m = u * n;
    o === "border-box" && (m = m + a + i), c = Math.min(m, c);
  }
  return l.height = `${c}px`, (t = be.parentNode) == null || t.removeChild(be), be = void 0, l;
}
const pd = (e) => e, hd = Et({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), md = (e) => eu(hd, e), gd = Et({
  id: {
    type: String,
    default: void 0
  },
  size: pi,
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
    default: () => pd({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...md(["ariaLabel"])
}), yd = {
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
}, bd = ["class", "style"], _d = /^on[A-Z]/, Cd = (e = {}) => {
  const { excludeListeners: r = !1, excludeKeys: n } = e, t = H(() => ((n == null ? void 0 : n.value) || []).concat(bd)), a = He();
  return a ? H(() => {
    var i;
    return ti(Object.entries((i = a.proxy) == null ? void 0 : i.$attrs).filter(([o]) => !t.value.includes(o) && !(r && _d.test(o))));
  }) : (Oe("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), H(() => ({})));
}, zn = Symbol("formContextKey"), Ei = Symbol("formItemContextKey"), pn = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Ed = Symbol("elIdInjection"), Bd = () => He() ? Ee(Ed, pn) : pn, hn = (e) => {
  const r = Bd();
  !ke && r === pn && Oe("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Ka();
  return cu(() => R(e) || `${n.value}-id-${r.prefix}-${r.current++}`);
}, Bi = () => {
  const e = Ee(zn, void 0), r = Ee(Ei, void 0);
  return {
    form: e,
    formItem: r
  };
}, Dd = (e, {
  formItemContext: r,
  disableIdGeneration: n,
  disableIdManagement: t
}) => {
  n || (n = ae(!1)), t || (t = ae(!1));
  const a = ae();
  let i;
  const o = H(() => {
    var s;
    return !!(!(e.label || e.ariaLabel) && r && r.inputIds && ((s = r.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return qe(() => {
    i = Be([n0(e, "id"), n], ([s, c]) => {
      const l = s ?? (c ? void 0 : hn().value);
      l !== a.value && (r != null && r.removeInputId && (a.value && r.removeInputId(a.value), !(t != null && t.value) && !c && l && r.addInputId(l)), a.value = l);
    }, { immediate: !0 });
  }), co(() => {
    i && i(), r != null && r.removeInputId && a.value && r.removeInputId(a.value);
  }), {
    isLabeledByFormItem: o,
    inputId: a
  };
}, Di = (e) => {
  const r = He();
  return H(() => {
    var n, t;
    return (t = (n = r == null ? void 0 : r.proxy) == null ? void 0 : n.$props) == null ? void 0 : t[e];
  });
}, Ai = (e, r = {}) => {
  const n = ae(void 0), t = r.prop ? n : Di("size"), a = r.global ? n : Iu(), i = r.form ? { size: void 0 } : Ee(zn, void 0), o = r.formItem ? { size: void 0 } : Ee(Ei, void 0);
  return H(() => t.value || R(e) || (o == null ? void 0 : o.size) || (i == null ? void 0 : i.size) || a.value || "");
}, Ln = (e) => {
  const r = Di("disabled"), n = Ee(zn, void 0);
  return H(() => r.value || R(e) || (n == null ? void 0 : n.disabled) || !1);
};
function Ad(e, {
  beforeFocus: r,
  afterFocus: n,
  beforeBlur: t,
  afterBlur: a
} = {}) {
  const i = He(), { emit: o } = i, s = Mt(), c = ae(!1), l = (f) => {
    bt(r) && r(f) || c.value || (c.value = !0, o("focus", f), n == null || n());
  }, u = (f) => {
    var h;
    bt(t) && t(f) || f.relatedTarget && ((h = s.value) != null && h.contains(f.relatedTarget)) || (c.value = !1, o("blur", f), a == null || a());
  }, m = () => {
    var f, h;
    (f = s.value) != null && f.contains(document.activeElement) && s.value !== document.activeElement || (h = e.value) == null || h.focus();
  };
  return Be(s, (f) => {
    f && f.setAttribute("tabindex", "-1");
  }), kt(s, "focus", l, !0), kt(s, "blur", u, !0), kt(s, "click", m, !0), process.env.NODE_ENV === "test" && qe(() => {
    const f = $t(e.value) ? e.value : document.querySelector("input,textarea");
    f && (kt(f, "focus", l, !0), kt(f, "blur", u, !0));
  }), {
    isFocused: c,
    wrapperRef: s,
    handleFocus: l,
    handleBlur: u
  };
}
const Fd = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
function wd({
  afterComposition: e,
  emit: r
}) {
  const n = ae(!1), t = (s) => {
    r == null || r("compositionstart", s), n.value = !0;
  }, a = (s) => {
    var c;
    r == null || r("compositionupdate", s);
    const l = (c = s.target) == null ? void 0 : c.value, u = l[l.length - 1] || "";
    n.value = !Fd(u);
  }, i = (s) => {
    r == null || r("compositionend", s), n.value && (n.value = !1, Ce(() => e(s)));
  };
  return {
    isComposing: n,
    handleComposition: (s) => {
      s.type === "compositionend" ? i(s) : a(s);
    },
    handleCompositionStart: t,
    handleCompositionUpdate: a,
    handleCompositionEnd: i
  };
}
function Sd(e) {
  let r;
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: a, selectionEnd: i, value: o } = e.value;
    if (a == null || i == null)
      return;
    const s = o.slice(0, Math.max(0, a)), c = o.slice(Math.max(0, i));
    r = {
      selectionStart: a,
      selectionEnd: i,
      value: o,
      beforeTxt: s,
      afterTxt: c
    };
  }
  function t() {
    if (e.value == null || r == null)
      return;
    const { value: a } = e.value, { beforeTxt: i, afterTxt: o, selectionStart: s } = r;
    if (i == null || o == null || s == null)
      return;
    let c = a.length;
    if (a.endsWith(o))
      c = a.length - o.length;
    else if (a.startsWith(i))
      c = i.length;
    else {
      const l = i[s - 1], u = a.indexOf(l, s - 1);
      u !== -1 && (c = u + 1);
    }
    e.value.setSelectionRange(c, c);
  }
  return [n, t];
}
const Fi = "ElInput", kd = se({
  name: Fi,
  inheritAttrs: !1
}), Td = /* @__PURE__ */ se({
  ...kd,
  props: gd,
  emits: yd,
  setup(e, { expose: r, emit: n }) {
    const t = e, a = uo(), i = Cd(), o = Ca(), s = H(() => [
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
      d.is("focus", F.value)
    ]), { form: l, formItem: u } = Bi(), { inputId: m } = Dd(t, {
      formItemContext: u
    }), f = Ai(), h = Ln(), d = Ve("input"), x = Ve("textarea"), v = Mt(), b = Mt(), p = ae(!1), g = ae(!1), y = ae(), E = Mt(t.inputStyle), C = H(() => v.value || b.value), { wrapperRef: B, isFocused: F, handleFocus: P, handleBlur: _ } = Ad(C, {
      beforeFocus() {
        return h.value;
      },
      afterBlur() {
        var z;
        t.validateEvent && ((z = u == null ? void 0 : u.validate) == null || z.call(u, "blur").catch((ee) => Oe(ee)));
      }
    }), A = H(() => {
      var z;
      return (z = l == null ? void 0 : l.statusIcon) != null ? z : !1;
    }), w = H(() => (u == null ? void 0 : u.validateState) || ""), S = H(() => w.value && ud[w.value]), O = H(() => g.value ? id : ed), N = H(() => [
      a.style
    ]), $ = H(() => [
      t.inputStyle,
      E.value,
      { resize: t.resize }
    ]), q = H(() => ni(t.modelValue) ? "" : String(t.modelValue)), W = H(() => t.clearable && !h.value && !t.readonly && !!q.value && (F.value || p.value)), J = H(() => t.showPassword && !h.value && !!q.value && (!!q.value || F.value)), G = H(() => t.showWordLimit && !!t.maxlength && (t.type === "text" || t.type === "textarea") && !h.value && !t.readonly && !t.showPassword), k = H(() => q.value.length), I = H(() => !!G.value && k.value > Number(t.maxlength)), M = H(() => !!o.suffix || !!t.suffixIcon || W.value || t.showPassword || G.value || !!w.value && A.value), [T, re] = Sd(v);
    gu(b, (z) => {
      if (U(), !G.value || t.resize !== "both")
        return;
      const ee = z[0], { width: De } = ee.contentRect;
      y.value = {
        right: `calc(100% - ${De + 15 + 6}px)`
      };
    });
    const Z = () => {
      const { type: z, autosize: ee } = t;
      if (!(!ke || z !== "textarea" || !b.value))
        if (ee) {
          const De = _t(ee) ? ee.minRows : void 0, Ke = _t(ee) ? ee.maxRows : void 0, qt = aa(b.value, De, Ke);
          E.value = {
            overflowY: "hidden",
            ...qt
          }, Ce(() => {
            b.value.offsetHeight, E.value = qt;
          });
        } else
          E.value = {
            minHeight: aa(b.value).minHeight
          };
    }, U = ((z) => {
      let ee = !1;
      return () => {
        var De;
        if (ee || !t.autosize)
          return;
        ((De = b.value) == null ? void 0 : De.offsetParent) === null || (z(), ee = !0);
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
        n(xn, ee), n(ta, ee), await Ce(), Te(), re();
      }
    }, vt = (z) => {
      let { value: ee } = z.target;
      t.formatter && t.parser && (ee = t.parser(ee)), n(ea, ee);
    }, {
      isComposing: Ye,
      handleCompositionStart: me,
      handleCompositionUpdate: fe,
      handleCompositionEnd: rt
    } = wd({ emit: n, afterComposition: Re }), at = () => {
      T(), g.value = !g.value, setTimeout(re);
    }, pt = () => {
      var z;
      return (z = C.value) == null ? void 0 : z.focus();
    }, it = () => {
      var z;
      return (z = C.value) == null ? void 0 : z.blur();
    }, At = (z) => {
      p.value = !1, n("mouseleave", z);
    }, ot = (z) => {
      p.value = !0, n("mouseenter", z);
    }, ge = (z) => {
      n("keydown", z);
    }, ye = () => {
      var z;
      (z = C.value) == null || z.select();
    }, Ie = () => {
      n(xn, ""), n(ea, ""), n("clear"), n(ta, "");
    };
    return Be(() => t.modelValue, () => {
      var z;
      Ce(() => Z()), t.validateEvent && ((z = u == null ? void 0 : u.validate) == null || z.call(u, "change").catch((ee) => Oe(ee)));
    }), Be(q, () => Te()), Be(() => t.type, async () => {
      await Ce(), Te(), Z();
    }), qe(() => {
      !t.formatter && t.parser && Oe(Fi, "If you set the parser, you also need to set the formatter."), Te(), Ce(Z);
    }), r({
      input: v,
      textarea: b,
      ref: C,
      textareaStyle: $,
      autosize: n0(t, "autosize"),
      isComposing: Ye,
      focus: pt,
      blur: it,
      select: ye,
      clear: Ie,
      resizeTextarea: Z
    }), (z, ee) => (L(), V("div", {
      class: K([
        R(s),
        {
          [R(d).bm("group", "append")]: z.$slots.append,
          [R(d).bm("group", "prepend")]: z.$slots.prepend
        }
      ]),
      style: ve(R(N)),
      onMouseenter: ot,
      onMouseleave: At
    }, [
      Q(" input "),
      z.type !== "textarea" ? (L(), V(Le, { key: 0 }, [
        Q(" prepend slot "),
        z.$slots.prepend ? (L(), V("div", {
          key: 0,
          class: K(R(d).be("group", "prepend"))
        }, [
          he(z.$slots, "prepend")
        ], 2)) : Q("v-if", !0),
        Y("div", {
          ref_key: "wrapperRef",
          ref: B,
          class: K(R(c))
        }, [
          Q(" prefix slot "),
          z.$slots.prefix || z.prefixIcon ? (L(), V("span", {
            key: 0,
            class: K(R(d).e("prefix"))
          }, [
            Y("span", {
              class: K(R(d).e("prefix-inner"))
            }, [
              he(z.$slots, "prefix"),
              z.prefixIcon ? (L(), ne(R(Je), {
                key: 0,
                class: K(R(d).e("icon"))
              }, {
                default: oe(() => [
                  (L(), ne(Se(z.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0)
            ], 2)
          ], 2)) : Q("v-if", !0),
          Y("input", zt({
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
            class: K(R(d).e("suffix"))
          }, [
            Y("span", {
              class: K(R(d).e("suffix-inner"))
            }, [
              !R(W) || !R(J) || !R(G) ? (L(), V(Le, { key: 0 }, [
                he(z.$slots, "suffix"),
                z.suffixIcon ? (L(), ne(R(Je), {
                  key: 0,
                  class: K(R(d).e("icon"))
                }, {
                  default: oe(() => [
                    (L(), ne(Se(z.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : Q("v-if", !0)
              ], 64)) : Q("v-if", !0),
              R(W) ? (L(), ne(R(Je), {
                key: 1,
                class: K([R(d).e("icon"), R(d).e("clear")]),
                onMousedown: It(R(Rt), ["prevent"]),
                onClick: Ie
              }, {
                default: oe(() => [
                  xe(R(yi))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : Q("v-if", !0),
              R(J) ? (L(), ne(R(Je), {
                key: 2,
                class: K([R(d).e("icon"), R(d).e("password")]),
                onClick: at
              }, {
                default: oe(() => [
                  (L(), ne(Se(R(O))))
                ]),
                _: 1
              }, 8, ["class"])) : Q("v-if", !0),
              R(G) ? (L(), V("span", {
                key: 3,
                class: K(R(d).e("count"))
              }, [
                Y("span", {
                  class: K(R(d).e("count-inner"))
                }, le(R(k)) + " / " + le(z.maxlength), 3)
              ], 2)) : Q("v-if", !0),
              R(w) && R(S) && R(A) ? (L(), ne(R(Je), {
                key: 4,
                class: K([
                  R(d).e("icon"),
                  R(d).e("validateIcon"),
                  R(d).is("loading", R(w) === "validating")
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
          class: K(R(d).be("group", "append"))
        }, [
          he(z.$slots, "append")
        ], 2)) : Q("v-if", !0)
      ], 64)) : (L(), V(Le, { key: 1 }, [
        Q(" textarea "),
        Y("textarea", zt({
          id: R(m),
          ref_key: "textarea",
          ref: b,
          class: [R(x).e("inner"), R(d).is("focus", R(F))]
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
          style: ve(y.value),
          class: K(R(d).e("count"))
        }, le(R(k)) + " / " + le(z.maxlength), 7)) : Q("v-if", !0)
      ], 64))
    ], 38));
  }
});
var Id = /* @__PURE__ */ Bt(Td, [["__file", "input.vue"]]);
const Pd = Rn(Id), Md = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', Rd = (e) => process.env.NODE_ENV === "test" ? !0 : getComputedStyle(e).position === "fixed" ? !1 : e.offsetParent !== null, ia = (e) => Array.from(e.querySelectorAll(Md)).filter((r) => wi(r) && Rd(r)), wi = (e) => {
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
}, an = "focus-trap.focus-after-trapped", on = "focus-trap.focus-after-released", zd = "focus-trap.focusout-prevented", oa = {
  cancelable: !0,
  bubbles: !1
}, Ld = {
  cancelable: !0,
  bubbles: !1
}, sa = "focusAfterTrapped", la = "focusAfterReleased", $d = Symbol("elFocusTrap"), $n = ae(), y0 = ae(0), On = ae(0);
let Kt = 0;
const Si = (e) => {
  const r = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (t) => {
      const a = t.tagName === "INPUT" && t.type === "hidden";
      return t.disabled || t.hidden || a ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 || t === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    r.push(n.currentNode);
  return r;
}, ca = (e, r) => {
  for (const n of e)
    if (!Od(n, r))
      return n;
}, Od = (e, r) => {
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
}, Hd = (e) => {
  const r = Si(e), n = ca(r, e), t = ca(r.reverse(), e);
  return [n, t];
}, Nd = (e) => e instanceof HTMLInputElement && "select" in e, Ge = (e, r) => {
  if (e && e.focus) {
    const n = document.activeElement;
    let t = !1;
    $t(e) && !wi(e) && !e.getAttribute("tabindex") && (e.setAttribute("tabindex", "-1"), t = !0), e.focus({ preventScroll: !0 }), On.value = window.performance.now(), e !== n && Nd(e) && r && e.select(), $t(e) && t && e.removeAttribute("tabindex");
  }
};
function ua(e, r) {
  const n = [...e], t = e.indexOf(r);
  return t !== -1 && n.splice(t, 1), n;
}
const Vd = () => {
  let e = [];
  return {
    push: (t) => {
      const a = e[0];
      a && t !== a && a.pause(), e = ua(e, t), e.unshift(t);
    },
    remove: (t) => {
      var a, i;
      e = ua(e, t), (i = (a = e[0]) == null ? void 0 : a.resume) == null || i.call(a);
    }
  };
}, qd = (e, r = !1) => {
  const n = document.activeElement;
  for (const t of e)
    if (Ge(t, r), document.activeElement !== n)
      return;
}, da = Vd(), Wd = () => y0.value > On.value, Ut = () => {
  $n.value = "pointer", y0.value = window.performance.now();
}, fa = () => {
  $n.value = "keyboard", y0.value = window.performance.now();
}, Yd = () => (qe(() => {
  Kt === 0 && (document.addEventListener("mousedown", Ut), document.addEventListener("touchstart", Ut), document.addEventListener("keydown", fa)), Kt++;
}), Ht(() => {
  Kt--, Kt <= 0 && (document.removeEventListener("mousedown", Ut), document.removeEventListener("touchstart", Ut), document.removeEventListener("keydown", fa));
}), {
  focusReason: $n,
  lastUserFocusTimestamp: y0,
  lastAutomatedFocusTimestamp: On
}), jt = (e) => new CustomEvent(zd, {
  ...Ld,
  detail: e
}), Hn = {
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
const xa = (e) => {
  e.code === Hn.esc && gt.forEach((r) => r(e));
}, Kd = (e) => {
  qe(() => {
    gt.length === 0 && document.addEventListener("keydown", xa), ke && gt.push(e);
  }), Ht(() => {
    gt = gt.filter((r) => r !== e), gt.length === 0 && ke && document.removeEventListener("keydown", xa);
  });
}, Ud = se({
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
    sa,
    la,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: r }) {
    const n = ae();
    let t, a;
    const { focusReason: i } = Yd();
    Kd((d) => {
      e.trapped && !o.paused && r("release-requested", d);
    });
    const o = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (d) => {
      if (!e.loop && !e.trapped || o.paused)
        return;
      const { code: x, altKey: v, ctrlKey: b, metaKey: p, currentTarget: g, shiftKey: y } = d, { loop: E } = e, C = x === Hn.tab && !v && !b && !p, B = document.activeElement;
      if (C && B) {
        const F = g, [P, _] = Hd(F);
        if (P && _) {
          if (!y && B === _) {
            const w = jt({
              focusReason: i.value
            });
            r("focusout-prevented", w), w.defaultPrevented || (d.preventDefault(), E && Ge(P, !0));
          } else if (y && [P, F].includes(B)) {
            const w = jt({
              focusReason: i.value
            });
            r("focusout-prevented", w), w.defaultPrevented || (d.preventDefault(), E && Ge(_, !0));
          }
        } else if (B === F) {
          const w = jt({
            focusReason: i.value
          });
          r("focusout-prevented", w), w.defaultPrevented || d.preventDefault();
        }
      }
    };
    bn($d, {
      focusTrapRef: n,
      onKeydown: s
    }), Be(() => e.focusTrapEl, (d) => {
      d && (n.value = d);
    }, { immediate: !0 }), Be([n], ([d], [x]) => {
      d && (d.addEventListener("keydown", s), d.addEventListener("focusin", u), d.addEventListener("focusout", m)), x && (x.removeEventListener("keydown", s), x.removeEventListener("focusin", u), x.removeEventListener("focusout", m));
    });
    const c = (d) => {
      r(sa, d);
    }, l = (d) => r(la, d), u = (d) => {
      const x = R(n);
      if (!x)
        return;
      const v = d.target, b = d.relatedTarget, p = v && x.contains(v);
      e.trapped || b && x.contains(b) || (t = b), p && r("focusin", d), !o.paused && e.trapped && (p ? a = v : Ge(a, !0));
    }, m = (d) => {
      const x = R(n);
      if (!(o.paused || !x))
        if (e.trapped) {
          const v = d.relatedTarget;
          !ni(v) && !x.contains(v) && setTimeout(() => {
            if (!o.paused && e.trapped) {
              const b = jt({
                focusReason: i.value
              });
              r("focusout-prevented", b), b.defaultPrevented || Ge(a, !0);
            }
          }, 0);
        } else {
          const v = d.target;
          v && x.contains(v) || r("focusout", d);
        }
    };
    async function f() {
      await Ce();
      const d = R(n);
      if (d) {
        da.push(o);
        const x = d.contains(document.activeElement) ? t : document.activeElement;
        if (t = x, !d.contains(x)) {
          const b = new Event(an, oa);
          d.addEventListener(an, c), d.dispatchEvent(b), b.defaultPrevented || Ce(() => {
            let p = e.focusStartEl;
            $e(p) || (Ge(p), document.activeElement !== p && (p = "first")), p === "first" && qd(Si(d), !0), (document.activeElement === x || p === "container") && Ge(d);
          });
        }
      }
    }
    function h() {
      const d = R(n);
      if (d) {
        d.removeEventListener(an, c);
        const x = new CustomEvent(on, {
          ...oa,
          detail: {
            focusReason: i.value
          }
        });
        d.addEventListener(on, l), d.dispatchEvent(x), !x.defaultPrevented && (i.value == "keyboard" || !Wd() || d.contains(document.activeElement)) && Ge(t ?? document.body), d.removeEventListener(on, l), da.remove(o);
      }
    }
    return qe(() => {
      e.trapped && f(), Be(() => e.trapped, (d) => {
        d ? f() : h();
      });
    }), Ht(() => {
      e.trapped && h(), n.value && (n.value.removeEventListener("keydown", s), n.value.removeEventListener("focusin", u), n.value.removeEventListener("focusout", m), n.value = void 0);
    }), {
      onKeydown: s
    };
  }
});
function jd(e, r, n, t, a, i) {
  return he(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Gd = /* @__PURE__ */ Bt(Ud, [["render", jd], ["__file", "focus-trap.vue"]]);
const ki = Symbol("buttonGroupContextKey"), Xd = ({ from: e, replacement: r, scope: n, version: t, ref: a, type: i = "API" }, o) => {
  Be(() => R(o), (s) => {
    s && Oe(n, `[${i}] ${e} is about to be deprecated in version ${t}, please use ${r} instead.
For more detail, please visit: ${a}
`);
  }, {
    immediate: !0
  });
}, Jd = (e, r) => {
  Xd({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, H(() => e.type === "text"));
  const n = Ee(ki, void 0), t = Mn("button"), { form: a } = Bi(), i = Ai(H(() => n == null ? void 0 : n.size)), o = Ln(), s = ae(), c = Ca(), l = H(() => e.type || (n == null ? void 0 : n.type) || ""), u = H(() => {
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
      if ((v == null ? void 0 : v.type) === fo) {
        const b = v.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(b.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: o,
    _size: i,
    _type: l,
    _ref: s,
    _props: m,
    shouldAddSpace: f,
    handleClick: (d) => {
      if (o.value || e.loading) {
        d.stopPropagation();
        return;
      }
      e.nativeType === "reset" && (a == null || a.resetFields()), r("click", d);
    }
  };
}, Zd = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Qd = ["button", "submit", "reset"], mn = Et({
  size: pi,
  disabled: Boolean,
  type: {
    type: String,
    values: Zd,
    default: ""
  },
  icon: {
    type: f0
  },
  nativeType: {
    type: String,
    values: Qd,
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
}), ef = {
  click: (e) => e instanceof MouseEvent
};
function de(e, r) {
  tf(e) && (e = "100%");
  var n = nf(e);
  return e = r === 360 ? e : Math.min(r, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * r), 10) / 100), Math.abs(e - r) < 1e-6 ? 1 : (r === 360 ? e = (e < 0 ? e % r + r : e % r) / parseFloat(String(r)) : e = e % r / parseFloat(String(r)), e);
}
function Gt(e) {
  return Math.min(1, Math.max(0, e));
}
function tf(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function nf(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ti(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Xt(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function lt(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function rf(e, r, n) {
  return {
    r: de(e, 255) * 255,
    g: de(r, 255) * 255,
    b: de(n, 255) * 255
  };
}
function va(e, r, n) {
  e = de(e, 255), r = de(r, 255), n = de(n, 255);
  var t = Math.max(e, r, n), a = Math.min(e, r, n), i = 0, o = 0, s = (t + a) / 2;
  if (t === a)
    o = 0, i = 0;
  else {
    var c = t - a;
    switch (o = s > 0.5 ? c / (2 - t - a) : c / (t + a), t) {
      case e:
        i = (r - n) / c + (r < n ? 6 : 0);
        break;
      case r:
        i = (n - e) / c + 2;
        break;
      case n:
        i = (e - r) / c + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: o, l: s };
}
function sn(e, r, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (r - e) * (6 * n) : n < 1 / 2 ? r : n < 2 / 3 ? e + (r - e) * (2 / 3 - n) * 6 : e;
}
function af(e, r, n) {
  var t, a, i;
  if (e = de(e, 360), r = de(r, 100), n = de(n, 100), r === 0)
    a = n, i = n, t = n;
  else {
    var o = n < 0.5 ? n * (1 + r) : n + r - n * r, s = 2 * n - o;
    t = sn(s, o, e + 1 / 3), a = sn(s, o, e), i = sn(s, o, e - 1 / 3);
  }
  return { r: t * 255, g: a * 255, b: i * 255 };
}
function pa(e, r, n) {
  e = de(e, 255), r = de(r, 255), n = de(n, 255);
  var t = Math.max(e, r, n), a = Math.min(e, r, n), i = 0, o = t, s = t - a, c = t === 0 ? 0 : s / t;
  if (t === a)
    i = 0;
  else {
    switch (t) {
      case e:
        i = (r - n) / s + (r < n ? 6 : 0);
        break;
      case r:
        i = (n - e) / s + 2;
        break;
      case n:
        i = (e - r) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, v: o };
}
function of(e, r, n) {
  e = de(e, 360) * 6, r = de(r, 100), n = de(n, 100);
  var t = Math.floor(e), a = e - t, i = n * (1 - r), o = n * (1 - a * r), s = n * (1 - (1 - a) * r), c = t % 6, l = [n, o, i, i, s, n][c], u = [s, n, n, o, i, i][c], m = [i, i, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: m * 255 };
}
function ha(e, r, n, t) {
  var a = [
    lt(Math.round(e).toString(16)),
    lt(Math.round(r).toString(16)),
    lt(Math.round(n).toString(16))
  ];
  return t && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function sf(e, r, n, t, a) {
  var i = [
    lt(Math.round(e).toString(16)),
    lt(Math.round(r).toString(16)),
    lt(Math.round(n).toString(16)),
    lt(lf(t))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function lf(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function ma(e) {
  return Fe(e) / 255;
}
function Fe(e) {
  return parseInt(e, 16);
}
function cf(e) {
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
function uf(e) {
  var r = { r: 0, g: 0, b: 0 }, n = 1, t = null, a = null, i = null, o = !1, s = !1;
  return typeof e == "string" && (e = xf(e)), typeof e == "object" && (Ne(e.r) && Ne(e.g) && Ne(e.b) ? (r = rf(e.r, e.g, e.b), o = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : Ne(e.h) && Ne(e.s) && Ne(e.v) ? (t = Xt(e.s), a = Xt(e.v), r = of(e.h, t, a), o = !0, s = "hsv") : Ne(e.h) && Ne(e.s) && Ne(e.l) && (t = Xt(e.s), i = Xt(e.l), r = af(e.h, t, i), o = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ti(n), {
    ok: o,
    format: e.format || s,
    r: Math.min(255, Math.max(r.r, 0)),
    g: Math.min(255, Math.max(r.g, 0)),
    b: Math.min(255, Math.max(r.b, 0)),
    a: n
  };
}
var df = "[-\\+]?\\d+%?", ff = "[-\\+]?\\d*\\.\\d+%?", Ze = "(?:".concat(ff, ")|(?:").concat(df, ")"), ln = "[\\s|\\(]+(".concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")\\s*\\)?"), cn = "[\\s|\\(]+(".concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")\\s*\\)?"), Pe = {
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
function xf(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var r = !1;
  if (gn[e])
    e = gn[e], r = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Pe.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Pe.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Pe.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Pe.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Pe.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Pe.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Pe.hex8.exec(e), n ? {
    r: Fe(n[1]),
    g: Fe(n[2]),
    b: Fe(n[3]),
    a: ma(n[4]),
    format: r ? "name" : "hex8"
  } : (n = Pe.hex6.exec(e), n ? {
    r: Fe(n[1]),
    g: Fe(n[2]),
    b: Fe(n[3]),
    format: r ? "name" : "hex"
  } : (n = Pe.hex4.exec(e), n ? {
    r: Fe(n[1] + n[1]),
    g: Fe(n[2] + n[2]),
    b: Fe(n[3] + n[3]),
    a: ma(n[4] + n[4]),
    format: r ? "name" : "hex8"
  } : (n = Pe.hex3.exec(e), n ? {
    r: Fe(n[1] + n[1]),
    g: Fe(n[2] + n[2]),
    b: Fe(n[3] + n[3]),
    format: r ? "name" : "hex"
  } : !1)))))))));
}
function Ne(e) {
  return !!Pe.CSS_UNIT.exec(String(e));
}
var vf = (
  /** @class */
  function() {
    function e(r, n) {
      r === void 0 && (r = ""), n === void 0 && (n = {});
      var t;
      if (r instanceof e)
        return r;
      typeof r == "number" && (r = cf(r)), this.originalInput = r;
      var a = uf(r);
      this.originalInput = r, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (t = n.format) !== null && t !== void 0 ? t : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var r = this.toRgb();
      return (r.r * 299 + r.g * 587 + r.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var r = this.toRgb(), n, t, a, i = r.r / 255, o = r.g / 255, s = r.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), o <= 0.03928 ? t = o / 12.92 : t = Math.pow((o + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * t + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(r) {
      return this.a = Ti(r), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var r = this.toHsl().s;
      return r === 0;
    }, e.prototype.toHsv = function() {
      var r = pa(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, v: r.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var r = pa(this.r, this.g, this.b), n = Math.round(r.h * 360), t = Math.round(r.s * 100), a = Math.round(r.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(t, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(t, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var r = va(this.r, this.g, this.b);
      return { h: r.h * 360, s: r.s, l: r.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var r = va(this.r, this.g, this.b), n = Math.round(r.h * 360), t = Math.round(r.s * 100), a = Math.round(r.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(t, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(t, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(r) {
      return r === void 0 && (r = !1), ha(this.r, this.g, this.b, r);
    }, e.prototype.toHexString = function(r) {
      return r === void 0 && (r = !1), "#" + this.toHex(r);
    }, e.prototype.toHex8 = function(r) {
      return r === void 0 && (r = !1), sf(this.r, this.g, this.b, this.a, r);
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
        return "".concat(Math.round(de(n, 255) * 100), "%");
      };
      return {
        r: r(this.r),
        g: r(this.g),
        b: r(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var r = function(n) {
        return Math.round(de(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%)") : "rgba(".concat(r(this.r), "%, ").concat(r(this.g), "%, ").concat(r(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var r = "#" + ha(this.r, this.g, this.b, !1), n = 0, t = Object.entries(gn); n < t.length; n++) {
        var a = t[n], i = a[0], o = a[1];
        if (r === o)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(r) {
      var n = !!r;
      r = r ?? this.format;
      var t = !1, a = this.a < 1 && this.a >= 0, i = !n && a && (r.startsWith("hex") || r === "name");
      return i ? r === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (r === "rgb" && (t = this.toRgbString()), r === "prgb" && (t = this.toPercentageRgbString()), (r === "hex" || r === "hex6") && (t = this.toHexString()), r === "hex3" && (t = this.toHexString(!0)), r === "hex4" && (t = this.toHex8String(!0)), r === "hex8" && (t = this.toHex8String()), r === "name" && (t = this.toName()), r === "hsl" && (t = this.toHslString()), r === "hsv" && (t = this.toHsvString()), t || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(r) {
      r === void 0 && (r = 10);
      var n = this.toHsl();
      return n.l += r / 100, n.l = Gt(n.l), new e(n);
    }, e.prototype.brighten = function(r) {
      r === void 0 && (r = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(r / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(r / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(r / 100)))), new e(n);
    }, e.prototype.darken = function(r) {
      r === void 0 && (r = 10);
      var n = this.toHsl();
      return n.l -= r / 100, n.l = Gt(n.l), new e(n);
    }, e.prototype.tint = function(r) {
      return r === void 0 && (r = 10), this.mix("white", r);
    }, e.prototype.shade = function(r) {
      return r === void 0 && (r = 10), this.mix("black", r);
    }, e.prototype.desaturate = function(r) {
      r === void 0 && (r = 10);
      var n = this.toHsl();
      return n.s -= r / 100, n.s = Gt(n.s), new e(n);
    }, e.prototype.saturate = function(r) {
      r === void 0 && (r = 10);
      var n = this.toHsl();
      return n.s += r / 100, n.s = Gt(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(r) {
      var n = this.toHsl(), t = (n.h + r) % 360;
      return n.h = t < 0 ? 360 + t : t, new e(n);
    }, e.prototype.mix = function(r, n) {
      n === void 0 && (n = 50);
      var t = this.toRgb(), a = new e(r).toRgb(), i = n / 100, o = {
        r: (a.r - t.r) * i + t.r,
        g: (a.g - t.g) * i + t.g,
        b: (a.b - t.b) * i + t.b,
        a: (a.a - t.a) * i + t.a
      };
      return new e(o);
    }, e.prototype.analogous = function(r, n) {
      r === void 0 && (r = 6), n === void 0 && (n = 30);
      var t = this.toHsl(), a = 360 / n, i = [this];
      for (t.h = (t.h - (a * r >> 1) + 720) % 360; --r; )
        t.h = (t.h + a) % 360, i.push(new e(t));
      return i;
    }, e.prototype.complement = function() {
      var r = this.toHsl();
      return r.h = (r.h + 180) % 360, new e(r);
    }, e.prototype.monochromatic = function(r) {
      r === void 0 && (r = 6);
      for (var n = this.toHsv(), t = n.h, a = n.s, i = n.v, o = [], s = 1 / r; r--; )
        o.push(new e({ h: t, s: a, v: i })), i = (i + s) % 1;
      return o;
    }, e.prototype.splitcomplement = function() {
      var r = this.toHsl(), n = r.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: r.s, l: r.l }),
        new e({ h: (n + 216) % 360, s: r.s, l: r.l })
      ];
    }, e.prototype.onBackground = function(r) {
      var n = this.toRgb(), t = new e(r).toRgb(), a = n.a + t.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + t.r * t.a * (1 - n.a)) / a,
        g: (n.g * n.a + t.g * t.a * (1 - n.a)) / a,
        b: (n.b * n.a + t.b * t.a * (1 - n.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(r) {
      for (var n = this.toHsl(), t = n.h, a = [this], i = 360 / r, o = 1; o < r; o++)
        a.push(new e({ h: (t + o * i) % 360, s: n.s, l: n.l }));
      return a;
    }, e.prototype.equals = function(r) {
      return this.toRgbString() === new e(r).toRgbString();
    }, e;
  }()
);
function je(e, r = 20) {
  return e.mix("#141414", r).toString();
}
function pf(e) {
  const r = Ln(), n = Ve("button");
  return H(() => {
    let t = {}, a = e.color;
    if (a) {
      const i = a.match(/var\((.*?)\)/);
      i && (a = window.getComputedStyle(window.document.documentElement).getPropertyValue(i[1]));
      const o = new vf(a), s = e.dark ? o.tint(20).toString() : je(o, 20);
      if (e.plain)
        t = n.cssVarBlock({
          "bg-color": e.dark ? je(o, 90) : o.tint(90).toString(),
          "text-color": a,
          "border-color": e.dark ? je(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": a,
          "hover-border-color": a,
          "active-bg-color": s,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": s
        }), r.value && (t[n.cssVarBlockName("disabled-bg-color")] = e.dark ? je(o, 90) : o.tint(90).toString(), t[n.cssVarBlockName("disabled-text-color")] = e.dark ? je(o, 50) : o.tint(50).toString(), t[n.cssVarBlockName("disabled-border-color")] = e.dark ? je(o, 80) : o.tint(80).toString());
      else {
        const c = e.dark ? je(o, 30) : o.tint(30).toString(), l = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (t = n.cssVarBlock({
          "bg-color": a,
          "text-color": l,
          "border-color": a,
          "hover-bg-color": c,
          "hover-text-color": l,
          "hover-border-color": c,
          "active-bg-color": s,
          "active-border-color": s
        }), r.value) {
          const u = e.dark ? je(o, 50) : o.tint(50).toString();
          t[n.cssVarBlockName("disabled-bg-color")] = u, t[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, t[n.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return t;
  });
}
const hf = se({
  name: "ElButton"
}), mf = /* @__PURE__ */ se({
  ...hf,
  props: mn,
  emits: ef,
  setup(e, { expose: r, emit: n }) {
    const t = e, a = pf(t), i = Ve("button"), { _ref: o, _size: s, _type: c, _disabled: l, _props: u, shouldAddSpace: m, handleClick: f } = Jd(t, n), h = H(() => [
      i.b(),
      i.m(c.value),
      i.m(s.value),
      i.is("disabled", l.value),
      i.is("loading", t.loading),
      i.is("plain", t.plain),
      i.is("round", t.round),
      i.is("circle", t.circle),
      i.is("text", t.text),
      i.is("link", t.link),
      i.is("has-bg", t.bg)
    ]);
    return r({
      ref: o,
      size: s,
      type: c,
      disabled: l,
      shouldAddSpace: m
    }), (d, x) => (L(), ne(Se(d.tag), zt({
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
            class: K(R(i).is("loading"))
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
          class: K({ [R(i).em("text", "expand")]: R(m) })
        }, [
          he(d.$slots, "default")
        ], 2)) : Q("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var gf = /* @__PURE__ */ Bt(mf, [["__file", "button.vue"]]);
const yf = {
  size: mn.size,
  type: mn.type
}, bf = se({
  name: "ElButtonGroup"
}), _f = /* @__PURE__ */ se({
  ...bf,
  props: yf,
  setup(e) {
    const r = e;
    bn(ki, Ea({
      size: n0(r, "size"),
      type: n0(r, "type")
    }));
    const n = Ve("button");
    return (t, a) => (L(), V("div", {
      class: K(R(n).b("group"))
    }, [
      he(t.$slots, "default")
    ], 2));
  }
});
var Ii = /* @__PURE__ */ Bt(_f, [["__file", "button-group.vue"]]);
const Cf = Rn(gf, {
  ButtonGroup: Ii
});
Vu(Ii);
var e0 = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(e0 || {});
const Pi = (e) => {
  if (!e)
    return { onClick: Rt, onMousedown: Rt, onMouseup: Rt };
  let r = !1, n = !1;
  return { onClick: (o) => {
    r && n && e(o), r = n = !1;
  }, onMousedown: (o) => {
    r = o.target === o.currentTarget;
  }, onMouseup: (o) => {
    n = o.target === o.currentTarget;
  } };
}, Ef = Et({
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
}), Bf = {
  click: (e) => e instanceof MouseEvent
}, Df = "overlay";
var Af = se({
  name: "ElOverlay",
  props: Ef,
  emits: Bf,
  setup(e, { slots: r, emit: n }) {
    const t = Ve(Df), a = (c) => {
      n("click", c);
    }, { onClick: i, onMousedown: o, onMouseup: s } = Pi(e.customMaskEvent ? void 0 : a);
    return () => e.mask ? xe("div", {
      class: [t.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: i,
      onMousedown: o,
      onMouseup: s
    }, [he(r, "default")], e0.STYLE | e0.CLASS | e0.PROPS, ["onClick", "onMouseup", "onMousedown"]) : xo("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [he(r, "default")]);
  }
});
const Ff = Af, wf = (e, r, n, t) => {
  let a = {
    offsetX: 0,
    offsetY: 0
  };
  const i = (l) => {
    const u = l.clientX, m = l.clientY, { offsetX: f, offsetY: h } = a, d = e.value.getBoundingClientRect(), x = d.left, v = d.top, b = d.width, p = d.height, g = document.documentElement.clientWidth, y = document.documentElement.clientHeight, E = -x + f, C = -v + h, B = g - x - b + f, F = y - v - p + h, P = (A) => {
      let w = f + A.clientX - u, S = h + A.clientY - m;
      t != null && t.value || (w = Math.min(Math.max(w, E), B), S = Math.min(Math.max(S, C), F)), a = {
        offsetX: w,
        offsetY: S
      }, e.value && (e.value.style.transform = `translate(${vn(w)}, ${vn(S)})`);
    }, _ = () => {
      document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", _);
    };
    document.addEventListener("mousemove", P), document.addEventListener("mouseup", _);
  }, o = () => {
    r.value && e.value && r.value.addEventListener("mousedown", i);
  }, s = () => {
    r.value && e.value && r.value.removeEventListener("mousedown", i);
  }, c = () => {
    a = {
      offsetX: 0,
      offsetY: 0
    }, e.value && (e.value.style.transform = "none");
  };
  return qe(() => {
    ya(() => {
      n.value ? o() : s();
    });
  }), Ht(() => {
    s();
  }), {
    resetPosition: c
  };
}, Sf = (e, r = {}) => {
  _a(e) || Bu("[useLockscreen]", "You need to pass a ref param to this function");
  const n = r.ns || Ve("popup"), t = H(() => n.bm("parent", "hidden"));
  if (!ke || na(document.body, t.value))
    return;
  let a = 0, i = !1, o = "0";
  const s = () => {
    setTimeout(() => {
      typeof document > "u" || i && document && (document.body.style.width = o, Ou(document.body, t.value));
    }, 200);
  };
  Be(e, (c) => {
    if (!c) {
      s();
      return;
    }
    i = !na(document.body, t.value), i && (o = document.body.style.width, $u(document.body, t.value)), a = Nu(n.namespace.value);
    const l = document.documentElement.clientHeight < document.body.scrollHeight, u = Hu(document.body, "overflowY");
    a > 0 && (l || u === "scroll") && i && (document.body.style.width = `calc(100% - ${a}px)`);
  }), ba(() => s());
}, kf = (e) => ["", ...vi].includes(e), yn = "_trap-focus-children", ct = [], ga = (e) => {
  var r;
  if (ct.length === 0)
    return;
  const n = ct[ct.length - 1][yn];
  if (n.length > 0 && e.code === Hn.tab) {
    if (n.length === 1) {
      e.preventDefault(), document.activeElement !== n[0] && n[0].focus();
      return;
    }
    const t = e.shiftKey, a = e.target === n[0], i = e.target === n[n.length - 1];
    if (a && t && (e.preventDefault(), n[n.length - 1].focus()), i && !t && (e.preventDefault(), n[0].focus()), process.env.NODE_ENV === "test") {
      const o = n.indexOf(e.target);
      o !== -1 && ((r = n[t ? o - 1 : o + 1]) == null || r.focus());
    }
  }
}, Tf = {
  beforeMount(e) {
    e[yn] = ia(e), ct.push(e), ct.length <= 1 && document.addEventListener("keydown", ga);
  },
  updated(e) {
    Ce(() => {
      e[yn] = ia(e);
    });
  },
  unmounted() {
    ct.shift(), ct.length === 0 && document.removeEventListener("keydown", ga);
  }
}, If = se({
  name: "ElMessageBox",
  directives: {
    TrapFocus: Tf
  },
  components: {
    ElButton: Cf,
    ElFocusTrap: Gd,
    ElInput: Pd,
    ElOverlay: Ff,
    ElIcon: Je,
    ...cd
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: kf
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
      ns: a,
      size: i
    } = Mu("message-box", H(() => e.buttonSize)), { t: o } = n, { nextZIndex: s } = t, c = ae(!1), l = Ea({
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
      zIndex: s()
    }), u = H(() => {
      const $ = l.type;
      return { [a.bm("icon", $)]: $ && ra[$] };
    }), m = hn(), f = hn(), h = H(() => {
      const $ = l.type;
      return l.icon || $ && ra[$] || "";
    }), d = H(() => !!l.message), x = ae(), v = ae(), b = ae(), p = ae(), g = ae(), y = H(() => l.confirmButtonClass);
    Be(() => l.inputValue, async ($) => {
      await Ce(), e.boxType === "prompt" && $ && w();
    }, { immediate: !0 }), Be(() => c.value, ($) => {
      var q, W;
      $ && (e.boxType !== "prompt" && (l.autofocus ? b.value = (W = (q = g.value) == null ? void 0 : q.$el) != null ? W : x.value : b.value = x.value), l.zIndex = s()), e.boxType === "prompt" && ($ ? Ce().then(() => {
        var J;
        p.value && p.value.$el && (l.autofocus ? b.value = (J = S()) != null ? J : x.value : b.value = x.value);
      }) : (l.editorErrorMessage = "", l.validateError = !1));
    });
    const E = H(() => e.draggable), C = H(() => e.overflow);
    wf(x, v, E, C), qe(async () => {
      await Ce(), e.closeOnHashChange && window.addEventListener("hashchange", B);
    }), Ht(() => {
      e.closeOnHashChange && window.removeEventListener("hashchange", B);
    });
    function B() {
      c.value && (c.value = !1, Ce(() => {
        l.action && r("action", l.action);
      }));
    }
    const F = () => {
      e.closeOnClickModal && A(l.distinguishCancelAndClose ? "close" : "cancel");
    }, P = Pi(F), _ = ($) => {
      if (l.inputType !== "textarea")
        return $.preventDefault(), A("confirm");
    }, A = ($) => {
      var q;
      e.boxType === "prompt" && $ === "confirm" && !w() || (l.action = $, l.beforeClose ? (q = l.beforeClose) == null || q.call(l, $, l, B) : B());
    }, w = () => {
      if (e.boxType === "prompt") {
        const $ = l.inputPattern;
        if ($ && !$.test(l.inputValue || ""))
          return l.editorErrorMessage = l.inputErrorMessage || o("el.messagebox.error"), l.validateError = !0, !1;
        const q = l.inputValidator;
        if (bt(q)) {
          const W = q(l.inputValue);
          if (W === !1)
            return l.editorErrorMessage = l.inputErrorMessage || o("el.messagebox.error"), l.validateError = !0, !1;
          if ($e(W))
            return l.editorErrorMessage = W, l.validateError = !0, !1;
        }
      }
      return l.editorErrorMessage = "", l.validateError = !1, !0;
    }, S = () => {
      var $, q;
      const W = ($ = p.value) == null ? void 0 : $.$refs;
      return (q = W == null ? void 0 : W.input) != null ? q : W == null ? void 0 : W.textarea;
    }, O = () => {
      A("close");
    }, N = () => {
      e.closeOnPressEscape && O();
    };
    return e.lockScroll && Sf(c), {
      ...vo(l),
      ns: a,
      overlayEvent: P,
      visible: c,
      hasMessage: d,
      typeClass: u,
      contentId: m,
      inputId: f,
      btnSize: i,
      iconComponent: h,
      confirmButtonClasses: y,
      rootRef: x,
      focusStartRef: b,
      headerRef: v,
      inputRef: p,
      confirmRef: g,
      doClose: B,
      handleClose: O,
      onCloseRequested: N,
      handleWrapperClick: F,
      handleInputEnter: _,
      handleAction: A,
      t: o
    };
  }
});
function Pf(e, r, n, t, a, i) {
  const o = we("el-icon"), s = we("el-input"), c = we("el-button"), l = we("el-focus-trap"), u = we("el-overlay");
  return L(), ne(_n, {
    name: "fade-in-linear",
    onAfterLeave: (m) => e.$emit("vanish"),
    persisted: ""
  }, {
    default: oe(() => [
      b0(xe(u, {
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
            class: K(`${e.ns.namespace.value}-overlay-message-box`),
            onClick: e.overlayEvent.onClick,
            onMousedown: e.overlayEvent.onMousedown,
            onMouseup: e.overlayEvent.onMouseup
          }, [
            xe(l, {
              loop: "",
              trapped: e.visible,
              "focus-trap-el": e.rootRef,
              "focus-start-el": e.focusStartRef,
              onReleaseRequested: e.onCloseRequested
            }, {
              default: oe(() => [
                Y("div", {
                  ref: "rootRef",
                  class: K([
                    e.ns.b(),
                    e.customClass,
                    e.ns.is("draggable", e.draggable),
                    { [e.ns.m("center")]: e.center }
                  ]),
                  style: ve(e.customStyle),
                  tabindex: "-1",
                  onClick: It(() => {
                  }, ["stop"])
                }, [
                  e.title !== null && e.title !== void 0 ? (L(), V("div", {
                    key: 0,
                    ref: "headerRef",
                    class: K([e.ns.e("header"), { "show-close": e.showClose }])
                  }, [
                    Y("div", {
                      class: K(e.ns.e("title"))
                    }, [
                      e.iconComponent && e.center ? (L(), ne(o, {
                        key: 0,
                        class: K([e.ns.e("status"), e.typeClass])
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
                      class: K(e.ns.e("headerbtn")),
                      "aria-label": e.t("el.messagebox.close"),
                      onClick: (m) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"),
                      onKeydown: Wt(It((m) => e.handleAction(e.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
                    }, [
                      xe(o, {
                        class: K(e.ns.e("close"))
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
                    class: K(e.ns.e("content"))
                  }, [
                    Y("div", {
                      class: K(e.ns.e("container"))
                    }, [
                      e.iconComponent && !e.center && e.hasMessage ? (L(), ne(o, {
                        key: 0,
                        class: K([e.ns.e("status"), e.typeClass])
                      }, {
                        default: oe(() => [
                          (L(), ne(Se(e.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : Q("v-if", !0),
                      e.hasMessage ? (L(), V("div", {
                        key: 1,
                        class: K(e.ns.e("message"))
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
                    b0(Y("div", {
                      class: K(e.ns.e("input"))
                    }, [
                      xe(s, {
                        id: e.inputId,
                        ref: "inputRef",
                        modelValue: e.inputValue,
                        "onUpdate:modelValue": (m) => e.inputValue = m,
                        type: e.inputType,
                        placeholder: e.inputPlaceholder,
                        "aria-invalid": e.validateError,
                        class: K({ invalid: e.validateError }),
                        onKeydown: Wt(e.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      Y("div", {
                        class: K(e.ns.e("errormsg")),
                        style: ve({
                          visibility: e.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, le(e.editorErrorMessage), 7)
                    ], 2), [
                      [_0, e.showInput]
                    ])
                  ], 10, ["id"]),
                  Y("div", {
                    class: K(e.ns.e("btns"))
                  }, [
                    e.showCancelButton ? (L(), ne(c, {
                      key: 0,
                      loading: e.cancelButtonLoading,
                      "loading-icon": e.cancelButtonLoadingIcon,
                      class: K([e.cancelButtonClass]),
                      round: e.roundButton,
                      size: e.btnSize,
                      onClick: (m) => e.handleAction("cancel"),
                      onKeydown: Wt(It((m) => e.handleAction("cancel"), ["prevent"]), ["enter"])
                    }, {
                      default: oe(() => [
                        Jt(le(e.cancelButtonText || e.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : Q("v-if", !0),
                    b0(xe(c, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: e.confirmButtonLoading,
                      "loading-icon": e.confirmButtonLoadingIcon,
                      class: K([e.confirmButtonClasses]),
                      round: e.roundButton,
                      disabled: e.confirmButtonDisabled,
                      size: e.btnSize,
                      onClick: (m) => e.handleAction("confirm"),
                      onKeydown: Wt(It((m) => e.handleAction("confirm"), ["prevent"]), ["enter"])
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
var Mf = /* @__PURE__ */ Bt(If, [["render", Pf], ["__file", "index.vue"]]);
const Ot = /* @__PURE__ */ new Map(), Rf = (e) => {
  let r = document.body;
  return e.appendTo && ($e(e.appendTo) && (r = document.querySelector(e.appendTo)), $t(e.appendTo) && (r = e.appendTo), $t(r) || (Oe("ElMessageBox", "the appendTo option is not an HTMLElement. Falling back to document.body."), r = document.body)), r;
}, zf = (e, r, n = null) => {
  const t = xe(Mf, e, bt(e.message) || Ba(e.message) ? {
    default: bt(e.message) ? e.message : () => e.message
  } : null);
  return t.appContext = n, Da(t, r), Rf(e).appendChild(r.firstElementChild), t.component;
}, Lf = () => document.createElement("div"), $f = (e, r) => {
  const n = Lf();
  e.onVanish = () => {
    Da(null, n), Ot.delete(a);
  }, e.onAction = (i) => {
    const o = Ot.get(a);
    let s;
    e.showInput ? s = { value: a.inputValue, action: i } : s = i, e.callback ? e.callback(s, t.proxy) : i === "cancel" || i === "close" ? e.distinguishCancelAndClose && i !== "cancel" ? o.reject("close") : o.reject("cancel") : o.resolve(s);
  };
  const t = zf(e, n, r), a = t.proxy;
  for (const i in e)
    o0(e, i) && !o0(a.$props, i) && (i === "closeIcon" && _t(e[i]) ? a[i] = r0(e[i]) : a[i] = e[i]);
  return a.visible = !0, a;
};
function Dt(e, r = null) {
  if (!ke)
    return Promise.reject();
  let n;
  return $e(e) || Ba(e) ? e = {
    message: e
  } : n = e.callback, new Promise((t, a) => {
    const i = $f(e, r ?? Dt._context);
    Ot.set(i, {
      options: e,
      callback: n,
      resolve: t,
      reject: a
    });
  });
}
const Of = ["alert", "confirm", "prompt"], Hf = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
Of.forEach((e) => {
  Dt[e] = Nf(e);
});
function Nf(e) {
  return (r, n, t, a) => {
    let i = "";
    return _t(n) ? (t = n, i = "") : ri(n) ? i = "" : i = n, Dt(Object.assign({
      title: i,
      message: r,
      type: "",
      ...Hf[e]
    }, t, {
      boxType: e
    }), a);
  };
}
Dt.close = () => {
  Ot.forEach((e, r) => {
    r.doClose();
  }), Ot.clear();
};
Dt._context = null;
const Xe = Dt;
Xe.install = (e) => {
  Xe._context = e._context, e.config.globalProperties.$msgbox = Xe, e.config.globalProperties.$messageBox = Xe, e.config.globalProperties.$alert = Xe.alert, e.config.globalProperties.$confirm = Xe.confirm, e.config.globalProperties.$prompt = Xe.prompt;
};
const Vf = Xe;
function qf({
  type: e = "warning",
  icon: r = "",
  title: n = "系统提示",
  message: t,
  showCancelButton: a = !0,
  confirmButtonText: i = "确定",
  cancelButtonText: o = "取消",
  center: s = !1,
  overflow: c = !1,
  draggable: l = !1,
  appendTo: u,
  customStyle: m = {},
  doSomething: f = () => {
  }
}) {
  Vf({
    icon: r === "" ? r0(ld) : r,
    type: e,
    title: n,
    message: t,
    showCancelButton: a,
    confirmButtonText: i,
    cancelButtonText: o,
    center: s,
    overflow: c,
    draggable: l,
    appendTo: u,
    customStyle: m,
    beforeClose: (h, d, x) => {
      h === "confirm" && f(), x();
    }
  }).catch(() => {
  });
}
const Mi = {
  delMessageBox: qf
};
let Nn = {};
const Wf = "ljs-2024.01.30";
function un(e, r, n) {
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
  for (let c in n)
    t[c] = n[c];
  let a = et.setDES(e, Wf);
  document.getElementById(a) !== null && document.body.removeChild(document.getElementById(a));
  let i = document.createElement("canvas");
  i.width = t.can_w, i.height = t.can_h;
  let o = i.getContext("2d");
  o.rotate(t.rotate * Math.PI / 180), o.font = t.font, o.fillStyle = t.color, o.textAlign = t.align, o.textBaseline = "Middle", o.fillText(r[0], i.width / 8, i.height / 2), o.fillText(r[1], i.width / 8, i.height * 2 / 3);
  let s = document.createElement("div");
  return s.id = a, s.style.display = "block", s.style.visibility = "visible", s.style.opacity = "1", s.style.pointerEvents = "none", s.style.top = "0px", s.style.left = "0px", s.style.position = "fixed", s.style.zIndex = "100000", s.style.width = document.documentElement.clientWidth + "px", s.style.height = document.documentElement.clientHeight + "px", s.style.background = "url(" + i.toDataURL("image/png") + ") left top repeat", document.body.appendChild(s), a;
}
Nn.set = (e, r, n, t = 500) => {
  let a = un(e, r, n);
  setInterval(() => {
    const i = document.getElementById(a), o = i.style;
    (i === null || o.display !== "block" || o.visibility !== "visible" || o.opacity !== "1" || o.position !== "fixed" || o.top !== "0px" || o.left !== "0px") && (a = un(e, r, n));
  }, t), window.onresize = () => {
    un(e, r, n);
  };
};
const Yf = {
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
const We = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of r)
    n[t] = a;
  return n;
}, Kf = Yf, Uf = (e) => (Cn("data-v-474ec553"), e = e(), En(), e), jf = { class: "text" }, Gf = { class: "g-container" }, Xf = /* @__PURE__ */ Uf(() => /* @__PURE__ */ Y("div", { class: "g-circle" }, null, -1)), Jf = { class: "g-bubbles" };
function Zf(e, r, n, t, a, i) {
  return L(), ne(Aa, { to: "body" }, [
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
      Y("div", jf, [
        he(e.$slots, "default", {}, void 0, !0)
      ]),
      Y("div", Gf, [
        Xf,
        Y("div", Jf, [
          (L(), V(Le, null, x0(200, (o) => Y("div", {
            class: "g-bubble",
            key: o
          })), 64))
        ])
      ])
    ], 4)
  ]);
}
const Ri = /* @__PURE__ */ We(Kf, [["render", Zf], ["__scopeId", "data-v-474ec553"]]);
const Qf = {
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
}, ex = { class: "pagination" }, tx = { class: "note" };
function nx(e, r, n, t, a, i) {
  const o = we("el-pagination");
  return L(), V("div", ex, [
    Y("div", tx, le(n.note), 1),
    xe(o, zt({
      background: n.background,
      "current-page": i.currentPage,
      "onUpdate:currentPage": r[0] || (r[0] = (s) => i.currentPage = s),
      "page-size": i.pageSize,
      "onUpdate:pageSize": r[1] || (r[1] = (s) => i.pageSize = s),
      layout: n.layout,
      "page-sizes": n.pageSizes,
      "pager-count": n.pagerCount,
      total: n.total
    }, e.$attrs, {
      onSizeChange: i.handleSizeChange,
      onCurrentChange: i.handleCurrentChange
    }), null, 16, ["background", "current-page", "page-size", "layout", "page-sizes", "pager-count", "total", "onSizeChange", "onCurrentChange"])
  ]);
}
const zi = /* @__PURE__ */ We(Qf, [["render", nx], ["__scopeId", "data-v-83c57e11"]]), rx = {
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
const ax = rx;
function ix(e, r, n, t, a, i) {
  return L(), ne(Aa, { to: "body" }, [
    e.modelValue ? (L(), V("div", {
      key: 0,
      ref: "rightMenu",
      class: K(`rightMenu ${e.menuClass} ${e.modelValue ? "show" : ""}`),
      style: ve({
        top: `${e.position.top}px`,
        left: `${e.position.left}px`
      })
    }, [
      he(e.$slots, "default", {}, void 0, !0)
    ], 6)) : Q("", !0)
  ]);
}
const Li = /* @__PURE__ */ We(ax, [["render", ix], ["__scopeId", "data-v-99657e8c"]]);
const ox = {
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
      e && (this.noType.forEach((r) => {
        const n = e.length;
        for (let t = 0; t < n; t++) {
          const a = e[t];
          if (r === a.dictValue) {
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
          r += this.disabledDateSpan * 3600 * 1e3 * 24, this.opts.dateType = "date", this.opts.valueFormat = "YYYY-MM-DD", this.dateValue = ue.formatTime(r, "{y}-{m}-{d}");
          break;
        case this.dateTypeKeyValue[1]:
          n = new Date(r).getFullYear(), t = new Date(r).getMonth() + this.disabledDateSpan, t < 0 ? (n += this.disabledDateSpan, t = 12) : t += 1, this.opts.dateType = "month", this.opts.valueFormat = "YYYY-MM", this.dateValue = ue.formatTime(/* @__PURE__ */ new Date(`${n}-${te.numberB0(t)}`), "{y}-{m}");
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
}, sx = ["onClick"], lx = { class: "frequencyDate" };
function cx(e, r, n, t, a, i) {
  const o = we("el-date-picker"), s = we("el-form-item");
  return L(), ne(s, {
    label: n.formItemLabel,
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
          class: K(["one", { active: i.dateType === c.dictValue }]),
          onClick: (l) => i.dateTypeF(c.dictValue),
          key: c.dictValue
        }, le(c.dictLabel), 11, sx))), 128))
      ], 4),
      xe(_n, { name: "frequencyDate" }, {
        default: oe(() => [
          Y("div", lx, [
            xe(o, {
              modelValue: i.dateValue,
              "onUpdate:modelValue": r[0] || (r[0] = (c) => i.dateValue = c),
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
const $i = /* @__PURE__ */ We(ox, [["render", cx], ["__scopeId", "data-v-5475b4d5"]]), ux = {
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
          const a = e[t];
          if (r === a.dictValue) {
            e.splice(t, 1);
            break;
          }
        }
      }), this.date_type = e), !ie.fieldCheck(this.date) && this.date.length === 2 && (this.opts.startDate = this.date[0], this.opts.endDate = this.date[1]), this.dateTypeF(this.dateType);
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
      if (!ie.fieldCheck(this.date) && this.date.length === 2) {
        switch (this.dateSwitchRule === 0 ? n = [this.date[0], this.date[1]] : this.dateSwitchRule === 1 && (n = ue.initSearchDateQj(this.opts.dateType)), e) {
          case this.dateTypeKeyValue[3]:
            this.opts.startDate = ue.formatTime(n[0], "{y}-{m}-{d} {h}:{i}:{s}"), this.opts.endDate = ue.formatTime(n[1], "{y}-{m}-{d} {h}:{i}:{s}");
            break;
          case this.dateTypeKeyValue[2]:
            this.opts.startDate = ue.formatTime(n[0], "{y}-{m}-{d}"), this.opts.endDate = ue.formatTime(n[1], "{y}-{m}-{d}");
            break;
          case this.dateTypeKeyValue[1]:
            this.opts.startDate = ue.formatTime(n[0], "{y}-{m}"), this.opts.endDate = ue.formatTime(n[1], "{y}-{m}");
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
const dx = ux, fx = ["onClick"], xx = {
  key: 0,
  class: "frequencyDate"
}, vx = { class: "zhi" };
function px(e, r, n, t, a, i) {
  const o = we("el-date-picker"), s = we("el-form-item");
  return L(), ne(s, {
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
          class: K(["one", { active: e.dateType === c.dictValue }]),
          onClick: (l) => e.dateTypeF(c.dictValue),
          key: c.dictValue
        }, le(c.dictLabel), 11, fx))), 128))
      ], 4),
      xe(_n, { name: "frequencyDate" }, {
        default: oe(() => [
          e.opts.dateTypeTag ? (L(), V("div", xx, [
            xe(o, {
              modelValue: e.opts.startDate,
              "onUpdate:modelValue": r[0] || (r[0] = (c) => e.opts.startDate = c),
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
            Y("span", vx, le(e.symbol), 1),
            xe(o, {
              modelValue: e.opts.endDate,
              "onUpdate:modelValue": r[1] || (r[1] = (c) => e.opts.endDate = c),
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
const Oi = /* @__PURE__ */ We(dx, [["render", px], ["__scopeId", "data-v-1e7c37ee"]]), hx = {
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
        !ie.fieldCheck(this.modelValue) && this.modelValue.length >= 1 ? (this.opts.startDate = this.modelValue[0], this.opts.endDate = this.modelValue[1]) : (this.opts.startDate = null, this.opts.endDate = null);
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
          const a = new Date(trendsDisabledDate).getTime() + n - 864e5, i = new Date(trendsDisabledDate).getTime() - n;
          return a >= Date.now() ? t.getTime() > Date.now() || t.getTime() < i : t.getTime() > a || t.getTime() < i;
        }
      };
    }
  }
};
const mx = hx, gx = (e) => (Cn("data-v-51214b0d"), e = e(), En(), e), yx = /* @__PURE__ */ gx(() => /* @__PURE__ */ Y("span", { class: "and" }, "~", -1));
function bx(e, r, n, t, a, i) {
  const o = we("el-date-picker"), s = we("el-form-item");
  return L(), ne(s, {
    label: e.formItemLabel,
    prop: "date"
  }, {
    default: oe(() => [
      xe(o, {
        modelValue: e.opts.startDate,
        "onUpdate:modelValue": r[0] || (r[0] = (c) => e.opts.startDate = c),
        style: ve({
          width: `${e.dateType === "year" ? 100 : e.dateType === "month" ? 120 : e.dateType === "date" ? 140 : (e.dateType === "datetime", 200)}px !important`
        }),
        "value-format": e.opts.valueFormat,
        type: e.dateType,
        placeholder: "开始日期",
        editable: !1,
        clearable: e.clearable,
        "disabled-date": e.disabledDate_start,
        onChange: r[1] || (r[1] = (c) => (e.dateChange(), e.change_start(c))),
        onVisibleChange: r[2] || (r[2] = (c) => e.visibleChange_start(c))
      }, null, 8, ["modelValue", "style", "value-format", "type", "clearable", "disabled-date"]),
      yx,
      xe(o, {
        modelValue: e.opts.endDate,
        "onUpdate:modelValue": r[3] || (r[3] = (c) => e.opts.endDate = c),
        style: ve({
          width: `${e.dateType === "year" ? 100 : e.dateType === "month" ? 120 : e.dateType === "date" ? 140 : (e.dateType === "datetime", 200)}px !important`
        }),
        "value-format": e.opts.valueFormat,
        type: e.dateType,
        placeholder: "结束日期",
        editable: !1,
        clearable: e.clearable,
        "disabled-date": e.disabledDate_end,
        onChange: r[4] || (r[4] = (c) => (e.dateChange(), e.change_end(c))),
        onVisibleChange: r[5] || (r[5] = (c) => e.visibleChange_end(c))
      }, null, 8, ["modelValue", "style", "value-format", "type", "clearable", "disabled-date"])
    ]),
    _: 1
  }, 8, ["label"]);
}
const Hi = /* @__PURE__ */ We(mx, [["render", bx], ["__scopeId", "data-v-51214b0d"]]), yt = 3600 * 1e3 * 24;
function _x(e, r = 30, n) {
  n ? e.trendsDisabledDate = ue.formatTime(n, "{y}-{m}-{d}") : e.trendsDisabledDate = 0;
  const t = 3600 * 1e3 * 24 * r;
  return (a) => {
    if (e.trendsDisabledDate === 0)
      return a.getTime() > Date.now() || a.getTime() < e.trendsDisabledDate;
    {
      const i = new Date(e.trendsDisabledDate).getTime() + t - 864e5, o = new Date(e.trendsDisabledDate).getTime() - t;
      return i >= Date.now() ? a.getTime() > Date.now() || a.getTime() < o : a.getTime() > i || a.getTime() < o;
    }
  };
}
function Cx(e, r, n, t) {
  if (t)
    r.tempDate = e.date;
  else if (!ie.fieldCheck(e.date) && e.date.length > 0 && !ie.fieldCheck(e.date[0]) && !ie.fieldCheck(e.date[1])) {
    let a = new Date(e.date[0]).getTime(), i = new Date(e.date[1]).getTime();
    Math.abs(a - i) / yt >= n && (r.tempDate[1] === e.date[1] ? e.date[1] = ue.formatTime(a + yt * (n - 1), "{y}-{m}-{d}") : e.date[0] = ue.formatTime(i - yt * (n - 1), "{y}-{m}-{d}"));
  }
}
function Ex(e, r, n, t) {
  if (t)
    r.tempDate = e.date;
  else if (!ie.fieldCheck(e.date) && e.date.length > 0 && !ie.fieldCheck(e.date[0]) && !ie.fieldCheck(e.date[1])) {
    let a = new Date(e.date[0]).getTime(), i = new Date(e.date[1]).getTime();
    Math.abs(a - i) / yt >= n && (r.tempDate[0] === e.date[0] ? e.date[0] = ue.formatTime(i - yt * (n - 1), "{y}-{m}-{d}") : e.date[1] = ue.formatTime(a + yt * (n - 1), "{y}-{m}-{d}"));
  }
}
const Bx = {
  pickerOptionsDynamic: _x,
  visibleChange_start: Cx,
  visibleChange_end: Ex
};
const Dx = {
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
}, Ax = ["index"];
function Fx(e, r, n, t, a, i) {
  const o = we("el-tag");
  return L(), V("div", null, [
    (L(!0), V(Le, null, x0(n.options, (s, c) => (L(), V(Le, {
      key: s.dictValue
    }, [
      i.values.includes(s.dictValue) ? (L(), V(Le, { key: 0 }, [
        s.listClass == "default" || s.listClass == "" ? (L(), V("span", {
          key: 0,
          index: c,
          class: K(s.cssClass)
        }, le(s.dictLabel), 11, Ax)) : (L(), ne(o, {
          key: 1,
          "disable-transitions": !0,
          index: c,
          type: s.listClass === void 0 || s.listClass === null || s.listClass === "" ? "info" : s.listClass,
          class: K(s.cssClass)
        }, {
          default: oe(() => [
            Jt(le(s.dictLabel), 1)
          ]),
          _: 2
        }, 1032, ["index", "type", "class"]))
      ], 64)) : Q("", !0)
    ], 64))), 128))
  ]);
}
const Ni = /* @__PURE__ */ We(Dx, [["render", Fx], ["__scopeId", "data-v-339f3229"]]);
var wx = function(e, r) {
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
  }, t.fn.particle = function(a, i, o) {
    if (this.radius = (t.particles.size.random ? Math.random() : 1) * t.particles.size.value, t.particles.size.anim.enable && (this.size_status = !1, this.vs = t.particles.size.anim.speed / 100, t.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = o ? o.x : Math.random() * t.canvas.w, this.y = o ? o.y : Math.random() * t.canvas.h, this.x > t.canvas.w - this.radius * 2 ? this.x = this.x - this.radius : this.x < this.radius * 2 && (this.x = this.x + this.radius), this.y > t.canvas.h - this.radius * 2 ? this.y = this.y - this.radius : this.y < this.radius * 2 && (this.y = this.y + this.radius), t.particles.move.bounce && t.fn.vendors.checkOverlap(this, o), this.color = {}, typeof a.value == "object")
      if (a.value instanceof Array) {
        var s = a.value[Math.floor(Math.random() * t.particles.color.value.length)];
        this.color.rgb = dn(s);
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
    var l = t.particles.shape.type;
    if (typeof l == "object") {
      if (l instanceof Array) {
        var u = l[Math.floor(Math.random() * l.length)];
        this.shape = u;
      }
    } else
      this.shape = l;
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
      var s = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + o + ")";
    else
      var s = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + o + ")";
    switch (t.canvas.ctx.fillStyle = s, t.canvas.ctx.beginPath(), a.shape) {
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
        let l = function() {
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
        c && l();
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
        var s = {
          x_left: i.radius,
          x_right: t.canvas.w,
          y_top: i.radius,
          y_bottom: t.canvas.h
        };
      else
        var s = {
          x_left: -i.radius,
          x_right: t.canvas.w + i.radius,
          y_top: -i.radius,
          y_bottom: t.canvas.h + i.radius
        };
      switch (i.x - i.radius > t.canvas.w ? (i.x = s.x_left, i.y = Math.random() * t.canvas.h) : i.x + i.radius < 0 && (i.x = s.x_right, i.y = Math.random() * t.canvas.h), i.y - i.radius > t.canvas.h ? (i.y = s.y_top, i.x = Math.random() * t.canvas.w) : i.y + i.radius < 0 && (i.y = s.y_bottom, i.x = Math.random() * t.canvas.w), t.particles.move.out_mode) {
        case "bounce":
          (i.x + i.radius > t.canvas.w || i.x - i.radius < 0) && (i.vx = -i.vx), (i.y + i.radius > t.canvas.h || i.y - i.radius < 0) && (i.vy = -i.vy);
          break;
      }
      if (ze("grab", t.interactivity.events.onhover.mode) && t.fn.modes.grabParticle(i), (ze("bubble", t.interactivity.events.onhover.mode) || ze("bubble", t.interactivity.events.onclick.mode)) && t.fn.modes.bubbleParticle(i), (ze("repulse", t.interactivity.events.onhover.mode) || ze("repulse", t.interactivity.events.onclick.mode)) && t.fn.modes.repulseParticle(i), t.particles.line_linked.enable || t.particles.move.attract.enable)
        for (var c = a + 1; c < t.particles.array.length; c++) {
          var l = t.particles.array[c];
          t.particles.line_linked.enable && t.fn.interact.linkParticles(i, l), t.particles.move.attract.enable && t.fn.interact.attractParticles(i, l), t.particles.move.bounce && t.fn.interact.bounceParticles(i, l);
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
    var o = a.x - i.x, s = a.y - i.y, c = Math.sqrt(o * o + s * s);
    if (c <= t.particles.line_linked.distance) {
      var l = t.particles.line_linked.opacity - c / (1 / t.particles.line_linked.opacity) / t.particles.line_linked.distance;
      if (l > 0) {
        var u = t.particles.line_linked.color_rgb_line;
        t.canvas.ctx.strokeStyle = "rgba(" + u.r + "," + u.g + "," + u.b + "," + l + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(a.x, a.y), t.canvas.ctx.lineTo(i.x, i.y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
      }
    }
  }, t.fn.interact.attractParticles = function(a, i) {
    var o = a.x - i.x, s = a.y - i.y, c = Math.sqrt(o * o + s * s);
    if (c <= t.particles.line_linked.distance) {
      var l = o / (t.particles.move.attract.rotateX * 1e3), u = s / (t.particles.move.attract.rotateY * 1e3);
      a.vx -= l, a.vy -= u, i.vx += l, i.vy += u;
    }
  }, t.fn.interact.bounceParticles = function(a, i) {
    var o = a.x - i.x, s = a.y - i.y, c = Math.sqrt(o * o + s * s), l = a.radius + i.radius;
    c <= l && (a.vx = -a.vx, a.vy = -a.vy, i.vx = -i.vx, i.vy = -i.vy);
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
      var i = a.x - t.interactivity.mouse.pos_x, o = a.y - t.interactivity.mouse.pos_y, s = Math.sqrt(i * i + o * o), c = 1 - s / t.interactivity.modes.bubble.distance;
      if (s <= t.interactivity.modes.bubble.distance) {
        if (c >= 0 && t.interactivity.status == "mousemove") {
          if (t.interactivity.modes.bubble.size != t.particles.size.value)
            if (t.interactivity.modes.bubble.size > t.particles.size.value) {
              var l = a.radius + t.interactivity.modes.bubble.size * c;
              l >= 0 && (a.radius_bubble = l);
            } else {
              var u = a.radius - t.interactivity.modes.bubble.size, l = a.radius - u * c;
              l > 0 ? a.radius_bubble = l : a.radius_bubble = 0;
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
      let h = function(d, x, v, b, p) {
        if (d != x)
          if (t.tmp.bubble_duration_end) {
            if (v != null) {
              var E = b - f * (b - d) / t.interactivity.modes.bubble.duration, C = d - E;
              y = d + C, p == "size" && (a.radius_bubble = y), p == "opacity" && (a.opacity_bubble = y);
            }
          } else if (s <= t.interactivity.modes.bubble.distance) {
            if (v != null)
              var g = v;
            else
              var g = b;
            if (g != d) {
              var y = b - f * (b - d) / t.interactivity.modes.bubble.duration;
              p == "size" && (a.radius_bubble = y), p == "opacity" && (a.opacity_bubble = y);
            }
          } else
            p == "size" && (a.radius_bubble = void 0), p == "opacity" && (a.opacity_bubble = void 0);
      };
      if (t.tmp.bubble_clicking) {
        var i = a.x - t.interactivity.mouse.click_pos_x, o = a.y - t.interactivity.mouse.click_pos_y, s = Math.sqrt(i * i + o * o), f = ((/* @__PURE__ */ new Date()).getTime() - t.interactivity.mouse.click_time) / 1e3;
        f > t.interactivity.modes.bubble.duration && (t.tmp.bubble_duration_end = !0), f > t.interactivity.modes.bubble.duration * 2 && (t.tmp.bubble_clicking = !1, t.tmp.bubble_duration_end = !1);
      }
      t.tmp.bubble_clicking && (h(t.interactivity.modes.bubble.size, t.particles.size.value, a.radius_bubble, a.radius, "size"), h(t.interactivity.modes.bubble.opacity, t.particles.opacity.value, a.opacity_bubble, a.opacity, "opacity"));
    }
  }, t.fn.modes.repulseParticle = function(a) {
    if (t.interactivity.events.onhover.enable && ze("repulse", t.interactivity.events.onhover.mode) && t.interactivity.status == "mousemove") {
      var i = a.x - t.interactivity.mouse.pos_x, o = a.y - t.interactivity.mouse.pos_y, s = Math.sqrt(i * i + o * o), c = { x: i / s, y: o / s }, l = t.interactivity.modes.repulse.distance, u = 100, m = Sx(1 / l * (-1 * Math.pow(s / l, 2) + 1) * l * u, 0, 50), f = {
        x: a.x + c.x * m,
        y: a.y + c.y * m
      };
      t.particles.move.out_mode == "bounce" ? (f.x - a.radius > 0 && f.x + a.radius < t.canvas.w && (a.x = f.x), f.y - a.radius > 0 && f.y + a.radius < t.canvas.h && (a.y = f.y)) : (a.x = f.x, a.y = f.y);
    } else if (t.interactivity.events.onclick.enable && ze("repulse", t.interactivity.events.onclick.mode))
      if (t.tmp.repulse_finish || (t.tmp.repulse_count++, t.tmp.repulse_count == t.particles.array.length && (t.tmp.repulse_finish = !0)), t.tmp.repulse_clicking) {
        let p = function() {
          var g = Math.atan2(d, h);
          if (a.vx = v * Math.cos(g), a.vy = v * Math.sin(g), t.particles.move.out_mode == "bounce") {
            var y = {
              x: a.x + a.vx,
              y: a.y + a.vy
            };
            (y.x + a.radius > t.canvas.w || y.x - a.radius < 0) && (a.vx = -a.vx), (y.y + a.radius > t.canvas.h || y.y - a.radius < 0) && (a.vy = -a.vy);
          }
        };
        var l = Math.pow(t.interactivity.modes.repulse.distance / 6, 3), h = t.interactivity.mouse.click_pos_x - a.x, d = t.interactivity.mouse.click_pos_y - a.y, x = h * h + d * d, v = -l / x * 1;
        x <= l && p();
      } else
        t.tmp.repulse_clicking == !1 && (a.vx = a.vx_i, a.vy = a.vy_i);
  }, t.fn.modes.grabParticle = function(a) {
    if (t.interactivity.events.onhover.enable && t.interactivity.status == "mousemove") {
      var i = a.x - t.interactivity.mouse.pos_x, o = a.y - t.interactivity.mouse.pos_y, s = Math.sqrt(i * i + o * o);
      if (s <= t.interactivity.modes.grab.distance) {
        var c = t.interactivity.modes.grab.line_linked.opacity - s / (1 / t.interactivity.modes.grab.line_linked.opacity) / t.interactivity.modes.grab.distance;
        if (c > 0) {
          var l = t.particles.line_linked.color_rgb_line;
          t.canvas.ctx.strokeStyle = "rgba(" + l.r + "," + l.g + "," + l.b + "," + c + ")", t.canvas.ctx.lineWidth = t.particles.line_linked.width, t.canvas.ctx.beginPath(), t.canvas.ctx.moveTo(a.x, a.y), t.canvas.ctx.lineTo(t.interactivity.mouse.pos_x, t.interactivity.mouse.pos_y), t.canvas.ctx.stroke(), t.canvas.ctx.closePath();
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
      var s = t.particles.array[o], c = a.x - s.x, l = a.y - s.y, u = Math.sqrt(c * c + l * l);
      u <= a.radius + s.radius && (a.x = i ? i.x : Math.random() * t.canvas.w, a.y = i ? i.y : Math.random() * t.canvas.h, t.fn.vendors.checkOverlap(a));
    }
  }, t.fn.vendors.createSvgImg = function(a) {
    var i = t.tmp.source_svg, o = /#([0-9A-F]{3,6})/gi, s = i.replace(o, function(f, h, d, x) {
      if (a.color.rgb)
        var v = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + a.opacity + ")";
      else
        var v = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + a.opacity + ")";
      return v;
    }), c = new Blob([s], { type: "image/svg+xml;charset=utf-8" }), l = window.URL || window.webkitURL || window, u = l.createObjectURL(c), m = new Image();
    m.addEventListener("load", function() {
      a.img.obj = m, a.img.loaded = !0, l.revokeObjectURL(u), t.tmp.count_svg++;
    }), m.src = u;
  }, t.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(t.fn.drawAnimFrame), n.remove(), pJSDom = null;
  }, t.fn.vendors.drawShape = function(a, i, o, s, c, l) {
    var u = c * l, m = c / l, f = 180 * (m - 2) / m, h = Math.PI - Math.PI * f / 180;
    a.save(), a.beginPath(), a.translate(i, o), a.moveTo(0, 0);
    for (var d = 0; d < u; d++)
      a.lineTo(s, 0), a.translate(s, 0), a.rotate(h);
    a.fill(), a.restore();
  }, t.fn.vendors.exportImg = function() {
    window.open(t.canvas.el.toDataURL("image/png"), "_blank");
  }, t.fn.vendors.loadImg = function(a) {
    if (t.tmp.img_error = void 0, t.particles.shape.image.src != "")
      if (a == "svg") {
        var i = new XMLHttpRequest();
        i.open("GET", t.particles.shape.image.src), i.onreadystatechange = function(s) {
          i.readyState == 4 && (i.status == 200 ? (t.tmp.source_svg = s.currentTarget.response, t.fn.vendors.checkBeforeDraw()) : t.tmp.img_error = !0);
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
function dn(e) {
  var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(r, function(t, a, i, o) {
    return a + a + i + i + o + o;
  });
  var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return n ? {
    r: parseInt(n[1], 16),
    g: parseInt(n[2], 16),
    b: parseInt(n[3], 16)
  } : null;
}
function Sx(e, r, n) {
  return Math.min(Math.max(e, r), n);
}
function ze(e, r) {
  return r.indexOf(e) > -1;
}
window.pJSDom = [];
window.particlesJS = function(e, r) {
  typeof e != "string" && (r = e, e = "particles-js"), e || (e = "particles-js");
  var n = document.getElementById(e), t = "particles-js-canvas-el", a = n.getElementsByClassName(t);
  if (a.length)
    for (; a.length > 0; )
      n.removeChild(a[0]);
  var i = document.createElement("canvas");
  i.className = t, i.style.width = "100%", i.style.height = "100%";
  var o = document.getElementById(e).appendChild(i);
  o != null && pJSDom.push(new wx(e, r));
};
window.particlesJS.load = function(e, r, n) {
  var t = new XMLHttpRequest();
  t.open("GET", r), t.onreadystatechange = function(a) {
    if (t.readyState == 4)
      if (t.status == 200) {
        var i = JSON.parse(a.currentTarget.response);
        window.particlesJS(e, i), n && n();
      } else
        "" + t.status;
  }, t.send();
};
const kx = {
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
}, Tx = {
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
}, Ix = !0, Px = {
  particles: kx,
  interactivity: Tx,
  retina_detect: Ix
};
const Mx = {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      particlesJS("particles-js", Px), document.body.style.overflow = "hidden";
    }
  }
}, Rx = (e) => (Cn("data-v-6254d928"), e = e(), En(), e), zx = { class: "particles-js-box" }, Lx = /* @__PURE__ */ Rx(() => /* @__PURE__ */ Y("div", { id: "particles-js" }, null, -1)), $x = [
  Lx
];
function Ox(e, r, n, t, a, i) {
  return L(), V("div", zx, $x);
}
const Vi = /* @__PURE__ */ We(Mx, [["render", Ox], ["__scopeId", "data-v-6254d928"]]), Hx = {
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
const Nx = Hx, Vx = {
  key: 0,
  class: "textAbbreviation-line"
}, qx = {
  key: 1,
  class: "textAbbreviation-last"
};
function Wx(e, r, n, t, a, i) {
  return L(), V("div", {
    class: "textAbbreviation",
    style: ve({
      "line-height": e.lineHeight + e.unit,
      "font-size": e.fontSize + e.unit
    })
  }, [
    e.mode === "line" ? (L(), V("div", Vx, [
      Y("div", {
        ref: "textAbbreviationlineContent",
        class: "textAbbreviation-line-content",
        style: ve({
          height: e.useMax === -1 ? "auto" : `calc(${e.useMax} * ${e.lineHeight}${e.unit})`
        })
      }, le(e.data), 5),
      e.useMax !== -1 ? (L(), V("div", {
        key: 0,
        onClick: r[0] || (r[0] = (...o) => e.expandRetract && e.expandRetract(...o)),
        class: "textAbbreviation-line-more"
      }, le(e.useMax === e.maxLine ? "收起" : "展开"), 1)) : Q("", !0)
    ])) : e.mode === "last" ? (L(), V("div", qx, [
      Y("div", {
        ref: "textAbbreviationlastContent",
        class: "textAbbreviation-last-content",
        style: ve({
          height: e.useMax === -1 ? "auto" : `calc(${e.useMax} * ${e.lineHeight}${e.unit})`
        })
      }, le(e.data), 5),
      e.useMax !== -1 ? (L(), V("div", {
        key: 0,
        onClick: r[1] || (r[1] = (...o) => e.expandRetract && e.expandRetract(...o)),
        class: "textAbbreviation-last-more",
        style: ve({
          position: e.useMax === e.maxLine ? "relative" : "absolute",
          "padding-left": e.useMax === e.maxLine ? "0" : "20px"
        })
      }, le(e.useMax === e.maxLine ? "收起" : "...展开"), 5)) : Q("", !0)
    ])) : Q("", !0)
  ], 4);
}
const qi = /* @__PURE__ */ We(Nx, [["render", Wx], ["__scopeId", "data-v-8f2fa1ba"]]);
let Tt = null;
function Yx(e, r = null, n) {
  if ("WebSocket" in window) {
    e = Kx(e);
    const t = ie.fieldCheck(r) ? [] : [r];
    return Tt = new WebSocket(e, t), Tt.onopen = function() {
      ie.colorLog({ content: ["websocket", "已连接，正在接收数据...."] });
    }, Tt.onmessage = function(a) {
      let i = a.data;
      n(JSON.parse(i));
    }, Tt.onclose = function() {
      ie.colorLog({ content: ["websocket", "已关闭！"] });
    }, Tt;
  } else
    console.info("您的浏览器不支持 WebSocket!");
  return null;
}
function Kx(e) {
  return location.protocol === "http:" ? e = "ws:" + e : location.protocol === "https:" ? e = "wss:" + e : e = "ws:" + e, e;
}
const Wi = {
  init: Yx
};
var t0 = 0;
const Yi = (e = {
  html2Canvas: null,
  // import html2Canvas from 'html2canvas';推荐版本1.4.1
  JsPDF: null
  // import JsPDF from 'jspdf';推荐版本2.5.1
}, r, n, t, a) => {
  if (t) {
    const s = Math.floor(277 * n.scrollWidth / 190) + 20;
    for (let c = 0; c < t.length; c++) {
      const l = Math.ceil((t[c].offsetTop + t[c].offsetHeight) / s);
      if (jx(t, c, l * s)) {
        var i = "";
        t[c].localName !== "tr" ? i = l * s - (t[c].offsetTop + t[c].offsetHeight) : i = l * s - (t[c].offsetTop + t[c].offsetHeight + t0) + 20;
        var o = Ux(i);
        const u = t[c].parentNode, m = t[c].nextSibling;
        m ? u.insertBefore(o, m) : u.appendChild(o);
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
  }).then((s) => {
    for (var c = new e.JsPDF("p", "mm", "a4"), l = s.getContext("2d"), u = a ? 277 : 190, m = a ? 190 : 277, f = Math.floor(m * s.width / u), h = 0; h < s.height; ) {
      var d = document.createElement("canvas");
      d.width = s.width, d.height = Math.min(f, s.height - h), d.getContext("2d").putImageData(l.getImageData(0, h, s.width, Math.min(f, s.height - h)), 0, 0), c.addImage(d.toDataURL("image/jpeg", 1), "JPEG", 10, 10, u, Math.min(m, u * d.height / d.width)), h += f, h < s.height && c.addPage();
    }
    c.save(r + ".pdf");
  });
}, Ux = (e, r = 0) => {
  const n = document.createElement("div");
  return n.style.background = "#ffffff", n.style.width = "calc(100% + 8px)", n.style.marginLeft = "-4px", n.style.marginBottom = "0px", n.classList.add("divRemove"), n.style.height = e + r + "px", n;
}, jx = (e, r, n) => (e[r].localName !== "tr" && (t0 += e[r].clientHeight), e[r].localName !== "tr" ? e[r].offsetTop + e[r].offsetHeight < n && e[r + 1] && e[r + 1].offsetTop + e[r + 1].offsetHeight > n : e[r].offsetTop + e[r].offsetHeight + t0 < n && e[r + 1] && e[r + 1].offsetTop + e[r + 1].offsetHeight + t0 > n);
class Pt {
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
    const a = {
      clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
      clean: !0,
      // true: 清除会话, false: 保留会话
      connectTimeout: 4e3,
      // 超时时间
      reconnectPeriod: 5e3
      // 重连时间间隔
    };
    a.username = n.username, a.password = n.password, this.url = t, this.client = r.connect(this.url, a);
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
    let a = "";
    return location.protocol === "http:" ? a = "ws:" + r : location.protocol === "https:" ? a = "wss:" + r : a = "ws:" + r, a;
  }
}
//创建公共变量
wt(Pt, "url"), //mqtt地址
wt(Pt, "oldSubscribe"), //取消订阅准备
wt(Pt, "subscribe"), //订阅地址
wt(Pt, "client");
const Gx = {
  LJSws: Wi,
  // websocket封装
  htmlPdf: Yi
  // html转pdf
}, Xx = [
  { type: "function", name: "menu", entity: Ta },
  { type: "function", name: "base", entity: ie },
  { type: "function", name: "num", entity: te },
  { type: "function", name: "date", entity: ue },
  { type: "function", name: "fc", entity: v0 },
  { type: "function", name: "ecDC", entity: Pa },
  { type: "function", name: "session", entity: $a },
  { type: "function", name: "cryptoJs", entity: et },
  { type: "function", name: "rgbC", entity: Oa },
  { type: "function", name: "url", entity: Va },
  { type: "function", name: "license", entity: qa },
  { type: "function", name: "El", entity: Mi },
  { type: "function", name: "Watermark", entity: Nn },
  // {type: 'directive', name: 'directives', entity: directives},
  { type: "component", name: "LJSLoading", entity: Ri },
  { type: "component", name: "Pagination", entity: zi },
  { type: "component", name: "RightMenu", entity: Li },
  { type: "component", name: "DatetypeChooseDate", entity: $i },
  { type: "component", name: "DatetypeChooseDateRange", entity: Oi },
  { type: "component", name: "DateRange", entity: Hi },
  { type: "component", name: "DictTag", entity: Ni },
  { type: "component", name: "Particles", entity: Vi },
  { type: "component", name: "TextAbbreviation", entity: qi },
  { type: "other_function", name: "self", entity: Gx }
], Qx = {
  // 全局注入
  install: function(e) {
    Xx.map((r) => {
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
  LJSLoading: Ri,
  Pagination: zi,
  RightMenu: Li,
  DatetypeChooseDate: $i,
  DatetypeChooseDateRange: Oi,
  DateRange: Hi,
  DictTag: Ni,
  Particles: Vi,
  TextAbbreviation: qi,
  // 方法
  LJSmenu: Ta,
  LJSbase: ie,
  LJSnum: te,
  LJSdate: ue,
  LJSfc: v0,
  LJSecDC: Pa,
  LJSsession: $a,
  LJScryptoJs: et,
  LJSrgbC: Oa,
  LJSurl: Va,
  LJSlicense: qa,
  LJSEl: Mi,
  LJSWatermark: Nn,
  DateRange_spanLimit: Bx,
  // 全局变量
  LJSws: Wi,
  htmlPdf: Yi,
  // class，需独立引入
  mqttCreateds: Pt
};
export {
  Qx as default
};
