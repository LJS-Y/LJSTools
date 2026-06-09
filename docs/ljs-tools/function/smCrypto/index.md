# 国密（LJSsm）


## SM2

SM2 非对称加密/签名/验签。

#### 生成 SM2 密钥对（公钥+私钥）

方法: generateKeyPair()

返回值（String）：生成 SM2 密钥对（公钥+私钥）。
##### 示例
```js
this.$LJSsm.SM2Util.generateKeyPair()
```


#### 公钥加密

方法: encrypt(data: JSONString, publicKey: String)

返回值（String）：加密结果。
##### 示例
```js
this.$LJSsm.SM2Util.encrypt(data, publicKey)
```

##### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | JSONString | √ | | 需要加密的内容。 |
| publicKey | String | √ | | 公钥。 |


#### 私钥解密

方法: decrypt(encryptedData: String, privateKey: String)

返回值（String）：解密结果。
##### 示例
```js
this.$LJSsm.SM2Util.decrypt(encryptedData, privateKey)
```

##### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| encryptedData | String | √ | | 需要解密的内容。 |
| privateKey | String | √ | | 私钥。 |


#### 私钥签名
常用：交易签名、身份认证

方法: sign(data: JSONString, privateKey: String)

返回值（String）: 签名。
##### 示例
```js
const signature = this.$LJSsm.SM2Util.sign(data, privateKey)

await axios.post("/api/transaction", {
  data: data,    // 原始数据
  sign: signature   // 签名
})
```


#### 公钥验签
常用：交易签名、身份认证

方法: verify(data: JSONString, signature: String, publicKey: String)

返回值（String）: 签名。
##### 示例
```js
const signature = this.$LJSsm.SM2Util.verify(data, signature, publicKey)
```

##### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | JSONString | √ | | 原始数据。 |
| signature | String | √ | | 签名。 |
| publicKey | String | √ | | 公钥。 |


## SM3

哈希摘要。

#### 计算数据摘要（指纹）

方法: digest(data: String)

返回值（String）：解密结果。
##### 示例
```js
this.$LJSsm.SM3Util.digest(data)
```

##### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | JSONString | √ | | 原始数据。 |


## SM4

对称加密/解密。

#### 生成随机16位密钥（SM4固定128位）

方法: generateKey()

返回值（String）：解密结果。
##### 示例
```js
this.$LJSsm.SM4Util.generateKey()
```


#### 加密（传输/存储用）

方法: encrypt(data: JSONString, key: String)

返回值（String）：加密结果。
##### 示例
```js
this.$LJSsm.SM4Util.encrypt(data, key)
```

##### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | JSONString | √ | | 需要加密的内容。 |
| key | String | √ | | 公钥。 |


#### 解密

方法: decrypt(encryptedData: String, key: String)

返回值（String）：解密结果。
##### 示例
```js
this.$LJSsm.SM4Util.decrypt(encryptedData, key)
```

##### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| encryptedData | String | √ | | 需要解密的内容。 |
| key | String | √ | | 私钥。 |


### 目标实现流程

1 后端提供 SM2 公钥

2 前端随机生成 SM4 发送密钥 A、接收密钥 B

3 前用后端 SM2 公钥加密 A+B

4 传给后端

5 后端用 SM2 私钥解密得到 A、B

6 前端→后端：密钥 A 加密

7 后端→前端：密钥 B 解密
