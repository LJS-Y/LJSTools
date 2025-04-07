# 缓存（LJSsession）
## 说明
缓存（LJSsession），V3JS框架中常用的基础库。

### 1.临时缓存 - 取

方法：getSS(key: String)

返回值（String）：返回JSON结构的字符串。
##### 示例
```js
this.$LJSsession.getSS('keyname');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| key | String | √ | | key。 |


### 2.临时缓存 - 存

方法：setSS(key: String, value: Any)

##### 示例
```js
this.$LJSsession.setSS('keyname', '缓存内容');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| key | String | √ | | key。 |
| value | Any | √ | | key对应的数据。 |


### 3.临时缓存 - 删除

方法：delSS(key: String)

##### 示例
```js
this.$LJSsession.delSS('keyname');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| key | String | √ | | key。 |


### 4.临时缓存 - 清空

方法：clearSS()

##### 示例
```js
this.$LJSsession.clearSS();
```


### 5.长期缓存 - 取

方法：getLS(key: String)

返回值（String）：返回JSON结构的字符串。
##### 示例
```js
this.$LJSsession.getLS('keyname');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| key | String | √ | | key。 |


### 6.长期缓存 - 存

方法：setLS(key: String, value: Any, time: Number)

##### 示例
```js
this.$LJSsession.setLS('keyname', '缓存内容', 1000 * 3600 * 24);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| key | String | √ | | key。 |
| value | Any | √ | | key对应的数据。 |
| time | Number | × | | 存储时间，单位是毫秒，可不填。如不填，则为永久，如填写，getLS()时会判断，如果超时返回null，如果未超时，正常返回。 |


### 7.长期缓存 - 删除

方法：delLS(key: String)

##### 示例
```js
this.$LJSsession.delLS('keyname');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| key | String | √ | | key。 |


### 8.长期缓存 - 清空

方法：clearLS()

##### 示例
```js
this.$LJSsession.clearLS();
```


### 9.vuex - 还原

方法：clearVuex(store: Object, somethings: Function)

##### 示例
```js
this.$LJSsession.clearVuex(this.$store);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| store | Object | √ | | this.$store |
| somethings | Function | × | | 一些事情。 |