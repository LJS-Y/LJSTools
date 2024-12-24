<template>
  <Teleport to="body">
    <div
      ref="rightMenu"
      v-if="modelValue"
      :class="`rightMenu ${menuClass} ${modelValue ? 'show' : ''}`"
      :style="{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }">
      <slot></slot>
    </div>
  </Teleport>
</template>

<script>
import index from "./index";
export default index;
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>

<!-- 
示例：
vue：
<div @contextmenu.prevent="rightMenu($event)">右键触发区域</div>

<RightMenu v-model="menu.rightMenu.show" :position="menu.rightMenu.position">
  <div class="item">菜单1</div>
  <div class="item disable">菜单2</div>
  <div class="item">菜单3</div>
  <div class="item">菜单4</div>
  <div class="item">菜单5</div>
</RightMenu>
JS:
export default {
  data() {
    return {
      // 菜单
      menu: {
        // 右键菜单
        rightMenu: {
          show: false, // 显示
          position: {
            top: 0,
            left: 0
          }
        },
      },
    };
  },
  methods: {
    // 右键菜单
    rightMenu($event) {
      this.menu.rightMenu = {
        show: true,
        position: {
          left: $event.clientX,
          top: 154,
        }
      };
      return false;
    },
  }
};
 -->
