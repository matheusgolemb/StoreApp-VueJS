<template>
  <div>
    <main-menu :loginInfo="loginValid"></main-menu>
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
      // this.UserData = UserData;
    }
  }
}
</script>

<style>

</style>
