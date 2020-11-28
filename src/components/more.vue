<template>
    <div id="login">
        <p>！您需要登录才能继续访问</p>
        <div class="img">
            <img src="../assets/tao.jpg" width="100" height="100">
        </div>
        <input type="text" value="手机号/邮箱/会员名"><br>
        <input type="text" value="请输入登录密码"><br>
        <div class="sign"><a  href="#" class="sign_in">短信验证登录</a><a href="#" class="sign_up">免费注册</a></div>
        <button class="login">登录</button>
    </div>
</template>

<script>
    export default {
        name:"login"
    }
</script>

<style scoped>
    #login{
        width: 100%;
        height: 625px;
        text-align: center;
        background-color: white;
    }
    p{
        height: 30px;
        background-color: rgb(244,244,244);
    }
    .img{
        margin-top: 40px;
    }
    input{
        width: 80%;
        height: 50px;
        font-size: 18px;
        color: rgba(0,0,0,0.4);
        outline: none;
        border: 0;
        border-bottom: 1px solid rgb(255,133,42);
        margin-top: 20px;
    }
    .sign{
        width: 100%;
        height: 45px;
        line-height: 45px;
        color: rgba(0,0,0,0.6);
    }
    .sign_in{
        font-size: 14px;
        margin-right: 140px;
    }
    .sign_up{
        font-size: 14px;
    }
    .login{
        width: 80%;
        height: 40px;
        color: white;
        margin-top: 20px;
        background-color: rgb(244,133,42);
        border: 0;
        border-radius: 20px;
        outline: none;
    }
</style>

