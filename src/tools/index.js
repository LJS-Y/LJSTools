// 基础库
import LJSmenu from '@/tools/menu';
import LJSbase from '@/tools/base.js';
import LJSnum from '@/tools/num.js';
import LJSdate from '@/tools/date.js';
import LJSfc from '@/tools/form.js';
import LJSecDC from '@/tools/echartsDataChange.js';
import LJSsession from '@/tools/session.js';
import LJScryptoJs from '@/tools/cryptoJs.js';
import LJSrgbC from '@/tools/rgbColor';
import LJSurl from '@/tools/url';
import LJSlicense from '@/tools/license';
import LJSEl from '@/tools/elementPlus';
import LJSWatermark from '@/tools/watermark';

// 功能库 - 模板
// import LJSec from '@/tools/echartsTool.js';

// 指令
// import directives from '@/tools/directives';
// 组件
import LJSLoading from '@/components/common/LJSLoading/index.vue'; // LJSLoading
import Pagination from '@/components/common/pagination.vue'; // 分页
import RightMenu from '@/components/common/RightMenu/index.vue'; // 右键菜单
import DatetypeChooseDate from '@/components/DatetypeChooseDate/index.vue'; // 日期类型 - 单日期
import DatetypeChooseDateRange from '@/components/DatetypeChooseDateRange/index.vue'; // 日期类型 - 区间
import DateRange from '@/components/DateRange/index.vue'; // 日期区间组件
import DateRange_spanLimit from '@/components/DateRange/spanLimit'; // 日期区间组件（暴露一个方法库）
import DictTag from '@/components/DictTag/index.vue'; // 字典的Tag标签
import Particles from '@/components/Particles/index.vue'; // 粒子动画
import TextAbbreviation from '@/components/TextAbbreviation/index.vue'; // 内容缩略

// 全局变量 - 独立挂载
import LJSws from "@/tools/websocket";
import { htmlPdf } from '@/tools/htmlToPDF.js';
const self = {
  LJSws: LJSws, // websocket封装
  htmlPdf: htmlPdf, // html转pdf
};

// class挂载
import mqttCreateds from "@/tools/mqtt";
// import LJSWorker from '@/tools/webworker'; // web worker，暂不上

// function：工具方法
// directive：指令
// component：组件
// 工具
const tools = [
  {type: 'function', name: 'menu', entity: LJSmenu},
  {type: 'function', name: 'base', entity: LJSbase},
  {type: 'function', name: 'num', entity: LJSnum},
  {type: 'function', name: 'date', entity: LJSdate},
  {type: 'function', name: 'fc', entity: LJSfc},
  {type: 'function', name: 'ecDC', entity: LJSecDC},
  {type: 'function', name: 'session', entity: LJSsession},
  {type: 'function', name: 'cryptoJs', entity: LJScryptoJs},
  {type: 'function', name: 'rgbC', entity: LJSrgbC},
  {type: 'function', name: 'url', entity: LJSurl},
  {type: 'function', name: 'license', entity: LJSlicense},
  {type: 'function', name: 'El', entity: LJSEl},
  {type: 'function', name: 'Watermark', entity: LJSWatermark},
  
  // {type: 'directive', name: 'directives', entity: directives},

  {type: 'component', name: 'LJSLoading', entity: LJSLoading},
  {type: 'component', name: 'Pagination', entity: Pagination},
  {type: 'component', name: 'RightMenu', entity: RightMenu},
  {type: 'component', name: 'DatetypeChooseDate', entity: DatetypeChooseDate},
  {type: 'component', name: 'DatetypeChooseDateRange', entity: DatetypeChooseDateRange},
  {type: 'component', name: 'DateRange', entity: DateRange},
  {type: 'component', name: 'DictTag', entity: DictTag},
  {type: 'component', name: 'Particles', entity: Particles},
  {type: 'component', name: 'TextAbbreviation', entity: TextAbbreviation},

  {type: 'other_function', name: 'self', entity: self},
]

/* 
  定义install 方法，接收Vue作为参数，如果使用use注册插件，则所有的组件都将被注册
*/
const globals = {
  // 全局注入
  install: function (app) {
    tools.map(funs => {
      // console.log(funs.name);
      if (funs.type === 'directive') {
        app.use(funs.entity);
      } else if (funs.type === 'component') {
        app.component(`${funs.name}`, funs.entity);
      } else if (funs.type === 'other_function') {
        for (let key in funs.entity) {
          app.config.globalProperties[key] = funs.entity[key];
        }
      } else {
        const newKey = `$LJS${funs.name}`;
        app.config.globalProperties[newKey] = funs.entity;
      }
    })
  },
  // 局部引入时使用
  // 插件
  LJSLoading, Pagination, RightMenu, DatetypeChooseDate, DatetypeChooseDateRange, DateRange, DictTag, Particles, TextAbbreviation,
  // 方法
  LJSmenu, LJSbase, LJSnum, LJSdate, LJSfc, LJSecDC, LJSsession, LJScryptoJs, LJSrgbC, LJSurl, LJSlicense, LJSEl, LJSWatermark, DateRange_spanLimit,
  // 全局变量
  LJSws, htmlPdf, 
  // class，需独立引入
  mqttCreateds,
};

export default globals;