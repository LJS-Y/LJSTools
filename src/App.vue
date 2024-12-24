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
    <!-- <DateRange
      v-model="allSearch.query.date"
      dateType="date"
      :clearable="false"
      :disabledDate_start="allSearch.query.disabledDate_start"
      :disabledDate_end="allSearch.query.disabledDate_end"
      :visibleChange_start="tag => visibleChange_start(3, tag)"
      :visibleChange_end="tag => visibleChange_end(3, tag)"
    /> -->
    
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
    
    <!-- <DateRange
      formItemLabel="数据时间"
      v-model="tableSearch.query.date"
      dateType="date"
      :change_start="aaaa"
      :change_end="handleQuery">
    </DateRange> -->
    
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
  </div>
</template>

<script>
import { uid } from 'uid';
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  created() {
    this.$LJSWatermark.set(
      uid(32),
      ['一杯茶，一包烟，一个参数传一天', '龙九山']
    );
    // const url = "//192.168.0.105:8055/profile/upload/2024/11/18/1_20231225171414 - 副本_20241118175745A003.pdf";
    const url = "//192.168.0.105:8055/profile/upload/2024/11/18\\1_20231225171414 - 副本_20241118175745A003.pdf";
    console.log(this.$LJSurl.getFileName(url));
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>

