<template>
  <main class="bg-[#e6f4ff]">
    <div class="flex justify-between">
      <div
        class="h-26 ml-12 2xl:ml-20 text mt-6 2xl:mt-12 md:mt-6 text-4xl 2xl:text-7xl"
      >
        <p>Soups</p>
        <span class="mt-2 Line flex w-full"></span>
      </div>
      <div class="text flex flex-col justify-end mr-12 text-lg">
        <p>All soups are listed A-Z</p>
        <p>Use Ctrl + F to search</p>
      </div>
    </div>
    <div
      class="grid ml-3 mr-3 mt-6 gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 text"
    >
      <ContentList path="/blog" v-slot="{ list }">
        <div
          v-for="article in list"
          :key="article._path"
          class="flex flex-col bg-white justify-between rounded-2xl border-2 border-gray-300 p-4"
        >
          <NuxtLink :href="article._path">
            <div class="flex flex-row justify-between">
              <p class="text-xl text-gray-900">{{ article.title }}</p>
              <div class="flex flex-row items-center">
                <p class="text-xl text-gray-900 mr-2">{{ article.rating }}</p>
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
            <p class="mt-3 text-gray-500">{{ article.description }}</p>

            <div class="rounded-2xl mt-4 object-cover max-w-xs">
              <img
                class="h-40 border-2 border-gray-300 rounded-2xl object-cover"
                :src="article.img"
              />
            </div>
          </NuxtLink>
          <div class="mt-4">
            <p class="text-sm font-medium text-gray-900">
              {{ article.author }}
            </p>
            <div class="text-sm text-gray-500">
              <time datetime="2020-03-16">
                {{ convertDate(article.date) }}</time
              >
            </div>
          </div>
        </div>
      </ContentList>
    </div>
  </main>
</template>

<script setup>
import { convertDate } from "~/utils";
</script>

<style>
.cover {
  width: 100%;
  height: 86vh;
}
.text {
  color: #555456;
  font-family: "Times New Roman", Times, serif;
}

.Line {
  border-bottom: 2px solid #797d82;
  display: block;
}
</style>
