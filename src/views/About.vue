<template>
  <div class="about">
    <h2>About num:{{$store.getters.getNum}}</h2>
  </div>
</template>

<script>
export default {
  computed:{
    num(){
      return this.$store.state.num
    }

  }
}
</script>
