<template>
  <div>
    <h1>我是商城</h1>
    <button @click="linkToMyhome">linkToMyhome</button>
  </div>
</template>

<script>
export default {
    name:'MyShop',
    methods:{ 
      linkToMyhome(){
        this.$router.push('/MyHome')
      }
    }
}
</script>

<style>

</style>

