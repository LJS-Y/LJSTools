# 框架组件
框架内置组件。

## svg(显示器)
请将svg文件存储在：

@/assets/icons/svg 下。

```vue
<svg-icon class="icon" iconName="absent"></svg-icon>
```
#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| iconName | String | √ | | svg文件名称。 |

## pagination(分页)

```vue
<pagination
  v-if="total > 0"
  :total="total"
  v-model:page="queryParams.pageNum"
  v-model:limit="queryParams.pageSize"
  @pagination="getList"
/>
```

```js
total: 0,
queryParams: {
  pageNum: 1,
  pageSize: 10,
},
```
#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| total | Number | √ | | 总数。 |
| v-model:page | Number | × | 1 | 页码。 |
| v-model:limit | Number | × | 10 | 每页条数。 |
| pageSizes | Array | × | [10, 20, 30, 50] | 每页显示个数选择器的选项设置。 |
| layout | String | × | prev, pager, next, sizes, total | 组件布局，子组件名用逗号分隔。可参考el-pagination |
| background | Boolean | × | true | 是否为分页按钮添加背景色。可参考el-pagination |
| note | String | × | | 表格左下角注释文字 |


## Editor(编辑器)

未变更。

## FileUpload(文件上传)

```vue
<file-upload
  :limit="10"
  :fileSize="50"
  v-model="form.data.profileUploadList"
/>
```
#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| v-model | String, Array | √ | | 附件。 |
| limit | Number | × | 5 | 文件数量限制。 |
| fileSize | Number | × | 5 | 大小限制(MB)。 |
| fileType | Array | × | ['doc', 'docx', 'xlsx', 'rar', 'zip', 'pdf', 'png', 'jpg', 'jpeg'] | 文件类型。 |
| isShowTip | Boolean | × | true | 是否显示提示。 |
| uploadUrl | String | × | import.meta.env.PUBLIC_API_URL + '/common/upload' | 上传调用的接口。 |
| dataType | Boolean | × | true | 数据格式。若依格式(默认格式)：true；列表格式：false。false时返回一个子组件监听getFileList(list: Array)，list包含name,url,fullUrl |

## ImageUpload(图片上传)

```vue
<image-upload
  :limit="10"
  :fileSize="10"
  :dataType="false"
  @getFileList="getFormFileList"
  v-model="form.data.defectAttrList"
/>
```
#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| v-model | String, Array | √ | | 附件。 |
| limit | Number | × | 5 | 文件数量限制。 |
| fileSize | Number | × | 5 | 大小限制(MB)。 |
| fileType | Array | × | ['doc', 'docx', 'xlsx', 'rar', 'zip', 'pdf', 'png', 'jpg', 'jpeg'] | 文件类型。 |
| isShowTip | Boolean | × | true | 是否显示提示。 |
| uploadUrl | String | × | import.meta.env.PUBLIC_API_URL + '/common/upload' | 上传调用的接口。 |
| dataType | Boolean | × | true | 数据格式。若依格式(默认格式)：true；列表格式：false。false时返回一个子组件监听getFileList(list: Array)，list包含name,url,fullUrl |

## FilePreview(文件回显)

```vue
<FilePreview
  :files="files"
/>
```

```js
files: [
  {
    name: '测试word_20250429090820A003.docx',
    url: 'http://localhost:8080/profile/upload/2025/04/29/测试word_20250429090820A003.docx'
  },
  {
    name: '测试word_20250429090820A001.pdf',
    url: 'http://localhost:8080/profile/upload/2025/04/29/测试word_20250429090820A001.pdf'
  },
],
```
#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| files | Array | √ | | 文件数组。 |
| fileNameNumber | Number | × | 20 | 文件名称字数，多余的名称会被...替代。 |


## ExcelImport(Excel导入)

```vue
<el-col :span="1.5" v-hasPermi="['ywpt:***:import']">
  <el-button
    type="info"
    @click="handleImport"
  ><el-icon class="el-icon--left"><Download /></el-icon>导入</el-button>
</el-col>
<ExcelImport
  v-model="upload.open"
  title="数据导入"
  :downloadUrl="upload.downloadUrl"
  downloadText="数据导入模板"
  :url="upload.url"
  :doSomething="getList">
</ExcelImport>
```

```js
export default {
  data() {
    return {
      // 导入参数
      upload: {
        // 是否显示弹出层（导入）
        open: false,
        // 下载模板的地址
        downloadUrl: '/***/***/importTemplate',
        // 上传的地址
        url: import.meta.env.VITE_APP_API_URL + '/***/***/importData',
      },
    };
  },
  methods: {
    /** 导入按钮操作 */
    handleImport() {
      this.upload.open = true;
    },
  }
};
```
#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| v-model | Boolean | √ | | 是否打开上传组件。 |
| title | String | × | 导入 | 上传弹框title。 |
| downloadUrl | String | √ | | 下载模板的地址。 |
| downloadText | String | × | 导入模版 | 下载模板的文件名称。 |
| url | String | √ | | 上传的地址。 |
| doSomething | Function | × | 文件上传成功后调用。 |
