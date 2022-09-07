<template>
  <div>
    <h1>我是主页</h1>
    <router-link :to="{name:'ChildNews'}">ChildNews</router-link>
    <router-link :to="{name:'ChildMessage'}">ChildMessage</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'MyHome'
}
</script>

<style>

</style>