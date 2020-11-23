<template>
    <div class="HelloMyWorld">
        {{message}}
        <p><button v-on:click="reverseMessage">反转字符串</button></p>
        <p><input v-model="message"></p>
    </div>
</template>

<script>
export default {
    name:"First",
    data() {
        return {
            message: "This is Home",
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