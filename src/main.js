// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GT from './components/GlobalTool/GlobalTool'
import gt2 from './components/GlobalTool/GlobalTool2'
import gt3 from './components/GlobalTool/GlobalTool3'
import TodoStore1 from '@/components/todo/TodoStore.vue'
Vue.prototype.TodoStore1 = TodoStore1;


/*引入下面三行*/
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import 'element-ui/lib/theme-default/index.css';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false
Vue.prototype.GT = GT;
Vue.prototype.gt2 = gt2
Vue.prototype.greet = function (message) {
  alert(message);
}

Vue.prototype.greet2 = (message) => alert(message);
Vue.use(gt3)

// debugger;
window.console.log("main.js");
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/**
 * main.js貌似是最先加载的.
 */