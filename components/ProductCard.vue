<template>
  <article class="font-sans text-black">
    <figure class="w-full">
      <prismic-image class="object-cover w-full" :field="product.image" />
    </figure>
    <div class="flex justify-between mt-2">
      <h3 class="font-semibold text-xl uppercase tracking-wider">
        {{ product.title }}
      </h3>
      <span class="font-light">{{ formattedPrice }}</span>
    </div>
  </article>
</template>


<script>
export default {
  props: { product: { type: Object, required: true } },
  computed: {
    formattedPrice() {
      return `$${this.product.price}.00`
    },
  },
}
</script>