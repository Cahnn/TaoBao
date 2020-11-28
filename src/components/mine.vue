<template>
    <div id="mine">
        <div id="header">
            <div class="top">
                <div class="left">
                    <div></div>
                    <span>汤惠姗</span>
                </div>
                <div class="right">
                    <span>用户</span>
                    <span>设置</span>
                </div>
            </div>
            <div class="bottom">
                <div>
                    <p>56</p>
                    <p>收藏夹</p>
                </div>
                <div>
                    <p>32</p>
                    <p>关注店铺</p>
                </div>
                <div>
                    <p>203</p>
                    <p>足迹</p>
                </div>
                <div>
                    <p>6</p>
                    <p>红包卡券</p>
                </div>
            </div>
        </div>
        <div id="order">
            <div class="title">
                <div>我的订单</div>
                <div><a>查看全部订单 ></a></div>
            </div>
            <div class="info-wrapper">
                <div class="info-main">
                    <div class="info-item">
                        <a href="#">
                            <div class="icon-1"></div>
                            <span>待付款</span>
                        </a>
                    </div>
                    <div class="info-item">
                        <a href="#">
                            <div class="icon-2"></div>
                            <span>待发货</span>
                        </a>
                    </div>
                    <div class="info-item">
                        <a href="#">
                            <div class="icon-3"></div>
                            <span>待收货</span>
                        </a>
                    </div>
                    <div class="info-item">
                        <a href="#">
                            <div class="icon-4"></div>
                            <span>评价</span>
                        </a>
                    </div>
                    <div class="info-item">
                        <a href="#">
                            <div class="icon-5"></div>
                            <span>退款/售后</span>
                        </a>
                    </div>
                </div>
                <div class="logistics">
                    <div>无最新物流</div>
                </div>
            </div>
        </div>
        <div id="tool-wrapper">
            <div>
                <div class="title">
                    <div>必备工具</div>
                    <div><a>查看全部工具 ></a></div>
                </div>
                <div class="tool">
                    <div class="tool-item" v-for="(item,index) in tool" :key="index">
                        <img :src="item.icon" width="32" height="32">
                        <p class="tool-title">{{item.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mine",
        data() {
            return {
                tool: [
                    {
                        icon: 'https://gw.alicdn.com/tfs/TB1Jcbkj4D1gK0jSZFsXXbldVXa-96-96.png_70x70q90_.webp',
                        title: '每日返现'
                    },
                    {
                        icon: 'https://gw.alicdn.com/tfs/TB1zT0hkkT2gK0jSZPcXXcKkpXa-96-96.png_70x70q90_.webp',
                        title: '领券中心'
                    },
                    {
                        icon: 'https://gw.alicdn.com/tfs/TB14QMupYj1gK0jSZFuXXcrHpXa-96-96.png_70x70q90_.webp',
                        title: '闲置换钱'
                    },
                    {
                        icon: 'https://gw.alicdn.com/tfs/TB1csUri13tHKVjSZSgXXX4QFXa-96-96.png_70x70q90_.webp',
                        title: '客服小蜜'
                    },
                    {
                        icon: 'https://gw.alicdn.com/tps/TB1rhCFPXXXXXa1XVXXXXXXXXXX-96-96.png_70x70q90_.webp',
                        title: '花呗'
                    },
                    {
                        icon: 'https://gw.alicdn.com/tfs/TB1S6oYmQL0gK0jSZFxXXXWHVXa-96-96.png_70x70q90_.webp',
                        title: '我的快递'
                    },
                    {
                        icon: 'https://gw.alicdn.com/tps/TB1RN1QPXXXXXaqXFXXXXXXXXXX-96-96.png_70x70q90_.webp',
                        title: '我的评价'
                    },
                    {
                        icon: 'https://gw.alicdn.com/tfs/TB1q0T8mpOWBuNjy0FiXXXFxVXa-96-96.png_70x70q90_.webp',
                        title: '主题换肤'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #header{
        width: 100%;
        height: 186px;
        background-color: rgb(255,78,34);
    }
    .top.bottom{
        width: 100%;
        height: 100px;
    }
    .left{
        width: 150px;
        height: 100px;
        float: left;
        position: relative;
    }
    .left div{
        width: 60px;
        height: 60px;
        border-radius: 30px;
        border: 1px solid #ffffff;
        background-image: url("https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2271338977,1611087163&fm=26&gp=0.jpg");
        background-size: 62px 62px;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 3px;
        left: 30px;
    }
    .left span{
        font-size: 18px;
        font-weight: 700;
        color: #ffffff;
        position: absolute;
        top: 33px;
        right: 0;
    }
    .right{
        width: 160px;
        height: 70px;
        float: right;
        color: white;
        margin-top: 30px;
    }
    .right span:first-child{
        margin-left: 40px;
    }
    .right span{
        font-size: 18px;
        margin-right: 20px;
    }
    .right span:hover{
        cursor: pointer;
    }
    .bottom{
        clear: both;
    }
    .bottom div{
        width: 25%;
        height: 100px;
        display: inline-block;
        text-align: center;
        color: white;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }
    .bottom div p{
        margin: 12px 0 0 0;
    }
    #order{
        background-color: white;
        width: 95%;
        height: 170px;
        margin: 10px auto 20px auto;
        border-radius: 14px;
    }
    .title{
        width: 94%;
        margin: 0 auto;
        height: 45px;
        border-bottom: 1px solid #F6F6F6;
    }
    .title div:first-child{
        width: 30%;
        display: inline-block;
        /*margin-left: 20px;*/
        margin-top: 11px;
        font-size: 20px;
        font-weight: 500;
    }
    .title a{
        color: #999999;
    }
    .title div:last-child{
        margin-top: 11px;
        width: 35%;
        display: inline-block;
        float: right;
    }
    .info-wrapper{
        width: 100%;
        height: 50px;
        margin-top: 5px;
    }
    .info-main{
        width: 90%;
        /*height: 80px;*/
        margin: 0 auto;
    }
    .info-item{
        width: 20%;
        display: inline-block;
    }
    .info-item span{
        text-overflow: clip;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
    }
    .icon-1{
        width: 29px;
        height: 29px;
        background-image: url("https://gw.alicdn.com/tfs/TB135Ipp.H1gK0jSZSyXXXtlpXa-87-87.png_60x60q90_.webp");
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 29px 29px;
    }
    .icon-2{
        width: 29px;
        height: 29px;
        background-image: url("https://gw.alicdn.com/tfs/TB1DdAqp.Y1gK0jSZFMXXaWcVXa-87-87.png_60x60q90_.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 29px 29px;
    }
    .icon-3{
        width: 29px;
        height: 29px;
        background-image: url("https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 29px 29px;
    }
    .icon-4{
        width: 29px;
        height: 29px;
        background-image: url("https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 29px 29px;
    }
    .icon-5{
        width: 29px;
        height: 29px;
        background-image: url("https://gw.alicdn.com/tfs/TB1fMzgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 29px 29px;
    }
    .logistics{
        width: 90%;
        margin: 10px auto;
        background: #F6F6F6;
        height: 40px;
        border-radius: 10px;
    }
    .logistics div{
        line-height: 40px;
        color: #999999;
        margin-left: 10px;
    }
    #tool-wrapper{
        background-color: white;
        width: 95%;
        height: 200px;
        margin: 10px auto 20px auto;
        border-radius: 14px;
    }
    .tool{
        width: 94%;
        margin: 0 auto;
    }
    .tool-item{
        width: 25%;
        display: inline-block;
        text-align: center;
        margin-top: 7px;
    }
    .tool-title{
        margin: 5px 0 5px 0;
        font-size: 12px;
    }
</style>

