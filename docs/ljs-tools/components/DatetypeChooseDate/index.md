# 类型日期
### 说明
类型日期选择器。

### 独立使用
```vue
<DatetypeChooseDate
  formItemLabel="报表"
  v-model:date="tableSearch.query.dateTime"
  v-model:dictValue="tableSearch.query.dateType"
  :datetypeData="acquisition_frequency">
</DatetypeChooseDate>
```
```js
export default {
  data() {
    return {
      // 表格搜索条件
      tableSearch: {
        query: {
          dateTime: this.$LJSdate.formatTime(new Date(), '{y}-{m}-{d}'),
          dateType: '3'
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
| ----- | :----: | :-----: | ----- | ------ | --- |
| v-model:date | String | √ | | | 日期数据。 |
| v-model:dictValue | String | √ | | | 默认类型，默认值：日。字典value。 |
| datetypeData | Array | √ | | | 日期类型字典数据。 |
| dateTypeKeyValue | Array | × | ['1', '2', '3'] | | 字典key值对应的value值，按照年月日的顺序，默认年为1日为3。 |
| formItemLabel | String | × | 日期 | | form-item，label值。 |
| disabledDateSpan | Number | × | 0 | | 禁用日期，默认跨度为0。 |
| noType | Array | × | [] | | 日期类型 - 不显示项，根据value处理。 |

### 事件

| 名称 | 类型 | 说明 |
| ---- | --- | :--- |

### 插槽

| 插槽名 | 说明 |
| ---- | :------ |
