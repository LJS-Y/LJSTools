# LJSLoading
### 说明
全局彩色loading。

### 独立使用
```vue
<LJSLoading v-if="loading.show">{{loading.text}}</LJSLoading>
```
```js
import { LJSLoading } from 'ljs-tools';
export default {
  data() {
    return {
      loading: {
        show: false,
        test: '加载中....'
      }
    };
  },
  components: {
    LJSLoading
  },
  mounted() {
    this.loading.show = true;
  }
};
```


### V3JS框架使用
```vue
<LJSLoading v-if="$store.state.loading.tag">{{$store.state.loading.text}}</LJSLoading>
```
```js
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.$store.commit('loadingStore', { // [!code focus]
      tag: true, // [!code focus]
      text: '加载中....' // [!code focus]
    }); // [!code focus]

    setTimeout(() => { // [!code focus]
      this.$store.commit('loadingStore', { // [!code focus]
        tag: false, // [!code focus]
        text: '加载中....' // [!code focus]
      }); // [!code focus]
    }, 3000); // [!code focus]
  }
};
```

### 主参数

| 参数  | 类型 | 必填 | 默认值 | 参考值 | 说明 |
| ----- | ---- | ----- | ----- | ------ | --- |
| speed | Number | × | 3 | | 转速，单位秒。 |
| gaussian | Number | × | 1 | | 高斯模糊。 |
| bgOpacity | Number | × | 0.5 | | 背景透明度，0~1的数字。 |
| textColor | String | × | #FFF | | solt字体颜色。 |

### 插槽

| 插槽名 | 说明 |
| ---- | :------ |
| default | loading环内元素。|
