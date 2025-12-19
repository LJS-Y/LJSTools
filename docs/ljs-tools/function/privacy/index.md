# 脱敏（LJSprivacy）
## 说明
隐私脱敏，V3JS框架中常用的基础库。


### 脱敏 - 姓名
方法：desensitizationName(name: String)

返回值（String）：返回脱敏后的数据。
##### 示例
```js
this.$LJSprivacy.desensitizationName('张三');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| name | String | √ | | 姓名。 |


### 脱敏 - 手机号
方法：desensitizationPhone(phone: String, handleNum: Number)

返回值（String）：返回脱敏后的数据。
##### 示例
```js
this.$LJSprivacy.desensitizationPhone('13200001234');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| phone | String | √ | | 手机号。 |
| handleNum | Number | × | | 需要脱敏的数量。 |


### 脱敏 - 身份证号

也可用于其他文本的脱敏处理

方法：desensitizationPhone({str: String, keepStart: Number, keepEnd: Number, maskChar: String, maskLength: Number})

返回值（String）：返回脱敏后的数据。
##### 示例
```js
this.$LJSprivacy.desensitizationStr({ str: '640323198900006666' })
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| str | String | √ | | 身份证号。 |
| keepStart | Number | × | | 前保留。 |
| keepEnd | Number | × | | 后保留。 |
| maskChar | String | × | | 脱敏符号。 |
| maskLength | Number | × | | 脱敏符号显示的数量。 |
