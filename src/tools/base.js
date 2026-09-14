/** 
 * @module base
 * @description 基础常用处理方法
 *  */

import copyright from '@/tools/copyright';
import { checkNum } from '@/tools/num';
import { getUrlAllParameter, formatParamsByAscii } from '@/tools/url';

/**
 * 字段判断：判断某个字段，是否为undefined、null、''。
 * @param {any} field 需要判断的字段
 * @returns {Boolean} 该字段是否为undefined || null || ''。
 * @example this.$LJSbase.fieldCheck(this.aaaa)
 */
export function fieldCheck(field) {
  if (field === undefined || field === null || field === '') {
    return true;
  }
  return false;
}

/**
 * 树 - 通过一个值反查
 * @param {Array} data 原始数据
 * @param {String} value 选中的数据唯一值
 * @param {String} key 选中的数据唯一值对应的key，默认id
 * @param {String} children 子集对应的集合，默认children
 * @returns {Array} 选中的数据包括直系父的集合
 * @example const parents = this.$LJSbase.getTreeParents({data, value, key});
 */
export function getTreeParents({data, value, key = 'id', children = 'children', parents = []}) {
  if (fieldCheck(data)) {
    return parents
  };
  const nums = data.length;
  for (let i = 0; i < nums; i++) {
    if (data[i][key] === value) {
      parents.unshift(data[i]);
      return parents;
    }
    if(!fieldCheck(data[i][children])) {
      parents = getTreeParents({
        data: data[i][children],
        value,
        key,
        children,
        parents});
      if (parents.length > 0 && parents[parents.length - 1][key] === value) {
        parents.unshift(data[i]);
        return parents;
      }
    }
  }
  return parents;
}

/**
 * 树数据 - 根据条件处理为部分禁用选择的新树
 * @param {Array} data 原始数据
 * @param {Array} opts 条件数组
 * @param {String} opts.value 需要禁用项的对比值
 * @param {String} opts.key 需要禁用项的对比值对应的键名
 * @param {Boolean} disabled 是否可以选择，自用参数，不对外开放。
 * @param {Boolean} fatherInfluenceSon 父是否影响子。
 * @returns {Array} 根据条件返回一个部分禁用选择的树数据。
 * @example this.$LJSbase.editTreeParentIdCheck({data, opts: [{value: 32, key: 'id'}, {value: 3, key: 'level'}]});
 * @example this.$LJSbase.editTreeParentIdCheck({data});
 */
export function editTreeParentIdCheck({data, opts = [], disabled = false, fatherInfluenceSon = true}) {
  if (!data) {
    return;
  }
  const nums = data.length;
  for (let i = 0; i < nums; i++) {
    data[i].disabled = disabled;
    let bool = false;
    const optsNums = opts.length;
    for (let j = 0; j < optsNums; j++) {
      const opt = opts[j];
      if (data[i][opt.key] === opt.value) {
        bool = true;
        break;
      }
    }
    
    if (bool) {
      data[i].disabled = true;
      data[i].children = editTreeParentIdCheck({data: data[i].children, opts, disabled: fatherInfluenceSon, fatherInfluenceSon });
    } else {
      if(data[i].children !== undefined){
        data[i].children = editTreeParentIdCheck({data: data[i].children, opts, disabled, fatherInfluenceSon});
      }
    }
  }
  return data;
}

/**
 * 数据转换 - tree转list
 * @param {Array} treeList 待转换的树结构数据。
 * @returns {Array} 转换后的数据。
 * @example this.$LJSbase.handleTreeList(tree);
 */
export function handleTreeList(treeList) {
  let list = [];
  if (!treeList || !treeList.length) {
    return []
  }
  for (let i = 0; i < treeList.length; i++) {
    let currentRow = treeList[i];
    let newRow = JSON.parse(JSON.stringify(currentRow));
    newRow.children = undefined;
    list.push(newRow);
    const tempList = this.handleTreeList(currentRow.children);
    list = list.concat(tempList);
  }
  return list;
}

/**
 * 数据转换 - list转tree
 * @param {Array} data 待转换的数据。
 * @param {String} id 自身id键。
 * @param {String} parentId 父id键。
 * @param {String} children children键。
 * @example this.$LJSbase.handleListTree({data});
 */
