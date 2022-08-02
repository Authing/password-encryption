<div>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<br />

简体中文 | [English](https://github.com/Authing/password-encryption/blob/main/README.md) |

<div>
  <a href="https://forum.authing.cn/" target="_blank">
    <img src="https://img.shields.io/badge/chat-forum-blue" />
  </a>
  <a href="https://github.com/Authing/password-encryption" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-success" />
  </a>
</div>

<br />

Authing 提供两种加密方式: `jsencrypt` 和 `sm-crypto`

- `jsencrypt`: 用于浏览器端加密, https://www.npmjs.com/package/jsencrypt
- `node-jsencrypt`: 用于 node.js 端加密, https://www.npmjs.com/package/node-jsencrypt
- `sm-crypto`: https://www.npmjs.com/package/sm-crypto

### 浏览器

``` shell
npm install --save jsencrypt sm-crypto
```

### node.js

``` shell
npm install --save node-jsencrypt sm-crypto
```
## 示例
``` shell
# 浏览器
npm run start:browser

# node.js
npm run start:node
```

## 参考

- [浏览器端使用](./browser/lib.js)
- [node.js 端使用](./node/lib.js)

## 问题反馈

如果需要在线技术支持，可访问[官方论坛](https://forum.authing.cn/). 此仓库的 issue 仅用于上报 Bug 和提交新功能特性。

## 开源共建

- Fork 此仓库
- 创建自己的 git 分支 (git checkout -b my-new-feature)
- 提交你的修改 (git commit -am 'Add some feature')
- 将修改内容推送到远程分支 (git push -u origin my-new-feature)
- 创建一个 Pull Request

## 开源许可

[MIT](https://github.com/Authing/password-encryption/blob/main/LICENSE)

Copyright (c) 2022 Authing

## 友情链接

- [AuthingMove](https://github.com/Authing/AuthingMove)
- [authingmove-template](https://github.com/Authing/authingmove-template)
- [eslint-plugin-authing-nestjs](https://github.com/authing/eslint-plugin-authing-nestjs/)
