<template>
  <div class="textAbbreviation"
  :style="{
    'line-height': lineHeight + unit,
    'font-size': fontSize + unit,
  }">
    <template v-if="mode === 'line'">
      <div class="textAbbreviation-line">
        <div
          ref="textAbbreviationlineContent"
          class="textAbbreviation-line-content"
          :style="{
            height: useMax === -1 ? 'auto' : `calc(${useMax} * ${lineHeight}${unit})`,
          }"
        >{{ data }}</div>
        <div v-if="useMax !== -1" @click="expandRetract" class="textAbbreviation-line-more">{{ useMax === maxLine ? '收起' : '展开' }}</div>
      </div>
    </template>
    <template v-else-if="mode === 'last'">
      <div class="textAbbreviation-last">
        <div
          ref="textAbbreviationlastContent"
          class="textAbbreviation-last-content"
          :style="{
            height: useMax === -1 ? 'auto' : `calc(${useMax} * ${lineHeight}${unit})`,
          }"
        >{{ data }}</div>
        <div v-if="useMax !== -1" @click="expandRetract" class="textAbbreviation-last-more"
        :style="{
          position: useMax === maxLine ? 'relative' : 'absolute',
          'padding-left': useMax === maxLine ? '0' : '20px',
        }">{{ useMax === maxLine ? '收起' : '...展开' }}</div>
      </div>
    </template>
  </div>
</template>

<script>
import index from "./index";
export default index;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
