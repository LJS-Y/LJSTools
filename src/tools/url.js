/** @module URL检测与应用 */

import BASE from './base';

/**
 * 获取请求中的指定参数的值
 * @param {String} key key
 * @returns {String} 返回指定key的参数值，如不存在返回null。
 * @example this.$LJSurl.getUrlParameter('moduleName');
 */
export function getUrlParameter(key) {
  let parameter = location.search;
  if (parameter === '' || parameter.length === 0) {
    return null;
  }
  parameter = parameter.slice(1, parameter.length);
  const ps = parameter.split('&');
  const nums = ps.length;
  for (let i = 0; i < nums; i++) {
    const query = ps[i].split('=');
    if (query[0] === key) {
      if (query.length === 2) {
        return query[1];
      }
      break;
    }
  }
  return null;
}

/**
 * 获取文件类型
 * @param {String} str 含有文件类型的名称串
 * @param {Boolean} showDot 是否包含点（如 .pdf）
 * @returns {String} 返回文件类型的字符串。
 * @example this.$LJSurl.getFileType(url);
 */
export function getFileType(str, showDot = true) {
  if (BASE.fieldCheck(str)) {
    console.warn(`传入参数不存在，请检查参数值。`);
    return null;
  }
  let lastIndex = str.lastIndexOf('.');
  if (lastIndex === -1) {
    console.warn(`传入参数不是合法的文件名字符串，请检查参数值。`);
    return null;
  }
  lastIndex = showDot ? lastIndex : lastIndex + 1;
  return str.slice(lastIndex, str.length);
}

/**
 * 获取文件名称
 * @param {String} str 含有文件名称的地址字符串
 * @param {Boolean} showSuffix 是否包含后缀（如 .pdf）
 * @returns {String} 返回文件类型的字符串。
 * @example this.$LJSurl.getFileName(url);
 */
export function getFileName(str, showSuffix = true) {
  if (BASE.fieldCheck(str)) {
    console.warn(`传入参数不存在，请检查参数值。`);
    return null;
  }
  const index1 = str.lastIndexOf('/');
  const index2 = str.lastIndexOf('\\');
  let lastIndex = index1 > index2 ? index1 : index2;
  if (lastIndex === -1) {
    console.warn(`传入参数不是合法的文件名字符串，请检查参数值。`);
    return null;
  }
  lastIndex++;
  if (showSuffix) {
    return str.slice(lastIndex, str.length);
  } else {
    return str.slice(lastIndex, str.lastIndexOf('.'));
  }
}

/**
 * ipv4校验
 * @param {String} ip document.domain，当前网站的地址
 * @returns {Boolean} 是否为IPV4
 * @example this.$LJSurl.isIPV4ValidIP(document.domain)
 * */
export function isIPV4ValidIP(ip) {
  var v4reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return v4reg.test(ip);
}

/**
 * ipv6校验
 * @param {String} ip document.domain，当前网站的地址
 * @returns {Boolean} 是否为IPV6
 * @example this.$LJSurl.isIPV6ValidIP(document.domain)
 * */
export function isIPV6ValidIP(ip) {
  var v6reg = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/gm;       
  return v6reg.test(ip);
}

/**
 * ip校验
 * @param {String} ip document.domain，当前网站的地址
 * @returns {Boolean} 是否为IP地址
 * @example this.$LJSurl.isIPValid(document.domain);
 * */
export function isIPValid(ip) {
  return isIPV6ValidIP(ip) || isIPV4ValidIP(ip)
}

export default {
  getUrlParameter,
  getFileType,
  getFileName,
  isIPV4ValidIP,
  isIPV6ValidIP,
  isIPValid,
};
