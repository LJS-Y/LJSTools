<!-- 
  全页面的Loading样式
-->
<template>
  <Teleport to="body">
    <div 
      class="ljs-loading"
      id="ljs-loading"
      ref="ljsLoading"
      :style="{
        '--speed': speed,
        '--gaussian': gaussian,
        '--bgopacity': bgOpacity,
        '--textcolor': textColor
      }">
      <div class="text">
        <slot></slot>
      </div>
      <div class="g-container">
        <div class="g-circle"></div>
        <div class="g-bubbles">
          <div class="g-bubble" v-for="index in 200" :key="index"></div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import index from './index.js';
export default index;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
