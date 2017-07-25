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
        data: function() {
            return {
                msg: '',
                defaultData:['汽车销售','自动驾驶','轻量化','特斯拉']
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