# 权限
## v-hasPermi
继续沿用！

```vue
// 单个
<el-button v-hasPermi="['system:user:add']">存在权限字符串才能看到</el-button>
// 多个
<el-button v-hasPermi="['system:user:add', 'system:user:edit']">包含权限字符串才能看到</el-button>
```

## v-hasRole
继续沿用！

```vue
// 单个
<el-button v-hasRole="['admin']">管理员才能看到</el-button>
// 多个
<el-button v-hasRole="['role1', 'role2']">包含角色才能看到</el-button>
```

## checkPermi 和 checkRole

### 方法：checkPermi(value: Array)

返回值（Boolean）

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| value | Array | √ | | 校验值。 |

##### 示例
```vue
<el-tab-pane v-if="checkPermi(['system:user:add'])" label="用户管理" name="user">用户管理</el-tab-pane>
<el-tab-pane v-if="checkPermi(['system:user:add', 'system:user:edit'])" label="参数管理" name="menu">参数管理</el-tab-pane>
```

### 方法：checkRole(value: Array, admin: Boolean)

返回值（Boolean）

#### 参数

| 参数  | 类型 | 必填 | 默认值 | 说明 |
| ----- | :----: | :-----: | ----- | --- |
| value | Array | √ | | 校验值。 |
| admin | Boolean | × | true | 是否包含超管角色。如果true则为A角色或超管可看；如果为false则为A角色可看，超管不可看。 |

##### 示例
```vue
<el-tab-pane v-if="checkRole(['A'], false)" label="角色管理" name="role">角色管理</el-tab-pane>
<el-tab-pane v-if="checkRole(['A', 'B'])" label="定时任务" name="job">定时任务</el-tab-pane>
```
