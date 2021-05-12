function sayHello() {
  debugger;
  alert("Hello!");
}

//定义了几个变量,并暴露出去.
export default {

  install:function(Vue) {
    Vue.prototype.sayHello = function() {
      sayHello();
    }
  }
}

/*
1,Vue是一个类,通过prototype为其增加属性.
2,debugger;关键字,浏览器会在遇到debugger时,打个断点.
*/