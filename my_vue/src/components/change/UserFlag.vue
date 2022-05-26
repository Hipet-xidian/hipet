<template>
   <div class="user">
        <div class="circle"></div>
        <img src="@/assets/images/dog2.png" alt="">
        <h2>HiPet User</h2>
        <a>@{{nowUser}}</a>
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
            width: 1.2rem;
            height: 1rem;
            border-radius: 50%;
            top: 1.1rem;
            left: 0.7rem;
            z-index: 9;
        }
        img{
            margin-top: 0.8rem;
            position: relative;
            width: 1.8rem;
            z-index: 99;
        }
        h2{
            position: absolute;
            top: 1.3rem;
            left: 2.3rem;
            font-size: 0.3rem;
        }
        a{
            position: absolute;
            top: 1.7rem;
            left: 2.3rem;
            z-index: 99;
        }
    }
</style>