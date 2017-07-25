<template>
    <div>
        <div class="com-title">首页</div>
        <div class="main-logo"><img src="../assets/logo.png" alt=""></div>
        <div class="home-content">使用 vue 单文件组件 和 vue-router 制作你的第一个单页应用</div>
    </div>
</template>
<script>
    export default {
        name:'dialog',
        data:function () {
            return {
                message:''
            }
        },
        methods:{

        }
    }
</script>
<style scoped>
    .main-logo{
        margin-top: 20px;
    }
    .home-content{
        color: #42b983;
        font-size: 24px;
    }
</style>