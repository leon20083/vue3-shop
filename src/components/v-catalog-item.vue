<template>
  <div class="v-catalog-item">
    <img :src="require('../assets/images/' + product_data.image)" alt="img" />
    <p>{{ product_data.name }}</p>
    <p>Price : {{ product_data.price }} P</p>
    <button class="btn primary" @click="sentDataToParent">Add to cart</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      title: "v-catalog-item",
    };
  },
  methods: {
    sentDataToParent() {
      this.$emit("sendArticle", this.product_data.article); //передаём родителю параметры через $emit
    },
  },
};
</script>

<style lang="sass">
@import ../assets/styles/variables
.v-catalog-item
  flex-basis: 25%
  box-shadow: 0 0 8px 0
  padding: $padding*2
  margin-bottom: $margin*2
  img
    width: 50%
</style>
