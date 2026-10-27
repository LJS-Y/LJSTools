# 颜色处理（LJSrgbC）
## 说明
颜色处理（LJSrgbC），V3JS框架中常用的基础库。

### 1.16进制颜色转rgb

方法：c16ToRgb(color: String)

返回值（String）：返回rgb的值。
##### 示例
```js
this.$LJSrgbC.c16ToRgb('#02A7EF'); // 返回：2,167,239
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| color | String | √ | | 16进制颜色，如：#02A7EF。 |


### 2.rgb转16进制

方法：rgbToC16(color: String)

返回值（String）：返回16进制的值。
##### 示例
```js
this.$LJSrgbC.c16ToRgb('2,167,239'); // 返回：#02A7EF
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| color | String | √ | | rgb颜色，如：2,167,239。 |


### 3.生成随机16进制颜色

方法：random16Color()

返回值（Array）：16进制颜色。
##### 示例
```js
this.$LJSrgbC.random16Color();
```
