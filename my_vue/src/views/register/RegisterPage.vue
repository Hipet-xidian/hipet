<template>
    <div class="all">
        <div class="return" @click="goHome">
          返回
        </div>
        <div class="login">
            <div class="word">REGISTER</div>
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
            <div class="toptext">Nick Name</div>
            <div class="field" >
                <input type="text" v-model.trim="name"/>
            </div>
        </div>
        <div class="click" @click="handlefinish">
            <click-btn clicktext="REGISTER"></click-btn>
        </div>
        <div class="warn">
            <a>By signing up, agree to HiPet's Terms of Service and Privacy Policy.</a>
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
            name:"",
            password:"",
            number:""
        };
    },
    methods:{
        goHome(){
            this.$router.replace('/');
        },
        //点击完成按钮触发handlefinish
        handlefinish:function(){
            if(localStorage['name']===this.name){
                alert("用户名已存在");//如果用户名已存在则无法注册
            }
            else if(this.name===''){
                alert("用户名不能为空");
            }
            else{//将新用户信息存储到localStorage
                localStorage.setItem('name',this.name);
                localStorage.setItem('password',this.password);
                localStorage.setItem('number',this.number);
                alert("注册成功");
                this.$router.replace('/LoginPage');//完成注册后跳转至登录页面
            }
        }
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
    .warn{
        margin: 0.3rem 0;
        font-size: 0.25rem;
    }
</style>