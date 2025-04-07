# echarts的快速应用
我们提供了一下echarts的封装。


## 饼图 - 常规环

方法：ec.getPie1(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| data | Array | √ | | 数据。 |

#### 示例
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
```
![登录页](/dom/echarts/getPie1.jpg)


## 饼图 - 内外环

方法：ec.getPie2(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| data | Array | √ | | 数据。 |

#### 示例
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
```
![登录页](/dom/echarts/getPie2.jpg)


## 饼图 - 3D

方法：ec.getPie3(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| data | Array | √ | | 数据。 |

#### 示例
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
  this.echartsDom = ec.getPie3({
    myChart: this.echartsDom,
    id: 'TEST',
    data: pieData
  });
});
```
![登录页](/dom/echarts/getPie3.jpg)


## 折线图 - 常规

方法：ec.getLine1(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| dataX | Array | √ | | x轴数据。 |
| data | Array | √ | | y轴数据。 |
| dw | String | × | | y轴单位。 |

#### 示例
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
```
![登录页](/dom/echarts/getLine1.jpg)


## 折线图 - 好看

方法：ec.getLine2(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| dataX | Array | √ | | x轴数据。 |
| data | Array | √ | | y轴数据。 |
| dw | String | × | | y轴单位。 |

#### 示例1
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
```
![登录页](/dom/echarts/getLine2.jpg)

#### 示例2
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
```
![登录页](/dom/echarts/getLine2_2.jpg)


## 柱状图 - 常规

方法：ec.getBar1(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| dataX | Array | √ | | x轴数据。 |
| data | Array | √ | | y轴数据。 |
| color | Array | √ | | 颜色集合。 |
| dw | String | × | | y轴单位。 |

#### 示例
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
```
![登录页](/dom/echarts/getBar1.jpg)

###### 注意：极大数据导致极小数据显示看不到问题解决办法
1.
```js
barMinHeight: 5, // 配合barMinHeight，最小值为0时不适用barMinHeight
data: res.data.incomelist.map((item) => {
  return item == 0 ? null : item;
}),
```
2.
```js
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
```


## 柱状图 - 高端一点的

方法：ec.getBar2(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| dataX | Array | √ | | x轴数据。 |
| data | Array | √ | | y轴数据。 |
| color | Array | √ | | 颜色集合。 |
| dw | String | × | | y轴单位。 |

#### 示例
```vue
<div class="ec" id="dom"></div>
```

```js
import * as EC from 'echarts';
import ec from '@/tools/echartsTool.min.js';
//....
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
```
![登录页](/dom/echarts/getBar2.jpg)


## 柱状图 - 3D

方法：ec.getBar3(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| dataX | Array | √ | | x轴数据。 |
| data | Array | √ | | y轴数据。 |
| legend | Array | √ | | legend集合。 |
| dw | String | × | | y轴单位。 |

#### 示例
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
  this.echartsDom = ec.getBar3({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data,
    legend
  });
});
```
![登录页](/dom/echarts/getBar3.jpg)


## 柱状图 - 横向柱状图

方法：ec.getBar4(params: Object)

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| myChart | Object | √ | | dom对象。 |
| id | String | √ | | dom ID。 |
| dataX | Array | √ | | x轴数据。 |
| data | Array | √ | | y轴数据。 |
| dw | String | × | | y轴单位。 |

#### 示例
```vue
<div class="ec" id="dom"></div>
```

```js
import ec from '@/tools/echartsTool.min.js';
//....
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
  this.echartsDom = ec.getBar4({
    myChart: this.echartsDom,
    id: 'TEST',
    dataX,
    data
  });
});
```
![登录页](/dom/echarts/getBar4.jpg)
