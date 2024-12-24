import LJSbase from '@/tools/base.js';
export default {
  name: 'DateRange',
	props: {
		// 日期区间数据
		modelValue: Array,
		// 日期类型
		dateType: {
      type: String,
      default: 'date'
    },
		// 默认类型，默认值：日。字典value
		formItemLabel: {
      type: String,
      default: '日期'
    },
		// 清除按钮
		clearable: {
      type: Boolean,
      default: true
    },
    disabledDate_start: {
      type: Function,
      default: () => {}
    },
    disabledDate_end: {
      type: Function,
      default: () => {}
    },

    // 开始日期事件。同 el-date-picker 事件 change
    change_start: {
      type: Function,
      default: (val) => {}
    },
    // 结束日期事件。同 el-date-picker 事件 change
    change_end: {
      type: Function,
      default: (val) => {}
    },
    // 开始日期事件。同 el-date-picker 事件 visible-change
    visibleChange_start: {
      type: Function,
      default: () => {}
    },
    // 结束日期事件。同 el-date-picker 事件 visible-change
    visibleChange_end: {
      type: Function,
      default: () => {}
    },
	},
  data() {
    return {
      // 日期参数
      opts: {
        startDate: null,
        endDate: null,
        valueFormat: 'YYYY-MM-DD'
      },
    }
  },
  watch: {
    modelValue: {
      handler(val) {
        if (!LJSbase.fieldCheck(this.modelValue) && this.modelValue.length >= 1) {
          this.opts.startDate = this.modelValue[0];
          this.opts.endDate = this.modelValue[1];
        } else {
          this.opts.startDate = null;
          this.opts.endDate = null;
        }
      },
      deep: true,
      immediate: true
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    // 切换日期
    dateChange() {
      if (this.opts.startDate === null || this.opts.endDate === null) {
        this.$emit('update:modelValue', [this.opts.startDate, this.opts.endDate]);
        return;
      }
      let start = this.opts.startDate;
      let end = this.opts.startDate;
      if (this.dateType !== 'year') {
        start = new Date(this.opts.startDate).getTime();
        end = new Date(this.opts.endDate).getTime();
      }
      if (Number(start) > Number(end)) {
        const temp = this.opts.startDate;
        this.opts.startDate = this.opts.endDate;
        this.opts.endDate = temp;
      }
      this.$emit('update:modelValue', [this.opts.startDate, this.opts.endDate]);
    },
    init() {
      this.dateTypeF();
    },
    // 日期类型切换
    dateTypeF() {
      switch(this.dateType)
      {
        case 'datetime':
          this.opts.valueFormat = 'YYYY-MM-DD HH:mm:ss';
          break;
        case 'date':
          this.opts.valueFormat = 'YYYY-MM-DD';
          break;
        case 'month':
          this.opts.valueFormat = 'YYYY-MM';
          break;
        case 'year':
          this.opts.valueFormat = 'YYYY';
          break;
      }
    },
    
    // let trendsDisabledDate = 0; // 根据点击的第一个日期，控制日期区间是否可选
    pickerOptionsDynamic(day = 30, times) {
      if (times) {
        trendsDisabledDate = D.formatTime(times[0], '{y}-{m}-{d}'); // 点击选择的日期
      } else {
        trendsDisabledDate = 0;
      }
      const stepTime = 3600*1000*24*day;
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
  }
}