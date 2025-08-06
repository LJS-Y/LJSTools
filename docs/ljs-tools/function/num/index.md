# 数字（LJSnum）
## 说明
数字（LJSnum），V3JS框架中常用的基础库。

### 1.个位数字补零
常用于日期或特殊编码位数有要求的需求。

方法：numberB0(n: Number | String, num: Number, fillStr: string)

返回值（String）：补零后的数字。
##### 示例
```js
this.$LJSnum.numberB0(1, 4); // 返回0001
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| n | Number, String | √ | | 数字。 |
| num | Number | × | 2 | 位数，将要补成几位。 |
| fillStr | String | × | '0' | 填充的字符。 |


### 2.金额分割符
按照4位分割（仅数字）

方法：moneySplit(value: Number | String, fw: Number, symbol: String)

返回值（String）：返回分割完成的数字。
##### 示例
```js
this.$LJSnum.moneySplit(3889999); // 返回结果为388,9999
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| value | Number, String | √ | | 需要进行分割的数字。 |
| fw | Number | × | 4 | 人民币分位符：4；美元分位符：3。 |
| symbol | string | × | , | 分隔符。 |


### 3.整数上取舍
最大位数字升，其他位归0；对一个数字上取舍，适配万亿级别的数字，无上限。

方法：numberCeil(value: Number | String)

返回值（Array）：返回取舍完成的数字。
##### 示例
```js
this.$LJSnum.numberCeil(1234); // 返回结果为2000
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| value | Number, String | √ | | 数字。 |


### 4.数字单位升级
数字进行万、亿、万亿处理。

方法：longNumText(params: Object)

返回值（Array）：返回升级后的数据。isMerge为true时返回合并后的字符串；false时返回一个对象，num为数字，unit为单位值。
##### 示例
```js
this.$LJSnum.longNumText({ value: 12345, ws: 1}); // 返回1.2万
```

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| value | Number, String | √ | | 原型数据。 |
| ws | Number | × | 0 | 保留几位小数。 |
| units | Number | × | ['', '万', '亿万', '万亿'] | 单位文字的数组。保证数组为4个项。 |
| isMerge | Boolean | × | true | 是否合并单位和数字。。 |


### 5.数字保留小数位
数字、字符串，处理小数位。特殊数字返回结果精度高于toFixed(2)的结果。

注：整数不保留小数位，非数字原样返回。

方法：numberChangeDecimal (value: Number | String, ws: Number)

返回值（String）：返回处理后的数据。
##### 示例
```js
this.$LJSnum.numberChangeDecimal(12.3456)
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| value | Number, String | √ | | 原型数据。 |
| ws | Number | × | 2 | 保留几位小数。 |


### 6.平均处理
把一个总数按照约定份数进行平均。

方法：averageNum(total: Number | String, shares: Number, decimal: Number)

返回值（Array）：返回平均好的数据集合。
##### 示例
```js
this.$LJSnum.averageNum(10000)
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| total | Number, String | √ | | 总数值。 |
| shares | Number | × | 12 | 需要平均成多少份，默认12份。 |
| decimal | Number | × | 2 | 保留小数位，默认2位。 |
