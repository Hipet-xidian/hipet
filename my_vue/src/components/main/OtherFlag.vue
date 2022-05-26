<template>
   <div class="user">
        <div class="circle"></div>
        <img src="@/assets/images/dog2.png" alt="">
        <h2>HiPet_User</h2>
        <a>@hipet_user</a>
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

    },
}
</script>

<style lang="less" scoped>
.user{
        
        margin-left: 0.4rem;
        .circle{
            position: absolute;
            background-color: rgb(187, 101, 249);
            width: 1rem;
            height: 0.8rem;
            border-radius: 50%;
            top: 1rem;
            left: 0.6rem;
            z-index: 9;
        }
        img{
            margin-top: 0.8rem;
            position: relative;
            width: 1.4rem;
            z-index: 99;
        }
        h2{
            position: absolute;
            top: 1rem;
            left: 1.8rem;
            font-size: 0.3rem;
        }
        a{
            position: absolute;
            top: 1.4rem;
            left: 1.8rem;
            z-index: 99;
        }
    }
</style>