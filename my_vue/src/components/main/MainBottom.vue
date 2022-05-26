<template>
  <div class="bottom">
      <ul>
          <router-link to="/SocialPage">
              <li><img id="first" src="@/assets/images/social.png" alt=""></li>
          </router-link>
            <li><img id="second" src="@/assets/images/Saly-32.png" alt=""></li>
          <router-link to="/PublishPage">
            <li>
                <div class="publish"><img src="@/assets/images/add.png" alt=""></div>
            </li>
          </router-link>
          <router-link to="/HomePage">
            <li><img id="third" src="@/assets/images/dog4.png" alt=""></li>
          </router-link>
          <router-link to="/UserPage">
            <li><img id="last" src="@/assets/images/user.png" alt=""></li>
          </router-link>
      </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.bottom{
    z-index: 999;
    width: 100%;
    height: 1.2rem;
    background-color: white;
    position: fixed;
    bottom: 0;

    ul{ 
        img{
            margin: 0.3rem 0.4rem;
        }
        #first{
            width: 0.6rem;
        }
        #second{
            width:1rem;
            margin: 0.1rem;
            margin-left: 0.2rem;
            margin-right: 0.5rem;
        }
        #third{
            width: 0.9rem;
            margin: 0.1rem 0;
            margin-left: 0.5rem;
        }
        #last{
            width: 0.7rem;
            margin-left: 0.6rem;
        }
        .publish{
            width: 1.2rem;
            height: 0.8rem;
            background-color: rgb(253, 144, 60);
            border-radius: 0.2rem;
            margin-top: 0.2rem;
            position: relative;
            img{
                position: absolute;
                width: 1rem;
                top: -0.4rem;
                left: -0.25rem;
            }
        }
    }
    ul{
        display: flex;
    }
}
</style>