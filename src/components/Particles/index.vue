<!--
 * @Author: ylf
 * @LastEditors: ylf
 * @description: ?
 * @updateInfo: 内容: vue3支持的粒子特效。
 * @Date: 2023-07-18 15:37
 * @LastEditTime: 2023-07-18 15:37
-->
<template>
  <div class="particles-js-box">
    <div id="particles-js"></div>
  </div>
</template>

<script>
/* eslint-disable */
import particlesJs from "./particles.js";
import particlesConfig from "./particles.json";
export default {
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      particlesJS("particles-js", particlesConfig);
      document.body.style.overflow = "hidden";
    },
  },
};
</script>

<style scoped>
.particles-js-box {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
#particles-js {
  background-color: transparent;
  width: 100%;
  height: 100%;
}
</style>