/** 
 * @module echartsTool
 * @description 
公共Echarts方法
<div id="TEST" style="width: 100%; height: 300px;"></div>
 *  */
import * as EC from 'echarts';
import $pie3D from '@/tools/pie3D.js';

const _color = [
  '#014EB5',
  '#A800FF',
  '#e82edb',
  '#B5454C',
  '#443bff',
  '#e8cb25',
  '#3dffb0',
  '#e8a425',
  '#ff7aab',
  '#e84b1e',
  '#552ce2',
  '#ffae21',
  '#e8861e',
  '#d441ff',
  '#35e8e4',
  '#9c7aff',
  '#e86fd8',
  '#ffee38'
];

/**
 *  初始化，处理dom存在等问题
 *  @param {String} id: dom ID
 *  @example myChart = init(id); // 初始dom
 * */
export function init(id) {
  const domTag = EC.getInstanceByDom(document.getElementById(id));
  if (domTag) {
    domTag.dispose();
  }
  return EC.init(document.getElementById(id));
}

/**
 *  折线图1
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @example
const dataX = [];
const data = [];
for (let i = 0; i < 10; i++) {
  dataX.push((1 + i) + '日');
  const num = Math.ceil(Math.random()*200);
  data.push(num);
}
this.$nextTick(() => {
  this.echartsDom = ec.getLine1({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data
  });
});
 * */
export function getLine1({myChart, id, dataX, data, dw = ''}) {
  myChart = init(id); // 初始dom

  var option = {
    tooltip: {
      show: true,
      confine: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: '#FFF'
      },
      trigger: 'axis'
    },
    grid: {
      top: 40,
      bottom: 5,
      left: 5,
      right: 5,
      containLabel: true // 自动计算：包括了坐标轴标签在内的距离
    },
    xAxis: {
      type: 'category',
      data: dataX,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#707070'
        }
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      name: dw,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#707070'
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        data: data,
        type: 'line',
        symbol: 'circle',
        symbolSize: [10, 10],
        lineStyle: {
          color: '#2893FF'
        },
        itemStyle: {
          color: '#2893FF'
        }
      }
    ]
  };
  myChart.setOption(option, true);
  return myChart;
}

/**
 *  折线图2
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @param {Array} color: 图例颜色
 *  @param {Array} dw: 单位
 *  @example 
let dataX = [];
let data = [];
const color = ['#C390F4', '#A5A8EE'];
for (let j = 0; j < 2; j++) {
  const temp = {
    name: j === 0?'本月碳排放量':'上月碳排放量',
    data: [],
    type: 'line',
    symbol: 'none',
    lineStyle: {
      width: 0
    },
    areaStyle: {
      color: color[j],
      opacity: 0.5
    },
  };
  for (let i = 0; i < 30; i++) {
    if (j === 0) {
      dataX.push((i + 1) + '日');
    }
    const num1 = Math.ceil(Math.random()*1000);
    temp.data.push(num1);
  }
  data.push(temp);
}
this.$nextTick(() => {
  this.echartsDom = ec.getLine2({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data,
    color
  });
});
 *  @example 
let dataX = [];
let data = [];
const color = ['#EF8D4B', '#69A3D8'];
for (let j = 0; j < 2; j++) {
  const temp = {
    name: j === 0?'本企业':'行业平均值',
    data: [],
    type: 'line',
    symbol: 'none',
    lineStyle: {
      width: 2,
      color: color[j]
    },
  };
  for (let i = 0; i < 12; i++) {
    if (j === 0) {
      dataX.push((i + 1) + '月');
    }
    const num1 = Math.ceil(Math.random()*1000);
    temp.data.push(num1);
  }
  data.push(temp);
}
this.$nextTick(() => {
  this.echartsDom = ec.getLine2({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data,
    color
  });
});
 * */
