<template>
  <h1>Hello</h1>
  <vMainWrapper />
</template>

<script>
import vMainWrapper from "./components/v-main-wrapper.vue";
export default {
  name: "app",
  components: {
    vMainWrapper,
  },
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
