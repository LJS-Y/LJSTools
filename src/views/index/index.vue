<template>
  <div>
    <el-input v-model="form.goodsPrice" @input="$LJSfc.numCheck({form, key: 'goodsPrice'})" @blur="$LJSfc.numBlurCheck({form, key: 'goodsPrice'})"></el-input>
    <el-input v-model="form.goodsPrice2" @input="$LJSfc.numCheck({form, key: 'goodsPrice2', fu: true})" @blur="$LJSfc.numBlurCheck({form, key: 'goodsPrice2'})" maxlength="3"></el-input>
    
    <el-input v-model="form.goodsPrice3" @input="$LJSfc.numDxsCheck({
      form: form,
      key: 'goodsPrice3',
      zs: 8,
      ws: 4,
      fu: true
    })" @blur="$LJSfc.numBlurCheck({form, key: 'goodsPrice3'})"></el-input>
  </div>
</template>

<script>
import index from "./index";
export default index;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>