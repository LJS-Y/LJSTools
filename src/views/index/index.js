
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
      console.log(this.$LJSprivacy.desensitizationStr({
        str: '640323198906252017',
        keepStart: 3,
        keepEnd: 4,
      }));
      console.log(this.$LJSprivacy.desensitizationStr({
        str: '宁夏回族自治区银川市金凤区江南赋珑玺湾',
        keepStart: 5,
        keepEnd: 0,
      }));
      console.log(this.$LJSprivacy.desensitizationStr({
        str: '宁夏湾',
      }));
    },
  }
};