<template>
  <div id="app">
    <router-link to="/MyHome">首页</router-link>
    <router-link to="/MyShop">商城</router-link>
    <button @click="linktoMyHome">首页</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:"App",
  methods:{
    linktoMyHome(){
      this.$router.push('/MyHome')
      console.log(123);
    }
  }
}
</script>

<style>

</style>