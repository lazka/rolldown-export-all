* `npx rolldown@1.0.0-rc.2 -c rolldown.config.js`
* `nodejs dist/dbp-activity-showcase.js`

```
TypeError: __exportAll is not a function
```

Two ways to make it work again:

* Disable `chunkOptimization` in `rollup.config.js`
* Use `rolldown@1.0.0-beta.58`
