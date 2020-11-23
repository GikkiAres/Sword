<template>
    <div class="HelloMyWorld">
        {{message}}
        <h5>site:{{site}}</h5>
        <h6>Author:{{author}}</h6>
        <p><router-link to="/register">注册</router-link></p>
        <button v-on:click="reverseMessage">反转字符串</button>
        <br/>
        <input v-model="message">
    </div>
</template>

<script>
export default {
    name:"First",
    data() {
        return {
            site:"http://www.tinywind.top",
            message: "This is Home",
            author:"GikkiAres"
        };
    },
    methods: {
    reverseMessage: function () {
      this.message = this.reverseString(this.message);
    },
    reverseString:function(str) {
    	 str = str.split('').reverse().join('');
    	return str;
    }
  }
};
</script>

<!--Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>