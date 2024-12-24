# 菜单（LJSmenu）
## 说明
菜单（LJSmenu），V3JS框架中的基础库，服务于菜单的相关业务。


### 首次打开的菜单
首次打开时：存储一个的菜单的对象和一个打开菜单的数据集合。

方法：fristOpenMenu(store: Object)

##### 示例
```js
this.$LJSmenu.fristOpenMenu(this.$store)
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| store | Object | √ | | this.$store。 |


### 手动跳转
手动触发一个菜单跳转，可打开一个页卡。

方法：handPush(store: Object, run: Object, path: String, query: Object)

##### 示例
```js
this.$LJSmenu.handPush(this.$store, this.$run, '/carbonTrade/policyInfo')
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| store | Object | √ | | this.$store |
| run | Object | √ | | 框架内的路由控制类公共变量。this.$run |
| path | String | √ | | 路由地址 |
| query | Object | × | | 携带参数 |


### 打开菜单
菜单打开机制，总控(Menu组件控制，单独跳转需求控制)。

方法：menuControl(store: Object, run: Object, menuObj: Object, query: Object)

##### 示例
```js
this.$LJSmenu.menuControl(this.$store, this.$run, menuObj);
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| store | Object | √ | | this.$store |
| run | Object | √ | | 框架内的路由控制类公共变量。this.$run |
| menuObj | Object | √ | | 菜单对象 |
| query | Object | × | | 携带参数 |


### 更新菜单展开选项

方法：updateTreeOpen(menuList: Array, parents: Array, key: String)

##### 示例
```js
this.$LJSmenu.updateTreeOpen(this.menuList, parents);
```

#### 参数

| 参数  | 类型 | 必填项 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| menuList | Array | √ | | 菜单数据集 |
| parents | Array | √ | | 被展开的菜单及所有父菜单的集合 |
| key | String | × | menuId | 通过该字段匹配。 |