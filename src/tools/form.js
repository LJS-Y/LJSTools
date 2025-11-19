/** 
 * @module form
 * @description 表单常用处理方法
 *  */
import D from './date';
import { checkNum } from './num';

/**
 *  只能输入固定位数的正负数字，可小数。
 *  @param {Object} opt 配置对象
 *  @param {Object} opt.form 对象
 *  @param {String} opt.key 键名，不叫money时需要传入新的键名。默认值：'money'
 *  @param {Number} opt.zs 整数位数，传1代表1位整数。默认值：''，表示不限位数。同时限制opt.zs和opt.ws，可不用限制maxLength，此限制可以严格按照后端提供的整数和小数位数限制输入。
 *  @param {Number} opt.ws 小数位数，传1代表1位小数。默认值：''，表示不限位数
 *  @param {String} opt.type 默认数字类型的字符串，不支持首位多个0；传入String，支持以下格式。00.1；0001221。一般不会有这种使用需求。。默认值：'Number'
 *  @param {Boolean} opt.fu 是否支持-负数符号。默认值：false
 *  @example 
this.$LJSfc.numDxsCheck({
  form: form,
  key: 'companyName',
  zs: 8,
  ws: 4
})
 * */
export function numDxsCheck({ form, key = 'money', zs = 10, ws = 2, type = 'Number', fu = false }) {
  const obj = form;
  obj[key] = obj[key] + '';
  if (type === 'Number') {
    // 首位是0，第二位必须是.
    if (obj[key].slice(0, 1) === '0') {
      obj[key] = obj[key].slice(1, 2) !== '.'?'0':obj[key];
    }
    // 首位是-，第二位不能是.
    if (obj[key].slice(0, 1) === '-') {
      obj[key] = obj[key].slice(1, 2) === '.'?'-':obj[key];
    }
    // 首位是-0，第三位必须是.
    if (obj[key].slice(0, 2) === '-0') {
      obj[key] = obj[key].slice(2, 3) !== '.'?'-0':obj[key];
    }
  }
  // 先把非数字的都替换掉，除了数字和.
  if (fu) {
    obj[key] = obj[key].replace(/[^\d.-]/g, '');
  } else {
    obj[key] = obj[key].replace(/[^\d.]/g, '');
  }
  // 必须保证第一个为数字而不是.
  obj[key] = obj[key].replace(/^\./g, '');
  // 保证只有出现一个.而没有多个.
  obj[key] = obj[key].replace(/\.{2,}/g, '.');
  // 保证只有出现一个-号，且在首位
  obj[key] = obj[key].slice(0, 1) + obj[key].slice(1, obj[key].length).replace(/\-/g, '');

  // 动态正则，小数位动态处理
  const c = new RegExp('^(\\-)*(\\d+)\\.(\\d{0,' + ws + '})\.*$');

  // 限制整数位
  if (zs !== '' && obj[key].length > 0) {
    const nums = obj[key].split('.');
    let zsNum = nums[0];
    let xsNum = '';
    const zsLength = zsNum.slice(0, 1) === '-' ? 1 : 0; // 负数时，整数位数需+1计算。
    if (zsNum.length > zs + zsLength) {
      zsNum = zsNum.slice(0, zs + zsLength);
    }
    if (nums.length > 1) {
      xsNum = nums[1];
      obj[key] = zsNum + '.' + xsNum;
    } else {
      obj[key] = zsNum;
    }
  }
  // 只能输入两个小数
  obj[key] = obj[key].replace(c, '$1$2.$3');
}

/**
  *  只能输入数字。
  *  @param {object} form 表单对象
  *  @param {String} key 键名不叫num时需要传入新的键名
  *  @param {String} type 默认数字类型的字符串，不支持首位多个0；传入String，支持以下格式。00.1；0001221。一般用于编码类需求。
  *  @param {Boolean} fu type = 'Number'的情况下，能否输入负数，默认否
  *  @example this.$LJSfc.numCheck({form, key: 'goodsPrice'})
  * */
