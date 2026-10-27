# Mqtt
## 说明
Mqtt类。需独立引入。

```js
import LjsTools from 'ljs-tools'; // 产物为 default 导出，请 default 导入后解构
const { mqttCreateds } = LjsTools;
```

### 案例
```js
import mqtt from 'mqtt';
import LjsTools from 'ljs-tools'; // 产物为 default 导出，请 default 导入后解构
const { mqttCreateds } = LjsTools;
export default {
  data() {
    return {
      publicMqtt: null, // mqtt
    };
  },
  mounted() {
    this.init();
  },
  beforeUnmount() {
    //页面销毁结束订阅
    if (this.publicMqtt) {
      this.publicMqtt.unsubscribes().then((res) => {
        this.publicMqtt.over();
      }).catch((error) => {
        console.warn(error);
      });
    }
  },
  methods: {
    init() {
      this.initMqtt();
    },
    // 初始化 mqtt
    initMqtt() {
      //设置订阅地址
      this.publicMqtt = new mqttCreateds('/furnace/msg');
      // 获取访问地址
      const mqttUrl = this.publicMqtt.getUrl(import.meta.env.VITE_APP_MQTT_URL, import.meta.env.VITE_NODE_ENV);
      //初始化mqtt
      this.publicMqtt.init(mqtt,
      {
        username: 'admin',
        password: '你的密码'
      }, mqttUrl);
      //链接mqtt
      this.publicMqtt.link();
      // 获取订阅数据
      this.publicMqtt.client.on("message", (topic, message) => {
        let str = JSON.parse(message.toString());
        console.log(str);
      });
    },
  },
};
```

### 1.构造函数

方法：constructor(subscribe: String)

##### 示例
```js
this.publicMqtt = new mqttCreateds('/furnace/msg'); // 获取Mqtt
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| subscribe | String | √ | | 订阅地址。 |


### 2.初始化

方法：init(mqtt, opts: Object, url: String)

> **位置参数，共 3 个入参**：第一个是 `mqtt` 包本身，第二个才是连接选项对象。

##### 示例
```js
import mqtt from 'mqtt';
this.publicMqtt.init(mqtt,
{
  username: 'admin',
  password: '你的密码'
}, 'ws://192.168.1.100:8083/mqtt');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| mqtt | Object | √ | | Mqtt包的引用。 import mqtt from 'mqtt';|
| opts.username | String | √ | | 用户名。 |
| opts.password | String | √ | | 密码。 |
| url | String | √ | | 链接地址，前端可用的真实地址。例如：ws://192.168.1.100:8083/mqtt。 |

#### 内部写死的连接选项（不可通过入参覆盖）

| 选项 | 固定值 | 含义 |
| --- | --- | --- |
| clientId | `'mqttjs_' + 8 位随机 hex` | 每次初始化随机生成 |
| clean | `true` | 不留存会话 |
| connectTimeout | `4000` | 连接超时（毫秒） |
| reconnectPeriod | `5000` | 断线重连间隔（毫秒） |


### 3.链接

方法：link()

##### 示例
```js
this.publicMqtt.link();
```


### 4.取消订阅

取消订阅，返回一个Promise。
```js
{msg: '取消订阅成功', path: 订阅地址}
```

方法：unsubscribes()

##### 示例
```js
this.publicMqtt.unsubscribes().then((res) => {
  console.log(res);
}).catch((error) => {
  console.warn(error.msg);
});;
```


### 5.结束链接

方法：over()

##### 示例
```js
this.publicMqtt.over();
```


### 6.接收消息

方法：client.on('message', (topic, message) => {})

##### 示例
```js
// 获取订阅数据
this.publicMqtt.client.on("message", (topic, message) => {
  let str = JSON.parse(message.toString());
  console.log(str);
});
```


### 7.发送消息

方法：client.publish(path, json)

##### 示例
```js
const msg = {"1":"test","3":{}};
this.publicMqtt.client.publish('/furnace/msg', JSON.stringify(msg));
```


### 8.获取真实的地址

方法：getUrl(wsUrl: String, NODE_ENV: String, proxy: Boolean)

返回值（String）：返回前端可用的Mqtt地址。

##### 示例
```js
const mqttUrl = this.publicMqtt.getUrl(import.meta.env.VITE_APP_MQTT_URL, import.meta.env.VITE_NODE_ENV); // 返回：ws://192.168.1.100:8083/mqtt
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| wsUrl | String | √ | | mqtt地址。例如：//192.168.1.100:8083/mqtt。 |
| NODE_ENV | String | √ | | 模式：开发（development）、测试、生产。可根据开发和非开发模式，生成正确的地址。 |
| proxy | Boolean | × | true | 是否走nginx的代理。开发模式不走代理。 |
