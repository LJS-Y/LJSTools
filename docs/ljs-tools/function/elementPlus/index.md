# elementPlus相关（LJSEl）
## 说明
elementPlus相关（LJSEl），V3JS框架中常用的基础库。

### 1.ElMessageBox封装
用于删除时的提示框。

方法：delMessageBox({
  type: String,
  title: String,
  message: message,
  showCancelButton: Boolean,
  confirmButtonText: String,
  cancelButtonText: String,
  customStyle: Object,
  doSomething: Function,
})
##### 示例
```js
this.$LJSEl.delMessageBox({
  title: '系统提示1',
  message: `是否确认删除的数据项？`,
  doSomething: () => {
    this.$store.commit('loadingStore', {
      tag: true,
      text: '删除中....'
    });
    listDel(ids).then((res) => {
      if (res.code === 200) {
        this.getList();
        this.$modal.msgSuccess('删除成功');
      }
      this.$store.commit('loadingStore', {
        tag: false,
        text: '删除中....'
      });
    }).catch(()=>{
      this.$store.commit('loadingStore', {
        tag: false,
        text: '删除中....'
      });
    });
  }
});
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| o.type | String | × | warning | 提示框类型，适用ElMessageBox属性type。 |
| o.title | String | × | 系统提示 | 提示框标题。 |
| o.message | String | √ | | 提示框内容。 |
| o.showCancelButton | Boolean | × | true | 是否显示取消按钮。 |
| o.confirmButtonText | String | × | 确定 | 确定按钮的文本内容。 |
| o.cancelButtonText | String | × | 取消 | 取消按钮的文本内容。 |
| o.customStyle | Object | × | | ElMessageBox属性custom-style。 |
| o.doSomething | Function | × | | 确定后做什么事情。 |
