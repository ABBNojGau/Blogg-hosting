<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap"
    rel="stylesheet"
  />
  <div class="bg-[#e6f4ff] sm:h-screen">
    <HeaderPart />
    <div class="bg-[#e6f4ff]">
      <slot class="bg-[#e6f4ff]" />
    </div>
  </div>
</template>

<script setup></script>
