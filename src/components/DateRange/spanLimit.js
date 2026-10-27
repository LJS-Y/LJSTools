import LJSbase from '../../tools/base';
import LJSdate from '../../tools/date';
const oneDay = 3600 * 1000 * 24;
// 禁用逻辑
export function pickerOptionsDynamic(_this, day = 30, chooseTime) {
  if (chooseTime) {
    _this.trendsDisabledDate = LJSdate.formatTime(chooseTime, '{y}-{m}-{d}'); // 点击选择的日期
  } else {
    _this.trendsDisabledDate = 0;
  }
  const stepTime = 3600 * 1000 * 24 * day;
  return (time) => {
    if (_this.trendsDisabledDate === 0) {
      return time.getTime() > Date.now() || time.getTime() < _this.trendsDisabledDate;
    } else {
      const max = new Date(_this.trendsDisabledDate).getTime() + stepTime - 3600 * 1000 * 24;
      const min = new Date(_this.trendsDisabledDate).getTime() - stepTime;
      if (max >= Date.now()) {
        return time.getTime() > Date.now() || time.getTime() < min;
      } else {
        return time.getTime() > max || time.getTime() < min;
      }
    }
  };
}

export function visibleChange_start(query, _this, day, tag) {
  if (tag) {
    _this.tempDate = query.date;
    // 日期存在
    // if (!LJSbase.fieldCheck(query.date) && query.date.length > 0) {
    //   // 0不存在，1存在
    //   if (LJSbase.fieldCheck(query.date[0]) && !LJSbase.fieldCheck(query.date[1])) {
    //     query.disabledDate_start = pickerOptionsDynamic(_this, day, query.date[1]);
    //   }
    //   // 0存在，1存在
    //   if (!LJSbase.fieldCheck(query.date[0]) && !LJSbase.fieldCheck(query.date[1])) {
    //     query.disabledDate_start = pickerOptionsDynamic(_this, day);
    //   }
    // }
  } else {
    // 日期存在
    if (!LJSbase.fieldCheck(query.date) && query.date.length > 0) {
      // 0存在，1存在
      if (!LJSbase.fieldCheck(query.date[0]) && !LJSbase.fieldCheck(query.date[1])) {
        let start = new Date(query.date[0]).getTime();
        let end = new Date(query.date[1]).getTime();
        if (Math.abs(start - end) / (oneDay) >= day) {
          if (_this.tempDate[1] === query.date[1]) {
            query.date[1] = LJSdate.formatTime(start + oneDay * (day - 1), '{y}-{m}-{d}');
          } else {
            query.date[0] = LJSdate.formatTime(end - oneDay * (day - 1), '{y}-{m}-{d}');
          }
        }
      }
    }
  }
}


export function visibleChange_end(query, _this, day, tag) {
  if (tag) {
    _this.tempDate = query.date;
    // 日期存在
    // if (!LJSbase.fieldCheck(query.date) && query.date.length > 0) {
    //   // 0存在，1不存在
    //   if (!LJSbase.fieldCheck(query.date[0]) && LJSbase.fieldCheck(query.date[1])) {
    //     query.disabledDate_end = pickerOptionsDynamic(_this, day, query.date[0]);
    //   }
    //   // 0存在，1存在
    //   if (!LJSbase.fieldCheck(query.date[0]) && !LJSbase.fieldCheck(query.date[1])) {
    //     query.disabledDate_end = pickerOptionsDynamic(_this, day);
    //   }
    // }
  } else {
    // 日期存在
    if (!LJSbase.fieldCheck(query.date) && query.date.length > 0) {
      // 0存在，1存在
      if (!LJSbase.fieldCheck(query.date[0]) && !LJSbase.fieldCheck(query.date[1])) {
        let start = new Date(query.date[0]).getTime();
        let end = new Date(query.date[1]).getTime();
        if (Math.abs(start - end) / (oneDay) >= day) {
          if (_this.tempDate[0] === query.date[0]) {
            query.date[0] = LJSdate.formatTime(end - oneDay * (day - 1), '{y}-{m}-{d}');
          } else {
            query.date[1] = LJSdate.formatTime(start + oneDay * (day - 1), '{y}-{m}-{d}');
          }
        }
      }
    }
  }
}

export default {
  pickerOptionsDynamic,
  visibleChange_start,
  visibleChange_end,
};
