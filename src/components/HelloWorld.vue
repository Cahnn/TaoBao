<template>
  <div class="hello">
    <header>
      <div id="header">
        <span>淘</span>
        <input type="search" value="寻找宝贝店铺">
      </div>
    </header>
    <slider-test></slider-test>
    <div id="kind">
      <div v-for="(kind,index) in kinds" :key="index">
        <a href="#">
          <img :src="kind.icon" width="60" height="40">
          <p class="name">{{kind.name}}</p>
        </a>
        <a href="#">
          <img :src="kind.icon" width="60" height="40">
          <p class="name">{{kind.name}}</p>
        </a>
      </div>
    </div>
    <recommend></recommend>
    <likely></likely>
<!--    <sliderTest></sliderTest>-->

  </div>
</template>

<script>
  import sliderTest from "./sliderTest"
  // import sliderTest from "./sliderTest"
  import recommend from "./recommend"
  import likely from "./likely"

export default {
  name: 'HelloWorld',
  props: {
    msg: String,

  },
  data(){
    return{
      kinds:[
        {
          name:"天猫新品",icon:"https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
        },
        {
          name:"今日爆款",icon:"https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1"
        },
        {
          name:"天猫国际",icon:"https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1"
        },
        {
          name:"饿了么",icon:"https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1"
        },
        {
          name:"天猫超市",icon:"https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
        },
        {
          name:"充值中心",icon:"https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"
        },
        {
          name:"机票酒店",icon:"https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1"
        },
        {
          name:"金币庄园",icon:"https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1"
        },
        {
          name:"阿里拍卖",icon:"https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"
        },
        {
          name:"淘宝吃货",icon:"https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1"
        }
      ]
    }
  },
  components:{
    sliderTest,
    recommend,
    likely
    // sliderTest
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    list-style: none;
  }
  #header{
    width: 100%;
    height: 40px;
    background-color: rgb(255,133,42);
    text-align: center;
    line-height: 38px;
    color: cornsilk;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }
  #header span{
    font-weight: 700;
    margin-right: 12px;
    font-size: 20px;
  }
  #header input{
    color: cornsilk;
    width: 78%;
    height: 30px;
    text-align: center;
    background: rgb(255,78,34);
    border: 0;
    border-radius: 7px;
  }
  #kind{
    display: flex;
    /*flex-wrap: wrap;*/
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    height: 145px;
    background-color: white;
  }
  a{
    text-decoration: none;
    color: #000000;
    background-color: white;
  }
  #kind div{
    font-size: 12px;
    width: 25%;
    height: 145px;
    text-align: center;
    display: block;
    margin-left: 12px;
  }
  .name{
    margin-top: 0;
  }
  .icon{
    width: 100%;
    height: 70%;
    background-color: white;
  }

</style>
