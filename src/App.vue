<template>
  <router-view />
</template>

<script>
import { uid } from 'uid';
export default {
  data() {
    return {
      
			typeData: [
				{
					dictLabel: '是',
					dictValue: 'Oui'
				},
				{
					dictLabel: '非',
					dictValue: 'Non'
				},
				{
					dictLabel: '不确定',
					dictValue: 'Indéfini'
				},
				{
					dictLabel: '部分',
					dictValue: 'Partiellement'
				}
			],
    };
  },
  mounted() {
  },
  created() {
    this.$LJSWatermark.set(
      uid(32),
      ['一杯茶，一包烟，一个参数传一天', '龙九山']
    );
    console.log(this.$LJSbase.selectDictLabel({data: this.typeData, value: 'Non'}));
    
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
</style>

