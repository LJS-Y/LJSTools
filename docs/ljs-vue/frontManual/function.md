# 通用方法
## $tab对象
废弃！

我们提供以下方式：

### 页面跳转：
```
// router.push
this.$run.push({
  path: '/organizationAdd'
})

// router.replace
this.$run.replace({
  path: '/organizationAdd'
})

// 回退的页数，默认一页
this.$run.go()

// 跳外部地址
this.$run.goExternalUrl(url)
```
##### 参考地址
/src/tools/run.js

## $modal对象
继续沿用！

## $auth对象
废弃！

我们提供以下方式：

[权限](/ljs-vue/frontManual/power)

## $cache对象
废弃！

我们提供以下方式：

[缓存（LJSsession）](/ljs-tools/function/session/)

## $download对象

废弃！

我们提供以下方式：

```
this.download('/monitor/jobLog/export', {
  ...this.queryParams
}, `log_${new Date().getTime()}.xlsx`)
```