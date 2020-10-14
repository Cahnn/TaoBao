<template>
  <div id="app">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
      <div id="to_Top">
          <img src="./assets/toTop.png" width="40" height="25">
          <p>顶部</p>
      </div>
    <div id="footer">
      <div><router-link to="/HelloWorld">首页</router-link></div>
      <div><router-link to="/shopCart">购物车</router-link></div>
      <div><router-link to="/orderList">订单列表</router-link></div>
      <div><router-link to="/mine">我的淘宝</router-link></div>
      <div><router-link to="/more">更多</router-link></div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    mounted() {
        let toTop = document.getElementById("to_Top");
          window.onload = function(){
              let timer = null;
              toTop.style.display = "none"
              toTop.onclick = function(){
                  timer = setInterval(function () {
                      let backTop = document.documentElement.scrollTop || document.body.scrollTop;
                      let speedTop = backTop/7;
                      document.documentElement.scrollTop = backTop-speedTop;
                      if (backTop == 0){
                          clearInterval(timer)
                      }
                  },30)
              }
          }
      // 设置临界点
        let pageHeight = 300;
        // 按键是否显示功能
        window.onscroll = function () {
            let backTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (backTop > pageHeight){
                toTop.style.display = "block"
            }else{
                toTop.style.display = "none"
            }
        }
    }
}
</script>

<style>
  body{
    margin: 0;
    border: 0;
    padding: 0;
    background-color: rgb(244,244,244);
  }
  #to_Top{
      position: fixed;
      height: 50px;
      width: 40px;
      bottom: 60px;
      right: 10px;
      background-color: rgb(155,155,155);
      border-radius: 50%;
  }
  #to_Top p{
      font-size: 12px;
      margin: -3px 0 0 7px;
      color: white;
  }
  #footer{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    z-index: 100;
    background-color: white;
      border-top: 1px solid rgb(244,244,244);
  }
  #footer div{
    font-size: 12px;
    width: 20%;
    height: 50px;
    display: inline-block;
    line-height: 50px;
    text-align: center;
  }
  a{
      color: #000000;
      text-decoration: none;
  }
  .router-link-active{
      color:rgb(255,78,34);
  }
</style>
