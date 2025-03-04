/** @module websocket */
import LJSbase from '@/tools/base';
let ws = null;
/**
 * 初始化websocket
 * @param {string} url websocket地址
 * @param {string} token token
 * @param {Function} dataChangeF 接收数据的回调函数
 * @returns {Object} websocket对象
 * @example 
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
      this.webS = this.LJSws.init(this.wsUrl('/screenWebsocket'), token, (data) => {
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
 * */
export function init(url, token = null, dataChangeF) {
  if ('WebSocket' in window) {
    url = getUrl(url);
    const wsT = LJSbase.fieldCheck(token) ? [] : [token];
    ws = new WebSocket(url, wsT);

    ws.onopen = function () {
      LJSbase.colorLog({content: ['websocket', '已连接，正在接收数据....']});
      // Web Socket 已连接上，使用 send() 方法发送数据
      // ws.send('发送数据');
    };

    ws.onmessage = function (evt) {
      let received_msg = evt.data;
      dataChangeF(JSON.parse(received_msg));
    };

    ws.onclose = function () {
      // 关闭 websocket
      LJSbase.colorLog({content: ['websocket', '已关闭！']});
    };
    return ws;
  } else {
    // 浏览器不支持 WebSocket
    console.info('您的浏览器不支持 WebSocket!');
  }
  return null;
}

/**
 * 处理请求头
 * @param {string} url 请求地址
 * @returns {Object} 真实的websocket请求地址
 * @example getUrl(url)
 * */
export function getUrl(url) {
  if (location.protocol === 'http:') {
    url = 'ws:' + url;
  } else if (location.protocol === 'https:') {
    url = 'wss:' + url;
  } else {
    url = 'ws:' + url;
  }
  return url;
}

export default {
  init,
};
