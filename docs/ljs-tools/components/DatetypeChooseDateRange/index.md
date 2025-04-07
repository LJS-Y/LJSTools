# 类型区间日期
### 说明
类型区间日期选择器。

### 独立使用
```vue
<DatetypeChooseDateRange
  v-model:date="tableSearch.query.date"
  v-model:dictValue="tableSearch.query.dateType"
  :datetypeData="acquisition_frequency"
  :dateSwitchRule="1"
  :disabledDate="$LJSfc.pickerOptions()">
</DatetypeChooseDateRange>
```
```js
export default {
  data() {
    return {
      // 表格搜索条件
      tableSearch: {
        query: {
          date: this.$LJSdate.initSearchDateQj(), // 日期区间值
          dateType: '3', // 日期类型
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

| 参数  | 类型 | 必填 | 默认值 | 参考值 | 说明 |
| ----- | :----: | :-----: | ----- | ------ | --- |
| v-model:date | String | √ | | | 日期数据。 |
| v-model:dictValue | String | √ | | | 默认类型，默认值：日。字典value。 |
| datetypeData | Array | √ | | | 日期类型字典数据。 |
| clearable | Boolean | × | false | | 清除按钮。 |
| disabledDate | Function | × | | | 禁用日期。示例（:disabledDate="$LJSfc.pickerOptions()"）。 |
| dateTypeKeyValue | Array | × | ['1', '2', '3'] | | 字典key值对应的value值，按照年月日的顺序，默认年为1日为3。 |
| dateSwitchRule | Number | × | 0 | | 日期区间值切换规则：0 - 跟随传入日期；1 - 每次切换取当月、当年。 |
| formItemLabel | String | × | 日期 | | form-item，label值。 |
| disabledDateSpan | Number | × | 0 | | 禁用日期，默认跨度为0。 |
| noType | Array | × | [] | | 日期类型 - 不显示项，根据value处理。 |
| symbol | String | ~ | [] | | 中间符。 |

### 事件

| 名称 | 类型 | 说明 |
| ---- | --- | :--- |

### 插槽

| 插槽名 | 说明 |
| ---- | :------ |
