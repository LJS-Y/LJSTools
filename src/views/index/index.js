export default {
  name: 'Index',
  data() {
    return {
      allSearch: {
        query: {
          date: []
        }
      },
      dialogVisible: false
    };
  },
  created() {
    this.initData();
  },
  methods: {

    // 初始化数据
    async initData() {
    },
    aaaa() {
      this.dialogVisible = true;
    },
    bbb() {
      this.$LJSEl.delMessageBox({
        title: '系统提示1',
        message: `是否确认删除的数据项？`,
        draggable: true,
        doSomething: () => {
          
        }
      });
    }
  }
};