<script setup>
  import { useRoute } from "vue-router";

  const route = useRoute();

  const userName = route.params.name;
  console.log(route.params);
</script>

<template>
  <main>
    <h1>{{ userName }}</h1>
  </main>
</template>
