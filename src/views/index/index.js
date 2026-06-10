
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
      const sm4Key = this.$LJSsm.SM2Util.encrypt('810c240db66ee3b2b0740e694eace50b', '3059301306072a8648ce3d020106082a811ccf5501822d03420004cf254826a8360e5f8e573fb4c7fc1e8ac917bc13ac8b24e37f40d554b6003524bdb1f8e59e1b53652fabe6245808498a7f476b1ba859e8b7e2bacb2ca6da5804')
      
      console.log(sm4Key);
      
      // const tempData = {
      //   a: 1,
      //   b: 2,
      // }
      // const sm4Key = this.$LJSsm.SM4Util.generateKey()
      // console.log(sm4Key);
      // const newData = this.$LJSsm.SM4Util.encrypt(JSON.stringify(tempData), sm4Key)
      // console.log(newData);
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