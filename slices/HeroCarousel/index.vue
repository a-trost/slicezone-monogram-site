<template>
  <section class="flex hero-carousel h-[337px] md:h-[675px]">
    <prismic-image
      class="object-cover w-full h-full"
      :field="slice.items[0].image"
    />
  </section>
</template>

<script>
export default {
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

<style lang="css">
</style>