<template>
    <div>
        <div class="com-title">文章列表</div>
        <trending type="article"  :defaultData="defaultData" ></trending>
    </div>
</template>
<script>
    import Trending from '../Trending.vue';
    export default {
        name:'article',
        created: function() {
            let vm = this
        },
        data: function() {
            return {
                msg: '',
                defaultData:['新版汽车销售管理办法','自动驾驶','轻量化','特斯拉']
            }
        },
        methods:{
            test:function () {
                console.log(this.$route.path)
            }
        },
        components:{
            Trending
        }
    }
</script>