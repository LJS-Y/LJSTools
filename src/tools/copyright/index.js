/** 
 * @module Author's_self_description
 * @description The world is most beautiful when flowers bloom.
 *  */

import LJSbase from '@/tools/base';
export default () => {
  LJSbase.colorLog({content: ['', '******************************************']});
  LJSbase.colorLog({content: ['Core Dependencies：', 'ljs-tools']});
  LJSbase.colorLog({content: ['Author：', import.meta.env.VITE_COMPANY_OWNER]});
  LJSbase.colorLog({content: ['API', 'https://ljs-y.github.io/ljs-vue3'], color: [
    'background: #666666; color: #fff; border-radius: 4px 0 0 4px; padding: 3px 6px;',
    'background: #FFF; border: 1px solid #666666; color: #fff; border-radius: 0 4px 4px 0; padding: 2px 6px;'
  ]});
  LJSbase.colorLog({content: ['', '******************************************']});
};
