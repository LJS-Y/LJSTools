import { sm2, sm3, sm4 } from 'sm-crypto'

// ====================== 签名载体转换（对外 base64，sm-crypto 原生 hex） ======================
function hexToBase64(hex) {
  const bytes = hex.match(/.{2}/g) || []
  return btoa(bytes.map(b => String.fromCharCode(parseInt(b, 16))).join(''))
}
function base64ToHex(b64) {
  const bin = atob(b64)
  let hex = ''
  for (let i = 0; i < bin.length; i++) hex += bin.charCodeAt(i).toString(16).padStart(2, '0')
  return hex
}

// ====================== sm2 非对称加密/签名/验签 ======================
export const SM2Util = {
  // 生成 sm2 密钥对（公钥+私钥）
  generateKeyPair() {
    return sm2.generateKeyPairHex()
  },

  // 公钥加密； 1 - C1C3C2，0 - C1C2C3，默认为1
  encrypt(data, publicKey, cipherMode = 1) {
    return sm2.doEncrypt(data, publicKey, cipherMode)
  },

  // 私钥解密
  decrypt(encryptedData, privateKey, cipherMode = 1) {
    return sm2.doDecrypt(encryptedData, privateKey, cipherMode)
  },

  // 私钥签名（国密标准 SM2 签名：内部对 ZA||M 做 SM3 杂凑；输出 base64，内容为 r||s 拼接）
  sign(data, privateKey) {
    return hexToBase64(sm2.doSignature(data, privateKey, { hash: true, der: false }))
  },

  // 公钥验签（入参为 sign 输出的 base64 签名；同为国密标准杂凑）
  verify(data, signature, publicKey) {
    return sm2.doVerifySignature(data, base64ToHex(signature), publicKey, { hash: true, der: false })
  }
}

// ====================== sm3 哈希摘要 ======================
export const SM3Util = {
  // 计算数据摘要（指纹）；sm-crypto 的 sm3 为函数，直接返回 hex
  digest(data) {
    return sm3(data)
  }
}

// ====================== sm4 对称加密/解密 ======================
export const SM4Util = {
  // 生成随机16位密钥（sm4固定128位）
  generateKey() {
    const buf = crypto.getRandomValues(new Uint8Array(16))
    return Array.from(buf, b => b.toString(16).padStart(2, '0')).join('')
  },

  // 加密（传输/存储用）
  encrypt(data, hexKey) {
    return sm4.encrypt(data, hexKey)
  },

  // 解密
  decrypt(encryptedData, key) {
    return sm4.decrypt(encryptedData, key)
  }
}


/**
 * 
 * 最终实现流程（完全对应你的要求）
后端提供 sm2 公钥
前端随机生成 sm4 发送密钥 A、接收密钥 B
前端用后端 sm2 公钥加密 A+B
传给后端
后端用 sm2 私钥解密得到 A、B
前端→后端：密钥 A 加密
后端→前端：密钥 B 解密
 * 
 */
export default {
  SM2Util,
  SM3Util,
  SM4Util,
}