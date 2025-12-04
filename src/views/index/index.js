
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
    getAAA() {
      this.$LJSbase.downloadImage({_this: this, url: 'http://192.168.34.29:8081/api/file/download/39b3e711b5ce43388e967064295dc2b5?Authorization=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJoZWxhbmhvbmdqaXV6aHVhbmciLCJsb2dpbl91c2VyX2tleSI6ImUwZGUwYzI3LTdiNWMtNDM4NC05YmYwLThmNzg4ZjBjYWY5YSJ9.9i4U-p1cXkC0bTRe8DGPKCUbRP5YQLZzTGX0KwbmtJOevZZga7BWsT2BsS9xAwFgZ6oLhdoUYLHSepYk6tkk9Q'})
    }
  }
};