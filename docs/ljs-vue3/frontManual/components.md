# 组件
## svg

```vue
<svg-icon class="icon" iconName="absent"></svg-icon>
```

## Editor

未变更。

## FileUpload

```vue
<file-upload
  :limit="10"
  :fileSize="50"
  v-model="form.data.profileUploadList"
/>
```

## ImageUpload

```vue
<image-upload
  :limit="10"
  :fileSize="10"
  :dataType="false"
  @getFileList="getFormFileList"
  v-model="form.data.defectAttrList"
/>
```

## ExcelImport

```vue
<el-col :span="1.5" v-hasPermi="['ywpt:ywptInputData:import']">
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

