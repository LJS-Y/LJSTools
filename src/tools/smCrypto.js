import { SM2, SM3, SM4 } from 'gm-crypto'

// ====================== SM2 非对称加密/签名/验签 ======================
export const SM2Util = {
  // 生成 SM2 密钥对（公钥+私钥）
  generateKeyPair() {
    return SM2.generateKeyPair()
  },

  // 公钥加密
  encrypt(data, publicKey) {
    return SM2.encrypt(data, publicKey, {
      inputEncoding: 'utf8',
      outputEncoding: 'base64'
    })
  },

  // 私钥解密
  decrypt(encryptedData, privateKey) {
    return SM2.decrypt(encryptedData, privateKey, {
      inputEncoding: 'base64',
      outputEncoding: 'utf8'
    })
  },

  // 私钥签名（常用：交易签名、身份认证）
  sign(data, privateKey) {
    return SM2.sign(SM3.digest(data), privateKey, 'base64')
  },

  // 公钥验签
  verify(data, signature, publicKey) {
    return SM2.verify(SM3.digest(data), signature, publicKey, 'base64')
  }
}

// ====================== SM3 哈希摘要 ======================
export const SM3Util = {
  // 计算数据摘要（指纹）
  digest(data) {
    return SM3.digest(data, 'utf8', 'hex')
  }
}

// ====================== SM4 对称加密/解密 ======================
export const SM4Util = {
  // 生成随机16位密钥（SM4固定128位）
  generateKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let key = ''
    for (let i = 0; i < 16; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return key
  },

  // 加密（传输/存储用）
  encrypt(data, key) {
    return SM4.encrypt(data, key, {
      inputEncoding: 'utf8',
      outputEncoding: 'base64'
    })
  },

  // 解密
  decrypt(encryptedData, key) {
    return SM4.decrypt(encryptedData, key, {
      inputEncoding: 'base64',
      outputEncoding: 'utf8'
    })
  }
}


/**
 * 
 * 最终实现流程（完全对应你的要求）
后端提供 SM2 公钥
前端随机生成 SM4 发送密钥 A、接收密钥 B
前端用后端 SM2 公钥加密 A+B
传给后端
后端用 SM2 私钥解密得到 A、B
前端→后端：密钥 A 加密
后端→前端：密钥 B 解密
 * 
 */
export default {
  SM2Util,
  SM3Util,
  SM4Util,
}