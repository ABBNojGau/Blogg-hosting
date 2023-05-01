<script setup>
import { convertDate } from "~/utils";
</script>

<template>
  <main
    class="relative mx-auto w-full md:w-2/3 overflow-hidden bg-white py-16 px-4 sm:px-6 lg:px-8 rounded-2xl"
  >
    <Nuxt-link class="block cursor-pointer" href="/blog">
      <div class="flex flex-row items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        <p class="text2 text-xl">Back</p>
      </div></Nuxt-link
    ><ContentDoc v-slot="{ doc }">
      <div class="flex justify-between items-center">
        <h2 class="text2 my-4 text-6xl font-semibold">{{ doc.title }}</h2>
        <div class="flex text text-2xl flex-row items-center">
          <p class="mr-1">{{ doc.rating }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 fill-yellow-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </div>
      </div>
      <p class="text2 text-lg my-4 text-gray-500">
        by, {{ doc.author }}, {{ convertDate(doc.date) }}
      </p>
      <div class="prose prose-lg text2 sm:text-l 2xl:text-2xl">
        <ContentRenderer :value="doc" />
      </div>
      <img
        :src="doc.img"
        class="w-full border-4 border-gray-300 mt-12 rounded-2xl"
    /></ContentDoc>
  </main>
</template>

<style>
.text2 {
  font-family: "Times New Roman", Times, serif;
}

h1 {
  font-size: 2em;
  font-weight: bold;
  margin-top: 0.7em;
  margin-bottom: 0.4em;
}

h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 1em;
  margin-bottom: 0.4em;
}

h3 {
  font-size: 1.17em;
  font-weight: bold;
  margin-top: 0.5em;
  margin-bottom: 0.4em;
}
</style>
