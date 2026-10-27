<!--
 * 示例
<DateRange
  v-model="tableSearch.query.date"
  dateType="datetime"
  :clearable="false"
  :disabledDate="$LJSfc.pickerOptions()">
</DateRange>
-->
<template>
  <el-form-item :label="formItemLabel" :prop="formItemProp" :rules="formItemRules">
    <el-date-picker
      v-model="opts.startDate"
      :style="{
        width: `${
          dateType === 'year' ? 100 :
          dateType === 'month' ? 120 :
          dateType === 'date' ? 140 :
          dateType === 'datetime' ? 200 : 200
        }px !important`
      }"
      :value-format="opts.valueFormat"
      :type="dateType"
      placeholder="开始日期"
      :editable="false"
      :clearable="clearable"
      :disabled-date="disabledDate_start"
      @change="dateChange(), change_start($event)"
      @visible-change="visibleChange_start($event)"
    ></el-date-picker>
    <span class="and">~</span>
    <el-date-picker
      v-model="opts.endDate"
      :style="{
        width: `${
          dateType === 'year' ? 100 :
          dateType === 'month' ? 120 :
          dateType === 'date' ? 140 :
          dateType === 'datetime' ? 200 : 200
        }px !important`
      }"
      :value-format="opts.valueFormat"
      :type="dateType"
      placeholder="结束日期"
      :editable="false"
      :clearable="clearable"
      :disabled-date="disabledDate_end"
      @change="dateChange(), change_end($event)"
      @visible-change="visibleChange_end($event)"
    ></el-date-picker>
  </el-form-item>
</template>

<script>
import index from "./index";
export default index;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
