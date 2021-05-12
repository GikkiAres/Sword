<template>
    <div>
        <el-table :data="dataSource" border style="width: 100%">
                <el-table-column label="Author">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.author }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="Repository Name">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.repositoryName }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="Repository Url">
                    <template slot-scope="scope">
                        <span style="margin-left: 10px">{{ scope.row.repositoryUrl }}</span>
                    </template>
                </el-table-column>
        </el-table>
    </div>
</template>

<script>
    //内部的js函数
    function post(q,type) {
        let result = q + type;
        return result;
    }
    let arr_models = [{"author":"GikkiAres","repositoryName":"GASnowWord-Master","repositoryUrl":"https://github.com/GikkiAres/GASnowWord-Master"},
        {"author":"GikkiAres","repositoryName":"YouAreTheThinnest","repositoryUrl":"https://github.com/GikkiAres/YouAreTheThinnest"}
    ];

    //暴露给外界的?
    export default {
        name: 'hello',
        //定义TableView组件的两个参数,一个urlString,一个type
        props:["urlString","type"],
        //定义data属性,表示每次访问都要执行该方法里的函数???
        //data的return里定义的是Vue对象的属性.
        data () {
            // query(this.query,this.type);
            return {
                dataSource: arr_models
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
<!-- 
1


-->