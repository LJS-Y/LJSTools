import router from './index'

/**
 * 路由的钩子函数，处理是否登录的判断
 * **/
router.beforeEach(async (to, from, next) => {
  return next();
});