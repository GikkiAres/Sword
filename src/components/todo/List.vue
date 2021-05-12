<template>
  <div id="vue_det">
    <div>
      <el-switch
        style="display: block"
        v-model="mb_isUseDatabase"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="UseDatabase"
        inactive-text="UseLocalData"
        @change="onToggleDatasource"
      >
      </el-switch>
    </div>
    <el-table :data="mArr" border style="width: 100%">
      <!-- <el-table-column type="selection"></el-table-column> -->
      <el-table-column label="Todo Index">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Todo 标题">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Todo 详情">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.detail }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- scope.$index是序号,scope.row是行的数据 -->
          <el-button
            type="primary"
            size="small"
            @click="onClickEdit(scope.$index, scope.row)"
            icon="el-icon-edit"
            circle
            >编辑</el-button
          >
          <el-button
            type="success"
            size="small"
            @click="onClickView(scope.$index, scope.row)"
            icon="el-icon-check"
            circle
            >Review</el-button
          >
          <el-button
            @click.native.prevent="onClickDelete(scope.$index, scope.row)"
            type="danger"
            size="small"
            icon="el-icon-delete"
            circle
            >删除</el-button
          >
          <el-button
            type="success"
            size="small"
            @click="onClickTest"
            icon="el-icon-check"
            circle
            >Test</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button
      type="primary"
      v-on:click="onClickAddTodo1"
      icon="el-icon-plus"
      size="mini"
    >
      添加</el-button
    >
  </div>
</template>


<script type="text/javascript">
// let arr_models = Vue.prototype.ToDoStore;
import axios from "axios";
import { Message } from "element-ui";
export default {
  data() {
    return {
      //返回全局变量的todo
      mArr: this.TodoStore1.todoList,
      mb_isUseDatabase: false,
    };
  },
  methods: {
    details1: function () {
      // this.sayHello()
      return "Welcome to vue world11!";
    },
    onClickAddTodo: function () {
      // 直接修改url
      window.location.href = "#/todoDetail";
    },
    onClickAddTodo1: function () {
      // 直接修改url
      //用这种方法传参，必须这么些，不能写path,否则你在取参数的时候this.$router.params.userId就是undefined.这是因为，params只能用name来引入路由，
      this.$router.push({
        name: "todoDetail", //这个name就是你刚刚配置在router里边的name
        params: {
          action: this.GT.ListActionAdd,
          model: {
            id: this.arr.length,
            title: "test",
            detail: "sdfsdf",
          },
        },
      });
    },
    onClickEdit: function (index, data) {
      console.log("index is :" + index + ",object is :" + data);
      this.$router.push({
        name: "todoDetail", //这个name就是你刚刚配置在router里边的name
        params: {
          action: this.GT.ListActionEdit,
          model: data,
        },
      });
    },
    onClickView: function (index, data) {
      console.log("index is :" + index + ",object is :" + data);
      this.$router.push({
        name: "todoDetail", //这个name就是你刚刚配置在router里边的name
        params: {
          action: this.GT.ListActionView,
          model: data,
        },
      });
    },
    onClickDelete: function (index, data) {
      // 直接修改url
      this.mArr.splice(index, 1);
    },
    onClickTest: function () {
      Message("调用Api");
      let url =
        "https://api.github.com/search/users?q=followers:%3E1000&sort=followers&order:desc";
      url = "http://127.0.0.1:80/todo/search?id=3";
      axios.get(url).then(function (response) {
        mArr = response.data.data;
        window.console.log(mArr);
      });
    },
    onToggleDatasource: function (isUseDatabase) {
      //   if (this.mb_isUseDatabase) {
      if (isUseDatabase) {
        Message("使用数据库");
        let url = "http://localhost:8080/GajSsmTemplate/todo/list";

        axios.post(url).then((response)=>{
          this.mArr = response.data.data;
          window.console.log(this.mArr);
        });
        // .catch(function() {
        //     Message.error("API调用次数过多，请过几秒再试 The Github API is responding 403");
        // });
      } else {
        Message("使用本地数据");
      }
    },
  },
  beforeDestroy() {
    //当发生路由到其他页面时,这个vue就销毁了. 如何保存数据?
    console.log("\n>>>>>>Todo list destroyed>>>>>>");
    // console.log(this.$route.params);
  },
};
</script>
