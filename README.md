npm install
npm run build
npm run test

```
TypeError: __exportAll is not a function
```

Two ways to make it work again:

* Disable `chunkOptimization` in `rollup.config.js`
* Downgrade rolldown to version `1.0.0-beta.58` in `package.json`