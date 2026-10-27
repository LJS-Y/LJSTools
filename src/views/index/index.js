

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
      this.downloadPdf()
    },
    downloadPdf() {
      const list = [{"createBy":"admin","createTime":"2025-10-09 10:28:09","params":{"@type":"java.util.HashMap"},"dictCode":219,"dictSort":0,"dictLabel":"红酒","dictValue":"1","dictType":"wx_c_source","listClass":"primary","isDefault":"N","status":"0","default":false},{"createBy":"admin","createTime":"2025-10-09 10:28:18","params":{"@type":"java.util.HashMap"},"dictCode":220,"dictSort":0,"dictLabel":"东麓的约定","dictValue":"2","dictType":"wx_c_source","listClass":"success","isDefault":"N","status":"0","default":false},{"createBy":"admin","createTime":"2026-03-31 10:13:07","params":{"@type":"java.util.HashMap"},"dictCode":329,"dictSort":99,"dictLabel":"默认","dictValue":"99","dictType":"wx_c_source","listClass":"danger","isDefault":"N","status":"0","remark":"默认：应用场景为系统级的业务处理；所有商品无需积分、金额，由系统发放。如：积分商品；配置为默认，则该商品不在任何C端显示，可用于活动奖励触发使用。","default":false}]
      const wx_c_source = this.$LJSbase.dictDataChange({
        data: list,
        del: ['1'],
      });
      console.log(wx_c_source);
      
    }
  }
};