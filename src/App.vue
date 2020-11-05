<template>
  <div id="app">
    <router-view />
   
  </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "App",
  data() {
    return {
      
    };
  },
};
</script>

<style>
body{
  background: #f9f9f9;

}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
.layout {
  width: 365px;
  margin: 0 auto;
}
img {
  width: 100%;
  height: 100%;
}
.weui-loadmore__tips_in-line {
  font-size: 14px;
  color: #666666;
  line-height: 15px;
  margin: 20px 0 27px;
  text-align: center;
  position: relative;
  bottom: 5px;
}
.van-swipe-item > img {
  border-radius: 10px;
}
</style>
