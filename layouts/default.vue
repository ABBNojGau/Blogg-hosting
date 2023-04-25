<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap"
    rel="stylesheet"
  />
  <div class="flex justify-between bg-[#e6f4ff]">
    <div class="w-2/3 md:w-1/3">
      <div
        class="bg-transparent h-9 sm:h-11 md:h-11 lg:h-14 xl:h-20 2xl:h-26 flex flex-row items-center mt-0.5 w-full"
      >
        <img
          src="~/assets/images/logo.png"
          class="img h-full ml-5 mr-5 md:ml-8"
        />

        <NuxtLink to="/" class="toolbar-btn mt-5 mr-4 md:mr-8">Home</NuxtLink
        ><NuxtLink to="/soups" class="toolbar-btn mt-5 mr-4 md:mr-8"
          >Soups</NuxtLink
        ><NuxtLink to="/about-us" class="toolbar-btn mt-5 mr-4 md:mr-8"
          >About</NuxtLink
        >
      </div>
    </div>
    <div
      class="h-14 sm:h-24 md:h-20 flex flex-row items-center justify-end bg-transparent md:mt-0.5"
    >
      <button class="big-toolbar-btn mr-2 text-sm md:text-base">Sign in</button
      ><span class="Line flex h-5 md:h-7"></span
      ><button class="big-toolbar-btn mr-4 ml-2 md:mr-14 text-sm md:text-base">
        Register
      </button>
    </div>
  </div>
  <slot />
</template>

<script setup></script>

<style>
.toolbar-btn {
  color: black;
  font-weight: 600;
  height: 50%;
  font-size: 85%;
  color: #797d82;
  font-family: "Oswald", sans-serif;
}

.toolbar-btn:hover {
  text-decoration-line: underline;
}

.big-toolbar-btn {
  color: black;
  font-weight: 600;
  height: 50%;
  color: #797d82;
  font-family: "Oswald", sans-serif;
}

.big-toolbar-btn:hover {
  text-decoration-line: underline;
}

.Line {
  border-left: 2px solid #797d82;
  display: block;
}
</style>
