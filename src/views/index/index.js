
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
      console.log(this.$LJSprivacy.desensitizationName('姚龙飞'));
      console.log(this.$LJSprivacy.desensitizationPhone('17309510820'));
      console.log(this.$LJSprivacy.desensitizationIdCard('640323198906252017'));
    },
  }
};