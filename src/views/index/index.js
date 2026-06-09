
import {
  ElInput
} from 'element-plus';
export default {
  name: 'Index',
  components: {
    ElInput
  },
  data() {
    return {
      // 表格搜索条件
      tableSearch: {
        query: {
          date: this.$LJSdate.initSearchDate(7),
        },
        queryReal: {}
      },
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    async initData() {
      console.log(this.$LJSsm.SM4Util.generateKey());
      // console.log(this.$LJSdate.initSearchDateQj({
      //   date: '2025-12-03',
      // }));
      // console.log(this.$LJSdate.initSearchDateQj({
      //   date: '2025-11-03',
      //   type: 'month',
      // }));
      // console.log(this.$LJSdate.initSearchDateQj({
      //   type: 'month',
      // }));
      // console.log(this.$LJSdate.initSearchDateQj({
      //   date: '2025-12-03',
      //   type: 'year',
      //   n: 2,
      // }));
    },
  }
};