/** 
 * @module echartsDataChange
 * @description echarts数据处理
 *  */

import LJSnum from '@/tools/num';

/**
 * 饼图数据处理，解决以下问题：
 * 1.[1000000, 1]，极限数据，1的块看不到，并且百分比计算错误问题；
 * 2.[1000000, 0]，为0的数据，不显示minAngle的最小角度；
 * 3.[0, 0]，全为0，不显示饼图的问题。
 * @param {Array} data 接口返回的数据集
 * @param {Array} key 饼图数据值对应的key
 * @returns {Array} 返回处理后的饼图数据
 * @example
配置需要先设置最小角度：
minAngle: 5,
使用：
const pieData = this.$LJSecDC.pieChange(res.data); // 处理饼图数据
 * */
export function pieChange(data, o = {
  name: 'name',
  key: 'val'
}) {
  if (data.length === 0) {
    return data;
  }
  const opt = {
    name: 'name',
    key: 'val'
  };
  for (let key in o) {
    opt[key] = o[key];
  }
  // 总和
  let total = 0;
  data.forEach((item) => {
    item.proportion = 0;
    total += Number(item[opt.key]);
  });
  // 处理0
  if (total > 0) {
    let max = {
      value: 0,
      index: -1
    };
    data.forEach((item, i) => {
      item[opt.key] = item[opt.key] == 0 ? null : item[opt.key];
      const proportion = LJSnum.numberChangeDecimal(Number(item[opt.key]) / total * 100);
      const realProportion = Number(proportion);
      if (Number(max.value) < realProportion) {
        max = {
          value: proportion,
          index: i
        }
      }
      item.proportion = realProportion === 0 && Number(item[opt.key]) > 0 ? 0.01 : realProportion;
    });
    data[max.index].proportion = 100;
    data.forEach((item, i) => {
      if (i !== max.index) {
        data[max.index].proportion = LJSnum.numberChangeDecimal(data[max.index].proportion - Number(item.proportion));
      }
    });
  }
  const newData = [];
  data.forEach((item) => {
    newData.push({
      name: item[opt.name],
      value: item[opt.key],
      proportion: item.proportion + '%',
    });
  });
  return newData;
}

export default {
  pieChange,
};
