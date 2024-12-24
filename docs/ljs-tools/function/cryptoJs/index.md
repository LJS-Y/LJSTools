# 加解密（LJScryptoJs）
## 说明
加解密（LJScryptoJs），V3JS框架中常用的基础库。

### 1.DES - 加密

方法：setDES(word: String, keyStr: String)

返回值（String）：加密结果。
##### 示例
```js
this.$LJScryptoJs.setDES('需要加密的串', 'KEY_LJS')
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| word | String | √ | | 需要加密的串。 |
| keyStr | String | √ | | key。 |


### 2.DES - 解密，CBC模式解密

方法：getDES(word: String, keyStr: String)

返回值（String）：解密结果。
##### 示例
```js
this.$LJScryptoJs.getDES('需要解密的串', 'KEY_LJS')
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| word | String | √ | | 需要解密的内容。 |
| keyStr | String | √ | | key。 |


### 3.sha256 - 加密

方法：setSha256(word: String)

返回值（String）：加密结果。
##### 示例
```js
this.$LJScryptoJs.setSha256('需要加密的串')
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| word | String | √ | | 需要加密的串。 |


### 4.MD5 - 加密

方法：setMD5(word: String)

返回值（String）：加密结果。
##### 示例
```js
this.$LJScryptoJs.setMD5('需要加密的串')
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| word | String | √ | | 需要加密的串。 |