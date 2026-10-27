export default {
  name: 'TextAbbreviation',
	props: {
		// 传入数据
		data: [String],
		// 模式。line：行截断；last：尾截断；
		mode: {
      type: String,
      default: 'line'
    },
		// 最大行数，超过则隐藏多余部分，并显示展开按钮。
		max: {
      type: Number,
      default: 3
    },
		// 单位，应用于本组件。可使用rem。
		unit: {
      type: String,
      default: 'px'
    },
		// 行高。
		lineHeight: {
      type: Number,
      default: 30
    },
		// 字体大小。
		fontSize: {
      type: Number,
      default: 14
    },
	},
  data() {
    return {
      useMax: -1,
      maxLine: 0,
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    expandRetract() {
      if (this.useMax === this.maxLine) {
        this.useMax = this.max;
      } else {
        this.useMax = this.maxLine;
      }
    },

    init() {
      const lineHeight = this.$refs[`textAbbreviation${this.mode}Content`].offsetHeight; // px
      let pxLine = null;
      if (this.unit === 'rem') {
        pxLine = this.remToPx(this.lineHeight);
      } else {
        pxLine = this.lineHeight;
      }
      this.maxLine = lineHeight / pxLine;
      if (this.maxLine > this.max) {
        this.useMax = this.max;
      }
    },
    remToPx(rem) {
      const fontSize = document.documentElement.style.fontSize;
      let fontSizeNum = null;
      if (!this.fieldCheck(fontSize)) {
        fontSizeNum = fontSize.slice(0, fontSize.length - 2);
      }
      rem = rem * fontSizeNum;
      return rem;
    },

    /**
     * 字段判断：判断某个字段，是否为undefined、null、''。
     * @param {any} field 需要判断的字段
     * @returns {Boolean} 该字段是否为undefined || null || ''。
     * @example this.$LJSbase.fieldCheck(this.aaaa)
     */
    fieldCheck(field) {
      if (field === undefined || field === null || field === '') {
        return true;
      }
      return false;
    },
  }
}