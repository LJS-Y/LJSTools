<template>
  <DateRange
    v-model="tableSearch.query.date"
    dateType="date"
    formItemProp="aaaa"
    :formItemRules="[{ required: true, message: '请选择报名时间', trigger: 'change' }]"
    :clearable="false"
    :disabledDate_start="$LJSfc.pickerOptions()"
    :disabledDate_end="$LJSfc.pickerOptions()">
  </DateRange>
</template>

<script>
import index from "./index";
export default index;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>