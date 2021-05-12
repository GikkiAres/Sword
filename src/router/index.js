import Vue from 'vue'
import Router from 'vue-router'

//引入的组件的名称,和组件文件的路径.
import TodoList from '@/components/todo/List'
import ToDoDetail from '@/components/todo/Detail'
Vue.use(Router)

window.console.log("index.js");
export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoList',
      component: TodoList
    },
    {
      path: '/todoDetail',
      name: 'todoDetail',
      component: ToDoDetail
    }
  ]
})