export function getLine2({myChart, id, dataX, data, color = _color, dw = ''}) {
  myChart = init(id); // 初始dom

  var option = {
    tooltip: {
      show: true,
      confine: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: '#FFF'
      },
      trigger: 'axis'
    },
    grid: {
      top: 40,
      bottom: 5,
      left: 5,
      right: 5,
      containLabel: true
    },
    legend: {
      icon: 'rect',
      left: 'center',
      itemWidth: 12,
      itemHeight: 12,
      top: 0
    },
    color: _color,
    xAxis: {
      data: dataX,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CCCCCC'
        }
      },
      axisLabel: {
        color: '#666666'
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      name: dw,
      nameTextStyle: {
        color: '#666666'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CCCCCC'
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666666'
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['#FFF','#F1F7FE']
        }
      },
    },
    series: data
  };
  myChart.setOption(option, true);
  return myChart;
}

/**
 *  柱状图1
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @param {Array} color: 图例颜色
 *  @param {Array} dw: 单位
 *  @example 
let dataX = [];
let data = [];
const color = ['#46DCC8', '#DB80F4'];
for (let j = 0; j < 2; j++) {
  const temp = {
    name: j === 0?'本年度':'上年度',
    type: 'bar',
    barMaxWidth: 30,
    data: []
  };
  for (let i = 0; i < 12; i++) {
    if (j === 0) {
      dataX.push((i + 1) + '月');
    }
    const num1 = Math.ceil(Math.random()*1000);
    temp.data.push(num1);
  }
  data.push(temp);
}
this.$nextTick(() => {
  this.echartsDom = ec.getBar1({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data,
    color
  });
});
 *  @example 
// 注意：极大数据导致极小数据显示看不到问题解决办法
1.
barMinHeight: 5, // 配合barMinHeight，最小值为0时不适用barMinHeight
data: res.data.incomelist.map((item) => {
  return item == 0 ? null : item;
}),
2.
tooltip: {
  show: true,
  confine: true,
  trigger: 'axis',
  formatter: function (list) {
    let str = '';
    list.forEach(params => {
      str = `${params.marker}${params.name}&nbsp;&nbsp;&nbsp;&nbsp;<b>${params.value ? params.value : 0}</b>`;
    });
    return str;
  }
},
 * */
export function getBar1({myChart, id, dataX, data, color = _color, dw = ''}) {
  myChart = init(id); // 初始dom

  var option = {
    tooltip: {
      show: true,
      confine: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: '#FFF'
      },
      trigger: 'axis'
    },
    grid: {
      top: 40,
      bottom: 5,
      left: 5,
      right: 5,
      containLabel: true
    },
    legend: {
      icon: 'rect',
      left: 'center',
      itemWidth: 12,
      itemHeight: 4,
      top: 0
    },
    color: _color,
    xAxis: {
      data: dataX,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CCCCCC'
        }
      },
      axisLabel: {
        color: '#666666'
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      name: dw,
      nameTextStyle: {
        color: '#666666'
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CCCCCC'
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666666'
      },
      axisTick: {
        show: false
      },
    },
    series: data
  };
  myChart.setOption(option, true);
  return myChart;
}

/**
 *  柱状图2 - 高端一点的柱
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @param {Array} color: 图例颜色
 *  @param {Array} dw: 单位
 *  @example 
let dataX = [];
let data = [];
const color = ['#FE7A7A', '#FA9D25', '#F6FF00'];
const legend = [
  {
    name: '红色预警',
    itemStyle: {
      color: color[0]
    },
  },
  {
    name: '橙色预警',
    itemStyle: {
      color: color[1]
    },
  },
  {
    name: '黄色预警',
    itemStyle: {
      color: color[2]
    },
  }
];
const itemColor = [
  new EC.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 1,
      color: "#FE7A7A",
    },
    {
      offset: 0,
      color: "#172235",
    },
  ]),
  new EC.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 1,
      color: "#FA9D25",
    },
    {
      offset: 0,
      color: "#172235",
    },
  ]),
  new EC.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 1,
      color: "#F6FF00",
    },
    {
      offset: 0,
      color: "#172235",
    },
  ]),
];
for (let j = 0; j < 3; j++) {
  const dataTemp = {
    name: legend[j].name,
    type: 'bar',
    stack: 'A' + j,
    barMaxWidth: 5,
    data: [],
    itemStyle: {
      color: itemColor[j],
    },
  };
  const stackTemp = {
    type: 'bar',
    stack: 'A' + j,
    barMaxWidth: 5,
    data: [],
    itemStyle: {
      color: color[j],
    },
  };
  for (let i = 0; i < 12; i++) {
    if (j === 0) {
      dataX.push((i + 1) + '月');
    }
    const num1 = Math.ceil(Math.random()*1000);
    dataTemp.data.push(num1);
    stackTemp.data.push(10);
  }
  data.push(dataTemp);
  data.push(stackTemp);
}
this.$nextTick(() => {
  this.echartsDom = ec.getBar2({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data,
    legend
  });
});
 * */
