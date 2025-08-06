<template>
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
    console.log(this.$LJSnum.longNumText({ value: 12345, ws: 1, isMerge: false}));
    
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>

