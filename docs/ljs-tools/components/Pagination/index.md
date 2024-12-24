# 分页（Pagination）
### 说明
分页。

### 独立使用
```vue
<pagination
  v-if="table.total > 0"
  :total="table.total"
  v-model:page="tableSearch.queryReal.pageNum"
  v-model:limit="tableSearch.queryReal.pageSize"
  @pagination="getList"
/>
```
```js
export default {
  data() {
    return {
      // 表格
      table: {
        // 遮罩层
        loading: false,
        // 总条数
        total: 0,
        // 数据
        data: [],
      },
      // 表格搜索条件
      tableSearch: {
        query: {
          pageNum: 1,
          pageSize: 10
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
| total | Number | √ | 3 | | 总条数。 |
| v-model:page | Number | × | 1 | | 页码。 |
| v-model:limit | Number | × | 10 | | 一页显示几条。 |
| pageSizes | Array | × | [10, 20, 30, 50] | | pageSizes值。 |
| layout | String | × | prev, pager, next, sizes, total | | el-pagination组件属性值layout。 |

### 事件

| 名称 | 类型 | 说明 |
| ---- | --- | :--- |
| pagination | Function | 点击回调函数。 |

### 插槽

| 插槽名 | 说明 |
| ---- | :------ |