export function getBar2({myChart, id, dataX, data, legend, dw = ''}) {
  myChart = init(id); // 初始dom

  var option = {
    tooltip: {
      show: true,
      confine: true,
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: '#FFF'
      },
      formatter: function (params) {
        let str = `${params[0].name}`;
        params.forEach((item) => {
          if (item.seriesIndex % 2 === 0) {
            str += `<br/>${item.marker}${item.seriesName}&nbsp;&nbsp;&nbsp;&nbsp;<b>${item.value}</b>`;
          }
        });
        return str;
      }
    },
    grid: {
      top: 40,
      bottom: 2,
      left: 5,
      right: 5,
      containLabel: true
    },
    legend: {
      left: 'center',
      itemWidth: 12,
      itemHeight: 12,
      top: 10,
      textStyle: {
        color: '#333'
      },
      data: legend
    },
    color: _color,
    xAxis: {
      data: dataX,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CCCCCC'
        }
      },
      axisLabel: {
        color: '#333'
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      name: dw,
      nameTextStyle: {
        color: '#666666'
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#999',
          type: 'dashed'
        }
      },
      axisLabel: {
        color: '#333'
      },
      axisTick: {
        show: false
      },
    },
    series: data
  };
  myChart.setOption(option, true);
  return myChart;
}

