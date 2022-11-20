<template>
  <div>
    <!-- loginInfo is going to pass child component as variable -->
    <main-menu :loginInfo="loginValid"></main-menu>
    <!-- Here I also tried to bind the loginValid variable, so then, after the login is successfull i would change the value to true. So the LI in the header would be different after user logged in. Like Milad asked in the coursework steps 2. and 3. -->
    <div class="container-fluid">
      <!-- before -->
      <!-- <router-view @getUserData="getLoginData(UserData)"></router-view> -->
      <!-- after -->
      <!-- when you use emit, you dont need to set param -->
      <router-view @getUserData="getLoginData"></router-view>
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
  // you dont need to set props, props is for child to recieve data from parent
  // props: ['UserData'],
  data() {
    return {
      // you need to set loginValid to false, so when you login, it will change to true
      loginValid: false,
      // UserData:'',
    }
  },
  methods: {
    getLoginData(UserData, loginValid) {
      // Here I am trying to console log the information of the logged user. I tried to send this info by the LoginPage component in the doLogin() function. But, as u can see the console log is returning empty.
      // Answer 
      console.log('UserData')
      console.log(UserData)
      // exmaple
      if (loginValid) {
        this.loginValid = true;
        // write your code here when you successed login
        console.log('successed login')
      } else {
        // write your code here when you failed login
        console.log('failed login')
      }

      // this.UserData = UserData;
    }
  }
}
</script>

<style>

</style>
