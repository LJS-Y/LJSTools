
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
    },
  }
};