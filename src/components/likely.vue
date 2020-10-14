<template>
    <div id="likely">
        <div class="desc"> → 你可能还喜欢 ← </div>
        <div class="like">
            <div class="good" v-for="(good,index) in goods" :key="index">
                <a href="#">
                    <div><img :src="good.img" width="100%" height="170"></div>
                    <p class="info">{{good.info}}</p>
                    <p class="mess"><span class="price">￥{{good.price}}</span><span>{{good.bought}}人已购买</span></p>
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"likely",
        data(){
            return{
                goods:[
                    {
                        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3315900306,584853996&fm=26&gp=0.jpg",
                        info:"小金瓶修复屏障男女补水保湿祛痘淡斑敏感肌肤",
                        price:99,
                        bought:67
                    },
                    {
                        img:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1963846134,4028637823&fm=26&gp=0.jpg",
                        info:"小绿瓶修复屏障男女补水保湿祛痘淡斑敏感肌肤",
                        price:189,
                        bought:44
                    },
                    {
                        img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2335078843,1237302000&fm=26&gp=0.jpg",
                        info:"礼仪迎宾旗袍长款女优雅白色敬酒",
                        price:399,
                        bought:289
                    },
                    {
                        img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3476416118,3262694989&fm=26&gp=0.jpg",
                        info:"花茶天然有机清香浓郁买一送一新品上市",
                        price:59,
                        bought:88
                    },
                    {
                        img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3376984475,3510104290&fm=26&gp=0.jpg",
                        info:"针织长裙一字肩轻熟风修身女黑色",
                        price:109,
                        bought:896
                    },
                    {
                        img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3061044846,1952608672&fm=26&gp=0.jpg",
                        info:"男士外套格子双面休闲保暖连帽",
                        price:299,
                        bought:22
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .desc{
        width: 100%;
        height: 30px;
        text-align: center;
        color: rgb(255,133,42);
    }
    .like{
        width: 92%;
        margin: 0 auto 60px auto;
        display: flex;
        flex-wrap: wrap;
    }
    .good{
        width: 49%;
        height: 250px;
        border-radius: 7px;
        background-color: white;
        margin-left: 1%;
        margin-top: 10px;
    }
    .info{
        font-size: 14px;
        font-weight: 100;
        margin: 8px 3px 7px 7px;
    }
    .mess{
        font-size: 10px;
        font-weight: 100;
    }
    .price{
        font-size: 14px;
        color: rgb(255,133,42);
        margin-left: 7px;
        margin-right: 10px;
    }
</style>
