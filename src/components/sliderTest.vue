<template>
    <div id="slider">
        <div class="wrap">
            <ul class="list">
                <li class="item" v-for="(item,index) in sliders" :key="index">
                    <img :src="item.img" width="100%" height="170">
                </li>
            </ul>
            <ul class="pointList">
                <li class="point" data-index="0"></li>
                <li class="point" data-index="1"></li>
                <li class="point" data-index="2"></li>
                <li class="point" data-index="3"></li>
                <li class="point" data-index="4"></li>
            </ul>
            <button type="button" class="btn" id="goPre">&lt;</button>
            <button type="button" class="btn" id="goNext">&gt;</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"slider",
        data () {
            return {
                sliders:[
                    {
                        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4115568648,74521586&fm=26&gp=0.jpg'
                    },
                    {
                        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2336473007,415896746&fm=26&gp=0.jpg'
                    },
                    {
                        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=847712841,4096854037&fm=26&gp=0.jpg'
                    },
                    {
                        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=778417753,1446319938&fm=26&gp=0.jpg'
                    },
                    {
                        img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2911698563,2995887221&fm=26&gp=0.jpg'
                    },
                ]
            }
        },
        methods:{
        },
        mounted() {
            let currentIndex = 0;    // 表示第几张图片在展示（意味着第currentIndex张图片有active类名）
            let items = document.getElementsByClassName("item");
            // let wrapBox = document.getElementsByClassName("wrap")
            let goPreBtn = document.getElementById("goPre");
            let goNextBtn = document.getElementById("goNext");
            let points = document.getElementsByClassName("point")  // 获取点
            let time = 0;

            // 清除不是当前图片及点的active类名
            let clearActive = function(){
                for (let i=0;i<items.length;i++){
                    items[i].className = "item"
                }
                for (let i=0;i<points.length;i++){
                    points[i].className = "point"
                }
            }

            // 跟随currentIndex变化赋类名
            let goIndex = function(){
                clearActive()
                points[currentIndex].className = 'point active'
                items[currentIndex].className = 'item active'
            }
            goIndex()

            let goNext = function(){
                if(currentIndex < 4){
                    currentIndex ++
                }else{
                    currentIndex = 0
                }
                goIndex()
            }

            let goPre = function(){
                if(currentIndex > 0){
                    currentIndex --;
                }else{
                    currentIndex = 4
                }
                console.log(currentIndex)
                goIndex()
            }

            goNextBtn.addEventListener('click',function () {
                goNext()
            })

            goPreBtn.addEventListener('click',function () {
                goPre()
            })

            for (let i=0;i<points.length;i++){
                points[i].addEventListener('click',function(){
                    // getAttribute()  获取标签属性
                    let pointIndex = this.getAttribute('data-index')
                    currentIndex = pointIndex;
                    goIndex()
                    time = 0
                })
            }

            // 间隔3000ms跳转一次

            setInterval(function () {
                time ++;
                if(time == 30){
                    goNext()
                    time = 0
                }
            },100)

            // wrapBox.onMouseEnter = function(){
            //     clearInterval(timer)
            // }
            // wrapBox.onMouseleave =  function(){
            //     goNext()
            // }
        }
    }
</script>

<style scoped>
    .wrap{
        width: 100%;
        height: 170px;
        position: relative;
    }
    .list{
        width: 100%;
        height: 170px;
        list-style: none;
        position: relative;
        margin: 40px 0 0 0;
        padding: 0;
    }
    .item{
        width: 100%;
        height: 100%;
        position: absolute;
        /*设置不透明级别，0.0（完全透明）-》1.1（完全不透明）*/
        opacity: 0;
        /*从透明到不透明的过渡*/
        transition: all .5s;
    }
    .item:first-child.active{
        z-index: 99;
        opacity: 1;
    }
    button{
        background-color: rgba(0,0,0,0.3);
        border-radius: 50%;
        color: rgba(255,255,255,0.7);
        border: 0;
        font-size: 20px;
        outline: none;
    }
    .btn{
        width: 38px;
        height: 38px;
        position: absolute;
        top: 65px;
        z-index: 99;
    }
    #goPre{
        left: 5px;
    }
    #goNext{
        right: 5px;
    }
    .item.active{
        z-index: 98;
        opacity: 1;
    }
    .pointList{
        padding: 0;
        list-style: none;
        position: absolute;
        left: 38%;
        bottom: 3px;
        z-index: 99;
    }
    .point{
        width: 8px;
        height: 8px;
        background-color: rgb(255,255,255);
        border-radius: 100px;
        float: left;
        margin-right: 15px;
        cursor: pointer;
    }
    .point.active{
        background-color: rgb(255,133,42);
    }
    .point:first-child.active{
        background-color: rgb(255,133,42);
    }
</style>
