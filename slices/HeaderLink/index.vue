<template>
  <li class="flex font-sans text-xs tracking-widest uppercase">
    <PrismicLink :field="slice.primary.link">{{
      slice.primary.label
    }}</PrismicLink>
  </li>
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
