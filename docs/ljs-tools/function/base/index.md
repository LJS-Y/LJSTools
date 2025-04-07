# 基础（LJSbase）
## 说明
基础（LJSbase），V3JS框架中常用的基础库。


### 字段判断
判断某个字段，是否为undefined、null、''。

方法：fieldCheck(field: Array)

返回值（Boolean）：该字段是否为undefined || null || ''。

##### 示例
```js
this.$LJSbase.fieldCheck(this.aaaa)
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| field | any | √ | | 需要判断的字段。 |

### 深拷贝
方法：deepCopy(obj: Any)

返回值（Any）：返回深拷贝后的数据。
##### 示例
```js
this.$LJSbase.deepCopy(obj);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| obj | Any | √ | | 待深拷贝数据。 |


### 树 - 通过一个值反查

可获取该值对应的对象及其所有父级对象。

方法：getTreeParents(params: Object)

返回值（String）：选中的数据包括直系父的集合
##### 示例
```js
const parents = this.$LJSbase.getTreeParents({data, value, key});
```

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | Array | √ | | 原始数据。 |
| value | String | √ | | 选中的数据唯一值。 |
| key | String | × | id | 选中的数据唯一值对应的key。 |
| children | String | × | children | 子集对应的集合。 |


### 树 - 部分数据禁用

根据指定条件进行禁用处理并返回新的树型数据。

方法：editTreeParentIdCheck(params: Object)

返回值（Array）：根据条件返回一个部分禁用选择的树数据。
##### 示例 - 多禁用条件
```js
this.$LJSbase.editTreeParentIdCheck({data, opts: [{value: 32, key: 'id'}, {value: 3, key: 'level'}]});
```

##### 示例 - 清空禁用条件
```js
this.$LJSbase.editTreeParentIdCheck({data});
```

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | Array | √ | | 原始数据。 |
| opts | Array | × | [] | 条件数组。 |

#### opts参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| value | String | √ | | 需要禁用项的对比值。 |
| key | String | √ | | 需要禁用项的对比值对应的键名。 |


### 数据转换 - tree转list
方法：handleTreeList(treeList: Array)

返回值（Array）：转换后的数据。
##### 示例
```js
this.$LJSbase.handleTreeList(tree);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| treeList | Array | √ | | 待转换的树结构数据。 |


### 数据转换 - list转tree
方法：handleListTree(params: Object)
##### 示例
```js
this.$LJSbase.handleListTree({data});
```

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| data | Array | √ | | 待转换的数据。 |
| id | String | × | id | 自身id键。 |
| parentId | String | × | parentId | 父id键。 |
| children | String | × | children | children键。 |


### 设置根节点字体

多用于rem项目。

方法：setRemUnit()
##### 示例
```js
// 直接更改DOM根节点的字体大小值。
this.$LJSbase.setRemUnit();
```


### 通过key查找value

常用于：字典值回显，接口值回显。

方法：selectDictLabel(params: Object)

返回值（Array）：返回值所对应的文本。
##### 示例
```js
this.$LJSbase.selectDictLabel({data, value: '1'})
```

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| datas | Array | √ | | 基础数据。 |
| value | String | √ | | 值。 |
| labelKey | String | × | distLabel | 查找的名称key。如果参数值为$index，则返回索引值。 |
| valueKey | String | × | distValue | 比对的数据key。 |
| isTrue | Boolean | × | false | false时为字符串，true时为布尔型。 |


### 高级日志

可输出带颜色的日志。

方法：colorLog(params: Object)
##### 示例
```js
const technicalSupport = ['技术支持：', '龙九山'];
colorLog({content: technicalSupport});
```

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| content | Array | √ | | 基础数据。 |
| type | String | × | info | 日志类型，与console同步。 |
| color | Array | × | ['background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;', 'background: #1475B2; color: #fff; border-radius: 0 4px 4px 0; padding: 3px 6px;'] | 颜色，与content数据同步。 |


### 图片下载

根据图片地址提供下载功能。

方法：downloadImage(params: Object)

返回值（Array）：返回值所对应的文本。
##### 示例
```js
this.$LJSbase.downloadImage({_this: this, url: scope.row.quickResponseCode, name: `${scope.row.itemName}-${scope.row.typeName}-${scope.row.itemNo}`});
```

#### params参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| _this | Object | √ | | this。 |
| url | String | √ | | 图片的绝对路径。 |
| name | String | × | 当前时间戳 | 图片名称。 |


### 图片流转换为base64
方法：imageFileToBase64(fileFlow: Blob)

返回值（String）：返回base64，不是流或文件则返回空字符串。
##### 示例
```js
const base64Str = await this.$LJSbase.imageFileToBase64(fileFlow);
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| fileFlow | Blob | √ | | 文件流。 |


### 获取浏览器的百分比
方法：getWindowRatio()

返回值（Number）：返回浏览器的百分比数值。
##### 示例
```js
this.$LJSbase.getWindowRatio();
```


### 补漏覆盖对象数据
方法：objectCopy(parameterObj: Object, defaultObj: Object)

返回值（Object）：不改变原有数据，返回一个大而全的新对象。。
##### 示例
```js
const parameterObj = {
  a: 4,
  c: 5
};
const defaultObj = {
  a: 1,
  b: 2,
  c: 3
};
this.$LJSbase.objectCopy(parameterObj, defaultObj);
```
返回结果：
```
{
  a: 4,
  b: 2,
  c: 5
}
```

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| parameterObj | Object | √ | | 参数对象。 |
| defaultObj | Object | √ | | 默认对象。 |