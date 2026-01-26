
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
      form: {
        goodsPrice: '',
        goodsPrice2: '',
        goodsPrice3: ''
      },
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    async initData() {
      console.log(this.$LJSprivacy.desensitizationStr({str: '张三'}));
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