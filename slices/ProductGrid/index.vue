<template>
  <section class="max-w-screen-xl mx-auto section">
    <prismic-rich-text :field="slice.primary.title" class="sr-only" />
    <ul
      class="grid grid-flow-row gap-10"
      :class="{
        'sm:grid-cols-2 grid-cols-1': slice.primary.columns === '2',
        'sm:grid-cols-2 md:grid-cols-3 grid-cols-1':
          slice.primary.columns === '3',
      }"
    >
      <li
        :class="{ 'col-span-full': product.fullWidth }"
        v-for="product in slice.items"
        :key="product.title"
      >
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
