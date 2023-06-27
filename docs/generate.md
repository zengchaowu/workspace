## 生成静态网站时，ssr 的作用

**ssr 为 true：**

页面会先经过一次 node 渲染再抓取，所以其中会存在页面首次的状态。

**ssr 为 false：**

则生成的是单页应用，没有经过 node 的渲染直接抓取，html 中不带有页面状态。

首页未命中路由的问题：

由于 generate 时，页面的路由信息会注入到 index.html 中，关闭 ssr 时，注入信息为 index.html，在 vue-router 匹配会匹配不中。所以可以修改 index.html 中注入的 path 为/，从而让 vue-router 渲染/对应的组件。
