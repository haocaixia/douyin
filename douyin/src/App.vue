<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
  html,body,#app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* background-image: url('../static/banner.png'); */
   /* background-size:100% 70%;
  background-repeat:no-repeat; */
  background-color: #000;
  }
</style>
