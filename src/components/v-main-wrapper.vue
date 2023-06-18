<template>
  <div class="v-main-wrapper">
    <h2>{{ title }}</h2>
    <vCatalog />
    <!-- <vCard /> -->
  </div>
</template>

<script>
import vCatalog from "./v-catalog.vue";
// import vCard from "./v-card.vue";

export default {
  name: "v-main-wrapper",
  components: {
    vCatalog,
    // vCard,
  },
  props: {},
  data() {
    return {
      title: "v-main-wrapper",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("Hello i m live");
  },
};
</script>

<style lang="sass">
.v-main-wrapper

  max-width: 1000px
  margin: 0 auto
</style>
