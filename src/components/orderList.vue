<template>
    <div id="order-list">
        <p>这个人很穷，什么也没买过~</p>
        <div class="desc"> → 你可能还喜欢 ← </div>
        <likely></likely>
    </div>
</template>

<script>
    import Likely from "./likely";
    export default {
        name:"order-list",
        components: {Likely}
    }
</script>

<style scoped>
    p{
        font-size: 20px;
        color: #FF5500;
        text-align: center;
        margin-bottom: 20px;
    }
    .desc{
        width: 100%;
        height: 30px;
        text-align: center;
        color: rgb(255,133,42);
    }
</style>

