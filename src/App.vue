<template>
  <div id="app">
    <ul class="main-nav">
      <router-link to="/">首页</router-link>
      <router-link to="/article">文章</router-link>
      <router-link to="/industry">行业热点</router-link>
      <router-link to="/training">培训资源</router-link>
      <router-link to="/exhibition">会展资源</router-link>
    </ul>

    <router-view></router-view>

  </div>

</template>

<script>
import Trending from './component/Trending.vue';
export default {
    name: 'app',
    data: function() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods:{
        test:function () {
          console.log(this.$route.path)
        }
    }
}

</script>

<style lang="scss"  >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

html,body{
  width: 100%;
}
html,body,div,p,ul,li{
  margin: 0;
  padding: 0;
}
#app{
  margin-top: 0;
}
  .main-nav{
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #42b983;
  }
.main-nav a{
  width: 15%;
  display: inline-block;
  color: #fff;
}
  .router-link-exact-active{
    background: #36D88E;
  }
  .com-title{
    color: #42b983;
    font-size: 25px;
    letter-spacing:2px;
    height: 30px;
    line-height: 30px;
    margin-top: 20px;
  }
  #trending{
    margin: auto;
    margin-top: 20px;
  }
</style>