export function numCheck({form, key = 'num', type = 'Number', fu = false}) {
  if (type === 'Number') {
    if (fu) {
      form[key] = form[key].slice(0, 1) + form[key].slice(1, form[key].length).replace(/\-/g, '');
    } else {
      if (form[key].slice(0, 1) === '-') {
        form[key] = form[key].slice(1, form[key].length);
      }
    }
  }
  form[key] = form[key].replace(/[^\d-]/g, '');

  // 处理为数字
  if (type === 'Number' && form[key].length > 0) {
    if (form[key] !== '-') {
      form[key] = Number(form[key]);
    }
  }
}

/**
  *  光标离开输入框时检查数字合法性，并处理不合法的数据
  *  @param {object} form 表单对象
  *  @param {String} key 键名不叫num时需要传入新的键名
  *  @example this.$LJSfc.numBlurCheck({form, key: 'goodsPrice'})
  * */
export function numBlurCheck({form, key = 'num'}) {
  if (!checkNum(form[key])) {
    form[key] = ''
    return;
  }
  if (form[key] === '0.' || form[key] === '-0.') {
    form[key] = ''
    return;
  }
  if (form[key] === '-0') {
    form[key] = '0'
    return;
  }
}

/**
  *  只能输入：数字、字母
  *  @param {object} form 表单对象
  *  @param {string} key 键名不叫username时需要传入新的键名
  *  @example this.$LJSfc.numEnCheck(obj, 'username')
  * */
export function numEnCheck(form, key = 'username') {
  form[key] = form[key] + '';

  // 数字、字母及下划线
  form[key] = form[key].replace(/[^\w]/g, '');
  // 去掉下划线
  form[key] = form[key].replace(/\_/g, '');
}

/**
 * Blob数据流下载，来源于后端接口返回
 * @param {Blob} data 流
 * @param {String} title 下载后的文件名称
 * @example this.$LJSfc.downloadBlobData(res.data, "房屋价格")，请求需要添加 responseType: "blob"
 * */
