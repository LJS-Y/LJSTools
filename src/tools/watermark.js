/** 
 * @module watermark
 * @description 前端水印
 *  */
import LJScryptoJs from '@/tools/cryptoJs';

/**
 * 示例
 * 
this.$LJSWatermark.set(
  uid(32),
  ['背着生活往前走你才辨的出美和丑', '测试网站']
);
 */

let watermark = {};
const watermarkKey = 'ljs-2024.01.30';
export function setWatermark(uid, str, newOpt) {
  const opt = {
    rotate: -25, // 旋转角度
    can_w: 150, // 画布宽
    can_h: 130, // 画布高
    font: '14px Vedana', // 字体
    color: 'rgba(127, 127, 127, 0.1)', // 颜色
    align: 'left', // 文本对齐方式
  };
  for (let key in newOpt) {
    opt[key] = newOpt[key];
  }
  let id = LJScryptoJs.setDES(uid, watermarkKey);

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id));
  }

  //创建一个画布
  let can = document.createElement('canvas');
  //设置画布的长宽
  can.width = opt.can_w;
  can.height = opt.can_h;

  let cans = can.getContext('2d');
  //旋转角度
  cans.rotate(opt.rotate * Math.PI / 180);
  cans.font = opt.font;
  //设置填充绘画的颜色、渐变或者模式
  cans.fillStyle = opt.color;
  //设置文本内容的当前对齐方式
  cans.textAlign = opt.align;
  //设置在绘制文本时使用的当前文本基线
  cans.textBaseline = 'Middle';
  //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
  cans.fillText(str[0], can.width / 8, can.height / 2);
  cans.fillText(str[1], can.width / 8, can.height * 2 / 3);

  let div = document.createElement('div');
  div.id = id;
  div.style.display = 'block';
  div.style.visibility = 'visible';
  div.style.opacity = '1';
  div.style.pointerEvents = 'none';
  div.style.top = '0px';
  div.style.left = '0px';
  div.style.position = 'fixed';
  div.style.zIndex = '100000';
  div.style.width = document.documentElement.clientWidth + 'px';
  div.style.height = document.documentElement.clientHeight + 'px';
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat';
  document.body.appendChild(div);
  return id;
}

/**
 * 设置水印：该方法只允许调用一次。
 * @param {String} uid 唯一标识，可使用uid库
 * @param {Array} str 水印内容
 * @param {Number} opt.rotate: -25, // 旋转角度
 * @param {Number} opt.can_w: 150, // 画布宽
 * @param {Number} opt.can_h: 130, // 画布高
 * @param {String} opt.font: '14px Vedana', // 字体
 * @param {String} opt.color: 'rgba(127, 127, 127, 0.1)', // 颜色
 * @param {String} opt.align: 'left', // 文本对齐方式
 * @param {Number} time 水印检测周期
 * @returns {Array} 返回平均好的数据集合
 * @example this.$LJSnum.averageNum(10000)
 * */
// str：水印文字，数组。
watermark.set = (uid, str, opt, time = 500) => {
  let id = setWatermark(uid, str, opt);

  setInterval(() => {
    const dom = document.getElementById(id);
    const style = dom.style;
    if (
      dom === null ||
      style.display !== 'block' || style.visibility !== 'visible' || style.opacity !== '1' || style.position !== 'fixed' || style.top !== '0px' || style.left !== '0px'
    ) {
      id = setWatermark(uid, str, opt);
    }
  }, time);
  window.onresize = () => {
    setWatermark(uid, str, opt);
  };
};

export default watermark;
