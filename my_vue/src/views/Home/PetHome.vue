<template>
    <div class="home">
        <img src="../../assets/images/home.png" height="100%" width="100%" alt="">
        <div class="logo">
            <div class="dog"><img src="../../assets/images/logo.png" alt=""></div>
            <div class="text">HiPet</div>
        </div>
        <div class="loginbtn" @click="goLogin"><home-btn btntext="LOGIN"></home-btn></div>
        <div class="registerbtn" @click="goRegister"><home-btn btntext="REGISTER"></home-btn></div>
        
    </div>
</template>

<script>
import HomeBtn from '@/components/home/HomeBtn.vue'
export default {
    name:'PetHome',
    components:{
        HomeBtn,
    },
    methods:{
        goLogin(){
            this.$router.push('/LoginPage')
        },
        goRegister(){
            this.$router.push('/RegisterPage')
        }
    }
}
</script>

<style scoped>
    img{
        position: absolute;
    }
    .logo{
        position: relative;
    }
    .logo img{
        width: 1rem;
        margin-left: 2rem;
        padding-top: 1.5rem;
    }
    .logo .text{
        font-size: 1rem;
        padding-top: 1.5rem;
        margin-left: 3.3rem;
    }
    .loginbtn{
        margin: 8.3rem 0.5rem;
    }
    .registerbtn{
        margin:8.3rem 4rem;
    }
</style>