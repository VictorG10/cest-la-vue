<script setup>
  defineProps({
    user: {
      type: Object,
      required: true,
    },
  });
</script>

<template>
<<<<<<< HEAD
  <!-- <li :class="$style['user - card']">{{ user.name }}: {{ user.website }}</li> -->
  <li class="user-card">{{ user.name }}: {{ user.website }}</li>
=======
  <li class="user-card">
    <RouterLink :to="`/user/${user.name}`">
      {{ user.name }}: {{ user.website }}
    </RouterLink>
  </li>
>>>>>>> main
</template>

<style>
  .user-card {
    border: 2px solid black;
    padding: 10px;
  }
</style>
