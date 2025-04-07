import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/router/callback'; // permission control

import {
  vLoading,
  ElPagination,
  ElDatePicker,
  ElFormItem,
  ElTag,
  ElUpload,
  ElButton,
  ElDialog
} from 'element-plus';
import 'element-plus/dist/index.css';

import tools from '@/tools';

const app = createApp(App);
app.directive('loading', vLoading);
app.component(ElPagination.name, ElPagination);
app.component(ElDatePicker.name, ElDatePicker);
app.component(ElFormItem.name, ElFormItem);
app.component(ElTag.name, ElTag);
app.component(ElUpload.name, ElUpload);
app.component(ElButton.name, ElButton);
app.component(ElDialog.name, ElDialog);

app.use(tools);

app.use(router);
app.mount('#app');
