<template>
  <div class="all">
      <div class="return" @click="goHome">
          返回
      </div>
      <div class="login">
          <div class="word">LOGIN</div>
          <img src="@/assets/images/dog2.png" alt="">
      </div>
      <div class="frame">
        <div class="toptext">Phone Number</div>
        <div class="field" >
            <input type="text" v-model.trim="number"/>
        </div>
        <div class="toptext">Password Number</div>
        <div class="field" >
            <input type="password" v-model.trim="password"/>
        </div>
      </div>
      <div class="click" @click="handlelogin">
          <click-btn clicktext="LOGIN"></click-btn>
      </div>
  </div>
</template>

<script>

import ClickBtn from '@/components/ClickBtn.vue'

export default {
    
    name: 'LoginPage',
    components:{
        ClickBtn,
    },
    data(){
        return{
            number:"",//姓名，用v-model绑定监听，将输入的字符串赋值给number变量
            password:"",//密码
        };
    },
    methods:{
        goHome(){
            this.$router.push('/')
        },
        handlelogin:function(){
            if(this.number===localStorage['number'] && this.password===localStorage['password']){
                this.$router.replace('/MainPage');//如果输入的名字以及密码正确路由跳转至主页
            } 
            else if(this.number==='')//手机号为空
            {
                alert('手机号不为空');
            }
            else if(this.password==='')//密码为空
            {
                alert('密码不为空');
            }
            else{
                alert('账号不存在，请注册后登录');//查无此号
            }
        },
    }
};
</script>

<style lang="less" scoped>
    
    .all{
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        height: 13rem;
        background-color: white;
    }
    .return{
        margin-top: 0;
        padding-top:0.2rem;
    }
    .login .word{
        float: left;
        margin-top: 0.6rem;
        font-size: 0.8rem;
    }
    .login img{
        float: right;
        width: 2.5rem;
    }
    .frame{
        margin-top: 2.2rem;
        .toptext{
            font-size: 0.3rem;
            font-weight: bold;
        }
        input{
            margin: 0.2rem 0;
            width: 6.2rem;
            height: 0.8rem;
            border: 0.04rem solid;
            border-radius: 0.1rem;
            padding-left: 0.3rem;
        }
    }
    .click{
        margin-top: 0.25rem;
    }
</style>