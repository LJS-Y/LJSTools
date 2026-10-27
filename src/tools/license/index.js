/** 
 * @module license
 * @description 鉴权
 *  */
import LJScryptoJs from '@/tools/cryptoJs';

/**
 * 日期鉴权
 * @returns {Array} 是否通过鉴权
 * @example
if (!LJSlicense.licenseDateCheck()) {
  console.info('鉴权有效期已到，请联系运营商授权。');
  session.clearVuex();
}
 * */
// console.log(LJScryptoJs.setDES('2023-07-27 00:00:00', 'SRKJ_LJS_license_date_2023_07_27'));
const licenseDateAll = 30 * 1; // 天
export function licenseDateCheck() {
  const licenseDate = new Date(LJScryptoJs.getDES(window.g.SRKJ_APP, 'SRKJ_LJS_license_date_2023_07_27')).getTime();
  const nowTime = new Date().getTime();
  const useTime = (nowTime - licenseDate) / 1000 / 60 / 60 / 24; // 天
  if (useTime <= licenseDateAll) {
    return true;
  }
  return false;
}

export default {
  licenseDateCheck,
};
