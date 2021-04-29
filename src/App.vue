<template>
  <div id="app">
    <router-view/>
    <home></home>
    <about></about>
    <btn></btn>
  </div>
</template>

<style>

</style>

<script>
import Home from "@/views/Home";
import About from "@/views/About"
import Btn from "@/views/Btn"
export default {
  components:{
    Home,
    About,
    Btn
  }

};
</script>