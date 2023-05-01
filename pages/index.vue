<template>
  <main class="cover flex flex-col md:flex-row md:justify-evenly">
    <div
      class="w-full md:w-1/3 h-1/3 md:h-full flex whitespace-pre-line flex-col ml-2 md:ml-0"
    >
      <div class="text mt-6 md:mt-28 text-5xl">The best ratings</div>
      <div class="text mt-2 md:mt-2 text-3xl">Cook with confidence</div>
      <div class="text mt-6 md:mt-5 text-l">
        Välkommen till Soup Cooking! Oavsett om du älskar soppa eller bara letar
        efter något nytt att prova, har vi allt du behöver. Bläddra igenom vår
        omfattande samling av betyg och recensioner för alla typer av soppor,
        från klassisk kycklingnudel till exotisk pho. Börja utforksa nu och
        hitta din favorit soppa!
      </div>
      <div></div>
    </div>
    <div
      class="w-full md:w-1/2 h-1/2 md:h-full flex justify-center md:justify-start mt-24 md:mt-0"
    >
      <img src="~/assets/images/sup.png" />
    </div>
  </main>
</template>

<script setup></script>

<style>
.cover {
  width: 100%;
  height: 86vh;
}

.text {
  color: #555456;
  font-family: "Times New Roman", Times, serif;
}
</style>
