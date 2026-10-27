/** 
 * @module rgbColor
 * @description 颜色处理
 *  */

/**
 *  16进制颜色转rgb
 *  @param {String} color 16进制颜色，如：#02A7EF
 *  @returns {String} 返回rgb的值，如：2,167,239
 *  @example this.$LJSrgbC.c16ToRgb('#02A7EF')
 * */
export function c16ToRgb(color) {
  let reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  if (!reg.test(color)) { return; }
  let newStr = (color.toLowerCase()).replace(/\#/g,'');
  let len = newStr.length;
  if (len == 3) {
    let t = '';
    for (var i=0;i<len;i++) {
      t += newStr.slice(i,i+1).concat(newStr.slice(i,i+1));
    }
    newStr = t;
  }
  let arr = []; //将字符串分隔，两个两个的分隔
  for(let i = 0; i < 6; i = i+2){
    let s = newStr.slice(i,i+2);
    arr.push(parseInt("0x" + s));
  }
  return arr.join(",");
}

/**
 *  rgb转16进制
 *  @param {String} color 16进制颜色，如：2,167,239
 *  @returns {String} 返回16进制的值，如：#02A7EF
 *  @example this.$LJSrgbC.c16ToRgb('2,167,239')
 * */
export function rgbToC16(color) {
  let reg = /^(rgb|RGB)/;
  if(!reg.test(color)){return;}
  var arr = color.slice(4, color.length-1).split(",")
  let c16 = '#';
  for(var i=0;i<arr.length;i++){
    var t = Number(arr[i]).toString(16)
    if(t == "0"){   //如果为“0”的话，需要补0操作,否则只有5位数
      t =  t + "0"
    }
    c16 += t;
  }
  return c16;
}

/**
 *  生成随机16进制颜色
 *  @returns {String} 16进制颜色，如：#02A7EF
 *  @example this.$LJSrgbC.random16Color()
 * */
export function random16Color() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
}

export default {
  c16ToRgb,
  rgbToC16,
  random16Color
};
