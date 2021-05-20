<template>
  <li
    class="flex items-center justify-center font-sans text-xs tracking-widest uppercase"
  >
    <PrismicLink
      class="p-2 text-lightPeach hover:text-peach"
      v-if="slice.items.length === 0"
      :field="slice.primary.link"
      >{{ slice.primary.label }}</PrismicLink
    >
    <div data-menu-component v-else>
      <input
        type="checkbox"
        role="button"
        aria-haspopup="true"
        id="toggle"
        class="vh"
      />
      <label
        for="toggle"
        data-opens-menu
        class="p-2 text-lightPeach hover:text-peach"
      >
        {{ slice.primary.label }} ▼
      </label>
      <div role="menu" data-menu-origin="left">
        <ul class="py-2 text-navy bg-offWhite">
          <li
            v-for="item in slice.items"
            :key="item.label"
            class="px-6 py-1 hover:bg-black hover:bg-opacity-30"
          >
            <PrismicLink :field="item.link">{{ item.label }} </PrismicLink>
          </li>
        </ul>
      </div>
    </div>
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

<style scoped>
* {
  font-size: inherit;
  font-family: inherit;
  margin: 0;
}

html {
  font-size: 120%;
  font-family: sans-serif;
  margin: 1rem;
}

.vh {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;
}

[data-menu-component] {
  position: relative;
  display: inline-block;
}

label {
  display: inline-block;
}

[type='checkbox']:focus + [data-opens-menu],
[role='menu'] a:focus {
  outline: none;
  /* background: darkBlue; */
}

:checked + label .expanded-text {
  display: inline;
}

:checked + label .collapsed-text {
  display: none;
}

[type='checkbox']:not(:checked) + label .expanded-text {
  display: none;
}

[type='checkbox']:not(:checked) + label .collapsed-text {
  display: inline;
}

[role='menu'] {
  position: absolute;
  left: 0;
  display: none;
}

:checked ~ [role='menu'] {
  display: block;
}

[data-menu-origin='right'] {
  left: auto;
  right: 0;
}

[role='menu'] a {
  display: block;
  min-width: 100%;
  margin-top: 0.125rem;
  white-space: nowrap;
}
</style>