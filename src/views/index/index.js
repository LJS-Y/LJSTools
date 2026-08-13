

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
      const fileName = `测评结果`;
      const fileList = document.getElementsByClassName('pdfRef');
      this.htmlPdf({
        html2Canvas: html2Canvas, // import html2Canvas from 'html2canvas';
        JsPDF: JsPDF, // import JsPDF from 'jspdf';
      }, fileName, document.querySelector('#pdfRef'), fileList, false, (e) => {
        // 成功
        if (e === 'htmlPdfFinish') {

        }
        // 失败
        else {
          console.error(e);
        }
      });
    }
  }
};