<template>
  <div class="all">
   <!--  <img id="sally" src="@/assets/images/Sally-4.png" alt=""> -->
    <div class="flag">
      <user-flag></user-flag>
    </div>
    <div class="new">
      <h3>What's new today</h3>
      <div class="list">
        <div class="listWord">1. Go to the VET.</div>
        <div class="listWord">2. Go out for walk 1h.</div>
        <img src="@/assets/images/dog5.png" alt="">
      </div>
     
    </div>
    <div class="post">
      <img src="@/assets/images/Saly-19.png" alt="">
      <h3>What has been posted today by your friends?</h3>
      <div class="list">
        <div class="change">
            <img id="dog1" src="@/assets/images/dog1.jpg" alt="">
            <div class="word">Today we go to see an art exhibit! What a nice day!</div>
            <div class="flag"><other-flag></other-flag></div>
        </div>
      </div>
    </div>
    <main-bottom></main-bottom>
  </div>
  
</template>

<script>
import UserFlag from '@/components/change/UserFlag.vue'
import MainBottom from '@/components/main/MainBottom.vue'
import OtherFlag from '@/components/main/OtherFlag.vue'
export default {
  name:'MainPage',
  components:{
    UserFlag,
    MainBottom,
    OtherFlag,
  }

}
</script>

<style lang="less" scoped>
  .all{
      height: 100%;
      background-color: #f4d67d;
      background-image: url("@/assets/images/Sally-4.png");
      background-size: 7rem 8rem;
      background-position-y: -0.3rem;
      background-repeat: no-repeat;
    }
  .new{
    margin: 0 0.8rem;
    margin-top: -0.2rem;
    .list{
      position: relative;
      margin-top: 0.2rem;
      padding: 0.2rem;
      width: 5.5rem;
      height: 5.5rem;
      background-color: rgba(255,255,255,0.6);
      border-radius: 0.2rem;
      .listWord{
        font-size: 0.3rem;
        font-weight: bold;
        margin: 0.6rem 0;
        text-align: center;
      }
      img{
        width: 1.2rem;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  .post{
    width: 100%;
    height: 10rem;
    background-image: url("@/assets/images/cat1.png"),url("@/assets/images/cat3.png"),url("@/assets/images/cat2.png");
    background-repeat: no-repeat;
    background-size: 2.3rem;
    background-position: 1rem 2.5rem, 3.8rem 4rem, 4rem 6.5rem;
    position: relative;
    img{
      position: absolute;
      width: 2rem;
      left: -0.3rem
    };
    .list{
      position: absolute;
      margin-top: 0.2rem;
      padding: 0.2rem;
      width: 5.5rem;
      height: 5.5rem;
      top: 2rem;
      left: 0.8rem;
      background-color: rgba(255,255,255,0.6);
      border-radius: 0.2rem;
      #dog1{
        position: absolute;
        left: 0.4rem;
        width: 5.1rem;
        height: 2rem;
        border-radius: 0.2rem;
      }
      .word{
        position: absolute;
        top: 2.6rem;
        width: 5rem;
        padding: 0.2rem 0.2rem;
        text-align: center;
        left: 0.2rem;
        height: 3rem;
      }
      .flag{
        position: absolute;
        bottom: 0;
        left:0.8rem;
      }
    }
    h3{
      position: absolute;
      font-size: 0.2rem;
      top: 1rem;
      left: 1.6rem;
    }
  }
</style>