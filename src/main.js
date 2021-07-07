/**
 * 项目的启动入口
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element-ui组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式文件
import './styles/index.less'

// 全局注册
Vue.use(ElementUI)

// 关闭生产环境提示
Vue.config.productionTip = false

// 创建vue根实例 配置router
new Vue({
  router,
  render: h => h(App)
  // el: 'app' 等价于 $mount('#app')
}).$mount('#app')
