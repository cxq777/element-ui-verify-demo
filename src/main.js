import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

// import elementUIVerify from 'element-ui-verify-modify'
import validater from './uitls/validater'

Vue.use(ElementUI)
// Vue.use(elementUIVerify)
Vue.use(validater.elementUIVerify, validater.config)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
