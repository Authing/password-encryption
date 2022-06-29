import axios from 'axios'
import JSEncrypt from 'jsencrypt'
import { sm2 } from 'sm-crypto'

/**
 * public key
 * @returns {String}
 */
export async function getPublicKey () {
  const host = 'https://core.authing.cn'

  const api = `${host}/api/v2/.well-known`

  const res = await axios.get(api)

  return res.data.data.publicKey
}

/**
 * @param {String} plainText
 * @param {String} publicKey
 * @returns
 */
export function encryptNormal (plainText, publicKey) {
  const jsencrypt = new JSEncrypt()

  jsencrypt.setPublicKey(publicKey)

  const encrypted = jsencrypt.encrypt(plainText)

  return encrypted || ''
}

/**
 * @param {String} plainText
 * @param {String} publicKey
 * @returns {String}
 */
export function encryptSM2 (plainText, publicKey) {
  const encrypted = sm2.doEncrypt(plainText, publicKey)

  if (encrypted) {
    return `sm2:${encrypted}`
  }

  return ''
}
