export default {
  name: 'RightMenu',
	props: {
    modelValue: [Boolean],
    // 配置参数
    opts: {
      type: Object,
      default: () => {
        return {
          top: 0, // 定位 top
          left: 0, // 定位 left
          width: 0, // 菜单可视区域 宽
          height: 0, // 菜单可视区域 高
        }
      },
    },
    // 为 RightMenu 添加类名
    menuClass: {
      type: String,
      default: '',
    },
	},
  watch: {
    modelValue: {
      handler(val) {
        if (this.modelValue) {
          this.time = new Date().getTime();
          this.changePosition();
        }
      },
      deep: true,
      immediate: true
    },
    opts: {
      handler(val) {
        if (this.modelValue) {
          this.time = new Date().getTime();
          this.changePosition();
        }
      },
      deep: true,
      immediate: true
    },
  },
  data() {
    return {
      time: null,
      position: {
        top: 0,
        left: 0,
      }
    }
  },
  created() {
    this.initData();
  },
  methods: {
    // 处理位置，但不支持原生滚动条占位处理
    changePosition() {
      this.$nextTick(() => {
        const width = this.$refs.rightMenu.offsetWidth;
        const height = this.$refs.rightMenu.offsetHeight;
        const realWidth = width + this.opts.left;
        const realHeight = height + this.opts.top;
        if (realHeight > this.opts.height) {
          this.position.top = this.opts.height - height;
        } else {
          this.position.top = this.opts.top;
        }
        if (realWidth > this.opts.width) {
          this.position.left = this.opts.width - width;
        } else {
          this.position.left = this.opts.left;
        }
      });
    },
    // 初始化数据
    async initData() {
      window.addEventListener("click", () => {
        console.log(1111);
        const nowTime = new Date().getTime();
        const time = nowTime - this.time;
        if (time >= 100) {
          this.$emit('update:modelValue', false);
        }
      });
    },
    
  }
}