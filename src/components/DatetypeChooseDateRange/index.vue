<!--
示例1：
<DatetypeChooseDateRange
  v-model:date="tableSearch.query.date"
  v-model:dictValue="tableSearch.query.dateType"
  :datetypeData="acquisition_frequency"
  :disabledDate="$LJSfc.pickerOptions()">
</DatetypeChooseDateRange>
示例1：
<DatetypeChooseDateRange
  v-model:date="tableSearch.query.date"
  v-model:dictValue="tableSearch.query.dateType"
  :datetypeData="acquisition_frequency"
  :dateTypeKeyValue="['1', '2', '3', '4']"
  :dateSwitchRule="1"
  :disabledDate="$LJSfc.pickerOptions()">
</DatetypeChooseDateRange>
-->
<template>
  <el-form-item :label="formItemLabel" prop="date">
    <div class="frequency" :style="{
      '--dateTypeNum': date_type.length,
    }">
      <div class="one"
        :class="{ active: dateType === dict.dictValue }"
        @click="dateTypeF(dict.dictValue)"
        v-for="dict in date_type" :key="dict.dictValue">{{dict.dictLabel}}</div>
    </div>
    <transition name="frequencyDate">
      <div class="frequencyDate" v-if="opts.dateTypeTag">
        <el-date-picker
          v-model="opts.startDate"
          :style="{
            width: `${
              opts.dateType === 'year' ? 100 :
              opts.dateType === 'month' ? 120 :
              opts.dateType === 'date' ? 140 :
              opts.dateType === 'datetime' ? 200 : 200
            }px !important`
          }"
          :value-format="opts.valueFormat"
          :type="opts.dateType"
          placeholder="请选择"
          :editable="false"
          :clearable="clearable"
          :disabled-date="disabledDate"
          @change="dateChange"
        ></el-date-picker>
        <span class="zhi">{{ symbol }}</span>
        <el-date-picker
          v-model="opts.endDate"
          :style="{
            width: `${
              opts.dateType === 'year' ? 100 :
              opts.dateType === 'month' ? 120 :
              opts.dateType === 'date' ? 140 :
              opts.dateType === 'datetime' ? 200 : 200
            }px !important`
          }"
          :value-format="opts.valueFormat"
          :type="opts.dateType"
          placeholder="请选择"
          :editable="false"
          :clearable="clearable"
          :disabled-date="disabledDate"
          @change="dateChange"
        ></el-date-picker>
      </div>
    </transition>
  </el-form-item>
</template>

<script>
import index from "./index";
export default index;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
