<template>
  <div>
    <template v-for="(item, index) in options" :key="item.dictValue">
      <template v-if="values.includes(item.dictValue)">
        <span
          v-if="item.listClass == 'default' || item.listClass == ''"
          :index="index"
          :class="item.cssClass"
          >{{ item.dictLabel }}</span
        >
        <el-tag
          v-else
          :disable-transitions="true"
          :index="index"
          :type="item.listClass === undefined || item.listClass === null || item.listClass === '' ? 'info' : item.listClass"
          :class="item.cssClass"
        >
          {{ item.dictLabel }}
        </el-tag>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "DictTag",
  props: {
    options: {
      type: Array,
      default: null,
    },
    value: [Number, String, Array],
  },
  computed: {
    values() {
      if (this.value !== null && typeof this.value !== 'undefined') {
        return Array.isArray(this.value) ? this.value : [this.value];
      } else {
        return [];
      }
    },
  },
};
</script>
<style scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
</style>