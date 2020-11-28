<template>
    <div id="shop-cart">
        <div class="bgo">
            <div>
                <p>购物车({{likeGoods.length}})</p>
                <span>共{{likeGoods.length}}件宝贝</span>
            </div>
            <div><a href="#">管理</a></div>
        </div>
        <div class="like-goods">
            <div class="good-item" v-for="(item,index) in likeGoods" :key="index">
                <div class="shop-name">{{item.shopName}}></div>
                <div class="detail-wrapper">
                    <input type="checkbox" class="check" />
                    <div class="img"><img :src="item.img" width="90" height="90"></div>
                    <div class="detail">
                        <p class="item-info">{{item.info}}</p>
                        <select class="select-option">
                            <option v-for="(option,index) in item.type" :key="index">{{option}}</option>
                        </select>
                        <div>
                            <span class="price">￥{{item.price}}</span>
                            <div class="good-num">
                                <button @click="item.num--">-</button>
                                <div>{{item.num}}</div>
                                <button @click="item.num++">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="hint">没有更多宝贝了喔~</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"shop-cart",
        data(){
            return{
                likeGoods:[
                    {
                        shopName:'索尼官方旗舰店',
                        img:'https://img.alicdn.com/imgextra/i1/782731205/O1CN01fwcs1o1Klvtik29mD_!!782731205.jpg_2200x2200Q100s50.jpg_.webp',
                        info:'【官方旗舰】Sony/索尼 ZV-1 Vlog相机Vlog小新机zv1',
                        type:['黑色;套餐一','黑色;套餐二','白色;套餐一','白色;套餐二'],
                        price:5899,
                        num:1
                    },
                    {
                        shopName:'美特斯邦威旗舰店',
                        img:'https://img.alicdn.com/imgextra/i3/3915633659/O1CN01Fd86HQ1ctrmN1hu7j_!!3915633659.jpg_760x760Q50s50.jpg_.webp',
                        info:'美特斯邦威夹克女春装新款休闲时尚短款棒球服外套商场款',
                        type:['黑洞蓝','苔藓绿','桃枝粉',],
                        price:299,
                        num:1
                    },
                    {
                        shopName:'索尼官方旗舰店',
                        img:'https://img.alicdn.com/imgextra/i1/782731205/O1CN01fwcs1o1Klvtik29mD_!!782731205.jpg_2200x2200Q100s50.jpg_.webp',
                        info:'【官方旗舰】Sony/索尼 ZV-1 Vlog相机Vlog小新机zv1',
                        type:['黑色;套餐一','黑色;套餐二','白色;套餐一','白色;套餐二'],
                        price:5899,
                        num:1
                    },
                    {
                        shopName:'优衣库官方旗舰店',
                        img:'https://img.alicdn.com/imgextra/i1/196993935/O1CN01HTSwsw1ewH8MlmTxc_!!0-item_pic.jpg_2200x2200Q100s50.jpg_.webp',
                        info:'优衣库 女装 女式休闲鞋 429000 UNIQLO',
                        type:['01乳白色','09黑色','35浅褐色'],
                        price:99,
                        num:1
                    },
                    {
                        shopName:'索尼官方旗舰店',
                        img:'https://img.alicdn.com/imgextra/i1/782731205/O1CN01fwcs1o1Klvtik29mD_!!782731205.jpg_2200x2200Q100s50.jpg_.webp',
                        info:'【官方旗舰】Sony/索尼 ZV-1 Vlog相机Vlog小新机zv1',
                        type:['黑色;套餐一','黑色;套餐二','白色;套餐一','白色;套餐二'],
                        price:5899,
                        num:1
                    },
                    {
                        shopName:'优衣库官方旗舰店',
                        img:'https://img.alicdn.com/imgextra/i1/196993935/O1CN01HTSwsw1ewH8MlmTxc_!!0-item_pic.jpg_2200x2200Q100s50.jpg_.webp',
                        info:'优衣库 女装 女式休闲鞋 429000 UNIQLO',
                        type:['01乳白色','09黑色','35浅褐色'],
                        price:99,
                        num:1
                    }
                ]
            }
        },
        methods: {
            // decrease(){
            //     const btn = document.getElementById('decrease')
            //     if(this.item.num<0){
            //         btn.disable = true
            //     } else{
            //         this.item.num--
            //     }
            // }
        }
    }
</script>

<style scoped>
    .bgo{
        color: white;
        width: 100%;
        height: 170px;
        background-color: rgb(255,78,34);
        z-index: -1;
    }
    .bgo p{
        margin: 0 0 8px 0;
        font-size: 20px;
        font-weight: 700;
    }
    a{
        color: white;
    }
    .bgo span{
        font-size: 12px;
    }
    .bgo div:first-child{
        padding: 20px 0 0 20px;
        float: left;
    }
    .bgo div:last-child{
        padding: 20px 20px 0 0;
        float: right;
    }
    .like-goods{
        width: 93%;
        margin: -65px auto 80px auto;
    }
    .good-item{
        width: 100%;
        border-radius: 10px;
        background: white;
        margin-bottom: 15px;
    }
    .shop-name{
        font-size: 13px;
        color: #333333;
        height: 40px;
        line-height: 40px;
        margin-left: 10px;
        border-bottom: 1px solid #FFD3B6;
    }
    .detail-wrapper{
        display: flex;
    }
    .img{
        width: 90px;
        height: 90px;
        margin: 10px 10px 10px 10px;
        padding-bottom: 10px;
    }
    .detail{
        flex: 1;
    }
    .check{
        width: 20px;
        height: 20px;
        margin: 40px 0 0 10px;
        background: rgb(255,78,34);
    }
    .item-info{
        font-size: 14px;
        margin: 6px 4px;
    }
    .select-option{
        width: 94px;
        height: 24px;
        font-size: 13px;
        border: none;
        background-color: #F6F6F6;
        margin-left: 4px;
        margin-bottom: 10px;
        outline: none;
    }
    .price{
        color: #FF5500;
        font-size: 14px;
    }
    .good-num{
        display: inline-block;
        float: right;
        margin-right: 22px;
    }
    .good-num button{
        display: inline-block;
        width: 24px;
        height: 24px;
        border: 1px solid #F6F6F6;
        background: none;
        outline: none;
    }
    .good-num div{
        display: inline-block;
        width: 22px;
        height: 22px;
        text-align: center;
        line-height: 21px;
        font-size: 13px;
        border: 1px solid #F6F6F6;
    }
    .hint{
        text-align: center;
        color: #FF5500;
    }
</style>

