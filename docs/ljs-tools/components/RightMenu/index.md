# 右键菜单
### 说明
鼠标右键菜单盒子模型组件。

### 独立使用
```vue
<div @contextmenu.prevent="rightMenuF($event)">弹出右键菜单的区域</div>
....
<RightMenu v-model="rightMenu.show" :opts="rightMenu.opts" menuClass="aaaaaa">
  <div class="item" @click="tabCloseAll">菜单1</div>
  <div class="item" @click="tabCloseAll">菜单2</div>
  <div class="item" @click="tabCloseAll">菜单3</div>
</RightMenu>
```
```js
export default {
  data() {
    return {
      // 右键菜单
      rightMenu: {
        show: false, // 显示
        opts: {
          top: 0,
          left: 0,
          width: 0,
          height: 0,
        }
      },
    };
  },
  mounted() {
    // 右键菜单
    rightMenuF($event) {
      console.log($event);
      this.rightMenu.opts = {
        left: $event.clientX,
        top: $event.clientY,
        width: window.innerWidth,
        height: window.innerHeight,
      }
      this.rightMenu.show = true;
      return false;
    },
  }
};
```

### 主参数

| 参数  | 类型 | 必填项 | 默认值 | 参考值 | 说明 |
| ----- | ---- | ----- | ----- | ------ | --- |
| v-model | Boolean | √ | | | 是否显示。 |
| opts | Object | × | \{ top: 0, left: 0 \} | | 配置参数。 |
| menuClass | String | × | | | 为 RightMenu 添加类名。 |

### opts参数

| 参数  | 类型 | 必填项 | 默认值 | 参考值 | 说明 |
| ----- | ---- | ----- | ----- | ------ | --- |
| top | Number | × | 0 | | 定位 top。 |
| left | Number | × | 0 | | 定位 left。 |
| width | Number | × | 0 | | 菜单可视区域 宽。 |
| height | Number | × | 0 | | 菜单可视区域 高。 |

### 事件

| 名称 | 类型 | 说明 |
| ---- | --- | :--- |

### 插槽

| 插槽名 | 说明 |
| ---- | :------ |
