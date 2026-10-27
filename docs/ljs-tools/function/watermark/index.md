# 水印（LJSWatermark）
## 说明
水印（LJSWatermark），V3JS框架中常用的基础库。

### 1.设置水印
该方法只允许调用一次。

方法：set = (uid: String, str: Array, opt: Object, time: Number)

##### 示例
```js
this.$LJSWatermark.set(
  uid(32),
  ['一杯茶，一包烟，一个参数传一天', '龙九山']
);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| uid | String | √ | | 唯一标识，可使用uid库。 |
| str | Array | √ | | 水印内容。 |
| opt.rotate | Number | × | -25 | 旋转角度。 |
| opt.can_w | Number | × | 150 | 画布宽。 |
| opt.can_h | Number | × | 130 | 画布高。 |
| opt.font | String | × | 14px Vedana | 字体。 |
| opt.color | String | × | rgba(127, 127, 127, 0.1) | 字体颜色。 |
| opt.align | String | × | left | 文本对齐方式。 |
| time | Number | × | 500 | 水印检测周期，单位毫秒。 |
