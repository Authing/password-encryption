# Password encryption

<div>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<br />

English | [简体中文](https://github.com/Authing/password-encryption/blob/main/README-zh_CN.md) |

<div>
  <a href="https://forum.authing.cn/" target="_blank">
    <img src="https://img.shields.io/badge/chat-forum-blue" />
  </a>
  <a href="https://github.com/Authing/password-encryption" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-success" />
  </a>
</div>

<br />

Authing provides two encryption methods: `jsencrypt` and `sm-crypto`

- `jsencrypt`: general encryption for browser, https://www.npmjs.com/package/jsencrypt
- `node-jsencrypt`: gengeral encryption for Node.js, https://www.npmjs.com/package/node-jsencrypt
- `sm-crypto`: https://www.npmjs.com/package/sm-crypto

### Browser

``` shell
npm install --save jsencrypt sm-crypto
```

### Node.js

``` shell
npm install --save node-jsencrypt sm-crypto
```
## Run examples
``` shell
# browser
npm run start:browser

# node
npm run start:node
```

## Reference

- [use in browser](./browser/lib.js)
- [use in node.js](./node/lib.js)

## Questions

For questions and support please use the [official forum](https://forum.authing.cn/). The issue list of this repo is exclusively for bug reports and feature requests.

## Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push -u origin my-new-feature)
- Create new Pull Request

## License

[MIT](https://github.com/Authing/password-encryption/blob/main/LICENSE)

Copyright (c) 2022 Authing

## Links

- [AuthingMove](https://github.com/Authing/AuthingMove)
- [authingmove-template](https://github.com/Authing/authingmove-template)
- [eslint-plugin-authing-nestjs](https://github.com/authing/eslint-plugin-authing-nestjs/)
