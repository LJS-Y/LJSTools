<template>
  顶层
  <router-view />
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
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>

