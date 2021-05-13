<template>
  <header class="fixed top-0 left-0 right-0 z-20 p-4 text-peach">
    <nav class="flex items-center justify-between p-2 bg-navy">
      <Logo />
      <SliceZone
        class="flex gap-8"
        wrapper="ul"
        type="header"
        query-type="single"
      />
    </nav>
  </header>
</template>


<script>
import SliceZone from 'vue-slicezone'
import Logo from '~/components/Logo'
export default {
  components: { SliceZone, Logo },
}
</script>

