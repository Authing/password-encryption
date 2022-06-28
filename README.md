# Password encryption demo

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

## Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push -u origin my-new-feature)
- Create new Pull Request

## License

MIT
