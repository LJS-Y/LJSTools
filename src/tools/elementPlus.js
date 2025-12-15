/** 
 * @module elementPlus
 * @description elementPlus相关处理方法
 *  */
import { markRaw } from 'vue';
import {
  ElMessageBox
} from 'element-plus';
import {
  Warning
} from '@element-plus/icons-vue'

/**
 * ElMessageBox封装，用于删除时的提示框。
 * @param {string} n 数字
 * @returns {string} 补零后的数字
 * @example
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
 *  */
export function delMessageBox({
  type = 'warning',
  icon = '',
  title = '系统提示',
  message,
  showCancelButton = true,
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  center = false,
  overflow = false,
  draggable = false,
  appendTo,
  customStyle = {},
  doSomething = () => {},
  cancelDoSomething = () => {},
}) {
  ElMessageBox({
    icon: icon === '' ? markRaw(Warning) : icon,
    type,
    title,
    message,
    showCancelButton,
    confirmButtonText,
    cancelButtonText,
    center,
    overflow,
    draggable,
    appendTo,
    customStyle,
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        doSomething();
        done()
        return
      }
      cancelDoSomething();
      done()
    },
  }).catch(()=>{});
}

export default {
  delMessageBox,
};
