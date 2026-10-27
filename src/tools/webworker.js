/** @module webworker */


//封装一个类（可直接cv）
class LJSWorker {
  
  static state; // 状态，webworker是否可用
  static w;
  
  constructor() {
    if (typeof(Worker) !== "undefined") {
      this.state = true;
    } else {
      this.state = false;
      console.warn('抱歉，你的浏览器不支持 Web Workers...');
    }
  }
 
  //初始化
  init(wurl) {
    if(typeof(w) === 'undefined') {
      this.w = new Worker(wurl);
    }
    return this.w;
  }

  //停止
  stop() {
    console.log('手动关闭线程。');
    this.w.terminate();
    this.w = undefined;
  }
}
export default LJSWorker

/**
 * 使用方法
import createds from "@/tools/mqtt";
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
      this.publicMqtt = new createds('/furnace/msg');
      // 获取访问地址
      const mqttUrl = this.publicMqtt.getUrl();
      //初始化mqtt
      this.publicMqtt.init({
        username: '***',
        password: '******'
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
