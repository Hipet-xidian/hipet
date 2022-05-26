<template>
   <div class="user">
        <div class="circle"></div>
        <img src="@/assets/images/dog2.png" alt="">
        <div class="circle2"></div>
        <div class="word"><h2>{{nowUser}}</h2></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nowUser:'',
        };
    },
    mounted() {
        this.nowUser = localStorage.getItem("name");
        console.log(this.nowUser)
    },
}
</script>

<style lang="less" scoped>
.user{
        
        margin-left: 0.4rem;
        .circle{
            position: absolute;
            background-color: rgb(187, 101, 249);
            width: 1.6rem;
            height: 1.4rem;
            border-radius: 50%;
            top: 1rem;
            left: 3rem;
            z-index: 10;
        }
        img{
            margin-top: 0.8rem;
            top:-0.2rem;
            left: 2.55rem;
            position: absolute;
            width:2.5rem;
            z-index: 99;
        }
        .circle2{
            position: absolute;
            background-color: rgba(255, 255, 255,0.2);
            border: 0.02rem solid rgba(255,255,255,0.8);
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            top: 0.65rem;
            left: 2.75rem;
            z-index: 9;
        }
        .word{  
            position: absolute;
            width: 2rem;
            top: 2.8rem;
            left: 2.75rem;
            font-size: 0.3rem;
            text-align: center;
            z-index: 99;
        }
    }
</style>