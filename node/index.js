const { sm2 } = require('sm-crypto')
const { getPublicKey, encryptNormal, encryptSM2 } = require('./lib')

testEncryptNormal()
testEncryptSM2()

async function testEncryptNormal () {
  const publicKey = await getPublicKey()

  const encrypted = encryptNormal('123', publicKey)

  console.log('testEncryptNormal encrypted: ', encrypted)
}

function testEncryptSM2 () {
  const { publicKey, privateKey } = sm2.generateKeyPairHex()
  const encrypted = encryptSM2('123', publicKey)

  console.log('testEncryptSM2 doEncrypt: ', encrypted)
  console.log('testEncryptSM2 doDecrypt: ', sm2.doDecrypt(encrypted.slice(4), privateKey))
}