/**
 *  柱状图3 - 3D
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @param {Array} color: 图例颜色
 *  @param {Array} dw: 单位
 *  @example 
let dataX = [];
let data = [];
const color = ['#FE7A7A', '#FA9D25', '#F6FF00'];
const legend = [
  {
    name: '红色预警',
    itemStyle: {
      color: color[0]
    },
  },
  {
    name: '橙色预警',
    itemStyle: {
      color: color[1]
    },
  },
  {
    name: '黄色预警',
    itemStyle: {
      color: color[2]
    },
  }
];
for (let j = 0; j < 3; j++) {
  // 修改柱状图的宽度 - 开始
  const barMaxWidth = 20;
  const barWidth = barMaxWidth * 26 / 48;
  const symbolSize = barWidth / 2;
  const py1 = 31.2 * barMaxWidth / 48; // 偏移值
  const shifting1 = j === 0 ? -1 * py1 : j === 1 ? 0 : py1; // 偏移
  const shifting2 = j === 0 ? -1 * py1 : j === 1 ? 0 : py1; // 偏移
  const shifting3 = j === 0 ? -1 * py1 - 6.5 : j === 1 ? -6.5 : py1 - 6.5; // 偏移
  const angle = 10.4 * barMaxWidth / 48; // 上层角度
  // 修改柱状图的宽度 - 结束
  const temp1 = {  // 下面
    data: [],
    color: color[j],
    type: 'pictorialBar',
    tooltip: {
      'show': false
    },
    barMaxWidth: barMaxWidth,
    symbol: 'diamond',
    symbolOffset: [
      shifting1,
      '50%'
    ],
    zlevel: 3,
    symbolSize: [
      barWidth,
      symbolSize
    ]
  };
  const temp2 = {   // 上面
    data: [],
    type: 'pictorialBar',
    tooltip: {
      show: false
    },
    barMaxWidth: barMaxWidth,
    color: color[j],
    symbolPosition: 'end',
    symbol: 'diamond',
    symbolOffset: [
      shifting2,
      '-50%'
    ],
    symbolSize: [
      barWidth,
      angle
    ],
    zlevel: 2
  };
  const temp3 = {  // 阴影 
    data: [],
    type: 'pictorialBar',
    tooltip: {
      show: false
    },
    barMaxWidth: barMaxWidth,
    color: {
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      type: 'linear',
      global: false,
      colorStops: [
        {
          offset: 0,
          color: 'rgba(0,0,0,0.2)'
        },
        {
          offset: 1,
          color: 'rgba(0,0,0,0.3)'
        }
      ]
    },
    symbolPosition: 'end',
    symbol: 'rect',
    symbolSize: [
      symbolSize,
      '100%'
    ],
    symbolOffset: [
      shifting3,
      0
    ],
    zlevel: 1
  };
  const temp4 = {
    data: [],
    type: 'bar',
    name: legend[j].name,
    barGap: '20%',
    barWidth: barWidth,
    barMaxWidth: barMaxWidth,
    label: {
      show: true,
      position: 'top',
      distance: 4.8,
      color: color[j],
      fontSize: 8
    },
    itemStyle: {
      color: {
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(64,132,238,0.2)'
          },
          {
            offset: 1,
            color: color[j],
          }
        ]
      }
    }
  };
  for (let i = 0; i < 7; i++) {
    if (j === 0) {
      dataX.push((i + 1) + '月');
    }
    const num1 = Math.ceil(Math.random()*1000);
    temp1.data.push(1);
    temp2.data.push(num1);
    temp3.data.push(num1);
    temp4.data.push(num1);
  }
  data.push(temp1);
  data.push(temp2);
  data.push(temp3);
  data.push(temp4);
}
this.$nextTick(() => {
  this.report.ecDom = ec.getBar3({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data,
    legend
  });
});
 * */
export function getBar3({myChart, id, dataX, data, legend, dw = ''}) {
  myChart = init(id); // 初始dom

  var option = {
    tooltip: {
      show: true,
      confine: true,
      trigger: 'axis',
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: '#FFF'
      },
      formatter: function (params) {
        let str = `${params[0].name}`;
        params.forEach((item) => {
          item.marker = item.marker.replace('rgba(64,132,238,0.2)',legend[Math.floor(item.seriesIndex / 4)].itemStyle.color);
          str += `<br/>${item.marker}${item.seriesName}&nbsp;&nbsp;&nbsp;&nbsp;<b>${item.value}</b>`;
        });
        return str;
      }
    },
    grid: {
      top: 50,
      bottom: 2,
      left: 5,
      right: 5,
      containLabel: true
    },
    legend: {
      icon: 'circle',
      left: 'center',
      itemWidth: 12,
      itemHeight: 12,
      top: 10,
      textStyle: {
        color: '#333'
      },
      data: legend
    },
    xAxis: {
      data: dataX,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#31748E'
        }
      },
      axisLabel: {
        color: '#333'
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
    },
    yAxis: {
      type: 'value',
      name: dw,
      nameTextStyle: {
        color: '#666666'
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: '#333'
      },
      axisTick: {
        show: false
      },
    },
    series: data
  };
  myChart.setOption(option, true);
  return myChart;
}


/**
 *  柱状图4 - 横向柱状图
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @param {Array} color: 图例颜色
 *  @param {Array} dw: 单位
 *  @example 
let dataX = ['上月入库量', '本月入库量', '上月出库量', '本月出库量'];
let data = [];
const color = ['#B1DBF3', '#CAD1FE'];
const temp = {
  type: 'bar',
  barMaxWidth: 30,
  data: [
    {
      value: 100,
      itemStyle: {
        color: color[1]
      }
    },
    {
      value: 300,
      itemStyle: {
        color: color[1]
      }
    },
    {
      value: 400,
      itemStyle: {
        color: color[0]
      }
    },
    {
      value: 50,
      itemStyle: {
        color: color[0]
      }
    }
  ]
};
data.push(temp);
this.$nextTick(() => {
  this.left.monthStatistics.dom = ec.getBar4({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data
  });
});
 * */
