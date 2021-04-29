<template>
  <section class="flex hero-carousel">
   <prismic-image class="w-full object-cover" :field="slice.items[0].image" />
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
 @screen md{
  .hero-carousel{
    height: 675px;
  }
 }

   .hero-carousel{
    height: 337px;
  }
</style>