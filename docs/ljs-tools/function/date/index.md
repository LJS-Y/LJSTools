# 日期（LJSdate）
## 说明
日期（LJSdate），V3JS框架中常用的基础库。

### 1.日期格式化
通过传入的时间戳获取固定格式日期

方法：formatTime(time: Date, pattern: string)

返回值（String）：返回指定格式的日期。
##### 示例
```js
this.$LJSdate.formatTime(new Date().getTime(), '{y}-{m}-{d} {h}:{i}:{s}') // 返回2021-12-22 09:56:58
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| time | Date | √ | | 时间。 |
| pattern | String | × | {y}-{m}-{d} {h}:{i}:{s} | 出格式，{y}-{m}-{d} {h}:{i}:{s}.{MS}。 |


### 2.定制日期
如前一天、前一个月、前一年

方法：customizedDate(time: Date, pattern: string, span: Number)

返回值（String）：返回指定格式的指定日期。
##### 示例
```js
// 日
this.$LJSdate.customizedDate(new Date().getTime(), '{y}-{m}-{d}', -1); // 当前日期：2024-03-28，返回：2024-03-27
// 月
this.$LJSdate.customizedDate(new Date().getTime(), '{y}-{m}', -1); // 当前日期：2024-03，返回：2024-02
// 年
this.$LJSdate.customizedDate(new Date().getTime(), '{y}', -1); // 当前日期：2024，返回：2023
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| time | Date | √ | | 时间。 |
| pattern | String | √ | | 输出格式，{y}-{m}-{d}，只处理年、月、日数据。
| span | Number | × | 0 | 步幅，正数为未来日期，负数为过去日期。默认为0。 |


### 3.时间处理函数
传入[开始日期, 结束日期]，期望返回数据为[2020-10-01 00:00:00, 2020-10-01 23:59:59]。

方法：dateQjChange(dates: [Date, Date], tag: Number)

返回值（String）：返回一个所需规格的[开始日期, 结束日期]。
##### 示例
```js
this.$LJSdate.dateQjChange(["2020-10-01", "2020-10-07"], 1) // 返回["2020-10-01 00:00:00", "2020-10-07 23:59:59"]
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| dates | Array | √ | | [开始日期, 结束日期]。 |
| tag | Number | × | 1 | 1，补时分秒；2，补分秒；3，补秒。 |


### 4.根据时间戳返回时长
我们想要获得这样一个数据：如3小时15分23秒。

方法：timeRunDistance({time: Number, showTag: Array, showAll: Boolean, onlyTime: Boolean})

返回值（Array）：返回3小时15分23秒。
##### 示例
```js
const runTime = this.$LJSdate.timeRunDistance({
  time: 3600*1000*24 + 3600*1000*2 + 60*1000*4 + 1000* 21 + 876,
  showAll: false
})
console.log(runTime); // 1天2小时4分钟21秒876毫秒
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| time | Number | √ | | 时长，毫秒数的时长。 |
| showTag | Array | × | ['天', '小时', '分钟', '秒', '毫秒'] | 展示的标签，['天', '小时', '分钟', '秒', '毫秒']。可根据需要修改时间单位，如：['d', 'h', 'm', 's', 'ms']。。 |
| showAll | Boolean | × | false | 是否完整展示，默认为false。true：0天2小时4分钟21秒876毫秒；false：2小时4分钟21秒876毫秒。 |
| onlyTime | Boolean | × | false | 是否只返回时间集合，默认为false，当为true时showAll参数无效。true：[0, 2, 4, 21, 876]；false：2小时4分钟21秒876毫秒。 |


### 5.区间日期
统一处理方法，常用于默认的区间日期表单。

方法：initSearchDate(day: Number, time: Boolean)

返回值（Array）：返回默认起止日期。
##### 示例
```js
this.$LJSdate.initSearchDate() // 返回["2020-10-11", "2020-10-20"]
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| day | Number | × | 10 | 跨度。 |
| time | Boolean | × | false | 是否开启时分秒。 |


### 6.区间日期2
获取当月，当年，近n年的区间。

方法：initSearchDateQj(type: String, n: Number)

返回值（String）：返回默认起止日期。
##### 示例
```js
this.$LJSdate.initSearchDateQj() // 返回["2020-10-01", "2020-10-20"]
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| type | String | × | date | 类型：datetime,date,month,year。 |
| n | Number | × | 0 | type为year时，年的跨度。 |
