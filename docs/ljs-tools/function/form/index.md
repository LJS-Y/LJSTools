# 表单（LJSfc）
## 说明
表单（LJSfc），V3JS框架中常用的基础库。

### 1.只能输入固定位数的正负数字，可小数。

方法：numDxsCheck(params: Object)

##### 示例
```vue
<el-input v-model="form.data.energyZbxs" @input="$LJSfc.numDxsCheck({
  form: form.data,
  key: 'energyZbxs',
  zs: 8,
  ws: 4
})" placeholder="请输入能耗折标系数"></el-input>
```

#### params参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| form | Object | √ | | 对象。 |
| key | String | × | money | 键名，不叫money时需要传入新的键名。默认值：'money'。 |
| zs | Number | × | | 整数位数，传1代表1位整数。默认值：''，表示不限位数。同时限制opt.zs和opt.ws，可不用限制maxLength，此限制可以严格按照后端提供的整数和小数位数限制输入。 |
| ws | Number | × | | 小数位数，传1代表1位小数。默认值：''，表示不限位数。 |
| type | String | × | Number | 默认数字类型的字符串，不支持首位多个0；传入String，支持以下格式。00.1；0001221。一般不会有这种使用需求。 |
| fu | Boolean | × | false | 是否支持-负数符号。 |


### 2.只能输入数字

方法：numCheck(params: Object)
##### 示例
```vue
<el-input v-model="form.data.orderNum" @input="$LJSfc.numCheck({form: form.data, key: 'goodsPrice'})" maxlength="10" placeholder="请输入排序"></el-input>
```

#### params参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| form | Object | √ | | 对象。 |
| key | String | × | num | 键名不叫num时需要传入新的键名。 |
| type | Number | × | Number | 默认数字类型的字符串，不支持首位多个0；传入String，支持以下格式。00.1；0001221。一般用于编码类需求。 |
| numberFristIs0 | Boolean | × | true | type = 'Number'的情况下，能否输入数字0，默认是可以输入。 |


### 3.只能输入：数字、字母

方法：numEnCheck(form: Object, key: String)
##### 示例
```vue
<el-input v-model="form.data.orderNum" @input="$LJSfc.numEnCheck(form.data, 'orderNum')" maxlength="10" placeholder="请输入排序"></el-input>
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| form | Object | √ | | 对象。 |
| key | String | × | username | 键名不叫username时需要传入新的键名。 |


### 4.Blob数据流下载
来源于后端接口返回。

方法：downloadBlobData(data: Blob, title: String)
##### 示例
```js
// 请求需要添加 responseType: "blob"
this.$LJSfc.downloadBlobData(res.data, "房屋价格")
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | Blob | √ | | 流。 |
| title | String | × | 2 | 下载后的文件名称。 |


### 5.日期控件禁用项
基于Element-plus，常用于禁用未来日期的场景。

方法：pickerOptions(opts: Object)

返回值（Function）：禁止以后的日期函数。
##### 示例
```vue
<DateRange
  v-model="tableSearch.query.date"
  dateType="datetime"
  :clearable="false"
  :disabled-date="$LJSfc.pickerOptions()">
</DateRange>
```
```vue
<DateRange
  v-model="tableSearch.query.date"
  dateType="datetime"
  :clearable="false"
  :disabled-date="$LJSfc.pickerOptions({
    direction: -1,
    span: 1,
  })">
</DateRange>
```

#### opts参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| dateType | String | × | 3 | 日期的字典value，默认3为日。 |
| direction | Number | × | 1 | 禁用方向，1为禁用未来，-1为禁用以前。 |
| span | Number | × | 0 | 结尾日期浮动数，1 向后推1天开始禁用规则，-1 向前推1天开始禁用规则；其他跨度以此类推。 |
| dateTypeKeyValue | Array | × | ['1', '2', '3'] | 支持不同日期类型，根据字典value的数组处理。对应关系如下：['1', '2', '3']对应['年', '月', '日']。 |


### 6.日期区间控件动态设置最大跨度
解决element-plus日期区间，第一次点击日期，动态处理disabledDate禁用日期的跨度。

方法：pickerOptionsDynamic(day: Number, times: Number)

返回值（Array）：返回disabled-date数据。
##### 示例
```vue
<el-date-picker
  v-model="allSearch.query.date"
  style="width: 240px;"
  value-format="YYYY-MM-DD"
  type="daterange"
  placeholder="请选择"
  :editable="false"
  :clearable="false"
  :disabled-date="disabledDate"
  @calendar-change="times => disabledDateCC(7, times)"
  @visible-change="tag => disabledDateVC(7, tag)"
></el-date-picker>
```
```js
export default {
  data() {
    return {
      allSearch: {
        query: {
          date: this.$LJSdate.initSearchDate(1),
          dateTemp: null, // 处理区间日期，带禁用跨度时，用于备份
        },
        queryReal: {}
      },
      disabledDate: this.$LJSfc.pickerOptionsDynamic(7), // 区间日期默认可选范围
    };
  },
  mounted() {
    // calendar-change：当日历所选的日期更改时触发
    disabledDateCC(day, times) {
      this.disabledDate = this.$LJSfc.pickerOptionsDynamic(day, times);
    },
    // visible-change：当日历卡展开收起时触发
    disabledDateVC(day, tag) {
      if (tag) {
        this.allSearch.query.dateTemp = this.allSearch.query.date;
        this.allSearch.query.date = [];
        this.disabledDate = this.$LJSfc.pickerOptionsDynamic(day);
      } else {
        if (this.allSearch.query.date.length === 0) {
          this.allSearch.query.date = this.allSearch.query.dateTemp;
        }
      }
    },
  }
};
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| day | Number | × | 30 | 天。 |
| times | Number | × | 12 | calendar-change方法的默认参数，日期[开始日期, 结束日期]。 |
