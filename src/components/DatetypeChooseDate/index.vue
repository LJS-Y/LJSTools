<!--
 * @Author: ylf
 * @LastEditors: ylf
 * @description: ?
 * @updateInfo: 内容: 日期类型对应的日期选择器。
 * @Date: 2023-07-18 15:37
 * @LastEditTime: 2023-07-18 15:37
-->
<template>
  <el-form-item :label="formItemLabel" prop="date">
    <div class="frequency" :style="{
      '--dateTypeNum': date_type.length,
    }">
      <div class="one"
        :class="{ active: dateType === dict.dictValue }"
        @click="dateTypeF(dict.dictValue)"
        v-for="dict in date_type" :key="dict.dictValue">{{dict.dictLabel}}</div>
    </div>
    <transition name="frequencyDate">
      <div class="frequencyDate">
        <el-date-picker
          v-model="dateValue"
          style="width: 240px;"
          :value-format="opts.valueFormat"
          :type="opts.dateType"
          placeholder="请选择"
          :editable="false"
          :clearable="false"
          :disabled-date="disabledDate"
        ></el-date-picker>
      </div>
    </transition>
  </el-form-item>
</template>

<script>
import LJSdate from '@/tools/date.js';
import LJSfc from '@/tools/form.js';
import LJSnum from '@/tools/num.js';
export default {
  name: 'DatetypeChooseDate',
	props: {
		// 日期数据
		date: String,
		// 默认类型，默认值：日。字典value
		dictValue: String,
		// 日期类型字典数据
		datetypeData: Array,
		// 字典key值对应的value值，按照年月日的顺序，默认年为1日为3
		dateTypeKeyValue: {
      type: Array,
      default: ['1', '2', '3']
    },
		// form-item，label值
		formItemLabel: {
      type: String,
      default: '日期'
    },
		// 禁用日期，默认跨度为0
		disabledDateSpan: {
      type: Number,
      default: 0
    },
		// 日期类型 - 不显示项，根据value处理
		noType: {
      type: Array,
      default: () => {
        return []
      }
    },
	},
  data() {
    return {
      date_type: [],
      // 日期参数
      opts: {
        dateType: 'year', // 日期类型，年year，月month，日date
        dateTypeTag: true, // 日期控件是否显示
        valueFormat: 'yyyy'
      },
    }
  },
  computed: {
    disabledDate() {
      return LJSfc.pickerOptions(this.dateType, this.disabledDateSpan, this.dateTypeKeyValue);
    },
    dateType: {
      get() {
        return this.dictValue
      },
      set(val) {
        this.$emit('update:dictValue', val)
      }
    },
    dateValue: {
      get() {
        return this.date
      },
      set(val) {
        this.$emit('update:date', val)
      }
    }
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
  created() {
    this.init();
  },
  methods: {
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
      this.dateTypeF(this.dateType);
    },
    // 日期类型切换
    dateTypeF(val) {
      this.opts.dateTypeTag = false;
      let date = Date.now();
      this.dateType = val;
      let year = null;
      let month = null;
      switch(val) {
        // 实时
        case this.dateTypeKeyValue[3]:
        // 日
        case this.dateTypeKeyValue[2]:
          date += this.disabledDateSpan * 3600 * 1000 * 24;
          this.opts.dateType = 'date';
          this.opts.valueFormat = 'YYYY-MM-DD';
          this.dateValue = LJSdate.formatTime(date, '{y}-{m}-{d}');
          break;
        // 月
        case this.dateTypeKeyValue[1]:
          year = new Date(date).getFullYear();
          month = new Date(date).getMonth() + this.disabledDateSpan;
          if (month < 0) {
            year += this.disabledDateSpan;
            month = 12;
          } else {
            month += 1;
          }
          this.opts.dateType = 'month';
          this.opts.valueFormat = 'YYYY-MM';
          this.dateValue = LJSdate.formatTime(new Date(`${year}-${LJSnum.numberB0(month)}`), '{y}-{m}');
          break;
        // 年
        case this.dateTypeKeyValue[0]:
          year = new Date(date).getFullYear();
          year += this.disabledDateSpan;
          this.opts.dateType = 'year';
          this.opts.valueFormat = 'YYYY';
          this.dateValue = year.toString();
          break;
      }
      setTimeout(() => {
        this.opts.dateTypeTag = true;
      }, 0);
    }
  }
}
</script>

<style lang="scss" scoped>
.frequency{
		width: calc(32px * var(--dateTypeNum) + 10px * (var(--dateTypeNum) - 1));
		height: 32px;
		float: left;
		overflow: hidden;
		margin-right: 15px;
		.one{
			width: 32px;
			height: 32px;
			float: left;
			line-height: 30px;
			text-align: center;
			border: 1px solid #CCC;
			font-size: 12px;
			color: #666;
			border-radius: 50%;
			margin-right: 10px;
      box-sizing: border-box;
			cursor: pointer;
			&:last-child{
				margin-right: 0;
			}
			&.active{
				line-height: 28px;
				border: 2px solid #386DD8;
				color: #386DD8;
			}
		}
	}
	.frequencyDate{
		overflow: hidden;
		float: left;
		.oneDate{
			width: 130px;
			float: left;
		}
		.line{
			float: left;
			height: 32px;
			line-height: 30px;
			margin: 0 5px;
			color: #666;
		}
	}
	// 进入(显示)开始时和离开(隐藏)结束时效果
	.frequencyDate-enter,
	.frequencyDate-leave-to {
		// 设置透明度，0表示隐藏，1表示显示，我这里解释的并不是很对，这是css基础知识，大家可以在w3C中查找资料了解一下
		opacity: 0;
	}

	// 进入(显示)过程中和离开(隐藏)过程中的效果
	.frequencyDate-enter-active,
	.frequencyDate-leave-active {
		// 设置过渡持续时间
		transition: all .5s;
	}
</style>
