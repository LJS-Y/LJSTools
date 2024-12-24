# 字典回显卡
### 说明
字典回显卡（若依分离版组件）。

### 独立使用
```vue
<dict-tag :options="sys_job_group" :value="dictValue"/>
```
```js
export default {
  data() {
    return {
      sys_job_group: [],
      dictValue: '1',
    };
  },
  mounted() {
  }
};
```

### 主参数

| 参数  | 类型 | 必填项 | 默认值 | 参考值 | 说明 |
| ----- | :----: | :-----: | ----- | ------ | --- |
| options | Array | × | null | | 字典数据。 |
| value | Number, String, Array | √ | | | 将会被翻译的字典值，字典value。 |

### 事件

| 名称 | 类型 | 说明 |
| ---- | --- | :--- |

### 插槽

| 插槽名 | 说明 |
| ---- | :------ |
