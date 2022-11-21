<template>
  <div>
    <main-menu :loginInfo="loginValid"></main-menu>
    <!-- Here I also tried to bind the loginValid variable, so then, after the login is successfull i would change the value to true. So the LI in the header would be different after user logged in. Like Milad asked in the coursework steps 2. and 3. -->
    <div class="container-fluid">
      <router-view @getUserData="getLoginData" :UserData="UserData" @newCart="updateCart" :cartList="cartList"></router-view>
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
  data(){
    return{
      loginValid:false,
      UserData: '',
      cartList:''
    }
  },
  methods:{
    getLoginData(UserData, loginValid){
      // console.log('UserData: ')
      // console.log(UserData)
      // console.log(loginValid)
      if(loginValid){
        this.loginValid = loginValid;
        this.UserData = UserData;
        
      }else{
        console.log("Failed Login")
      }
    },
    updateCart(newVal){
      this.cartList = newVal
      console.log(this.cartList)
    }
  }
}
</script>

<style>

</style>
