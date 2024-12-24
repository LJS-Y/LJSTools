# 区间日期
### 说明
日期区间。

### 独立使用
##### datetime
```vue
<DateRange
  v-model="tableSearch.query.date"
  dateType="datetime"
  :clearable="false"
  :disabledDate_start="$LJSfc.pickerOptions()"
  :disabledDate_end="$LJSfc.pickerOptions()">
</DateRange>
```
```js
export default {
  data() {
    return {
      // 表格搜索条件
      tableSearch: {
        query: {
          date: this.$LJSdate.initSearchDate(7, true),
        },
        queryReal: {}
      },
    };
  },
  mounted() {
  }
};
```
##### date、month、year
```vue
<DateRange
  v-model="tableSearch.query.date"
  dateType="date"
  :clearable="false"
  :disabledDate_start="$LJSfc.pickerOptions()"
  :disabledDate_end="$LJSfc.pickerOptions()">
</DateRange>
```
```js
export default {
  data() {
    return {
      // 表格搜索条件
      tableSearch: {
        query: {
          date: this.$LJSdate.initSearchDate(7),
        },
        queryReal: {}
      },
    };
  },
  mounted() {
  }
};
```

### 主参数

| 参数  | 类型 | 必填项 | 默认值 | 参考值 | 说明 |
| ----- | ---- | ----- | ----- | ------ | --- |
| v-model | Array | √ | | | 日期区间数据。 |
| dateType | String | × | date | | 日期类型（datetime/date/month/year）。 |
| formItemLabel | String | × | 日期 | | 默认类型，默认值：日。字典value。 |
| clearable | Boolean | × | true | | 清除按钮。 |
| disabledDate_start | Function | × | | | 开始日期禁用日期。示例（:disabledDate_start="$LJSfc.pickerOptions()"）。 |
| disabledDate_end | Function | × | | | 结束日期禁用日期。示例（:disabledDate_end="$LJSfc.pickerOptions()"）。 |
| change_start | Function | × | | | 开始日期事件。同 el-date-picker 事件 change。 |
| change_end | Function | × | | | 结束日期事件。同 el-date-picker 事件 change。 |
| visibleChange_start | Function | × | | | 开始日期事件。同 el-date-picker 事件 visible-change。 |
| visibleChange_end | Function | × | | | 结束日期事件。同 el-date-picker 事件 visible-change。 |

### 事件

| 名称 | 类型 | 说明 |
| ---- | --- | :--- |

### 插槽

| 插槽名 | 说明 |
| ---- | :------ |

### 经典案例
实现一个固定跨度的联动日期区间选择。
```vue
<DateRange
  v-model="allSearch.query.date"
  dateType="date"
  :clearable="false"
  :disabledDate_start="disabledDate_start"
  :disabledDate_end="disabledDate_end"
  :visibleChange_start="tag => visibleChange_start(3, tag)"
  :visibleChange_end="tag => visibleChange_end(3, tag)"
/>
```
```js
import { DateRange_spanLimit } from 'ljs-tools'; // 必备的库
export default {
  data() {
    return {
      // 表格搜索条件
      allSearch: {
        query: {
          date: undefined,
        },
        queryReal: {}
      },
      disabledDate_start: DateRange_spanLimit.pickerOptionsDynamic(this, 3), // 区间日期默认可选范围
      disabledDate_end: DateRange_spanLimit.pickerOptionsDynamic(this, 3), // 区间日期默认可选范围
      tempDate: undefined, // 临时日期
      trendsDisabledDate: 0, // 根据点击的第一个日期，控制日期区间是否可选
    };
  },
  mounted() {
    visibleChange_start(day, tag) {
      DateRange_spanLimit.visibleChange_start(this.allSearch.query, this, day, tag);
    },
    visibleChange_end(day, tag) {
      DateRange_spanLimit.visibleChange_end(this.allSearch.query, this, day, tag);
    },
  }
};
```