export function getBar4({myChart, id, dataX, data, dw = ''}) {
  myChart = init(id); // 初始dom

  var option = {
    tooltip: {
      show: true,
      confine: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: '#FFF'
      },
      trigger: 'axis'
    },
    grid: {
      top: 10,
      bottom: 5,
      left: 5,
      right: 50,
      containLabel: true
    },
    legend: {
      icon: 'rect',
      left: 'center',
      itemWidth: 12,
      itemHeight: 4,
      top: 0
    },
    xAxis: {
      type: 'value',
      name: dw,
      nameLocation: 'end',
      nameTextStyle: {
        color: '#666666',
        padding: [0, 0, 0, 20],
        lineHeight: 28, //标题行高
        verticalAlign: 'top',//标题位置
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CCCCCC'
        }
      },
      axisLabel: {
        color: '#666666'
      },
      axisTick: {
        show: false
      },
      splitArea: {
        show: false
      },
    },
    yAxis: {
      type: 'category',
      data: dataX,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#CCCCCC'
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: '#999'
        }
      },
      axisLabel: {
        color: '#666666'
      },
      axisTick: {
        show: false
      },
    },
    series: data
  };
  myChart.setOption(option, true);
  return myChart;
}

/**
 *  饼图1
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @param {Array} color: 图例颜色
 *  @param {Array} dw: 单位
 *  @example 
const pieData = [];
for (let i = 0; i < 3; i++) {
  const num1 = Math.ceil(Math.random()*1000);
  const num2 = Math.ceil(Math.random()*100);
  const temp = {
    name: i === 0?'外购电力':i === 1?'原煤':'燃油',
    value: num1,
    proportion: num2 + '%',
  };
  pieData.push(temp)
}
this.$nextTick(() => {
  this.echartsDom = ec.getPie1({
    myChart: this.echartsDom,
    id: 'TEST',
    data: pieData
  });
});
 * */
