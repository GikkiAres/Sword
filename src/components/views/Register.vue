<template>
    <div class="HelloMyWorld">
        {{msg}}
        <p><router-link to="/home">返回</router-link></p>
    </div>
</template>

<script>
export default {
    name:"First",
    data() {
        return {
            msg: "This is register"
        };
    }
};
</script>

<!--Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>