<template>
    <div id="trending">
        <input v-model="itemToAdd" type="text" @keyup.enter="addTrending" class="add-input" title="trending-word"> <span class="add-btn"  @click="addTrending">添加</span>
        <ul class="trending-ul">
            <li  v-for="(item,index) in trendingItems">
                <span class="sort-icon-box"><span v-show="isNotFist(item,index)" @click="upTrending(item,index)">上移</span></span>
                <span class="sort-icon-box"><span v-show="isNotLast(item,index)"  @click="downTrending(item,index)">下移</span></span>
                <span class="trending-item">{{ item }} </span>
                <span class="delete-item"  @click="removeTrending(item)">删除</span>
            </li>
        </ul>

    </div>
</template>
<script>
    import Vue from 'vue';
    import cuteDialog from './dialog/dialog';
    export default {
        name:'trending',
        data:function () {
            return {
                trendingItems:this.getTrending(),
                itemToAdd:''
            };
        },
        methods:{
            getTrending:function () {
                if(this.defaultData){
                    var defaultData = JSON.stringify(this.defaultData);
                }
                var trending = localStorage.getItem(this.type) || defaultData || '[]';
                return JSON.parse(trending);
            },
            addTrending:function () {
                if(!this.itemToAdd || !this.itemToAdd.trim()){
                    return cuteDialog.open({
                        message:'不能为空'
                    });
                };
                if(this.trendingItems.length>5){
                    return cuteDialog.open({
                        message:'不能多于5个搜索热词'
                    });
                };
                if(this.trendingItems.indexOf(this.itemToAdd)>=0){
                    return cuteDialog.open({
                        message:'该词已存在'
                    });
                }
                this.trendingItems.push(this.itemToAdd);
                this.itemToAdd = '';
            },
            removeTrending:function (item) {
                var self = this;
                if(this.trendingItems.length <= 3){
                    return cuteDialog.open({
                        message:'不能少于3个搜索热词'
                    });
                };
                cuteDialog.open({
                    message:'确定删除吗？',
                    type:'comfirm',
                    cancelCallback:function () {
                    },
                    comfirmCallback:function () {
                        self.trendingItems.splice(self.trendingItems.indexOf(item),1);
                    }
                });
                //this.trendingItems.splice(this.trendingItems.indexOf(item),1);
            },
            isNotFist:function (item,index) {
                return index !== 0
            },
            isNotLast:function (item,index) {
                return index !== (this.trendingItems.length -1)
            },
            upTrending:function (item,index) {
                this.trendingItems.splice(index,1);
                this.trendingItems.splice(index-1,0,item);
            },
            downTrending:function (item,index) {
                this.trendingItems.splice(index,1);
                this.trendingItems.splice(index+1,0,item);
            }
        },
        watch:{
            trendingItems:function (){
                localStorage.setItem(this.type,JSON.stringify(this.trendingItems))
            }
        },
        props: ['type','defaultData']
        ,
        components:{
            cuteDialog
        }
    }
</script>
<style scoped>
    #trending{
        width: 300px;
        text-align: left;
    }
    .sort-icon-box{
        display: inline-block;
        width: 40px;
        height: 20px;
        line-height: 20px;
        cursor: pointer;
    }
    .trending-item{
        display: inline-block;
        width: 130px;
        margin-left: 10px;
    }
    .delete-item{
        cursor: pointer;
    }
    .add-btn{
        cursor: pointer;
        display: inline-block;
        width: 50px;
        height: 32px;
        line-height: 32px;
        background: #42b983;
        color: #fff;
        border-radius: 4px;
        text-align: center;
        margin-left: 10px;
        vertical-align: top;
    }
    .add-input{
        /*height: 25px;*/
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        vertical-align: top;
        padding: 7px 8px;
        outline: none;
        box-sizing: border-box;
        font-size: 14px;
    }
    .trending-ul{
        margin-top: 10px;

    }
</style>