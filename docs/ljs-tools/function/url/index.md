# 地址检测（LJSurl）
## 说明
URL检测与应用（LJSurl），V3JS框架中常用的基础库。

### 地址解析
方法：getUrlAllParameter(url: String)

返回值（String）：url不存在，返回null。

返回值（String）：url存在返回一个数组，有且只有两项，索引0为地址，索引1为参数。
##### 示例
```js
this.$LJSurl.getUrlAllParameter(url)
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| url | String | √ | | 待解析的地址。 |

### 获取指定参数的值
方法：getUrlParameter(key: String, url: String)

返回值（String）：返回指定key的参数值，如不存在返回null。
##### 示例
```js
this.$LJSurl.getUrlParameter('moduleName');
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| key | String | √ | | key。 |
| url | String | × | location.search | 待解析的地址。 |


### 获取文件类型
方法：getFileType(str: String, showDot: Boolean)

返回值（String）：返回文件类型的字符串。
##### 示例
```js
this.$LJSurl.getFileType(str);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| str | String | √ | | 含有文件类型的名称串。 |
| showDot | Boolean | × | | 是否包含点（如 .pdf）。 |


### 获取文件名称
方法：getFileName(str: String, showSuffix: Boolean)

返回值（String）：返回文件类型的字符串。
##### 示例
```js
this.$LJSurl.getFileName(str);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| str | String | √ | | 含有文件类型的名称串。 |
| showSuffix | Boolean | × | false | 是否包含后缀（如 .pdf），默认不包含。 |


### 检测 - ipv4校验

方法：isIPV4ValidIP(ip: String)

返回值（Boolean）：是否为IPV4。
##### 示例
```js
this.$LJSurl.isIPV4ValidIP(document.domain)
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| ip | String | √ | | document.domain，当前网站的地址。 |


### 检测 - ipv6校验

方法：isIPV6ValidIP(ip: String)

返回值（Boolean）：是否为IPV4。
##### 示例
```js
this.$LJSurl.isIPV6ValidIP(document.domain)
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| ip | String | √ | | document.domain，当前网站的地址。 |


### 检测 - ip校验

方法：isIPValid(ip: String)

返回值（Boolean）：是否为IP地址。
##### 示例
```js
this.$LJSurl.isIPValid(document.domain);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| ip | String | √ | | document.domain，当前网站的地址。 |


### URL参数处理 - 对象参数处理成拼接参数

方法：formatParamsByAscii(params: Object, excludeKeys: Array)

返回值（Boolean）：是否为IP地址。
##### 示例
```js
this.$LJSurl.formatParamsByAscii(window.location.href);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| params | Object | √ | | 待处理的参数对象（如 \{appid: \'xxx\', nonce_str: \'xxx\'\}）。 |
| excludeKeys | Array | × | \[\'sign\'\] | 无需参与处理的字段（默认排除 sign，可自定义）。 |