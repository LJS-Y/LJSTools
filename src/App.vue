<template>
  <div id="app">
    <!-- 组件 -->
    <!-- <LJSLoading>loading....</LJSLoading> -->

    <!-- <pagination
      v-if="table.total > 0"
      :total="table.total"
      v-model:page="tableSearch.query.pageNum"
      v-model:limit="tableSearch.query.pageSize"
      @pagination="getList"
    /> -->

    <!-- <DatetypeChooseDate
      v-model:date="tableSearch.query.date"
      v-model:dictValue="tableSearch.query.acquisitionFrequency"
      :datetypeData="datetypeData">
    </DatetypeChooseDate> -->

    <!-- <DatetypeChooseDateRange
      v-model:date="tableSearch.query.date"
      v-model:dictValue="tableSearch.query.acquisitionFrequency"
      :datetypeData="datetypeData">
    </DatetypeChooseDateRange> -->
    
    <!-- <dict-tag :options="datetypeData" value="2"/> -->

    <!-- <editor v-model="tableSearch.query.pageNum" :min-height="192" /> -->
    
    <!-- <particles></particles> -->

    <!-- {{ $LJSnum.numberB0(1) }} -->

    
    <!-- <div @click="downloadPdf" class="one">下载</div>
    <div class="mainBox pdfRef" id="pdfRef">
      发动机撒库拉封疆大吏
    </div> -->
    <!-- <DatetypeChooseDateRange
      v-model:date="tableSearch.query.date"
      v-model:dictValue="tableSearch.query.dateType"
      :datetypeData="acquisition_frequency"
      :dateTypeKeyValue="['1', '2', '3', '4']"
      :dateSwitchRule="1"
      :disabledDate="$LJSfc.pickerOptions()">
    </DatetypeChooseDateRange> -->
    
    <!-- <DatetypeChooseDate
      v-model:date="tableSearch.query.date"
      v-model:dictValue="tableSearch.query.acquisitionFrequency"
      :datetypeData="acquisition_frequency">
      </DatetypeChooseDate> -->
    
    <!-- <input v-model="tableSearch.query.pageNum" @input="$LJSfc.numDxsCheck({
      form: tableSearch.query,
      key: 'pageNum',
      zs: 2,
      ws: 2,
      fu: true
    })"> -->
    <!--<div @contextmenu.prevent="rightMenuF($event)" style="background-color: red; height: 910px;">弹出右键菜单的区域</div>
    ....
    <RightMenu v-model="rightMenu.show" :opts="rightMenu.opts" menuClass="aaaaaa">
      <div class="item" @click="tabCloseAll">菜单1</div>
      <div class="item" @click="tabCloseAll">菜单2</div>
      <div class="item" @click="tabCloseAll">菜单3</div>
    </RightMenu>-->
    
    <!-- <DatetypeChooseDate
      formItemLabel="采集频率"
      v-model:date="tableSearch.query.statDate"
      v-model:dictValue="tableSearch.query.statType"
      :dateTypeKeyValue="['3', '2', '1', '0']"
      :datetypeData="date_type"
      :disabledDateSpan="-1">
    </DatetypeChooseDate> -->
    
    <!-- <TextAbbreviation
      mode="last"
      :data="data">
    </TextAbbreviation> -->
    
    <!-- <el-date-picker
      v-model="data"
      value-format="YYYY-MM-DD"
      type="date"
      placeholder="请选择"
      :editable="false"
      :clearable="false"
      :disabled-date="$LJSfc.pickerOptions({
        direction: -1,
        span: 1,
      })"
      style="width: 230px;"
    ></el-date-picker> -->
    <!-- <el-date-picker
      v-model="allSearch.query.date"
      type="year"
      :disabled-date="$LJSfc.pickerOptions({
        dateType: '1',
        span: 2
      })"
    /> -->
    <div @click="aaaa">弹窗</div>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
    >
      <span>This is a message</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="bbb">
            Confirm
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { uid } from 'uid';
export default {
  data() {
    return {
      allSearch: {
        query: {
          date: []
        }
      },
      dialogVisible: false
    };
  },
  mounted() {
  },
  created() {
    this.$LJSWatermark.set(
      uid(32),
      ['一杯茶，一包烟，一个参数传一天', '龙九山']
    );
  },
  methods: {
    aaaa() {
      this.dialogVisible = true;
    },
    bbb() {
      this.$LJSEl.delMessageBox({
        title: '系统提示1',
        message: `是否确认删除的数据项？`,
        draggable: true,
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
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