export function getPie1({myChart, id, data}) {
  myChart = init(id); // 初始dom

  var option = {
    tooltip: {
      trigger: 'item',
      confine: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: '#FFF'
      },
      // formatter: '{a} <br/>{b} : {c} ({d}%)'
      formatter: function (params) {
        let str = `${params.seriesName}<br/>${params.marker}${params.name}&nbsp;&nbsp;&nbsp;&nbsp;<b>${params.value}</b>（${data[params.dataIndex].proportion}）`;
        return str;
      }
    },
    legend: {
      top: 'center',
      right: '10%',
      orient: 'vertical',
      icon: 'circle'
    },
    color: ['#F1BB4C', '#AAFFFF', '#AFA3F5', '#00D488', '#3FEED4', '#3BAFFF'],
    series: [
      {
        name: '占比',
        type: 'pie',
        minAngle: 5, // 最小角度，防止太小影响显示
        center: ['35%', '50%'],
        radius: ['45%', '76%'],
        data: data,
        tooltip: {
          trigger: 'item',
          show: true
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      // 外环
      {
        type: 'pie',
        minAngle: 5, // 最小角度，防止太小影响显示
        center: ['35%', '50%'],
        radius: ['76%', '80%'],
        tooltip: {
          show: false
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          opacity: 0.5,
        },
        hoverAnimation: false,
        data: data,
        emphasis: {
          scale: false
        }
      }
    ]
  };
  myChart.setOption(option, true);
  return myChart;
}

/**
 *  饼图2
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @param {Array} color: 图例颜色
 *  @param {Array} dw: 单位
 *  @example 
const pieData = [];
for (let i = 0; i < 3; i++) {
  const num1 = Math.ceil(Math.random()*1000);
  const num2 = Math.ceil(Math.random()*100);
  const temp = {
    name: i === 0?'外购电力':i === 1?'原煤':'燃油',
    value: num1,
    proportion: num2 + '%',
  };
  pieData.push(temp)
}
this.$nextTick(() => {
  this.echartsDom = ec.getPie2({
    myChart: this.echartsDom,
    id: 'TEST',
    data: pieData
  });
});
 * */
export function getPie2({myChart, id, data}) {
  myChart = init(id); // 初始dom

  var option = {
    tooltip: {
      trigger: 'item',
      confine: true,
      backgroundColor: 'rgba(0,0,0,0.8)',
      textStyle: {
        color: '#FFF'
      },
      // formatter: '{a} <br/>{b} : {c} ({d}%)'
      formatter: function (params) {
        let str = `${params.seriesName}<br/>${params.marker}${params.name}&nbsp;&nbsp;&nbsp;&nbsp;<b>${params.value}</b>（${data[params.dataIndex].proportion}）`;
        return str;
      }
    },
    legend: {
      show: false,
    },
    color: _color,
    series: [
      {
        name: '占比',
        type: 'pie',
        minAngle: 5, // 最小角度，防止太小影响显示
        center: ['50%', '50%'],
        radius: ['74%', '84%'],
        data: data,
        tooltip: {
          trigger: 'item',
          show: true
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
      },
      // 内环3
      {
        type: 'pie',
        minAngle: 5, // 最小角度，防止太小影响显示
        center: ['50%', '50%'],
        radius: ['66%', '68%'],
        tooltip: {
          show: false
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          opacity: 0.8,
          color: '#013563',
        },
        hoverAnimation: false,
        data: [1],
        emphasis: {
          scale: false
        }
      },
      // 内环2
      {
        type: 'pie',
        minAngle: 5, // 最小角度，防止太小影响显示
        center: ['50%', '50%'],
        radius: ['58%', '62%'],
        tooltip: {
          show: false
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          opacity: 0.8,
          color: '#ccc'
        },
        hoverAnimation: false,
        data: [1],
        emphasis: {
          scale: false
        }
      },
      // 内环1
      {
        type: 'pie',
        minAngle: 5, // 最小角度，防止太小影响显示
        center: ['50%', '50%'],
        radius: ['0%', '58%'],
        tooltip: {
          show: false
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          color: '#eee'
        },
        hoverAnimation: false,
        data: [1],
        emphasis: {
          scale: false
        }
      }
    ]
  };
  myChart.setOption(option, true);
  return myChart;
}

/**
 *  饼图3 - 3D
 *  @param {Object} myChart: dom对象
 *  @param {String} id: dom ID
 *  @param {Array} dataX: x轴数据
 *  @param {Array} data: y轴数据
 *  @param {Array} color: 图例颜色
 *  @param {Array} dw: 单位
 *  @example 
const pieData = [];
const color = ['#4AC0FF', '#CA25FF', '#AFA3F5', '#00D488', '#3FEED4', '#3BAFFF'];
for (let i = 0; i < 2; i++) {
  const num1 = Math.ceil(Math.random()*1000);
  const num2 = Math.ceil(Math.random()*100);
  const temp = {
    name: i === 0?'外购电力':i === 1?'原煤':'燃油',
    value: num1,
    proportion: num2 + '%',
    itemStyle: {
      color: color[i],
    },
  };
  pieData.push(temp)
}
this.$nextTick(() => {
  this.report.ecDom = ec.getPie3({
    myChart: this.echartsDom,
    id: 'TEST',
    data: pieData
  });
});
 * */
export function getPie3({myChart, id, data}) {
  myChart = init(id); // 初始dom

  var option = $pie3D.getPie3D(
    data,
    0.4
  );
  myChart.setOption(option, true);
  return myChart;
}

export default {
  getLine1,
  getLine2,

  getBar1,
  getBar2,
  getBar3,
  getBar4,

  getPie1,
  getPie2,
  getPie3,

  init
};
