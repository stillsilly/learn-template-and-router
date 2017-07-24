import Vue from 'vue'
import cuteDialog from './dialog.vue'
export default {
    data:function () {
      return {
          instanceList:[],
         instance:null
      }
    },
    open:function (options) {
        var self = this;
        if(this.instance){
            this.close();
        }
        var DialogConstructor = Vue.extend(cuteDialog);

        if(options.comfirmCallback){
            var _f = options.comfirmCallback;
            options.comfirmCallback = function () {
                _f();
                self.close();
            }
        };
        if(options.cancelCallback){
            var _o = options.cancelCallback;
            options.cancelCallback = function () {
                _o();
                self.close();
            }
        }
        this.instance = new DialogConstructor({
            el: document.createElement('div'),
            data:{
                message:options.message || '',
                type:options.type || 'alert',
                comfirmCallback:options.comfirmCallback || noop,
                cancelCallback:options.cancelCallback || noop
            }
        });
        //instanceList.push(this.instance);
        document.body.appendChild(this.instance.$el);

        if(!options.type || options.type == 'alert'){
            setTimeout(function () {
                self.close();
            },3000);
        };
        
        
        function noop() {
            
        }

    },
    close:function () {
        if(!this.instance){
            return
        };
        document.body.removeChild(this.instance.$el);
        this.instance = null;
    }
}
