import Vue from 'vue'
import VueRouter from 'vue-router'
import PetHome from '../views/Home/PetHome'
import LoginPage from '../views/login/LoginPage'
import RegisterPage from '../views/register/RegisterPage'
import HomePage from '../views/change/HomePage'
import AddPet from '../views/change/AddPet'
import SocialPage from '../views/social/SocialPage'
import MainPage from '../views/main/MainPage'
import PublishPage from '../views/publish/PublishPage'
import UserPage from '../views/user/UserPage'
import ManagePet from '../views/change/ManagePet'
import PetInfo from '../views/change/PetInfo'
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name:'PetHome',
        component: PetHome,
    },
    {
        path: '/LoginPage',
        name:'LoginPage',
        component: LoginPage,
    }, 
    {
        path: '/RegisterPage',
        name:'Register',
        component: RegisterPage,
    }, 
    {
        path: '/HomePage',
        name:'HomePage',
        component: HomePage,
    }, 
    {
        path: '/AddPet',
        name:'AddPet',
        component: AddPet,
    }, 
    {
        path: '/SocialPage',
        name:'SocialPage',
        component: SocialPage,
    }, 
    {
        path: '/MainPage',
        name:'MainPage',
        component: MainPage,
    }, 
    {
        path: '/PublishPage',
        name:'PublishPage',
        component: PublishPage,
    }, 
    {
        path: '/UserPage',
        name:'UserPage',
        component: UserPage,
    }, 
    {
        path: '/ManagePet',
        name:'ManagePet',
        component: ManagePet,
    }, 
    {
        path: '/PetInfo',
        name:'PetInfo',
        component: PetInfo,
    }
]

const router = new VueRouter({
    routes
})

export default router