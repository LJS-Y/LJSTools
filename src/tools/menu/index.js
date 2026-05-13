/** 
 * @module menu
 * @description 菜单相关方法
 *  */

import LJSbase from '@/tools/base';

/**
 * 处理首次打开的菜单。
 */
export function fristOpenMenu(store) {
  // 处理首次打开的菜单。
  const menuList = store.getters.menuList;
  const routeList = menuFristShow({menuList: menuList});
  // 获取菜单文字导航数据address
  const address = getAddress({data: menuList, value: routeList.url});
  routeList.address = address;
  store.commit('SET_menuNowOpen', routeList);
  store.commit('SET_menuOpenList', [routeList]);
}

/**
 * 通过当前选中菜单，获取文字导航数据address
 * @param {Array} data 树
 * @param {string} value 选中的数据唯一值
 * @param {string} key 选中的数据唯一值对应的key，默认url
 * @example const address = getAddress({data: menuList, value: routeList.url});
 */
function getAddress({data, value, key = 'url'}) {
  const parents = LJSbase.getTreeParents({data, value, key});
  const address = [];
  parents.forEach((item) => {
    const addr = {
      title: item.title, // 菜单名称
      url: item.url // 菜单路由path
    };
    address.push(addr);
  });
  return address;
}

// 获取首次登录的选中菜单（不对外开放）
function menuFristShow({menuList}) {
  if (menuList.length === 0) {
    return {};
  }
  let openObj = {};
  menuList.forEach((item, i) => {
    if (i === 0) {
      if (!LJSbase.fieldCheck(item.children) && item.children.length > 0) {
        item.open = true;
        openObj = menuFristShow({menuList: item.children});
      } else {
        openObj = item;
      }
    }
  });
  return openObj;
}

/**
 * 根据路由地址获取菜单对象。（不对外开放）
 *  */
function getItem({store, path}) {
  const menuTree = store.getters.menuList;
  const menuList = LJSbase.handleTreeList(menuTree)
  const nums = menuList.length;
  for (let i = 0; i < nums; i++) {
    const item = menuList[i];
    if (item.url === path) {
      return item;
    }
  }
  return undefined;
}

/**
 * 手动跳转 - 菜单管理已注册的路由可用，不可跳转router/index.js配置的额外地址，这类地址需要走this.$router
 * @param {string} path 路由地址
 * @param {Object} query 携带参数
 * @example @click="$LJSmenu.handPush({store: this.$store, run: this.$run, path: '/carbonTrade/policyInfo'})"
 */
export function handPush({store, run, path, query = {}}) {
  const menuObj = getItem({store, path});
  menuControl({store, run, menuObj, query});
}

/**
 * 菜单打开机制，总控(Menu组件控制，单独跳转需求控制)
 * @param {Object} menuObj 菜单对象
 * @param {Object} query 携带参数
 * @example this.$LJSmenu.menuControl({store: this.$store, run: this.$run, menuObj});
 */
export function menuControl({store, run, menuObj, query}) {
  let menuList = store.getters.menuList;
  if (LJSbase.fieldCheck(menuObj.children)) {
    menuObj.children = [];
  }
  // 如果有子集，则展开，否则为点击
  if (menuObj.children.length > 0) {
    // 原本：展开
    if (menuObj.open) {
      menuObj.open = !menuObj.open;
    } 
    // 原本：关闭
    else {
      const parents = LJSbase.getTreeParents({
        data: menuList,
        value: menuObj.menuId,
        key: 'menuId'
      });
      updateTreeOpen({menuList, parents});
    }
    store.commit('SET_menuList', menuList);
  } else {
    // 是否外部链接
    if (!LJSbase.fieldCheck(menuObj.isFrame) && menuObj.isFrame === true) {
      goExternalUrl(menuObj.url)
      return;
    }

    // 处理正常的菜单业务
    const oldPpenMenu = store.getters.menuNowOpen;
    let menuTabList = store.getters.menuOpenList;
    // 当前展示的菜单，不重复打开
    if (oldPpenMenu.url === menuObj.url) {
      return;
    }
    // 获取菜单文字导航数据address
    menuObj.address = getAddress({data: store.getters.menuList, value: menuObj.url});
    let menuChoose = menuObj;
    // 更新数据集合中某个被选中的菜单数据。
    // this.$emit('updateMenuDataChooseState', menuObj);
    menuObj.choose = !menuObj.choose;
    // this.$emit('update:modelValue', this.menuList);
    store.commit('SET_menuNowOpen', menuChoose);
    // this.$emit('updateData');
    // 在卡片里的菜单，不重复添加卡片 - 开始
    const nums = menuTabList.length;
    let tabItemTag = false;
    for (let i = 0; i < nums; i++) {
      if (menuTabList[i].url === menuObj.url) {
        tabItemTag = true;
        break;
      }
    }
    if (!tabItemTag) {
      menuTabList = store.getters.menuOpenList;
      menuTabList.push(menuChoose);
      store.commit('SET_menuOpenList', menuTabList);
      // this.$emit('updateData');
    }
    // 在卡片里的菜单，不重复添加卡片 - 结束
    // this.$emit('pageAnimation');
    run.push({
      path: menuObj.url,
      query: query
    });
  }
}

/**
 * 更新菜单展开选项
 * @param {Array} menuList 菜单数据
 * @param {Array} parents 被展开菜单的父亲数据集合
 * @param {String} key 根据key进行判断
 * @returns {Array} 返回正确open展开状态的集合
 * @example 
const parents = this.$LJSbase.getTreeParents({
  data: this.menu.list,
  value: menuNowOpen.menuId,
  key: 'menuId'
});
this.$LJSmenu.updateTreeOpen({menuList: this.menu.list, parents});
 */
export function updateTreeOpen({menuList, parents, key = 'menuId'}) {
  menuList.forEach((item) => {
    if (item[key] === parents[0][key]) {
      item.open = true;
      if (parents.length > 1) {
        parents.splice(0, 1);
      }
    } else {
      item.open = false;
    }
    if (item.children && item.children.length > 0) {
      item.children = updateTreeOpen({menuList: item.children, parents, key});
    }
  });
  return menuList;
}

/**
 * 跳外部地址
 * @param {string} url 外部地址
 * @param {string} method 跳转方法，_self当前页，_blank新页签
 * @example this.$LJSmenu.goExternalUrl(url)
 *  */
export function goExternalUrl(url, method = '_blank') {
  window.open(url, method);
}


export default {
  fristOpenMenu,
  handPush,
  menuControl,
  updateTreeOpen,
  goExternalUrl,
};