<template>
  <div class="all">
     <router-link to="/HomePage">
            <div class="return">返回</div>
        </router-link>
      <user-flag></user-flag>
      <pet-bottom></pet-bottom>
      <div class="word">Pet Information</div>
      <div class="bottombtn">
            <img src="@/assets/images/dog5.png" alt="">
            <div class="word">
                <a id="pet">PET1:</a>
                <a id="name"> Name  |</a>
                <a id="gender"> Gender |</a>
                <a id="kind"> Kind</a>
             </div>
        </div>
  </div>
</template>

<script>
import PetBottom from '@/components/change/PetBottom.vue'
import UserFlag from '@/components/change/UserFlag.vue'
export default {
    name:'PetInfo',
    components:{
        PetBottom,
        UserFlag,
    },
    methods:{
        go(){
            this.$router.push('/HomePage')
        }
    }
}
</script>

<style lang="less" scoped>
    .all{
        padding: 0;
        margin: 0;
        height: 13rem;
        background-color: #f4d67d;
        
        .word{
            font-size: 0.8rem;
            margin-top: -0.4rem;
            padding-left: 0.6rem;
        }
    }
    .return{
        margin: 0;
        padding: 0.2rem;
        margin-bottom: -0.8rem;
    }
    .bottombtn{
        position: relative;
        height: 1.5rem;
        width: 6.7rem;
        top: 0.6rem;
        left: 0.3rem;
       
        text-align: center;
        line-height: 1rem;
        border-radius: 0.1rem;
        
        img{
            position: absolute;
            width: 1.3rem;
            top: 0.1rem;
            left: 0.35rem;
            z-index: 99;
        }
        .word{
            padding-top: 0.1rem;
            padding-left: 1rem;
            a{
                font-size: 0.3rem;
                font-weight: bold;
            }
        }
    }
</style>