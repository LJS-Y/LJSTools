

import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
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
    };
  },
  created() {
    this.initData();
  },
  methods: {
    // 初始化数据
    async initData() {
    },
    downloadPdf() {
      const list = [{"children":null,"path":"WorkIndex","name":"WorkIndex","open":false,"meta":{"title":"工作台","icon":"icon-home-4-line","kjIcon":"icon-home-4-line","keepAlive":false,"openType":"1","requireAuth":true,"isFrame":false},"menuId":1},{"children":[{"children":null,"path":"UserReview2","name":"/UserReview2","open":false,"meta":{"title":"测试菜单","icon":"icon-menu_dot","kjIcon":"","keepAlive":false,"openType":"1","requireAuth":true,"isFrame":false,"hidden":false},"menuId":3}],"path":"1","name":"1","open":false,"meta":{"title":"测试目录","icon":"icon-group-3-line","kjIcon":"","keepAlive":true,"openType":"1","requireAuth":true,"isFrame":false,"hidden":false},"menuId":2},{"children":null,"path":"UserReview","name":"/UserReview","open":false,"meta":{"title":"人员管理","icon":"icon-group-3-line","kjIcon":"1","keepAlive":false,"openType":"1","requireAuth":true,"isFrame":false,"hidden":false},"menuId":4},{"children":null,"path":"http://62.234.123.172:64580/dataCollectionGovernance/dashboard","name":"Http://62.234.123.172:64580/dataCollectionGovernance/dashboard","open":false,"meta":{"title":"数据申报","icon":"icon-database-2-line","kjIcon":"2","keepAlive":true,"openType":"1","requireAuth":true,"isFrame":true,"hidden":false},"menuId":5},{"children":null,"path":"ProjectDeclare","name":"/ProjectDeclare","open":false,"meta":{"title":"项目申报","icon":"icon-file-upload-line","kjIcon":"3","keepAlive":true,"openType":"1","requireAuth":true,"isFrame":false,"hidden":false},"menuId":6},{"children":null,"path":"Exhibition","name":"/Exhibition","open":false,"meta":{"title":"我的展会","icon":"icon-earth-line","kjIcon":"5","keepAlive":true,"openType":"1","requireAuth":true,"isFrame":false,"hidden":false},"menuId":7},{"children":null,"path":"WineManage","name":"/WineManage","open":false,"meta":{"title":"我的酒款","icon":"icon-nianchan","kjIcon":"4","keepAlive":true,"openType":"1","requireAuth":true,"isFrame":false,"hidden":false},"menuId":8},{"children":null,"path":"WinePlot","name":"/WinePlot","open":false,"meta":{"title":"我的地块","icon":"icon-road-map-line","kjIcon":"7","keepAlive":true,"openType":"1","requireAuth":true,"isFrame":false,"hidden":false},"menuId":9},{"children":null,"path":"https://nxputaocenter.com/wine-traceSource-ui/baseData/base","name":"Https://nxputaocenter.com/wine-traceSource-ui/baseData/base","open":false,"meta":{"title":"东麓溯源","icon":"icon-flag-line","kjIcon":"6","keepAlive":true,"openType":"1","requireAuth":true,"isFrame":true,"hidden":false},"menuId":10},{"children":null,"path":"UserInfo","name":"UserInfo","open":false,"meta":{"title":"账号信息","icon":"icon-account-circle-line","kjIcon":"icon-home-4-line","keepAlive":false,"openType":"1","requireAuth":true,"isFrame":false},"menuId":11}]
      const parents = this.$LJSbase.getTreeParents({
        data: list,
        value: 4,
        key: 'menuId'
      });
      console.log(parents);
      
    }
  }
};