
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
      exhibitionInfoStatus: null,
      registration_status: [
        {
          dictLabel: '未开始',
          dictValue: 0,
        },
        {
          dictLabel: '进行中',
          dictValue: 1,
        },
        {
          dictLabel: '已结束',
          dictValue: 2,
        },
        {
          dictLabel: '不可报名',
          dictValue: 3,
        },
        {
          dictLabel: '异常数据',
          dictValue: 4,
        }
      ],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    async initData() {
      setTimeout(() => {
        this.exhibitionInfoStatus = 2
      }, 2000)
    },
  }
};