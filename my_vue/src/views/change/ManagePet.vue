<template>
  <div class="all">
     <router-link to="/HomePage">
            <div class="return">返回</div>
        </router-link>
      <user-flag></user-flag>
      <pet-bottom></pet-bottom>
      <div class="word">Manage Pets</div>
  </div>
</template>

<script>
import PetBottom from '../../components/change/PetBottom.vue'
import UserFlag from '../../components/change/UserFlag.vue'
export default {
    name:'ManagePet',
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
</style>