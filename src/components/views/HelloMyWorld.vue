<template>
    <div class="HelloMyWorld">
        {{msg}}
        <version text="CurrentVersion:0.0.0(0)" @message="getMessage"></version>
    </div>
</template>

<script>
//引入子组件
import Version from '../utility/Version'
export default {
    name:"First",
    components:{
        Version
    },
    data() {
        return {
            msg: "Hello,my world!!"
        };
    },
    methods:{
        //message值更新后,会调用的方法.
        getMessage(value) {
            // alert(value);
            msg = "111";
        }
    }
};
</script>

<!--Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>