export function handleListTree({data, id = 'id', parentId = 'parentId', children = 'children'}) {
  let config = { id, parentId, childrenList: children };

  var childrenListMap = {};
  var nodeIds = {};
  var tree = [];

  for (let d of data) {
    let parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (let d of data) {
    let parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
}

/**
 * 根节点字体大小计算
 * @param {Number} xs PC端120为16号字；移动端25为30rpx；pad未处理
 * @example this.$LJSbase.setRemUnit(); 返回结果根节点的font-size大小。
 */
export function setRemUnit(xs = 120) {
  var docEl = document.documentElement;
  var rem = docEl.clientWidth / xs; // 可根据不同电脑分辨率进行手动修改（如1920*1080 为19.2
  docEl.style.fontSize = rem + 'px'
}

/**
 * 字典值回显，接口值回显
 * @param {Array} data 基础数据
 * @param {String} value value
 * @param {String} labelKey 查找的名称key。如果参数值为$index，则返回索引值。
 * @param {String} valueKey 比对的数据key
 * @param {Boolean} isTrue false时为字符串，true时为布尔型
 * @returns {Array} 返回值所对应的文本。
 * @example this.$LJSbase.selectDictLabel({data, value: '1'})
 */
export function selectDictLabel({data, value, labelKey = 'dictLabel', valueKey = 'dictValue', isTrue = false}) {
  if (value === undefined) {
    return '';
  }
  let actions = [];
  Object.keys(data).some((key, i) => {
    if (data[key][valueKey] == ('' + value)) {
			if (labelKey === '$index') {
				actions = i;
				return i;
			} else {
				actions.push(data[key][labelKey]);
			}
      return true;
    }
  })
	// 返回索引值
	if (labelKey === '$index') {
		return checkNum(actions) ? actions : null;
	}
  if (actions.length === 0) {
    actions.push(value);
  }
  if (isTrue) {
    return actions[0];
  }
  return actions.join('');
}

/**
 * 字典数据处理
 * @param {Array} data 字典数据
 * @param {String} valueKey 对照值。默认 dictValue
 * @param {Array} del 根据 dictValue 去除数据。del和retain同时传一个即可
 * @param {Array} retain 根据 dictValue 保留数据
 * @return 新的模块数据
 * @example this.$LJSbase.dictDataChange({data})
 */
export function dictDataChange({
  data = [],
  valueKey = 'dictValue',
  del = null,
  retain = null
}) {
  if (del !== null) {
    const dictList = deepCopy(data);
    const indexs = []
    del.forEach((value) => {
      const index = selectDictLabel({data: dictList, value, labelKey: '$index', valueKey})
      if (index !== null) {
        indexs.push(index)
      }
    })
    indexs.sort(function(a, b){ return b - a })
    indexs.forEach((index) => {
      dictList.splice(index, 1)
    })
    return dictList
  } else if (retain !== null) {
    const dictList = []
    data.forEach((item) => {
      if (retain.indexOf(item[valueKey]) > -1) {
        dictList.push(item)
      }
    })
    return dictList
  }
  return data
}

/**
 * 输出带颜色的日志
 * @param {Array} content log内容
 * @param {String} type 日志类型，与console同步
 * @param {Array} color 颜色，与content数据同步
 * @example const technicalSupport = ['技术支持：', ''];
 * colorLog({content: technicalSupport});
 */
export function colorLog({content = ['暂无内容'], type = 'info', color = [
  'background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;',
  'background: #1475B2; color: #fff; border-radius: 0 4px 4px 0; padding: 3px 6px;'
]}) {
  let logStr = '';
  content.forEach((item) => {
    logStr += `%c${item}`;
  });
  console[type](logStr, color[0], color[1]);
}

/**
 * 下载图片 - 根据图片地址提供下载功能
 * @param {Object} _this this
 * @param {String} url 图片的绝对路径
 * @param {String} name 图片名称
 * @param {Function} loadcallback 图片onload完成的回调
 * @example this.$LJSbase.downloadImage({_this: this, url: scope.row.quickResponseCode, name: `${scope.row.itemName}-${scope.row.typeName}-${scope.row.itemNo}`});
 */
export function downloadImage({_this, url, name = new Date().valueOf(), loadcallback = () => {}}) {
  let image = new Image();
  // 解决跨域 canvas污染问题
  image.setAttribute('crossOrigin', 'anonymous');
  const allParameter = getUrlAllParameter(url);
  url = allParameter[0]
  let query = {}
  if (allParameter.length === 2) {
    query = {
      ...allParameter[1],
    }
  }
  query._time = new Date().valueOf();
  image.src = url + '?time=' + formatParamsByAscii(query); // 加时间戳
  _this.$nextTick(() => {
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      context.drawImage(image, 0, 0, image.width, image.height);
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = name;
        a.href = url;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      })
      loadcallback()
    }
  });
}

/**
 * 图片流转换为base64
 * @param {Blob} fileFlow 文件流
 * @returns {String} 返回base64，不是流或文件则返回空字符串。
 * @example const base64Str = await this.$LJSbase.imageFileToBase64(fileFlow);
 */
export function imageFileToBase64(fileFlow) {
  if (fileFlow instanceof Blob || fileFlow instanceof File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      // 设置文件加载完成事件的回调函数
      reader.onloadend = () => resolve(reader.result);
    
      try {
        // 开始读取文件
        reader.readAsDataURL(fileFlow);
      } catch (error) {
        reject(error);
      }
    });
  } else {
    return '';
  }
}

/**
 * 获取浏览器的百分比
 * @returns {Number} 返回浏览器的百分比数值。
 * @example this.$LJSbase.getWindowRatio();
 */
export function getWindowRatio() {
  var ratio = 0;
  var screen = window.screen;
  var ua = navigator.userAgent.toLowerCase();

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
    ratio = window.outerWidth / window.innerWidth;
  }

  if (ratio) {
    ratio = Math.round(ratio * 100);
  }
  return ratio;
}

/**
 * 深拷贝
 * @param {Any} obj 待深拷贝数据
 * @returns {Any} 返回深拷贝后的数据。
 * @example this.$LJSbase.deepCopy();
 */
export function deepCopy(obj) {
  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepCopy(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

/**
 * 对象数据补漏覆盖
 * @param {Object} parameterObj 参数对象
 * @param {Object} defaultObj 默认对象
 * @returns {Object} 不改变原有数据，返回一个大而全的新对象。
 * @example this.$LJSbase.objectCopy(parameterObj, defaultObj);
 */
export function objectCopy(parameterObj, defaultObj) {
  if (typeof parameterObj !== "object" || typeof defaultObj !== "object") {
    console.warn(`传入参数需为 object 类型，请检查参数：parameterObj 和 defaultObj`)
    return defaultObj;
  }
  const parameter = deepCopy(parameterObj);
  const def = deepCopy(defaultObj);
  for (let key in parameter) {
    def[key] = parameter[key];
  }
  return def;
}

export default {
  fieldCheck,
  deepCopy,
  getTreeParents,
  editTreeParentIdCheck,
  handleTreeList,
  handleListTree,
  setRemUnit,
  selectDictLabel,
  dictDataChange,
  colorLog,
  downloadImage,
  imageFileToBase64,
  getWindowRatio,
  objectCopy,
};
copyright();