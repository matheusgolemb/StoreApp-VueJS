<template>
  <div>
    <main-menu></main-menu>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>



</style>
