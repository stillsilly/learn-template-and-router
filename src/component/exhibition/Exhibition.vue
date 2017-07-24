<template>
    <div id="exhibition">
        <div class="com-title">会展资源</div>
        <div style="height: 200px;border: 1px solid #9FC6B4;margin-top: 20px ">这里是其他模块</div>
        <div style="height: 500px;width: 500px;display: inline-block;border: 1px solid #9FC6B4;vertical-align: top;border-top: 0">占位</div>
        <div style="height: 500px;width: 500px;display: inline-block;border: 1px solid #9FC6B4;border-top: 0">
            <trending type="exhibition"  :defaultData="defaultData" ></trending>
        </div>

    </div>
</template>
<script>
    import Trending from '../Trending.vue';
    export default {
        data: function() {
            return {
                msg: '',
                defaultData:['行业展会','展会','新能源','论坛','特斯拉']
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