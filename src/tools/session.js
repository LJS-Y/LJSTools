/** 
 * @module session
 * @description 缓存
 *  */
import cryptoJs from './cryptoJs';
const timeKey = 'LJS_TIME_KEY_20231227';
/**
 * 临时缓存 - 取
 * @param {String} key key
 * @returns {String} 返回JSON结构的字符串
 * @example this.$LJSsession.getSS("keyname");
 * */
export function getSS(key) {
  return JSON.parse(sessionStorage.getItem(key));
}

/**
 * 临时缓存 - 存
 * @param {String} key key
 * @param {Any} value key对应的数据
 * @example this.$LJSsession.setSS("keyname", "缓存内容");
 * */
export function setSS(key, value) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

/**
 * 临时缓存 - 删除
 * @param {String} key key
 * @example this.$LJSsession.delSS('keyname');
 * */
export function delSS(key) {
  sessionStorage.removeItem(key);
}

/**
 * 临时缓存 - 清空
 * @example this.$LJSsession.clearSS();
 * */
export function clearSS() {
  sessionStorage.clear();
}

/**
 * 长期缓存 - 取
 * @param {String} key key
 * @returns {String} 返回JSON结构的字符串
 * @example this.$LJSsession.getLS("keyname");
 * */
export function getLS(key) {
  const data = JSON.parse(localStorage.getItem(key));
  if (data === null) {
    return null;
  }
  if (data.time) {
    data.startTime = cryptoJs.getDES(data.startTime, timeKey);
    data.time = cryptoJs.getDES(data.time, timeKey);
    const endTime = new Date().getTime();
    if (endTime - data.startTime > data.time) {
      delLS(key);
      return null;
    }
  }
  return data.value;
}

/**
 * 长期缓存 - 存
 * @param {String} key key
 * @param {Any} value key对应的数据
 * @param {Number} time 存储时间，单位是毫秒，可不填。如不填，则为永久，如填写，getLS()时会判断，如果超时返回null，如果未超时，正常返回
 * @example this.$LJSsession.setLS('keyname', '缓存内容', 1000 * 3600 * 24);
 * */
export function setLS(key, value, time = 0) {
  const data = {
    value
  };
  if (time > 0) {
    data.startTime = cryptoJs.setDES(new Date().getTime(), timeKey);
    data.time = cryptoJs.setDES(time, timeKey);
  }
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * 长期缓存 - 删除
 * @param {String} key key
 * @example this.$LJSsession.setSS("keyname", "缓存内容");
 * */
export function delLS(key) {
  localStorage.removeItem(key);
}

/**
 * 长期缓存 - 清空
 * @example this.$LJSsession.clearLS();
 * */
export function clearLS() {
  localStorage.clear();
}

/**
 * vuex - 还原
 * @param {Object} store this.$store
 * @param {Function} somethings 一些事情。
 * @example this.$LJSsession.clearVuex(this.$store);
 * */
export function clearVuex(store, somethings = () => {}) {
  store.commit('SET_token', null);
  store.commit('SET_userinfo', null);
  store.commit('SET_apiShake', []);
  store.commit('SET_permissions', []);
  store.commit('SET_roles', []);
  store.commit('SET_routerList', []);
  store.commit('SET_menuList', []);
  store.commit('SET_menuOpenList', []);
  store.commit('SET_menuNowOpen', null);
  store.commit('SET_menuShrink', false);
  somethings();
}

export default {
  getSS,
  setSS,
  delSS,
  clearSS,
  getLS,
  setLS,
  delLS,
  clearLS,
  clearVuex,
};
