<template>
  <div class="all">
    <div class="top">
      <img src="@/assets/images/dog2.jpg" alt="">
      <user-flag2></user-flag2>
    </div>
    <img src="@/assets/images/Saly-18.png" alt="">
    <user-bottom></user-bottom>
    <ul class="mid">
      <h3>Service</h3>
      <li><user-mid btntext="Terms of Service"></user-mid></li>
      <li><user-mid btntext="Privacy Policy"></user-mid></li>
      <li><user-mid btntext="... ..."></user-mid></li>
      <li><user-mid2 btntext="SIGN OFF"></user-mid2></li>
      <li @click="logOff"><user-mid2 btntext="LOG OFF"></user-mid2></li>
    </ul>
  </div>
</template>

<script>
import UserBottom from '@/components/user/UserBottom.vue'
import UserMid from '@/components/user/UserMid.vue'
import UserMid2 from '@/components/user/UserMid2.vue'
import UserFlag2 from '@/components/user/UseFlag2.vue'
export default {
  name:'UserPage',
  components:{
    UserBottom,
    UserMid,
    UserMid2,
    UserFlag2,
  },
  methods:{
    logOff(){
      this.$router.push('/')
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
    img{
      width: 100%;
      position: relative;
      z-index: 9;
    }
  }
  .top{
    width: 100%;
    height: 3.7rem;
    overflow: hidden;
    box-shadow: 0 0.05rem 0.06rem 0.03rem rgba(0, 0, 0, .2);
    img{
      width: 100%;
      margin-top: -1.1rem; 
    }
  }
  .mid{
    top:4rem;
    position: absolute;
    z-index: 99;
    h3{
      padding-left: 0.6rem;
    }
    li:nth-child(2){
      position: absolute;
      list-style-type: none;
      top: 0.3rem;
      margin: 0.2rem 0.6rem;
    }
    li:nth-child(3){
      position: absolute;
      list-style-type: none;
      top: 1.7rem;
      margin: 0 0.6rem;
    }
    li:nth-child(4){
      position: absolute;
      top: 2.9rem;
      list-style-type: none;
      margin: 0 0.6rem;
    }
    li:nth-child(5){
      position: absolute;
      top: 5.2rem;
      list-style-type: none;
      margin: 0 0.6rem;
    }
    li:nth-child(6){
      position: absolute;
      top: 6.5rem;
      list-style-type: none;
      margin: 0 0.6rem;
    }
  }
</style>