export function downloadBlobData(data, title) {
  const link = document.createElement('a');
  const blob = new Blob([data], {
    type: 'application/vnd.ms-excel'
  });
  link.style.display = 'none';
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', title);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
  *  日期控件禁用项(Element-plus)
  *  @param {String} opts.dateType 日期的字典value，默认3为日，按照dateTypeKeyValue规则使用。
  *  @param {Number} opts.direction 禁用方向，1为禁用未来，-1为禁用以前。
  *  @param {Number} opts.span 结尾日期浮动数，1 向后推1天开始禁用规则，-1 向前推1天开始禁用规则；其他跨度以此类推。
  *  @param {Array} opts.dateTypeKeyValue 支持不同日期类型，根据字典value的数组处理。对应关系如下：['1', '2', '3', '4']对应['年', '月', '日', '秒']。
  *  @returns {Function} 禁止以后的日期函数
  *  @example :disabled-date="$LJSfc.pickerOptions()"
  * */
export function pickerOptions(opts = {}) {
  const useOpts = {
    dateType: '3',
    direction: 1,
    span: 0,
    dateTypeKeyValue: ['1', '2', '3', '4']
  };
  for (let key in opts) {
    useOpts[key] = opts[key];
  }

  const dayTime = 3600 * 1000 * 24;
  let year = null;
  let month = null;
  let oneTimeDisabledDate = 0; // 规则下的固定量
  switch(useOpts.dateType) {
    // 秒
    case useOpts.dateTypeKeyValue[3]:
      oneTimeDisabledDate += 1000 * useOpts.span;
      break;
    // 日
    case useOpts.dateTypeKeyValue[2]:
      oneTimeDisabledDate += dayTime * useOpts.span;
      break;
    // 月
    case useOpts.dateTypeKeyValue[1]:
      year = new Date(oneTimeDisabledDate).getFullYear();
      month = (new Date(oneTimeDisabledDate).getMonth() + 1) + useOpts.span;
      if (month < 0) {
        year += useOpts.span;
        month = 12;
      } else {
        month += 1;
      }
      oneTimeDisabledDate = new Date(`${year}-${month}`).getTime();
      break;
    // 年
    case useOpts.dateTypeKeyValue[0]:
      year = new Date(oneTimeDisabledDate).getFullYear();
      year += useOpts.span;
      oneTimeDisabledDate = new Date(`${year}-01`).getTime();
      break;
  }
  return (time) => {
    if (useOpts.direction === 1) {
      return time.getTime() > oneTimeDisabledDate + Date.now()
    } else if (useOpts.direction === -1) {
      return time.getTime() < oneTimeDisabledDate + Date.now()
    }
  };
}

/**
  *  日期区间控件动态设置最大跨度，解决element-plus日期区间，第一次点击日期，动态处理disabledDate禁用日期的跨度。
  *  @param {Number} day 天，默认30天
  *  @param {Number} times calendar-change方法的默认参数，日期[开始日期, 结束日期]
  *  @returns {Blob} 返回disabled-date数据
  *  @example
Vue:
<el-date-picker
  v-model="allSearch.query.date"
  style="width: 240px;"
  value-format="YYYY-MM-DD"
  type="daterange"
  placeholder="请选择"
  :editable="false"
  :clearable="false"
  :disabled-date="disabledDate"
  @calendar-change="times => disabledDateCC(7, times)"
  @visible-change="tag => disabledDateVC(7, tag)"
></el-date-picker>

JS:
// 表格搜索条件
allSearch: {
  query: {
    pageNum: 1,
    pageSize: 10,
    shopType: ['1'],
    date: this.$LJSdate.initSearchDate(1),
    dateTemp: null, // 处理区间日期，带禁用跨度时，用于备份
  },
  queryReal: {}
},
disabledDate: this.$LJSfc.pickerOptionsDynamic(7), // 区间日期默认可选范围

Function:
// calendar-change：当日历所选的日期更改时触发
disabledDateCC(day, times) {
  this.disabledDate = this.$LJSfc.pickerOptionsDynamic(day, times);
},
// visible-change：当日历卡展开收起时触发
disabledDateVC(day, tag) {
  if (tag) {
    this.allSearch.query.dateTemp = this.allSearch.query.date;
    this.allSearch.query.date = [];
    this.disabledDate = this.$LJSfc.pickerOptionsDynamic(day);
  } else {
    if (this.allSearch.query.date.length === 0) {
      this.allSearch.query.date = this.allSearch.query.dateTemp;
    }
  }
},
  * */
let trendsDisabledDate = 0; // 根据点击的第一个日期，控制日期区间是否可选
export function pickerOptionsDynamic(day = 30, times) {
  if (times) {
    trendsDisabledDate = D.formatTime(times[0], '{y}-{m}-{d}'); // 点击选择的日期
  } else {
    trendsDisabledDate = 0;
  }
  const stepTime = 3600 * 1000 * 24 * day;
  return (time) => {
    if (trendsDisabledDate === 0) {
      return time.getTime() > Date.now() || time.getTime() < trendsDisabledDate;
    } else {
      const max = new Date(trendsDisabledDate).getTime() + stepTime - 3600*1000*24;
      const min = new Date(trendsDisabledDate).getTime() - stepTime;
      if (max >= Date.now()) {
        return time.getTime() > Date.now() || time.getTime() < min;
      } else {
        return time.getTime() > max || time.getTime() < min;
      }
    }
  };
}

export default {
  numCheck,
  numBlurCheck,
  numEnCheck,
  numDxsCheck,
  downloadBlobData,
  pickerOptions,
  pickerOptionsDynamic
};
