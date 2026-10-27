import LJSbase from '@/tools/base.js';
import LJSdate from '@/tools/date.js';
import fc from '@/tools/form.js';
export default {
  name: 'DatetypeChooseDateRange',
	props: {
		// 日期区间数据
		date: Array,
		// 默认类型，默认值：日。字典value
		dictValue: String,
		// 日期类型字典数据
		datetypeData: Array,
		// 清除按钮
		clearable: {
      type: Boolean,
      default: false
    },
    disabledDate: {
      type: Function,
      default: () => {}
    },
		// 字典key值对应的value值，按照年月日的顺序，默认年为1日为3
		dateTypeKeyValue: {
      type: Array,
      default: ['1', '2', '3']
    },
		// 日期区间值切换规则：0跟随传入日期；1每次切换取当月、当年；
		dateSwitchRule: {
      type: Number,
      default: 0
    },
		// 默认类型，默认值：日。字典value
		formItemLabel: {
      type: String,
      default: '日期区间'
    },
		// 日期类型 - 不显示项，根据value处理
		noType: {
      type: Array,
      default: () => {
        return []
      }
    },
		// 中间符
    symbol: {
      type: String,
      default: '~'
    },
	},
  data() {
    return {
      LJSfc: fc,
      date_type: [],
      // 日期参数
      opts: {
        startDate: null,
        endDate: null,
        dateType: 'date', // 日期类型，年year，月month，日date
        dateTypeTag: true, // 日期控件是否显示
        valueFormat: 'YYYY-MM-DD'
      },
    }
  },
  computed: {
    dateType: {
      get() {
        return this.dictValue
      },
      set(val) {
        this.$emit('update:dictValue', val)
      }
    },
  },
  watch: {
    dateType: {
      handler(val) {
        this.dateTypeF(this.dateType);
      },
      deep: true,
      immediate: true
    },
    datetypeData: {
      handler(val) {
        if (this.datetypeData !== undefined && this.datetypeData !== null && this.datetypeData.length !== 0) {
          this.init();
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
        this.$emit('update:date', [this.opts.startDate, this.opts.endDate]);
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
      this.$emit('update:date', [this.opts.startDate, this.opts.endDate]);
    },
    init() {
      this.initData();
    },
    // 初始化数据
    async initData() {
      const res1 = this.datetypeData;
      if (res1) {
        this.noType.forEach((value) => {
          const nums = res1.length;
          for (let i = 0; i < nums; i++) {
            const item = res1[i];
            if (value === item.dictValue) {
              res1.splice(i, 1);
              break;
            }
          }
        });
        this.date_type = res1;
      }
      if (!LJSbase.fieldCheck(this.date) && this.date.length === 2) {
        this.opts.startDate = this.date[0];
        this.opts.endDate = this.date[1];
      }
      this.dateTypeF(this.dateType);
    },
    // 日期类型切换
    dateTypeF(val) {
      this.opts.dateTypeTag = false;
      this.dateType = val;
      let dateValue = [];
      let date = null;
      switch(val) {
        case this.dateTypeKeyValue[3]:
          this.opts.dateType = 'datetime';
          this.opts.valueFormat = 'YYYY-MM-DD HH:mm:ss';
          break;
        case this.dateTypeKeyValue[2]:
          this.opts.dateType = 'date';
          this.opts.valueFormat = 'YYYY-MM-DD';
          break;
        case this.dateTypeKeyValue[1]:
          this.opts.dateType = 'month';
          this.opts.valueFormat = 'YYYY-MM';
          break;
        case this.dateTypeKeyValue[0]:
          this.opts.dateType = 'year';
          this.opts.valueFormat = 'YYYY';
          break;
      }
      if (!LJSbase.fieldCheck(this.date) && this.date.length === 2) {
        if (this.dateSwitchRule === 0) {
          date = [this.date[0], this.date[1]];
        } else if (this.dateSwitchRule === 1) {
          date = LJSdate.initSearchDateQj(this.opts.dateType);
        }
        switch(val) {
          case this.dateTypeKeyValue[3]:
            this.opts.startDate = LJSdate.formatTime(date[0], '{y}-{m}-{d} {h}:{i}:{s}');
            this.opts.endDate = LJSdate.formatTime(date[1], '{y}-{m}-{d} {h}:{i}:{s}');
            break;
          case this.dateTypeKeyValue[2]:
            this.opts.startDate = LJSdate.formatTime(date[0], '{y}-{m}-{d}');
            this.opts.endDate = LJSdate.formatTime(date[1], '{y}-{m}-{d}');
            break;
          case this.dateTypeKeyValue[1]:
            this.opts.startDate = LJSdate.formatTime(date[0], '{y}-{m}');
            this.opts.endDate = LJSdate.formatTime(date[1], '{y}-{m}');
            break;
          case this.dateTypeKeyValue[0]:
            this.opts.startDate = date[0].toString();
            this.opts.endDate = date[1].toString();
            break;
        }
        this.dateValue = dateValue;
      }
      this.$emit('update:date', [this.opts.startDate, this.opts.endDate]);
      setTimeout(() => {
        this.opts.dateTypeTag = true;
      }, 0);
    }
  }
}