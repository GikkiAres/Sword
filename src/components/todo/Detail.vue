<template>
  <div id="vue_det">
    <!-- 表单和too实现了双向绑定 todo改变,表单内容更新  表单内容更新 todo变量的值也会刷新 -->
    <el-form ref="todo" :model="todo" label-width="200px">
        <el-form-item label="Todo Index">
            <el-input v-model="todo.id"></el-input>
        </el-form-item>
 
        <el-form-item label="Todo Title">
            <el-input v-model="todo.title"></el-input>
        </el-form-item>

        <el-form-item label="Todo Detail">
            <el-input v-model="todo.detail"></el-input>
        </el-form-item>

    <el-form-item>
        <el-button v-if="1" type="primary" @click="onSubmit">新增{{this.GT.ListActionAdd}}</el-button>
        <el-button v-if="0" type="primary" @click="onSubmit">保存</el-button>
        <el-button v-if="(this.action == this.GT.ListActionView)" type="primary" @click="onSubmit">返回</el-button>
        <!-- <el-button>取消</el-button>
        <el-button @click="onReturn">返回</el-button> -->
  </el-form-item>

     </el-form>

</div>
</template>


<script type="text/javascript">
    export default {
       data() {
      return {
        todo: {
          id: 0,
          title: '',
          detail: ''
        },
        action:0
      }
    },
    methods: {
      onSubmit() {
        //设置路由的时候,可以传递参数.
        this.TodoStore1.todoList.push(this.todo);
        this.$router.push({
                    name:"todoList",//这个name就是你刚刚配置在router里边的name
                    // params:self.todo
        });
      },
      onReturn() {
        this.$router.push({
                    name:"todoList",//这个name就是你刚刚配置在router里边的name
                    // params:self.todo
        });
      }
    },
      // vue还未获取到视图和数据属性之前触发的
            beforeCreate(){
                console.log('\n>>>>>>beforeCreate>>>>>>')
                console.log(this.$el);
                console.log(this.$data);
                // console.log(this.$route.params);
            },
            // vue对象获取到了数据属性,但是还没有获得圈地(视图)时触发的
            created(){
                console.log('\n>>>>>>created>>>>>>')
                console.log(this.$el);
                console.log(this.$data);
                //更新数据,列表会自动更新.
                this.todo = this.$route.params.model;
                this.action = this.$route.params.action;
                // console.log(this.$route.params);
            },

            // 拿到了视图,但是数据属性挂载到视图之前触发的.
            beforeMount(){
                console.log('\n>>>>>>beforeMount>>>>>>')
                console.log(this.$el);
                console.log(this.$data);
                // console.log(this.$route.params);
            },

            // 数据属性挂载到视图之后触发的.
            mounted(){
                console.log('\n>>>>>>mounted>>>>>>')
                console.log(this.$el);
                console.log(this.$data);
                // console.log(this.$route.params);
            }
            // 重点记住created和mounted,将来我们在这两个方法中来发送获取数据的请求
       
    }
</script>
