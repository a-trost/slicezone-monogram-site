<template>
  <article class="font-sans text-black">
    <figure
      class="relative w-full group max-h-[440px] overflow-hidden flex items-center"
    >
      <prismic-image
        class="absolute inset-0 z-10 object-cover w-full h-full max-h-full transition-opacity duration-500 group-hover:opacity-0"
        :field="product.image"
      />
      <prismic-image
        class="block object-cover w-full h-full max-h-full"
        :field="product.hoverImage"
      />
    </figure>
    <div class="flex justify-between mt-2">
      <h3 class="text-xl font-semibold tracking-wider uppercase">
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