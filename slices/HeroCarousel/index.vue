<template>
  <section class="flex hero-carousel h-[337px] md:h-[675px]">
    <flicking
      class="z-10 w-full"
      :options="{ gap: 0, circular: true, duration: 1000 }"
      :tag="'div'"
      :viewportTag="'div'"
      :cameraTag="'div'"
      :plugins="plugins"
    >
      <prismic-image
        v-for="(item, index) in slice.items"
        :key="item.image.url + index"
        class="z-10 object-cover w-full h-full"
        :field="item.image"
      />
    </flicking>
  </section>
</template>

<script>
import { Flicking } from '@egjs/vue-flicking'
import { Fade, AutoPlay } from '@egjs/flicking-plugins'
export default {
  components: {
    Flicking,
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data: function () {
    return { plugins: [new AutoPlay(6000, 'NEXT')] }
  },
}
</script>

<style lang="css">
</style>