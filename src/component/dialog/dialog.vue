<template>
    <div id="cute-dialog" :class="type">

        <div class="cute-dialog-alert"  :class="[isAlert()?'currentType':'']" >
           <div class="text-box" @click="test">
               {{ message }}
           </div>
        </div>

        <div class="cute-dialog-comfirm" :class="[isComfirm()?'currentType':'']">
            <div class="text-box" @click="test()">
                {{ message }}
            </div>
            <div class="comfirm-btn-line">
                <div class="comfirm-btn" @click="comfirmCallback()">确定</div>
                <div  class="comfirm-btn" @click="cancelCallback()">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'dialog',
        data:function () {
            return {
                message:'',
                type:''
            }
        },
        methods:{
            isComfirm:function () {
               return this.type == 'comfirm'
            },
            isAlert:function () {
                return this.type == 'alert'
            },
            close:function () {

            },
            open:function(options){

            },
            test:function () {
                console.log(this.type)
            },
            comfirmCallback:function () {
                
            },
            cancelCallback:function () {
                
            }
        }
    }
</script>
<style>
    *{
        box-sizing: border-box;
    }
    #cute-dialog{
        text-align: center;
    }
    #cute-dialog .cute-dialog-alert,#cute-dialog .cute-dialog-comfirm{
        display: none;
    }
    #cute-dialog .currentType{
        display: inline-block;
    }
    .cute-dialog-alert{
        display: inline-block;
        padding: 20px 30px;
        background: rgba(0,0,0,0.5);
        border-radius: 5px;
        position: fixed;
        width: 150px;
        height: auto;
        margin: auto;
        top:50%;
        left: 0;
        right: 0;
        margin: auto;
        color: #fff;
    }
    #cute-dialog.comfirm{
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.4);
    }
    .cute-dialog-comfirm{
        display: inline-block;
        padding: 20px 30px;
        background: #f3f3f3;
        border-radius: 5px;
        position: fixed;
        width: 250px;
        height: auto;
        padding-bottom: 40px;
        margin: auto;
        top:50%;
        left: 0;
        right: 0;
        margin: auto;
        color: #333;
    }
    .comfirm-btn-line{
        height: 30px;
        line-height: 30px;
        font-size: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid #42b983;
    }
    .comfirm-btn{
        display: inline-block;
        width: 50%;
        font-size: 14px;
        text-align: center;
        color:#42b983 ;
    }
    .comfirm-btn:first-child{
        border-right:  1px solid #42b983 ;
        box-sizing: border-box;
    }
</style>