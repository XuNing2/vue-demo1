<template>
  <div>
    <button @click="$store.commit('increase',1)">
      点击加一
    </button>
    <br/>
    <button @click="$store.commit('increase',2)">
      点击加二
    </button>
    <br/>
    <button @click="$store.dispatch('decreaseAsyn',1)">
      点击一秒后减一
    </button>
  </div>
</template>

<script>


export default {
  name: "Btn",
  methods:{

  }
}
</script>

<style scoped>

</style>