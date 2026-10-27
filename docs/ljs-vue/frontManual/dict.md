# 字典
## 获取字典

```js
export default {
  data() {
    return {
      // 字典
      device_types: [],
      brand_code: [],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    async initData() {
      const res1 = await this.$dict.getDict('device_types');
      if (res1) {
        this.device_types = res1;
      }
      const res2 = await this.$dict.getDict('brand_code');
      if (res2) {
        this.brand_code = res2;
      }
    },
  }
};

```

## 应用字典

```js
this.selectDictLabel(this.device_types, row.deviceType);
this.selectDictLabel(this.brand_code, row.brandCode);
```
```vue
<dict-tag :options="examine_type" :value="scope.row.alarmType"/>
```