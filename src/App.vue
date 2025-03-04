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
    const list = [{"createBy":null,"createTime":"2025-01-09 10:02:13","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":0,"ancestors":"","children":[],"itemTypeId":315,"typeName":"测硫仪触摸屏","status":"0"},{"createBy":null,"createTime":"2025-01-09 10:00:27","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":0,"ancestors":"","children":[],"itemTypeId":314,"typeName":"编织袋","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:59:32","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":0,"ancestors":"","children":[],"itemTypeId":313,"typeName":"工业编织袋","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:57:28","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":0,"ancestors":"","children":[],"itemTypeId":312,"typeName":"吨袋","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:44:15","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":0,"ancestors":"","children":[],"itemTypeId":308,"typeName":"球阀","status":"0"},{"createBy":null,"createTime":"2025-01-08 16:26:07","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":0,"orderNum":1,"ancestors":"","children":[],"itemTypeId":291,"typeName":"原料","status":"0"},{"createBy":null,"createTime":"2025-01-08 16:26:34","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":291,"orderNum":1,"ancestors":"","children":[],"itemTypeId":294,"typeName":"石英砂","status":"0"},{"createBy":null,"createTime":"2025-01-08 16:27:22","updateBy":null,"updateTime":"2025-01-20 11:43:39","remark":null,"parentName":null,"parentId":292,"orderNum":1,"ancestors":"","children":[],"itemTypeId":297,"typeName":"碳化硅","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:41:13","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":1,"ancestors":"","children":[],"itemTypeId":299,"typeName":"砂纸","status":"0"},{"createBy":null,"createTime":"2025-01-08 16:26:16","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":0,"orderNum":2,"ancestors":"","children":[],"itemTypeId":292,"typeName":"产成品","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:41:33","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":2,"ancestors":"","children":[],"itemTypeId":300,"typeName":"交流接触器","status":"0"},{"createBy":null,"createTime":"2025-01-08 16:27:01","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":291,"orderNum":2,"ancestors":"","children":[],"itemTypeId":295,"typeName":"石油焦","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:41:51","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":3,"ancestors":"","children":[],"itemTypeId":301,"typeName":"电缆线","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:39:10","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":0,"orderNum":3,"ancestors":"","children":[],"itemTypeId":298,"typeName":"材料","status":"0"},{"createBy":null,"createTime":"2025-01-08 16:27:14","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":291,"orderNum":3,"ancestors":"","children":[],"itemTypeId":296,"typeName":"无烟煤","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:42:13","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":4,"ancestors":"","children":[],"itemTypeId":302,"typeName":"LED灯","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:42:33","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":5,"ancestors":"","children":[],"itemTypeId":303,"typeName":"节能灯","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:42:55","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":6,"ancestors":"","children":[],"itemTypeId":304,"typeName":"扫帚","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:43:30","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":6,"ancestors":"","children":[],"itemTypeId":306,"typeName":"软连接","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:43:08","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":7,"ancestors":"","children":[],"itemTypeId":305,"typeName":"笤帚","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:44:01","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":8,"ancestors":"","children":[],"itemTypeId":307,"typeName":"灯头","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:44:34","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":9,"ancestors":"","children":[],"itemTypeId":309,"typeName":"五孔插座","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:44:55","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":11,"ancestors":"","children":[],"itemTypeId":310,"typeName":"绝缘板","status":"0"},{"createBy":null,"createTime":"2025-01-09 09:45:08","updateBy":null,"updateTime":null,"remark":null,"parentName":null,"parentId":298,"orderNum":31,"ancestors":"","children":[],"itemTypeId":311,"typeName":"手电","status":"0"}]
    const tree2 = this.$LJSbase.handleListTree({data: list, id: 'itemTypeId', parentId: 'parentId'});
    console.log(list);
    console.log(tree2);
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>

