<script setup>
  defineProps({
    user: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
  <li class="user-card">
    <RouterLink :to="`/user/${user.name}`">
      {{ user.name }}: {{ user.website }}
    </RouterLink>
  </li>
</template>

<style>
  .user-card {
    border: 2px solid black;
    padding: 10px;
  }
</style>
