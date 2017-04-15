# vue-simple-demo (WebGIS-FrontEnd)

> A Vue.js project for WebGIS-FrontEnd, uses Vue2.0 + Vuex + Vue-Router

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##说明
最近学了下vue，这里做个梳理，麻雀虽小五脏俱全
使用Vue2.0 + Vue-Router + Vuex（简单demo示例通过vuex store进行登陆信息存储及调用）
调用了外部baidu地图BMap API，不知道怎么调用外部API的可以参考本例


##src目录结构说明

``` bash
components：公共可复用的组件
router：路由map和别名map
store：vuex
views：业务组件
App.vue：根组件
main.js：打包入口文件
```
