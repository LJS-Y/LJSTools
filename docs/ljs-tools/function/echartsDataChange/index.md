# 报表数据处理（LJSecDC）
## 说明
echarts数据处理（LJSecDC），V3JS框架中常用的基础库。

### 1.饼图数据处理
解决以下问题：
 * 1.[1000000, 1]，极限数据，1的块看不到，并且百分比计算错误问题；
 * 2.[1000000, 0]，为0的数据，不显示minAngle的最小角度；
 * 3.[0, 0]，全为0，不显示饼图的问题。

方法：pieChange(data: Array, o = {
  name: String,
  key: String
})

返回值（Array）：返回处理后的饼图数据。

##### 示例
```js
// 配置需要先设置最小角度：
var option = {
  series: [
    {
      name: '占比',
      type: 'pie',
      minAngle: 5, // 最小角度，防止太小影响显示
      center: ['65%', '50%'],
      radius: ['40%', '76%']
    }
  ]
};
// 使用：
const pieData = this.$LJSecDC.pieChange(res.data); // 处理饼图数据
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | Object | √ | | 接口返回的数据集。 |
| o.name | String | × | name | name对应键。 |
| o.key | String | × | val | value对应键。 |
