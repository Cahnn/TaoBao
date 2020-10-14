<template>
    <div id="recommend">
        <div class="content">
            <div class="left">
                <p class="ju">聚划算</p>
                <div class="demo">
                    <div class="good" v-for="(good,index) in Juhuasuan" :key="index">
                        <a href="#">
                            <p class="title">{{good.title}}</p>
                            <img class="img" :src="good.img" width="85%" height="90">
                        </a>
                    </div>
                </div>
                <p class="ju">淘抢购</p>
                <div>
                    <div class="good" v-for="(good,index) in Taoqianggou" :key="index">
                        <a href="#">
                            <p class="title">{{good.title}}</p>
                            <img class="img" :src="good.img" width="85%" height="90">
                        </a>
                    </div>
                </div>
                <p class="ju">每日好货</p>
                <div>
                    <div class="good" v-for="(good,index) in Meirihaohuo" :key="index">
                        <a href="#">
                            <p class="title">{{good.title}}</p>
                            <img class="img" :src="good.img" width="85%" height="90">
                        </a>
                    </div>
                </div>
            </div>
            <div class="right">
                <p class="ju">淘宝直播</p>
                <p class="desc">好物传送门</p>
                <div>
                    <div class="good" v-for="(good,index) in Taobaozhibo" :key="index">
                        <a href="#">
                            <img class="img" :src="good" width="85%" height="90">
                        </a>
                    </div>
                </div>
                <p class="ju">有好货</p>
                <p class="desc">全民口碑推荐</p>
                <div>
                    <div class="good" v-for="(good,index) in Youhaohuo" :key="index">
                        <a href="#">
                            <img class="img" :src="good" width="85%" height="90">
                        </a>
                    </div>
                </div>
                <p class="ju">哇哦视频</p>
                <p class="desc">粉丝都爱看</p>
                <div>
                    <div class="good" v-for="(good,index) in Wooshipin" :key="index">
                        <a href="#">
                            <img class="img" :src="good" width="85%" height="90">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"recommend",
        data(){
            return{
                Juhuasuan:[
                    {
                        "title":"品牌折扣",
                        "img":"https://img.alicdn.com/imgextra/i3/2908675478/O1CN011qKy6w1KgYfM45P_!!2908675478.jpg_760x760Q50s50.jpg_.webp"
                    },
                    {
                        "title": "划算好货",
                        "img":"https://img.alicdn.com/imgextra/i4/1864085853/O1CN011t6idTkhbFT5fHW_!!1864085853.jpg_640x640q80_.webp"
                    }
                ],
                Taoqianggou:[
                    {
                        "title":"限时半价",
                        "img":"https://img.alicdn.com/imgextra/i4/2048321993/TB2LZdouXXXXXbiXXXXXXXXXXXX_!!2048321993.jpg_2200x2200Q100s50.jpg_.webp"
                    },
                    {
                        "title": "9.9包邮",
                        "img":"https://img.alicdn.com/imgextra/i2/839670508/O1CN01ipFcnE1FchgRlti7r_!!839670508.jpg_640x640q80_.webp"
                    }
                ],
                Meirihaohuo:[
                    {
                        "title":"挖深藏好店",
                        "img":"https://img.alicdn.com/imgextra/i3/2104447039/O1CN01BCTxy821ruTvfJYBm_!!2104447039.jpg_2200x2200Q100s50.jpg_.webp"
                    },
                    {
                        "title": "划算好货",
                        "img":"https://img.alicdn.com/imgextra/i1/1857527520/O1CN01tVJ8tG25QCuLER1h8_!!1857527520.jpg_640x640q80_.webp"
                    }
                ],
                Taobaozhibo:[
                    "https://img.alicdn.com/imgextra/i4/860493484/TB2lyFdaGm5V1BjSspjXXcGFpXa_!!860493484.jpg_640x640q80_.webp",
                    "https://img.alicdn.com/imgextra/i1/847621211/TB2NB_9dILJ8KJjy0FnXXcFDpXa_!!847621211.jpg_640x640q80_.webp"
                ],
                Youhaohuo:[
                    "https://img.alicdn.com/imgextra/i3/172619986/TB2j6CWsXXXXXaTXXXXXXXXXXXX_!!172619986.jpg_640x640q80_.webp",
                    "https://img.alicdn.com/imgextra/i4/50802221/TB2gWALbF5N.eBjSZFKXXX_QVXa_!!50802221.jpg_640x640q80_.webp"
                ],
                Wooshipin:[
                    "https://img.alicdn.com/imgextra/i3/141845872/O1CN01EXZbcm1tFQG0gkQPC_!!141845872.jpg_640x640q80_.webp",
                    "https://img.alicdn.com/imgextra/i3/421748019/O1CN019lO2dS296kZwR8vr6_!!0-item_pic.jpg_640x640q80_.webp"
                ]
            }
        }
    }
</script>

<style scoped>
    #recommend{
        width: 100%;
        height: 520px;
        background-color: rgb(244,244,244);
    }
    .content{
        width: 92%;
        height: 500px;
        background-color: white;
        margin-left: 4%;
        border-radius: 10px;
        display: flex;
        margin-top: 15px;
    }
    .left{
        width: 50%;
        border-radius: 10px 0 0 10px;
    }
    .left div{
        width: 100%;
        height: 26%;
        display: flex;
    }
    .ju{
        font-size: 17px;
        font-weight: 700;
        margin: 4px 0 4px 6px;
    }
    .good{
        width: 50%;
        height: 90px;
        margin-bottom:  5px;
    }
    .title{
        font-size: 14px;
        font-weight: 700;
        margin: 3px 0 7px 8px;
    }
    .img{
        margin-left: 6px;
    }
    .right{
        flex: 1;
        border-radius: 0 10px 10px 0;
        border-left: 1px solid rgb(248,248,248);
    }
    .right div{
        width: 100%;
        height: 21%;
        display: flex;
    }
    .desc{
        margin: 0 0 7px 8px;
        font-size: 14px;
    }
</style>
