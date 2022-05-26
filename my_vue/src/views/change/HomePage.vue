<template>
  <div class="all">
        <user-flag></user-flag>
        <div class="midBtn">
            <img src="@/assets/images/dog3.png" alt="">
            <router-link to="/AddPet">
                <home-btn id="left" btntext="Add a Pet"></home-btn>
            </router-link>
            <router-link to="/ManagePet">
                <home-btn id="right" btntext="ManagePets"></home-btn>
            </router-link>
        </div>
        <router-link to="/PetInfo">
            <div class="bottombtn">
                <div class="circle"></div>
                <img src="@/assets/images/dog5.png" alt="">
                <div class="word">
                    <a id="pet">PET1:</a>
                    <a id="name"> Name  |</a>
                    <a id="gender"> Gender |</a>
                    <a id="kind"> Kind</a>
                </div>
            </div>
        </router-link>
        
        <div class="bottom"><pet-bottom></pet-bottom></div>
  </div>
</template>

<script>
import PetBottom from '@/components/change/PetBottom.vue'
import HomeBtn from '@/components/home/HomeBtn.vue'
import UserFlag from '@/components/change/UserFlag.vue'
export default {
    name:'HomePage',
    components:{
        UserFlag,
        PetBottom,
        HomeBtn
    },
}
</script>

<style lang="less" scoped>
    .all{
        padding: 0;
        margin: 0;
        height: 13rem;
        background-color: #f4d67d;
    }
    
    .midBtn{
        img{
            position: relative;
            width: 1.3rem;
            top: -0.8rem;
            left: 3.1rem;
            z-index: 9;
        }
        #left{
            position:absolute;
            top: 2.5rem;
            left: 0.4rem;
            z-index: 99;
        }
        #right{
             position:absolute;
            top: 2.5rem;
            left: 4.1rem;
            z-index: 99;
        }
    }
    .bottombtn{
        position: relative;
        height: 1.5rem;
        width: 6.7rem;
        left: 0.4rem;
        background-color: rgba(255,255,255,.1);
        text-align: center;
        line-height: 1rem;
        border-radius: 0.1rem;
        box-shadow: 0 0.05rem 0.06rem 0.03rem rgba(0, 0, 0, .15);
        .circle{
            position: absolute;
            background-color: rgb(187, 101, 249);
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            top: 0.25rem;
            left: 0.5rem;
            z-index: 9;
        }
        img{
            position: absolute;
            width: 1.3rem;
            top: 0.1rem;
            left: 0.35rem;
            z-index: 99;
        }
        .word{
            padding-top: 0.3rem;
            padding-left: 1.2rem;
            a{
                font-size: 0.35rem;
            }
        }
    }

</style>