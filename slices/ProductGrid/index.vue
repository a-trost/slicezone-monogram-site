<template>
  <section class="section max-w-screen-xl mx-auto">
    <prismic-rich-text :field="slice.primary.title" class="sr-only" />
    <ul class="grid gap-10 grid-flow-col grid-cols-3">
      <li class=" " v-for="product in slice.items" :key="product.title">
        <ProductCard :product="product" />
      </li>
    </ul>
  </section>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: { ProductCard },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped>
</style>
