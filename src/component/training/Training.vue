<template>
    <div>
        <div @click = "test" class="com-title">培训资源</div>

        <div style="height: 200px;border: 1px solid #9FC6B4;margin-top: 20px ">这里是其他模块</div>
        <div style="height: 500px;width: 500px;display: inline-block;border: 1px solid #9FC6B4;vertical-align: top;border-top: 0">
            <trending type="training"   :defaultData="defaultData" ></trending>
        </div>
        <div style="height: 500px;width: 500px;display: inline-block;border: 1px solid #9FC6B4;border-top: 0">
            占位
        </div>
    </div>
</template>
<script>
    import Trending from '../Trending.vue';
    export default {
        data: function() {
            return {
                msg: '',
                defaultData:['技术培训','新技术培训','专题培训']
            }
        },
        methods:{
            test:function () {
                console.log(this.$route.path);
                console.log(this.defaultData)
            }
        },
        components:{
            Trending
        }
    }
</script>