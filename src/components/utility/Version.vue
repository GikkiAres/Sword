<template>
    <div class="div1">
        <button @click="onClick_1">{{text || '确认'}}</button>
    </div>
</template>

<script>
export default {
    name:"First",
    props:["text"],
    data() {
        return {
            msg: true
        };
    },
    methods: {
        onClick_1() {
            //更新父容器的message属性.
            this.$emit("message",this.msg);
        }
    }
};
</script>

<!--Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>