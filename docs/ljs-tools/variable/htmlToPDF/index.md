# html转pdf下载（htmlPdf）
## 说明
html转pdf下载（htmlPdf），V3JS框架中常用的基础库。

### 1.初始化websocket

方法：htmlPdf(plugin: Number, title: Number, html: Number, fileList: Number, type: Number)

##### 示例
```vue
<div @click="downloadPdf" class="one">下载</div>
<div class="mainBox pdfRef" id="pdfRef">测试内容</div>
```
```js
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';
export default {
  methods: {
    // 下载pdf
    downloadPdf() {
      const fileName = `测评结果`;
      const fileList = document.getElementsByClassName('pdfRef');
      this.htmlPdf({
        html2Canvas: html2Canvas, // import html2Canvas from 'html2canvas';
        JsPDF: JsPDF, // import JsPDF from 'jspdf';
      }, fileName, document.querySelector('#pdfRef'), fileList);
    },
  },
};
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| plugin.html2Canvas | Any | √ | | 依赖，import html2Canvas from 'html2canvas';推荐版本1.4.1。 |
| plugin.JsPDF | Any | √ | | 依赖，import JsPDF from 'jspdf';推荐版本2.5.1。 |
| title | String | √ | | 下载后的文件名称。 |
| html | Dom | √ | | Dom，例如：document.querySelector('#pdfRef')。 |
| fileList | Dom | × | | 多节点，例如：document.getElementsByClassName('pdfRef')。 |
| type | Boolean | × | | 默认纵版，true时为横版。 |
