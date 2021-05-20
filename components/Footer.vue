<template>
  <footer
    class="p-12 pb-24 mt-20 text-sm font-light leading-loose footer bg-navy text-lightPeach"
  >
    <div
      class="grid max-w-screen-xl grid-cols-3 mx-auto footer-inner md:grid-cols-6"
    >
      <div>
        <p class="heading">Monogram</p>
        <p class="leading-tight">
          305 King St. W. <br />
          Suite 502 <br />
          Kitchener, ON <br />
          Canada
        </p>
      </div>
      <div>
        <p class="heading">Quick Links</p>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Thing</a></li>
          <li><a href="#">Other thing</a></li>
          <li><a href="#">Last thing</a></li>
          <li><a href="#">One More</a></li>
        </ul>
      </div>
      <div>
        <p class="heading">Help</p>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Thing</a></li>
          <li><a href="#">Other thing</a></li>
          <li><a href="#">Last thing</a></li>
          <li><a href="#">One More</a></li>
        </ul>
      </div>
      <div>
        <p class="heading">Information</p>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Thing</a></li>
          <li><a href="#">Other thing</a></li>
          <li><a href="#">Last thing</a></li>
          <li><a href="#">One More</a></li>
        </ul>
      </div>
      <div class="col-span-2">
        <p class="heading">Subscribe to Monogram</p>
        <p>
          Master productivity with Creative Console and get all the latest
          Monogram news.
        </p>
        <form class="flex mt-4">
          <label>
            <span class="sr-only">Email Address</span>
            <input
              placeholder="Email Address"
              type="text"
              class="px-2 py-0.5 mr-2 border bg-navy border-lightPeach outline-none"
            />
          </label>
          <button
            type="submit"
            class="px-6 py-1 text-xs font-bold uppercase rounded-full bg-lightPeach text-navy"
          >
            Submit
          </button>
        </form>
        <div class="flex gap-2 mt-8">
          <a href="#" class="block w-6 h-6 rounded-full bg-lightPeach">T</a
          ><a href="#" class="block w-6 h-6 rounded-full bg-lightPeach">T</a
          ><a href="#" class="block w-6 h-6 rounded-full bg-lightPeach">T</a
          ><a href="#" class="block w-6 h-6 rounded-full bg-lightPeach">T</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.heading {
  @apply text-xs uppercase font-semibold pb-4 tracking-wider;
}
</style>