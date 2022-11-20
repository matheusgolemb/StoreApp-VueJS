<template>
  <div>
    <main-menu :loginInfo="loginValid"></main-menu>
    <!-- Here I also tried to bind the loginValid variable, so then, after the login is successfull i would change the value to true. So the LI in the header would be different after user logged in. Like Milad asked in the coursework steps 2. and 3. -->
    <div class="container-fluid">
      <router-view @getUserData="getLoginData(UserData)"></router-view>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  },
  props:['UserData'],
  data(){
    return{
      // UserData:'',
    }
  },
  methods:{
    getLoginData(UserData){
      console.log(UserData)
      // Here I am trying to console log the information of the logged user. I tried to send this info by the LoginPage component in the doLogin() function. But, as u can see the console log is returning empty.


      // this.UserData = UserData;
    }
  }
}
</script>

<style>

</style>
