/** @module mqtt */
// import mqtt from 'mqtt';
//封装一个类（可直接cv）
class mqttCreateds {
  //创建公共变量
  static url; //mqtt地址
  static oldSubscribe; //取消订阅准备
  static subscribe; //订阅地址
  static client; //mqtt公共变量
  /**
   * 构造函数
   * @param {String} subscribe 订阅地址
   * @example this.publicMqtt = new mqttCreateds('/furnace/msg');
   * */
  constructor(subscribe) {
    //获取传递来的订阅地址
    this.subscribe = subscribe;
  }
 
  /**
   * 初始化mqtt
   * @param {Object} mqtt Mqtt包的引用
   * @param {String} opts.username 用户名
   * @param {String} opts.password 密码
   * @param {String} url 链接地址，前端可用的真实地址。例如：ws://192.168.1.100:8083/mqtt
   * @example 
   * this.publicMqtt.init(mqtt, {
        username: 'admin',
        password: '你的密码'
      }, mqttUrl);
   * */
  init(mqtt, opts, url) {
    const options = {
      clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
      clean: true, // true: 清除会话, false: 保留会话
      connectTimeout: 4000, // 超时时间
      reconnectPeriod: 5000, // 重连时间间隔
    };
    options.username = opts.username;
    options.password = opts.password;
    // mqtt://220.200.154.230:1883
    // ws://220.200.154.230:8083/mqtt
    this.url = url;
    this.client = mqtt.connect(this.url, options);
    // this.client.on("error", (error) => {
    //   console.log(error);
    // });
    // this.client.on("reconnect", (error) => {
    //   console.log(error);
    // });
  }

  /**
   * 链接
   * @example this.publicMqtt.link();
   * */
  link() {
    this.client.on("connect", (e) => {
      this.client.subscribe(this.subscribe, (error) => {
        //在js代码中最简单的抛出异常方法
        if (!error) {
          console.info("订阅成功");
        } else {
          console.info("订阅失败");
        }
      });
    });
  }
  
  /**
   * 取消订阅，返回一个Promise。{msg: '取消订阅成功', path: 订阅地址}
   * @example this.publicMqtt.unsubscribes();
   * */
  unsubscribes() {
    return new Promise((resolve, reject) => {
      this.client.unsubscribe(this.subscribe, (error) => {
        if (!error) {
          resolve({msg: '取消订阅成功', path: this.subscribe});
        } else {
          reject(error);
        }
      });
    });
  }

  /**
   * 结束链接
   * @example this.publicMqtt.over();
   * */
  over() {
    this.client.end();
  }
  
  /**
   * 收到的消息
   * */
  // get() {
  //   this.client.on("message", (topic, message) => {
  //     console.log("收到消息：", message.toString());
  //   });
  // }

  /**
   * 获取真实的地址
   * @param {String} wsUrl mqtt地址。例如：//192.168.1.100:8083/mqtt
   * @param {String} NODE_ENV 模式：开发（development）、测试、生产
   * @param {Boolean} proxy 是否走nginx的代理。开发模式不走代理。默认true。
   * @returns {String} 返回前端可用的Mqtt地址。
   * @example 
   * const mqttUrl = this.publicMqtt.getUrl(import.meta.env.VITE_APP_MQTT_URL, import.meta.env.VITE_NODE_ENV); // 返回：ws://192.168.1.100:8083/mqtt
   * */
  getUrl(wsUrl, NODE_ENV, proxy = true) {
    if (NODE_ENV !== 'development' && proxy) {
      wsUrl = location.host + wsUrl;
    }
    // 部署时配置代理，/mqtt加在nginx配置里面
    // 原因分析：
    // 测试工具访问：mqtt://220.200.154.230:1883
    // 前端链接：ws://220.200.154.230:8083/mqtt
    // /mqtt其实是一个整体？所以代理不能代理到//220.200.154.230:8083，应该代理到//220.200.154.230:8083/mqtt
    // wsUrl += '/mqtt';
    let url = '';
    if (location.protocol === 'http:') {
      url = 'ws:' + wsUrl;
    } else if (location.protocol === 'https:') {
      url = 'wss:' + wsUrl;
    } else {
      url = 'ws:' + wsUrl;
    }
    return url;
  }
}
export default mqttCreateds

/**
 * 使用方法
import { mqttCreateds } from 'ljs-tools';
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
      this.publicMqtt.unsubscribes();
      this.publicMqtt.over();
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
      this.publicMqtt.init({
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
      // 发送
      setInterval(() => {
        const num1 = Math.random()*1000000;
        const msg = {"1":{"centerTemper":num1,"apparentPowerOne":"14335.64","operatResistanceB":"0.32","sendElectricBell":"0.01","operatResistanceA":"106.30","oilTemperB":"1.55","bottomTemperOne":"714.31","reliefC":"0.72","brakeOperation":"0.00","secondVoltageB":"106.40","threeCoContentOne":"0.02","threePhaseFallB":"0.02","threePhaseFallC":"50.00","hContent":"12.35","bakingTime":"0.00","primaryVoltage":"0.00"},"2":{"fourCoContentTwo":"3619.55","coContent":"0.00","twoCoContentThree":"0.01","oContent":"0.00","hContent":"0.00","fiveCoContentOne":"0.05","threeCoContentTwo":"0.00","oilTemperA":"0.00","oilTemperSetting":"12.25"},"3":{}};
        this.publicMqtt.client.publish('/furnace/msg', JSON.stringify(msg));
      }, 5000);;
    },
  },
};
 * */
