<template>
    <div>
        <div class="com-title">行业热点</div>
        <trending type="industry"  :defaultData="defaultData" ></trending>
    </div>
</template>
<script>
    import Trending from '../Trending.vue';
    export default {
        data: function() {
            return {
                msg: '',
                defaultData:['市场资讯','政策解读','车身轻量化','动力电池']
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