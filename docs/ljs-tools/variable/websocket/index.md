# websocket（LJSws）
## 说明
websocket（LJSws），V3JS框架中常用的基础库。

### 1.初始化websocket

方法：init(url, token = null, dataChangeF)

返回值（Object）：websocket对象。
##### 示例
```js
export default {
  name: "Furnace3",
  data() {
    return {
      webS: null, // websocket
    };
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    this.webS.close();
  },
  methods: {
    init() {
      this.initWs();
    },
    // 初始化 websocket
    initWs() {
      const token = this.$store.getters.token;
      this.webS = this.LJSws.init(this.wsUrl('/dosing'), token, (data) => {
        console.log(data);
        // if (Object.keys(this.furnace).length > 0) {
        //   for (let key in data) {
        //     this.furnace[key] = data[key];
        //   }
        // }
      });
    },
    // WebSocket请求前缀 - 自主加域名和端口
    wsUrl(url) {
      let wsUrl = import.meta.env.VITE_APP_API_URL + url;
      if (import.meta.env.VITE_NODE_ENV !== 'development') {
        wsUrl = location.host + wsUrl;
      }
      return wsUrl;
    },
  },
};
```

#### init()参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| url | String | √ | | websocket地址。 |
| token | String | × | null | token。 |
| dataChangeF | Function | √ | | 接收数据的回调函数。 |
